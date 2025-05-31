import React from "react"
import { Stream } from "@cloudflare/stream-react"
import { AspectRatio, Box, Paper, rem, Text, Title } from "@mantine/core"

import { type homeTradingData } from "./data"

type CardProps = (typeof homeTradingData)[0]

export const Card = ({ desc, title, video }: CardProps) => {
  return (
    <Paper
      pos="relative"
      bg="#f3f0f2"
      sx={{ overflow: "hidden" }}
      radius="xl"
      mih={rem(200)}
    >
      <AspectRatio
        ratio={1}
        w={rem(150)}
        pos="absolute"
        bottom="-17%"
        right="-10%"
      >
        <Stream src={video} autoplay loop muted preload responsive={false} />
      </AspectRatio>

      <Box pos="relative" p={rem(20)}>
        <Title order={3} fz={rem(20)} fw={600} mb={rem(10)}>
          {title}
        </Title>

        <Text fz={rem(12)} w={{ lg: "70%" }}>
          {desc}
        </Text>
      </Box>
    </Paper>
  )
}
