import { useEffect, useMemo, useState } from "react"
import { formatPrice } from "@/utils"
import { AspectRatio, Group, Text } from "@mantine/core"

import { IconExchange } from "@/assets/vectors"

import { type IToken } from "../types"

type CompareValueProps = {
  tokenFrom?: IToken
  tokenTo?: IToken
  variant?: "default" | "special"
}

export const CompareValue = ({
  tokenFrom,
  tokenTo,
  variant = "default",
}: CompareValueProps) => {
  const [tempTokenFrom, setTempTokenFrom] = useState<IToken>()
  const [tempTokenTo, setTempTokenTo] = useState<IToken>()

  useEffect(() => {
    if (tokenFrom) setTempTokenFrom(tokenFrom)
  }, [tokenFrom])

  useEffect(() => {
    if (tokenTo) setTempTokenTo(tokenTo)
  }, [tokenTo])

  const ratio = useMemo(() => {
    return (tempTokenFrom?.price || 0) / (tempTokenTo?.price || 1)
  }, [tempTokenFrom?.price, tempTokenTo?.price])

  const handleSwitch = () => {
    setTempTokenFrom(tempTokenTo)
    setTempTokenTo(tempTokenFrom)
  }

  if (!tokenFrom || !tokenTo) return "-"

  return (
    <Group
      position={variant === "special" ? "apart" : "center"}
      my={12}
      spacing={9}
    >
      <Text
        tt="uppercase"
        fz={14}
        fw={500}
        lh="1em"
        opacity={variant === "special" ? 0.5 : 1}
      >
        1 {tempTokenFrom?.symbol} ={tempTokenFrom && tempTokenTo ? ` ` : "-"}
      </Text>

      <Group spacing={variant === "special" ? undefined : 5}>
        <Text
          tt="uppercase"
          fz={variant === "special" ? 18 : 14}
          fw={500}
          lh="1em"
        >
          {formatPrice(ratio)}{" "}
        </Text>

        <Text
          tt="uppercase"
          fw={500}
          lh="1em"
          opacity={variant === "special" ? 0.5 : 1}
          fz={14}
        >
          {tempTokenTo?.symbol}
        </Text>

        <AspectRatio
          ratio={1}
          w={20}
          sx={{ cursor: "pointer" }}
          onClick={handleSwitch}
        >
          <IconExchange />
        </AspectRatio>
      </Group>
    </Group>
  )
}
