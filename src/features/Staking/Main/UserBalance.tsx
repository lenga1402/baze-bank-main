import React from "react"
import { useToken } from "@/contexts/tokenContext"
import { formatPrice } from "@/utils"
import { Group, Text, Title } from "@mantine/core"

export const UserBalance = () => {
  const { balance } = useToken()

  return (
    <Group position="apart">
      <Title order={3}>Stake</Title>

      <Text>
        Balance: <b>{formatPrice(balance)}</b>
      </Text>
    </Group>
  )
}
