import { useEffect, useMemo } from "react"
import { api } from "@/utils"
import {
  LoadingOverlay,
  SegmentedControl,
  type SegmentedControlItem,
} from "@mantine/core"

import { useSelectOption } from "../hooks/useSelectOption"

export const StakeOptions = () => {
  const { data, isLoading } = api.staking.getOptions.useQuery()
  const { value, setValue } = useSelectOption()

  const options: SegmentedControlItem[] = useMemo(() => {
    if (!data) return []

    return data.map(({ id: value, label }) => ({ label, value }))
  }, [data])

  useEffect(() => {
    if (data && data[0]) {
      setValue(data[0].id)
    }
  }, [data, setValue])

  return (
    <>
      <SegmentedControl data={options} value={value} onChange={setValue} />

      <LoadingOverlay visible={isLoading} />
    </>
  )
}
