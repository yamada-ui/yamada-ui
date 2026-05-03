import { a11y, page, render } from "#test/browser"
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

  test("sets `className` correctly", async () => {
    await render(<Float>Float</Float>)

    await expect.element(page.getByText("Float")).toHaveClass("ui-float")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Float>Float</Float>)

    expect(page.getByText("Float").element().tagName).toBe("DIV")
  })

  test("applies to both block and inline given a single offset", async () => {
    await render(<Float offset="2">Float</Float>)

    const floatElement = page.getByText("Float").element()
    const styles = getComputedStyle(floatElement)

    expect(styles.getPropertyValue("--offset-block")).toBeTruthy()
    expect(styles.getPropertyValue("--offset-inline")).toBeTruthy()
  })

  test("applies separate block and inline offsets given an array", async () => {
    await render(<Float offset={["2", "4"]}>Float</Float>)

    const floatElement = page.getByText("Float").element()
    const styles = getComputedStyle(floatElement)

    expect(styles.getPropertyValue("--offset-block")).toBeTruthy()
    expect(styles.getPropertyValue("--offset-inline")).toBeTruthy()
  })

  test("applies empty offset correctly", async () => {
    await render(<Float offset="">Float</Float>)

    const floatElement = page.getByText("Float").element()
    const styles = getComputedStyle(floatElement)

    expect(styles.getPropertyValue("--offset-block")).toBe("")
    expect(styles.getPropertyValue("--offset-inline")).toBe("")
  })
})
