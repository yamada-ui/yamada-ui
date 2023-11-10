import { Meta, StoryFn } from "@storybook/react"
import { Progress } from "@yamada-ui/react"

type Story = StoryFn<typeof Progress>

const meta: Meta<typeof Progress> = {
  title: "Components / Feedback / Progress",
  component: Progress,
}

export default meta

export const basic: Story = () => {
  return (
    <>
      <Progress value={88} />
    </>
  )
}

export const withColorMode: Story = () => {
  return (
    <>
      <Progress colorScheme="purple" value={18} />
    </>
  )
}

export const withFilledTrackColor: Story = () => {
  return (
    <>
      <Progress filledTrackColor="green.500" value={18} />
    </>
  )
}

export const withStripe: Story = () => {
  return (
    <>
      <Progress hasStripe value={19} />
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <Progress colorScheme="pink" value={93} size="xs" />
      <Progress colorScheme="pink" value={93} size="sm" />
      <Progress colorScheme="pink" value={93} size="md" />
      <Progress colorScheme="pink" value={93} size="lg" />
    </>
  )
}

export const withBorderRadius: Story = () => {
  return (
    <>
      <Progress colorScheme="orange" value={10} borderRadius="md" />
      <Progress colorScheme="yellow" value={31} rounded="md" />
    </>
  )
}

export const useStripeAnimation: Story = () => {
  return (
    <>
      <Progress hasStripe isStripeAnimation value={20} />
    </>
  )
}
export const useAnimation: Story = () => {
  return (
    <>
      <Progress colorScheme="green" isAnimation />
    </>
  )
}
