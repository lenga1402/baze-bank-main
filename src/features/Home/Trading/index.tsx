import React from "react"
import Image from "next/image"
import {
  AspectRatio,
  Box,
  createStyles,
  Grid,
  keyframes,
  rem,
  Text,
  Title,
} from "@mantine/core"
import { nanoid } from "nanoid"

import { TradingBanner, TradingDivider } from "@/assets/images"
import { Section } from "@/components/Section"

import { Card } from "./Card"
import { homeTradingData } from "./data"

export const Trading = () => {
  const circlePulse = keyframes({
    "0%": {
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.15)",
    },
    "71%, to": {
      boxShadow: "0 0 0 20px transparent",
    },
  })

  const useStyles = createStyles(() => ({
    container: {
      animation: `${circlePulse} 2s ease-in-out infinite`,
    },
  }))

  const { classes } = useStyles()
  return (
    <Section fluid={false} size={rem(1700)}>
      <Title
        order={2}
        fz={{ base: 30, sm: 50, lg: rem(80) }}
        fw={600}
        lh="1em"
        tt="uppercase"
      >
        Seamless and Efficient
        <Box display={{ base: "inline-block", lg: "block" }}>
          Trading on zk Rollups
        </Box>
      </Title>

      <AspectRatio ratio={1608 / 15} my={rem(30)}>
        <Image alt="" fill src={TradingDivider} />
      </AspectRatio>

      <Grid align="center" gutter={rem(20)}>
        <Grid.Col span={12} lg={5} order={2} orderLg={1}>
          <Text c="#878787" fz={{ base: 18, sm: rem(26) }}>
            Basebank brings more people easy-to-use and low-cost DeFi with
            complete Ethereum security powered by zero-knowledge technology.
          </Text>

          <Grid gutter={rem(10)} mt={{ base: 40, sm: rem(80) }}>
            {homeTradingData.map((item) => (
              <Grid.Col key={nanoid()} span={12} lg={6}>
                <Card {...item} />
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>

        <Grid.Col pos={"relative"} span={12} lg={7} order={1} orderLg={2}>
          <AspectRatio
            maw={{ base: "345px", lg: "unset" }}
            ratio={1}
            ml={{ lg: "auto" }}
            mr={{ base: "auto", lg: "unset" }}
            w={{ lg: rem(625) }}
          >
            <Image alt="" fill src={TradingBanner} />
          </AspectRatio>

          <Box
            className={classes.container}
            pos={"absolute"}
            sx={{ borderRadius: "50%" }}
            bg={"black"}
            h={12}
            w={12}
            top={{ base: rem(60), lg: rem(100) }}
            right={{ base: rem(60), lg: rem(90) }}
          ></Box>

          <Box
            className={classes.container}
            pos={"absolute"}
            sx={{ borderRadius: "50%" }}
            bg={"black"}
            h={12}
            w={12}
            top={{ base: rem(228), lg: rem(400) }}
            right={{ base: rem(220), lg: rem(390) }}
          ></Box>

          <Box
            className={classes.container}
            pos={"absolute"}
            sx={{ borderRadius: "50%" }}
            bg={"black"}
            h={12}
            w={12}
            top={{ base: rem(268), lg: rem(480) }}
            right={{ base: rem(260), lg: rem(465) }}
          ></Box>
        </Grid.Col>
      </Grid>
    </Section>
  )
}
