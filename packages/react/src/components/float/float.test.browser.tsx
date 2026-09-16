import { a11y, page, render } from "#test/browser"
import { Box } from "../box"
import { Float } from "./"

describe("<Float />", () => {
  test("passes a11y checks", async () => {
    await a11y(
      <Box position="relative">
        <Float>Float</Float>
      </Box>,
    )
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

  test("does not intercept pointer events", async () => {
    await render(<Float>Float</Float>)

    const floatElement = page.getByText("Float").element()
    const styles = getComputedStyle(floatElement)

    expect(styles.pointerEvents).toBe("none")
  })
})
