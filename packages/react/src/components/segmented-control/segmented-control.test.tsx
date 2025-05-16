import type { SegmentedControlItem } from "./"
import { a11y, fireEvent, render, screen, waitFor } from "../../../test"
import { SegmentedControl } from "./"

describe("<SegmentedControl />", () => {
  test("SegmentedControl renders correctly", async () => {
    const { container } = render(
      <SegmentedControl.Root>
        <SegmentedControl.Button value="one">One</SegmentedControl.Button>
        <SegmentedControl.Button value="two">Two</SegmentedControl.Button>
        <SegmentedControl.Button value="three">Three</SegmentedControl.Button>
      </SegmentedControl.Root>,
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
        <SegmentedControl.Root data-testid="SegmentedControl">
          <SegmentedControl.Button value="one">One</SegmentedControl.Button>
          <SegmentedControl.Button value="two">Two</SegmentedControl.Button>
          <SegmentedControl.Button value="three">Three</SegmentedControl.Button>
        </SegmentedControl.Root>

        <SegmentedControl.Root
          data-testid="SegmentedControlItems"
          items={items}
        />
      </>,
    )
    expect(screen.getByTestId("SegmentedControl")).toBeInTheDocument()
    expect(screen.getByTestId("SegmentedControlItems")).toBeInTheDocument()
  })

  test("should render segmented control with default value", () => {
    render(
      <SegmentedControl.Root data-testid="SegmentedControl" defaultValue="one">
        <SegmentedControl.Button
          data-testid="SegmentedControlButton"
          value="one"
        >
          One
        </SegmentedControl.Button>
        <SegmentedControl.Button value="two">Two</SegmentedControl.Button>
        <SegmentedControl.Button value="three">Three</SegmentedControl.Button>
      </SegmentedControl.Root>,
    )
    const label = screen.getByTestId("SegmentedControlButton")
    expect(label).toHaveAttribute("data-checked")
    expect(label.getElementsByTagName("input")[0]).toHaveAttribute("checked")
  })

  test("should disable segmented control", () => {
    render(
      <SegmentedControl.Root data-testid="SegmentedControl" disabled>
        <SegmentedControl.Button value="one">One</SegmentedControl.Button>
        <SegmentedControl.Button value="two">Two</SegmentedControl.Button>
        <SegmentedControl.Button value="three">Three</SegmentedControl.Button>
      </SegmentedControl.Root>,
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
      <SegmentedControl.Root>
        <SegmentedControl.Button value="one">One</SegmentedControl.Button>
        <SegmentedControl.Button disabled value="two">
          Two
        </SegmentedControl.Button>
        <SegmentedControl.Button value="three">Three</SegmentedControl.Button>
      </SegmentedControl.Root>,
    )
    const firstButton = screen.getByRole("radio", { name: /one/i })
    const secondButton = screen.getByRole("radio", { name: /two/i })
    const thirdButton = screen.getByRole("radio", { name: /three/i })

    expect(firstButton).toHaveAttribute("data-checked")

    await user.click(secondButton)

    expect(secondButton).not.toHaveAttribute("data-checked")

    await user.click(thirdButton)

    expect(thirdButton).toHaveAttribute("data-checked")
  })

  test("SegmentedControl with non-SegmentedControlButton children renders correctly", async () => {
    const { container } = render(
      <SegmentedControl.Root data-testid="SegmentedControl" disabled>
        <option>one</option>
        <option>two</option>
        <option>three</option>
      </SegmentedControl.Root>,
    )

    await a11y(container)
  })

  test("focus moves to the next element when the focused element is disabled", () => {
    render(
      <SegmentedControl.Root>
        <SegmentedControl.Button value="one">One</SegmentedControl.Button>
        <SegmentedControl.Button disabled value="two">
          Two
        </SegmentedControl.Button>
        <SegmentedControl.Button value="three">Three</SegmentedControl.Button>
      </SegmentedControl.Root>,
    )

    const secondButton = screen.getByRole("radio", { name: /two/i })
    const thirdButton = screen.getByRole("radio", { name: /three/i })

    fireEvent.focus(secondButton)

    waitFor(() => expect(thirdButton).toHaveAttribute("data-focus"))
  })
})
