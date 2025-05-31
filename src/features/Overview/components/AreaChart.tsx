import { Box } from "@mantine/core"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

type DataProbs = {
  name: string
  USDT: number
  BNB: number
  ETH: number
  BTC: number
  BBank: number
}

type Probs = {
  height: number
  data: DataProbs[]
}

export const AreaChartComponent: React.FC<Probs> = ({ height, data }) => {
  return (
    <Box mt={12} w={"100%"} h={height}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="BBank"
            stackId="1"
            stroke="#1CD8D2"
            fill="#265958"
          />
          <Area
            type="monotone"
            dataKey="BTC"
            stackId="1"
            stroke="#A2BCD6"
            fill="#59636E"
          />
          <Area
            type="monotone"
            dataKey="ETH"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="BNB"
            stackId="1"
            stroke="#F59A59"
            fill="#8B6041"
          />
          <Area
            type="monotone"
            dataKey="USDT"
            stackId="1"
            stroke="#3F8CFF"
            fill="#32486B"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  )
}
