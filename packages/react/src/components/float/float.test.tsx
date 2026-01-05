import { a11y, render, screen } from "#test"
import { Box } from "../box"
import { Float } from "./"

describe("<Float />", () => {
  test("renders component correctly", async () => {
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

  test("applies to both block and inline given a single offset", () => {
    render(<Float offset="2">Float</Float>)
    const floatElement = screen.getByText("Float")
    const styles = getComputedStyle(floatElement)

    expect(styles.getPropertyValue("--offset-block")).toBeTruthy()
    expect(styles.getPropertyValue("--offset-inline")).toBeTruthy()
  })

  test("applies separate block and inline offsets given an array", () => {
    render(<Float offset={["2", "4"]}>Float</Float>)
    const floatElement = screen.getByText("Float")
    const styles = getComputedStyle(floatElement)

    expect(styles.getPropertyValue("--offset-block")).toBeTruthy()
    expect(styles.getPropertyValue("--offset-inline")).toBeTruthy()
  })

  test("applies undefined offset correctly", () => {
    render(<Float offset="">Float</Float>)
    const floatElement = screen.getByText("Float")
    const styles = getComputedStyle(floatElement)

    expect(styles.getPropertyValue("--offset-block")).toBeTruthy()
    expect(styles.getPropertyValue("--offset-inline")).toBeTruthy()
  })
})
