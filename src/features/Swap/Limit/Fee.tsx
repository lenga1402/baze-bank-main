import React from "react"
import { Group, Paper, Text } from "@mantine/core"

export const Fee = () => {
  return (
    <Paper bg="#2d2d2d" px={20} py={12} radius="md" c="#fff">
      <Group position="apart">
        <Text opacity={0.5} fz={14}>
          Service Fee
        </Text>

        <Text fw={500}>-</Text>
      </Group>
    </Paper>
  )
}
