import { contracts } from "@/constants/contracts"
import { BbankToken__factory } from "@/typechain-non-owned"

import { getSigner } from "@/libs/ethers"

export const getTokenContract = () => {
  const signer = getSigner()

  return BbankToken__factory.connect(contracts.token, signer)
}
