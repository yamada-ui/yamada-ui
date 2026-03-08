import { render, screen } from "#test"
import { ClientOnly } from "."

describe("<ClientOnly />", () => {
  test("renders children after mount", () => {
    render(<ClientOnly>Hello</ClientOnly>)

    expect(screen.getByText("Hello")).toBeInTheDocument()
  })

  test("renders fallback when provided", () => {
    render(<ClientOnly fallback={<span>Loading...</span>}>Hello</ClientOnly>)

    expect(screen.getByText("Hello")).toBeInTheDocument()
  })

  test("supports function children", () => {
    render(<ClientOnly>{() => "Hello from function"}</ClientOnly>)

    expect(screen.getByText("Hello from function")).toBeInTheDocument()
  })
})
