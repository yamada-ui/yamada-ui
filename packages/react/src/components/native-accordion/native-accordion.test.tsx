import { a11y, render, screen } from "#test"
import { BoxIcon } from "../icon"
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

  test("sets `displayName` correctly", () => {
    expect(NativeAccordion.Root.name).toBe("NativeAccordionRoot")
    expect(NativeAccordion.Item.name).toBe("NativeAccordionItem")
    expect(NativeAccordion.Button.name).toBe("NativeAccordionButton")
    expect(NativeAccordion.Icon.name).toBe("NativeAccordionIcon")
    expect(NativeAccordion.Panel.name).toBe("NativeAccordionPanel")
  })

  test("sets `className` correctly", () => {
    render(
      <NativeAccordion.Root data-testid="root">
        <NativeAccordion.Item data-testid="item" button="Accordion Label">
          <NativeAccordion.Panel data-testid="panel">
            This is an accordion item
          </NativeAccordion.Panel>
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )
    expect(screen.getByTestId("root")).toHaveClass("ui-native-accordion__root")
    expect(screen.getByTestId("item")).toHaveClass("ui-native-accordion__item")
    expect(screen.getByTestId("panel")).toHaveClass(
      "ui-native-accordion__panel",
    )
    expect(screen.getByText("Accordion Label")).toHaveClass(
      "ui-native-accordion__button",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
      <NativeAccordion.Root data-testid="root">
        <NativeAccordion.Item data-testid="item" button="Accordion Label">
          <NativeAccordion.Panel data-testid="panel">
            This is an accordion item
          </NativeAccordion.Panel>
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )
    expect(screen.getByTestId("root").tagName).toBe("DIV")
    const item = screen.getByTestId("item")
    expect(item.tagName).toBe("DETAILS")
    expect(screen.getByTestId("panel").tagName).toBe("DIV")
    expect(screen.getByText("Accordion Label").tagName).toBe("SUMMARY")
  })

  test("supports `open` as a native default expanded attribute", () => {
    render(
      <NativeAccordion.Root>
        <NativeAccordion.Item button="Accordion Label" open>
          This is an accordion item
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )

    const item = screen.getByRole("group")
    expect(item).toHaveAttribute("open")
    expect(screen.getByText("This is an accordion item")).toBeInTheDocument()
  })

  test("toggles with native details behavior", async () => {
    const { user } = render(<NativeAccordion.Root items={items} />)

    const button = screen.getByText(/Accordion Label 1/i)
    const item = screen.getAllByRole("group")[0]

    await user.click(button)
    expect(item).toHaveAttribute("open")

    await user.click(button)
    expect(item).not.toHaveAttribute("open")
  })

  test("can open multiple items by default", async () => {
    const { user } = render(<NativeAccordion.Root items={items} />)

    const itemsElements = screen.getAllByRole("group")
    const item1 = itemsElements[0]!
    const item2 = itemsElements[1]!

    await user.click(screen.getByText(/Accordion Label 1/i))
    await user.click(screen.getByText(/Accordion Label 2/i))

    expect(item1).toHaveAttribute("open")
    expect(item2).toHaveAttribute("open")
  })

  test("assigns shared `name` when `multiple` is false", () => {
    render(<NativeAccordion.Root items={items} multiple={false} />)

    const itemsElements = screen.getAllByRole("group")
    const item1 = itemsElements[0]!
    const item2 = itemsElements[1]!

    const name1 = item1.getAttribute("name")
    const name2 = item2.getAttribute("name")

    expect(name1).toBeTruthy()
    expect(name1).toBe(name2)
  })

  test("applies explicit empty `name` when `name` is an empty string", () => {
    render(<NativeAccordion.Root name="" items={items} />)

    const itemsElements = screen.getAllByRole("group")
    const item1 = itemsElements[0]!
    const item2 = itemsElements[1]!

    expect(item1).toHaveAttribute("name", "")
    expect(item2).toHaveAttribute("name", "")
  })

  test("applies root `name` to items", () => {
    render(<NativeAccordion.Root name="native-accordion" items={items} />)

    const item = screen.getAllByRole("group")[0]
    expect(item).toHaveAttribute("name", "native-accordion")
  })

  test("renders a disabled item", async () => {
    const { user } = render(
      <NativeAccordion.Root>
        <NativeAccordion.Item button="Accordion Label" disabled>
          This is an accordion item
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )

    const button = screen.getByText(/Accordion Label/i)
    const item = screen.getByRole("group")

    await user.click(button)
    expect(item).not.toHaveAttribute("open")
  })

  test("renders item with custom icon", async () => {
    const { user } = render(
      <NativeAccordion.Root
        icon={<BoxIcon data-icon="custom" data-testid="custom-icon" />}
      >
        <NativeAccordion.Item button="Accordion Label">
          This is an accordion item
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )

    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "custom",
    )

    await user.click(screen.getByText(/Accordion Label/i))
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument()
  })
})
