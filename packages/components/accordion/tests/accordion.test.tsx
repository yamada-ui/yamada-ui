import { a11y, render, screen, TestIcon } from "@yamada-ui/test"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "../src"

describe("<Accordion />", () => {
  test("Accordion renders correctly", async () => {
    await a11y(
      <Accordion>
        <AccordionItem button="Accordion Button">
          This is an accordion item
        </AccordionItem>
      </Accordion>,
    )
  })

  test("should render correctly with defaultIndex item expanded", async () => {
    render(
      <Accordion defaultIndex={0}>
        <AccordionItem button="Accordion Button 1">
          This is an accordion item 1
        </AccordionItem>
        <AccordionItem button="Accordion Button 2">
          This is an accordion item 2
        </AccordionItem>
      </Accordion>,
    )

    const button = await screen.findByRole("button", {
      name: /Accordion Button 1/i,
    })
    expect(button).toHaveAttribute("aria-expanded", "true")
    const paragraphs = await screen.findAllByRole("paragraph")
    expect(paragraphs[0]).toHaveTextContent("This is an accordion item 1")
  })

  test("should work correctly with isToggle", async () => {
    const { user } = render(
      <Accordion isToggle>
        <AccordionItem button="Accordion Button 1">
          This is an accordion item 1
        </AccordionItem>
        <AccordionItem button="Accordion Button 2">
          This is an accordion item 2
        </AccordionItem>
      </Accordion>,
    )

    const button = screen.getByRole("button", { name: /Accordion Button 1/i })

    await user.click(button)
    expect(button).toHaveAttribute("aria-expanded", "true")

    await user.click(button)
    expect(button).toHaveAttribute("aria-expanded", "false")
  })

  test("should show multiple items", async () => {
    const { user } = render(
      <Accordion defaultIndex={[0, 1]} isMultiple>
        <AccordionItem button="Accordion Button 1">
          This is an accordion item 1
        </AccordionItem>
        <AccordionItem button="Accordion Button 2">
          This is an accordion item 2
        </AccordionItem>
        <AccordionItem button="Accordion Button 3">
          This is an accordion item 3
        </AccordionItem>
      </Accordion>,
    )

    const item1 = screen.getByRole("button", { name: /Accordion Button 1/i })
    const item2 = screen.getByRole("button", { name: /Accordion Button 2/i })
    const item3 = screen.getByRole("button", { name: /Accordion Button 3/i })

    expect(item1).toHaveAttribute("aria-expanded", "true")
    expect(item2).toHaveAttribute("aria-expanded", "true")
    expect(item3).toHaveAttribute("aria-expanded", "false")

    await user.click(item3)
    expect(item3).toHaveAttribute("aria-expanded", "true")
  })

  test("should render a disabled item", () => {
    render(
      <Accordion>
        <AccordionItem isDisabled button="Accordion Button">
          This is an accordion item
        </AccordionItem>
      </Accordion>,
    )

    const button = screen.getByRole("button", { name: /Accordion Button/i })
    expect(button).toBeDisabled()
  })

  test("should render item with panel", async () => {
    render(
      <Accordion defaultIndex={0}>
        <AccordionItem button="Accordion Button">
          <AccordionPanel>This is an accordion item</AccordionPanel>
        </AccordionItem>
      </Accordion>,
    )

    const paragraph = await screen.findByRole("paragraph")

    expect(paragraph).toHaveTextContent("This is an accordion item")
  })

  test("should render item with custom icon", async () => {
    const { user } = render(
      <Accordion
        icon={({ isExpanded }) => (
          <TestIcon
            data-testid="custom-icon"
            data-icon={!isExpanded ? "plus" : "minus"}
          />
        )}
      >
        <AccordionItem button="Accordion Button">
          This is an accordion item
        </AccordionItem>
      </Accordion>,
    )
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "plus",
    )

    await user.click(screen.getByRole("button", { name: /Accordion Button/i }))
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "minus",
    )
  })

  test("should render item with custom icon in AccordionItem", async () => {
    const { user } = render(
      <Accordion>
        <AccordionItem
          button="Accordion Button"
          icon={({ isExpanded }) => (
            <TestIcon
              data-testid="custom-icon"
              data-icon={!isExpanded ? "plus" : "minus"}
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

    await user.click(screen.getByRole("button", { name: /Accordion Button/i }))
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "minus",
    )
  })

  test("should render item with custom icon in AccordionButton", async () => {
    const { user } = render(
      <Accordion>
        <AccordionItem>
          <AccordionButton
            icon={({ isExpanded }) => (
              <TestIcon
                data-testid="custom-icon"
                data-icon={!isExpanded ? "plus" : "minus"}
              />
            )}
          >
            Accordion Button
          </AccordionButton>
          This is an accordion item
        </AccordionItem>
      </Accordion>,
    )
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "plus",
    )

    await user.click(screen.getByRole("button", { name: /Accordion Button/i }))
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "minus",
    )
  })

  test("should render item with custom button", () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionButton>Accordion Button</AccordionButton>
          <AccordionPanel>This is an accordion item</AccordionPanel>
        </AccordionItem>
      </Accordion>,
    )
    expect(
      screen.getByRole("button", { name: /Accordion Button/i }),
    ).toBeInTheDocument()
  })

  test("should render button with function button", async () => {
    const { user } = render(
      <Accordion>
        <AccordionItem
          button={({ isExpanded, isDisabled }) => {
            if (isDisabled) return <p>Is disabled</p>

            if (isExpanded) return <p>Is expanded</p>
            else return <p>Not expanded</p>
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
        <AccordionItem button="Accordion Button 1">
          This is an accordion item 1
        </AccordionItem>
        <AccordionItem button="Accordion Button 2">
          This is an accordion item 2
        </AccordionItem>
        <AccordionItem button="Accordion Button 3">
          This is an accordion item 3
        </AccordionItem>
      </Accordion>,
    )

    const item1 = screen.getByRole("button", { name: /Accordion Button 1/i })
    const item2 = screen.getByRole("button", { name: /Accordion Button 2/i })
    const item3 = screen.getByRole("button", { name: /Accordion Button 3/i })

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
        <AccordionItem button="Accordion Button 1">
          This is an accordion item 1
        </AccordionItem>
        <AccordionItem button="Accordion Button 2">
          This is an accordion item 2
        </AccordionItem>
        <AccordionItem button="Accordion Button 3">
          This is an accordion item 3
        </AccordionItem>
      </Accordion>,
    )

    const item1 = screen.getByRole("button", { name: /Accordion Button 1/i })
    const item2 = screen.getByRole("button", { name: /Accordion Button 2/i })
    const item3 = screen.getByRole("button", { name: /Accordion Button 3/i })

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
        <AccordionItem button="Accordion Button 1">
          This is an accordion item 1
        </AccordionItem>
        <AccordionItem button="Accordion Button 2">
          This is an accordion item 2
        </AccordionItem>
        <AccordionItem button="Accordion Button 3">
          This is an accordion item 3
        </AccordionItem>
      </Accordion>,
    )

    const item1 = screen.getByRole("button", { name: /Accordion Button 1/i })
    const item3 = screen.getByRole("button", { name: /Accordion Button 3/i })

    await user.click(item3)
    expect(item3).toHaveFocus()

    await user.keyboard("{Home>}")
    expect(item1).toHaveFocus()
  })

  test("focus moves correctly on End", async () => {
    const { user } = render(
      <Accordion>
        <AccordionItem button="Accordion Button 1">
          This is an accordion item 1
        </AccordionItem>
        <AccordionItem button="Accordion Button 2">
          This is an accordion item 2
        </AccordionItem>
        <AccordionItem button="Accordion Button 3">
          This is an accordion item 3
        </AccordionItem>
      </Accordion>,
    )

    const item1 = screen.getByRole("button", { name: /Accordion Button 1/i })
    const item3 = screen.getByRole("button", { name: /Accordion Button 3/i })

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
        <AccordionItem button="Accordion Button">
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
        <AccordionItem button="Accordion Button">
          This is an accordion item
        </AccordionItem>
      </Accordion>,
    )

    expect(consoleWarnSpy).toHaveBeenCalledOnce()

    consoleWarnSpy.mockRestore()
  })
})
