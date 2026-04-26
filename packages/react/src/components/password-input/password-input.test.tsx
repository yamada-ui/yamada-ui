import { useState } from "react"
import { a11y, page, render } from "#test/browser"
import { EyeIcon, EyeOffIcon } from "../icon"
import { PasswordInput, StrengthMeter } from "./"

describe("<PasswordInput />", () => {
  test("renders component correctly", async () => {
    await a11y(<PasswordInput placeholder="password" />)
  })

  test("sets `displayName` correctly", () => {
    expect(PasswordInput.name).toBe("PasswordInputRoot")
  })

  test("sets `className` correctly", async () => {
    await render(<PasswordInput placeholder="password" />)

    const input = page.getByPlaceholder("password")
    const button = page.getByRole("button")

    await expect.element(input).toHaveClass("ui-password-input__field")
    await expect.element(button).toHaveClass("ui-password-input__button")
    expect(input.element().parentElement).toHaveClass("ui-password-input__root")
  })

  test("renders HTML tag correctly", async () => {
    await render(<PasswordInput placeholder="password" />)

    const input = page.getByPlaceholder("password")
    const button = page.getByRole("button")

    expect(input.element().parentElement?.tagName).toBe("DIV")
    expect(input.element().tagName).toBe("INPUT")
    expect(button.element().tagName).toBe("BUTTON")
  })

  test("Input type render correctly depending on the visibility", async () => {
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

describe("<PassWordInputStrengthMeter />", () => {
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

  test("renders component correctly", async () => {
    await a11y(<StrengthMeter value={3} />)
  })

  test("sets `displayName` correctly", () => {
    expect(StrengthMeter.name).toBe("StrengthMeterRoot")
  })

  test("sets `className` correctly", async () => {
    await render(<StrengthMeter data-testid="strengthMeter" value={3} />)

    const strengthMeter = page.getByTestId("strengthMeter")

    await expect.element(strengthMeter).toHaveClass("ui-strength-meter__root")
    expect(strengthMeter.element().children[0]).toHaveClass(
      "ui-strength-meter__indicators",
    )
    expect(strengthMeter.element().children[0]?.children[0]).toHaveClass(
      "ui-strength-meter__indicator",
    )
  })

  test("renders HTML tag correctly", async () => {
    await render(<StrengthMeter data-testid="strengthMeter" value={3} />)

    const strengthMeter = page.getByTestId("strengthMeter").element()

    expect(strengthMeter.tagName).toBe("DIV")
    expect(strengthMeter.children[0]?.tagName).toBe("DIV")
    expect(strengthMeter.children[0]?.children[0]?.tagName).toBe("DIV")
  })

  test.each([
    ["aaaaaaa", 0],
    ["aaaaaaaa", 1],
    ["aaaaaaaaA", 2],
    ["aaaaaaaaA1", 3],
    ["aaaaaaaaA1!", 4],
  ])(
    "Could render strength meter with difference value (%s -> %i)",
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
