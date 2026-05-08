import { a11y, page, render } from "#test/browser"
import { Center } from "./center"

describe("<Center />", () => {
  test("renders component correctly", async () => {
    await a11y(<Center>Center</Center>)
  })

  test("sets `displayName` correctly", () => {
    expect(Center.displayName).toBe("Center")
  })

  test("sets `className` correctly", async () => {
    await render(<Center>Center</Center>)

    await expect.element(page.getByText("Center")).toHaveClass("ui-center")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Center>Center</Center>)

    expect(page.getByText("Center").element().tagName).toBe("DIV")
  })
})
