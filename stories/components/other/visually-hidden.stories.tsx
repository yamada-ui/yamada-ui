import { faCheck } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
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
      <Icon icon={faCheck} />
    </Button>
  )
}
