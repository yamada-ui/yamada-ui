import type { Meta, StoryFn } from "@storybook/react-vite"
import { Image } from "../image"
import { AspectRatio } from "./aspect-ratio"

type Story = StoryFn<typeof AspectRatio>

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
  title: "Components / AspectRatio",
}

export default meta

export const Basic: Story = () => {
  return (
    <AspectRatio w="md">
      <Image
        src="https://eiga.k-img.com/images/movie/100944/photo/14e876cfa5d3c633.jpg"
        alt="シン・ゴジラ"
      />
    </AspectRatio>
  )
}

export const Ratio: Story = () => {
  return (
    <AspectRatio ratio={16 / 9} w="full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12974.591815632506!2d139.6932331!3d35.6117497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b1a487a026f%3A0x16e7e351187c8216!2z5qCq5byP5Lya56S-IOOCouODkOODg-ODlw!5e0!3m2!1sja!2sjp!4v1674728815443!5m2!1sja!2sjp"
        title="map"
      />
    </AspectRatio>
  )
}
