import type { FC } from "react"
import { a11y, render, screen } from "#test"
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

  test("renders static hidden text contract", () => {
    render(<Component value="hello" />)

    const input = screen.getByLabelText("field sizing input")
    const span = screen.getByText("hello")

    expect(input).toBeInTheDocument()
    expect(span).toHaveAttribute("aria-hidden")
    expect(span).toHaveStyle({
      opacity: "0",
      overflow: "hidden",
      position: "absolute",
      whiteSpace: "nowrap",
      zIndex: "-1",
    })
  })
})
