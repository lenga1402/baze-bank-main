import {
  IconArbitrumSmall,
  IconBBANK,
  IconETH,
  IconUSDC,
  IconUSDT,
  IconWETH,
} from "@/assets/images"
import { IconStar } from "@/assets/vectors"

export const tokens = [
  {
    image: IconETH,
    label: "Ethereum",
    value: "Ethereum",
  },
  {
    image: IconETH,
    label: "Binance",
    value: "Binance",
  },
  {
    image: IconBBANK,
    label: "BaseBank",
    value: "BaseBank",
  },
]

export const data = [
  {
    pair: {
      img: IconUSDC,
      img2: IconUSDT,
      img3: IconArbitrumSmall,
      name: "USDC/USDT",
      address: "0xe4b2...b4fb",
    },
    tvl: "$216K",
    apy: {
      icon: <IconStar />,
      value: "6.39%/7.37%",
    },
  },
  {
    pair: {
      img: IconWETH,
      img2: IconUSDC,
      img3: IconArbitrumSmall,
      name: "WETH/USDC",
      address: "0xfe17...d6b2",
    },
    tvl: "$164.49K",
    apy: {
      value: "3.47%/0.93%",
    },
  },
  {
    pair: {
      img: IconBBANK,
      img2: IconETH,
      img3: IconArbitrumSmall,
      name: "BBANK/ETH",
      address: "0x6a58...8da5",
    },
    tvl: "N/A",
    apy: {
      value: "N/A",
    },
  },
  {
    pair: {
      img: IconBBANK,
      img2: IconUSDC,
      img3: IconArbitrumSmall,
      name: "BBANK/USDC",
      address: "0x3485...bbe2",
    },
    tvl: "N/A",
    apy: {
      value: "N/A",
    },
  },
]
