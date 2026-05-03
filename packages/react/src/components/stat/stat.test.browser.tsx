import { a11y, page, render } from "#test/browser"
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
  test("renders component correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` correctly", () => {
    expect(Stat.Root.displayName).toBe("StatRoot")
    expect(Stat.Label.displayName).toBe("StatLabel")
    expect(Stat.Value.displayName).toBe("StatValue")
    expect(Stat.HelperMessage.displayName).toBe("StatHelperMessage")
    expect(Stat.Icon.displayName).toBe("StatIcon")
  })

  test("sets `className` correctly", async () => {
    await render(<TestComponent />)

    await expect.element(page.getByTestId("root")).toHaveClass("ui-stat__root")
    await expect
      .element(page.getByTestId("label"))
      .toHaveClass("ui-stat__label")
    await expect
      .element(page.getByTestId("value"))
      .toHaveClass("ui-stat__value")
    await expect
      .element(page.getByTestId("helper-message"))
      .toHaveClass("ui-stat__helper-message")
    await expect.element(page.getByTestId("icon")).toHaveClass("ui-stat__icon")
  })

  test("renders HTML tag correctly", async () => {
    await render(<TestComponent />)

    expect(page.getByTestId("root").element().tagName).toBe("DL")
    expect(page.getByTestId("label").element().tagName).toBe("DT")
    expect(page.getByTestId("value").element().tagName).toBe("DD")
    expect(page.getByTestId("helper-message").element().tagName).toBe("DD")
    expect(page.getByTestId("icon").element().tagName).toBe("svg")
  })

  //display decrease icon
  test("should change to decrease symbol", async () => {
    await render(
      <Stat.Root
        data-testid="stat-icon"
        helperMessage="21% more than last month"
        icon="decrease"
        label="Total Page Views"
        value="1,993,818"
      />,
    )
    expect(
      page.getByTestId("stat-icon").element().getElementsByTagName("svg")[0],
    ).toHaveAttribute("aria-label", "Decreased by")
  })
})
