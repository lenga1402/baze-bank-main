import React, { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { links } from "@/constants/links"
import { paths } from "@/constants/paths"
import {
  AspectRatio,
  BackgroundImage,
  Box,
  Center,
  Flex,
  MediaQuery,
  rem,
  Text,
  Title,
} from "@mantine/core"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { nanoid } from "nanoid"
import Marquee from "react-fast-marquee"

import {
  ArrowFooter,
  Copyright,
  DiscordIcon,
  OurStudioBg,
  TeleIcon,
  TwitterIcon,
} from "@/assets/images"
import { MirrorIcon, NewLine } from "@/assets/vectors"
import { LogoBrand } from "@/components/LogoBrand"
import { Section } from "@/components/Section"

gsap.registerPlugin(ScrollTrigger)

export function OurStudio() {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".video-footer-trigger",
          start: "top top",
          end: window.screen.width <= 1440 ? "+=500" : "+=600",
          scrub: true,
        },
      })
      .to("#video-footer", {
        width: "100%",
        y: window.screen.width <= 1440 ? rem(300) : rem(400),
      })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".white-section-trigger",
          start: "top center",
          end: "+=800",
          scrub: true,
        },
      })
      .to("#white-section", {
        opacity: 1,
        scale: 250,
      })
  }, [])

  const text1 = "Democratize finance through DeFi"
  const text2 = "innovation, making wealth-building"
  const text3 = "opportunities accessible and secure for all."
  return (
    <BackgroundImage
      pos={"relative"}
      src={OurStudioBg.src}
      sx={{
        overflow: "hidden",
      }}
    >
      <MediaQuery
        styles={{
          display: "none",
        }}
        smallerThan={"md"}
      >
        <Section mih={{ base: 0, md: rem(2400) }} pos={"relative"}>
          <Box
            className={
              window.screen.width <= 1440 ? "video-footer-trigger" : ""
            }
          >
            <Flex direction={"column"} align={"center"}>
              <Flex gap={rem(12)}>
                {text1.split(" ").map((v, i) => (
                  <Title
                    fz={{ base: rem(20), md: rem(48) }}
                    data-aos={"fade-up"}
                    data-aos-delay={i * 50}
                    c={"#fff"}
                    tt={"uppercase"}
                    key={nanoid()}
                    sx={{
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {v}
                  </Title>
                ))}
              </Flex>
              <Flex gap={rem(12)}>
                {text2.split(" ").map((v, i) => (
                  <Title
                    fz={{ base: rem(20), md: rem(48) }}
                    data-aos={"fade-up"}
                    data-aos-delay={i * 50}
                    c={"#fff"}
                    tt={"uppercase"}
                    key={nanoid()}
                    sx={{
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {v}
                  </Title>
                ))}
              </Flex>
              <Flex gap={rem(12)}>
                {text3.split(" ").map((v, i) => (
                  <Title
                    fz={{ base: rem(20), md: rem(48) }}
                    data-aos={"fade-up"}
                    data-aos-delay={i * 50}
                    c={"#fff"}
                    tt={"uppercase"}
                    key={nanoid()}
                    sx={{
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {v}
                  </Title>
                ))}
              </Flex>
            </Flex>

            <Center
              mt={{ base: rem(32), md: rem(68) }}
              className={
                window.screen.width <= 1440 ? "" : "video-footer-trigger"
              }
            >
              <AspectRatio
                ratio={1920 / 920}
                id="video-footer"
                miw={450}
                mih={430}
                top={0}
                sx={{
                  borderRadius: rem(160),
                  overflow: "hidden",
                }}
              >
                <video
                  style={{
                    width: "100%",
                    margin: "auto",
                  }}
                  src="https://cdn.cuberto.com/cb/footer/1.mp4"
                  preload="metadata"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </AspectRatio>
            </Center>
          </Box>

          <Center
            className="white-section-trigger"
            mt={rem(100)}
            pos={"absolute"}
            left={"50%"}
            top={"50%"}
          >
            <Box
              id="white-section"
              w={10}
              h={10}
              bg={"#ffffff"}
              sx={{
                opacity: 0,
                boxShadow: "0px 0px 15px 5px #ffffff, 0px 0px 15px 5px",
                borderRadius: "50%",
              }}
            ></Box>
          </Center>
        </Section>
      </MediaQuery>

      <Section
        bg={"#0a0a0a"}
        sx={{
          "@media only screen and (max-width: 600px)": {
            display: "none",
          },
        }}
      >
        <Title ta={"center"} c={"#fff"} fz={rem(24)}>
          Democratize finance through DeFi innovation, making wealth-building
          opportunities accessible and secure for all.
        </Title>
      </Section>

      {/* footer */}
      <Footer isFadeIn />
    </BackgroundImage>
  )
}

type FooterProps = {
  isFadeIn?: boolean
}

export const Footer: React.FC<FooterProps> = ({ isFadeIn }) => {
  return (
    <Box
      data-aos={isFadeIn ? "fade-in" : ""}
      pos={"sticky"}
      bg={"#fff"}
      pb={{ base: rem(50), md: rem(100) }}
    >
      <Marquee
        autoFill
        play
        style={{
          width: "100%",
          borderTop: "1.5px solid #0A0A0A",
          borderBottom: "1.5px solid #0A0A0A",
          padding: rem(12),
        }}
      >
        <Title
          tt={"uppercase"}
          fz={{ base: rem(16), md: rem(18) }}
          fw={400}
          c={"#0a0a0a"}
          sx={{
            display: "flex",
            gap: rem(40),
            alignItems: "center",
            margin: "0px 20px",
          }}
        >
          Basebank <Box>&#x2022;</Box>
        </Title>
      </Marquee>

      <Flex
        direction={{ base: "column", md: "row" }}
        mt={{ base: rem(60), md: rem(380) }}
        px={{ base: rem(16), md: rem(32) }}
      >
        <Box w={{ base: "90%", md: "30%" }} pl={{ base: rem(0), md: rem(40) }}>
          <LogoBrand variant={"logo-text"} />

          <Text
            mt={{ base: rem(12), md: rem(16) }}
            data-aos={"fade-up"}
            data-aos-delay={50}
            c={"#0a0a0a"}
            fz={{ base: rem(16), md: rem(18) }}
            fw={400}
          >
            hello@bankonbase.xyz
          </Text>

          <Box
            data-aos={"fade-right"}
            w={"100%"}
            sx={{
              "@media only screen and (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            <AspectRatio
              mt={{ base: rem(32), md: rem(55) }}
              ratio={1}
              w={"100%"}
              maw={{ base: rem(40), md: rem(112) }}
            >
              <Image src={ArrowFooter} alt="" fill />
            </AspectRatio>
          </Box>
        </Box>

        <Box w={{ base: "100%", md: "25%" }} mt={{ base: rem(24), md: 0 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            w={"100%"}
            gap={{ base: 0, md: rem(62) }}
          >
            <Box>
              <Box data-aos={"fade-left"} data-aos-delay={0}>
                <Link href={paths.ABOUT}>
                  <Flex
                    data-aos={"fade-left"}
                    data-aos-delay={100}
                    align={"center"}
                  >
                    <NewLine />
                    <Text fz={{ base: rem(16), md: rem(18) }}>About Us</Text>
                  </Flex>
                </Link>
              </Box>
              <Box mt={{ base: rem(12), md: rem(28) }}>
                <Link href={links.DEVELOPER_DOCS}>
                  <Flex
                    data-aos={"fade-left"}
                    data-aos-delay={100}
                    align={"center"}
                  >
                    <NewLine />
                    <Text fz={{ base: rem(16), md: rem(18) }}>
                      Documentation
                    </Text>
                  </Flex>
                </Link>
              </Box>
              <Box mt={{ base: rem(12), md: rem(28) }}>
                <Link href={paths.OVERVIEW}>
                  <Flex
                    data-aos={"fade-left"}
                    data-aos-delay={100}
                    align={"center"}
                  >
                    <NewLine />
                    <Text fz={{ base: rem(16), md: rem(18) }}>Dashboard</Text>
                  </Flex>
                </Link>
              </Box>
            </Box>
            <Box mt={{ base: rem(12), md: 0 }}>
              <Box data-aos={"fade-left"} data-aos-delay={0}>
                <Link href={paths.DAPPS}>
                  <Flex
                    data-aos={"fade-left"}
                    data-aos-delay={100}
                    align={"center"}
                  >
                    <NewLine />
                    <Text fz={{ base: rem(16), md: rem(18) }}>dApps</Text>
                  </Flex>
                </Link>
              </Box>
              <Box mt={{ base: rem(12), md: rem(28) }}>
                <Link href={links.SNAPSHOT}>
                  <Flex
                    data-aos={"fade-left"}
                    data-aos-delay={100}
                    align={"center"}
                  >
                    <NewLine />
                    <Text fz={{ base: rem(16), md: rem(18) }}>SnapShot</Text>
                  </Flex>
                </Link>
              </Box>
              <Box mt={{ base: rem(12), md: rem(28) }}>
                <Link href={links.LEGAL}>
                  <Flex
                    data-aos={"fade-left"}
                    data-aos-delay={100}
                    align={"center"}
                  >
                    <NewLine />
                    <Text fz={{ base: rem(16), md: rem(18) }}>Legal</Text>
                  </Flex>
                </Link>
              </Box>
            </Box>
            <Box>
              <Link href={links.FAQ}>
                <Flex
                  data-aos={"fade-left"}
                  data-aos-delay={150}
                  mt={{ base: rem(12), md: 0 }}
                  align={"center"}
                >
                  <NewLine />
                  <Text fz={{ base: rem(16), md: rem(18) }}>FAQ</Text>
                </Flex>
              </Link>
            </Box>
          </Flex>
        </Box>

        <Box w={{ base: "100%", md: "20%" }} mt={{ base: rem(24) }}>
          <Flex
            w={"100%"}
            gap={{ base: rem(6), md: rem(12) }}
            justify={{ base: "flex-start", md: "flex-end" }}
          >
            <Box data-aos={"fade-up"} data-aos-delay={150} w={rem(44)}>
              <Link href={links.TELEGRAM}>
                <AspectRatio
                  ratio={1}
                  w={"100%"}
                  maw={{ base: rem(32), md: rem(44) }}
                >
                  <Image src={TeleIcon} alt="" fill />
                </AspectRatio>
              </Link>
            </Box>
            <Box data-aos={"fade-up"} data-aos-delay={200} w={rem(44)}>
              <Link href={links.TWITTER}>
                <AspectRatio
                  ratio={1}
                  w={"100%"}
                  maw={{ base: rem(32), md: rem(44) }}
                >
                  <Image src={TwitterIcon} alt="" fill />
                </AspectRatio>
              </Link>
            </Box>
            <Box data-aos={"fade-up"} data-aos-delay={200} w={rem(44)}>
              <Link href={links.DISCORD}>
                <AspectRatio
                  ratio={1}
                  w={"100%"}
                  maw={{ base: rem(32), md: rem(44) }}
                >
                  <Image src={DiscordIcon} alt="" fill />
                </AspectRatio>
              </Link>
            </Box>
          </Flex>
          <Flex
            w={"100%"}
            mt={{ base: rem(12), md: rem(24) }}
            gap={{ base: rem(6), md: rem(12) }}
            justify={{ base: "flex-start", md: "flex-end" }}
          >
            <Box data-aos={"fade-up"} data-aos-delay={150} w={rem(44)}>
              <Link href={links.MEDIUM}>
                <AspectRatio
                  sx={{
                    borderRadius: "50%",
                    border: "2px solid black",
                  }}
                  ratio={1}
                  w={"100%"}
                  maw={{ base: rem(32), md: rem(44) }}
                >
                  <MirrorIcon />
                </AspectRatio>
              </Link>
            </Box>
            {/* <Box data-aos={"fade-up"} data-aos-delay={200} w={rem(44)}>
              <Link href={links.YOUTUBE}>
                <AspectRatio
                  ratio={1}
                  w={"100%"}
                  maw={{ base: rem(32), md: rem(44) }}
                >
                  <Image src={YoutubeIcon} alt="" fill />
                </AspectRatio>
              </Link>
            </Box> */}
            <Box data-aos={"fade-up"} data-aos-delay={150} w={rem(44)}>
              <Link href={links.TELEGRAM_GLOBAL}>
                <AspectRatio
                  ratio={1}
                  w={"100%"}
                  maw={{ base: rem(32), md: rem(44) }}
                >
                  <Image src={TeleIcon} alt="" fill />
                </AspectRatio>
              </Link>
            </Box>
          </Flex>
        </Box>

        <Flex
          data-aos={"fade-left"}
          data-aos-delay={250}
          w={{ base: "100%", md: "25%" }}
          justify={"flex-end"}
          sx={{
            "@media only screen and (max-width: 600px)": {
              display: "none",
            },
          }}
        >
          <AspectRatio ratio={95 / 226} w={"100%"} maw={95}>
            <Image src={Copyright} alt="" fill />
          </AspectRatio>
        </Flex>

        <Flex
          justify={"center"}
          my={rem(12)}
          sx={{
            "@media only screen and (min-width: 600px)": {
              display: "none",
            },
          }}
        >
          <Title fz={rem(24)} fw={600} c={"#0a0a0a"}>
            © 2023
          </Title>
        </Flex>
      </Flex>
    </Box>
  )
}
