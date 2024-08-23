import type { Meta, StoryFn } from "@storybook/react"
import { NativeImage } from "@yamada-ui/react"

type Story = StoryFn<typeof NativeImage>

const meta: Meta<typeof NativeImage> = {
  title: "Components / Media And Icons / NativeImage",
  component: NativeImage,
}

export default meta

export const basic: Story = () => {
  return (
    <NativeImage
      src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
      width="512px"
      height="512px"
      alt="ドラゴンボール"
    />
  )
}
