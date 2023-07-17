import { Meta, StoryFn } from '@storybook/react'
import { CircleProgress, CircleProgressLabel } from '@yamada-ui/react'

type Story = StoryFn<typeof CircleProgress>

const meta: Meta<typeof CircleProgress> = {
  title: 'Components / Feedback / CircleProgress',
  component: CircleProgress,
}

export default meta

export const basic: Story = () => {
  return (
    <>
      <CircleProgress value={19} />
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <CircleProgress value={18} size={32} />
    </>
  )
}

export const withThickness: Story = () => {
  return (
    <>
      <CircleProgress value={31} thickness={1} />
    </>
  )
}

export const withLabel: Story = () => {
  return (
    <>
      <CircleProgress
        size='120px'
        min={0}
        max={1000}
        value={444}
        color='purple.500'
        trackColor='green.300'
      >
        <CircleProgressLabel color='purple.500'>444%</CircleProgressLabel>
      </CircleProgress>
    </>
  )
}

export const withRounded: Story = () => {
  return (
    <>
      <CircleProgress value={18} isRounded />
    </>
  )
}

export const useAnimation: Story = () => {
  return (
    <>
      <CircleProgress value={18} isAnimation />
    </>
  )
}
