import { a11y, page, render } from "#test/browser"
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

  test("sets `className` correctly", async () => {
    await render(<RadioCardGroup.Root items={items} />)
    const radio = page.getByRole("radio", { name: "Item 1" }).element()
    const root = radio.parentElement as HTMLElement
    await expect
      .element(page.getByRole("radiogroup"))
      .toHaveClass("ui-radio-card__group")
    expect(root).toHaveClass("ui-radio-card__root")
    expect(root.children[1]).toHaveClass("ui-radio-card__indicator")
    expect(root.children[2]).toHaveClass("ui-radio-card__label")
    expect(root.children[3]).toHaveClass("ui-radio-card__description")
    expect(root.children[4]).toHaveClass("ui-radio-card__addon")
  })

  test("renders HTML tag correctly", async () => {
    await render(<RadioCardGroup.Root items={items} />)
    const radio = page.getByRole("radio", { name: "Item 1" }).element()
    const root = radio.parentElement as HTMLElement
    expect(page.getByRole("radiogroup").element().tagName).toBe("DIV")
    expect(root.tagName).toBe("LABEL")
    expect(radio.tagName).toBe("INPUT")
    expect(root.children[1]?.tagName).toBe("DIV")
    expect(root.children[2]?.tagName).toBe("SPAN")
    expect(root.children[3]?.tagName).toBe("SPAN")
    expect(root.children[4]?.tagName).toBe("SPAN")
  })

  test("renders label, description, and addon via props", async () => {
    await render(
      <RadioCard.Root
        addon="Test Addon"
        description="Test Description"
        label="Test Label"
        value="test"
      />,
    )

    await expect.element(page.getByText("Test Label")).toBeInTheDocument()
    await expect.element(page.getByText("Test Description")).toBeInTheDocument()
    await expect.element(page.getByText("Test Addon")).toBeInTheDocument()
  })

  test("renders without indicator when withIndicator is false", async () => {
    await render(
      <RadioCard.Root
        label="No Indicator"
        value="test"
        withIndicator={false}
      />,
    )

    await expect.element(page.getByText("No Indicator")).toBeInTheDocument()
    const radio = page.getByRole("radio").element()
    const indicator = radio.parentElement?.querySelector("[data-indicator]")
    expect(indicator).toBeNull()
  })
})
