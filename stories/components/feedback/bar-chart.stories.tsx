import type { Meta, StoryFn } from "@storybook/react"
import { BarChart } from "@yamada-ui/react"

type Story = StoryFn<typeof BarChart>

const meta: Meta<typeof BarChart> = {
  title: "Components / Feedback / BarChart",
  component: BarChart,
}

export default meta

export const basic: Story = () => {
  return <BarChart></BarChart>
}
