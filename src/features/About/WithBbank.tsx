import { StaticImageData } from "next/image"
import {
  BackgroundImage,
  Box,
  BoxProps,
  Grid,
  rem,
  Text,
  Title,
} from "@mantine/core"
import { nanoid } from "nanoid"

import {
  WithBbankImg,
  WithBbankImg2,
  WithBbankImg3,
  WithBbankImg4,
  WithBbankImg5,
  WithBbankImg6,
} from "@/assets/images"
import { ButtonCommon } from "@/components/ButtonCommon"
import { Section } from "@/components/Section"

const data = [
  {
    title: "Swap Tokens",
    desc: "Easily swap various cryptocurrencies and tokens using $BBANK on the BaseBank SuperDEX.",
    bgSrc: WithBbankImg,
    link: "https://docs.bankonbase.com/products/basebank-superdex",
  },
  {
    title: "Liquidity",
    desc: "Provide liquidity to liquidity pools and earn rewards in return for your contribution.",
    bgSrc: WithBbankImg2,
    link: "https://docs.bankonbase.com/liquidity-provision",
  },
  {
    title: "Vote",
    desc: "Utilize your voting privileges to actively engage in shaping the BaseBank platform's future trajectory and developmental choices",
    bgSrc: WithBbankImg3,
    link: "https://docs.bankonbase.com/basebank-dao/dao-overview",
  },
  {
    title: "Stake",
    desc: "Stake $BBANK tokens in yield farming pools or liquidity pools to earn additional rewards.",
    bgSrc: WithBbankImg4,
    link: "https://docs.bankonbase.com/bbank-staking",
  },
  {
    title: "Bridging",
    desc: "Utilize $BBANK for cross-chain transactions and bridge assets between different blockchain networks.",
    bgSrc: WithBbankImg5,
    link: "https://docs.bankonbase.com/products/basebank-superdex/cross-chain-swap",
  },
  {
    title: "Borrow, Lending",
    desc: "Access borrowing and lending services using $BBANK tokens as collateral or to earn interest on deposited assets.",
    bgSrc: WithBbankImg6,
    link: "https://docs.bankonbase.com/bbanklend",
  },
]

export const WithBbank = () => {
  return (
    <Section px={{ base: 15, sm: 25, lg: rem(150) }}>
      <Title
        maw={rem(770)}
        mx="auto"
        mb={{ base: 40, lg: rem(80) }}
        fz={{ base: 48, lg: rem(80) }}
        fw={600}
        tt="uppercase"
        ta="center"
      >
        What can you do with BBANK?
      </Title>
      <Grid gutterLg={rem(40)}>
        {data.map((item) => (
          <Grid.Col key={nanoid()} lg={4} mb={rem(40)}>
            <WithBbankItem {...item} />
          </Grid.Col>
        ))}
      </Grid>
    </Section>
  )
}

type WithBbankItemProps = BoxProps & {
  bgSrc: StaticImageData
  title: string
  desc: string
  link: string
}

const WithBbankItem: React.FC<WithBbankItemProps> = ({
  bgSrc,
  title,
  desc,
  link,
  ...props
}) => {
  return (
    <Box bg="#fff" {...props} sx={{ borderRadius: rem(20) }}>
      <BackgroundImage
        src={bgSrc.src}
        pos="relative"
        mih={{ base: 500, lg: rem(647) }}
        p={rem(16)}
        sx={{ backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}
      >
        <Title
          pos="absolute"
          top={{ base: 5, lg: rem(16) }}
          left={{ base: 0, lg: rem(37) }}
          fz={{ base: 20, lg: rem(28) }}
          fw={600}
        >
          {title}
        </Title>
        <Box
          maw={{ base: 180, sm: 380, lg: rem(258) }}
          pos="absolute"
          bottom={rem(16)}
          left={{ base: 12, lg: rem(16) }}
          px={rem(14)}
          py={rem(8)}
          bg="#fff"
          sx={{ borderRadius: rem(10) }}
        >
          <Text>{desc}</Text>
        </Box>
        <ButtonCommon
          href={link}
          pos="absolute"
          bottom={0}
          right={{ base: 0, lg: rem(16) }}
          h={{ lg: rem(73) }}
          px={{ base: 30, lg: "auto" }}
          bg="#2D2D2D"
          c="#fff"
          fz={{ base: 16, lg: rem(24) }}
          fw={500}
          sx={{ borderRadius: rem(12) }}
        >
          Learn more
        </ButtonCommon>
      </BackgroundImage>
    </Box>
  )
}
