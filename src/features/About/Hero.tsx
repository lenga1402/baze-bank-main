import { useRef } from "react"
import Image from "next/image"
import { links } from "@/constants/links"
import { Carousel } from "@mantine/carousel"
import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  rem,
  Text,
  Title,
  type BoxProps,
} from "@mantine/core"
import Autoplay from "embla-carousel-autoplay"
import { nanoid } from "nanoid"

import { AboutHeroImg } from "@/assets/images"
import { AboutHeroIcon, AboutHeroIcon2, IconDown } from "@/assets/vectors"
import { ButtonCommon } from "@/components/ButtonCommon"
import { Section } from "@/components/Section"

const data = [
  {
    title: "Total Supply",
    value: "100,000,000",
    unit: "$BBANK",
    bgC: "#A1B4FF",
  },
  {
    title: "Total Liquidity",
    value: "1,376,018+",
    unit: "USD",
    bgC: "#ECD6FE",
  },
  {
    title: "Total Locked",
    value: "5,758,174+",
    unit: "USD",
    bgC: "#B4FFCD",
  },
]

const texts = ["Stake", "mint", "swap", "bridge", "vote"]

export const Hero = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }))

  const getValue = (index: number) => {
    switch (index) {
      case 0:
        return 0
      case 1:
        return 30
      case 2:
        return 60

      default:
        break
    }
  }

  return (
    <Section px={{ base: 15, sm: 25, lg: rem(150) }}>
      <Box mt={{ base: 60, lg: 0 }}>
        <Flex align="center" gap={rem(20)}>
          <Title
            h={rem(100)}
            fz={{ base: 48, lg: rem(110) }}
            fw={600}
            lh={rem(88)}
            tt="uppercase"
          >
            BBANK
          </Title>
          <AboutHeroIcon />
        </Flex>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={rem(20)}
          mt={rem(20)}
        >
          <Title
            h={rem(100)}
            fz={{ base: 48, lg: rem(110) }}
            fw={600}
            lh={rem(88)}
            tt="uppercase"
          >
            The Portal to DeFi
          </Title>
          <AboutHeroIcon2 />
          <Box>
            <Carousel
              orientation="vertical"
              draggable={false}
              loop
              withControls={false}
              plugins={[autoplay.current]}
              height={rem(90)}
            >
              {texts.map((item) => (
                <Carousel.Slide key={item}>
                  <Text
                    my={rem(20)}
                    fz={{ base: 48, lg: rem(100) }}
                    fw={600}
                    lh={rem(88)}
                    ta="center"
                    tt="uppercase"
                  >
                    {item}
                  </Text>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Box>
        </Flex>
        <Text maw={rem(812)} mt={rem(40)} c="#2d2d2d" fz={rem(20)}>
          All in one decentralized exchange for leveraging diversified funds
          across ecosystems, with the speed of Base Mainnet.
        </Text>
      </Box>
      <Flex
        mt={rem(40)}
        gap={{ base: 40, lg: 0 }}
        direction={{ base: "column", lg: "row" }}
        align="flex-end"
      >
        <Grid mx={0} sx={{ flex: 1 }}>
          <Grid.Col lg={4}>
            <Flex
              pos="relative"
              h="100%"
              pl={rem(20)}
              direction="column"
              justify="space-between"
              sx={{
                borderLeft: "2px solid rgba(45, 45, 45, 0.2)",
                ":before": {
                  content: `""`,
                  position: "absolute",
                  top: 0,
                  left: rem(-2),
                  width: rem(2),
                  height: "calc(100% / 3)",
                  background: "rgba(45, 45, 45, 1)",
                },
              }}
            >
              <Text fz={rem(20)} fw={500}>
                Scroll down
              </Text>
              <IconDown />
            </Flex>
          </Grid.Col>
          <Grid.Col lg={8}>
            <Box
              pos="relative"
              sx={{
                zIndex: 1,
                border: "2px solid rgba(45,45,45,0.2)",
                borderRadius: rem(8),
                clipPath: "polygon(0 0, 100% 0, 100% 88%, 93% 100%, 0 100%)",
                ":before": {
                  content: `""`,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: rem(40),
                  height: rem(3),
                  background: "rgba(45,45,45,0.2)",
                  zIndex: 3,
                  transform: "translate(4px,-6px) rotate(-30deg)",
                },
                "@media(max-width:500px)": {
                  ":before": {
                    width: 38,
                    transform: "translate(9px,-8px) rotate(-40deg)",
                  },
                },
              }}
            >
              <Flex align="center" justify="space-between" p={rem(16)}>
                <AspectRatio ratio={290 / 66} w={{ base: 150, lg: rem(290) }}>
                  <Image src={AboutHeroImg} alt="hero" />
                </AspectRatio>
                <Text pr={{ lg: rem(16) }} fz={rem(24)} fw={700} tt="uppercase">
                  10k Users
                </Text>
              </Flex>
              <Box w="100%" h={rem(2)} bg="rgba(45,45,45,0.2)" />
              <Flex align="center" justify="space-between" p={rem(16)}>
                <Text fz={rem(24)} fw={600} tt="uppercase">
                  Join our community
                </Text>
                <ButtonCommon
                  h={rem(41)}
                  mr={{ base: 0, lg: rem(16) }}
                  py={rem(10)}
                  bg="#A1B4FF"
                  fz={rem(14)}
                  fw={600}
                  href={links.ALL_MY_LINKS}
                >
                  <Text w={rem(50)}>Join Us</Text>
                </ButtonCommon>
              </Flex>
            </Box>
          </Grid.Col>
        </Grid>
        <Flex direction="column" align="flex-end" sx={{ flex: 1 }}>
          {data.map((item, index) => (
            <LockedItem key={nanoid()} {...item} mr={rem(getValue(index))} />
          ))}
        </Flex>
      </Flex>
    </Section>
  )
}

type LockedItemProps = BoxProps & {
  title: string
  value: string
  unit: string
  bgC: string
}

const LockedItem: React.FC<LockedItemProps> = ({
  title,
  value,
  bgC,
  unit,
  ...props
}) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      w={{ base: 300, lg: rem(495) }}
      bg={bgC}
      px={rem(28)}
      {...props}
      sx={{
        zIndex: 1,
        borderRadius: rem(8),
        clipPath: "polygon(0 0, 100% 0, 100% 68%, 95% 100%, 0 100%)",
        ":before": {
          content: `""`,
          position: "absolute",
          bottom: 0,
          right: 0,
          width: rem(40),
          height: rem(3),
          background: "rgba(45,45,45,0.2)",
          zIndex: 3,
          transform: "translate(4px,-6px) rotate(-30deg)",
        },
      }}
    >
      <Text fz={rem(24)} fw={600} tt="capitalize">
        {title}
      </Text>
      <Box>
        <Text fz={rem(24)} fw={600}>
          {value}
        </Text>
        <Text fw={600} ta="end">
          {unit}
        </Text>
      </Box>
    </Flex>
  )
}
