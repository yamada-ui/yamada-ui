import { a11y, render, screen } from "#test"
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
})
