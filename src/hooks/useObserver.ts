import { useRef } from "react"
import { useIntersectionObserver } from "usehooks-ts"

export const useObserver = (rootMargin: string = "-50%") => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    rootMargin,
  })
  const visible = !!entry?.isIntersecting

  return {
    ref,
    visible,
  }
}
