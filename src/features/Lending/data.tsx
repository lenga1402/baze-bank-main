import {
  IconAAVE,
  IconAPE,
  IconBBANK,
  IconCRV,
  IconCVX,
  IconGOHM,
  IconMKR,
  IconSfrxETH,
  IconUNI,
  IconWBTC,
  IconWETHSmall,
} from "@/assets/images"

export const titles = [
  "Market",
  "Borrow",
  "Oracle",
  "Utilization",
  "Total Borrow",
  "Available",
  "Borrow APR",
  "Lend APY",
]

export const data = [
  {
    market: {
      icon: IconWETHSmall,
      name: "WETH",
    },
    borrow: {
      icon: IconBBANK,
      name: "BBANK",
    },
    oracle: "Chainlink",
    utilization: "62.17%",
    total_borrow: "2.27M BBANK",
    available: "1.38M BBANK",
    borrow_APR: "0.249%",
    lend_APY: "0.155%",
  },
  {
    market: {
      icon: IconWBTC,
      name: "WBTC",
    },
    borrow: {
      icon: IconBBANK,
      name: "BBANK",
    },
    oracle: "Chainlink",
    utilization: "82.91%",
    total_borrow: "4.16M BBANK",
    available: "857.53K BBANK",
    borrow_APR: "1.906%",
    lend_APY: "1.596%",
  },
  {
    market: {
      icon: IconBBANK,
      name: "BBANK",
    },
    borrow: {
      icon: IconBBANK,
      name: "BBANK",
    },
    oracle: "UniV3 TWAP & Chainlink",
    utilization: "70.09%",
    total_borrow: "140.31 BBANK",
    available: "59.85 BBANK",
    borrow_APR: "1.219%",
    lend_APY: "0.860%",
  },
  {
    market: {
      icon: IconAPE,
      name: "APE",
    },
    borrow: {
      icon: IconBBANK,
      name: "BBANK",
    },
    oracle: "Chainlink & UniV3 TWAP",
    utilization: "1.45%",
    total_borrow: "14.61K BBANK",
    available: "985.91K BBANK",
    borrow_APR: "0.514%",
    lend_APY: "0.007%",
  },
  {
    market: {
      icon: IconCVX,
      name: "CVX",
    },
    borrow: {
      icon: IconBBANK,
      name: "BBANK",
    },
    oracle: "Chainlink",
    utilization: "55.29%",
    total_borrow: "1.16M BBANK",
    available: "938.97K BBANK",
    borrow_APR: "0.499%",
    lend_APY: "0.276%",
  },
  {
    market: {
      icon: IconCRV,
      name: "CRV",
    },
    borrow: {
      icon: IconBBANK,
      name: "BBANK",
    },
    oracle: "Chainlink",
    utilization: "79.96%",
    total_borrow: "11.71M BBANK",
    available: "2.93M BBANK",
    borrow_APR: "13.778%",
    lend_APY: "11.813%",
  },
  {
    market: {
      icon: IconGOHM,
      name: "gOHM",
    },
    borrow: {
      icon: IconBBANK,
      name: "BBANK",
    },
    oracle: "Chainlink+Index",
    utilization: "75.18%",
    total_borrow: "4.22M BBANK",
    available: "1.39M BBANK",
    borrow_APR: "14.571%",
    lend_APY: "11.793%",
  },
  {
    market: {
      icon: IconMKR,
      name: "MKR",
    },
    borrow: {
      icon: IconBBANK,
      name: "BBANK",
    },
    oracle: "Chainlink+TWAP & Chainlink",
    utilization: "29.12%",
    total_borrow: "292.75K BBANK",
    available: "712.55K BBANK",
    borrow_APR: "1.388%",
    lend_APY: "0.407%",
  },
  {
    market: {
      icon: IconUNI,
      name: "UNI",
    },
    borrow: {
      icon: IconBBANK,
      name: "BBANK",
    },
    oracle: "Chainlink+TWAP & Chainlink",
    utilization: "1.72%",
    total_borrow: "21.6K BBANK",
    available: "1.23M BBANK",
    borrow_APR: "0.517%",
    lend_APY: "0.008%",
  },
  {
    market: {
      icon: IconAAVE,
      name: "AAVE",
    },
    borrow: {
      icon: IconBBANK,
      name: "BBANK",
    },
    oracle: "Chainlink+TWAP & Chainlink",
    utilization: "54.04%",
    total_borrow: "54.12K BBANK",
    available: "46.02K BBANK",
    borrow_APR: "1.054%",
    lend_APY: "0.572%",
  },
  {
    market: {
      icon: IconSfrxETH,
      name: "sfrxETH (sunset)",
    },
    borrow: {
      icon: IconBBANK,
      name: "BBANK",
    },
    oracle: "Chainlink + Curve EMA",
    utilization: "31.87%",
    total_borrow: "16.24K BBANK",
    available: "34.72K BBANK",
    borrow_APR: "56.325%",
    lend_APY: "24.107%",
  },
]
