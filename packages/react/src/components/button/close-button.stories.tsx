import type { Meta, StoryFn } from "@storybook/react"
import { Wrap } from "../flex"
import { CloseButton } from "./close-button"

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
