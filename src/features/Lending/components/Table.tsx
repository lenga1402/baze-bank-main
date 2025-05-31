import Image from "next/image"
import { AspectRatio, Box, Flex, rem, Table, Text } from "@mantine/core"
import { nanoid } from "nanoid"
import { BiSortAlt2 } from "react-icons/bi"
import { RiArrowRightUpLine } from "react-icons/ri"

import { data, titles } from "../data"

export const LendingTable = () => {
  const row = data.map(
    ({
      market,
      available,
      borrow,
      borrow_APR,
      lend_APY,
      oracle,
      total_borrow,
      utilization,
    }) => (
      <tr key={nanoid()}>
        <td>
          <Flex miw={{ base: 150, lg: "auto" }} gap={rem(5)} align="center">
            <AspectRatio ratio={1} w={rem(15)}>
              <Image src={market.icon} alt="icon" />
            </AspectRatio>
            <Text c="#fff">{market.name}</Text>
          </Flex>
        </td>
        <td>
          <Flex gap={rem(5)} align="center">
            <AspectRatio ratio={1} w={rem(15)}>
              <Image src={borrow.icon} alt="icon" />
            </AspectRatio>
            <Text tt="uppercase" c="#fff">
              {borrow.name}
            </Text>
          </Flex>
        </td>
        <td>
          <Flex gap={rem(5)} align="center" justify="space-between">
            <Text c="#fff">{oracle}</Text>
            <RiArrowRightUpLine size="1.2rem" color="#fff" />
          </Flex>
        </td>
        <td>
          <Text ta="right" c="#fff">
            {utilization}
          </Text>
        </td>
        <td>
          <Text ta="right" c="#fff">
            {total_borrow}
          </Text>
        </td>
        <td>
          <Text ta="right" c="#fff">
            {available}
          </Text>
        </td>
        <td>
          <Text ta="right" c="#fff">
            {borrow_APR}
          </Text>
        </td>
        <td>
          <Text ta="right" c="#fff">
            {lend_APY}
          </Text>
        </td>
      </tr>
    )
  )
  return (
    <Table
      striped
      sx={{
        "&": {
          minHeight: rem(450),
        },
        td: {
          borderTop: "1px solid #1C1C1F !important",
          border: "1px solid #1C1C1F",
        },
        "& > tbody> tr": {
          backgroundColor: "#232326",
        },
        "&[data-striped] >tbody>tr:nth-of-type(odd)": {
          backgroundColor: "rgba(46, 46, 50, 1)",
        },
      }}
    >
      <thead>
        <tr>
          {titles.map((item, index) => (
            <th
              key={nanoid()}
              style={{ background: "#232326", borderBottom: "none" }}
            >
              <Flex
                align="center"
                justify={index <= 3 ? "flex-start" : "flex-end"}
                gap={rem(10)}
                py={rem(12)}
              >
                <Text c="#A09FA6" fw={500}>
                  {item}
                </Text>
                <BiSortAlt2
                  size="1.5rem"
                  color="rgba(237, 237, 239, 0.5)"
                  style={{ cursor: "pointer" }}
                />
              </Flex>
            </th>
          ))}
        </tr>
      </thead>
      <Box h={rem(2)} />
      <tbody>{row}</tbody>
    </Table>
  )
}
