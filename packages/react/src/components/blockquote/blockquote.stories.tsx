import type { Meta, StoryFn } from "@storybook/react"
import { COLOR_SCHEMES } from "../../utils"
import { QuoteIcon } from "../icon"
import {
  Blockquote,
  BlockquoteCaption,
  BlockquoteCite,
  BlockquoteContent,
} from "./blockquote"

type Story = StoryFn<typeof Blockquote>

const meta: Meta<typeof Blockquote> = {
  component: Blockquote,
  title: "Components / Blockquote",
}

export default meta

export const Basic: Story = () => {
  return (
    <Blockquote citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール">
      地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
    </Blockquote>
  )
}

export const WithVariant: Story = () => {
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

export const WithColorScheme: Story = () => {
  return (
    <>
      {COLOR_SCHEMES.map((colorScheme) => (
        <Blockquote
          key={colorScheme}
          colorScheme={colorScheme}
          variant="solid"
          citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
        >
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Blockquote>
      ))}

      {COLOR_SCHEMES.map((colorScheme) => (
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

export const WithCite: Story = () => {
  return (
    <Blockquote
      cite="Wikipedia"
      citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
    >
      地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
    </Blockquote>
  )
}

export const WithShowDash: Story = () => {
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

export const WithIcon: Story = () => {
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

export const WithJustify: Story = () => {
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

export const CustomCaption: Story = () => {
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

export const CustomCite: Story = () => {
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
