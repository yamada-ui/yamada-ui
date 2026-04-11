import { a11y, fireEvent, render, screen } from "#test"
import { vi } from "vitest"
import { RadioCard, RadioCardGroup } from "."

const items = [
  {
    addon: "Addon 1",
    description: "Description 1",
    label: "Item 1",
    value: "1",
  },
  {
    addon: "Addon 2",
    description: "Description 2",
    label: "Item 2",
    value: "2",
  },
  {
    addon: "Addon 3",
    description: "Description 3",
    label: "Item 3",
    value: "3",
  },
]

describe("<RadioCard />", () => {
  test("renders component correctly", async () => {
    await a11y(<RadioCard.Root defaultChecked>radio card</RadioCard.Root>)
  })

  test("sets `displayName` correctly", () => {
    expect(RadioCard.Root.displayName).toBe("RadioCardRoot")
    expect(RadioCard.Label.displayName).toBe("RadioCardLabel")
    expect(RadioCard.Description.displayName).toBe("RadioCardDescription")
    expect(RadioCard.Addon.displayName).toBe("RadioCardAddon")
    expect(RadioCardGroup.Root.displayName).toBe("RadioCardGroup")
  })

  test("sets `className` correctly", () => {
    render(<RadioCardGroup.Root items={items} />)
    const radio = screen.getAllByRole("radio")[0]
    expect(screen.getByRole("radiogroup")).toHaveClass("ui-radio-card__group")
    expect(radio?.parentElement).toHaveClass("ui-radio-card__root")
    expect(radio?.parentElement?.children[1]).toHaveClass(
      "ui-radio-card__indicator",
    )
    expect(radio?.parentElement?.children[2]).toHaveClass(
      "ui-radio-card__label",
    )
    expect(radio?.parentElement?.children[3]).toHaveClass(
      "ui-radio-card__description",
    )
    expect(radio?.parentElement?.children[4]).toHaveClass(
      "ui-radio-card__addon",
    )
  })

  test("renders HTML tag correctly", () => {
    render(<RadioCardGroup.Root items={items} />)
    const radio = screen.getAllByRole("radio")[0]
    expect(screen.getByRole("radiogroup").tagName).toBe("DIV")
    expect(radio?.parentElement?.tagName).toBe("LABEL")
    expect(radio?.tagName).toBe("INPUT")
    expect(radio?.parentElement?.children[1]?.tagName).toBe("DIV")
    expect(radio?.parentElement?.children[2]?.tagName).toBe("SPAN")
    expect(radio?.parentElement?.children[3]?.tagName).toBe("SPAN")
    expect(radio?.parentElement?.children[4]?.tagName).toBe("SPAN")
  })

  test("renders label, description, and addon via props", () => {
    render(
      <RadioCard.Root
        addon="Test Addon"
        description="Test Description"
        label="Test Label"
        value="test"
      />,
    )

    expect(screen.getByText("Test Label")).toBeInTheDocument()
    expect(screen.getByText("Test Description")).toBeInTheDocument()
    expect(screen.getByText("Test Addon")).toBeInTheDocument()
  })

  test("renders without indicator when withIndicator is false", () => {
    render(
      <RadioCard.Root
        label="No Indicator"
        value="test"
        withIndicator={false}
      />,
    )

    expect(screen.getByText("No Indicator")).toBeInTheDocument()
    const radio = screen.getByRole("radio")
    const indicator = radio.parentElement?.querySelector("[data-indicator]")
    expect(indicator).toBeNull()
  })

  test("merges user-provided `rootProps` with internal props instead of overwriting", () => {
    const onClick = vi.fn()

    render(
      <RadioCard.Root
        label="Radio Card"
        value="1"
        rootProps={{
          className: "from-user",
          style: { backgroundColor: "blue", color: "red" },
          onClick,
        }}
      />,
    )

    const root = screen.getByRole("radio").parentElement

    expect(root).toHaveClass("ui-radio-card__root", "from-user")
    expect(root).toHaveStyle({ color: "rgb(255, 0, 0)" })
    expect(root).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    fireEvent.click(root!)

    expect(onClick).toHaveBeenCalledWith(expect.anything())
  })
})
