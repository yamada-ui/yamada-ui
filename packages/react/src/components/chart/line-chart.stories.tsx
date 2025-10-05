import type { Meta, StoryFn } from "@storybook/react-vite"
import { LineChart } from "."

type Story = StoryFn<typeof LineChart.Root>

const meta: Meta<typeof LineChart.Root> = {
  component: LineChart.Root,
  title: "Components / Line Chart",
}

export default meta

const data = [
  {
    name: "Page A",
    amt: 2400,
    pv: 2400,
    uv: 4000,
  },
  {
    name: "Page B",
    amt: 2210,
    pv: 1398,
    uv: 3000,
  },
  {
    name: "Page C",
    amt: 2290,
    pv: 9800,
    uv: 2000,
  },
  {
    name: "Page D",
    amt: 2000,
    pv: 3908,
    uv: 2780,
  },
  {
    name: "Page E",
    amt: 2181,
    pv: 4800,
    uv: 1890,
  },
  {
    name: "Page F",
    amt: 2500,
    pv: 3800,
    uv: 2390,
  },
  {
    name: "Page G",
    amt: 2100,
    pv: 4300,
    uv: 3490,
  },
]

export const Basic: Story = () => {
  return (
    <LineChart.Root data={data} h="sm" w="3xl">
      <LineChart.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <LineChart.Line type="monotone" dataKey="pv" stroke="#8884d8" />

      {/*　省略可にする  */}
      <LineChart.Grid strokeDasharray="3 3" />
      <LineChart.XAxis dataKey="name" />
      <LineChart.YAxis />
      <LineChart.Tooltip />
      <LineChart.Legend />
    </LineChart.Root>
  )
}
