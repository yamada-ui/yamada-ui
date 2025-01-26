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
      src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
      alt="ドラゴンボール"
      boxSize="xl"
    />
  )
}

export const withFallback: Story = () => {
  return (
    <Image
      src="https://not-found.com/not-found.png"
      alt="Not found"
      boxSize="xl"
      fallback="https://placehold.co/512"
    />
  )
}
