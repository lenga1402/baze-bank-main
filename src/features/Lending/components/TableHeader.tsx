import { Flex, Input, rem } from "@mantine/core"
import { BiFilterAlt, BiSearch } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"

export const TableHeader = () => {
  return (
    <Flex w="100%" gap={rem(8)} my={rem(12)}>
      <Input
        icon={<BiSearch />}
        placeholder="Search table..."
        sx={{
          width: "100%",
          ".mantine-Input-input": {
            height: rem(48),
            background: "#2d2d2d",
            border: "1px solid #504F57",
            color: "#fff",
          },
          ".mantine-Input-wrapper": {
            borderRadius: rem(4),
          },
        }}
      />
      <Flex
        justify="center"
        align="center"
        w={rem(48)}
        h={rem(48)}
        px={rem(12)}
        bg="#2d2d2d"
        sx={{
          borderRadius: rem(4),
          border: "1px solid #504F57",
          cursor: "pointer",
        }}
      >
        <BiFilterAlt color="#fff" size="1.5rem" />
      </Flex>
      <Flex
        justify="center"
        align="center"
        w={rem(48)}
        h={rem(48)}
        px={rem(12)}
        bg="#2d2d2d"
        sx={{
          borderRadius: rem(4),
          border: "1px solid #504F57",
          cursor: "pointer",
        }}
      >
        <BsThreeDots color="#fff" size="1.5rem" />
      </Flex>
    </Flex>
  )
}
