import { useMemo } from "react"
import { formatPrice } from "@/utils"
import { Group, Input, Paper, Text } from "@mantine/core"

import { SelectToken } from "../components/SelectToken"
import { useTokenFrom } from "./hooks/useTokenFrom"
import { useTokenTo } from "./hooks/useTokenTo"

type SectionFromProps = {
  swapAmount: number
}

export const SectionTo = ({ swapAmount }: SectionFromProps) => {
  const [tokenTo, setTokenTo] = useTokenTo((state) => [
    state.value,
    state.setValue,
  ])
  const tokenFrom = useTokenFrom((state) => state.value)

  const ratio = useMemo(() => {
    return (tokenFrom?.price || 0) / (tokenTo?.price || 1)
  }, [tokenFrom?.price, tokenTo?.price])

  const calcValue = useMemo(() => {
    return swapAmount * ratio
  }, [ratio, swapAmount])

  return (
    <Paper bg="#2d2d2d" p={20} radius="lg">
      <Group position="apart" mb={15}>
        <SelectToken
          setSelectedToken={setTokenTo}
          disabledTokens={[tokenFrom]}
          selectedToken={tokenTo}
        />

        <Text c="rgba(255, 255, 255, 0.70)" fz={14}>
          Balance: -
        </Text>
      </Group>

      <Input
        readOnly
        variant="unstyled"
        value={!calcValue ? "-" : formatPrice(calcValue)}
        sx={{
          flex: 1,
          w: "100%",
          input: {
            fontSize: 36,
            fontWeight: 500,
            color: "#fff",
          },
        }}
      />
    </Paper>
  )
}
