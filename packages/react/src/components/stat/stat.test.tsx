import { a11y, render, screen } from "../../../test"
import { Stat } from "./"

const TestComponent = () => (
  <Stat.Root data-testid="root">
    <Stat.Label data-testid="label">Total Page Views</Stat.Label>
    <Stat.Value data-testid="value">1,993,818</Stat.Value>
    <Stat.HelperMessage data-testid="helper-message">
      <Stat.Icon type="increase" data-testid="icon" />
      21% more than last month
    </Stat.HelperMessage>
  </Stat.Root>
)

describe("<Stat />", () => {
  test("Stat renders correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` and `__styled__` correctly", () => {
    expect(Stat.Root.displayName).toBe("StatRoot")
    expect(Stat.Root.__styled__).toBe("StatRoot")
    expect(Stat.Label.displayName).toBe("StatLabel")
    expect(Stat.Label.__styled__).toBe("StatLabel")
    expect(Stat.Value.displayName).toBe("StatValue")
    expect(Stat.Value.__styled__).toBe("StatValue")
    expect(Stat.HelperMessage.displayName).toBe("StatHelperMessage")
    expect(Stat.HelperMessage.__styled__).toBe("StatHelperMessage")
    expect(Stat.Icon.displayName).toBe("StatIcon")
    expect(Stat.Icon.__styled__).toBe("StatIcon")
  })

  test("sets `className` correctly", () => {
    render(<TestComponent />)

    expect(screen.getByTestId("root")).toHaveClass("ui-stat__root")
    expect(screen.getByTestId("label")).toHaveClass("ui-stat__label")
    expect(screen.getByTestId("value")).toHaveClass("ui-stat__value")
    expect(screen.getByTestId("helper-message")).toHaveClass(
      "ui-stat__helper-message",
    )
    expect(screen.getByTestId("icon")).toHaveClass("ui-stat__icon")
  })

  test("renders HTML tag correctly", () => {
    render(<TestComponent />)

    expect(screen.getByTestId("root").tagName).toBe("DL")
    expect(screen.getByTestId("label").tagName).toBe("DT")
    expect(screen.getByTestId("value").tagName).toBe("DD")
    expect(screen.getByTestId("helper-message").tagName).toBe("DD")
    expect(screen.getByTestId("icon").tagName).toBe("svg")
  })

  //display decrease icon
  test("should change to decrease symbol", () => {
    render(
      <Stat.Root
        data-testid="stat-icon"
        helperMessage="21% more than last month"
        icon="decrease"
        label="Total Page Views"
        value="1,993,818"
      />,
    )
    expect(
      screen.getByTestId("stat-icon").getElementsByTagName("svg")[0],
    ).toHaveAttribute("aria-label", "Decreased by")
  })
})
