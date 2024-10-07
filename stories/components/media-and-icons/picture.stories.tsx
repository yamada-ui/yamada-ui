import type { Meta, StoryFn } from "@storybook/react"
import { Image, Picture, Source } from "@yamada-ui/react"

type Story = StoryFn<typeof Picture>

const meta: Meta<typeof Picture> = {
  component: Picture,
  title: "Components / Media And Icons / Picture",
}

export default meta

export const basic: Story = () => {
  return (
    <>
      <Picture
        alt="ドラゴンボール"
        boxSize="xl"
        sources={[
          {
            media: "xl",
            srcSet:
              "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
          },
          {
            media: "lg",
            srcSet:
              "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
          },
          {
            media: "md",
            srcSet:
              "https://dragon-ball-official.com/assets/img/intro/intro_4.png",
          },
        ]}
        src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
      />

      <Picture>
        <Source
          media="md"
          srcSet="https://dragon-ball-official.com/assets/img/intro/intro_4.png"
        />
        <Source
          media="lg"
          srcSet="https://dragon-ball-official.com/assets/img/intro/intro_3.png"
        />
        <Source
          media="xl"
          srcSet="https://dragon-ball-official.com/assets/img/intro/intro_2.png"
        />
        <Image
          alt="ドラゴンボール"
          boxSize="xl"
          src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
        />
      </Picture>
    </>
  )
}

export const customMedia: Story = () => {
  return (
    <Picture
      alt="ドラゴンボール"
      boxSize="xl"
      sources={[
        {
          media: "(max-width: 480px)",
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_5.png",
        },
        {
          maxW: "4xl",
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_5.png",
        },
        {
          maxW: "976px",
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
        },
        {
          maxW: 1280,
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
        },
      ]}
      src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
    />
  )
}

export const disableSorting: Story = () => {
  return (
    <Picture
      alt="ドラゴンボール"
      boxSize="xl"
      enableSorting={false}
      sources={[
        {
          media: "lg",
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
        },
        {
          media: "(max-width: 1280px)",
          srcSet:
            "https://dragon-ball-official.com/assets/img/intro/intro_.png",
        },
      ]}
      src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
    />
  )
}
