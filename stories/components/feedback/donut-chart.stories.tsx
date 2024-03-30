import type { Meta, StoryFn } from "@storybook/react"
import { DonutChart } from "@yamada-ui/charts"

type Story = StoryFn<typeof DonutChart>

const meta: Meta<typeof DonutChart> = {
  title: "Components / Feedback / DonutChart",
  component: DonutChart,
}

export default meta

export const basic: Story = () => {
  return <></>
}
