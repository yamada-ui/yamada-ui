import type { AiryIdent } from "."
import { useState } from "react"
import { Airy } from "."
import { a11y, render, screen, waitFor } from "../../../test"

describe("<Airy />", () => {
  test("passes a11y test", async () => {
    await a11y(<Airy from="ON" to="OFF" />)
  })

  test("sets `displayName` correctly", () => {
    expect(Airy.displayName).toBe("Airy")
  })

  test("sets `className` correctly", () => {
    render(<Airy from="ON" to="OFF" />)
    expect(screen.getByText("ON")).toHaveClass("ui-airy")
  })

  test("renders HTML tag correctly", () => {
    render(<Airy from="ON" to="OFF" />)
    expect(screen.getByText("ON").tagName).toBe("BUTTON")
  })

  test("should render Airy with value and onChange", async () => {
    const TestComponent = () => {
      const [value, onChange] = useState<AiryIdent>("to")

      return <Airy from="ON" to="OFF" value={value} onChange={onChange} />
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
    const { container, user } = render(<Airy from="ON" readOnly to="OFF" />)

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-readonly")

    const onText = screen.getByText("ON")
    expect(onText).toBeInTheDocument()

    user.click(button)
    expect(onText).toBeInTheDocument()
  })

  test("should be disabled", () => {
    const { container, user } = render(<Airy disabled from="ON" to="OFF" />)

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-disabled")

    const onText = screen.getByText("ON")
    expect(onText).toBeInTheDocument()

    user.click(button)
    expect(onText).toBeInTheDocument()
  })
})
