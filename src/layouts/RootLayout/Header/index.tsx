import React, { useEffect, useState } from "react"
import Link from "next/link"
import { paths } from "@/constants/paths"
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  rem,
  Text,
} from "@mantine/core"
import { useScrollLock } from "@mantine/hooks"

import { BurgerMenu } from "@/assets/vectors"
import { LogoBrand } from "@/components/LogoBrand"
import { Section } from "@/components/Section"

import { NavMenu } from "./NavMenu"

export const Header = () => {
  const [opened, setOpened] = useState(false)
  const [, setLocked] = useScrollLock(false)
  useEffect(() => {
    if (opened) {
      setLocked(true)
    } else {
      setLocked(false)
    }
  }, [opened, setLocked])

  const menuStyle: React.CSSProperties = {
    height: opened ? "100vh" : "0px",
    transition: "all 0.5s ease-in-out",
    pointerEvents: opened ? "all" : "none",
  }

  const textStyle: React.CSSProperties = {
    pointerEvents: opened ? "all" : "none",
    opacity: opened ? "1" : "0",
    transition: "all 0.5s ease-in-out",
  }

  return (
    <Box>
      <Section
        pos="fixed"
        top={0}
        left={0}
        right={0}
        py={rem(20)}
        sx={{
          zIndex: 100,
        }}
      >
        <Flex align="center" justify="space-between">
          <LogoBrand variant="logo-text" />

          <Flex gap={40}>
            <Link href={paths.DAPPS} target="_blank" rel="noopener noreferrer">
              <Button
                display={{ base: "none", lg: "block" }}
                c={"black"}
                variant="outline"
                sx={{ border: "1px solid black", borderRadius: "30px" }}
              >
                Launch App
              </Button>
            </Link>

            <Flex
              style={{
                position: "relative",
                // transition: "0.5s ease-in-out",
                left: opened ? "-15px" : "0px",
              }}
              onClick={() => setOpened(!opened)}
            >
              <Box
                w={rem(43)}
                h={rem(36)}
                pos={"relative"}
                sx={{
                  borderRadius: "23px 0px 0px 23px",
                  border: " 2px solid var(--2-d-2-d-2-d, #2D2D2D)",
                  borderRight: "1px solid var(--2-d-2-d-2-d, #2D2D2D)",
                  transform: opened ? "rotate(-5deg)" : "rotate(0deg)",
                  left: opened ? "-5px" : "0px",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                <Text p={3} ta={"center"} fz={rem(16)}>
                  M
                </Text>
              </Box>

              <Box
                pos={"relative"}
                w={rem(43)}
                h={rem(36)}
                py={8}
                pr={2}
                sx={{
                  transform: opened ? "rotate(5deg)" : "rotate(0deg)",
                  left: opened ? "5px" : "0px",
                  borderRadius: "0px 23px 23px 0px",
                  border: " 2px solid var(--2-d-2-d-2-d, #2D2D2D)",
                  borderLeft: "1px solid var(--2-d-2-d-2-d, #2D2D2D)",
                  transition: "all 0.5s ease-in-out",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#2D2D2D",
                    svg: {
                      filter:
                        "invert(10%) sepia(0%) saturate(918%) hue-rotate(235deg) brightness(999%) contrast(80%)",
                    },
                  },
                }}
              >
                <Center>
                  <AspectRatio w={14} ratio={14 / 13}>
                    <BurgerMenu />
                  </AspectRatio>
                </Center>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Section>

      <NavMenu
        handleClose={() => setOpened(false)}
        styleWrap={menuStyle}
        styleContent={textStyle}
        // handleClose={handleClose}
      />
    </Box>
  )
}
