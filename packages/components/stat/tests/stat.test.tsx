import { a11y, render, screen } from "@yamada-ui/test"
import {
  Stat,
  StatHelperMessage,
  StatIcon,
  StatLabel,
  StatNumber,
} from "../src"

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
  // change color scheme to green
  test("should change color scheme", () => {
    render(
      <Stat
        colorScheme="green"
        data-testid="stat"
        label="Total Page Views"
        number="1,993,818"
        icon="increase"
        helperMessage="21% more than last month"
      />,
    )
    expect(
      screen.getByTestId("stat").getElementsByTagName("dd")[0],
    ).toHaveClass("ui-stat__number css-154kd8q")
  })
  // center content
  test("should center content", () => {
    render(
      <Stat
        data-testid="stat-test"
        label="Total Page Views"
        number="1,993,818"
        icon="increase"
        helperMessage="21% more than last month"
        centerContent
      />,
    )
    expect(screen.getByTestId("stat-test")).toHaveClass("ui-stat css-dvxtzn")
  })

  //display decrease icon
  test("should change to decrease symbol", () => {
    render(
      <Stat
        data-testid="stat-icon"
        label="Total Page Views"
        number="1,993,818"
        icon="decrease"
        helperMessage="21% more than last month"
      />,
    )
    expect(
      screen.getByTestId("stat-icon").getElementsByTagName("svg")[0],
    ).toHaveAttribute("aria-label", "Decreased by")
  })
})
