import type { Meta, StoryFn } from "@storybook/react"
import { BarChart, type BarChartSeries } from "@yamada-ui/charts"

type Story = StoryFn<typeof BarChart>

const meta: Meta<typeof BarChart> = {
  title: "Components / Feedback / BarChart",
  component: BarChart,
}

export default meta

const data = [
  { month: "January", Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: "February", Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: "March", Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: "April", Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: "May", Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: "June", Smartphones: 750, Laptops: 600, Tablets: 1000 },
]
const series: BarChartSeries[] = [
  { dataKey: "Smartphones", color: ["indigo.600", "indigo.400"] },
  { dataKey: "Laptops", color: ["rose.600", "rose.400"] },
  { dataKey: "Tablets", color: ["emerald.600", "emerald.400"] },
]

export const basic: Story = () => {
  return <BarChart data={data} series={series} dataKey="month" />
}
