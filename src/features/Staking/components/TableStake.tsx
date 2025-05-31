import { useMemo, useState } from "react"
import { useToken } from "@/contexts/tokenContext"
import { env } from "@/env.mjs"
import { api, formatPrice } from "@/utils"
import { Box, Button, Center, Divider, Flex, Group, rem, Text } from "@mantine/core"
import { cleanNotifications, showNotification } from "@mantine/notifications"
import { useWeb3Modal } from "@web3modal/react"
import moment from "moment"
import { nanoid } from "nanoid"
import { useAccount, useNetwork } from "wagmi"

import { useStaking, type IUserStake } from "../hooks/useStaking"

type TableStakeProps = {
  dataSource: IUserStake[]
}

export const TableStake = ({ dataSource }: TableStakeProps) => {
  if (!dataSource.length) {
    return (
      <Center h={rem(150)} fw="bold">
        NO DATA
      </Center>
    )
  }

  return (
    <Box>
      {dataSource.map((item, index) => (
        <TableRow key={nanoid()} index={index} {...item} />
      ))}
    </Box>
  )
}

type TableRowProps = IUserStake & {
  index: number
}

const TableRow = ({
  amount,
  claimTime,
  id,
  index,
  optionId,
  start,
}: TableRowProps) => {
  const { address } = useAccount()
  const { chain } = useNetwork()
  const { open } = useWeb3Modal()
  const [isClaiming, setIsClaiming] = useState(false)
  const [isUnstaking, setIsUnstaking] = useState(false)
  const [isWithdrawing, setIsWithdrawing] = useState(false)
  const { data: stakeOptions } = api.staking.getOptions.useQuery()
  const { data: unstakeFee } = api.staking.getUnstakeFee.useQuery()
  const { refetch: refetchTotalStakeAmount } =
    api.staking.getTotalStakedAmount.useQuery(undefined, { enabled: false })
  const { claim } = useStaking()
  const { getBalance } = useToken()
  const { getUserStakeList } = useStaking()

  const isCorrectNetwork = useMemo(
    () => chain?.id === Number(env.NEXT_PUBLIC_CHAIN_ID),
    [chain?.id]
  )

  const calcClaimTime = useMemo(() => {
    if (!stakeOptions || !stakeOptions.length) return

    const option = stakeOptions.find(({ id }) => id === optionId)

    if (!option) return

    return moment.unix(start + option.duration)
  }, [optionId, stakeOptions, start])

  const isValidToClaim = useMemo(() => {
    if (!calcClaimTime) return false

    return moment().isSameOrAfter(calcClaimTime)
  }, [calcClaimTime])

  const buttonText = useMemo(() => {
    if (claimTime) return "Withdraw"

    if (isValidToClaim) return "Claim"

    return "Unstake"
  }, [claimTime, isValidToClaim])

  const handleClick = async () => {
    if (!address || !isCorrectNetwork) return await open()

    cleanNotifications()

    try {
      if (claimTime) setIsWithdrawing(true)
      else if (isValidToClaim) setIsClaiming(true)
      else setIsUnstaking(true)

      const result = await claim(id)

      await result.wait()

      await getBalance()

      await refetchTotalStakeAmount()

      await getUserStakeList()

      showNotification({
        color: "green",
        message: `${buttonText} successfully!`,
      })
    } catch (error) {
      console.log(error)

      showNotification({ color: "red", message: `${buttonText} failed!` })
    } finally {
      setIsWithdrawing(false)
      setIsClaiming(false)
      setIsUnstaking(false)
    }
  }

  const calcAmount = useMemo(() => {
    if (claimTime && unstakeFee) return amount * (1 - unstakeFee / 100)

    return amount
  }, [amount, claimTime, unstakeFee])

  if (claimTime) {
    return (
      <Box>
        {index !== 0 && <Divider my="xs" />}

        <Flex gap={10} align="center" justify="space-between">
          <Group sx={{ flex: 1 }} grow fw={600} fz="xs">
            <Text>
              {moment
                .unix(claimTime)
                .subtract(1, "days")
                .format("YYYY-MM-DD HH:mm:ss")}
            </Text>

            <Text>{formatPrice(calcAmount)}</Text>

            <Text>{moment.unix(claimTime).format("YYYY-MM-DD HH:mm:ss")}</Text>
          </Group>

          <Button
            color="dark"
            onClick={() => void handleClick()}
            loading={isWithdrawing}
            disabled={!moment.unix(claimTime).isSameOrBefore(moment())}
          >
            Withdraw
          </Button>
        </Flex>

        {!!claimTime && (
          <Center fz="xs" mt="xs">
            Withdraw tokens after&nbsp;
            <b>{moment.unix(claimTime).format("YYYY-MM-DD HH:mm:ss")}</b>
          </Center>
        )}
      </Box>
    )
  }

  return (
    <Box>
      {index !== 0 && <Divider my="xs" />}

      <Flex gap={10} align="center" justify="space-between">
        <Group sx={{ flex: 1 }} grow fw={600} fz="xs">
          <Text>{moment.unix(start).format("YYYY-MM-DD HH:mm:ss")}</Text>

          <Text>{formatPrice(calcAmount)}</Text>

          <Text>
            {calcClaimTime?.format("YYYY-MM-DD HH:mm:ss") || "Unknown"}
          </Text>
        </Group>

        <Group spacing={5}>
          {!isValidToClaim && (
            <Button
              onClick={() => void handleClick()}
              loading={isUnstaking}
              color="dark"
            >
              Unstake
            </Button>
          )}

          <Button
            onClick={() => void handleClick()}
            loading={isClaiming}
            disabled={!isValidToClaim}
            color="dark"
          >
            Claim
          </Button>
        </Group>
      </Flex>
    </Box>
  )
}
