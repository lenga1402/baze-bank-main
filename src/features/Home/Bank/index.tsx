import { AspectRatio, Grid, rem, Text } from "@mantine/core"
import { nanoid } from "nanoid"

import { LogoBank } from "@/assets/vectors"
import { Section } from "@/components/Section"

import { Card } from "./Card"
import { homeBankData } from "./data"

export const Bank = () => {
  return (
    <Section fluid={false} size={rem(1700)}>
      <AspectRatio ratio={512 / 129} w={{ base: 150, sm: rem(512) }} mx="auto">
        <LogoBank />
      </AspectRatio>

      <Text
        ta="center"
        mx="auto"
        maw={rem(1000)}
        fz={{ sm: rem(23) }}
        mt={{ base: 30 }}
        mb={{ base: 40, sm: rem(80) }}
      >
        $BBANK token, the heart of BaseBank Protocol, is a transparent
        cryptocurrency with unique tokenomics. In a world where decentralization
        and fair distribution matter, the $BBANK token stands out with its
        commitment to integrity and equitable rewards.
      </Text>

      <Grid gutter={20} gutterSm={rem(30)}>
        {homeBankData.map((item, index) => (
          <Grid.Col key={nanoid()} span={12} sm={6} lg={3}>
            <Card {...item} index={`${index + 1}`} />
          </Grid.Col>
        ))}
      </Grid>
    </Section>
  )
}
