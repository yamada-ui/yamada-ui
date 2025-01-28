import { useState } from "react"
import { a11y, render, screen, waitFor } from "../../../test"
import { EyeIcon, EyeOffIcon } from "../icon"
import { PasswordInput, PasswordInputStrengthMeter } from "./"

describe("<PasswordInput />", () => {
  test("PasswordInput renders correctly", async () => {
    await a11y(<PasswordInput placeholder="your password" />)
  })

  test("Icons render correctly depending on the visibility", async () => {
    const { user } = render(
      <PasswordInput
        placeholder="your password"
        visibilityIcon={{
          off: <EyeOffIcon data-testid="eyeOffIcon" />,
          on: <EyeIcon data-testid="eyeIcon" />,
        }}
      />,
    )

    const passwordInput = await screen.findByPlaceholderText("your password")
    await waitFor(() => expect(passwordInput).toBeVisible())
    const eyeIcon = await screen.findByTestId("eyeIcon")

    await waitFor(() => expect(eyeIcon).toBeVisible())

    await user.click(eyeIcon)
    const eyeOffIcon = await screen.findByTestId("eyeOffIcon")

    await waitFor(() => expect(eyeOffIcon).toBeVisible())
  })
})

describe("<PassWordInputStrengthMeter />", () => {
  const ExampleWithPassWordInputStrengthMeter = () => {
    const [value, setValue] = useState("")

    const getStrength = (password: string) => {
      let strength = 0

      if (password.length >= 8) strength++
      if (/[A-Z]/.test(password)) strength++
      if (/[0-9]/.test(password)) strength++
      if (/[^A-Za-z0-9]/.test(password)) strength++

      return strength
    }
    return (
      <>
        <PasswordInput
          placeholder="your password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <PasswordInputStrengthMeter value={getStrength(value)} />
      </>
    )
  }
  test("PasswordInputStrengthMeter renders correctly", async () => {
    await a11y(<PasswordInputStrengthMeter value={3} />)
  })

  test("Could render strength meter with difference value", async () => {
    const { user } = render(<ExampleWithPassWordInputStrengthMeter />)

    const passwordInput = await screen.findByPlaceholderText("your password")
    const strengthMeter = await screen.findByRole("meter")

    await user.type(passwordInput, "aaaaaaa")
    await waitFor(() =>
      expect(strengthMeter).toHaveAttribute("aria-valuenow", "0"),
    )
    await user.type(passwordInput, "a")
    await waitFor(() =>
      expect(strengthMeter).toHaveAttribute("aria-valuenow", "1"),
    )
    await user.type(passwordInput, "A")
    await waitFor(() =>
      expect(strengthMeter).toHaveAttribute("aria-valuenow", "2"),
    )
    await user.type(passwordInput, "1")
    await waitFor(() =>
      expect(strengthMeter).toHaveAttribute("aria-valuenow", "3"),
    )
    await user.type(passwordInput, "!")
    await waitFor(() =>
      expect(strengthMeter).toHaveAttribute("aria-valuenow", "4"),
    )
  })
})
