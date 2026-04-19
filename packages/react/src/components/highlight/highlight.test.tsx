import { a11y, page, render, renderHook } from "#test/browser"
import { Highlight, useHighlight } from "."

describe("<Highlight />", () => {
  test("renders component correctly", async () => {
    await a11y(<Highlight query="highlight">Highlight</Highlight>)
  })

  test("sets `displayName` correctly", () => {
    expect(Highlight.name).toBe("Highlight")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <Highlight data-testid="highlight" query="highlight">
        Highlight
      </Highlight>,
    )
    expect(page.getByTestId("highlight").element().tagName).toBe("P")
  })

  test.each([[], ""])(
    "useHighlight returns no matches if queries is empty but returns original value",
    async (query) => {
      const text = "this is an ordinary text which should not have any matches"

      const { result } = await renderHook(() =>
        useHighlight({
          query,
          text,
        }),
      )

      expect(result.current).toHaveLength(1)
      expect(result.current[0]?.match).toBeFalsy()
      expect(result.current[0]?.text).toBe(text)
    },
  )

  test("fragment prop works correctly", async () => {
    const { container } = await render(
      <Highlight fragment query="">
        Highlight
      </Highlight>,
    )
    expect(container.firstChild?.nodeName).toBe("#text")
  })

  test("fragment prop renders Mark for matched text", async () => {
    const { container } = await render(
      <Highlight fragment query="High">
        Highlight
      </Highlight>,
    )

    const mark = page.getByText("High")
    expect(mark.element().tagName).toBe("MARK")
    expect(container.querySelector("p")).toBeNull()
  })

  test("renders non-matching chunks as plain text alongside matches", async () => {
    await render(
      <Highlight data-testid="highlight" query="world">
        Hello world
      </Highlight>,
    )

    const container = page.getByTestId("highlight")
    const mark = page.getByText("world")
    expect(mark.element().tagName).toBe("MARK")
    expect(container.element().tagName).toBe("P")
    await expect.element(container).toHaveTextContent("Hello world")
  })

  test("markProps prop works correctly", async () => {
    await render(
      <Highlight query="Highlight" markProps={{ borderRadius: "12px" }}>
        Highlight
      </Highlight>,
    )
    const styles = getComputedStyle(page.getByText("Highlight").element())
    expect(styles.borderRadius).toBe("12px")
  })

  test("useHighlight matches correctly", async () => {
    const query = ["", "text"]

    const { result } = await renderHook(() =>
      useHighlight({
        query: query,
        text: "this is an ordinary text which should have one match ",
      }),
    )

    expect(result.current).toStrictEqual([
      { match: false, text: "this is an ordinary " },
      { match: true, text: "text" },
      { match: false, text: " which should have one match " },
    ])
  })
})
