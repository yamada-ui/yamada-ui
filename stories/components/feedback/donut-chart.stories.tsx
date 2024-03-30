import type { Meta, StoryFn } from "@storybook/react"
import type { CellProps } from "@yamada-ui/charts"
import { DonutChart } from "@yamada-ui/charts"

type Story = StoryFn<typeof DonutChart>

const meta: Meta<typeof DonutChart> = {
  title: "Components / Feedback / DonutChart",
  component: DonutChart,
}

export default meta

export const basic: Story = () => {
  const data: CellProps[] = [
    { name: "USA", value: 400, color: "red.500" },
    { name: "India", value: 300, color: "orange.500" },
    { name: "Japan", value: 100, color: "blue.500" },
    { name: "Other", value: 200, color: "purple.500" },
  ]

  return <DonutChart data={data} />
}
