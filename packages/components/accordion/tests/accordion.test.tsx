import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
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
      <Accordion isToggle defaultIndex={0}>
        <AccordionItem label="Accordion Label 1">
          This is an accordion item 1
        </AccordionItem>
        <AccordionItem label="Accordion Label 2">
          This is an accordion item 2
        </AccordionItem>
      </Accordion>,
    )

    const button = screen.getByRole("button", { name: /Accordion Label 1/i })
    expect(button).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByRole("paragraph")).toHaveTextContent(
      "This is an accordion item 1",
    )
  })

  test("should show multiple items", () => {
    render(
      <Accordion defaultIndex={[0, 1]} isMultiple>
        <AccordionItem label="Accordion Label 1">
          This is an accordion item 1
        </AccordionItem>
        <AccordionItem label="Accordion Label 2">
          This is an accordion item 2
        </AccordionItem>
      </Accordion>,
    )

    screen.getAllByRole("button").forEach((element) => {
      expect(element).toHaveAttribute("aria-expanded", "true")
    })
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
})
