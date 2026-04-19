import type { KeyframeIdent } from "../../core"
import { a11y, page, render } from "#test/browser"
import { useState } from "react"
import { vi } from "vitest"
import { BoxIcon } from "../icon"
import { Rotate } from "./"

describe("<Rotate />", () => {
  test("renders component correctly", async () => {
    await a11y(<Rotate from="ON" to="OFF" />)
  })

  test("applies custom `aria-label`", async () => {
    await render(<Rotate aria-label="Toggle icon" from="ON" to="OFF" />)

    await expect
      .element(page.getByRole("button"))
      .toHaveAttribute("aria-label", "Toggle icon")
  })

  test("sets `displayName` correctly", () => {
    expect(Rotate.displayName).toBe("Rotate")
  })

  test("sets `className` correctly", async () => {
    await render(<Rotate from="ON" to="OFF" />)
    await expect.element(page.getByText("ON")).toHaveClass("ui-rotate")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Rotate from="ON" to="OFF" />)
    expect(page.getByText("ON").element().tagName).toBe("BUTTON")
  })

  test("should render Rotate with value and onChange", async () => {
    const TestComponent = () => {
      const [value, onChange] = useState<KeyframeIdent>("to")

      return (
        <Rotate
          from={<BoxIcon />}
          to={<BoxIcon />}
          value={value}
          onChange={onChange}
        />
      )
    }

    const { container, user } = await render(<TestComponent />)

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-value", "to")

    await user.click(button)

    await vi.waitFor(() => {
      expect(button).toHaveAttribute("data-value", "from")
    })
  })

  test("should be read only", async () => {
    const { container } = await render(
      <Rotate from={<BoxIcon />} readOnly to={<BoxIcon />} />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-value", "from")

    button.click()
    expect(button).toHaveAttribute("data-value", "from")
  })

  test("should be disabled", async () => {
    const { container } = await render(
      <Rotate disabled from={<BoxIcon />} to={<BoxIcon />} />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-disabled")
    expect(button).toHaveAttribute("data-value", "from")

    button.click()

    expect(button).toHaveAttribute("data-value", "from")
  })
})
