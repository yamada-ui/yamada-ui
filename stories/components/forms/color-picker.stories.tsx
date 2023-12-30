import type { Meta, StoryFn } from "@storybook/react"
import { ColorPicker } from "@yamada-ui/react"

type Story = StoryFn<typeof ColorPicker>

const meta: Meta<typeof ColorPicker> = {
  title: "Components / Forms / ColorPicker",
  component: ColorPicker,
}

export default meta

export const basic: Story = () => {
  return <ColorPicker />
}
