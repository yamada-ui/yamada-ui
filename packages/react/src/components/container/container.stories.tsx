import type { Meta, StoryFn } from "@storybook/react"
import { PropsTable } from "../../../storybook/components"
import { For } from "../../components/for"
import { COLOR_SCHEMES, transformSize } from "../../utils"
import { Heading } from "../heading"
import { Image } from "../image"
import { Text } from "../text"
import { Container } from "./"

type Story = StoryFn<typeof Container.Root>

const meta: Meta<typeof Container.Root> = {
  component: Container.Root,
  title: "Components / Container",
}

export default meta

export const Basic: Story = () => {
  return (
    <Container.Root>
      <Container.Header>
        <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
      </Container.Header>

      <Container.Body color="fg.muted">
        <Text>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Text>
      </Container.Body>
    </Container.Root>
  )
}

export const Variant: Story = () => {
  return (
    <For each={["panel", "elevated", "solid", "subtle", "surface", "outline"]}>
      {(variant, index) => (
        <Container.Root key={index} variant={variant}>
          <Container.Header>
            <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
          </Container.Header>

          <Container.Body>
            <Text>
              『ドラゴンボール』（DRAGON
              BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
            </Text>
          </Container.Body>
        </Container.Root>
      )}
    </For>
  )
}

export const Size: Story = () => {
  return (
    <For each={["sm", "md", "lg", "xl"]}>
      {(size, index) => (
        <Container.Root key={index} size={size}>
          <Container.Header>
            <Heading size={transformSize(size, 2)}>
              『ドラゴンボール』（DRAGON BALL）
            </Heading>
          </Container.Header>

          <Container.Body color="fg.muted">
            <Text>
              『ドラゴンボール』（DRAGON
              BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
            </Text>
          </Container.Body>
        </Container.Root>
      )}
    </For>
  )
}

export const ColorScheme: Story = () => {
  return (
    <PropsTable
      columns={["solid", "subtle", "surface", "outline"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Container.Root key={key} colorScheme={row} variant={column}>
            <Container.Header>
              <Heading size="md">Container</Heading>
            </Container.Header>

            <Container.Body>
              <Text>ColorScheme is {row}</Text>
            </Container.Body>
          </Container.Root>
        )
      }}
    </PropsTable>
  )
}

export const CenterContent: Story = () => {
  return (
    <Container.Root centerContent>
      <Container.Header flexDirection="column">
        <Image
          src="https://dragon-ball-official.com/assets/img/intro/intro_2.png"
          alt="ドラゴンボール"
          maxW="sm"
        />

        <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
      </Container.Header>

      <Container.Body color="fg.muted">
        <Text>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Text>
      </Container.Body>
    </Container.Root>
  )
}
