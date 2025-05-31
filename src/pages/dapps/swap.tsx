import { useCallback, useEffect, useState } from "react"
import { ButtonSetting } from "@/features/Swap/components/ButtonSetting"
import { useListToken } from "@/features/Swap/hooks/useListToken"
import { Limit } from "@/features/Swap/Limit"
import { useTokenFrom as useTokenLimitFrom } from "@/features/Swap/Limit/hooks/useTokenFrom"
import { useTokenTo as useTokenLimitTo } from "@/features/Swap/Limit/hooks/useTokenTo"
import { Swap } from "@/features/Swap/Swap"
import { useTokenFrom as useTokenSwapFrom } from "@/features/Swap/Swap/hooks/useTokenFrom"
import { useTokenTo as useTokenSwapTo } from "@/features/Swap/Swap/hooks/useTokenTo"
import { getAllCurrencies } from "@/helpers/coingecko"
import { DashboardLayout } from "@/layouts/DashboardLayout"
import { Container, Group, SegmentedControl } from "@mantine/core"

import { TokenBBank } from "@/assets/images"

const TOKEN_BBANK = {
  image: TokenBBank,
  price: 1,
  symbol: "BBANK",
}

export default function SwapPage() {
  const { setValue: setListToken } = useListToken()
  const setSwapTokenFrom = useTokenSwapFrom((state) => state.setValue)
  const setSwapTokenTo = useTokenSwapTo((state) => state.setValue)
  const setLimitTokenFrom = useTokenLimitFrom((state) => state.setValue)
  const setLimitTokenTo = useTokenLimitTo((state) => state.setValue)
  const [selectedTab, setSelectedTab] = useState("swap")

  const getData = useCallback(async () => {
    try {
      const data = await getAllCurrencies()

      const result = [
        TOKEN_BBANK,
        ...data.map((item) => ({
          image: item.image,
          price: item.current_price,
          symbol: item.symbol,
        })),
      ]

      setListToken(result)

      const tokenUSDT = result.find((item) => item.symbol === "usdt")

      setSwapTokenFrom(TOKEN_BBANK)
      setSwapTokenTo(tokenUSDT)

      setLimitTokenFrom(TOKEN_BBANK)
      setLimitTokenTo(tokenUSDT)
    } catch (error) {}
  }, [
    setLimitTokenFrom,
    setLimitTokenTo,
    setListToken,
    setSwapTokenFrom,
    setSwapTokenTo,
  ])

  useEffect(() => {
    void getData()
  }, [getData])

  return (
    <DashboardLayout>
      <Container size={450} px={0}>
        <Group position="apart">
          <SegmentedControl
            sx={{
              ".mantine-SegmentedControl-label": {
                fontWeight: 500,
                color: "rgba(255,255,255,0.5) !important",
                '&[data-active="true"]': {
                  color: "#fff !important",
                },
              },
            }}
            mb={10}
            data={[
              { label: "Swap", value: "swap" },
              { label: "Limit", value: "limit" },
            ]}
            color="dark"
            value={selectedTab}
            onChange={setSelectedTab}
            bg="#4a4a4a"
            radius="md"
          />

          {selectedTab === "swap" && <ButtonSetting />}
        </Group>

        {selectedTab === "swap" ? <Swap /> : <Limit />}
      </Container>
    </DashboardLayout>
  )
}
