import type { FC } from "react"
import { page, render } from "#test/browser"
import { useFieldSizing } from "./"

const Component: FC<{ value?: string }> = ({ value }) => {
  const { ref, text } = useFieldSizing<HTMLInputElement>({ value })

  return (
    <div>
      <input ref={ref} data-testid="input" />
      {text}
    </div>
  )
}

describe("useFieldSizing", () => {
  test("renders hidden text element with value", async () => {
    const { container } = await render(<Component value="hello" />)
    const span = container.querySelector("span[aria-hidden]")

    expect(span).toBeInstanceOf(HTMLSpanElement)
    expect(span!.textContent).toBe("hello")
    expect(span!.style.opacity).toBe("0")
    expect(span!.style.overflow).toBe("hidden")
    expect(span!.style.position).toBe("absolute")
    expect(span!.style.whiteSpace).toBe("nowrap")
    expect(span!.style.zIndex).toBe("-1")
  })

  test("uses empty string as default value", async () => {
    const { container } = await render(<Component />)
    const span = container.querySelector("span[aria-hidden]")

    expect(span).toBeInstanceOf(HTMLSpanElement)
    expect(span!.textContent).toBe("")
  })

  test("sets input width from text bounding rect", async () => {
    await render(<Component value="hello" />)

    const input = page.getByTestId("input")
    await expect.poll(() => input.element().style.width).not.toBe("")
  })

  test("updates width when value changes", async () => {
    const { rerender } = await render(<Component value="hi" />)

    const input = page.getByTestId("input")
    await expect.poll(() => input.element().style.width).not.toBe("")

    const initialWidth = input.element().style.width

    await rerender(<Component value="hello world, this is a longer text" />)

    await expect.poll(() => input.element().style.width).not.toBe(initialWidth)
  })

  test("returns ref and text", async () => {
    const { container } = await render(<Component value="test" />)

    await expect.element(page.getByTestId("input")).toBeInTheDocument()
    expect(container.querySelector("span[aria-hidden]")).toBeInstanceOf(
      HTMLSpanElement,
    )
  })
})
