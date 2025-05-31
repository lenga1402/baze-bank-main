import Image from "next/image"
import { links } from "@/constants/links"
import {
  AspectRatio,
  Box,
  CopyButton,
  Flex,
  rem,
  Text,
  Title,
} from "@mantine/core"
import { AiFillCheckCircle } from "react-icons/ai"

import { TokenImg, TokenImg2, TokenImg3 } from "@/assets/images"
import { IconArrowUp } from "@/assets/vectors"
import { ButtonCommon } from "@/components/ButtonCommon"
import { Section } from "@/components/Section"

export const Token = () => {
  return (
    <Section px={{ base: 15, sm: 25, lg: rem(150) }}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        gap={rem(40)}
      >
        <Box maw={rem(676)}>
          <Title
            maw={rem(530)}
            fz={{ base: 48, lg: rem(80) }}
            fw={600}
            tt="uppercase"
          >
            Initial Token Allocation
          </Title>
          <Text mt={rem(20)} fz={rem(20)}>
            The $BBANK token has been strategically deployed on two key
            blockchain networks: the Base Mainnet and the BNB Mainnet.
          </Text>
          <Flex mt={rem(28)} gap={rem(20)}>
            <CopyButton value="0xBD01A5b92Ebef331f42D2ea99Ff087E5834621aC">
              {({ copied, copy }) => (
                <Flex
                  align="center"
                  gap={rem(10)}
                  px={rem(20)}
                  py={rem(12)}
                  bg="rgba(161, 180, 255, 0.20)"
                  fz={rem(20)}
                  fw={600}
                  onClick={copy}
                  sx={{ borderRadius: rem(4), cursor: "pointer" }}
                >
                  Base Mainnet: 0xBD0...21aC{" "}
                  {copied && <AiFillCheckCircle color="green" />}
                </Flex>
              )}
            </CopyButton>
            <CopyButton value="0xBD01A5b92Ebef331f42D2ea99Ff087E5834621aC">
              {({ copied, copy }) => (
                <Flex
                  align="center"
                  gap={rem(10)}
                  px={rem(20)}
                  py={rem(12)}
                  bg="rgba(161, 180, 255, 0.20)"
                  fz={rem(20)}
                  fw={600}
                  onClick={copy}
                  sx={{ borderRadius: rem(4), cursor: "pointer" }}
                >
                  BNB Chain: 0xBD0...21aC{" "}
                  {copied && <AiFillCheckCircle color="green" />}
                </Flex>
              )}
            </CopyButton>
          </Flex>
          <ButtonCommon
            mt={rem(40)}
            sx={{ border: "1px solid #2d2d2d", borderRadius: rem(100) }}
            href={links.PINK_SALE}
          >
            <Flex align="center" justify="space-between" gap={rem(40)}>
              <Text fz={rem(20)} fw={600} tt="uppercase">
                Buy bbank
              </Text>
              <IconArrowUp />
            </Flex>
          </ButtonCommon>
        </Box>
        <Box w={{ lg: rem(676) }}>
          <Flex gap={rem(28)}>
            <AspectRatio ratio={204 / 200} w={{ base: 150, lg: rem(676) }}>
              <Image src={TokenImg} alt="token" />
            </AspectRatio>
            <AspectRatio ratio={204 / 200} w={{ base: 150, lg: rem(676) }}>
              <Image src={TokenImg2} alt="token" />
            </AspectRatio>
          </Flex>
          <Text mt={rem(28)} fz={rem(20)}>
            There will be a total of 100,000,000 BBANK created, issued and
            distributed.The BBANK token will be distributed in the following
            areas:
          </Text>
        </Box>
      </Flex>
      <AspectRatio mt={rem(60)} ratio={1665 / 1626} w={rem(1665)}>
        <Image src={TokenImg3} alt="token" />
      </AspectRatio>
    </Section>
  )
}
