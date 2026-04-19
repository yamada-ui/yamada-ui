import type { KeyframeIdent } from "../../core"
import { a11y, page, render } from "#test/browser"
import { useState } from "react"
import { noop } from "../../utils"
import { BoxIcon } from "../icon"
import { Flip } from "./"

describe("<Flip />", () => {
  test("renders component correctly", async () => {
    await a11y(<Flip from="ON" to="OFF" />)
  })

  test("applies custom `aria-label`", async () => {
    await render(<Flip aria-label="Toggle icon" from="ON" to="OFF" />)

    await expect
      .element(page.getByRole("button"))
      .toHaveAttribute("aria-label", "Toggle icon")
  })

  test("sets `displayName` correctly", () => {
    expect(Flip.displayName).toBe("FlipRoot")
  })

  test("sets `className` correctly", async () => {
    await render(<Flip from="ON" to="OFF" />)
    await expect
      .element(page.getByText("ON").element().parentElement)
      .toHaveClass("ui-flip__root")
    await expect
      .element(page.getByText("ON"))
      .toHaveClass("ui-flip__item", "ui-flip__item--from")
    await expect
      .element(page.getByText("OFF"))
      .toHaveClass("ui-flip__item", "ui-flip__item--to")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Flip from="ON" to="OFF" />)
    expect(page.getByText("ON").element().parentElement?.tagName).toBe("BUTTON")
  })

  test("should render Flip with value and onChange", async () => {
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

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button").element() as HTMLButtonElement
    expect(button).toHaveAttribute("data-value", "to")

    await user.click(button)

    await vi.waitFor(() => {
      expect(button).toHaveAttribute("data-value", "from")
    })
  })

  test("should be read only", async () => {
    const { user } = await render(
      <Flip from={<BoxIcon />} readOnly to={<BoxIcon />} />,
    )

    const button = page.getByRole("button").element() as HTMLButtonElement
    expect(button).toHaveAttribute("data-value", "from")

    await user.click(button)
    expect(button).toHaveAttribute("data-value", "from")
  })

  test("should be disabled", async () => {
    await render(<Flip disabled from={<BoxIcon />} to={<BoxIcon />} />)

    const button = page.getByRole("button").element() as HTMLButtonElement
    expect(button).toHaveAttribute("data-disabled")
    expect(button).toHaveAttribute("data-value", "from")

    button.dispatchEvent(new MouseEvent("click", { bubbles: true }))

    expect(button).toHaveAttribute("data-value", "from")
  })

  test("should be render Flip with orientation", async () => {
    await render(
      <Flip
        disabled
        from={<BoxIcon />}
        orientation="vertical"
        to={<BoxIcon />}
      />,
    )

    const button = page.getByRole("button").element() as HTMLButtonElement
    expect(button).toHaveAttribute("data-orientation", "vertical")
  })

  test("should warn when dimensions of from element and to element don't match", async () => {
    const mockElementDimensions = (
      height: { from: number; to: number },
      width: { from: number; to: number },
    ) => {
      Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
        configurable: true,
        get() {
          return this.className.includes("ui-flip__item--from")
            ? height.from
            : height.to
        },
      })

      Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
        configurable: true,
        get() {
          return this.className.includes("ui-flip__item--from")
            ? width.from
            : width.to
        },
      })
    }

    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    mockElementDimensions({ from: 16, to: 32 }, { from: 16, to: 32 })

    await render(
      <Flip
        from={<BoxIcon data-testid="test-icon" />}
        to={<BoxIcon data-testid="test-icon" />}
      />,
    )

    expect(consoleWarnSpy).toHaveBeenCalledExactlyOnceWith(
      'Flip: "from" element (width: 16px, height: 16px) does not match "to" element (width: 32px, height: 32px). Please ensure both elements have the same dimensions.',
    )

    consoleWarnSpy.mockRestore()
  })
})
