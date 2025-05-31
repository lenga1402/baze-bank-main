import { Box, Flex } from "@mantine/core"

import { WalletConnectProvider } from "@/config/WalletConnect"

import { Header } from "./Header"
import { SideBar } from "./SideBar"

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <WalletConnectProvider>
      <Flex bg="#f7f7f7">
        <SideBar />

        <Box pos="relative" sx={{ flex: 1 }}>
          <Header />

          <Box p={{ base: 20, sm: 40 }} mih={{ base: "100vh", lg: 0 }}>
            {children}
          </Box>
        </Box>
      </Flex>
    </WalletConnectProvider>
  )
}
