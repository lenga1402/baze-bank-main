// pages/index.tsx

import React, { useCallback, useEffect, useState } from "react"
import InfiniteScrollDiv from "@/layouts/RootLayout/Header/InfiniteScroll"
import { Box } from "@mantine/core"

const User: React.FC = () => {
  const [items, setItems] = useState<number[]>([])
  const [loading, setLoading] = useState(false)

  const loadMoreItems = useCallback(() => {
    // Simulate loading more items (replace this with your actual data loading logic).
    setLoading(true)
    setTimeout(() => {
      const newItems = Array.from(
        { length: 10 },
        (_, i) => items.length + i + 1
      )
      setItems([...items, ...newItems])
      setLoading(false)
    }, 1000)
  }, [items])

  useEffect(() => {
    loadMoreItems()
  }, [loadMoreItems])

  const handleScrollEnd = useCallback(() => {
    if (!loading) {
      loadMoreItems()
    }
  }, [loading, loadMoreItems])

  return (
    <Box sx={{ overflow: "auto" }} h={300}>
      <InfiniteScrollDiv onScrollEnd={handleScrollEnd}>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {loading && <div>Loading...</div>}
      </InfiniteScrollDiv>
    </Box>
  )
}

export default User
