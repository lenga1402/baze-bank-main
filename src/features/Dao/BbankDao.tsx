import { Box, Flex, rem, Text, Title } from "@mantine/core"

import { IconDiscord, IconMess } from "@/assets/vectors"
import { HybridLink } from "@/components/HybridLink"

export const BbankDao = () => {
  return (
    <Box
      h="fit-content"
      p={rem(20)}
      bg="#2d2d2d"
      sx={{ flex: 1, borderRadius: rem(16) }}
    >
      <Title order={2} c="#fff" fz={rem(18)} fw={600}>
        BBANK DAO
      </Title>
      <Text mt={rem(16)} c="rgba(255, 255, 255, 0.5)">
        BaseBank aspires to transform into a fully decentralized autonomous
        organization (DAO) characterized by trustless governance. This ambition,
        although challenging, remains a top priority for the BBANK team, with
        concerted efforts underway to actualize this vision in the near term.
      </Text>
      <Text mt={rem(20)} c="rgba(255, 255, 255, 0.5)">
        We warmly invite and actively encourage our community to engage in our
        forums and Discord channels, valuing and deeply appreciating your
        valuable input and involvement.
      </Text>
      <Flex
        gap={rem(8)}
        mt={rem(40)}
        pt={rem(16)}
        sx={{ borderTop: "1px solid #454851" }}
      >
        <Box p={rem(8)}>
          <HybridLink href="#">
            <IconMess />
          </HybridLink>
        </Box>
        <Box p={rem(8)}>
          <HybridLink href="#">
            <IconDiscord />
          </HybridLink>
        </Box>
      </Flex>
    </Box>
  )
}
