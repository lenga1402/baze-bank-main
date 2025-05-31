import { useMediaQuery } from "usehooks-ts"

export const useDesktop = () => {
  const matches = useMediaQuery("(min-width: 1024px)")

  return { isDesktop: matches }
}
