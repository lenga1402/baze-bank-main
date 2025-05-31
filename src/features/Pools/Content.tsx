import { Grid } from "@mantine/core"

import { AddLiquidity } from "./AddLiquidity"
import { HowItWork } from "./components/HowItWork"

export const Content = () => {
  return (
    <Grid>
      <Grid.Col lg={8} order={2} orderLg={1}>
        <AddLiquidity />
      </Grid.Col>
      <Grid.Col lg={4} order={1} orderLg={2}>
        <HowItWork />
      </Grid.Col>
    </Grid>
  )
}
