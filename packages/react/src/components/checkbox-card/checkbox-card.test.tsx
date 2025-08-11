import { a11y, render, screen } from "#test"
import { CheckboxCard, CheckboxCardGroup } from "."

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

describe("<CheckboxCard />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <CheckboxCard.Root defaultChecked>checkbox card</CheckboxCard.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(CheckboxCard.Root.displayName).toBe("CheckboxCardRoot")
    expect(CheckboxCard.Label.displayName).toBe("CheckboxCardLabel")
    expect(CheckboxCard.Description.displayName).toBe("CheckboxCardDescription")
    expect(CheckboxCard.Addon.displayName).toBe("CheckboxCardAddon")
    expect(CheckboxCardGroup.Root.displayName).toBe("CheckboxCardGroup")
  })

  test("sets `className` correctly", () => {
    render(<CheckboxCardGroup.Root items={items} />)
    const checkbox = screen.getAllByRole("checkbox")[0]
    expect(screen.getByRole("group")).toHaveClass("ui-checkbox-card__group")
    expect(checkbox?.parentElement).toHaveClass("ui-checkbox-card__root")
    expect(checkbox?.parentElement?.children[1]).toHaveClass(
      "ui-checkbox-card__indicator",
    )
    expect(checkbox?.parentElement?.children[2]).toHaveClass(
      "ui-checkbox-card__label",
    )
    expect(checkbox?.parentElement?.children[3]).toHaveClass(
      "ui-checkbox-card__description",
    )
    expect(checkbox?.parentElement?.children[4]).toHaveClass(
      "ui-checkbox-card__addon",
    )
  })

  test("renders HTML tag correctly", () => {
    render(<CheckboxCardGroup.Root items={items} />)
    const checkbox = screen.getAllByRole("checkbox")[0]
    expect(screen.getByRole("group").tagName).toBe("DIV")
    expect(checkbox?.parentElement?.tagName).toBe("LABEL")
    expect(checkbox?.tagName).toBe("INPUT")
    expect(checkbox?.parentElement?.children[1]?.tagName).toBe("DIV")
    expect(checkbox?.parentElement?.children[2]?.tagName).toBe("SPAN")
    expect(checkbox?.parentElement?.children[3]?.tagName).toBe("SPAN")
    expect(checkbox?.parentElement?.children[4]?.tagName).toBe("SPAN")
  })
})
