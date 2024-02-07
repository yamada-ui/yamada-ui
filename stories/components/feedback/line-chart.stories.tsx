import type { Meta, StoryFn } from "@storybook/react"
import { LineChart } from "@yamada-ui/charts"

type Story = StoryFn<typeof LineChart>

const meta: Meta<typeof LineChart> = {
  title: "Components / Feedback / LineChart",
  component: LineChart,
}

export default meta

export const basic: Story = () => {
  return <LineChart></LineChart>
}
