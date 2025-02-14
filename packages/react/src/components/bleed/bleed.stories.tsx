import type { Meta, StoryFn } from "@storybook/react"
import { Button } from "../button"
import { Card } from "../card"
import { Center } from "../center"
import { Heading } from "../heading"
import { Image } from "../image"
import { VStack } from "../stack"
import { Text } from "../text"
import { Bleed } from "./bleed"

type Story = StoryFn<typeof Bleed>

const meta: Meta<typeof Bleed> = {
  component: Bleed,
  title: "Components / Bleed",
}

export default meta

export const Basic: Story = () => {
  return (
    <Card.Root variant="outline" maxW="xl">
      <Card.Header>
        <Heading size="md">北斗の拳</Heading>
      </Card.Header>

      <Card.Body>
        <Bleed inline="md">
          <Image
            src="https://hokuto-no-ken.jp/wp/wp-content/themes/hokuto_cms_40th/images/main_vs_bg_new.jpg"
            alt="北斗の拳"
            w="full"
          />
        </Bleed>

        <Text>
          199X年。世界は核の炎に包まれた。文明社会は消え去り、世界は暴力が支配する弱肉強食の時代へと突入した。
        </Text>

        <Text>
          それから数年後、一子相伝の暗殺拳である北斗神拳の伝承者となったケンシロウは愛する女性ユリアと共に旅に出る。
        </Text>

        <Text>
          しかし、ユリアを愛する南斗孤鷲拳の使い手シンに敗北し、ケンシロウは胸に七つの傷をつけられユリアを奪われてしまう。
        </Text>

        <Text>
          ユリアを取り戻すため荒野をさまようケンシロウ。そこでケンシロウは言葉を失った少女リンとしたたかに生きる少年バットと運命の出会いを果たす。
        </Text>

        <Text>
          北斗神拳の宿命に導かれるまま乱世に覇をとなえる強敵たちと戦い、弱き者を救い続けるケンシロウ。北斗神拳と対を成す南斗の使い手との戦いや、ケンシロウを見守る兄トキとの出会い、そしてトキとケンシロウが目指した北斗の長兄であり最強の男ラオウとの戦いを通じ、ケンシロウは乱世を救う真の救世主へと成長していく。
        </Text>
      </Card.Body>

      <Card.Footer>
        <Button>Wikipedia</Button>
      </Card.Footer>
    </Card.Root>
  )
}

export const Full: Story = () => {
  return (
    <Center w="full">
      <VStack gap="lg" maxW="xl">
        <Bleed blockStart="md" inline="full">
          <Image
            src="https://hokuto-no-ken.jp/wp/wp-content/themes/hokuto_cms_40th/images/main_vs_bg_new.jpg"
            alt="北斗の拳"
            maxH="lg"
            objectFit="cover"
            w="full"
          />
        </Bleed>

        <Heading textAlign="center">
          <Image
            src="https://hokuto-no-ken.jp/wp/wp-content/uploads/2017/03/title_hokuto.png"
            alt="北斗の拳"
            maxW="xs"
          />
        </Heading>

        <VStack>
          <Text>
            199X年。世界は核の炎に包まれた。文明社会は消え去り、世界は暴力が支配する弱肉強食の時代へと突入した。
          </Text>

          <Text>
            それから数年後、一子相伝の暗殺拳である北斗神拳の伝承者となったケンシロウは愛する女性ユリアと共に旅に出る。
          </Text>

          <Text>
            しかし、ユリアを愛する南斗孤鷲拳の使い手シンに敗北し、ケンシロウは胸に七つの傷をつけられユリアを奪われてしまう。
          </Text>

          <Text>
            ユリアを取り戻すため荒野をさまようケンシロウ。そこでケンシロウは言葉を失った少女リンとしたたかに生きる少年バットと運命の出会いを果たす。
          </Text>

          <Text>
            北斗神拳の宿命に導かれるまま乱世に覇をとなえる強敵たちと戦い、弱き者を救い続けるケンシロウ。北斗神拳と対を成す南斗の使い手との戦いや、ケンシロウを見守る兄トキとの出会い、そしてトキとケンシロウが目指した北斗の長兄であり最強の男ラオウとの戦いを通じ、ケンシロウは乱世を救う真の救世主へと成長していく。
          </Text>
        </VStack>
      </VStack>
    </Center>
  )
}
