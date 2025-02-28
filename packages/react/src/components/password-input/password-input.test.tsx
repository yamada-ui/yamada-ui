import { useState } from "react"
import { a11y, render, screen, waitFor } from "../../../test"
import { EyeIcon, EyeOffIcon } from "../icon"
import { PasswordInput, StrengthMeter } from "./"

describe("<PasswordInput />", () => {
  test("PasswordInput renders correctly", async () => {
    await a11y(<PasswordInput placeholder="password" />)
  })

  test("Input type render correctly depending on the visibility", async () => {
    const { user } = render(
      <PasswordInput
        placeholder="password"
        visibilityIcon={{
          off: <EyeOffIcon />,
          on: <EyeIcon />,
        }}
      />,
    )

    const input = await screen.findByPlaceholderText("password")
    const button = await screen.findByRole("button")

    expect(input).toHaveAttribute("type", "password")

    await user.click(button)

    expect(input).toHaveAttribute("type", "text")
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
          placeholder="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <StrengthMeter value={getStrength(value)} />
      </>
    )
  }
  test("PasswordInputStrengthMeter renders correctly", async () => {
    await a11y(<StrengthMeter value={3} />)
  })

  test("Could render strength meter with difference value", async () => {
    const { user } = render(<ExampleWithPassWordInputStrengthMeter />)

    const passwordInput = await screen.findByPlaceholderText("password")
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
