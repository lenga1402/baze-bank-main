import React from "react"
import { useToken } from "@/contexts/tokenContext"
import { Button, Group, NumberInput } from "@mantine/core"

import { useInputAmount } from "../hooks/useInputAmount"

export const StakeInput = () => {
  const { value, setValue } = useInputAmount()
  const { balance } = useToken()

  return (
    <Group>
      <NumberInput
        precision={2}
        min={0}
        placeholder="0.00"
        sx={{ flexGrow: 1 }}
        value={value}
        onChange={(value) => setValue(Number(value))}
      />

      <Button onClick={() => setValue(balance)} color="dark">MAX</Button>
    </Group>
  )
}
