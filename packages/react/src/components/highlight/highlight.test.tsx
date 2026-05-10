import { a11y, render, renderHook, screen } from "#test"
import { Highlight, useHighlight } from "./"

describe("<Highlight />", () => {
  test("renders component correctly", async () => {
    await a11y(<Highlight query="highlight">Highlight</Highlight>)
  })

  test("sets name correctly", () => {
    expect(Highlight.name).toBe("Highlight")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Highlight data-testid="highlight" query="highlight">
        Highlight
      </Highlight>,
    )
    expect(screen.getByTestId("highlight").tagName).toBe("P")
  })

  test("fragment prop works correctly", () => {
    const { container } = render(
      <Highlight fragment query="">
        Highlight
      </Highlight>,
    )
    expect(container.firstChild?.nodeName).toBe("#text")
  })

  test("fragment prop renders Mark for matched text", () => {
    const { container } = render(
      <Highlight fragment query="High">
        Highlight
      </Highlight>,
    )
    expect(screen.getByText("High").tagName).toBe("MARK")
    expect(container.querySelector("p")).toBeNull()
  })

  test("renders non-matching chunks as plain text alongside matches", () => {
    render(
      <Highlight data-testid="highlight" query="world">
        Hello world
      </Highlight>,
    )
    const container = screen.getByTestId("highlight")
    expect(screen.getByText("world").tagName).toBe("MARK")
    expect(container.tagName).toBe("P")
    expect(container).toHaveTextContent("Hello world")
  })

  test("markProps prop works correctly", () => {
    render(
      <Highlight query="Highlight" markProps={{ borderRadius: "12px" }}>
        Highlight
      </Highlight>,
    )
    expect(screen.getByText("Highlight")).toHaveStyle({
      borderRadius: "12px",
    })
  })
})

describe("useHighlight", () => {
  test.each([[], ""])(
    "returns no matches when query is empty but returns the original text",
    (query) => {
      const text = "this is an ordinary text which should not have any matches"
      const { result } = renderHook(() => useHighlight({ query, text }))

      expect(result.current).toHaveLength(1)
      expect(result.current[0]?.match).toBeFalsy()
      expect(result.current[0]?.text).toBe(text)
    },
  )

  test("matches each query and returns the chunks correctly", () => {
    const { result } = renderHook(() =>
      useHighlight({
        query: ["", "text"],
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
