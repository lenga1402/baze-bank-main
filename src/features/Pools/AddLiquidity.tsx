// import Image from "next/image"
import { Box, Button, Flex, Input, rem, Text } from "@mantine/core"
import { AiOutlinePlus } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { RiArrowDownSLine } from "react-icons/ri"

import { IconCoin } from "@/assets/vectors"

import { TablePool } from "./components/TablePool"
import { TokenSelect } from "./components/TokenSelect"
import { tokens } from "./data"

export const AddLiquidity = () => {
  return (
    <Box bg="#2d2d2d" sx={{ borderRadius: rem(16) }}>
      <Flex p={rem(20)} justify="space-between" align="center">
        <Flex align="center" gap={rem(8)}>
          <IconCoin />
          <Text fw={600} c="#fff">
            Add Liquidity
          </Text>
        </Flex>
        <Flex
          align="center"
          gap={rem(10)}
          p={rem(7)}
          c="rgba(255,255,255,.2)"
          sx={{
            cursor: "pointer",
            border: "1px solid rgba(255,255,255,.2)",
            borderRadius: rem(8),
          }}
        >
          <AiOutlinePlus />
          <Text>Create Pool</Text>
        </Flex>
      </Flex>
      <Flex
        gap={rem(8)}
        px={rem(8)}
        py={rem(17)}
        sx={{ borderBlock: "1px solid #454851" }}
      >
        <Box px={rem(12)} sx={{ borderRadius: rem(8) }}>
          <TokenSelect tokens={tokens} />
        </Box>
        <Input
          icon={<BiSearch />}
          placeholder="Search by tokens"
          sx={{
            minWidth: rem(250),
            ".mantine-Input-input": {
              height: "100%",
              background: "rgba(255, 255, 255, 0.04)",
              border: "none",
              color: "#fff",
            },
            ".mantine-Input-wrapper": {
              borderRadius: rem(8),
            },
          }}
        />
      </Flex>
      <TablePool />
      <Flex
        justify="center"
        py={rem(20)}
        sx={{ borderTop: "1px solid #454851" }}
      >
        <Button
          mx="auto"
          bg="transparent"
          c="rgba(255, 255, 255, 0.50)"
          rightIcon={<RiArrowDownSLine size="1.2rem" />}
          sx={{
            "&:hover": {
              background: "none",
            },
          }}
        >
          Load more
        </Button>
      </Flex>
    </Box>
  )
}
