import type { Meta, StoryFn } from "@storybook/react"
import { Image } from "@yamada-ui/react"

type Story = StoryFn<typeof Image>

const meta: Meta<typeof Image> = {
  title: "Components / Media And Icons / Image",
  component: Image,
}

export default meta

export const basic: Story = () => {
  return (
    <Image
      src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
      size="xl"
    />
  )
}

export const withFallback: Story = () => {
  return (
    <Image
      src="https://not-found.com/not-found.png"
      fallback="https://via.placeholder.com/512"
      size="xl"
    />
  )
}
