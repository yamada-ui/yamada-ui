import type { Meta, StoryFn } from "@storybook/react"
import { ColorInput } from "@yamada-ui/react"

type Story = StoryFn<typeof ColorInput>

const meta: Meta<typeof ColorInput> = {
  title: "Components / Forms / ColorInput",
  component: ColorInput,
}

export default meta

export const basic: Story = () => {
  return <ColorInput />
}
