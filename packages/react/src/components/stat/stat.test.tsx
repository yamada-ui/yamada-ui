import { a11y, render, screen } from "../../../test"
import { Stat } from "./"

describe("<Stat />", () => {
  test("Stat renders correctly", async () => {
    await a11y(
      <Stat.Root>
        <Stat.Label>Total Page Views</Stat.Label>
        <Stat.Number>1,993,818</Stat.Number>
        <Stat.HelperMessage>
          <Stat.Icon type="increase" />
          21% more than last month
        </Stat.HelperMessage>
      </Stat.Root>,
    )
  })

  //display decrease icon
  test("should change to decrease symbol", () => {
    render(
      <Stat.Root
        data-testid="stat-icon"
        helperMessage="21% more than last month"
        icon="decrease"
        label="Total Page Views"
        number="1,993,818"
      />,
    )
    expect(
      screen.getByTestId("stat-icon").getElementsByTagName("svg")[0],
    ).toHaveAttribute("aria-label", "Decreased by")
  })
})
