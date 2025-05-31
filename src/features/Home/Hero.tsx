import { useEffect } from "react"
import Image from "next/image"
import { dataUser } from "@/constants/keys"
import { Stream } from "@cloudflare/stream-react"
import { AspectRatio, Box, Flex, rem, Text, Title } from "@mantine/core"
import gsap from "gsap"
import { nanoid } from "nanoid"

import { fonts } from "@/assets/fonts"
import { HeroBoy, HeroBoy2 } from "@/assets/images"

export const Hero = () => {
  useEffect(() => {
    const toList: gsap.core.Tween[] = []

    const sections1 = gsap.utils.toArray(".vid")
    const sections2 = gsap.utils.toArray(".text-vid")

    gsap.to(".hero-anim", { width: rem(120), duration: 1, delay: 4 })

    sections1.forEach((section) => {
      const _section = section as gsap.DOMTarget

      const to = gsap.fromTo(
        _section,
        {
          scale: 1,
          clipPath: "inset(0px 0px 200px 0px)",
        },
        {
          // clipPath: `inset(0px 129px 544.07px 129.171px)`,
          clipPath: `inset(0px ${rem(129)} ${rem(544)} ${rem(129.171)})`,
          scrollTrigger: {
            trigger: "#stage2",
            start: `top 80%`,
            end: () => "+=" + (window.innerWidth + 1000).toString(),
            toggleActions: "play none reverse reset",
            scrub: 1,
            // markers: true,
          },
        }
      )

      toList.push(to)
    })

    sections1.forEach((section) => {
      const _section = section as gsap.DOMTarget

      const to = gsap.fromTo(
        _section,
        {
          clipPath: "inset(0px 103.046px 200.846px 103.183px)",
        },
        {
          clipPath: "inset(0px 0px 200px 0px)",
          scrollTrigger: {
            trigger: "#stage1",
            start: `top 100%`,
            end: () => "+=" + (window.innerWidth + 1000).toString(),
            toggleActions: "play none reverse reset",
            scrub: 1,
            // markers: true,
          },
        }
      )

      toList.push(to)
    })

    sections2.forEach((section) => {
      const _section = section as gsap.DOMTarget

      const to = gsap.fromTo(
        _section,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: "#stage2",
            start: `top 100%`,
            end: () => "+=" + (window.innerWidth + 1000).toString(),
            toggleActions: "play none reverse reset",
            scrub: 1,
            // markers: true,
          },
        }
      )

      toList.push(to)
    })

    return () => {
      // clearInterval(interval)
      toList.forEach((to) => {
        to.revert()
      })
    }
  }, [])
  return (
    <>
      <Box display={{ base: "none", lg: "block" }}>
        <Flex
          pt={rem(150)}
          mt={rem(80)}
          direction="row"
          justify="center"
          align="center"
          gap={{ base: 20, lg: rem(40) }}
        >
          <Title tt={"uppercase"} fw={600} fz={{ lg: rem(120) }}>
            BaseBank
          </Title>

          <Box w={0} h={96} className="hero-anim">
            <AspectRatio w={rem(120)} h={rem(120)} ratio={1}>
              <Image src={HeroBoy} alt="" fill />
            </AspectRatio>
          </Box>

          <Flex align={"center"} gap={30}>
            <Title tt={"uppercase"} fw={600} fz={{ lg: rem(120) }}>
              We Build Defi
            </Title>
          </Flex>
        </Flex>

        <Flex
          direction="row"
          justify="center"
          align="center"
          gap={{ base: 20, lg: rem(40) }}
        >
          <Title tt={"uppercase"} fw={600} fz={{ lg: rem(120) }}>
            you build wealth
          </Title>

          <Box h={96}>
            <AspectRatio w={rem(120)} h={120} ratio={1}>
              <Image src={HeroBoy2} alt="" fill />
            </AspectRatio>
          </Box>
        </Flex>

        <Text fz={rem(20)} ta={"center"}>
          With BaseBank, we provide the robust infrastructure and tools needed
          to create financial <br /> opportunities, grow investments, and secure
          your financial future.
        </Text>

        <Box pos={"relative"} mt={rem(100)}>
          <Box
            style={{
              zIndex: 100,
            }}
            h={100}
            w={100}
            pos={"absolute"}
            top={rem(500)}
            bg={"red"}
            id="stage1"
            opacity={0}
          ></Box>

          <Box
            style={{
              zIndex: 100,
            }}
            h={100}
            w={100}
            pos={"absolute"}
            top={rem(5000)}
            bg={"blue"}
            id="stage2"
            opacity={0}
          ></Box>

          <Box w={"100%"} pos={"sticky"} top={"6%"}>
            <Box
              pos={"absolute"}
              top={rem(100)}
              className="text-vid"
              left={"50%"}
              sx={{
                transform: "translateX(-50%)",
                zIndex: 20,
              }}
            >
              <Text ta={"center"} c={"white"} fz={rem(120)}>
                58 268 USERS
              </Text>
              <Text c={"white"} fz={rem(20)} ta={"center"}>
                BaseBank has experienced rapid growth in popularity among crypto
                enthusiasts, amassing a substantial
                <br /> user base of over 50,000 customers within just 6 months
                of operation.
              </Text>
            </Box>

            {/* <video
              className="vid"
              style={{
                width: "100%",
                // borderRadius: "80px",
                // clipPath: "inset(0px 405.425px 258.07px 544.171px)",
                margin: "auto",
                // transform: "translatey(-50%)",
              }}
              src="https://media.wearemotto.com/app/uploads/2022/11/14104326/home-hero-mobile.mp4"
              preload="metadata"
              autoPlay
              loop
              muted
              playsInline
            ></video> */}

            <AspectRatio ratio={3840 / 2160} className="vid">
              <Stream
                src={"cfba010084e47f76d9d05d582a48edbf"}
                autoplay
                loop
                muted
                preload
                responsive={false}
                width="100%"
                height="100%"
              />
            </AspectRatio>
          </Box>

          <Box h={rem(8000)}></Box>
        </Box>

        <Flex px={rem(140)} mt={rem(-500)} pb={rem(150)}>
          {dataUser.map((item) => (
            <Box
              maw={"33.33%"}
              sx={{
                border: "2px solid var(--2-d-2-d-2-d, #2D2D2DA6)",
                borderRadius: "340px",
              }}
              key={nanoid()}
              px={67}
              py={48}
            >
              <Title
                fz={rem(100)}
                ta={"center"}
                ff={fonts.PLUS_jARKATA_SAN.style.fontFamily}
              >
                {item.number}
              </Title>

              <Text fz={rem(20)} ta={"center"}>
                {item.context}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  )
}
