import { Box, Flex, type BoxProps } from "@mantine/core"
import { Web3Button } from "@web3modal/react"

export const ActionButtons = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Flex gap={20} justify="center">
        <Web3Button />
      </Flex>
    </Box>
  )
}
