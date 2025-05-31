import { forwardRef } from "react"
import Image, { type StaticImageData } from "next/image"
import { AspectRatio, Box, Group, rem, Select, Text } from "@mantine/core"
import { RiArrowDownSFill } from "react-icons/ri"

import { IconETH } from "@/assets/images"

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: StaticImageData
  label: string
}

export type SelectItemProps = {
  image: StaticImageData
  value: string
  label: string
}

export type SelectProps = {
  tokens: SelectItemProps[]
  // itemSelected: SelectItemProps
  // handleNetworkChange: (value: string, list: SelectItemProps[]) => void
}

export const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, ...others }: ItemProps, ref) => (
    <Box ref={ref} {...others}>
      <Group noWrap>
        <AspectRatio ratio={1} w={rem(18)}>
          <Image src={image} alt="token" />
        </AspectRatio>
        <Box>
          <Text fz={rem(14)} fw={500}>
            {label}
          </Text>
        </Box>
      </Group>
    </Box>
  )
)

SelectItem.displayName = "SelectItem"

export const TokenSelect: React.FC<SelectProps> = (
  {
    // tokens,
    //   itemSelected,
    //   handleNetworkChange,
  }
) => {
  return (
    <Box
      px={rem(10)}
      py={rem(4)}
      bg="rgba(255, 255, 255, 0.06)"
      sx={{ border: "1px solid rgba(0, 0, 0, 0.10)", borderRadius: rem(8) }}
    >
      <Select
        // disabled
        itemComponent={SelectItem}
        defaultValue="Ethereum"
        // data={tokens}
        data={[]}
        icon={
          <AspectRatio ratio={1} w={rem(18)}>
            <Image src={IconETH} alt="token" />
          </AspectRatio>
        }
        rightSection={<RiArrowDownSFill color="#fff" size={20} />}
        styles={{ rightSection: { pointerEvents: "none" } }}
        sx={{
          ".mantine-Input-input": {
            color: "#fff",
            background: "transparent !important",
            border: "none",
          },
          ".mantine-Select-dropdown": {
            width: "197px !important",
          },
        }}
      />
    </Box>
  )
}
