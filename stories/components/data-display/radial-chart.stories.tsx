import type { Meta, StoryFn } from "@storybook/react"
import { RadialChart } from "@yamada-ui/charts"

type Story = StoryFn<typeof RadialChart>

const meta: Meta<typeof RadialChart> = {
  title: "Components / Data Display / RadialChart",
  component: RadialChart,
}

export default meta

export const basic: Story = () => {
  return <RadialChart />
}
