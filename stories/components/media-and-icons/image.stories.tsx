import type { Meta, StoryFn } from "@storybook/react"
import { Image } from "@yamada-ui/react"

type Story = StoryFn<typeof Image>

const meta: Meta<typeof Image> = {
  component: Image,
  title: "Components / Media And Icons / Image",
}

export default meta

export const basic: Story = () => {
  return (
    <Image
      alt="ドラゴンボール"
      boxSize="xl"
      src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
    />
  )
}

export const withFallback: Story = () => {
  return (
    <Image
      alt="Not found"
      boxSize="xl"
      fallback="https://via.placeholder.com/512"
      src="https://not-found.com/not-found.png"
    />
  )
}
