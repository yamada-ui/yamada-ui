import type { Meta, StoryFn } from "@storybook/react"
import { CircleProgress } from "./"

type Story = StoryFn<typeof CircleProgress.Root>

const meta: Meta<typeof CircleProgress.Root> = {
  component: CircleProgress.Root,
  title: "Components / CircleProgress",
}

export default meta

export const Basic: Story = () => {
  return <CircleProgress.Root aria-label="Storage space" value={19} />
}

export const WithSize: Story = () => {
  return (
    <CircleProgress.Root aria-label="Storage space" boxSize={32} value={18} />
  )
}

export const WithThickness: Story = () => {
  return (
    <CircleProgress.Root aria-label="Storage space" thickness={1} value={31} />
  )
}

export const WithLabel: Story = () => {
  return (
    <CircleProgress.Root
      aria-label="Storage space"
      boxSize="120px"
      color="purple.500"
      max={1000}
      min={0}
      trackColor="green.300"
      value={444}
    >
      <CircleProgress.Label color="purple.500">444%</CircleProgress.Label>
    </CircleProgress.Root>
  )
}

export const WithRounded: Story = () => {
  return (
    <CircleProgress.Root aria-label="Storage space" fullRounded value={18} />
  )
}
