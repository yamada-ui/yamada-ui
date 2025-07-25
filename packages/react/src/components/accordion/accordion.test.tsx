import { a11y, render, screen } from "#test"
import { noop } from "../../utils"
import { BoxIcon } from "../icon"
import { Accordion } from "./"

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

describe("<Accordion />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Accordion.Root>
        <Accordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Accordion.Root.displayName).toBe("AccordionRoot")
    expect(Accordion.Item.displayName).toBe("AccordionItem")
    expect(Accordion.Button.displayName).toBe("AccordionButton")
    expect(Accordion.Panel.displayName).toBe("AccordionPanel")
  })

  test("sets `className` correctly", () => {
    render(
      <Accordion.Root data-testid="root">
        <Accordion.Item data-testid="item" button="Accordion Label" index={0}>
          <Accordion.Panel data-testid="panel">
            This is an accordion item
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    )
    expect(screen.getByTestId("root")).toHaveClass("ui-accordion__root")
    expect(screen.getByTestId("item")).toHaveClass("ui-accordion__item")
    expect(screen.getByTestId("panel")).toHaveClass("ui-accordion__panel")
    expect(
      screen.getByRole("button", { name: /Accordion Label/i }),
    ).toHaveClass("ui-accordion__button")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Accordion.Root data-testid="root">
        <Accordion.Item data-testid="item" button="Accordion Label" index={0}>
          <Accordion.Panel data-testid="panel">
            This is an accordion item
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    )
    expect(screen.getByTestId("root").tagName).toBe("DIV")
    const item = screen.getByTestId("item")
    expect(item.tagName).toBe("DIV")
    expect(item.children[0]?.tagName).toBe("H3")
    expect(screen.getByTestId("panel").tagName).toBe("DIV")
    expect(
      screen.getByRole("button", { name: /Accordion Label/i }).tagName,
    ).toBe("BUTTON")
  })

  test("should render correctly with defaultIndex item expanded", async () => {
    render(<Accordion.Root defaultIndex={0} items={items} />)

    const button = await screen.findByRole("button", {
      name: /Accordion Label 1/i,
    })
    expect(button).toHaveAttribute("aria-expanded", "true")
    const paragraphs = await screen.findAllByRole("paragraph")
    expect(paragraphs[0]).toHaveTextContent("This is an accordion item 1")
  })

  test("should work correctly with toggle", async () => {
    const { user } = render(<Accordion.Root items={items} toggle />)

    const button = screen.getByRole("button", { name: /Accordion Label 1/i })

    await user.click(button)
    expect(button).toHaveAttribute("aria-expanded", "true")

    await user.click(button)
    expect(button).toHaveAttribute("aria-expanded", "false")
  })

  test("should show multiple items", async () => {
    const { user } = render(
      <Accordion.Root defaultIndex={[0, 1]} items={items} multiple />,
    )

    const item1 = screen.getByRole("button", { name: /Accordion Label 1/i })
    const item2 = screen.getByRole("button", { name: /Accordion Label 2/i })
    const item3 = screen.getByRole("button", { name: /Accordion Label 3/i })

    expect(item1).toHaveAttribute("aria-expanded", "true")
    expect(item2).toHaveAttribute("aria-expanded", "true")
    expect(item3).toHaveAttribute("aria-expanded", "false")

    await user.click(item3)
    expect(item3).toHaveAttribute("aria-expanded", "true")
  })

  test("should render a disabled item", () => {
    render(
      <Accordion.Root>
        <Accordion.Item button="Accordion Label" disabled index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    const button = screen.getByRole("button", { name: /Accordion Label/i })
    expect(button).toBeDisabled()
  })

  test("should render item with panel", async () => {
    render(
      <Accordion.Root defaultIndex={0}>
        <Accordion.Item button="Accordion Label" index={0}>
          <Accordion.Panel>This is an accordion item</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    )

    const paragraph = await screen.findByRole("paragraph")

    expect(paragraph).toHaveTextContent("This is an accordion item")
  })

  test("should render item with custom icon", async () => {
    const { user } = render(
      <Accordion.Root
        icon={({ expanded }) => (
          <BoxIcon
            data-icon={!expanded ? "plus" : "minus"}
            data-testid="custom-icon"
          />
        )}
      >
        <Accordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "plus",
    )

    await user.click(screen.getByRole("button", { name: /Accordion Label/i }))
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "minus",
    )
  })

  test("should render item with custom icon in AccordionItem", async () => {
    const { user } = render(
      <Accordion.Root>
        <Accordion.Item
          button="Accordion Label"
          icon={({ expanded }) => (
            <BoxIcon
              data-icon={!expanded ? "plus" : "minus"}
              data-testid="custom-icon"
            />
          )}
          index={0}
        >
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "plus",
    )

    await user.click(screen.getByRole("button", { name: /Accordion Label/i }))
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "minus",
    )
  })

  test("should render item with custom icon in AccordionButton", async () => {
    const { user } = render(
      <Accordion.Root>
        <Accordion.Item index={0}>
          <Accordion.Button
            icon={({ expanded }) => (
              <BoxIcon
                data-icon={!expanded ? "plus" : "minus"}
                data-testid="custom-icon"
              />
            )}
          >
            Accordion Label
          </Accordion.Button>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "plus",
    )

    await user.click(screen.getByRole("button", { name: /Accordion Label/i }))
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "minus",
    )
  })

  test("should render item with custom label", () => {
    render(
      <Accordion.Root>
        <Accordion.Item index={0}>
          <Accordion.Button>Accordion Label</Accordion.Button>
          <Accordion.Panel>This is an accordion item</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    )
    expect(
      screen.getByRole("button", { name: /Accordion Label/i }),
    ).toBeInTheDocument()
  })

  test("should render label with function label", async () => {
    const { user } = render(
      <Accordion.Root>
        <Accordion.Item
          button={({ disabled, expanded }) => {
            if (disabled) return <p>Is disabled</p>

            if (expanded) return <p>Is expanded</p>
            else return <p>Not expanded</p>
          }}
          index={0}
        >
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    const button = screen.getByRole("button", { name: /Not expanded/i })
    expect(button).toBeInTheDocument()

    await user.click(button)
    expect(button).toHaveTextContent("Is expanded")
  })

  test("focus moves correctly on ArrowDown", async () => {
    const { user } = render(<Accordion.Root items={items} />)

    const item1 = screen.getByRole("button", { name: /Accordion Label 1/i })
    const item2 = screen.getByRole("button", { name: /Accordion Label 2/i })
    const item3 = screen.getByRole("button", { name: /Accordion Label 3/i })

    await user.click(item1)
    expect(item1).toHaveFocus()

    await user.keyboard("{ArrowDown>}")
    expect(item2).toHaveFocus()

    await user.keyboard("{ArrowDown>}")
    expect(item3).toHaveFocus()

    await user.keyboard("{ArrowDown>}")
    expect(item1).toHaveFocus()
  })

  test("focus moves correctly on ArrowUp", async () => {
    const { user } = render(<Accordion.Root items={items} />)

    const item1 = screen.getByRole("button", { name: /Accordion Label 1/i })
    const item2 = screen.getByRole("button", { name: /Accordion Label 2/i })
    const item3 = screen.getByRole("button", { name: /Accordion Label 3/i })

    await user.click(item1)
    expect(item1).toHaveFocus()

    await user.keyboard("{ArrowUp>}")
    expect(item3).toHaveFocus()

    await user.keyboard("{ArrowUp>}")
    expect(item2).toHaveFocus()
  })

  test("focus moves correctly on Home", async () => {
    const { user } = render(<Accordion.Root items={items} />)

    const item1 = screen.getByRole("button", { name: /Accordion Label 1/i })
    const item3 = screen.getByRole("button", { name: /Accordion Label 3/i })

    await user.click(item3)
    expect(item3).toHaveFocus()

    await user.keyboard("{Home>}")
    expect(item1).toHaveFocus()
  })

  test("focus moves correctly on End", async () => {
    const { user } = render(<Accordion.Root items={items} />)

    const item1 = screen.getByRole("button", { name: /Accordion Label 1/i })
    const item3 = screen.getByRole("button", { name: /Accordion Label 3/i })

    await user.click(item1)
    expect(item1).toHaveFocus()

    await user.keyboard("{End>}")
    expect(item3).toHaveFocus()
  })

  test("correct warnings should be issued when multiple and toggle", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    render(
      <Accordion.Root multiple toggle>
        <Accordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    expect(consoleWarnSpy).toHaveBeenCalledOnce()

    consoleWarnSpy.mockRestore()
  })

  test("correct warnings should be issued when multiple and defaultIndex is not array", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    render(
      <Accordion.Root defaultIndex={1} multiple>
        <Accordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    expect(consoleWarnSpy).toHaveBeenCalledOnce()

    consoleWarnSpy.mockRestore()
  })
})
