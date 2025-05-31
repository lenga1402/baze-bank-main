import React, { useEffect, useState } from "react"

export const DomLoader = ({ children }: { children: React.ReactNode }) => {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) return <></>

  return <>{children}</>
}
