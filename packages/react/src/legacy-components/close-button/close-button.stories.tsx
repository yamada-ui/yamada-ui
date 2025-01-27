import type { Meta, StoryFn } from "@storybook/react"
import { CloseButton } from "../close-button"
import { Wrap } from "../flex"

type Story = StoryFn<typeof CloseButton>

const meta: Meta<typeof CloseButton> = {
  component: CloseButton,
  title: "Components / CloseButton",
}

export default meta

export const Basic: Story = () => {
  return (
    <Wrap gap="md">
      <CloseButton size="sm" />

      <CloseButton size="md" />

      <CloseButton size="lg" />
    </Wrap>
  )
}
