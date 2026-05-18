import { a11y, render, screen } from "#test"
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
  test("passes a11y check", async () => {
    await a11y(<TestComponent />)
  })

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
