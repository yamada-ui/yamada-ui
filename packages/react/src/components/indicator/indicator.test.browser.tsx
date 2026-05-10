import { a11y, page, render } from "#test/browser"
import { Indicator } from "."

describe("<Indicator />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Indicator label="New">
        <div />
      </Indicator>,
    )
  })

  test("applies ping CSS variables when ping is an object", async () => {
    await render(
      <Indicator
        data-testid="indicator-root"
        label="New"
        ping={{
          color: "red.500",
          duration: "slower",
          iterationCount: "infinite",
          scale: "1.5",
          timingFunction: "ease-in-out",
        }}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    const root = page.getByTestId("indicator-root").element()
    const styles = getComputedStyle(root)

    expect(styles.getPropertyValue("--animation-scale")).toBe("1.5")
    expect(styles.getPropertyValue("--iteration-count")).toBe("infinite")
    expect(styles.getPropertyValue("--ping-color")).toBeTruthy()
    expect(styles.getPropertyValue("--duration")).toBeTruthy()
    expect(styles.getPropertyValue("--timing-function")).toBeTruthy()
  })

  test("applies offset CSS variables", async () => {
    await render(
      <Indicator
        label="New"
        offset={10}
        floatProps={{ "data-testid": "float-element" }}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    const floatElement = page.getByTestId("float-element").element()
    const styles = getComputedStyle(floatElement)

    expect(styles.getPropertyValue("--offset-block")).toBeTruthy()
    expect(styles.getPropertyValue("--offset-inline")).toBeTruthy()
  })
})
