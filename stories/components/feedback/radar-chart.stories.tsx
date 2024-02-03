import type { Meta, StoryFn } from "@storybook/react"
import { RadarChart } from "@yamada-ui/react"

type Story = StoryFn<typeof RadarChart>

const meta: Meta<typeof RadarChart> = {
  title: "Components / Feedback / RadarChart",
  component: RadarChart,
}

export default meta

export const basic: Story = () => {
  return <RadarChart></RadarChart>
}
