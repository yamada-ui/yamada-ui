import { a11y, render, screen } from "../../../test"
import { Box } from "../box"
import { Float } from "./"

describe("<Float />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <Box position="relative">
        <Float>New</Float>
      </Box>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Float.displayName).toBe("Float")
  })

  test("sets `className` correctly", () => {
    render(<Float>Float</Float>)
    expect(screen.getByText("Float")).toHaveClass("ui-float")
  })

  test("renders HTML tag correctly", () => {
    render(<Float>Float</Float>)
    expect(screen.getByText("Float").tagName).toBe("DIV")
  })
})
