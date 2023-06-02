import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Progress } from '@yamada-ui/react'

export default {
  title: 'Components / Feedback / Progress',
  component: Progress,
} as ComponentMeta<typeof Progress>

export const basic: ComponentStory<typeof Progress> = () => {
  return (
    <>
      <Progress value={88} />
    </>
  )
}

export const withColorMode: ComponentStory<typeof Progress> = () => {
  return (
    <>
      <Progress colorScheme='purple' value={18} />
    </>
  )
}

export const withStripe: ComponentStory<typeof Progress> = () => {
  return (
    <>
      <Progress hasStripe value={19} />
    </>
  )
}

export const withSize: ComponentStory<typeof Progress> = () => {
  return (
    <>
      <Progress colorScheme='pink' value={93} size='xs' />
      <Progress colorScheme='pink' value={93} size='sm' />
      <Progress colorScheme='pink' value={93} size='md' />
      <Progress colorScheme='pink' value={93} size='lg' />
    </>
  )
}

export const withBorderRadius: ComponentStory<typeof Progress> = () => {
  return (
    <>
      <Progress colorScheme='orange' value={10} borderRadius='md' />
      <Progress colorScheme='yellow' value={31} rounded='md' />
    </>
  )
}

export const useStripeAnimation: ComponentStory<typeof Progress> = () => {
  return (
    <>
      <Progress hasStripe isStripeAnimation value={20} />
    </>
  )
}
export const useAnimation: ComponentStory<typeof Progress> = () => {
  return (
    <>
      <Progress colorScheme='green' isAnimation />
    </>
  )
}
