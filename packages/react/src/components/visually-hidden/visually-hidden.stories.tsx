import type { Meta, StoryFn } from "@storybook/react"
import { Button } from "../button"
import { CheckIcon } from "../icon"
import { VisuallyHidden } from "./visually-hidden"

type Story = StoryFn<typeof VisuallyHidden>

const meta: Meta<typeof VisuallyHidden> = {
  component: VisuallyHidden,
  title: "Components / VisuallyHidden",
}

export default meta

export const Basic: Story = () => {
  return (
    <Button>
      <VisuallyHidden>Checkmark</VisuallyHidden>
      <CheckIcon fontSize="2xl" />
    </Button>
  )
}
