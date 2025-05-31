import Image from "next/image"
import { paths } from "@/constants/paths"
import { AspectRatio, Box, Grid, rem, Title } from "@mantine/core"

import { HomeSolution1, HomeSolution2 } from "@/assets/images"
import { HybridLink } from "@/components/HybridLink"
import { Section } from "@/components/Section"

export const Solution = () => {
  return (
    <Section fluid={false} size={rem(1650)}>
      <Title
        order={2}
        tt="uppercase"
        ta="center"
        fz={{ base: 32, sm: 50, lg: rem(80) }}
        lh="1.2em"
        fw={600}
      >
        BaseBank SuperDEX:{" "}
        <Box display={{ base: "inline-block", lg: "block" }}>
          Identify Web3 Solution
        </Box>
      </Title>

      <Grid mt={{ base: 40, sm: rem(80) }} gutter={20} gutterLg={rem(40)}>
        <Grid.Col span={12} lg={6}>
          <HybridLink href={paths.SWAP}>
            <AspectRatio ratio={773 / 540}>
              <Image alt="" fill src={HomeSolution1} />
            </AspectRatio>
          </HybridLink>
        </Grid.Col>

        <Grid.Col span={12} lg={6}>
          <AspectRatio ratio={773 / 555}>
            <Image alt="" fill src={HomeSolution2} />
          </AspectRatio>
        </Grid.Col>
      </Grid>
    </Section>
  )
}
