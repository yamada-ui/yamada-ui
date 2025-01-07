import type { Meta, StoryFn } from "@storybook/react"
import { Progress } from "./"

type Story = StoryFn<typeof Progress>

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: "Components / Progress",
}

export default meta

export const Basic: Story = () => {
  return <Progress aria-label="Storage space" value={88} />
}

export const WithColorMode: Story = () => {
  return <Progress colorScheme="purple" aria-label="Storage space" value={18} />
}

export const WithFilledTrackColor: Story = () => {
  return (
    <Progress
      aria-label="Storage space"
      filledTrackColor="green.500"
      value={18}
    />
  )
}

export const WithStripe: Story = () => {
  return <Progress aria-label="Storage space" hasStripe value={19} />
}

export const WithSize: Story = () => {
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

export const WithBorderRadius: Story = () => {
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
