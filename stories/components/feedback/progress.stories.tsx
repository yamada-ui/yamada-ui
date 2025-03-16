import type { Meta, StoryFn } from "@storybook/react"
import { Progress } from "@yamada-ui/react"

type Story = StoryFn<typeof Progress>

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: "Components / Feedback / Progress",
}

export default meta

export const basic: Story = () => {
  return <Progress aria-label="Storage space" value={88} />
}

export const withColorMode: Story = () => {
  return <Progress colorScheme="purple" aria-label="Storage space" value={18} />
}

export const withFilledTrackColor: Story = () => {
  return (
    <Progress
      aria-label="Storage space"
      filledTrackColor="green.500"
      value={18}
    />
  )
}

export const withStripe: Story = () => {
  return <Progress aria-label="Storage space" hasStripe value={19} />
}

export const withSize: Story = () => {
  return (
    <>
      <Progress
        colorScheme="pink"
        size="xs"
        aria-label="Storage space"
        value={93}
      />
      <Progress
        colorScheme="pink"
        size="sm"
        aria-label="Storage space"
        value={93}
      />
      <Progress
        colorScheme="pink"
        size="md"
        aria-label="Storage space"
        value={93}
      />
      <Progress
        colorScheme="pink"
        size="lg"
        aria-label="Storage space"
        value={93}
      />
    </>
  )
}

export const withBorderRadius: Story = () => {
  return (
    <>
      <Progress
        colorScheme="orange"
        aria-label="Storage space"
        borderRadius="md"
        value={10}
      />
      <Progress
        colorScheme="yellow"
        aria-label="Storage space"
        rounded="md"
        value={31}
      />
    </>
  )
}

export const useStripeAnimation: Story = () => {
  return (
    <Progress
      aria-label="Storage space"
      hasStripe
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      isStripeAnimation
      value={20}
    />
  )
}
export const useAnimation: Story = () => {
  return (
    <Progress
      colorScheme="green"
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      isAnimation
    />
  )
}
