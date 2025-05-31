import Image from "next/image"
import { AspectRatio, Box, rem } from "@mantine/core"

import { LogoTextLight } from "@/assets/images"
import { Logo, LogoText } from "@/assets/vectors"

import { paths } from "../constants/paths"
import { HybridLink } from "./HybridLink"

type LogoBrandProps = {
  variant?: "default" | "logo-text" | "logo-text-light"
}

export const LogoBrand = ({ variant = "default" }: LogoBrandProps) => {
  return (
    <Box w="fit-content">
      <HybridLink href={paths.HOME}>
        {variant === "logo-text" ? (
          <AspectRatio ratio={227 / 60} w={rem(227)}>
            <LogoText />
          </AspectRatio>
        ) : variant === "logo-text-light" ? (
          <AspectRatio ratio={139 / 36} w={rem(139)}>
            {/* <LogoTextLight /> */}
            <Image src={LogoTextLight} alt="logo" />
          </AspectRatio>
        ) : (
          <AspectRatio ratio={1} w={rem(40)}>
            <Logo />
          </AspectRatio>
        )}
      </HybridLink>
    </Box>
  )
}
