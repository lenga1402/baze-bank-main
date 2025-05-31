import { Inter, Montserrat, Plus_Jakarta_Sans } from "next/font/google"
import localFont from "next/font/local"

const MONTSERRAT = Montserrat({
  subsets: ["latin"],
})

const INTER = Inter({
  subsets: ["latin"],
})

const PLUS_jARKATA_SAN = Plus_Jakarta_Sans({
  subsets: ["latin"],
})

const HELLIX = localFont({
  src: [
    {
      path: "./Hellix-Thin.woff2",
      weight: "200",
    },
    {
      path: "./Hellix-Light.woff2",
      weight: "300",
    },
    {
      path: "./Hellix-Regular.woff2",
      weight: "400",
    },
    {
      path: "./Hellix-Medium.woff2",
      weight: "500",
    },
    {
      path: "./Hellix-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "./Hellix-Bold.woff2",
      weight: "700",
    },
  ],
})

export const fonts = { MONTSERRAT, INTER, HELLIX, PLUS_jARKATA_SAN }
