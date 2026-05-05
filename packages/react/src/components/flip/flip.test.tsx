import type { KeyframeIdent } from "../../core"
import { useState } from "react"
import { a11y, render, screen } from "#test"
import { noop } from "../../utils"
import { BoxIcon } from "../icon"
import { Flip } from "./"

describe("<Flip />", () => {
  test("renders component correctly", async () => {
    await a11y(<Flip from="ON" to="OFF" />)
  })

  test("applies custom `aria-label`", () => {
    render(<Flip aria-label="Toggle icon" from="ON" to="OFF" />)
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Toggle icon",
    )
  })

  test("sets `className` correctly", () => {
    render(<Flip from="ON" to="OFF" />)
    const root = screen.getByText("ON").parentElement
    expect(root).toHaveClass("ui-flip__root")
    expect(screen.getByText("ON")).toHaveClass(
      "ui-flip__item",
      "ui-flip__item--from",
    )
    expect(screen.getByText("OFF")).toHaveClass(
      "ui-flip__item",
      "ui-flip__item--to",
    )
  })

  test("renders with orientation", () => {
    render(
      <Flip
        disabled
        from={<BoxIcon />}
        orientation="vertical"
        to={<BoxIcon />}
      />,
    )
    expect(screen.getByRole("button")).toHaveAttribute(
      "data-orientation",
      "vertical",
    )
  })

  test("respects controlled `value`", () => {
    const TestComponent = () => {
      const [value, onChange] = useState<KeyframeIdent>("to")

      return (
        <Flip
          from={<BoxIcon />}
          to={<BoxIcon />}
          value={value}
          onChange={onChange}
        />
      )
    }

    render(<TestComponent />)
    expect(screen.getByRole("button")).toHaveAttribute("data-value", "to")
  })

  test("renders as disabled", () => {
    render(<Flip disabled from={<BoxIcon />} to={<BoxIcon />} />)
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute("data-disabled")
    expect(button).toHaveAttribute("data-value", "from")
  })

  test("warns when dimensions of `from` and `to` elements don't match", () => {
    const originalHeight = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      "offsetHeight",
    )
    const originalWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      "offsetWidth",
    )

    Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
      configurable: true,
      get() {
        return this.className.includes("ui-flip__item--from") ? 16 : 32
      },
    })
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      get() {
        return this.className.includes("ui-flip__item--from") ? 16 : 32
      },
    })

    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    render(
      <Flip
        from={<BoxIcon data-testid="test-icon" />}
        to={<BoxIcon data-testid="test-icon" />}
      />,
    )

    expect(consoleWarnSpy).toHaveBeenCalledExactlyOnceWith(
      'Flip: "from" element (width: 16px, height: 16px) does not match "to" element (width: 32px, height: 32px). Please ensure both elements have the same dimensions.',
    )

    consoleWarnSpy.mockRestore()
    if (originalHeight)
      Object.defineProperty(
        HTMLElement.prototype,
        "offsetHeight",
        originalHeight,
      )
    if (originalWidth)
      Object.defineProperty(HTMLElement.prototype, "offsetWidth", originalWidth)
  })
})
