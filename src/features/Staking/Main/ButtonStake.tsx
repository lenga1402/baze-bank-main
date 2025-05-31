import { useMemo, useState } from "react"
import { contracts } from "@/constants/contracts"
import { useToken } from "@/contexts/tokenContext"
import { env } from "@/env.mjs"
import { api } from "@/utils"
import {
  cleanNotifications,
  notifications,
  showNotification,
} from "@mantine/notifications"
import { useWeb3Modal } from "@web3modal/react"
import { BigNumber } from "ethers"
import { useAccount, useNetwork } from "wagmi"

import { parseEther } from "@/libs/ethers"

import { useInputAmount } from "../hooks/useInputAmount"
import { useSelectOption } from "../hooks/useSelectOption"
import { useStaking } from "../hooks/useStaking"
import { Button } from "@mantine/core"

export const ButtonStake = () => {
  const { isConnected } = useAccount()
  const { chain } = useNetwork()
  const { open } = useWeb3Modal()
  const { balance, getAllowance, approve, getBalance } = useToken()
  const { stake, getUserStakeList } = useStaking()
  const { value: stakeAmount, setValue: setStakeAmount } = useInputAmount()
  const { value: stakeOptionId } = useSelectOption()
  const [isStaking, setIsStaking] = useState(false)
  const { refetch: refetchTotalStakedAmount } =
    api.staking.getTotalStakedAmount.useQuery(undefined, { enabled: false })
  const [buttonContentText, setButtonContentText] = useState("Approve")

  const isCorrectNetwork = useMemo(
    () => chain?.id === Number(env.NEXT_PUBLIC_CHAIN_ID),
    [chain?.id]
  )

  const buttonText = useMemo(() => {
    if (!isConnected) return "Connect Wallet"

    if (!isCorrectNetwork) return `Switch to ${env.NEXT_PUBLIC_NETWORK_NAME}`

    return buttonContentText
  }, [buttonContentText, isConnected, isCorrectNetwork])

  const handleClick = async () => {
    if (!isConnected || !isCorrectNetwork) return await open()

    try {
      if (!stakeOptionId) {
        throw "Please select stake option"
      }

      if (!stakeAmount) {
        throw "Please enter stake amount"
      }

      if (stakeAmount > balance) {
        throw "Stake amount must be smaller than balance!"
      }

      cleanNotifications()

      setIsStaking(true)

      const amountEther = parseEther(stakeAmount.toString())

      if (getAllowance) {
        setButtonContentText("Approving...")

        const allowance = await getAllowance(contracts.staking)

        console.log("allowance checked", allowance)

        if (allowance.lt(BigNumber.from(amountEther)) && approve) {
          const result = await approve(contracts.staking)

          await result.wait()

          console.log("approve checked", result)
        }

        setButtonContentText("Staking...")

        const result = await stake(Number(stakeOptionId), amountEther)

        await result.wait()

        console.log("stake checked", result)

        setStakeAmount(0)

        await getBalance()

        await refetchTotalStakedAmount()

        await getUserStakeList()

        showNotification({
          color: "green",
          message: "Stake successfully!",
        })
      }
    } catch (error) {
      console.log(error)

      let message = "Stake failed!"

      if (typeof error === "object") {
        const errorJson = JSON.stringify(error)

        if (errorJson.includes("transfer amount exceeds allowance")) {
          message = "Stake amount exceeds approved allowance!"
        } else if (errorJson.includes("user rejected transaction")) {
          message = "User rejected!"
        }
      }

      if (typeof error === "string") {
        message = error
      }

      notifications.show({
        color: "red",
        message,
      })
    } finally {
      setIsStaking(false)

      setButtonContentText("Approve")
    }
  }

  return (
    <Button size="md" color="dark" onClick={() => void handleClick()} loading={isStaking}>
      {buttonText}
    </Button>
  )
}
