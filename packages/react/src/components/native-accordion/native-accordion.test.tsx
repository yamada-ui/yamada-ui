import { a11y, render, screen } from "#test"
import { noop } from "../../utils"
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
        <NativeAccordion.Item button="Accordion Label" index={0}>
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
        <NativeAccordion.Item
          data-testid="item"
          button="Accordion Label"
          index={0}
        >
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
        <NativeAccordion.Item
          data-testid="item"
          button="Accordion Label"
          index={0}
        >
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

  test("should render correctly with defaultIndex item expanded", () => {
    render(<NativeAccordion.Root defaultIndex={0} items={items} />)

    const item = screen.getAllByRole("group")[0]
    expect(item).toHaveAttribute("open")
    expect(screen.getByText("This is an accordion item 1")).toBeInTheDocument()
  })

  test("should work correctly with toggle", async () => {
    const { user } = render(<NativeAccordion.Root items={items} toggle />)

    const button = screen.getByText(/Accordion Label 1/i)
    const item = screen.getAllByRole("group")[0]

    await user.click(button)
    expect(item).toHaveAttribute("open")

    await user.click(button)
    expect(item).not.toHaveAttribute("open")
  })

  test("should show multiple items", async () => {
    const { user } = render(
      <NativeAccordion.Root defaultIndex={[0, 1]} items={items} multiple />,
    )

    const items_elements = screen.getAllByRole("group")
    const item1 = items_elements[0]
    const item2 = items_elements[1]
    const item3 = items_elements[2]

    expect(item1).toHaveAttribute("open")
    expect(item2).toHaveAttribute("open")
    expect(item3).not.toHaveAttribute("open")

    await user.click(screen.getByText(/Accordion Label 3/i))
    expect(item3).toHaveAttribute("open")
  })

  test("should render a disabled item", async () => {
    const { user } = render(
      <NativeAccordion.Root>
        <NativeAccordion.Item button="Accordion Label" disabled index={0}>
          This is an accordion item
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )

    const button = screen.getByText(/Accordion Label/i)
    const item = screen.getByRole("group")

    await user.click(button)
    expect(item).not.toHaveAttribute("open")
  })

  test("should render item with custom icon", async () => {
    const { user } = render(
      <NativeAccordion.Root
        icon={({ expanded }) => (
          <BoxIcon
            data-icon={!expanded ? "plus" : "minus"}
            data-testid="custom-icon"
          />
        )}
      >
        <NativeAccordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "plus",
    )

    await user.click(screen.getByText(/Accordion Label/i))
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "minus",
    )
  })

  test("correct warnings should be issued when multiple and toggle", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    render(
      <NativeAccordion.Root multiple toggle>
        <NativeAccordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )

    expect(consoleWarnSpy).toHaveBeenLastCalledWith(
      "NativeAccordion: If 'multiple' is passed, 'toggle' will be ignored. Either remove 'toggle' or 'multiple' depending on whether you want multiple accordions visible or not",
    )

    consoleWarnSpy.mockRestore()
  })

  test("correct warnings should be issued when multiple and defaultIndex is not array", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    render(
      <NativeAccordion.Root defaultIndex={1} multiple>
        <NativeAccordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )

    expect(consoleWarnSpy).toHaveBeenLastCalledWith(
      "NativeAccordion: If 'multiple' is passed, then 'index' or 'defaultIndex' must be an array.",
    )

    consoleWarnSpy.mockRestore()
  })
})
