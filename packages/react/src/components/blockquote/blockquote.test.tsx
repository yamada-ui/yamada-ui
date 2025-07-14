import { a11y, render, screen } from "@/test"
import { QuoteIcon } from "../icon"
import { Blockquote } from "./"

describe("<Blockquote />", () => {
  test("renders blockquote correctly", async () => {
    await a11y(
      <Blockquote.Root citeUrl="https://ja.wikipedia.org/wiki/ドラゴンボール">
        <Blockquote.Icon>
          <QuoteIcon />
        </Blockquote.Icon>
        <Blockquote.Content>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Blockquote.Content>
        <Blockquote.Caption>
          <Blockquote.Cite>Wikipedia</Blockquote.Cite>
        </Blockquote.Caption>
      </Blockquote.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Blockquote.Root.displayName).toBe("BlockquoteRoot")
    expect(Blockquote.Cite.displayName).toBe("BlockquoteCite")
    expect(Blockquote.Icon.displayName).toBe("BlockquoteIcon")
    expect(Blockquote.Caption.displayName).toBe("BlockquoteCaption")
    expect(Blockquote.Content.displayName).toBe("BlockquoteContent")
  })

  test("sets `className` correctly", () => {
    render(
      <Blockquote.Root
        data-testid="blockquote"
        icon={<Blockquote.Icon data-testid="icon" />}
      >
        <Blockquote.Content>Blockquote content</Blockquote.Content>
        <Blockquote.Caption data-testid="caption">
          <Blockquote.Cite>Blockquote cite</Blockquote.Cite>
        </Blockquote.Caption>
      </Blockquote.Root>,
    )

    expect(screen.getByTestId("blockquote")).toHaveClass("ui-blockquote__root")
    expect(screen.getByTestId("icon")).toHaveClass("ui-blockquote__icon")
    expect(screen.getByText("Blockquote content")).toHaveClass(
      "ui-blockquote__content",
    )
    expect(screen.getByTestId("caption")).toHaveClass("ui-blockquote__caption")
    expect(screen.getByText("Blockquote cite")).toHaveClass(
      "ui-blockquote__cite",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
      <Blockquote.Root
        data-testid="root"
        icon={<Blockquote.Icon data-testid="icon" />}
      >
        <Blockquote.Content>Blockquote content</Blockquote.Content>
        <Blockquote.Caption data-testid="caption">
          <Blockquote.Cite>Blockquote cite</Blockquote.Cite>
        </Blockquote.Caption>
      </Blockquote.Root>,
    )

    expect(screen.getByTestId("root").tagName).toBe("FIGURE")
    expect(screen.getByTestId("icon").tagName).toBe("svg")
    expect(screen.getByTestId("caption").tagName).toBe("FIGCAPTION")
    expect(screen.getByText("Blockquote content").tagName).toBe("BLOCKQUOTE")
    expect(screen.getByText("Blockquote cite").tagName).toBe("CITE")
  })
})
