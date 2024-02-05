import { a11y, render, screen } from "@yamada-ui/test"
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
})
