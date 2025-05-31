import { menuSocial } from "@/constants/menus"
import { Box, Flex, rem, Text } from "@mantine/core"
import { nanoid } from "nanoid"

import { HybridLink } from "@/components/HybridLink"

export const SocialMenu = () => {
  return (
    <Flex
      pl={{base: rem(20), md: rem(60)}}
      justify={"center"}
      h={"100vh"}
      gap={rem(36)}
      direction={"column"}
      wrap="wrap"
    >
      {menuSocial.map(({ link, title }) => (
        <HybridLink key={nanoid()} href={link}>
          <Box
            w={"fit-content"}
            sx={{
              "&:hover": {
                ".line": {
                  width: "100%",
                },
              },
            }}
            pos={"relative"}
          >
            <Text fz={{ base: rem(14), md: rem(20) }}>{title}</Text>
            <Box
              sx={{ transition: "all 0.7s" }}
              className="line"
              w={"0px"}
              h={1}
              pos={"absolute"}
              bottom={0}
              bg={"black"}
            ></Box>
          </Box>
        </HybridLink>
      ))}
    </Flex>
  )
}
