import type { Meta, StoryFn } from "@storybook/react"
import { Progress } from "@yamada-ui/react"

type Story = StoryFn<typeof Progress>

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: "Components / Feedback / Progress",
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
      <Progress colorScheme="pink" size="xs" value={93} />
      <Progress colorScheme="pink" size="sm" value={93} />
      <Progress colorScheme="pink" size="md" value={93} />
      <Progress colorScheme="pink" size="lg" value={93} />
    </>
  )
}

export const withBorderRadius: Story = () => {
  return (
    <>
      <Progress borderRadius="md" colorScheme="orange" value={10} />
      <Progress colorScheme="yellow" rounded="md" value={31} />
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
