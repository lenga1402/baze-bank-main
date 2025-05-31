import { em, MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import AOS from "aos"

import "aos/dist/aos.css"

import { useEffect } from "react"

import { fonts } from "@/assets/fonts"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        focusRing: "never",
        black: "#2d2d2d",
        breakpoints: {
          lg: em(1200),
          xl: em(1600),
        },
        fontFamily: fonts.HELLIX.style.fontFamily,
        globalStyles: (theme) => ({
          html: {
            [theme.fn.largerThan("lg")]: {
              fontSize: "0.834vw",
            },
          },
          a: {
            color: "unset",
            textDecoration: "none",
          },
        }),
      }}
    >
      {children}

      <Notifications />
    </MantineProvider>
  )
}
