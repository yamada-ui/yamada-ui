import { a11y, render, screen } from "@yamada-ui/test"
import { Blockquote, Code, Em, Heading, Text } from "../src"

describe("<Heading />", () => {
  test("renders heading correctly", async () => {
    await a11y(<Heading>Heading</Heading>)
  })

  test("as - prop works correctly", () => {
    render(
      <Heading as="a" href="www.google.com">
        Heading
      </Heading>,
    )

    const link = screen.getByRole("link", { name: /Heading/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "www.google.com")
  })
})

describe("<Text />", () => {
  test("renders text correctly", async () => {
    await a11y(<Text>Text</Text>)
  })

  test("as - prop works correctly", () => {
    render(
      <Text as="a" href="www.google.com">
        Text
      </Text>,
    )

    const link = screen.getByRole("link", { name: /Text/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "www.google.com")
  })
})

describe("<Code />", () => {
  test("renders code correctly", async () => {
    await a11y(<Code>console.log("Hello, Yamada!")</Code>)
  })
})

describe("<Em />", () => {
  test("renders em correctly", async () => {
    await a11y(<Em>Unleash the Power</Em>)
  })
})

describe("<Blockquote />", () => {
  test("renders blockquote correctly", async () => {
    await a11y(
      <Blockquote
        cite="Wikipedia"
        citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール"
      >
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </Blockquote>,
    )
  })
})
