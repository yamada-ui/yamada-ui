import { Indicator } from "."
import { a11y, render, screen } from "../../../test"

describe("<Indicator />", () => {
  test("Indicator renders correctly", async () => {
    await a11y(
      <Indicator label="new">
        <div />
      </Indicator>,
    )
  })

  test("sets `displayName`", () => {
    expect(Indicator.displayName).toBe("IndicatorRoot")
  })

  test("sets `className` correctly", () => {
    render(
      <Indicator data-testid="indicator" label="new">
        <div />
      </Indicator>,
    )
    const el = screen.getByTestId("indicator")
    expect(el).toHaveClass("ui-indicator__icon")
    expect(el.parentElement).toHaveClass("ui-indicator__root")
  })

  test("should render indicator", () => {
    render(
      <Indicator label="new">
        <div />
      </Indicator>,
    )
    expect(screen.getByText("new")).toBeInTheDocument()
  })

  test("should render indicator (with overflowCount)", () => {
    render(
      <Indicator data-testid="Indicator" label={100} overflowCount={99}>
        <div />
      </Indicator>,
    )
    expect(screen.getByTestId("Indicator")).toHaveTextContent("+")
  })

  test("should not render zero when showZero is false", () => {
    render(
      <Indicator data-testid="Indicator" label={0} showZero={false}>
        <div />
      </Indicator>,
    )
    expect(screen.queryByTestId("Indicator")).not.toBeInTheDocument()
  })

  test("should not render indicator", () => {
    render(
      <Indicator data-testid="Indicator" disabled label="new">
        <div />
      </Indicator>,
    )
    expect(screen.queryByTestId("Indicator")).not.toBeInTheDocument()
  })

  test.todo("renders indicator at bottom-left", () => {
    render(
      <Indicator data-testid="Indicator" label="new" placement="bottom-left">
        <div />
      </Indicator>,
    )
    expect(screen.queryByTestId("Indicator")).toHaveStyle({
      bottom: "{offset}",
    })
    expect(screen.queryByTestId("Indicator")).toHaveStyle({ left: "{offset}" })
    expect(screen.queryByTestId("Indicator")).toHaveStyle({
      transform: "translate(-50%, 50%)",
    })
  })

  test("renders indicator with ping element", () => {
    render(
      <Indicator data-testid="Indicator" label="new" ping>
        <div />
      </Indicator>,
    )
    expect(screen.queryByTestId("Indicator")).toHaveClass("ui-indicator__icon")
    expect(screen.queryByText("new")).toHaveClass("ui-indicator__icon")
    expect(screen.queryByTestId("Indicator")!.parentElement).toHaveClass(
      "ui-indicator__root",
    )
    expect(screen.queryByText("new")!.querySelector("div")).toHaveClass(
      "ui-indicator__ping",
    )
  })
})
