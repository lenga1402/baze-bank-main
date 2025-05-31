// components/InfiniteScrollDiv.tsx

import React, { useEffect, useRef, useState } from "react"

interface InfiniteScrollDivProps {
  children: React.ReactNode
  onScrollEnd: () => void
}

const InfiniteScrollDiv: React.FC<InfiniteScrollDivProps> = ({
  children,
  onScrollEnd,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const container = containerRef.current

    if (container) {
      container.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const handleScroll = () => {
    const container = containerRef.current

    if (!container) return

    const isAtBottom =
      container.scrollTop + container.clientHeight >= container.scrollHeight

    if (isAtBottom && !loading) {
      setLoading(true)
      onScrollEnd()
    }
  }

  return (
    <div ref={containerRef}>
      {children}
      {loading && <div>Loading...</div>}
    </div>
  )
}

export default InfiniteScrollDiv
