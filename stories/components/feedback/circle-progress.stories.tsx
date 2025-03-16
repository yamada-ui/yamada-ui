import type { Meta, StoryFn } from "@storybook/react"
import { CircleProgress, CircleProgressLabel } from "@yamada-ui/react"

type Story = StoryFn<typeof CircleProgress>

const meta: Meta<typeof CircleProgress> = {
  component: CircleProgress,
  title: "Components / Feedback / CircleProgress",
}

export default meta

export const basic: Story = () => {
  return <CircleProgress aria-label="Storage space" value={19} />
}

export const withSize: Story = () => {
  return <CircleProgress aria-label="Storage space" boxSize={32} value={18} />
}

export const withThickness: Story = () => {
  return <CircleProgress aria-label="Storage space" thickness={1} value={31} />
}

export const withLabel: Story = () => {
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

export const withRounded: Story = () => {
  return <CircleProgress aria-label="Storage space" fullRounded value={18} />
}

export const useAnimation: Story = () => {
  return (
    <CircleProgress
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      isAnimation
      value={18}
    />
  )
}
