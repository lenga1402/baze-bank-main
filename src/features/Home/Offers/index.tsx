import { useEffect, useRef } from "react"
import { Box, Flex, rem, Title } from "@mantine/core"
import gsap from "gsap"

import { useDesktop } from "@/hooks/useDesktop"

import { Card } from "./Card"
import { homeOffersData } from "./data"

const VIDEO_CLASS = "home-offers-video"

export const Offers = () => {
  const triggerRef = useRef(null)
  const horizontalScrollRef = useRef(null)
  const { isDesktop } = useDesktop()

  useEffect(() => {
    scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    let horizontalScroll: gsap.core.Tween

    const videoGsapList: gsap.core.Tween[] = []

    if (isDesktop) {
      horizontalScroll = gsap.to(horizontalScrollRef.current, {
        xPercent: () => -120,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top -500px",
          end: "+=4000px",
          toggleActions: "play none reverse reset",
          scrub: 1,
          markers: false,
        },
      })

      const videoElementList = gsap.utils.toArray(`.${VIDEO_CLASS}`)

      videoElementList.forEach((element, index) => {
        const videoElement = element as gsap.DOMTarget

        const videoGsap = gsap.to(videoElement, {
          marginLeft: "auto",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: `top ${index * -1500 - 500}px`,
            end: `top ${index * -1500 - 1500}px`,
            toggleActions: "play none reverse reset",
            scrub: 1,
            markers: false,
          },
        })

        videoGsapList.push(videoGsap)
      })
    }

    return () => {
      horizontalScroll?.revert()
      videoGsapList.forEach((videoGsap) => {
        videoGsap.revert()
      })
    }
  }, [isDesktop])

  return (
    <Box h={{ lg: rem(6000) }} ref={triggerRef}>
      <Box pos="sticky" top={0} sx={{ overflow: "hidden" }}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          ref={horizontalScrollRef}
          align="center"
          h={{ lg: "100vh" }}
          py={{ lg: rem(120) }}
          px={{ base: 20, lg: rem(140) }}
          gap={{ base: 10, lg: rem(140) }}
        >
          <Box mb={{ base: 30, lg: 0 }}>
            <Title
              order={2}
              fw={600}
              fz={{ base: 32, sm: 50, lg: rem(100) }}
              tt="uppercase"
              lh="1.2em"
            >
              BaseBank{" "}
              <Box display={{ base: "inline-block", lg: "block" }}>Offers</Box>
            </Title>
          </Box>

          {homeOffersData.map((data, index) => (
            <Card
              key={index}
              videoClassName={VIDEO_CLASS}
              {...data}
              number={`0${index + 1}`}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  )
}
