import { renderToStaticMarkup } from "react-dom/server"
import { render, screen } from "#test"
import { ClientOnly } from "."

describe("<ClientOnly />", () => {
  test("renders children after mount", () => {
    render(<ClientOnly>Hello</ClientOnly>)

    expect(screen.getByText("Hello")).toBeInTheDocument()
  })

  test("renders fallback when provided", () => {
    const html = renderToStaticMarkup(
      <ClientOnly fallback={<span>Loading...</span>}>Hello</ClientOnly>,
    )

    expect(html).toContain("<span>Loading...</span>")
    expect(html).not.toContain("Hello")
  })

  test("supports function children", () => {
    render(<ClientOnly>{() => "Hello from function"}</ClientOnly>)

    expect(screen.getByText("Hello from function")).toBeInTheDocument()
  })
})
