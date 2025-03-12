import type { Meta, StoryFn } from "@storybook/react"
import { PropsTable } from "../../../storybook/components"
import { VStack } from "../stack"
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

export const ColorMode: Story = () => {
  return <Progress colorScheme="purple" aria-label="Storage space" value={18} />
}

export const FilledTrackColor: Story = () => {
  return (
    <Progress
      aria-label="Storage space"
      filledTrackColor="green.500"
      value={18}
    />
  )
}

export const Stripe: Story = () => {
  return <Progress aria-label="Storage space" hasStripe value={19} />
}

export const Size: Story = () => {
  return (
    <PropsTable variant="column" rows={["xs", "sm", "md", "lg"]}>
      {(_, row, key) => {
        return (
          <Progress
            key={key}
            colorScheme="blue"
            size={row}
            aria-label="Storage space"
            value={93}
          />
        )
      }}
    </PropsTable>
  )
}

export const BorderRadius: Story = () => {
  return (
    <VStack>
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
    </VStack>
  )
}
