import { a11y, render, screen } from "../../../test"
import { Stat, StatHelperMessage, StatIcon, StatLabel, StatNumber } from "./"

describe("<Stat />", () => {
  test("Stat renders correctly", async () => {
    await a11y(
      <Stat>
        <StatLabel>Total Page Views</StatLabel>
        <StatNumber>1,993,818</StatNumber>
        <StatHelperMessage>
          <StatIcon type="increase" />
          21% more than last month
        </StatHelperMessage>
      </Stat>,
    )
  })

  //display decrease icon
  test("should change to decrease symbol", () => {
    render(
      <Stat
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
