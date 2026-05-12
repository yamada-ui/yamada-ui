import { a11y, render, screen } from "#test"
import { noop } from "../../utils"
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

  test("should render correctly with defaultIndex item expanded", () => {
    render(<Accordion.Root defaultIndex={0} items={items} />)

    const button = screen.getByRole("button", { name: /Accordion Label 1/i })
    expect(button).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByText("This is an accordion item 1")).toBeInTheDocument()
  })

  test("should render a disabled item", () => {
    render(
      <Accordion.Root>
        <Accordion.Item button="Accordion Label" disabled index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    expect(
      screen.getByRole("button", { name: /Accordion Label/i }),
    ).toBeDisabled()
  })

  test("should render item with panel", () => {
    render(
      <Accordion.Root defaultIndex={0}>
        <Accordion.Item button="Accordion Label" index={0}>
          <Accordion.Panel>This is an accordion item</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    )

    expect(screen.getByText("This is an accordion item")).toBeInTheDocument()
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

  test("correct warnings should be issued when multiple and toggle", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    render(
      <Accordion.Root multiple toggle>
        <Accordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "Accordion: If 'multiple' is passed, 'toggle' will be ignored. Either remove 'toggle' or 'multiple' depending on whether you want multiple accordions visible or not",
    )

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

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "Accordion: If 'multiple' is passed, then 'index' or 'defaultIndex' must be an array.",
    )

    consoleWarnSpy.mockRestore()
  })
})
