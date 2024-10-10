import type { AiryIdent } from "../src"
import { a11y, render, screen, waitFor } from "@yamada-ui/test"
import { useState } from "react"
import { Airy } from "../src"

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
      <Airy from={<p>ON</p>} isReadOnly to={<p>OFF</p>} />,
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
      <Airy from={<p>ON</p>} isDisabled to={<p>OFF</p>} />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-disabled")

    const onText = screen.getByText("ON")
    expect(onText).toBeInTheDocument()

    user.click(button)
    expect(onText).toBeInTheDocument()
  })
})
