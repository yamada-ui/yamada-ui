import { a11y, page, render } from "#test/browser"
import { QuoteIcon } from "../icon"
import { Blockquote } from "./"

describe("<Blockquote />", () => {
  test("renders component correctly", async () => {
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

  test("sets `className` correctly", async () => {
    await render(
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

    await expect
      .element(page.getByTestId("blockquote"))
      .toHaveClass("ui-blockquote__root")
    await expect
      .element(page.getByTestId("icon"))
      .toHaveClass("ui-blockquote__icon")
    await expect
      .element(page.getByText("Blockquote content"))
      .toHaveClass("ui-blockquote__content")
    await expect
      .element(page.getByTestId("caption"))
      .toHaveClass("ui-blockquote__caption")
    await expect
      .element(page.getByText("Blockquote cite"))
      .toHaveClass("ui-blockquote__cite")
  })

  test("renders cite prop as caption when no custom BlockquoteCaption is provided", async () => {
    await render(
      <Blockquote.Root
        data-testid="blockquote"
        cite="Wikipedia"
        citeUrl="https://example.com"
        captionProps={{ "data-testid": "caption" } as any}
        citeProps={{ "data-testid": "cite" } as any}
      >
        Blockquote content
      </Blockquote.Root>,
    )

    await expect
      .element(page.getByTestId("caption"))
      .toHaveClass("ui-blockquote__caption")
    await expect
      .element(page.getByTestId("cite"))
      .toHaveClass("ui-blockquote__cite")
    await expect.element(page.getByText("Wikipedia")).toBeInTheDocument()
  })

  test("renders HTML tag correctly", async () => {
    await render(
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

    expect(page.getByTestId("root").element().tagName).toBe("FIGURE")
    expect(page.getByTestId("icon").element().tagName).toBe("svg")
    expect(page.getByTestId("caption").element().tagName).toBe("FIGCAPTION")
    expect(page.getByText("Blockquote content").element().tagName).toBe(
      "BLOCKQUOTE",
    )
    expect(page.getByText("Blockquote cite").element().tagName).toBe("CITE")
  })
})
