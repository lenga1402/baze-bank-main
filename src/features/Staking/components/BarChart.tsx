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
    <Box mt={12} w={"100%"} h={360}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
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
          <Bar dataKey="5" stackId="a" fill="#1CD8D2" />

          <Bar dataKey="4" stackId="a" fill="#A2BCD6" />

          <Bar dataKey="amt" stackId="a" fill="#6C5DD3" />
          <Bar dataKey="uv" stackId="a" fill="#F59A59" />
          <Bar dataKey="pv" stackId="a" fill="#FFFFFF" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  )
}
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    4: 1000,
    5: 200,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    4: 1000,
    5: 200,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    4: 1000,
    5: 200,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    4: 1000,
    5: 200,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    4: 1000,
    5: 200,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    4: 1000,
    5: 200,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    4: 1000,
    5: 200,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    4: 1000,
    5: 200,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    4: 1000,
    5: 200,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    4: 1000,
    5: 200,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    4: 1000,
    5: 200,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    4: 1000,
    5: 200,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    4: 1000,
    5: 200,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    4: 1000,
    5: 200,
  },
]
