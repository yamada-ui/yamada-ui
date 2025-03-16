import { render, renderHook } from "@yamada-ui/test"
import { noop } from "@yamada-ui/utils"
import { Highlight, useHighlight } from "../src"

describe("<Highlight />", () => {
  test.each([[], ""])(
    "useHighlight returns no matches if queries is empty but returns original value",
    (query) => {
      const text = "this is an ordinary text which should not have any matches"

      const { result } = renderHook(() =>
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

  test("throws error if children is not string", () => {
    const renderResult = () =>
      render(<Highlight query="Highlight">{1 as any}</Highlight>)

    const consoleSpy = vi.spyOn(console, "error")
    consoleSpy.mockImplementation(noop)
    expect(renderResult).toThrow(
      "The children prop of Highlight must be a string",
    )
    consoleSpy.mockRestore()
  })

  test("isFragment prop works correctly", () => {
    const { container } = render(
      <Highlight fragment query="">
        Highlight
      </Highlight>,
    )
    expect(container.firstChild?.nodeName).toBe("#text")
  })

  test("markProps prop works correctly", () => {
    const { getByText } = render(
      <Highlight query="Highlight" markProps={{ borderRadius: "12px" }}>
        Highlight
      </Highlight>,
    )
    expect(getByText("Highlight")).toHaveStyle("border-radius: 12px")
  })

  test("useHighlight matches correctly", () => {
    const query = ["", "text"]

    const { result } = renderHook(() =>
      useHighlight({
        query: query,
        text: "this is an ordinary text which should have one match ",
      }),
    )

    expect(result.current).toMatchInlineSnapshot(`
      [
        {
          "match": false,
          "text": "this is an ordinary ",
        },
        {
          "match": true,
          "text": "text",
        },
        {
          "match": false,
          "text": " which should have one match ",
        },
      ]
    `)
  })
})
