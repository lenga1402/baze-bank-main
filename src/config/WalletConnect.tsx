import React from "react"
import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum"
import { Web3Modal } from "@web3modal/react"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { base, bsc, linea, mainnet, opBNB } from "wagmi/chains"

const chains = [mainnet, bsc, base, linea, opBNB]
const projectId = "d7514991cb75e5213f4b9a9c30471c24"

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
})

const ethereumClient = new EthereumClient(wagmiConfig, chains)

export const WalletConnectProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
