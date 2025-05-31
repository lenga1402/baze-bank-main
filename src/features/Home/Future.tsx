import { useEffect } from "react"
import Image from "next/image"
import { links } from "@/constants/links"
import {
  AspectRatio,
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

import {
  Mess1,
  Mess2,
  Mess3,
  Mess4,
  Messenger,
  Security,
} from "@/assets/images"
import { HybridLink } from "@/components/HybridLink"
import { Section } from "@/components/Section"

gsap.registerPlugin(ScrollTrigger)

export const Future = () => {
  useEffect(() => {
    gsap.fromTo(
      "#img-mess1",
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".trigger1",
          start: "top bottom",
          end: "+=200px",
          toggleActions: "restart none none reverse",
        },
      }
    )

    gsap.fromTo(
      "#img-mess2",
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        delay: 0.25,
        scrollTrigger: {
          trigger: ".trigger2",
          start: "top bottom",
          end: "+=200px",
          toggleActions: "restart none none reverse",
        },
      }
    )

    gsap.fromTo(
      "#img-mess3",
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".trigger3",
          start: "top bottom",
          end: "+=200px",
          toggleActions: "restart none none reverse",
        },
      }
    )

    gsap.fromTo(
      "#img-mess4",
      { opacity: 0, y: 300 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".trigger4",
          start: "top bottom",
          end: "+=200px",
          toggleActions: "restart none none reverse",
        },
      }
    )
  }, [])

  return (
    <Section
      bg={"#2D2D2D"}
      sx={{
        overflow: "hidden",
        "&:hover ~ .mf-cursor": {
          color: "#fff",
        },
      }}
    >
      <Center>
        <AspectRatio ratio={58 / 80} w={{ base: rem(30), md: rem(58) }}>
          <Image src={Security} alt="" fill />
        </AspectRatio>
      </Center>
      <Title
        tt={"uppercase"}
        ta={"center"}
        c={"#fff"}
        fz={{ base: rem(28), md: rem(80) }}
        fw={600}
        mt={{ base: rem(14), md: rem(28) }}
        sx={{
          whiteSpace: "pre-wrap",
        }}
      >
        {`BaseBank DAO for\nCo-Building the Future`}
      </Title>

      <Center>
        <Text
          ta={"center"}
          fw={400}
          fz={{ base: rem(14), md: rem(20) }}
          c={"#fff"}
          mt={{ base: rem(14), md: rem(30) }}
          maw={rem(1044)}
        >
          Our goal is to create the most extensive web3 identity network in the
          realms of culture and entertainment, fueling the growth of
          individuals, projects, and the industry as a whole.
        </Text>
      </Center>

      <MediaQuery
        smallerThan={"md"}
        styles={{
          display: "none",
        }}
      >
        <Box pos={"relative"}>
          <Center mt={{ base: rem(40), md: rem(80) }}>
            <AspectRatio ratio={375 / 705} w={"90%"} maw={375}>
              <Image
                src={Messenger}
                alt=""
                fill
                style={{
                  backdropFilter: "blur(10px)",
                }}
              />
            </AspectRatio>
          </Center>
          <Flex
            className="trigger1"
            left={`calc(40% - 340px)`}
            top={rem(140)}
            pos={"absolute"}
            id="img-mess1"
            gap={"lg"}
            justify={"center"}
          >
            <AspectRatio
              ratio={1}
              w={112}
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image src={Mess1} alt="" fill />
            </AspectRatio>

            <Box
              bg={"#fff"}
              py={{ base: rem(10), md: rem(20) }}
              px={{ base: rem(15), md: rem(30) }}
              sx={{
                borderRadius: rem(30),
              }}
            >
              <Title fz={{ base: rem(12), md: rem(20) }}>Governance</Title>
              <Text
                mt={rem(8)}
                lh={rem(15)}
                fz={{ base: rem(10), md: rem(14) }}
                sx={{
                  whiteSpace: "pre-wrap",
                }}
              >
                {"Improving fairness and\nmanagement of the DAO"}
              </Text>
            </Box>
          </Flex>

          <Flex
            className="trigger2"
            right={`calc(40% - 340px)`}
            top={rem(140)}
            pos={"absolute"}
            id="img-mess2"
            gap={"lg"}
            justify={"center"}
          >
            <AspectRatio
              ratio={1}
              w={112}
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image src={Mess2} alt="" fill />
            </AspectRatio>

            <Box
              bg={"#fff"}
              py={{ base: rem(10), md: rem(20) }}
              pl={{ base: rem(15), md: rem(30) }}
              pr={{ base: rem(32), md: rem(64) }}
              sx={{
                borderRadius: rem(30),
              }}
            >
              <Title fz={{ base: rem(12), md: rem(20) }}>
                Culture Building
              </Title>
              <Text
                mt={rem(8)}
                lh={rem(15)}
                fz={{ base: rem(10), md: rem(14) }}
                sx={{
                  whiteSpace: "pre-wrap",
                }}
              >
                {"Expanding influence and exposure\nof BaseBank"}
              </Text>
            </Box>
          </Flex>

          <Flex
            className="trigger3"
            right={`calc(45% - 340px)`}
            top={rem(300)}
            pos={"absolute"}
            id="img-mess3"
            gap={"lg"}
            justify={"center"}
          >
            <Box
              bg={"#DEFAA8"}
              py={{ base: rem(10), md: rem(20) }}
              pl={{ base: rem(15), md: rem(30) }}
              pr={{ base: rem(32), md: rem(64) }}
              sx={{
                borderRadius: rem(30),
              }}
            >
              <Title fz={{ base: rem(12), md: rem(20) }}>
                Experience Building
              </Title>
              <Text
                mt={rem(8)}
                lh={rem(15)}
                fz={{ base: rem(10), md: rem(14) }}
                sx={{
                  whiteSpace: "pre-wrap",
                }}
              >
                {"Enriching BBANK holder \nutility and experience"}
              </Text>
            </Box>

            <AspectRatio
              ratio={1}
              w={112}
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image src={Mess3} alt="" fill />
            </AspectRatio>
          </Flex>

          <Flex
            className="trigger4"
            left={`calc(40% - 310px)`}
            top={rem(350)}
            pos={"absolute"}
            id="img-mess4"
            gap={"lg"}
            justify={"center"}
          >
            <AspectRatio
              ratio={1}
              w={112}
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image src={Mess4} alt="" fill />
            </AspectRatio>
            <Box
              bg={"#FFF"}
              py={{ base: rem(10), md: rem(20) }}
              pl={{ base: rem(15), md: rem(30) }}
              pr={{ base: rem(32), md: rem(64) }}
              sx={{
                borderRadius: rem(30),
              }}
            >
              <Title fz={{ base: rem(12), md: rem(20) }}>DAO of DAOs</Title>
              <Text
                mt={rem(8)}
                lh={rem(15)}
                fz={{ base: rem(10), md: rem(14) }}
                sx={{
                  whiteSpace: "pre-wrap",
                }}
              >
                {"Foster collaboration with DAOs\naround the world"}
              </Text>
            </Box>
          </Flex>
        </Box>
      </MediaQuery>

      <MediaQuery
        largerThan={"md"}
        styles={{
          display: "none",
        }}
      >
        <Box pos={"relative"}>
          <Center mt={{ base: rem(40), md: rem(80) }}>
            <AspectRatio ratio={375 / 705} w={"90%"} maw={375}>
              <Image src={Messenger} alt="" fill />
            </AspectRatio>
          </Center>
          <Flex
            direction={"column"}
            pos={"absolute"}
            top={rem(100)}
            gap={"lg"}
            align={"center"}
            w={"100%"}
          >
            <Flex
              data-aos={"fade-up"}
              data-aos-duration={"1000"}
              justify={"space-between"}
              w={"100%"}
              align={"center"}
            >
              <AspectRatio
                ratio={1}
                w={60}
                h={60}
                sx={{
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Image src={Mess1} alt="" fill />
              </AspectRatio>

              <Box
                w={"75%"}
                bg={"#fff"}
                p={rem(10)}
                sx={{
                  borderRadius: rem(10),
                }}
              >
                <Title fz={{ base: rem(12), md: rem(20) }}>Governance</Title>
                <Text
                  mt={rem(8)}
                  lh={rem(12)}
                  fz={{ base: rem(10), md: rem(14) }}
                  sx={{
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {"Improving fairness and\nmanagement of the DAO"}
                </Text>
              </Box>
            </Flex>

            <Flex
              data-aos={"fade-up"}
              data-aos-duration={"1000"}
              justify={"space-between"}
              w={"100%"}
              align={"center"}
            >
              <AspectRatio
                ratio={1}
                w={60}
                h={60}
                sx={{
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Image src={Mess2} alt="" fill />
              </AspectRatio>

              <Box
                w={"75%"}
                bg={"#fff"}
                p={rem(10)}
                sx={{
                  borderRadius: rem(12),
                }}
              >
                <Title fz={{ base: rem(12), md: rem(20) }}>
                  Culture Building
                </Title>
                <Text
                  mt={rem(8)}
                  lh={rem(15)}
                  fz={{ base: rem(10), md: rem(14) }}
                  sx={{
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {"Expanding influence and exposure\nof BaseBank"}
                </Text>
              </Box>
            </Flex>

            <Flex
              data-aos={"fade-up"}
              data-aos-duration={"1000"}
              justify={"space-between"}
              w={"100%"}
              align={"center"}
            >
              <Box
                w={"75%"}
                bg={"#DEFAA8"}
                p={rem(10)}
                sx={{
                  borderRadius: rem(12),
                }}
              >
                <Title fz={{ base: rem(12), md: rem(20) }}>
                  Experience Building
                </Title>
                <Text
                  mt={rem(8)}
                  lh={rem(15)}
                  fz={{ base: rem(10), md: rem(14) }}
                  sx={{
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {"Foster collaboration with DAOs\naround the world"}
                </Text>
              </Box>

              <AspectRatio
                ratio={1}
                w={60}
                h={60}
                sx={{
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Image src={Mess3} alt="" fill />
              </AspectRatio>
            </Flex>

            <Flex
              data-aos={"fade-up"}
              data-aos-duration={"1000"}
              justify={"space-between"}
              w={"100%"}
              align={"center"}
            >
              <AspectRatio
                ratio={1}
                w={60}
                h={60}
                sx={{
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Image src={Mess4} alt="" fill />
              </AspectRatio>
              <Box
                w={"75%"}
                bg={"#FFF"}
                p={rem(10)}
                sx={{
                  borderRadius: rem(12),
                }}
              >
                <Title fz={{ base: rem(12), md: rem(20) }}>DAO of DAOs</Title>
                <Text
                  mt={rem(8)}
                  lh={rem(15)}
                  fz={{ base: rem(10), md: rem(14) }}
                  sx={{
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {"Foster collaboration with DAOs\naround the world"}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </MediaQuery>

      <Center mt={{ base: rem(36), md: rem(60) }}>
        <HybridLink href={links.SNAPSHOT}>
          <Box
            px={{ base: rem(24), md: rem(40) }}
            py={{ base: rem(12), md: rem(20) }}
            bg={"#DEFAA844"}
            sx={{
              borderRadius: rem(100),
              cursor: "pointer",
            }}
          >
            <Title c={"#DEFAA8"} fz={{ base: rem(16), md: rem(24) }}>
              BBANK DAO Snapshot
            </Title>
          </Box>
        </HybridLink>
      </Center>
    </Section>
  )
}
