import type { Meta, StoryFn } from "@storybook/react"
import { RadialChart } from "@yamada-ui/charts"

type Story = StoryFn<typeof RadialChart>

const meta: Meta<typeof RadialChart> = {
  title: "Components / Data Display / RadialChart",
  component: RadialChart,
}

export default meta

export const basic: Story = () => {
  const data = [
    { browser: "chrome", visitors: 275, color: "blue.500" },
    { browser: "safari", visitors: 200, color: "red.500" },
    { browser: "firefox", visitors: 187, color: "orange.500" },
    { browser: "edge", visitors: 173, color: "violet.500" },
    { browser: "other", visitors: 90, color: "green.500" },
  ]

  return (
    <RadialChart
      data={data}
      dataKey="visitors"
      chartProps={{
        innerRadius: "10%",
        outerRadius: "80%",
      }}
      radialBarProps={{
        label: { position: "insideStart", fill: "#fff" },
        background: { fill: ["blue.100", "red.200"] },
      }}
    />
  )
}
