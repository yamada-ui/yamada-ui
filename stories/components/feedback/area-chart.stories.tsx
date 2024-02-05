import type { Meta, StoryFn } from "@storybook/react"
import { AreaChart } from "@yamada-ui/charts"

type Story = StoryFn<typeof AreaChart>

const meta: Meta<typeof AreaChart> = {
  title: "Components / Feedback / AreaChart",
  component: AreaChart,
}

export default meta

export const basic: Story = () => {
  return <AreaChart></AreaChart>
}
