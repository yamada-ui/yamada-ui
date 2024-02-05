import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { a11y, render, screen, fireEvent } from "@yamada-ui/test"
import {
  Accordion,
  AccordionItem,
  AccordionLabel,
  AccordionPanel,
} from "../src"

describe("<Accordion />", () => {
  test("Accordion renders correctly", async () => {
    const { container } = render(
      <Accordion>
        <AccordionItem label="Accordion Label">
          This is an accordion item
        </AccordionItem>
      </Accordion>,
    )
    await a11y(container)
  })

  test("should render correctly with defaultIndex item expanded", () => {
    render(
      <Accordion isToggle defaultIndex={0}>
        <AccordionItem data-testid="accordion-item" label="Accordion Label 1">
          This is an accordion item
        </AccordionItem>
        <AccordionItem label="Accordion Label 2">
          This is an accordion item
        </AccordionItem>
      </Accordion>,
    )
    expect(screen.getByTestId("accordion-item")).toHaveAttribute(
      "aria-expanded",
      "true",
    )
    // toggle the accordion item
    fireEvent.click(
      screen.getByTestId("accordion-item").getElementsByTagName("button")[0],
    )
    expect(
      screen.getByTestId("accordion-item").getElementsByTagName("svg")[0],
    ).toHaveAttribute("aria-hidden", "true")
  })

  test("should show multiple items", () => {
    render(
      <Accordion defaultIndex={[0, 1]} isMultiple>
        <AccordionItem data-testid="accordion-item" label="Accordion Label 1">
          This is an accordion item
        </AccordionItem>
        <AccordionItem label="Accordion Label 2">
          This is an accordion item
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
        <AccordionItem
          data-testid="accordion-item"
          isDisabled
          label="Accordion Label 1"
        >
          This is an accordion item
        </AccordionItem>
      </Accordion>,
    )

    const item = screen.getByTestId("accordion-item")
    expect(item.getElementsByTagName("button")[0]).toHaveAttribute("disabled")
  })

  test("should render item with panel", () => {
    render(
      <Accordion>
        <AccordionItem label="Item">
          <AccordionPanel
            data-testid="accordion-panel"
            pt={3}
            bg={["orange.50", "orange.400"]}
          >
            This is an accordion item
          </AccordionPanel>
        </AccordionItem>
      </Accordion>,
    )

    expect(screen.getByTestId("accordion-panel")).toBeInTheDocument()
  })

  test("should render item with custom icon", () => {
    render(
      <Accordion
        icon={({ isExpanded }) => (
          <Icon
            data-testid="custom-icon"
            icon={!isExpanded ? faPlus : faMinus}
            color={["blackAlpha.800", "whiteAlpha.700"]}
          />
        )}
      >
        <AccordionItem data-testid="accordion-item" label="item">
          This is an accordion item
        </AccordionItem>
      </Accordion>,
    )
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "plus",
    )
    // toggle the accordion item
    fireEvent.click(
      screen.getByTestId("accordion-item").getElementsByTagName("button")[0],
    )
    expect(screen.getByTestId("custom-icon")).toHaveAttribute(
      "data-icon",
      "minus",
    )
  })

  test("should render item with custom label", () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionLabel
            data-testid="accordion-label"
            _expanded={{ bg: "orange.500", color: "white" }}
          >
            Custom Label
          </AccordionLabel>

          <AccordionPanel pt={3}>This is an accordion item</AccordionPanel>
        </AccordionItem>
      </Accordion>,
    )
    expect(screen.getByTestId("accordion-label")).toBeInTheDocument()
  })
})
