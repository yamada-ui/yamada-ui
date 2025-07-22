import type { KeyframeIdent } from "../../core"
import { a11y, render, screen, waitFor } from "#test"
import { useState } from "react"
import { BoxIcon } from "../icon"
import { Rotate } from "./"

describe("<Rotate />", () => {
  test("renders component correctly", () => {
    a11y(<Rotate from="ON" to="OFF" />)
  })

  test("sets `displayName` correctly", () => {
    expect(Rotate.displayName).toBe("Rotate")
  })

  test("sets `className` correctly", () => {
    render(<Rotate from="ON" to="OFF" />)
    expect(screen.getByText("ON")).toHaveClass("ui-rotate")
  })

  test("renders HTML tag correctly", () => {
    render(<Rotate from="ON" to="OFF" />)
    expect(screen.getByText("ON").tagName).toBe("BUTTON")
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
      <Rotate from={<BoxIcon />} readOnly to={<BoxIcon />} />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-value", "from")

    user.click(button)
    expect(button).toHaveAttribute("data-value", "from")
  })

  test("should be disabled", () => {
    const { container, user } = render(
      <Rotate disabled from={<BoxIcon />} to={<BoxIcon />} />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-disabled")
    expect(button).toHaveAttribute("data-value", "from")

    user.click(button)

    expect(button).toHaveAttribute("data-value", "from")
  })
})
