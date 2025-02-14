import type { Meta, StoryFn } from "@storybook/react"
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
    <>
      <Picture
        src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
        alt="ドラゴンボール"
        boxSize="xl"
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
      />

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
          boxSize="xl"
        />
      </Picture>
    </>
  )
}

export const CustomMedia: Story = () => {
  return (
    <Picture
      src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
      alt="ドラゴンボール"
      boxSize="xl"
      sources={[
        {
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_5.png",
          media: "(max-width: 480px)",
        },
        {
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_5.png",
          maxW: "4xl",
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
    />
  )
}

export const DisableSorting: Story = () => {
  return (
    <Picture
      src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
      alt="ドラゴンボール"
      boxSize="xl"
      enableSorting={false}
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
    />
  )
}
