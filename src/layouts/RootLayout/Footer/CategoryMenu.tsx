import { rootMenuFooter } from "@/constants/menus"
import { Box, Flex, rem, Text } from "@mantine/core"
import { nanoid } from "nanoid"

import { HybridLink } from "@/components/HybridLink"

export const CategoryMenu = () => {
  return (
    <Flex
      justify={{ base: "center", sm: "flex-start", lg: "space-between" }}
      gap={{ base: 30, sm: 50, lg: rem(30) }}
    >
      {rootMenuFooter.map(({ category, menu }) => (
        <Box key={nanoid()}>
          <Text mb={rem(20)} fw="bold">
            {category}
          </Text>

          <Flex direction="column" gap={rem(5)}>
            {menu.map(({ link, title }) => (
              <HybridLink key={nanoid()} href={link}>
                <Text c="#fff">{title}</Text>
              </HybridLink>
            ))}
          </Flex>
        </Box>
      ))}
    </Flex>
  )
}
