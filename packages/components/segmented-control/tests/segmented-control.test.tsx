import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import type { SegmentedControlItem } from "../src"
import { SegmentedControl, SegmentedControlButton } from "../src"

describe("<SegmentedControl />", () => {
  test("SegmentedControl renders correctly", async () => {
    const { container } = render(
      <>
        <SegmentedControl>
          <SegmentedControlButton value="one">One</SegmentedControlButton>
          <SegmentedControlButton value="two">Two</SegmentedControlButton>
          <SegmentedControlButton value="three">Three</SegmentedControlButton>
        </SegmentedControl>
      </>,
    )
    await a11y(container)
  })

  test("should render segmented control", () => {
    const items: SegmentedControlItem[] = [
      {
        label: "One",
        value: "one",
      },
      { label: "Two", value: "two" },
      { label: "Three", value: "three" },
    ]
    render(
      <>
        <SegmentedControl data-testid="SegmentedControl">
          <SegmentedControlButton value="one">One</SegmentedControlButton>
          <SegmentedControlButton value="two">Two</SegmentedControlButton>
          <SegmentedControlButton value="three">Three</SegmentedControlButton>
        </SegmentedControl>

        <SegmentedControl data-testid="SegementedControlItems" items={items} />
      </>,
    )
    expect(screen.getByTestId("SegmentedControl")).toBeInTheDocument()
    expect(screen.getByTestId("SegementedControlItems")).toBeInTheDocument()
  })

  test("should render segmented control with default value", () => {
    render(
      <>
        <SegmentedControl data-testid="SegmentedControl" defaultValue="one">
          <SegmentedControlButton
            data-testid="SegmentedControlButton"
            value="one"
          >
            One
          </SegmentedControlButton>
          <SegmentedControlButton value="two">Two</SegmentedControlButton>
          <SegmentedControlButton value="three">Three</SegmentedControlButton>
        </SegmentedControl>
      </>,
    )
    const label = screen.getByTestId("SegmentedControlButton")
    expect(label).toHaveAttribute("data-checked")
    expect(label.getElementsByTagName("input")[0]).toHaveAttribute("checked")
  })

  test("should disable segmented control", () => {
    render(
      <>
        <SegmentedControl data-testid="SegmentedControl" isDisabled>
          <SegmentedControlButton value="one">One</SegmentedControlButton>
          <SegmentedControlButton value="two">Two</SegmentedControlButton>
          <SegmentedControlButton value="three">Three</SegmentedControlButton>
        </SegmentedControl>
      </>,
    )
    const segmentedControl = screen.getByTestId("SegmentedControl")
    Array.from(segmentedControl.getElementsByTagName("input")).forEach(
      (input) => {
        expect(input).toBeDisabled()
      },
    )
  })

  test("focus moves correctly between buttons", async () => {
    const { user } = render(
      <SegmentedControl>
        <SegmentedControlButton value="one" data-testid="firstButton">
          One
        </SegmentedControlButton>
        <SegmentedControlButton value="two" data-testid="secondButton" disabled>
          Two
        </SegmentedControlButton>
        <SegmentedControlButton value="three" data-testid="thirdButton">
          Three
        </SegmentedControlButton>
      </SegmentedControl>,
    )
    const firstButton = screen.getByTestId("firstButton")
    const secondButton = screen.getByTestId("secondButton")
    const thirdButton = screen.getByTestId("thirdButton")

    expect(firstButton).toHaveAttribute("data-checked")

    await user.click(secondButton)

    expect(secondButton).not.toHaveAttribute("data-checked")

    await user.click(thirdButton)

    expect(thirdButton).toHaveAttribute("data-checked")
  })

  test("SegmentedControl with non-SegmentedControlButton children renders correctly", async () => {
    const { container } = render(
      <SegmentedControl data-testid="SegmentedControl" isDisabled>
        <option>one</option>
        <option>two</option>
        <option>three</option>
      </SegmentedControl>,
    )

    await a11y(container)
  })

  test("focus moves to the next element when the focused element is disabled", async () => {
    render(
      <SegmentedControl>
        <SegmentedControlButton value="one">One</SegmentedControlButton>
        <SegmentedControlButton value="two" data-testid="secondButton" disabled>
          Two
        </SegmentedControlButton>
        <SegmentedControlButton value="three" data-testid="thirdButton">
          Three
        </SegmentedControlButton>
      </SegmentedControl>,
    )

    const secondButton = screen.getByTestId("secondButton")
    const thirdButton = screen.getByTestId("thirdButton")

    fireEvent.focus(secondButton)

    expect(thirdButton).toHaveAttribute("data-focus")
  })
})
