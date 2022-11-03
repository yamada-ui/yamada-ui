import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CircleProgress, CircleProgressLabel } from '@yamada-ui/react'

export default {
  title: 'Components / Feedback / Circle Progress',
  component: CircleProgress,
} as ComponentMeta<typeof CircleProgress>

export const basic: ComponentStory<typeof CircleProgress> = () => {
  return (
    <>
      <CircleProgress value={19} />
    </>
  )
}

export const withSize: ComponentStory<typeof CircleProgress> = () => {
  return (
    <>
      <CircleProgress value={18} size={32} />
    </>
  )
}

export const withThickness: ComponentStory<typeof CircleProgress> = () => {
  return (
    <>
      <CircleProgress value={31} thickness={1} />
    </>
  )
}

export const withLabel: ComponentStory<typeof CircleProgress> = () => {
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

export const withRounded: ComponentStory<typeof CircleProgress> = () => {
  return (
    <>
      <CircleProgress value={18} isRounded />
    </>
  )
}

export const useAnimation: ComponentStory<typeof CircleProgress> = () => {
  return (
    <>
      <CircleProgress value={18} isAnimation />
    </>
  )
}
