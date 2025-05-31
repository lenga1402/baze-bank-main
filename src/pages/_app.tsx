/* eslint-disable @next/next/no-css-tags */
import { type AppType } from "next/app"
import Head from "next/head"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

import { ThemeProvider } from "@/config/Theme"
import { api } from "@/utils/api"
import { DomLoader } from "@/components/DomLoader"
import { ResponsiveIndicator } from "@/components/ResponsiveIndicator"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>BaseBank</title>
        <meta
          name="description"
          content="we provide the robust infrastructure and tools needed to create financial opportunities, grow investments, and secure your financial future."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="cursor.css" />
        <meta property="og:image" content="/feature.jpg" />
        <meta property="og:url" content="/" />
        <meta property="og:title" content="BaseBank" />
        <meta property="og:image:alt" content="BaseBank" />
        <meta
          property="og:description"
          content="we provide the robust infrastructure and tools needed to create financial opportunities, grow investments, and secure your financial future."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BaseBank" />
      </Head>

      <SessionProvider session={session}>
        <ThemeProvider>
          <DomLoader>
            <Component {...pageProps} />

            <ResponsiveIndicator />
          </DomLoader>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

export default api.withTRPC(MyApp)
