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
    const checkbox = screen.getByRole("checkbox", { name: /Item 1/ })
    const root = checkbox.parentElement
    if (!(root instanceof HTMLElement)) throw new Error("root is missing")
    expect(screen.getByRole("group")).toHaveClass("ui-checkbox-card__group")
    expect(root).toHaveClass("ui-checkbox-card__root")
    expect(root.children[1]).toHaveClass("ui-checkbox-card__indicator")
    expect(root.children[2]).toHaveClass("ui-checkbox-card__label")
    expect(root.children[3]).toHaveClass("ui-checkbox-card__description")
    expect(root.children[4]).toHaveClass("ui-checkbox-card__addon")
  })

  test("renders HTML tag correctly", () => {
    render(<CheckboxCardGroup.Root items={items} />)
    const checkbox = screen.getByRole("checkbox", { name: /Item 1/ })
    const root = checkbox.parentElement
    if (!(root instanceof HTMLElement)) throw new Error("root is missing")
    expect(screen.getByRole("group").tagName).toBe("DIV")
    expect(root.tagName).toBe("LABEL")
    expect(checkbox.tagName).toBe("INPUT")
    expect(root.children[1]?.tagName).toBe("DIV")
    expect(root.children[2]?.tagName).toBe("SPAN")
    expect(root.children[3]?.tagName).toBe("SPAN")
    expect(root.children[4]?.tagName).toBe("SPAN")
  })

  test("renders label, description, and addon via props", () => {
    render(
      <CheckboxCard.Root
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
      <CheckboxCard.Root
        label="No Indicator"
        value="test"
        withIndicator={false}
      />,
    )

    expect(screen.getByText("No Indicator")).toBeInTheDocument()
    const checkbox = screen.getByRole("checkbox")
    const indicator =
      checkbox.parentElement?.querySelector("[data-indicator]") ?? null
    expect(indicator).toBeNull()
  })
})
