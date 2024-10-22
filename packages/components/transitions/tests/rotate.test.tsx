import type { AiryIdent } from "../src"
import { a11y, render, TestIcon, waitFor } from "@yamada-ui/test"
import { useState } from "react"
import { Rotate } from "../src"

describe("<Rotate />", () => {
  test("passes a11y test", () => {
    a11y(<Rotate from={<p>ON</p>} to={<p>OFF</p>} />)
  })

  test("should render Rotate with value and onChange", async () => {
    const TestComponent = () => {
      const [value, onChange] = useState<AiryIdent>("to")

      return (
        <Rotate
          from={<TestIcon />}
          to={<TestIcon />}
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
      <Rotate from={<TestIcon />} isReadOnly to={<TestIcon />} />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-value", "from")

    user.click(button)
    expect(button).toHaveAttribute("data-value", "from")
  })

  test("should be disabled", () => {
    const { container, user } = render(
      <Rotate from={<TestIcon />} isDisabled to={<TestIcon />} />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-disabled")
    expect(button).toHaveAttribute("data-value", "from")

    user.click(button)

    expect(button).toHaveAttribute("data-value", "from")
  })
})
