import "@typechain/hardhat"

import { type HardhatUserConfig } from "hardhat/types"

require("@nomicfoundation/hardhat-toolbox")

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "bnbt",
  networks: {
    hardhat: {},

    // binance smart chain mainnet (BNB Mainnet)
    bnb: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [
        "10bee9778c547ed2ba8aa598ad982e3e7102f1680017dfe32b550cf4f728a805",
      ],
    },

    // binance smart chain testnet (BNB Testnet)
    bnbt: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [
        "b81d15c8558fcf7343de556c23b319b4b1ccd17ffd7476f3142afdf6ddd71710",
      ],
    },
  },
  paths: {
    sources: "./contracts",
    artifacts: "./temp/artifacts",
    cache: "./temp/cache",
  },
  typechain: {
    outDir: "../src/typechain-owned",
  },
}

export default config
