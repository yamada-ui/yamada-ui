import type { Meta, StoryFn } from "@storybook/react"
import { Image } from "./image"

type Story = StoryFn<typeof Image>

const meta: Meta<typeof Image> = {
  component: Image,
  title: "Components / Image",
}

export default meta

export const Basic: Story = () => {
  return (
    <Image
      src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
      alt="ドラゴンボール"
      boxSize="xl"
    />
  )
}

export const WithFallback: Story = () => {
  return (
    <Image
      src="https://not-found.com/not-found.png"
      alt="Not found"
      boxSize="xl"
      fallback="https://via.placeholder.com/512"
    />
  )
}
