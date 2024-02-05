import type { Meta, StoryFn } from "@storybook/react"
import { RadarChart } from "@yamada-ui/charts"

type Story = StoryFn<typeof RadarChart>

const meta: Meta<typeof RadarChart> = {
  title: "Components / Feedback / RadarChart",
  component: RadarChart,
}

export default meta

export const basic: Story = () => {
  return <RadarChart></RadarChart>
}
