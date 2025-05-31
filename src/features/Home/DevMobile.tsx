import { useEffect, useRef } from "react"
import Image from "next/image"
import { AspectRatio, Box, Flex, rem, Title } from "@mantine/core"
import gsap from "gsap"

import { DevImg, DevImg2, DevImg4, DevImg5 } from "@/assets/images"
import { Section } from "@/components/Section"

export const DevMobile = () => {
  const triggerRef = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 10%",
        end: `+=400`,
        // markers: true,
        scrub: 3,
        toggleActions: "play none reverse reset",
      },
    })
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 20%",
        end: `+=1000`,
        // markers: true,
        scrub: 3,
        toggleActions: "play none reverse reset",
      },
    })

    tl.to(".img-m-anim", {
      transform: "translateY(-1000px)",
    })
    tl2.to(".img-m-anim-2", {
      transform: "translateY(-1000px)",
    })

    return () => {
      tl.revert()
    }
  }, [])

  return (
    <Box bg="#D2D5F3" pos="relative" sx={{ zIndex: 1 }}>
      <Section h="150vh" display={{ base: "block", lg: "none" }}>
        <Flex
          pos="sticky"
          top={200}
          direction="column"
          justify="center"
          ref={triggerRef}
        >
          <Title fz={36} fw={600} tt="uppercase">
            BASEBANK IS A
          </Title>
          <Title c="#fff" fz={36} fw={600} tt="uppercase">
            multi-chain DEX
          </Title>
          <Title fz={36} fw={600} tt="uppercase">
            secured by
          </Title>
          <Box
            my={8}
            sx={{
              borderRadius: rem(60),
            }}
          >
            <AspectRatio ratio={300 / 74} maw={300}>
              <Image src={DevImg4} alt="dev" />
            </AspectRatio>
          </Box>
          <Title fz={36} fw={600} tt="uppercase">
            zero-knowledge
          </Title>
          <Box
            my={8}
            sx={{
              borderRadius: rem(60),
            }}
          >
            <AspectRatio ratio={244 / 74} maw={244}>
              <Image src={DevImg5} alt="dev" />
            </AspectRatio>
          </Box>
          <Title fz={36} fw={600} tt="uppercase">
            proofs.
          </Title>
        </Flex>
      </Section>
      <AspectRatio
        ratio={734 / 680}
        w={250}
        pos="absolute"
        right={rem(50)}
        bottom={0}
        className="img-m-anim"
        sx={{ zIndex: -1, transform: "translateY(500px)" }}
      >
        <Image src={DevImg} alt="dev" />
      </AspectRatio>
      <AspectRatio
        ratio={734 / 680}
        w={250}
        pos="absolute"
        bottom={0}
        className="img-m-anim-2"
        sx={{ zIndex: -1, transform: "translateY(600px)" }}
      >
        <Image src={DevImg2} alt="dev" />
      </AspectRatio>
    </Box>
  )
}
