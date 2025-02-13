import type { AiryIdent } from "./"
import { useState } from "react"
import { a11y, render, screen, waitFor } from "../../../test"
import { Airy } from "./"

describe("<Airy />", () => {
  test("passes a11y test", async () => {
    await a11y(<Airy from={<p>ON</p>} to={<p>OFF</p>} />)
  })

  test("should render Airy with value and onChange", async () => {
    const TestComponent = () => {
      const [value, onChange] = useState<AiryIdent>("to")

      return (
        <Airy
          from={<p>ON</p>}
          to={<p>OFF</p>}
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
      <Airy from={<p>ON</p>} readOnly to={<p>OFF</p>} />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-readonly")

    const onText = screen.getByText("ON")
    expect(onText).toBeInTheDocument()

    user.click(button)
    expect(onText).toBeInTheDocument()
  })

  test("should be disabled", () => {
    const { container, user } = render(
      <Airy disabled from={<p>ON</p>} to={<p>OFF</p>} />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-disabled")

    const onText = screen.getByText("ON")
    expect(onText).toBeInTheDocument()

    user.click(button)
    expect(onText).toBeInTheDocument()
  })
})
