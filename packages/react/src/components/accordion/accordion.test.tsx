import type { ReactNode } from "react"
import { createRef } from "react"
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
  test.each(["root", "item", "button", "callback"] as const)(
    "resolves lazy icons supplied through the %s",
    (source) => {
      const ref = createRef<SVGSVGElement>()
      const icon = {
        $$typeof: Symbol.for("react.lazy"),
        _init: (payload: ReactNode) => payload,
        _payload: <svg ref={ref} data-testid="icon" />,
      } as unknown as ReactNode
      const callback = vi.fn(() => icon)

      render(
        <Accordion.Root
          defaultIndex={0}
          icon={source === "root" ? icon : undefined}
        >
          <Accordion.Item
            disabled
            icon={source === "item" ? icon : undefined}
            index={0}
          >
            <Accordion.Button
              icon={
                source === "callback"
                  ? callback
                  : source === "button"
                    ? icon
                    : undefined
              }
            >
              Accordion Label
            </Accordion.Button>
            <Accordion.Panel>Panel</Accordion.Panel>
          </Accordion.Item>
        </Accordion.Root>,
      )

      const element = screen.getByTestId("icon")

      expect(element).toHaveAttribute("aria-hidden", "true")
      expect(element).toHaveAttribute("aria-expanded", "true")
      expect(element).toHaveAttribute("aria-disabled", "true")
      expect(element).toHaveAttribute("role", "presentation")
      expect(element).toHaveClass("ui-accordion__icon")
      expect(ref.current).toBe(element)
      const expectedCalls = expect.arrayContaining([
        [{ disabled: true, expanded: true }],
      ])
      expect(callback.mock.calls).toStrictEqual(
        source === "callback" ? expectedCalls : [],
      )
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

    render(<Accordion.Root icon={icon} iconHidden items={items} />)

    expect(init).not.toHaveBeenCalled()
    expect(
      screen.getByRole("button", { name: "Accordion Label 1" }),
    ).toBeEnabled()
  })

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
