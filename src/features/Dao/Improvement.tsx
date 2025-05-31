import { Box, Flex, rem, Text, Title } from "@mantine/core"
import { nanoid } from "nanoid"

import { IconCheck } from "@/assets/vectors"

import { data } from "./data"

export const Improvement = () => {
  return (
    <Box
      py={rem(28)}
      px={rem(16)}
      bg="#2d2d2d"
      sx={{ flex: 3, borderRadius: rem(16) }}
    >
      <Title order={2} c="#fff" fz={rem(18)} fw={600} ta="center">
        BaseBank Improvement Proposals (BIPs)
      </Title>
      <Text mt={rem(4)} c="rgba(255, 255, 255, 0.5)" ta="center">
        Track proposal statuses and vote on changes.
      </Text>
      <Box mt={rem(28)}>
        {data.map(({ title, desc }) => (
          <Flex
            key={nanoid()}
            direction={{ base: "column", lg: "row" }}
            align="flex-start"
            gap={{ base: 10, lg: rem(24) }}
            mb={rem(20)}
            py={rem(16)}
            px={rem(20)}
            bg="rgba(255, 255, 255, 0.04)"
            sx={{ borderRadius: rem(8) }}
          >
            <Box>
              <IconCheck />
            </Box>
            <Box>
              <Title
                order={3}
                c="rgba(255, 255, 255, 0.5)"
                fz={rem(18)}
                fw={600}
              >
                {title}
              </Title>
              <Text mt={rem(4)} c="#fff">
                {desc}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  )
}
