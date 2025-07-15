import type { Meta, StoryFn } from "@storybook/react-vite"
import type { ThemeConfig } from "../../core"
import { UIProvider } from "../../providers/ui-provider"
import { defaultConfig } from "../../theme"
import { merge } from "../../utils"
import { Image } from "../image"
import { Picture, Source } from "./picture"

type Story = StoryFn<typeof Picture>

const meta: Meta<typeof Picture> = {
  component: Picture,
  title: "Components / Picture",
}

export default meta

export const Basic: Story = () => {
  return (
    <Picture>
      <Source
        srcSet="https://dragon-ball-official.com/assets/img/intro/intro_4.png"
        media="md"
      />
      <Source
        srcSet="https://dragon-ball-official.com/assets/img/intro/intro_3.png"
        media="lg"
      />
      <Source
        srcSet="https://dragon-ball-official.com/assets/img/intro/intro_2.png"
        media="xl"
      />
      <Image
        src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
        alt="ドラゴンボール"
        maxW="full"
        w="xl"
      />
    </Picture>
  )
}

export const PropsPattern: Story = () => {
  return (
    <Picture
      src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
      alt="ドラゴンボール"
      maxW="full"
      sources={[
        {
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
          media: "xl",
        },
        {
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
          media: "lg",
        },
        {
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_4.png",
          media: "md",
        },
      ]}
      w="xl"
    />
  )
}

export const Direction: Story = () => {
  const config = merge<ThemeConfig>(defaultConfig, {
    breakpoint: { direction: "up" },
  })

  return (
    <UIProvider config={config}>
      <Picture
        src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
        alt="ドラゴンボール"
        maxW="full"
        sources={[
          {
            srcSet:
              "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
            media: "xl",
          },
          {
            srcSet:
              "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
            media: "lg",
          },
          {
            srcSet:
              "https://dragon-ball-official.com/assets/img/intro/intro_4.png",
            media: "md",
          },
        ]}
        w="xl"
      />
    </UIProvider>
  )
}

export const CustomMedia: Story = () => {
  return (
    <Picture
      src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
      alt="ドラゴンボール"
      maxW="full"
      sources={[
        {
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_6.png",
          media: "(max-width: 480px)",
        },
        {
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_5.png",
          maxW: "3xl",
        },
        {
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
          maxW: "976px",
        },
        {
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
          maxW: 1280,
        },
      ]}
      w="xl"
    />
  )
}

export const DisableSorting: Story = () => {
  return (
    <Picture
      src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
      alt="ドラゴンボール"
      enableSorting={false}
      maxW="full"
      sources={[
        {
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
          media: "lg",
        },
        {
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
          media: "(max-width: 1280px)",
        },
      ]}
      w="xl"
    />
  )
}
