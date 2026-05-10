import { a11y, render, screen } from "#test"
import { Status } from "./"

const TestComponent = () => (
  <Status
    data-testid="root"
    indicatorProps={{
      "data-indicator": "forwarded",
      "data-testid": "indicator",
    }}
    labelProps={{ "data-label": "forwarded", "data-testid": "label" }}
  >
    Info
  </Status>
)

describe("<Status />", () => {
  test("sets displayName correctly", () => {
    expect(Status.displayName).toBe("StatusRoot")
  })

  test("sets className correctly", () => {
    render(<TestComponent />)

    expect(screen.getByTestId("root")).toHaveClass("ui-status__root")
    expect(screen.getByTestId("label")).toHaveClass("ui-status__label")
    expect(screen.getByTestId("indicator")).toHaveClass("ui-status__indicator")
  })

  test("renders HTML tag correctly", () => {
    render(<TestComponent />)

    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getByTestId("label").tagName).toBe("P")
    expect(screen.getByTestId("indicator").tagName).toBe("DIV")
  })

  test("forwards indicatorProps and labelProps correctly", () => {
    render(<TestComponent />)

    expect(screen.getByTestId("indicator")).toHaveAttribute(
      "data-indicator",
      "forwarded",
    )
    expect(screen.getByTestId("label")).toHaveAttribute(
      "data-label",
      "forwarded",
    )
  })

  test("renders component correctly", async () => {
    await a11y(<TestComponent />)

    expect(screen.getByText("Info")).toBeInTheDocument()
  })
})
