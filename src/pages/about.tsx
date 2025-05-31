import { Hero, Roadmap, Token, WithBbank } from "@/features/About"
import { Footer } from "@/features/Home/OurStudio"
import { RootLayout } from "@/layouts/RootLayout"

export default function About() {
  return (
    <RootLayout sx={{ overflow: "hidden" }}>
      <Hero />
      <WithBbank />
      <Token />
      <Roadmap />
      <Footer />
    </RootLayout>
  )
}
