import { Group, NumberInput, Paper, Text } from "@mantine/core"
import { nanoid } from "nanoid"

import { SelectToken } from "../components/SelectToken"
import { useTokenFrom } from "./hooks/useTokenFrom"
import { useTokenTo } from "./hooks/useTokenTo"

type SectionFromProps = {
  swapAmount: number
  setSwapAmount: (value: number) => void
}

export const SectionFrom = ({
  setSwapAmount,
  swapAmount,
}: SectionFromProps) => {
  const [tokenFrom, setTokenFrom] = useTokenFrom((state) => [
    state.value,
    state.setValue,
  ])
  const tokenTo = useTokenTo((state) => state.value)

  return (
    <Paper bg="#2d2d2d" p={20} radius="lg">
      <Group position="apart">
        <SelectToken
          setSelectedToken={setTokenFrom}
          disabledTokens={[tokenTo]}
          selectedToken={tokenFrom}
        />

        <Text c="rgba(255, 255, 255, 0.70)" fz={14}>
          Balance: -
        </Text>
      </Group>

      <NumberInput
        value={swapAmount}
        onChange={setSwapAmount}
        min={0}
        precision={2}
        variant="unstyled"
        placeholder="0.00"
        mt={12}
        mb={22}
        sx={{
          input: {
            fontWeight: 500,
            fontSize: 36,
            color: "#fff",
            "&::placeholder": { color: "rgba(255, 255, 255, 0.30)" },
          },
        }}
      />

      <Group grow spacing={15} mb={10}>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <Paper key={nanoid()} p={4} bg="#424242" sx={{ cursor: "pointer" }}>
              <Text ta="center" fz={12} fw={500} c="rgba(255, 255, 255, 0.50)">
                {(index + 1) * 25}%
              </Text>
            </Paper>
          ))}
      </Group>
    </Paper>
  )
}
