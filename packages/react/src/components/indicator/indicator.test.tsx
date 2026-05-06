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

  test("sets displayName", () => {
    expect(Indicator.displayName).toBe("IndicatorRoot")
  })

  test("renders label and applies slot classNames", () => {
    render(
      <Indicator label="New">
        <div />
      </Indicator>,
    )
    const label = screen.getByText("New")
    expect(label).toHaveClass("ui-indicator__label")
    expect(label.parentElement).toHaveClass("ui-indicator__float")
    expect(label.parentElement?.parentElement).toHaveClass("ui-indicator__root")
  })

  test("renders numeric label with overflow indicator", () => {
    render(
      <Indicator
        label={100}
        overflowCount={99}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    expect(screen.getByTestId("indicator")).toHaveTextContent("99+")
  })

  test("renders numeric label without overflow", () => {
    render(
      <Indicator
        label={50}
        overflowCount={99}
        labelProps={{ "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    const label = screen.getByTestId("indicator")
    expect(label).toHaveTextContent("50")
    expect(label.textContent).not.toContain("+")
  })

  test("renders zero when showZero is true", () => {
    render(
      <Indicator label={0} showZero labelProps={{ "data-testid": "indicator" }}>
        <div />
      </Indicator>,
    )
    expect(screen.getByTestId("indicator")).toHaveTextContent("0")
  })

  test("does not render label when showZero is false and label is 0", () => {
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

  test("does not render label when disabled", () => {
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

  test("sets data-numeric attribute for numeric labels", () => {
    render(
      <Indicator label={10} labelProps={{ "data-testid": "indicator" }}>
        <div />
      </Indicator>,
    )
    expect(screen.getByTestId("indicator")).toHaveAttribute("data-numeric")
  })

  test("does not set data-numeric attribute for non-numeric labels", () => {
    render(
      <Indicator label="New" labelProps={{ "data-testid": "indicator" }}>
        <div />
      </Indicator>,
    )
    expect(screen.getByTestId("indicator")).not.toHaveAttribute("data-numeric")
  })

  test("renders ping label inside the float wrapper", () => {
    render(
      <Indicator label="New" ping labelProps={{ "data-testid": "indicator" }}>
        <div />
      </Indicator>,
    )
    const label = screen.getByTestId("indicator")
    expect(label).toBeInTheDocument()
    expect(label.parentElement).toHaveClass("ui-indicator__float")
  })

  test("renders the float wrapper containing the label for placement prop", () => {
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
    expect(floatElement).toBeInTheDocument()
    expect(floatElement).toContainElement(label)
  })

  test("forwards floatProps to the float element", () => {
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

  test("forwards className through labelProps", () => {
    render(
      <Indicator
        label="New"
        labelProps={{ className: "custom-label", "data-testid": "indicator" }}
      >
        <div />
      </Indicator>,
    )
    expect(screen.getByTestId("indicator")).toHaveClass("custom-label")
  })
})
