import { Box, Flex, rem, Text } from "@mantine/core"
import { RiArrowRightSLine } from "react-icons/ri"

import { IconQuestion, Liquidity } from "@/assets/vectors"

export const HowItWork = () => {
  return (
    <Box p={rem(20)} bg="#2D2D2D" sx={{ borderRadius: rem(16) }}>
      <Flex align="center" gap={rem(12)}>
        <IconQuestion />
        <Text fw={600} c="#fff">
          SEE HOW IT WORKS
        </Text>
      </Flex>
      <Flex align="center" pt={rem(20)} gap={rem(16)}>
        <Liquidity />
        <Box>
          <Text c="#fff" fw={600}>
            Liquidity
          </Text>
          <Text c="rgba(255, 255, 255, 0.50)">
            Classical AMM-like pool. Suitable for most assets.
          </Text>
        </Box>
        <RiArrowRightSLine color="#fff" />
      </Flex>
    </Box>
  )
}
