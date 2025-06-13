import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES } from "../../utils"
import { Blockquote } from "./"

type Story = StoryFn<typeof Blockquote.Root>

const meta: Meta<typeof Blockquote.Root> = {
  component: Blockquote.Root,
  title: "Components / Blockquote",
}

export default meta

export const Basic: Story = () => {
  return (
    <Blockquote.Root citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール">
      地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
    </Blockquote.Root>
  )
}

export const Variant: Story = () => {
  return (
    <PropsTable columns={["solid", "subtle", "plain"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <Blockquote.Root
            key={key}
            colorScheme={row}
            variant={column}
            citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
            icon={column === "plain" ? <Blockquote.Icon /> : null}
          >
            地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
          </Blockquote.Root>
        )
      }}
    </PropsTable>
  )
}

export const Cite: Story = () => {
  return (
    <Blockquote.Root
      cite="Wikipedia"
      citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
    >
      地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
    </Blockquote.Root>
  )
}

export const Dash: Story = () => {
  return (
    <Blockquote.Root
      cite="Wikipedia"
      citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
      withDash
    >
      地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
    </Blockquote.Root>
  )
}

export const Icon: Story = () => {
  return (
    <Blockquote.Root
      variant="plain"
      cite="Wikipedia"
      citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
      icon={<Blockquote.Icon />}
    >
      地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
    </Blockquote.Root>
  )
}

export const Justify: Story = () => {
  return (
    <PropsTable variant="stack" rows={["start", "center", "end"]}>
      {(_, row, key) => (
        <Blockquote.Root
          key={key}
          cite="Wikipedia"
          citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
          justify={row}
        >
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Blockquote.Root>
      )}
    </PropsTable>
  )
}

export const CustomCaption: Story = () => {
  return (
    <>
      <Blockquote.Root
        cite="Wikipedia"
        citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
        captionProps={{ alignSelf: "center" }}
      >
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </Blockquote.Root>

      <Blockquote.Root citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール">
        <Blockquote.Content>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Blockquote.Content>

        <Blockquote.Caption alignSelf="end">
          <Blockquote.Cite>Wikipedia</Blockquote.Cite>
        </Blockquote.Caption>
      </Blockquote.Root>
    </>
  )
}

export const CustomCite: Story = () => {
  return (
    <>
      <Blockquote.Root
        cite="Wikipedia"
        citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
        citeProps={{ color: "link" }}
      >
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </Blockquote.Root>

      <Blockquote.Root citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール">
        <Blockquote.Content>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Blockquote.Content>

        <Blockquote.Caption>
          <Blockquote.Cite color="secondary">Wikipedia</Blockquote.Cite>
        </Blockquote.Caption>
      </Blockquote.Root>
    </>
  )
}
