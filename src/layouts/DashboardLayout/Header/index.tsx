import { Box, Flex, rem } from "@mantine/core"

import { LogoBrand } from "@/components/LogoBrand"
import { Section } from "@/components/Section"

import { ActionButtons } from "./ActionButtons"
import { OffCanvasMenu } from "./OffCanvasMenu"

export const Header = () => {
  return (
    <Section
      pos="sticky"
      top={0}
      left={0}
      right={0}
      py={{ base: 20, lg: rem(15) }}
      bg="#212121"
      sx={{ zIndex: 10 }}
    >
      <Flex align="center" justify="space-between">
        <Box display={{ base: "none", lg: "block" }}></Box>
        <Box display={{ lg: "none" }}>
          <LogoBrand variant="logo-text-light" />
        </Box>
        <OffCanvasMenu display={{ lg: "none" }} />

        <ActionButtons display={{ base: "none", lg: "block" }} />
      </Flex>
    </Section>
  )
}
