import type { Meta, StoryFn } from "@storybook/react"
import { PieChart } from "@yamada-ui/charts"

type Story = StoryFn<typeof PieChart>

const meta: Meta<typeof PieChart> = {
  title: "Components / Feedback / PieChart",
  component: PieChart,
}

export default meta

export const basic: Story = () => {
  return (
    <PieChart
      data={[
        { name: "A", value: 400, color: "gray.400" },
        { name: "B", value: 300, color: "neutral.100" },
        { name: "C", value: 300, color: "rose.200" },
        { name: "D", value: 200, color: "pink.300" },
        { name: "E", value: 278, color: "flashy.400" },
      ]}
      pieChartProps={{}}
    >
      test
    </PieChart>
  )
}

export const withLabels: Story = () => {
  return (
    <PieChart
      data={[
        { name: "A", value: 400, color: "gray.400" },
        { name: "B", value: 300, color: "neutral.100" },
        { name: "C", value: 300, color: "rose.200" },
        { name: "D", value: 200, color: "pink.300" },
        { name: "E", value: 278, color: "flashy.400" },
      ]}
      withLabels
    >
      test
    </PieChart>
  )
}

export const segmentTooltip: Story = () => {
  return (
    <PieChart
      data={[
        { name: "A", value: 400, color: "gray.400" },
        { name: "B", value: 300, color: "neutral.100" },
        { name: "C", value: 300, color: "rose.200" },
        { name: "D", value: 200, color: "pink.300" },
        { name: "E", value: 278, color: "flashy.400" },
      ]}
      withTooltip
    >
      test
    </PieChart>
  )
}
