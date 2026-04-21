import { a11y, page, render } from "#test/browser"
import { Status } from "."

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
  test("renders component correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` correctly", () => {
    expect(Status.displayName).toBe("StatusRoot")
  })

  test("sets `className` correctly", async () => {
    await render(<TestComponent />)

    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-status__root")
    await expect
      .element(page.getByTestId("label"))
      .toHaveClass("ui-status__label")
    await expect
      .element(page.getByTestId("indicator"))
      .toHaveClass("ui-status__indicator")
  })

  test("renders HTML tag correctly", async () => {
    await render(<TestComponent />)

    expect(page.getByTestId("root").element().tagName).toBe("DIV")
    expect(page.getByTestId("label").element().tagName).toBe("P")
    expect(page.getByTestId("indicator").element().tagName).toBe("DIV")
  })

  test("Status with Label renders correctly", async () => {
    await render(<Status>Info</Status>)

    await expect.element(page.getByText("Info")).toBeInTheDocument()
  })
})
