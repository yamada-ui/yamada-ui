import { a11y, page, render } from "#test/browser"
import { Heading } from "./heading"

describe("<Heading />", () => {
  test("renders component correctly", async () => {
    await a11y(<Heading>Heading</Heading>)
  })

  test("sets `displayName` correctly", () => {
    expect(Heading.displayName).toBe("Heading")
  })

  test("sets `className` correctly", async () => {
    await render(<Heading>Heading</Heading>)

    await expect.element(page.getByText("Heading")).toHaveClass("ui-heading")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Heading>Heading</Heading>)

    expect(page.getByText("Heading").element().tagName).toBe("H1")
  })
})
