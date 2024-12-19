import type { Meta, StoryFn } from "@storybook/react"
import { Heading } from "../heading"
import { Image } from "../image"
import { Text } from "../text"
import { Container } from "./container"

type Story = StoryFn<typeof Container>

const meta: Meta<typeof Container> = {
  component: Container,
  title: "Components / Container",
}

export default meta

export const Basic: Story = () => {
  return (
    <Container
      alignItems="center"
      border="1px solid"
      borderColor="inherit"
      boxShadow="md"
      gap="md"
      p="md"
      rounded="md"
      textAlign="center"
    >
      <Image
        src="https://dragon-ball-official.com/assets/img/intro/intro_2.png"
        alt="ドラゴンボール"
        maxW="sm"
      />

      <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>

      <Text>
        『ドラゴンボール』（DRAGON
        BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
      </Text>
    </Container>
  )
}
