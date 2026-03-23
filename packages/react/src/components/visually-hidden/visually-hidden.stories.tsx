import type { Meta, StoryFn } from "@storybook/react-vite"
import { IconButton } from "../button"
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
    <IconButton>
      <VisuallyHidden>Checkmark</VisuallyHidden>
      <CheckIcon fontSize="2xl" />
    </IconButton>
  )
}
