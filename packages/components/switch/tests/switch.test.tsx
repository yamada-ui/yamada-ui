import { render, screen, a11y, fireEvent } from "@yamada-ui/test"
import { Switch } from "../src"

describe("<Switch />", () => {
  test("Switch renders correctly", async () => {
    const { container } = render(<Switch aria-label="switch">basic</Switch>)
    await a11y(container)
  })

  test("should render switch", () => {
    render(<Switch data-testid="Switch">basic</Switch>)
    fireEvent.click(screen.getByTestId("Switch"))
    expect(
      screen.getByTestId("Switch").getElementsByTagName("input")[0],
    ).toBeChecked()
  })

  test("should be checked by default", () => {
    render(
      <Switch data-testid="Switch" defaultIsChecked>
        basic
      </Switch>,
    )
    expect(
      screen.getByTestId("Switch").getElementsByTagName("input")[0],
    ).toBeChecked()
  })
})
