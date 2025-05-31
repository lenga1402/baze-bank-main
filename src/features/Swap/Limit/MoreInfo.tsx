import React from "react"
import { Group, Paper, Select, Text } from "@mantine/core"

import { CompareValue } from "../components/CompareValue"
import { useTokenFrom } from "./hooks/useTokenFrom"
import { useTokenTo } from "./hooks/useTokenTo"

const expireList = [{ label: "7 days", value: "7days" }]

export const MoreInfo = () => {
  const tokenFrom = useTokenFrom((state) => state.value)
  const tokenTo = useTokenTo((state) => state.value)

  return (
    <Paper bg="#2d2d2d" px={20} py={12} radius="lg" c="#fff">
      <Group position="apart" mb={5}>
        <Text opacity={0.5} fz={14}>
          Limit Price
        </Text>
      </Group>

      <Paper bg="rgba(255, 255, 255, 0.10)" c="#fff" px={20} py={1} radius="md">
        <CompareValue
          tokenFrom={tokenFrom}
          tokenTo={tokenTo}
          variant="special"
        />
      </Paper>

      <Group position="apart" mb={5} mt={10}>
        <Text opacity={0.5} fz={14}>
          Expires in
        </Text>
      </Group>

      <Paper bg="rgba(255, 255, 255, 0.10)" c="#fff" radius="md" mb={5}>
        <Select
          defaultValue={expireList[0]?.value}
          sx={{
            ".mantine-Select-wrapper": {
              paddingInline: 10,
              input: { color: "#fff", fontWeight: 500 },
            },
          }}
          variant="unstyled"
          data={expireList}
        />
      </Paper>
    </Paper>
  )
}
