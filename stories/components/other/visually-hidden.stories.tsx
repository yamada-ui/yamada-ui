import type { Meta, StoryFn } from "@storybook/react"
import { Check } from "@yamada-ui/lucide"
import { Button, VisuallyHidden } from "@yamada-ui/react"

type Story = StoryFn<typeof VisuallyHidden>

const meta: Meta<typeof VisuallyHidden> = {
  title: "Components / Other / VisuallyHidden",
  component: VisuallyHidden,
}

export default meta

export const basic: Story = () => {
  return (
    <Button>
      <VisuallyHidden>Checkmark</VisuallyHidden>
      <Check fontSize="2xl" />
    </Button>
  )
}
