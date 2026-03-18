import type { FC } from "react"
import { render } from "#test"
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

  test("renders hidden text element with value", () => {
    const { container } = render(<Component value="hello" />)
    const span = container.querySelector("span[aria-hidden]")

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

  test("uses empty string as default value", () => {
    const { container } = render(<Component />)
    const span = container.querySelector("span[aria-hidden]")

    expect(span).toBeInTheDocument()
    expect(span).toHaveTextContent("")
  })

  test("sets input width from text bounding rect", () => {
    const { getByTestId } = render(<Component value="hello" />)
    const input = getByTestId("input")

    expect(input.style.width).toBe("100px")
  })

  test("updates width when value changes", () => {
    const { getByTestId, rerender } = render(<Component value="hi" />)

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

    rerender(<Component value="hello world" />)

    const input = getByTestId("input")
    expect(input.style.width).toBe("200px")
  })

  test("returns ref and text", () => {
    const { container, getByTestId } = render(<Component value="test" />)

    expect(getByTestId("input")).toBeInTheDocument()
    expect(container.querySelector("span[aria-hidden]")).toBeInTheDocument()
  })
})
