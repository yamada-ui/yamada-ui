import type { Meta, StoryFn } from "@storybook/react-vite"
import { VStack } from "../stack"
import { Text } from "./text"

type Story = StoryFn<typeof Text>

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Components / Text",
}

export default meta

export const Basic: Story = () => {
  return (
    <VStack gap="md">
      <Text fontSize="6xl" truncated>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Text>

      <Text fontSize="5xl" truncated>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Text>

      <Text fontSize="4xl" truncated>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Text>

      <Text fontSize="3xl" truncated>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Text>

      <Text fontSize="2xl" truncated>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Text>

      <Text fontSize="xl" truncated>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Text>

      <Text fontSize="lg" truncated>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Text>

      <Text fontSize="md" truncated>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Text>

      <Text fontSize="sm" truncated>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Text>

      <Text fontSize="xs" truncated>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Text>
    </VStack>
  )
}

export const Gradient: Story = () => {
  return (
    <Text
      bgClip="text"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      fontSize="xl"
      fontWeight="bold"
      w="full"
    >
      やるじゃねえかサタン！おめえはホントに世界の救世主かもな！
    </Text>
  )
}

export const Override: Story = () => {
  return (
    <>
      <Text as="b">へっ！きたねぇ花火だ</Text>

      <Text as="i">へっ！きたねぇ花火だ</Text>

      <Text as="u">へっ！きたねぇ花火だ</Text>

      <Text as="abbr">へっ！きたねぇ花火だ</Text>

      <Text as="del">へっ！きたねぇ花火だ</Text>

      <Text as="em">へっ！きたねぇ花火だ</Text>

      <Text as="ins">へっ！きたねぇ花火だ</Text>

      <Text as="kbd">へっ！きたねぇ花火だ</Text>

      <Text as="mark">へっ！きたねぇ花火だ</Text>

      <Text as="s">へっ！きたねぇ花火だ</Text>

      <Text as="samp">へっ！きたねぇ花火だ</Text>

      <Text as="sub">へっ！きたねぇ花火だ</Text>
    </>
  )
}

export const LineClamp: Story = () => {
  return (
    <>
      <Text fontSize="2xl" lineClamp={3}>
        『ドラゴンボール』（DRAGON
        BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
      </Text>

      <Text fontSize="2xl" lineClamp={2}>
        『ドラゴンボール』（DRAGON
        BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
      </Text>

      <Text fontSize="2xl" lineClamp={1}>
        『ドラゴンボール』（DRAGON
        BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
      </Text>
    </>
  )
}
