import { useMemo } from "react"
import { api } from "@/utils"
import { Flex, Group, Paper, Text } from "@mantine/core"

import { useSelectOption } from "../hooks/useSelectOption"

export const StakeInfo = () => {
  const { data: options } = api.staking.getOptions.useQuery()
  const { value: selectedOptionId } = useSelectOption()
  // const { value: stakeAmount } = useInputAmount()

  const selectedOption = useMemo(() => {
    if (options && options.length && selectedOptionId) {
      const result = options.find(({ id }) => selectedOptionId === id)

      return result
    }
  }, [options, selectedOptionId])

  // const estimatedReward = useMemo(() => {
  //   if (!stakeAmount || !selectedOption) return 0

  //   const duration = 12 / (selectedOption.duration / 60 / 60 / 24 / 30)

  //   const APY = selectedOption.apy / 100

  //   return ((stakeAmount * APY) / duration).toFixed(2)
  // }, [selectedOption, stakeAmount])

  return (
    <Paper withBorder p="md">
      <Flex direction="column" gap="xs">
        <Group position="apart">
          <Text size="sm">Lock Time</Text>

          <Text fw="bold" size="sm">
            {selectedOption?.label || "Unknown"}
          </Text>
        </Group>

        <Group position="apart">
          <Text size="sm">APY</Text>

          <Text fw="bold" size="sm">
            {selectedOption?.apy ? `${selectedOption.apy}%` : "Unknown"}
          </Text>
        </Group>

        {/* <Group position="apart">
          <Text size="sm">Estimated Reward</Text>

          <Text fw="bold" size="sm">
            {formatPrice(estimatedReward)}
          </Text>
        </Group> */}
      </Flex>
    </Paper>
  )
}
