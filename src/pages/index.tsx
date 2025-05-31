import { useEffect } from "react"
import { Hero } from "@/features/Home"
import { Bank } from "@/features/Home/Bank"
import { Defi } from "@/features/Home/Defi"
import { Dev } from "@/features/Home/Dev"
import { DevMobile } from "@/features/Home/DevMobile"
import { Eco } from "@/features/Home/Eco"
import { Future } from "@/features/Home/Future"
import { HeroMobile } from "@/features/Home/HeroMobile"
import { Offers } from "@/features/Home/Offers"
import { OurStudio } from "@/features/Home/OurStudio"
import { Solution } from "@/features/Home/Solution"
import { Trading } from "@/features/Home/Trading"
// import { User } from "@/features/Home/User"
import { RootLayout } from "@/layouts/RootLayout"
import { useMediaQuery } from "@mantine/hooks"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import MouseFollower from "mouse-follower"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

MouseFollower.registerGSAP(gsap)

export default function Home() {
  useEffect(() => {
    const cursor = new MouseFollower({
      container: ".main",
      speed: 2,
    })

    return () => {
      cursor.destroy()
    }
  }, [])
  const isMb = useMediaQuery(" (max-width: 1200px)")
  return (
    <RootLayout className="main">
      {!isMb && <Hero />}
      {isMb && <HeroMobile />}
      {/* <User /> */}
      <Offers />
      <Defi />
      <Solution />
      <Future />
      <Bank />
      <Dev />
      <DevMobile />
      <Trading />
      <Eco />
      <OurStudio />
    </RootLayout>
  )
}
