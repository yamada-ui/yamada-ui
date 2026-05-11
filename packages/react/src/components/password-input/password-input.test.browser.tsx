import { useState } from "react"
import { page, render } from "#test/browser"
import { EyeIcon, EyeOffIcon } from "../icon"
import { PasswordInput, StrengthMeter } from "./"

describe("<PasswordInput />", () => {
  test("input type toggles between password and text on visibility button click", async () => {
    const { user } = await render(
      <PasswordInput
        placeholder="password"
        visibilityIcon={{
          off: <EyeOffIcon />,
          on: <EyeIcon />,
        }}
      />,
    )

    const input = page.getByPlaceholder("password")
    const button = page.getByRole("button")

    await expect.element(input).toHaveAttribute("type", "password")

    await user.click(button)

    await expect.element(input).toHaveAttribute("type", "text")
  })
})

describe("<StrengthMeter />", () => {
  const ExampleWithPassWordInputStrengthMeter = ({
    defaultValue = "",
  }: { defaultValue?: string } = {}) => {
    const [value, setValue] = useState(defaultValue)

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

  test.each([
    ["aaaaaaa", 0],
    ["aaaaaaaa", 1],
    ["aaaaaaaaA", 2],
    ["aaaaaaaaA1", 3],
    ["aaaaaaaaA1!", 4],
  ])(
    "renders strength meter aria-valuenow when typing into the input (%s -> %i)",
    async (value, expected) => {
      const initial = value.slice(0, -1)
      const next = value.slice(-1)
      const { user } = await render(
        <ExampleWithPassWordInputStrengthMeter defaultValue={initial} />,
      )

      const passwordInput = page.getByPlaceholder("password")
      const strengthMeter = page.getByRole("meter")

      await user.type(passwordInput, next)
      await expect
        .element(strengthMeter)
        .toHaveAttribute("aria-valuenow", String(expected))
    },
  )
})
