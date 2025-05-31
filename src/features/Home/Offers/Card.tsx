import Image from "next/image"
import { AspectRatio, Box, Flex, Paper, rem, Text, Title } from "@mantine/core"

import { HomeOffersCardBg } from "@/assets/images"

import { type homeOffersData } from "./data"

type CardProps = (typeof homeOffersData)[0] & {
  number: string
  videoClassName?: string
}

export const Card = ({
  videoClassName,
  backgroundColor,
  description,
  title,
  video,
  number,
}: CardProps) => {
  return (
    <Paper
      radius="xl"
      bg={backgroundColor}
      pos="relative"
      miw={{ lg: rem(1000) }}
      maw={{ lg: rem(1000) }}
      px={{ base: 20, lg: rem(60) }}
      pt={{ base: 20, lg: rem(80) }}
      pb={{ base: 20, lg: rem(60) }}
      h="100%"
    >
      <AspectRatio
        ratio={478 / 491}
        w={{ lg: rem(480) }}
        pos="absolute"
        top={0}
        left={0}
      >
        <Image alt="" fill src={HomeOffersCardBg} />
      </AspectRatio>

      <Flex direction="column" justify="space-between" h="100%" pos="relative">
        <AspectRatio
          display={{ base: "none", lg: "block" }}
          ratio={527 / 263}
          w="50%"
          bg="white"
          sx={{ borderRadius: rem(200), overflow: "hidden" }}
          className={videoClassName}
        >
          <video autoPlay muted playsInline loop>
            <source src={video} type="video/mp4" />
          </video>
        </AspectRatio>

        <AspectRatio
          display={{ lg: "none" }}
          ratio={1}
          w="40%"
          bg="white"
          ml="auto"
          sx={{ borderRadius: "100%", overflow: "hidden" }}
        >
          <video autoPlay muted playsInline loop>
            <source src={video} type="video/mp4" />
          </video>
        </AspectRatio>

        <Box>
          <Box my={rem(20)}>
            <Title
              order={3}
              fw={500}
              fz={{ base: 20, sm: 40, lg: rem(80) }}
              lh="1.2em"
            >
              {title}
            </Title>
          </Box>

          <Flex
            wrap="nowrap"
            justify="space-between"
            gap={rem(20)}
            align="center"
            c="#818181"
          >
            <Text
              fz={{ base: 12, lg: rem(20) }}
              sx={(theme) => ({
                [theme.fn.largerThan("lg")]: {
                  whiteSpace: "pre-line",
                },
              })}
            >
              {description}
            </Text>

            <Text fz={{ base: 24, sm: 40, lg: rem(80) }} c="#D0D0D0" fw={500}>
              {number}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Paper>
  )
}
