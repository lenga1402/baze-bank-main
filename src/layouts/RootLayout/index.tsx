import { Box, type BoxProps } from "@mantine/core"

// import { Footer } from "./Footer"
import { Header } from "./Header"
import { Preloading } from "./Preloading"

export const RootLayout = (props: BoxProps) => {
  return (
    <>
      <Header />

      <Box pos="relative" bg="#fff" sx={{ zIndex: 1 }} {...props} />

      {/* <Footer /> */}

      <Preloading />
    </>
  )
}
