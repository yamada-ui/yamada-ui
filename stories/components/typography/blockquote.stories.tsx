import type { Meta, StoryFn } from "@storybook/react"
import { QuoteIcon } from "@yamada-ui/lucide"
import {
  Blockquote,
  BlockquoteCaption,
  BlockquoteCite,
  BlockquoteContent,
} from "@yamada-ui/react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Blockquote>

const meta: Meta<typeof Blockquote> = {
  component: Blockquote,
  title: "Components / Typography / Blockquote",
}

export default meta

export const basic: Story = () => {
  return (
    <Blockquote citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール">
      地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
    </Blockquote>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Blockquote
        variant="solid"
        citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
      >
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </Blockquote>

      <Blockquote
        variant="subtle"
        citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
      >
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </Blockquote>

      <Blockquote
        variant="plain"
        citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
      >
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </Blockquote>
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <>
      {colorSchemes.map((colorScheme) => (
        <Blockquote
          key={colorScheme}
          colorScheme={colorScheme}
          variant="solid"
          citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
        >
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Blockquote>
      ))}

      {colorSchemes.map((colorScheme) => (
        <Blockquote
          key={colorScheme}
          colorScheme={colorScheme}
          variant="subtle"
          citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
        >
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Blockquote>
      ))}
    </>
  )
}

export const withCite: Story = () => {
  return (
    <Blockquote
      cite="Wikipedia"
      citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
    >
      地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
    </Blockquote>
  )
}

export const withShowDash: Story = () => {
  return (
    <Blockquote
      cite="Wikipedia"
      citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
      withDash
    >
      地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
    </Blockquote>
  )
}

export const withIcon: Story = () => {
  return (
    <Blockquote
      variant="plain"
      cite="Wikipedia"
      citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
      icon={
        <QuoteIcon
          color={["blackAlpha.600", "whiteAlpha.700"]}
          fontSize="xl"
          left="0"
          position="absolute"
          top="0"
        />
      }
      px="8"
    >
      地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
    </Blockquote>
  )
}

export const withJustify: Story = () => {
  return (
    <>
      <Blockquote
        cite="Wikipedia"
        citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
        justify="start"
      >
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </Blockquote>

      <Blockquote
        cite="Wikipedia"
        citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
        justify="center"
      >
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </Blockquote>

      <Blockquote
        cite="Wikipedia"
        citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
        justify="end"
      >
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </Blockquote>
    </>
  )
}

export const customCaption: Story = () => {
  return (
    <>
      <Blockquote
        cite="Wikipedia"
        citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
        captionProps={{ alignSelf: "center" }}
      >
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </Blockquote>

      <Blockquote citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール">
        <BlockquoteContent>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </BlockquoteContent>

        <BlockquoteCaption alignSelf="end">
          <BlockquoteCite>Wikipedia</BlockquoteCite>
        </BlockquoteCaption>
      </Blockquote>
    </>
  )
}

export const customCite: Story = () => {
  return (
    <>
      <Blockquote
        cite="Wikipedia"
        citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
        citeProps={{ color: "primary" }}
      >
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </Blockquote>

      <Blockquote citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール">
        <BlockquoteContent>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </BlockquoteContent>

        <BlockquoteCaption>
          <BlockquoteCite color="secondary">Wikipedia</BlockquoteCite>
        </BlockquoteCaption>
      </Blockquote>
    </>
  )
}
