import { a11y, render, screen } from "#test"
import { Indicator } from "."

describe("<Indicator />", () => {
  test("Indicator renders correctly", async () => {
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
})
