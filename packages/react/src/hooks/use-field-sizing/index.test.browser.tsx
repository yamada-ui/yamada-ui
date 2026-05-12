import type { FC } from "react"
import { page, render } from "#test/browser"
import { useFieldSizing } from "./"

const Component: FC<{ value?: string }> = ({ value }) => {
  const { ref, text } = useFieldSizing<HTMLInputElement>({ value })

  return (
    <div data-testid="field-sizing-root">
      <input ref={ref} aria-label="field sizing input" data-testid="input" />
      {text}
    </div>
  )
}

describe("useFieldSizing", () => {
  test("uses empty string as default value", async () => {
    await render(<Component />)

    const input = page.getByTestId("input")

    await expect.element(input).toHaveStyle({ width: "0px" })
  })

  test("sets input width from text bounding rect", async () => {
    await render(<Component value="hello" />)

    const inputWidth = Number.parseFloat(
      page.getByTestId("input").element().style.width,
    )
    const spanWidth = page
      .getByText("hello")
      .element()
      .getBoundingClientRect().width

    expect(inputWidth).toBeCloseTo(spanWidth, 3)
  })

  test("updates width when value changes", async () => {
    const { rerender } = await render(<Component value="hi" />)
    const input = page.getByTestId("input")
    const beforeSpanWidth = page
      .getByText("hi")
      .element()
      .getBoundingClientRect().width

    rerender(<Component value="hello world" />)

    await vi.waitFor(() => {
      const afterWidth = Number.parseFloat(input.element().style.width)
      const afterSpanWidth = page
        .getByText("hello world")
        .element()
        .getBoundingClientRect().width

      expect(afterWidth).toBeCloseTo(afterSpanWidth, 3)
      expect(afterWidth).toBeGreaterThan(beforeSpanWidth)
    })
  })
})
