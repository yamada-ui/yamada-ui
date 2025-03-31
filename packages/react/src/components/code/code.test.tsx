import { a11y, render, screen } from "../../../test"
import { Code } from "./code"

describe("<Code />", () => {
  test("renders code correctly", async () => {
    await a11y(<Code>console.log("Hello, Yamada!")</Code>)
  })

  test("sets `displayName` and `__styled__` correctly", () => {
    expect(Code.displayName).toBe("Code")
    expect(Code.__styled__).toBe("Code")
  })

  test("sets `className` correctly", () => {
    render(<Code>console.log("Hello, Yamada!")</Code>)
    expect(screen.getByText('console.log("Hello, Yamada!")')).toHaveClass(
      "ui-code",
    )
  })

  test("renders HTML tag correctly", () => {
    render(<Code>console.log("Hello, Yamada!")</Code>)
    expect(screen.getByText('console.log("Hello, Yamada!")').tagName).toBe(
      "CODE",
    )
  })
})
