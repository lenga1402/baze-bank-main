import { Box, Flex, rem, Text } from "@mantine/core"
import Balancer from "react-wrap-balancer"

import { LogoBrand } from "@/components/LogoBrand"

export const Information = () => {
  return (
    <Box>
      <Flex
        align="center"
        gap={rem(20)}
        mb={rem(20)}
        justify={{ base: "center", sm: "flex-start" }}
      >
        <LogoBrand />

        <Text fw="bold" fz={rem(20)}>
          Base T3 w. Web3
        </Text>
      </Flex>

      <Text ta={{ base: "center", sm: "start" }}>
        <Balancer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          explicabo inventore molestias quidem maxime fuga optio cumque? Minus,
          quisquam possimus!
        </Balancer>
      </Text>
    </Box>
  )
}
