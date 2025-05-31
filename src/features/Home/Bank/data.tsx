import { AspectRatio, rem } from "@mantine/core"

import { HomeBank1, HomeBank2, HomeBank3, HomeBank4 } from "@/assets/vectors"

export const homeBankData = [
  {
    video: "6f42bbf73cb56ef6900fdad910c3eec9",
    icon: (
      <AspectRatio ratio={53 / 48} w={rem(53)}>
        <HomeBank1 />
      </AspectRatio>
    ),
    backgroundColor: "#ECEAFF",
    title: "BBANK Staking Vault",
    desc: "BBANK holders share in our revenue by staking their BBANK in BBANK staking vaults.",
  },
  {
    video: "19d93fdadd0fbd7f22898bcaec93690b",
    icon: (
      <AspectRatio ratio={49 / 48} w={rem(49)}>
        <HomeBank2 />
      </AspectRatio>
    ),
    backgroundColor: "#FAEAFF",
    title: "Liquidity Provision",
    desc: "$BBANK tokens can be used to provide liquidity to various trading pairs on the BaseBank SuperDEX. Liquidity providers earn fees generated from trading on the platform.",
  },
  {
    video: "9f4a311d5b222a301a287554ac325068",
    icon: (
      <AspectRatio ratio={55 / 48} w={rem(55)}>
        <HomeBank3 />
      </AspectRatio>
    ),
    backgroundColor: "#FFF2EA",
    title: "Vote",
    desc: "Our Snapshot governance mechanism gives your BBANK voting power in BaseBank's DAO.",
  },
  {
    video: "14af328e90f5b11aa808c9f82152f690",
    icon: (
      <AspectRatio ratio={49 / 48} w={rem(49)}>
        <HomeBank4 />
      </AspectRatio>
    ),
    backgroundColor: "#EAFFF0",
    title: "Fixed-Supply",
    desc: "A fixed supply of 100,000,000 BBANK acts as a control against token inflation.",
  },
]
