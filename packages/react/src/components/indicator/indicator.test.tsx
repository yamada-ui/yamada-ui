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

  test("sets `displayName`", () => {
    expect(Indicator.displayName).toBe("IndicatorRoot")
  })

  test("sets `className` correctly", async () => {
    await render(
      <Indicator data-testid="indicator" label="New">
        <div />
      </Indicator>,
    )
    const el = page.getByText("New").element()
    expect(el).toHaveClass("ui-indicator__label")
    expect(el.parentElement).toHaveClass("ui-indicator__float")
    expect(el.parentElement?.parentElement).toHaveClass("ui-indicator__root")
  })

  test("should render", async () => {
    await render(
      <Indicator label="New">
        <div />
      </Indicator>,
    )
    await expect.element(page.getByText("New")).toBeInTheDocument()
  })

  test("should render (with overflowCount)", async () => {
    await render(
      <Indicator
        label={100}
        overflowCount={99}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    await expect.element(page.getByTestId("indicator")).toHaveTextContent("+")
  })

  test("should not render zero when showZero is false", async () => {
    const { container } = await render(
      <Indicator
        label={0}
        showZero={false}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    expect(container.querySelector('[data-testid="indicator"]')).toBeNull()
  })

  test("should not render", async () => {
    const { container } = await render(
      <Indicator
        disabled
        label="New"
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    expect(container.querySelector('[data-testid="indicator"]')).toBeNull()
  })

  test("should render zero when showZero is true", async () => {
    await render(
      <Indicator label={0} showZero labelProps={{ "data-testid": "indicator" }}>
        <div />
      </Indicator>,
    )
    await expect.element(page.getByTestId("indicator")).toHaveTextContent("0")
  })

  test("should render numeric label without overflow", async () => {
    const { container } = await render(
      <Indicator
        label={50}
        overflowCount={99}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    await expect.element(page.getByTestId("indicator")).toHaveTextContent("50")
    expect(container.textContent).not.toContain("+")
  })

  test("should set data-numeric attribute for numeric labels", async () => {
    await render(
      <Indicator label={10} labelProps={{ "data-testid": "indicator" }}>
        <div />
      </Indicator>,
    )
    await expect
      .element(page.getByTestId("indicator"))
      .toHaveAttribute("data-numeric")
  })

  test("should not set data-numeric attribute for non-numeric labels", async () => {
    await render(
      <Indicator label="New" labelProps={{ "data-testid": "indicator" }}>
        <div />
      </Indicator>,
    )
    await expect
      .element(page.getByTestId("indicator"))
      .not.toHaveAttribute("data-numeric")
  })

  test("should apply ping prop with boolean value", async () => {
    await render(
      <Indicator
        data-testid="indicator-root"
        label="New"
        ping
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    const label = page.getByTestId("indicator").element()

    expect(label).toBeInTheDocument()
    // Verify the label element exists (ping affects pseudo-element styling)
    expect(label.parentElement).toHaveClass("ui-indicator__float")
  })

  test("should apply ping prop with object configuration", async () => {
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

  test("should apply offset prop", async () => {
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

  test("should apply placement prop", async () => {
    await render(
      <Indicator
        label="New"
        placement="start-start"
        floatProps={{ "data-testid": "float-element" }}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    const floatElement = page.getByTestId("float-element").element()
    const label = page.getByTestId("indicator").element()

    // Verify Float element renders and contains the label
    expect(floatElement).toBeInTheDocument()
    expect(floatElement).toContainElement(label)
  })

  test("should apply floatProps", async () => {
    await render(
      <Indicator
        label="New"
        floatProps={{ "data-testid": "float-element" }}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    await expect.element(page.getByTestId("float-element")).toBeInTheDocument()
  })

  test("should apply custom className to labelProps", async () => {
    await render(
      <Indicator
        label="New"
        labelProps={{ className: "custom-label", "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    const label = page.getByTestId("indicator").element()
    expect(label).toHaveClass("custom-label")
  })
})
