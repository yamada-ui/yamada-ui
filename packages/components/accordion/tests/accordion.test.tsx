import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { Text } from "@yamada-ui/react"
import { a11y, render, screen } from "@yamada-ui/test"
import {
  Accordion,
  AccordionItem,
  AccordionLabel,
  AccordionPanel,
} from "../src"

describe("<Accordion />", () => {
  test("Accordion renders correctly", async () => {
    await a11y(
      <Accordion>
        <AccordionItem label="Accordion Label">
          This is an accordion item
        </AccordionItem>
      </Accordion>,
    )
  })

  test("should render correctly with defaultIndex item expanded", () => {
    render(
      <Accordion defaultIndex={0}>
        <AccordionItem label="Accordion Label 1">
          This is an accordion item 1
        </AccordionItem>
        <AccordionItem label="Accordion Label 2">
          This is an accordion item 2
        </AccordionItem>
      </Accordion>,
    )

    expect(screen.getByRole("paragraph")).toHaveTextContent(
      "This is an accordion item 1",
    )
  })

  test("should render a disabled item", () => {
    render(
      <Accordion>
        <AccordionItem isDisabled label="Accordion Label">
          This is an accordion item
        </AccordionItem>
      </Accordion>,
    )

    const button = screen.getByRole("button", { name: /Accordion Label/i })
    expect(button).toBeDisabled()
  })

  test("should render item with panel", () => {
    render(
      <Accordion defaultIndex={0}>
        <AccordionItem label="Accordion Label">
          <AccordionPanel>This is an accordion item</AccordionPanel>
        </AccordionItem>
      </Accordion>,
    )

    expect(screen.getByRole("paragraph")).toHaveTextContent(
      "This is an accordion item",
    )
  })

  test("should render item with custom icon", async () => {
    const { user } = render(
      <Accordion
        icon={({ isExpanded }) => (
          <Icon
            data-testid="custom-icon"
            icon={!isExpanded ? faPlus : faMinus}
            color={["blackAlpha.800", "whiteAlpha.700"]}
          />
        )}
      >
        <AccordionItem label="Accordion Label">
          This is an accordion item
        </AccordionItem>
      </Accordion>,
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
      <Accordion>
        <AccordionItem
          label="Accordion Label"
          icon={({ isExpanded }) => (
            <Icon
              data-testid="custom-icon"
              icon={!isExpanded ? faPlus : faMinus}
              color={["blackAlpha.800", "whiteAlpha.700"]}
            />
          )}
        >
          This is an accordion item
        </AccordionItem>
      </Accordion>,
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

  test("should render item with custom icon in AccordionLabel", async () => {
    const { user } = render(
      <Accordion>
        <AccordionItem>
          <AccordionLabel
            icon={({ isExpanded }) => (
              <Icon
                data-testid="custom-icon"
                icon={!isExpanded ? faPlus : faMinus}
                color={["blackAlpha.800", "whiteAlpha.700"]}
              />
            )}
          >
            Accordion Label
          </AccordionLabel>
          This is an accordion item
        </AccordionItem>
      </Accordion>,
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
      <Accordion>
        <AccordionItem>
          <AccordionLabel>Accordion Label</AccordionLabel>
          <AccordionPanel>This is an accordion item</AccordionPanel>
        </AccordionItem>
      </Accordion>,
    )
    expect(
      screen.getByRole("button", { name: /Accordion Label/i }),
    ).toBeInTheDocument()
  })

  test("should render label with function label", async () => {
    const { user } = render(
      <Accordion>
        <AccordionItem
          label={({ isExpanded, isDisabled }) => {
            if (isDisabled) return <Text>Is disabled</Text>

            if (isExpanded) return <Text>Is expanded</Text>
            else return <Text>Not expanded</Text>
          }}
        >
          This is an accordion item
        </AccordionItem>
      </Accordion>,
    )

    const button = screen.getByRole("button", { name: /Not expanded/i })
    expect(button).toBeInTheDocument()

    await user.click(button)
    expect(button).toHaveTextContent("Is expanded")
  })

  test("focus moves correctly on ArrowDown", async () => {
    const { user } = render(
      <Accordion>
        <AccordionItem label="Accordion Label 1">
          This is an accordion item 1
        </AccordionItem>
        <AccordionItem label="Accordion Label 2">
          This is an accordion item 2
        </AccordionItem>
        <AccordionItem label="Accordion Label 3">
          This is an accordion item 3
        </AccordionItem>
      </Accordion>,
    )

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
    const { user } = render(
      <Accordion>
        <AccordionItem label="Accordion Label 1">
          This is an accordion item 1
        </AccordionItem>
        <AccordionItem label="Accordion Label 2">
          This is an accordion item 2
        </AccordionItem>
        <AccordionItem label="Accordion Label 3">
          This is an accordion item 3
        </AccordionItem>
      </Accordion>,
    )

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
    const { user } = render(
      <Accordion>
        <AccordionItem label="Accordion Label 1">
          This is an accordion item 1
        </AccordionItem>
        <AccordionItem label="Accordion Label 2">
          This is an accordion item 2
        </AccordionItem>
        <AccordionItem label="Accordion Label 3">
          This is an accordion item 3
        </AccordionItem>
      </Accordion>,
    )

    const item1 = screen.getByRole("button", { name: /Accordion Label 1/i })
    const item3 = screen.getByRole("button", { name: /Accordion Label 3/i })

    await user.click(item3)
    expect(item3).toHaveFocus()

    await user.keyboard("{Home>}")
    expect(item1).toHaveFocus()
  })

  test("focus moves correctly on End", async () => {
    const { user } = render(
      <Accordion>
        <AccordionItem label="Accordion Label 1">
          This is an accordion item 1
        </AccordionItem>
        <AccordionItem label="Accordion Label 2">
          This is an accordion item 2
        </AccordionItem>
        <AccordionItem label="Accordion Label 3">
          This is an accordion item 3
        </AccordionItem>
      </Accordion>,
    )

    const item1 = screen.getByRole("button", { name: /Accordion Label 1/i })
    const item3 = screen.getByRole("button", { name: /Accordion Label 3/i })

    await user.click(item1)
    expect(item1).toHaveFocus()

    await user.keyboard("{End>}")
    expect(item3).toHaveFocus()
  })

  test("correct warnings should be issued when isMultiple and isToggle", () => {
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {})

    render(
      <Accordion isMultiple isToggle>
        <AccordionItem label="Accordion Label">
          This is an accordion item
        </AccordionItem>
      </Accordion>,
    )

    expect(consoleWarnSpy).toHaveBeenCalledOnce()

    consoleWarnSpy.mockRestore()
  })

  test("correct warnings should be issued when isMultiple and defaultIndex is not array", () => {
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {})

    render(
      <Accordion isMultiple defaultIndex={1}>
        <AccordionItem label="Accordion Label">
          This is an accordion item
        </AccordionItem>
      </Accordion>,
    )

    expect(consoleWarnSpy).toHaveBeenCalledOnce()

    consoleWarnSpy.mockRestore()
  })
})
