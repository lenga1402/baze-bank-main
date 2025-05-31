import React from "react"
import { paths } from "@/constants/paths"
import { Stream } from "@cloudflare/stream-react"
import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Group,
  Paper,
  rem,
  Text,
  Title,
} from "@mantine/core"

import { HybridLink } from "@/components/HybridLink"

import { type homeBankData } from "./data"

type CardProps = (typeof homeBankData)[0] & {
  index: string
}

export const Card = ({
  backgroundColor,
  desc,
  icon,
  index,
  title,
  video,
}: CardProps) => {
  return (
    <HybridLink href={paths.ABOUT}>
      <Paper
        radius="xl"
        bg={backgroundColor}
        px={{ base: 15, sm: rem(35) }}
        py={{ base: 20, sm: rem(40) }}
        h="100%"
        sx={(theme) => ({
          cursor: "default",
          "&": {
            transition: "all 0.25s",
          },
          [theme.fn.largerThan("lg")]: {
            "&:hover": {
              backgroundColor: "#2d2d2d",
              transform: "translateY(10%)",
              "*": {
                color: "#fff",
                fill: "#A1B4FF",
              },
              ".circle": {
                borderColor: "#a1b4ff",
              },
            },
          },
        })}
      >
        <Flex direction="column" justify="space-between" h="100%">
          <Box mb={{ base: 50, sm: 100, lg: rem(150) }}>
            <Group position="apart" mb={rem(16)}>
              <AspectRatio
                ratio={146 / 83}
                w={rem(140)}
                sx={{ borderRadius: rem(200), overflow: "hidden" }}
              >
                <Stream
                  src={video}
                  autoplay
                  loop
                  muted
                  preload
                  responsive={false}
                />
              </AspectRatio>

              <Center
                className="circle"
                w={{ base: 40, sm: rem(70) }}
                h={{ base: 40, sm: rem(70) }}
                sx={{
                  border: `${rem(1)} solid rgba(45, 45, 45, 0.20)`,
                  borderRadius: "100%",
                }}
              >
                <Text fz={{ base: 20, sm: rem(32) }} fw={500}>
                  {index}
                </Text>
              </Center>
            </Group>

            <Title order={3} fw={600} fz={{ base: 24, sm: rem(32) }}>
              {title}
            </Title>

            <Text fw={500} mt={rem(20)}>
              {desc}
            </Text>
          </Box>

          <Box>{icon}</Box>
        </Flex>
      </Paper>
    </HybridLink>
  )
}
