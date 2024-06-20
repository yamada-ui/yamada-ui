import { a11y, render, screen } from "@yamada-ui/test"
import { Indicator } from "../src"

describe("<Indicator />", () => {
  test("Indicator renders correctly", async () => {
    await a11y(
      <Indicator label="new">
        <div></div>
      </Indicator>,
    )
  })

  test("should render indicator", () => {
    render(
      <Indicator label="new">
        <div></div>
      </Indicator>,
    )
    expect(screen.getByText("new")).toBeInTheDocument()
  })

  test("should render indicator (with overflowCount)", () => {
    render(
      <Indicator data-testid="Indicator" label={100} overflowCount={99}>
        <div></div>
      </Indicator>,
    )
    expect(screen.getByTestId("Indicator")).toHaveTextContent("+")
  })

  test("should not render zero when showZero is false", () => {
    render(
      <Indicator data-testid="Indicator" showZero={false} label={0}>
        <div></div>
      </Indicator>,
    )
    expect(screen.queryByTestId("Indicator")).not.toBeInTheDocument()
  })

  test("should not render indicator", () => {
    render(
      <Indicator data-testid="Indicator" isDisabled label="new">
        <div></div>
      </Indicator>,
    )
    expect(screen.queryByTestId("Indicator")).not.toBeInTheDocument()
  })

  test("renders indicator at bottom-left", () => {
    render(
      <Indicator placement="bottom-left" data-testid="Indicator" label="new">
        <div></div>
      </Indicator>,
    )
    expect(screen.queryByTestId("Indicator")).toHaveStyle({ bottom: "0" })
    expect(screen.queryByTestId("Indicator")).toHaveStyle({ left: "0" })
    expect(screen.queryByTestId("Indicator")).toHaveStyle({
      transform: "translate(-50%, 50%)",
    })
  })

  test("renders indicator with ping element", () => {
    render(
      <Indicator data-testid="Indicator" ping label="new">
        <div></div>
      </Indicator>,
    )
    expect(screen.queryByTestId("Indicator")).toHaveClass("ui-indicator__icon")
    expect(screen.queryByText("new")).toHaveClass("ui-indicator__icon")
    expect(screen.queryByText("new")!.querySelector("div")).toHaveClass(
      "ui-indicator__icon__ping",
    )
  })
})
