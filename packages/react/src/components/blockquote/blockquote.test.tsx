import { a11y } from "../../../test"
import { Blockquote } from "./"

describe("<Blockquote />", () => {
  test("renders blockquote correctly", async () => {
    await a11y(
      <Blockquote.Root
        cite="Wikipedia"
        citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
      >
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </Blockquote.Root>,
    )
  })
})
