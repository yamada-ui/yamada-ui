import { a11y, render, screen } from "#test"
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

  test("sets `className` correctly", () => {
    render(
      <Indicator data-testid="indicator" label="New">
        <div />
      </Indicator>,
    )
    const el = screen.getByText("New")
    expect(el).toHaveClass("ui-indicator__label")
    expect(el.parentElement).toHaveClass("ui-indicator__float")
    expect(el.parentElement?.parentElement).toHaveClass("ui-indicator__root")
  })

  test("should render", () => {
    render(
      <Indicator label="New">
        <div />
      </Indicator>,
    )
    expect(screen.getByText("New")).toBeInTheDocument()
  })

  test("should render (with overflowCount)", () => {
    render(
      <Indicator
        label={100}
        overflowCount={99}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    expect(screen.getByTestId("indicator")).toHaveTextContent("+")
  })

  test("should not render zero when showZero is false", () => {
    render(
      <Indicator
        label={0}
        showZero={false}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    expect(screen.queryByTestId("indicator")).not.toBeInTheDocument()
  })

  test("should not render", () => {
    render(
      <Indicator
        disabled
        label="New"
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    expect(screen.queryByTestId("indicator")).not.toBeInTheDocument()
  })

  test("should render zero when showZero is true", () => {
    render(
      <Indicator label={0} showZero labelProps={{ "data-testid": "indicator" }}>
        <div />
      </Indicator>,
    )
    expect(screen.getByTestId("indicator")).toHaveTextContent("0")
  })

  test("should render numeric label without overflow", () => {
    render(
      <Indicator
        label={50}
        overflowCount={99}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    expect(screen.getByTestId("indicator")).toHaveTextContent("50")
    expect(screen.queryByText("+")).not.toBeInTheDocument()
  })

  test("should set data-numeric attribute for numeric labels", () => {
    render(
      <Indicator label={10} labelProps={{ "data-testid": "indicator" }}>
        <div />
      </Indicator>,
    )
    expect(screen.getByTestId("indicator")).toHaveAttribute("data-numeric")
  })

  test("should not set data-numeric attribute for non-numeric labels", () => {
    render(
      <Indicator label="New" labelProps={{ "data-testid": "indicator" }}>
        <div />
      </Indicator>,
    )
    expect(screen.getByTestId("indicator")).not.toHaveAttribute("data-numeric")
  })

  test("should apply ping prop with boolean value", () => {
    render(
      <Indicator
        data-testid="indicator-root"
        label="New"
        ping
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    const label = screen.getByTestId("indicator")

    expect(label).toBeInTheDocument()
    // Verify the label element exists (ping affects pseudo-element styling)
    expect(label.parentElement).toHaveClass("ui-indicator__float")
  })

  test("should apply ping prop with object configuration", () => {
    render(
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
    const root = screen.getByTestId("indicator-root")
    const styles = getComputedStyle(root)

    expect(styles.getPropertyValue("--animation-scale")).toBe("1.5")
    expect(styles.getPropertyValue("--iteration-count")).toBe("infinite")
    expect(styles.getPropertyValue("--ping-color")).toBeTruthy()
    expect(styles.getPropertyValue("--duration")).toBeTruthy()
    expect(styles.getPropertyValue("--timing-function")).toBeTruthy()
  })

  test("should apply offset prop", () => {
    render(
      <Indicator
        label="New"
        offset={10}
        floatProps={{ "data-testid": "float-element" }}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    const floatElement = screen.getByTestId("float-element")
    const styles = getComputedStyle(floatElement)

    expect(styles.getPropertyValue("--offset-block")).toBeTruthy()
    expect(styles.getPropertyValue("--offset-inline")).toBeTruthy()
  })

  test("should apply placement prop", () => {
    render(
      <Indicator
        label="New"
        placement="start-start"
        floatProps={{ "data-testid": "float-element" }}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    const floatElement = screen.getByTestId("float-element")
    const label = screen.getByTestId("indicator")

    // Verify Float element renders and contains the label
    expect(floatElement).toBeInTheDocument()
    expect(floatElement).toContainElement(label)
  })

  test("should apply floatProps", () => {
    render(
      <Indicator
        label="New"
        floatProps={{ "data-testid": "float-element" }}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    expect(screen.getByTestId("float-element")).toBeInTheDocument()
  })

  test("should apply custom className to labelProps", () => {
    render(
      <Indicator
        label="New"
        labelProps={{ className: "custom-label", "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    const label = screen.getByTestId("indicator")
    expect(label).toHaveClass("custom-label")
  })
})
