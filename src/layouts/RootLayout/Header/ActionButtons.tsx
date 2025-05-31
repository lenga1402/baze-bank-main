import { links } from "@/constants/links"
import { Box, Button, Flex, rem, type BoxProps } from "@mantine/core"

import { HybridLink } from "@/components/HybridLink"

export const ActionButtons = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Flex gap={rem(20)} justify="center">
        <HybridLink href={links.PINK_SALE}>
          <Button>Join Presale</Button>
        </HybridLink>

        <HybridLink href={links.POO_COIN}>
          <Button>Buy $Token</Button>
        </HybridLink>
      </Flex>
    </Box>
  )
}
