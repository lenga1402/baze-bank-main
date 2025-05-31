import { dataDapps1, dataDapps2, dataDapps3 } from "@/constants/keys"
import { Box, Flex, Grid, Group, Paper, rem, Text, Title } from "@mantine/core"

import {
  AddressIcon,
  ALeft,
  ARight,
  Coin,
  PriceIcon,
  SwapIcon,
  TradeIcon,
} from "@/assets/vectors"

import { AreaChartComponent } from "./components/AreaChart"
import { StackBarChart } from "./components/BarChart"

export const Overview = () => {
  return (
    <Box>
      <Grid gutter={20}>
        <Grid.Col span={12} lg={8}>
          <Box p={25} sx={{ borderRadius: "16px" }} bg={"#2D2D2D"}>
            <Group>
              <Coin />
              <Text fw={500} c={"white"} fz={rem(16)}>
                Trading Volume (24H)
              </Text>
            </Group>
            <Title mt={13} c={"white"} fz={rem(32)}>
              $ 435,86K
            </Title>
            <Group mt={12}>
              <Text c={"#85858D"} fz={rem(12)}>
                09/07
              </Text>

              <Box
                bg={"rgba(233, 77, 106, 0.10)"}
                sx={{ borderRadius: "10px" }}
                px={8}
                py={2}
              >
                <Text c={"#E94D6A"} fz={rem(12)}>
                  -48.91%
                </Text>
              </Box>
            </Group>
            <StackBarChart />
          </Box>
        </Grid.Col>

        <Grid.Col span={12} lg={4}>
          <Paper p={25} sx={{ borderRadius: "16px" }} bg={"#2D2D2D"} withBorder>
            <Group>
              <AddressIcon />
              <Text fw={500} c={"white"} fz={rem(16)}>
                Number of Trades
              </Text>
            </Group>

            <Flex gap={30} justify={"space-between"} mt={10}>
              <Box>
                <Title c={"white"} fz={rem(32)}>
                  2,904
                </Title>

                <Text fz={rem(12)} c={"#85858D"} mt={12}>
                  Past 24H
                </Text>
              </Box>

              <Box maw={300} w={"100%"}>
                <AreaChartComponent data={dataDapps1} height={150} />
              </Box>
            </Flex>
          </Paper>

          <Paper
            mt={20}
            p={25}
            sx={{ borderRadius: "16px" }}
            bg={"#2D2D2D"}
            withBorder
          >
            <Group>
              <TradeIcon />
              <Text fw={500} c={"white"} fz={rem(16)}>
                Number of Trades
              </Text>
            </Group>

            <Flex gap={30} justify={"space-between"} mt={10}>
              <Box>
                <Title c={"white"} fz={rem(32)}>
                  6,257
                </Title>

                <Text fz={rem(12)} c={"#85858D"} mt={12}>
                  Past 24H
                </Text>
              </Box>

              <Box maw={300} w={"100%"}>
                <AreaChartComponent data={dataDapps2} height={150} />
              </Box>
            </Flex>
          </Paper>
        </Grid.Col>
      </Grid>

      <Grid mt={20}>
        <Grid.Col span={12} lg={8}>
          <Box p={25} sx={{ borderRadius: "16px" }} bg={"#2D2D2D"}>
            <Text fw={500} c={"white"} fz={rem(16)}>
              TVL (24H)
            </Text>

            <Title mt={13} c={"white"} fz={rem(32)}>
              $ 5,05M
            </Title>
            <Group mt={12}>
              <Text c={"#85858D"} fz={rem(12)}>
                09/07
              </Text>

              <Box
                bg={"rgba(45, 203, 116, 0.10)"}
                sx={{ borderRadius: "10px" }}
                px={8}
                py={2}
              >
                <Text c={"#2DCB74"} fz={rem(12)}>
                  +2.06%
                </Text>
              </Box>
            </Group>

            <AreaChartComponent data={dataDapps3} height={340} />
          </Box>
        </Grid.Col>

        <Grid.Col span={12} lg={4}>
          <Paper p={25} sx={{ borderRadius: "16px" }} bg={"#2D2D2D"} withBorder>
            <Flex justify={"space-between"}>
              <Group>
                <SwapIcon />
                <Text fw={500} c={"white"} fz={rem(16)}>
                  Trading Pairs
                </Text>
              </Group>

              <Text fw={500} c={"white"} fz={rem(24)}>
                1330
              </Text>
            </Flex>

            <Flex align={"center"} gap={20} justify={"space-between"} mt={10}>
              <Box
                opacity={0.3}
                bg={"#464850"}
                py={11}
                px={16}
                sx={{ borderRadius: "8px" }}
              >
                <ALeft />
              </Box>

              <Flex direction={"column"} w={rem(114)}>
                <Text c={"#85858D"} fz={rem(12)}>
                  ETH
                </Text>

                <Text c={"white"} fz={rem(16)}>
                  355
                </Text>

                <Text mt={9} c={"#85858D"} fz={rem(12)}>
                  Base
                </Text>

                <Text c={"white"} fz={rem(16)}>
                  145
                </Text>
              </Flex>

              <Flex direction={"column"} w={rem(114)}>
                <Text c={"#85858D"} fz={rem(12)}>
                  BNBChain
                </Text>

                <Text c={"white"} fz={rem(16)}>
                  687
                </Text>

                <Text mt={9} c={"#85858D"} fz={rem(12)}>
                  Arbitrum
                </Text>

                <Text c={"white"} fz={rem(16)}>
                  103
                </Text>
              </Flex>

              <Box bg={"#464850"} py={11} px={16} sx={{ borderRadius: "8px" }}>
                <ARight />
              </Box>
            </Flex>
          </Paper>

          <Paper
            mt={20}
            p={25}
            sx={{ borderRadius: "16px" }}
            bg={"#2D2D2D"}
            withBorder
          >
            <Flex justify={"space-between"}>
              <Group>
                <PriceIcon />
                <Text fw={500} c={"white"} fz={rem(16)}>
                  $BBANK Price
                </Text>
              </Group>

              <Text fw={500} c={"white"} fz={rem(24)}>
                N/A
              </Text>
            </Flex>
            <Flex align={"center"} gap={20} justify={"space-between"} mt={10}>
              <Box
                opacity={0.3}
                bg={"#464850"}
                py={11}
                px={16}
                sx={{ borderRadius: "8px" }}
              >
                <ALeft />
              </Box>

              <Flex direction={"column"} w={rem(114)}>
                <Text c={"#85858D"} fz={rem(12)}>
                  ETH
                </Text>

                <Text c={"white"} fz={rem(16)}>
                  563
                </Text>

                <Text mt={9} c={"#85858D"} fz={rem(12)}>
                  Polygon
                </Text>

                <Text c={"white"} fz={rem(16)}>
                  4529
                </Text>
              </Flex>

              <Flex direction={"column"} w={rem(114)}>
                <Text c={"#85858D"} fz={rem(12)}>
                  BNBChain
                </Text>

                <Text c={"white"} fz={rem(16)}>
                  14,465
                </Text>

                <Text mt={9} c={"#85858D"} fz={rem(12)}>
                  Arbitrum
                </Text>

                <Text c={"white"} fz={rem(16)}>
                  234
                </Text>
              </Flex>

              <Box bg={"#464850"} py={11} px={16} sx={{ borderRadius: "8px" }}>
                <ARight />
              </Box>
            </Flex>
          </Paper>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
