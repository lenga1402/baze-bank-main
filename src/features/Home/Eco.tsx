import Image from "next/image"
import { AspectRatio, Box, Group, Paper, rem, Text, Title } from "@mantine/core"
import Marquee from "react-fast-marquee"

import { HomeEcosystemBanner, HomeEcosystemBrands } from "@/assets/images"
import { ArrowCircleRight } from "@/assets/vectors"
import { HybridLink } from "@/components/HybridLink"
import { Section } from "@/components/Section"

export const Eco = () => {
  return (
    <Section px={0}>
      <Box px={rem(20)}>
        <Title
          order={2}
          ta="center"
          tt="uppercase"
          fz={{ base: 32, sm: 50, lg: rem(80) }}
          fw={600}
        >
          A Growing Ecosystem
        </Title>

        <Text mt={rem(25)} mb={rem(40)} ta="center">
          Integrating with BaseBank means you are not only partnering with us
          but joining{" "}
          <Box display={{ base: "inline-block", lg: "block" }}>
            an ecosystem that provides thousands of already onboarded customers
            for your application.
          </Box>
        </Text>

        <Paper radius="xl" bg="#2d2d2d" w="fit-content" mx="auto">
          <HybridLink href="https://t.me/basebank_global">
            <Group noWrap spacing={rem(10)} px={rem(18)} py={rem(12)}>
              <Text tt="uppercase" c="#fff" fz={rem(12)} fw={600}>
                Partner with BaseBank
              </Text>

              <AspectRatio ratio={1} w={rem(20)}>
                <ArrowCircleRight />
              </AspectRatio>
            </Group>
          </HybridLink>
        </Paper>

        <AspectRatio
          ratio={432 / 318}
          w={{ sm: rem(500) }}
          mx="auto"
          mt={rem(40)}
          mb={rem(60)}
        >
          <Image alt="" fill src={HomeEcosystemBanner} />
        </AspectRatio>
      </Box>

      <Marquee>
        <AspectRatio ratio={2431 / 421} w={rem(2431 / 4)}>
          <Image alt="" fill src={HomeEcosystemBrands} />
        </AspectRatio>
        <AspectRatio ratio={2431 / 421} w={rem(2431 / 4)}>
          <Image alt="" fill src={HomeEcosystemBrands} />
        </AspectRatio>
        <AspectRatio ratio={2431 / 421} w={rem(2431 / 4)}>
          <Image alt="" fill src={HomeEcosystemBrands} />
        </AspectRatio>
        <AspectRatio ratio={2431 / 421} w={rem(2431 / 4)}>
          <Image alt="" fill src={HomeEcosystemBrands} />
        </AspectRatio>
      </Marquee>
    </Section>
  )
}
