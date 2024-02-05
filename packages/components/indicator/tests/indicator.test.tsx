import { a11y, render, screen } from "@yamada-ui/test"
import { Indicator } from "../src"

describe("<Indicator />", () => {
  test("Indicator renders correctly", async () => {
    const { container } = render(
      <Indicator label="new">
        <div></div>
      </Indicator>,
    )
    await a11y(container)
  })

  test("should render indicator", () => {
    render(
      <Indicator data-testid="Indicator" label="new">
        <div></div>
      </Indicator>,
    )
    expect(screen.getByTestId("Indicator")).toBeInTheDocument()
  })

  test("should render indicator", () => {
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
})
