import { a11y, page, render } from "#test/browser"
import { Code } from "./code"

describe("<Code />", () => {
  test("renders component correctly", async () => {
    await a11y(<Code>console.log("Hello, Yamada!")</Code>)
  })

  test("sets `displayName` correctly", () => {
    expect(Code.displayName).toBe("Code")
  })

  test("sets `className` correctly", async () => {
    await render(<Code>console.log("Hello, Yamada!")</Code>)

    await expect
      .element(page.getByText('console.log("Hello, Yamada!")'))
      .toHaveClass("ui-code")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Code>console.log("Hello, Yamada!")</Code>)

    expect(
      page.getByText('console.log("Hello, Yamada!")').element().tagName,
    ).toBe("CODE")
  })
})
