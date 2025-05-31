import { Box, Divider, Flex, Grid, rem, Text } from "@mantine/core"

import { Section, type SectionProps } from "@/components/Section"

import { CategoryMenu } from "./CategoryMenu"
import { Information } from "./Information"
import { SocialMenu } from "./SocialMenu"
import { SubscribeForm } from "./SubscribeForm"

export const Footer = (props: SectionProps) => {
  return (
    <Box sx={{ zIndex: 0 }}>
      <Section {...props}>
        <Grid gutter={30} gutterLg={rem(30)}>
          <Grid.Col span={12} lg={4}>
            <Information />
          </Grid.Col>

          <Grid.Col span={12} lg={4}>
            <CategoryMenu />
          </Grid.Col>

          <Grid.Col span={12} lg={4}>
            <Flex
              justify={{ base: "center", sm: "flex-start", lg: "flex-end" }}
            >
              <Flex direction="column" gap={{ base: 20, lg: rem(40) }}>
                <SubscribeForm />

                <SocialMenu />
              </Flex>
            </Flex>
          </Grid.Col>
        </Grid>
      </Section>

      <Divider color="#ffffff25" />

      <Text
        ta="center"
        px={{ base: 15, lg: rem(50) }}
        py={rem(15)}
        fz={rem(12)}
      >
        &copy;2023 by Base T3 w. Web3 - All rights reserved.
      </Text>
    </Box>
  )
}
