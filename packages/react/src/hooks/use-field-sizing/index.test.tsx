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
  beforeEach(() => {
    vi.spyOn(
      HTMLSpanElement.prototype,
      "getBoundingClientRect",
    ).mockReturnValue({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      toJSON: () => ({}),
      top: 0,
      width: 100,
      x: 0,
      y: 0,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("renders hidden text element with value", async () => {
    await render(<Component value="hello" />)
    const span = document.querySelector("span[aria-hidden]")

    expect(span).toBeInTheDocument()
    expect(span).toHaveTextContent("hello")
    expect(span).toHaveStyle({
      opacity: "0",
      overflow: "hidden",
      position: "absolute",
      whiteSpace: "nowrap",
      zIndex: "-1",
    })
  })

  test("uses empty string as default value", async () => {
    await render(<Component />)
    const span = document.querySelector("span[aria-hidden]")

    expect(span).toBeInTheDocument()
    expect(span).toHaveTextContent("")
  })

  test("sets input width from text bounding rect", async () => {
    await render(<Component value="hello" />)
    const inputEl = document.querySelector<HTMLInputElement>(
      "[data-testid='input']",
    )

    expect(inputEl?.style.width).toBe("100px")
  })

  test("updates width when value changes", async () => {
    const { rerender } = await render(<Component value="hi" />)

    vi.spyOn(
      HTMLSpanElement.prototype,
      "getBoundingClientRect",
    ).mockReturnValue({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      toJSON: () => ({}),
      top: 0,
      width: 200,
      x: 0,
      y: 0,
    })

    await rerender(<Component value="hello world" />)

    const inputEl = document.querySelector<HTMLInputElement>(
      "[data-testid='input']",
    )

    expect(inputEl?.style.width).toBe("200px")
  })

  test("returns ref and text", async () => {
    await render(<Component value="test" />)

    await expect.element(page.getByTestId("input")).toBeInTheDocument()
    expect(document.querySelector("span[aria-hidden]")).toBeInTheDocument()
  })
})
