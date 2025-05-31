import { env } from "@/env.mjs"

let DAPPS = "/dapps"

if (env.NEXT_PUBLIC_NODE_ENV === "production") {
  // DAPPS = "https://app.bankonbase.xyz"
  DAPPS = "/dapps"
}

export const paths = {
  // DASHBOARD: "/dashboard",
  HOME: "/",
  ABOUT: "/about",
  DAPPS: DAPPS ,
  OVERVIEW: DAPPS + "/dashboard",
  STAKING: DAPPS + "/staking",
  DAO: DAPPS + "/dao",
  SWAP: DAPPS + "/swap",
  CROSS_CHAIN: DAPPS + "/cross-chain",
  LENDING: DAPPS + "/lending",
  POOLS: DAPPS + "/pools",
  MINING: DAPPS + "/mining",
  GOVERNANCE: "/governance",
}
