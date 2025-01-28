import type { Meta, StoryFn } from "@storybook/react"
import { CircleProgress, CircleProgressLabel } from "./"

type Story = StoryFn<typeof CircleProgress>

const meta: Meta<typeof CircleProgress> = {
  component: CircleProgress,
  title: "Components / CircleProgress",
}

export default meta

export const Basic: Story = () => {
  return <CircleProgress aria-label="Storage space" value={19} />
}

export const WithSize: Story = () => {
  return <CircleProgress aria-label="Storage space" boxSize={32} value={18} />
}

export const WithThickness: Story = () => {
  return <CircleProgress aria-label="Storage space" thickness={1} value={31} />
}

export const WithLabel: Story = () => {
  return (
    <CircleProgress
      aria-label="Storage space"
      boxSize="120px"
      color="purple.500"
      max={1000}
      min={0}
      trackColor="green.300"
      value={444}
    >
      <CircleProgressLabel color="purple.500">444%</CircleProgressLabel>
    </CircleProgress>
  )
}

export const WithRounded: Story = () => {
  return <CircleProgress aria-label="Storage space" fullRounded value={18} />
}
