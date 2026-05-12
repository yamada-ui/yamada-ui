import type { FC } from "react"
import { a11y, page, render } from "#test/browser"
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
  test("passes a11y checks", async () => {
    await a11y(<Component value="hello" />)
  })

  test("renders hidden text element with value", async () => {
    await render(<Component value="hello" />)

    const span = page.getByText("hello")

    await expect.element(span).toHaveAttribute("aria-hidden")
    await expect.element(span).toHaveStyle({
      opacity: "0",
      overflow: "hidden",
      position: "absolute",
      whiteSpace: "nowrap",
      zIndex: "-1",
    })
  })

  test("uses empty string as default value", async () => {
    await render(<Component />)

    const input = page.getByTestId("input")

    await expect.element(input).toHaveStyle({ width: "0px" })
  })

  test("sets input width from text bounding rect", async () => {
    await render(<Component value="hello" />)

    const inputElement = page.getByTestId("input").element()
    const width = Number.parseFloat(inputElement.style.width)

    expect(width).toBeGreaterThan(0)
  })

  test("updates width when value changes", async () => {
    const { rerender } = await render(<Component value="hi" />)
    const input = page.getByTestId("input")
    const beforeWidth = Number.parseFloat(input.element().style.width)

    rerender(<Component value="hello world" />)

    await vi.waitFor(() => {
      const afterWidth = Number.parseFloat(input.element().style.width)

      expect(afterWidth).toBeGreaterThan(beforeWidth)
    })
  })
})
