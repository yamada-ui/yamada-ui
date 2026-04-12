import { a11y, page, render } from "#test/browser"
import { useState } from "react"
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
    await expect
      .element(input.locator("xpath=.."))
      .toHaveClass("ui-password-input__root")
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

  test("renders component correctly", async () => {
    await a11y(<StrengthMeter value={3} />)
  })

  test("sets `displayName` correctly", () => {
    expect(StrengthMeter.name).toBe("StrengthMeterRoot")
  })

  test("sets `className` correctly", async () => {
    await render(<StrengthMeter data-testid="strengthMeter" value={3} />)

    const strengthMeter = page.getByTestId("strengthMeter")

    expect(strengthMeter.element()).toHaveClass("ui-strength-meter__root")
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

  test("Could render strength meter with difference value", async () => {
    const { user } = await render(<ExampleWithPassWordInputStrengthMeter />)

    const passwordInput = page.getByPlaceholder("password")
    const strengthMeter = page.getByRole("meter")

    await user.type(passwordInput, "aaaaaaa")
    await expect.element(strengthMeter).toHaveAttribute("aria-valuenow", "0")
    await user.type(passwordInput, "a")
    await expect.element(strengthMeter).toHaveAttribute("aria-valuenow", "1")
    await user.type(passwordInput, "A")
    await expect.element(strengthMeter).toHaveAttribute("aria-valuenow", "2")
    await user.type(passwordInput, "1")
    await expect.element(strengthMeter).toHaveAttribute("aria-valuenow", "3")
    await user.type(passwordInput, "!")
    await expect.element(strengthMeter).toHaveAttribute("aria-valuenow", "4")
  })
})
