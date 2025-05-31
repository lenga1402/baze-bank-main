import { Box, rem, Text } from "@mantine/core"

import { LendingTable } from "./components/Table"
import { TableHeader } from "./components/TableHeader"

export const Content = () => {
  return (
    <Box
      pos="relative"
      maw="100vw"
      mx="auto"
      p={rem(16)}
      bg="#2D2D2D"
      sx={{ borderRadius: rem(20), overflow: "auto" }}
    >
      <Box pos="sticky" left={0} top={0}>
        <TableHeader />
      </Box>
      <LendingTable />
      <Box
        pos="sticky"
        left={0}
        mt={{ base: 40, lg: rem(80) }}
        p={rem(16)}
        bg="#28282C"
        sx={{ border: "1px solid #2E2E32" }}
      >
        <Text c="#C4C3C6">Total 15 records</Text>
      </Box>
    </Box>
  )
}
