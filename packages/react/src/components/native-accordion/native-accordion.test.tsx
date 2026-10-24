import type { ReactNode } from "react"
import { createRef } from "react"
import { a11y, render, screen } from "#test"
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
  test.each(["root", "item", "button"] as const)(
    "resolves lazy icons supplied through the %s",
    (source) => {
      const ref = createRef<SVGSVGElement>()
      const icon = {
        $$typeof: Symbol.for("react.lazy"),
        _init: (payload: ReactNode) => payload,
        _payload: <svg ref={ref} data-testid="icon" />,
      } as unknown as ReactNode

      render(
        <NativeAccordion.Root icon={source === "root" ? icon : undefined}>
          <NativeAccordion.Item
            disabled
            icon={source === "item" ? icon : undefined}
          >
            <NativeAccordion.Button
              icon={source === "button" ? icon : undefined}
            >
              Accordion Label
            </NativeAccordion.Button>
            <NativeAccordion.Panel>Panel</NativeAccordion.Panel>
          </NativeAccordion.Item>
        </NativeAccordion.Root>,
      )

      const element = screen.getByTestId("icon")

      expect(element).toHaveAttribute("aria-hidden", "true")
      expect(element).toHaveAttribute("aria-disabled", "true")
      expect(element).toHaveAttribute("role", "presentation")
      expect(element).toHaveClass("ui-native-accordion__icon")
      expect(ref.current).toBe(element)
    },
  )

  test("does not resolve hidden lazy icons", () => {
    const init = vi.fn(() => {
      throw new Error("Hidden icon")
    })
    const icon = {
      $$typeof: Symbol.for("react.lazy"),
      _init: init,
      _payload: {},
    } as unknown as ReactNode

    render(<NativeAccordion.Root icon={icon} iconHidden items={items} />)

    expect(init).not.toHaveBeenCalled()
    expect(screen.getByText("Accordion Label 1")).toBeInTheDocument()
  })

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

    for (const item of renderedItems)
      expect(item).toHaveAttribute("name", generatedName)
  })

  test("preserves empty string `name` on all items", () => {
    const { container } = render(<NativeAccordion.Root name="" items={items} />)
    const renderedItems = Array.from(container.querySelectorAll("details"))

    for (const item of renderedItems) expect(item).toHaveAttribute("name", "")
  })
})
