import { useEffect, useRef } from "react"
import Image from "next/image"
import { AspectRatio, Box, Flex, rem, Title } from "@mantine/core"
import gsap from "gsap"

import { DevImg, DevImg2, DevImg3 } from "@/assets/images"
import { Section } from "@/components/Section"

export const Dev = () => {
  const triggerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 50%",
        end: "+=800",
        // markers: true,
        scrub: 1,
        toggleActions: "play none reverse reset",
      },
    })
    const tl2 = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 20%",
        end: "+=1000",
        // markers: true,
        scrub: 1,
        toggleActions: "play none reverse reset",
      },
    })
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 40%",
        end: "+=2300",
        // markers: true,
        scrub: 1,
        toggleActions: "play none reverse reset",
      },
    })
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 10%",
        end: "+=2000",
        // markers: true,
        scrub: 1,
        toggleActions: "play none reverse reset",
      },
    })

    tl.fromTo(
      ".contributor",
      { width: 0, opacity: 0.8 },
      { width: rem(770), opacity: 1 }
    )

    tl.fromTo(
      ".contributor",
      { transform: "translateY(0px) scale(1)", opacity: 0.99 },
      { transform: "translateY(-80px) scale(0.7)", opacity: 0 }
    )
    //tl2
    tl2.fromTo(
      ".gsap-text",
      { transform: "translateY(80px) scale(0.7)", opacity: 0 },
      {
        transform: "translateY(-13px) scale(1)",
        opacity: 1,
      }
    )
    //tl4
    tl3.to(".img-anim", { transform: "translateY(-800px)" })
    tl4.to(".img-anim-2", { transform: "translateY(-800px)" })

    return () => {
      tl.revert()
      tl2.revert()
      tl3.revert()
    }
  }, [])

  return (
    <Box
      pos="relative"
      h={{ lg: "320vh" }}
      display={{ base: "none", lg: "block" }}
    >
      <Section
        pos="sticky"
        top={0}
        h="100vh"
        px={{ base: 15, sm: 25, lg: rem(40) }}
        bg="#D2D5F3"
        sx={{ zIndex: 2 }}
      >
        <Flex direction="column" justify="center" h="100%">
          <Title
            fz={{ base: 36, lg: rem(86) }}
            ta="center"
            fw={600}
            tt="uppercase"
          >
            BaseBank is a
          </Title>
          <Title
            c="#fff"
            fz={{ base: 36, lg: rem(86) }}
            ta="center"
            fw={600}
            tt="uppercase"
          >
            multi-chain DEX
          </Title>
          <Flex ref={triggerRef} align="center" justify="center" gap={rem(25)}>
            <Title
              fz={{ base: 36, lg: rem(86) }}
              ta="center"
              fw={600}
              tt="uppercase"
            >
              secured by
            </Title>
            <Flex
              direction="column"
              align="center"
              justify="center"
              pos="relative"
              pt={rem(10)}
            >
              <Box
                className="contributor"
                sx={{
                  transformOrigin: "center",
                  overflow: "hidden",
                  borderRadius: rem(60),
                }}
              >
                <AspectRatio
                  ratio={524 / 74}
                  w={rem(524)}
                  h={rem(74)}
                  mx="auto"
                >
                  <Image src={DevImg3} alt="dev" />
                </AspectRatio>
              </Box>
              <Title
                pos="absolute"
                top={0}
                w={{ lg: rem(770) }}
                fz={{ base: 36, lg: rem(86) }}
                ta="center"
                fw={600}
                tt="uppercase"
                className="gsap-text"
              >
                zero-knowledge
              </Title>
            </Flex>
            <Title
              fz={{ base: 36, lg: rem(86) }}
              ta="center"
              fw={600}
              tt="uppercase"
            >
              proofs.
            </Title>
          </Flex>
        </Flex>
        <AspectRatio
          ratio={734 / 680}
          w={rem(734)}
          pos="absolute"
          right={rem(50)}
          bottom={0}
          className="img-anim"
          sx={{ zIndex: -1, transform: "translateY(800px)" }}
        >
          <Image src={DevImg} alt="dev" />
        </AspectRatio>
        <AspectRatio
          ratio={734 / 680}
          w={rem(734)}
          pos="absolute"
          bottom="-20%"
          className="img-anim-2"
          sx={{ zIndex: -1, transform: "translateY(1200px)" }}
        >
          <Image src={DevImg2} alt="dev" />
        </AspectRatio>
      </Section>
    </Box>
  )
}
