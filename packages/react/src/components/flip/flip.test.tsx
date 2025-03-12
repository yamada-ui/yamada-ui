import type { FlipIdent } from "./"
import { useState } from "react"
import { a11y, render, waitFor } from "../../../test"
import { noop } from "../../utils"
import { BoxIcon } from "../icon"
import { Flip } from "./"

describe("<Flip />", () => {
  test("passes a11y test", () => {
    a11y(<Flip from={<p>ON</p>} to={<p>OFF</p>} />)
  })

  test("should render Flip with value and onChange", async () => {
    const TestComponent = () => {
      const [value, onChange] = useState<FlipIdent>("to")

      return (
        <Flip
          from={<BoxIcon />}
          to={<BoxIcon />}
          value={value}
          onChange={onChange}
        />
      )
    }

    const { container, user } = render(<TestComponent />)

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-value", "to")

    await user.click(button)

    await waitFor(() => {
      expect(button).toHaveAttribute("data-value", "from")
    })
  })

  test("should be read only", () => {
    const { container, user } = render(
      <Flip from={<BoxIcon />} readOnly to={<BoxIcon />} />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-value", "from")

    user.click(button)
    expect(button).toHaveAttribute("data-value", "from")
  })

  test("should be disabled", () => {
    const { container, user } = render(
      <Flip disabled from={<BoxIcon />} to={<BoxIcon />} />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-disabled")
    expect(button).toHaveAttribute("data-value", "from")

    user.click(button)

    expect(button).toHaveAttribute("data-value", "from")
  })

  test("should be render Flip with orientation", () => {
    const { container } = render(
      <Flip
        disabled
        from={<BoxIcon />}
        orientation="vertical"
        to={<BoxIcon />}
      />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveClass("ui-flip__vertical")
  })

  test("should warn when dimensions of from element and to element don't match", () => {
    const mockElementDimensions = (
      height: { from: number; to: number },
      width: { from: number; to: number },
    ) => {
      Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
        configurable: true,
        get() {
          return this.className.includes("ui-flip__from")
            ? height.from
            : height.to
        },
      })

      Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
        configurable: true,
        get() {
          return this.className.includes("ui-flip__from")
            ? width.from
            : width.to
        },
      })
    }

    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    mockElementDimensions({ from: 16, to: 32 }, { from: 16, to: 32 })

    render(
      <Flip
        from={<BoxIcon data-testid="test-icon" />}
        to={<BoxIcon data-testid="test-icon" />}
      />,
    )

    expect(consoleWarnSpy).toHaveBeenCalledOnce()

    consoleWarnSpy.mockRestore()
  })
})
