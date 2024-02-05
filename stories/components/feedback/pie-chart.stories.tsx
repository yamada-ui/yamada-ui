import type { Meta, StoryFn } from "@storybook/react"
import { PieChart } from "@yamada-ui/charts"

type Story = StoryFn<typeof PieChart>

const meta: Meta<typeof PieChart> = {
  title: "Components / Feedback / PieChart",
  component: PieChart,
}

export default meta

export const basic: Story = () => {
  return <PieChart></PieChart>
}
