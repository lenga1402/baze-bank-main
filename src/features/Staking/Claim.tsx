import { Box, Title } from "@mantine/core"

import { Guard } from "./components/Guard"
import { TableStake } from "./components/TableStake"
import { useClaimList } from "./hooks/useClaimList"
import { useStaking } from "./hooks/useStaking"
import {useEffect} from 'react';

export const Claim = () => {
  const { value } = useClaimList()
  const { getUserStakeList} = useStaking()

  useEffect(() => {
    void getUserStakeList()
  }, [getUserStakeList])

  return (
    <Box>
      <Title order={3} mb="sm">
        Claim
      </Title>

      <Guard>
        <TableStake dataSource={value} />
      </Guard>
    </Box>
  )
}
