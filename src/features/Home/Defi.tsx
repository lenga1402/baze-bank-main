import { useEffect, useRef } from "react"
import Image from "next/image"
import { paths } from "@/constants/paths"
import { AspectRatio, Box, Flex, Grid, rem, Text, Title } from "@mantine/core"
import gsap from "gsap"

import {
  DefiImg,
  DefiImg2,
  DefiImg3,
  DefiImg4,
  DefiImg5,
  DefiImg6,
  DefiTitle,
} from "@/assets/images"
import { Mouse, Mouse2, Mouse3, Mouse4, Mouse5, Mouse6 } from "@/assets/vectors"
import { HybridLink } from "@/components/HybridLink"
// import { DefiIconTitle } from "@/assets/vectors"
import { Section } from "@/components/Section"

export const Defi = () => {
  const defiRef = useRef(null)
  useEffect(() => {
    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: defiRef.current,
        start: "top 5%",
        end: "+=1200",
        // markers: true,
        toggleActions: "play none reverse reset",
        scrub: 2,
      },
    })

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: defiRef.current,
        start: "top 5%",
        end: "+=1200",
        // markers: true,
        toggleActions: "play none reverse reset",
        scrub: 2,
      },
    })

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: defiRef.current,
        start: "top 5%",
        end: "+=1200",
        // markers: true,
        toggleActions: "play none reverse reset",
        scrub: 1,
      },
    })

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: defiRef.current,
        start: "top 5%",
        end: "+=1200",
        // markers: true,
        toggleActions: "play none reverse reset",
        scrub: 1,
      },
    })
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: defiRef.current,
        start: "top 5%",
        end: "+=1200",
        // markers: true,
        toggleActions: "play none reverse reset",
        scrub: 1,
      },
    })

    const to = gsap.to(".mouse-1", {
      transform: "translate(500px,3500px)",
      scrollTrigger: {
        trigger: defiRef.current,
        start: "top 5%",
        end: "+=1200",
        // markers: true,
        toggleActions: "play none reverse reset",
        scrub: 1,
      },
    })

    // mouse2

    tl2.to(".mouse-2", {
      transform: "translate(-600px,1500px)",
    })

    tl2.to(".mouse-2", {
      transform: "translate(600px,2500px)",
      duration: 1,
    })

    //mouse3

    tl3.to(".mouse-3", {
      transform: "translateX(-600px)",
    })

    tl3.to(".mouse-3", {
      transform: "translate(600px,-600px)",
      duration: 1,
    })

    //mouse4

    tl4.to(".mouse-4", {
      transform: "translate(-900px,-300px)",
      duration: 1,
    })
    tl4.to(".mouse-4", {
      transform: "translate(-900px,-1500px)",
      duration: 1,
    })

    //mouse5
    tl5.to(".mouse-5", {
      transform: "translate(20px,-1200px)",
    })
    tl5.to(".mouse-5", {
      transform: "translate(-800px,-1800px)",
      duration: 1,
    })

    //mouse6
    tl6.to(".mouse-6", {
      transform: "translate(600px,1400px)",
    })
    tl6.to(".mouse-6", {
      transform: "translate(-600px,2500px)",
      duration: 1,
    })

    return () => {
      to.revert()
      tl2.revert()
      tl3.revert()
      tl4.revert()
      tl5.revert()
      tl6.revert()
    }
  }, [])

  return (
    <Section
      pos="relative"
      sx={{
        "&:hover ~ .mf-cursor": {
          background: "red",
        },
      }}
    >
      <Box
        pos="absolute"
        sx={{
          zIndex: 100,
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* mouse */}
        <Box pos="absolute" top="-10%" left="30%" className="mouse-1">
          <Mouse />
        </Box>
        <Box pos="absolute" top="-10%" right="-8%" className="mouse-2">
          <Mouse2 />
        </Box>
        <Box
          pos="absolute"
          bottom="50%"
          right={{ base: "-35%", lg: "-10%" }}
          className="mouse-3"
        >
          <Mouse3 />
        </Box>
        <Box pos="absolute" right="10%" bottom="30%" className="mouse-4">
          <Mouse4 />
        </Box>
        <Box pos="absolute" left="25%" bottom={0} className="mouse-5">
          <Mouse5 />
        </Box>
        <Box pos="absolute" top="-10%" left="-5%" className="mouse-6">
          <Mouse6 />
        </Box>
      </Box>
      <Box pos="relative" h={{ lg: rem(2500) }}>
        <Flex align="center" justify="center" gap={{ base: 10, lg: rem(40) }}>
          <Title ta="center" tt="uppercase" fz={{ base: 36, lg: rem(140) }}>
            Bank on
          </Title>
          <AspectRatio ratio={1} w={{ base: 40, lg: rem(140) }}>
            <Image src={DefiTitle} alt="defi" />
          </AspectRatio>
          <Title ta="center" tt="uppercase" fz={{ base: 36, lg: rem(140) }}>
            base
          </Title>
        </Flex>
        <Box
          ref={defiRef}
          pos="sticky"
          top={rem(100)}
          maw={rem(1160)}
          mt={{ base: 40, lg: rem(110) }}
          mx="auto"
        >
          <Grid>
            <Grid.Col lg={8}>
              <AspectRatio ratio={760 / 360} w={rem(760)}>
                <Image src={DefiImg} alt="defi" />
              </AspectRatio>
            </Grid.Col>
            <Grid.Col lg={4}>
              <Flex
                h="100%"
                direction="column"
                gap={{ base: 20, lg: 15 }}
                justify="space-between"
              >
                <AspectRatio ratio={380 / 170}>
                  <Image src={DefiImg2} alt="defi" />
                </AspectRatio>
                <AspectRatio ratio={380 / 170}>
                  <Image src={DefiImg3} alt="defi" />
                </AspectRatio>
              </Flex>
            </Grid.Col>
          </Grid>
          <Grid mt={rem(20)}>
            <Grid.Col lg={8}>
              <AspectRatio ratio={760 / 360} w={rem(760)}>
                <Image src={DefiImg4} alt="defi" />
              </AspectRatio>
            </Grid.Col>
            <Grid.Col lg={4}>
              <Flex
                h="100%"
                gap={{ base: 20, lg: 15 }}
                direction="column"
                justify="space-between"
              >
                <AspectRatio ratio={380 / 170}>
                  <Image src={DefiImg5} alt="defi" />
                </AspectRatio>
                <AspectRatio ratio={380 / 170}>
                  <Image src={DefiImg6} alt="defi" />
                </AspectRatio>
              </Flex>
            </Grid.Col>
          </Grid>

          <HybridLink href={paths.DAPPS}>
            <Box
              w="fit-content"
              mx="auto"
              mt={{ base: 40, lg: rem(100) }}
              px={{ base: 20, lg: rem(60) }}
              py={{ base: 12, lg: rem(32) }}
              bg="#A1B4FF"
              sx={{
                borderRadius: rem(100),
                "@media(max-width:500px)": {
                  borderRadius: 24,
                },
              }}
            >
              <Text fz={{ base: 14, lg: rem(32) }} fw={600} ta="center">
                BBANK Dashboard
              </Text>
            </Box>
          </HybridLink>
        </Box>
      </Box>
    </Section>
  )
}
