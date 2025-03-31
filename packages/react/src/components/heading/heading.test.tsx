import { a11y, screen } from "../../../test"
import { render } from "../../../test"
import { Heading } from "./heading"

describe("<Heading />", () => {
  test("renders heading correctly", async () => {
    await a11y(<Heading>Heading</Heading>)
  })

  test("sets `displayName` correctly", () => {
    expect(Heading.displayName).toBe("Heading")
  })

  test("sets `className` correctly", () => {
    render(<Heading>Heading</Heading>)
    expect(screen.getByText("Heading")).toHaveClass("ui-heading")
  })

  test("renders HTML tag correctly", () => {
    render(<Heading>Heading</Heading>)
    expect(screen.getByText("Heading").tagName).toBe("H1")
  })
})
