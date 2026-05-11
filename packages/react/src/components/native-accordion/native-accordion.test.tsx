import { a11y, render } from "#test"
import { NativeAccordion } from "./"

const items = [
  {
    button: "Accordion Label 1",
    children: "This is an accordion item 1",
  },
  {
    button: "Accordion Label 2",
    children: "This is an accordion item 2",
  },
  {
    button: "Accordion Label 3",
    children: "This is an accordion item 3",
  },
]

describe("<NativeAccordion />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <NativeAccordion.Root>
        <NativeAccordion.Item button="Accordion Label">
          This is an accordion item
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )
  })

  test("applies root `name` to items", () => {
    const { container } = render(
      <NativeAccordion.Root name="native-accordion" items={items} />,
    )

    const item = container.querySelectorAll("details")[0]
    expect(item).toHaveAttribute("name", "native-accordion")
  })

  test("applies shared generated `name` to all items when multiple is false", () => {
    const { container } = render(<NativeAccordion.Root items={items} />)
    const renderedItems = Array.from(container.querySelectorAll("details"))

    const generatedName = renderedItems[0]?.getAttribute("name")

    expect(generatedName).toBeTruthy()

    for (const item of renderedItems) {
      expect(item).toHaveAttribute("name", generatedName)
    }
  })

  test("preserves empty string `name` on all items", () => {
    const { container } = render(<NativeAccordion.Root name="" items={items} />)
    const renderedItems = Array.from(container.querySelectorAll("details"))

    for (const item of renderedItems) {
      expect(item).toHaveAttribute("name", "")
    }
  })
})
