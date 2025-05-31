import { menuSocial } from "@/constants/menus"
import { AspectRatio, Flex, rem } from "@mantine/core"
import { nanoid } from "nanoid"

import { HybridLink } from "@/components/HybridLink"

export const SocialMenu = () => {
  return (
    <Flex
      gap={{ base: 10, sm: rem(20) }}
      justify={{ base: "center", sm: "flex-start" }}
      wrap="wrap"
    >
      {menuSocial.map(({ icon: Icon, link }) => (
        <HybridLink key={nanoid()} href={link}>
          <AspectRatio ratio={1} w={rem(25)}>
            <Icon color="#fff" />
          </AspectRatio>
        </HybridLink>
      ))}
    </Flex>
  )
}
