import type { Meta, StoryFn } from "@storybook/react"
import { LinkBox } from "."
import { Heading } from "../heading"
import { Link } from "../link"
import { Text } from "../text"

type Story = StoryFn<typeof LinkBox.Root>

const meta: Meta<typeof LinkBox.Root> = {
  component: LinkBox.Root,
  title: "Components / LinkBox",
}

export default meta

export const Basic: Story = () => {
  return (
    <LinkBox.Root
      as="article"
      layerStyle="panel"
      alignItems="flex-start"
      display="flex"
      flexDirection="column"
      gap="sm"
      p="md"
      rounded="l2"
    >
      <Text>鳥山明</Text>

      <Heading size="2xl">
        <LinkBox.Overlay
          href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB"
          external
        >
          ドラゴンボール
        </LinkBox.Overlay>
      </Heading>

      <Text>
        『ドラゴンボール』（DRAGON
        BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。
      </Text>
    </LinkBox.Root>
  )
}

export const NestedLink: Story = () => {
  return (
    <LinkBox.Root
      as="article"
      layerStyle="panel"
      alignItems="flex-start"
      display="flex"
      flexDirection="column"
      gap="sm"
      p="md"
      rounded="l2"
    >
      <Text>鳥山明</Text>

      <Heading size="2xl">
        <LinkBox.Overlay
          href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB"
          external
        >
          ドラゴンボール
        </LinkBox.Overlay>
      </Heading>

      <Text>
        『ドラゴンボール』（DRAGON
        BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。
      </Text>

      <Link href="https://dragon-ball-official.com/" external>
        オフィシャルサイト
      </Link>
    </LinkBox.Root>
  )
}
