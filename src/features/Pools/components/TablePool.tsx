import Image, { StaticImageData } from "next/image"
import { AspectRatio, Box, Button, Flex, rem, Table, Text } from "@mantine/core"
import { nanoid } from "nanoid"
import { BiSolidShareAlt } from "react-icons/bi"
import { MdFileCopy } from "react-icons/md"
import { RiArrowRightSLine, RiShareBoxLine } from "react-icons/ri"

import { data } from "../data"

export const TablePool = () => {
  const row = data.map(({ pair, tvl, apy }) => (
    <tr key={nanoid()}>
      <td style={{ width: rem(400) }}>
        <Flex p={rem(20)} gap={rem(10)}>
          <GroupImg img={pair.img} img2={pair.img2} img3={pair.img3} />
          <Box>
            <Text c="#fff" fw={600}>
              {pair.name}
            </Text>
            <Flex gap={rem(10)}>
              <Flex gap={rem(5)} align="center" className="address">
                <Text fw={500}>{pair.address}</Text>
                <RiArrowRightSLine
                  color="#A1B4FF"
                  size="1rem"
                  className="address-icon"
                />
              </Flex>
              <Flex gap={rem(6)} align="center">
                <RiShareBoxLine color="rgba(255, 255, 255, 0.50)" size="1rem" />
                <MdFileCopy color="rgba(255, 255, 255, 0.50)" />
                <BiSolidShareAlt
                  color="rgba(255, 255, 255, 0.50)"
                  size="1rem"
                />
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </td>
      <td>
        <Text c="#fff" fw={500}>
          {tvl}
        </Text>
      </td>
      <td>
        <Flex c="#55F9C7">
          {apy.icon && apy.icon}
          <Text fw={600}>{apy.value}</Text>
        </Flex>
      </td>
      <td>
        <Button disabled px={rem(16)} bg="#fff" c="#000">
          Add
        </Button>
      </td>
    </tr>
  ))

  return (
    <Box>
      <Table
        highlightOnHover
        sx={{
          td: {
            borderTop: "none !important",
          },
          th: {
            borderBottom: "none !important",
          },
          "tbody > tr:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.04) !important",
          },
          "tbody > tr:hover .address": {
            color: "#A1B4FF",
            borderBottom: "1px solid #A1B4FF",
          },
          "tbody > tr:hover .address-icon": {
            display: "block",
          },
          ".address": {
            color: "rgba(255, 255, 255, 0.50)",
          },
          ".address-icon": {
            display: "none",
          },
        }}
      >
        <thead>
          <tr>
            <th>
              <Text p={rem(24)} c="rgba(255, 255, 255, 0.50)" fw={500}>
                Pair
              </Text>
            </th>
            <th>
              <Text c="rgba(255, 255, 255, 0.50)" fw={500}>
                TVL
              </Text>
            </th>
            <th>
              <Text c="rgba(255, 255, 255, 0.50)" fw={500}>
                APY
              </Text>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </Table>
    </Box>
  )
}

type GroupImgProps = {
  img: StaticImageData
  img2: StaticImageData
  img3: StaticImageData
}

const GroupImg: React.FC<GroupImgProps> = ({ img, img2, img3 }) => {
  return (
    <Flex pos="relative" align="center" gap={rem(5)} sx={{ zIndex: 1 }}>
      <Box w={rem(24)}>
        <AspectRatio ratio={1} w={rem(24)}>
          <Image src={img} alt="token" />
        </AspectRatio>
      </Box>
      <Box w={rem(24)} sx={{ transform: "translateX(-10px)", zIndex: -1 }}>
        <AspectRatio ratio={1} w={rem(24)}>
          <Image src={img2} alt="token" />
        </AspectRatio>
      </Box>
      <Box w={rem(10)} pos="absolute" bottom={rem(10)} right={rem(10)}>
        <AspectRatio ratio={10 / 12} w={rem(10)}>
          <Image src={img3} alt="token" />
        </AspectRatio>
      </Box>
    </Flex>
  )
}
