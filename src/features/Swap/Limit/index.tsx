import { useState } from "react"
import { AspectRatio, Button, Flex } from "@mantine/core"
import { useWeb3Modal } from "@web3modal/react"
import { useAccount } from "wagmi"

import { IconArrowSwap } from "@/assets/vectors"

import { Fee } from "./Fee"
import { useTokenFrom } from "./hooks/useTokenFrom"
import { useTokenTo } from "./hooks/useTokenTo"
import { MoreInfo } from "./MoreInfo"
import { SectionFrom } from "./SectionFrom"
import { SectionTo } from "./SectionTo"

export const Limit = () => {
  const { isConnected } = useAccount()
  const { open } = useWeb3Modal()
  const [swapAmount, setSwapAmount] = useState(0)
  const [tokenFrom, setTokenFrom] = useTokenFrom((state) => [
    state.value,
    state.setValue,
  ])
  const [tokenTo, setTokenTo] = useTokenTo((state) => [
    state.value,
    state.setValue,
  ])

  return (
    <>
      <SectionFrom swapAmount={swapAmount} setSwapAmount={setSwapAmount} />

      <AspectRatio
        ratio={1}
        w={45}
        mx="auto"
        mt={-15}
        mb={-25}
        sx={{ cursor: "pointer" }}
        onClick={() => {
          setTokenFrom(tokenTo)
          setTokenTo(tokenFrom)
        }}
      >
        <IconArrowSwap />
      </AspectRatio>

      <SectionTo swapAmount={swapAmount} />

      <Flex direction="column" gap={15} my={15}>
        <MoreInfo />

        <Fee />
      </Flex>

      <Button
        tt="uppercase"
        fullWidth
        color="dark"
        size="lg"
        radius="md"
        onClick={() => {
          if (!isConnected) void open()
        }}
        disabled={false}
      >
        {isConnected ? "Swap" : "Connect wallet"}
      </Button>
    </>
  )
}
