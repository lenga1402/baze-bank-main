import Image from "next/image"
import { dataUser } from "@/constants/keys"
import { Stream } from "@cloudflare/stream-react"
import { AspectRatio, Box, Flex, Text, Title } from "@mantine/core"
import { nanoid } from "nanoid"

import { fonts } from "@/assets/fonts"
import { HeroBoy, HeroBoy2 } from "@/assets/images"

export const HeroMobile = () => {
  return (
    <Box py={70} px={10} mt={50}>
      <Title tt={"uppercase"} fw={600} ta={"center"} fz={56}>
        BaseBank
      </Title>
      <Flex gap={12} justify={"center"}>
        <AspectRatio miw={73} w={60} ratio={1}>
          <Image src={HeroBoy} alt="" fill />
        </AspectRatio>

        <Title tt={"uppercase"} fw={600} fz={56}>
          We Build
        </Title>
      </Flex>

      <Title tt={"uppercase"} fw={600} ta={"center"} fz={56}>
        DeFi
      </Title>

      <Flex gap={12} justify={"center"}>
        <AspectRatio miw={60} mah={60} w={60} ratio={1}>
          <Image src={HeroBoy2} alt="" fill />
        </AspectRatio>

        <Title lts={"-2px"} tt={"uppercase"} fw={600} fz={56}>
          You Build
        </Title>
      </Flex>

      <Title tt={"uppercase"} fw={600} ta={"center"} fz={56}>
        Wealth
      </Title>

      <Text mb={40} fz={20} ta={"center"} mt={32}>
        With BaseBank, we provide the robust infrastructure and tools needed to
        create financial opportunities, grow investments, and secure your
        financial future.
      </Text>

      <AspectRatio ratio={3840 / 2160} className="vid">
        <Stream
          src={"cfba010084e47f76d9d05d582a48edbf"}
          autoplay
          loop
          muted
          preload
          responsive={false}
          width="100%"
          height="100%"
        />
      </AspectRatio>

      <Flex wrap={"wrap"}>
        {dataUser.map((item) => (
          <Box
            maw={"100%"}
            sx={{
              border: "2px solid var(--2-d-2-d-2-d, #2D2D2D1A)",
              borderRadius: "340px",
            }}
            key={nanoid()}
            px={67}
            py={48}
          >
            <Title
              fz={68}
              ta={"center"}
              ff={fonts.PLUS_jARKATA_SAN.style.fontFamily}
            >
              {item.number}
            </Title>

            <Text fz={12} ta={"center"}>
              {item.context}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}
