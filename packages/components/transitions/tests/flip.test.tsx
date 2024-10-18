import type { AiryIdent } from "../src"
import { Apple, Cherry } from "@yamada-ui/lucide"
import { a11y, render, waitFor } from "@yamada-ui/test"
import { useState } from "react"
import { Flip } from "../src"

describe("<Flip />", () => {
  test("passes a11y test", () => {
    a11y(<Flip from={<p>ON</p>} to={<p>OFF</p>} />)
  })

  test("should render Flip with value and onChange", async () => {
    const TestComponent = () => {
      const [value, onChange] = useState<AiryIdent>("to")

      return (
        <Flip
          from={<Apple />}
          to={<Cherry />}
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
      <Flip from={<Apple />} isReadOnly to={<Cherry />} />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-value", "from")

    user.click(button)
    expect(button).toHaveAttribute("data-value", "from")
  })

  test("should be disabled", () => {
    const { container, user } = render(
      <Flip from={<Apple />} isDisabled to={<Cherry />} />,
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
        from={<Apple />}
        isDisabled
        orientation="vertical"
        to={<Cherry />}
      />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveClass("ui-flip__vertical")
  })
})
