import type { KeyframeIdent } from "../../core"
import { a11y, page, render } from "#test/browser"
import { useState } from "react"
import { Airy } from "."

describe("<Airy />", () => {
  test("renders component correctly", async () => {
    await a11y(<Airy from="ON" to="OFF" />)
  })

  test("applies custom `aria-label`", async () => {
    await render(<Airy aria-label="Toggle navigation" from="ON" to="OFF" />)

    await expect
      .element(page.getByRole("button"))
      .toHaveAttribute("aria-label", "Toggle navigation")
  })

  test("sets `displayName` correctly", () => {
    expect(Airy.displayName).toBe("Airy")
  })

  test("sets `className` correctly", async () => {
    await render(<Airy from="ON" to="OFF" />)
    await expect.element(page.getByText("ON")).toHaveClass("ui-airy")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Airy from="ON" to="OFF" />)
    expect(page.getByText("ON").element().tagName).toBe("BUTTON")
  })

  test("should render Airy with value and onChange", async () => {
    const TestComponent = () => {
      const [value, onChange] = useState<KeyframeIdent>("to")

      return <Airy from="ON" to="OFF" value={value} onChange={onChange} />
    }

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button")
    await expect.element(button).toHaveAttribute("data-value", "to")

    await user.click(button)

    await vi.waitFor(() => {
      expect(button.element()).toHaveAttribute("data-value", "from")
    })
  })

  test("should be read only", async () => {
    const { user } = await render(<Airy from="ON" readOnly to="OFF" />)

    const button = page.getByRole("button")
    await expect.element(button).toHaveAttribute("data-readonly")

    const onText = page.getByText("ON")
    await expect.element(onText).toBeVisible()

    await user.click(button)
    await expect.element(onText).toBeVisible()
  })

  test("should be disabled", async () => {
    await render(<Airy disabled from="ON" to="OFF" />)

    const button = page.getByRole("button")
    await expect.element(button).toHaveAttribute("data-disabled")
    await expect.element(button).toBeDisabled()

    await expect.element(page.getByText("ON")).toBeVisible()
  })
})
