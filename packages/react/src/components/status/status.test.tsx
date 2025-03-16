import { Status } from "."
import { a11y, render, screen } from "../../../test"

const TestComponent = () => (
  <Status
    data-testid="root"
    indicatorProps={{ "data-testid": "indicator" }}
    labelProps={{ "data-testid": "label" }}
  >
    Info
  </Status>
)

describe("<Status />", () => {
  test("Status renders correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Status.displayName).toBe("StatusRoot")
    expect(Status.__ui__).toBe("StatusRoot")
  })

  test("sets `className` correctly", () => {
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

  test("Status with Label renders correctly", () => {
    render(<Status>Info</Status>)
    expect(screen.getByText("Info")).toBeInTheDocument()
  })
})
