import type { KeyframeIdent } from "../../core"
import { page, render } from "#test/browser"
import { useState } from "react"
import { noop } from "../../utils"
import { BoxIcon } from "../icon"
import { Flip } from "./"

describe("<Flip />", () => {
  test("toggles `data-value` on user click", async () => {
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

    const button = page.getByRole("button")
    await expect.element(button).toHaveAttribute("data-value", "to")

    await user.click(button)

    await expect.element(button).toHaveAttribute("data-value", "from")
  })

  test("does not toggle when `readOnly`", async () => {
    const { user } = await render(
      <Flip from={<BoxIcon />} readOnly to={<BoxIcon />} />,
    )

    const button = page.getByRole("button")
    await expect.element(button).toHaveAttribute("data-value", "from")

    await user.click(button)
    await expect.element(button).toHaveAttribute("data-value", "from")
  })

  test("does not toggle when `disabled`", async () => {
    const { user } = await render(
      <Flip disabled from={<BoxIcon />} to={<BoxIcon />} />,
    )

    const button = page.getByRole("button")
    await expect.element(button).toHaveAttribute("data-value", "from")

    await expect(user.click(button, { timeout: 200 })).rejects.toThrow(
      /Timeout/,
    )
    await expect.element(button).toHaveAttribute("data-value", "from")
  })

  test("warns when dimensions of `from` and `to` elements don't match", async () => {
    const originalHeight = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      "offsetHeight",
    )
    const originalWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      "offsetWidth",
    )
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    try {
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

      await render(
        <Flip
          from={<BoxIcon data-testid="test-icon" />}
          to={<BoxIcon data-testid="test-icon" />}
        />,
      )

      expect(consoleWarnSpy).toHaveBeenCalledExactlyOnceWith(
        'Flip: "from" element (width: 16px, height: 16px) does not match "to" element (width: 32px, height: 32px). Please ensure both elements have the same dimensions.',
      )
    } finally {
      consoleWarnSpy.mockRestore()
      if (originalHeight)
        Object.defineProperty(
          HTMLElement.prototype,
          "offsetHeight",
          originalHeight,
        )
      if (originalWidth)
        Object.defineProperty(
          HTMLElement.prototype,
          "offsetWidth",
          originalWidth,
        )
    }
  })
})
