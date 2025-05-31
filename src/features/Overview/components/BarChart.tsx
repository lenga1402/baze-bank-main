import { dataDapps1 } from "@/constants/keys"
import { Box } from "@mantine/core"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const StackBarChart = () => {
  return (
    <Box mt={12} w={"100%"} h={340}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dataDapps1}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="BBank" stackId="a" fill="#1CD8D2" />

          <Bar dataKey="BTC" stackId="a" fill="#A2BCD6" />

          <Bar dataKey="ETH" stackId="a" fill="#6C5DD3" />
          <Bar dataKey="BNB" stackId="a" fill="#F59A59" />
          <Bar dataKey="USDT" stackId="a" fill="#FFFFFF" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  )
}
