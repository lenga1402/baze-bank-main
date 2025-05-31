import { Overview } from "@/features/Overview/Overview"
import { DashboardLayout } from "@/layouts/DashboardLayout"

// import { Text } from "@mantine/core"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Overview />
    </DashboardLayout>
  )
}
