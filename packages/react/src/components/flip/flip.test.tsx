import type { KeyframeIdent } from "../../core"
import { a11y, render, screen } from "#test"
import { useState } from "react"
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
})
