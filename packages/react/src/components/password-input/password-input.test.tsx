import { a11y, fireEvent, render, screen, waitFor } from "#test"
import { useState } from "react"
import { Group } from "../group"
import { EyeIcon, EyeOffIcon } from "../icon"
import { InputPropsContext } from "../input"
import { PasswordInput, StrengthMeter } from "./"

describe("<PasswordInput />", () => {
  test("renders component correctly", async () => {
    await a11y(<PasswordInput placeholder="password" />)
  })

  test("sets `displayName` correctly", () => {
    expect(PasswordInput.name).toBe("PasswordInputRoot")
  })

  test("sets `className` correctly", async () => {
    const { getByRole } = render(<PasswordInput placeholder="password" />)

    const input = await screen.findByPlaceholderText("password")

    expect(input.parentElement).toHaveClass("ui-password-input__root")
    expect(input).toHaveClass("ui-password-input__field")
    expect(getByRole("button")).toHaveClass("ui-password-input__button")
  })

  test("renders HTML tag correctly", async () => {
    const { getByRole } = render(<PasswordInput placeholder="password" />)

    const input = await screen.findByPlaceholderText("password")

    expect(input.parentElement?.tagName).toBe("DIV")
    expect(input.tagName).toBe("INPUT")
    expect(getByRole("button").tagName).toBe("BUTTON")
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

  test("merges `rootProps` and group item props without overwriting style and data attributes", async () => {
    const onRootClick = vi.fn()

    render(
      <Group attached>
        <PasswordInput
          placeholder="password-1"
          rootProps={{
            className: "from-user",
            style: { backgroundColor: "blue" },
            onClick: onRootClick,
          }}
        />
        <PasswordInput placeholder="password-2" />
      </Group>,
    )

    const input = await screen.findByPlaceholderText("password-1")
    const root = input.parentElement as HTMLElement

    expect(root).toHaveClass("from-user")
    expect(root).toHaveAttribute("data-group-start")
    expect(root.style.getPropertyValue("--group-count")).toBe("2")
    expect(root.style.getPropertyValue("--group-index")).toBe("0")
    expect(root).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    fireEvent.click(root)
    expect(onRootClick).toHaveBeenCalledTimes(1)
  })

  test("merges input context props and user props without overwriting className, style, and click handlers", async () => {
    const onContextClick = vi.fn()
    const onUserClick = vi.fn()

    render(
      <InputPropsContext
        value={{
          className: "from-context",
          style: { color: "red" },
          onClick: onContextClick,
        }}
      >
        <PasswordInput
          className="from-user"
          style={{ backgroundColor: "blue" }}
          placeholder="password"
          onClick={onUserClick}
        />
      </InputPropsContext>,
    )

    const input = await screen.findByPlaceholderText("password")
    const root = input.parentElement as HTMLElement

    expect(root).toHaveClass("from-context", "from-user")
    expect(input).toHaveStyle({ color: "rgb(255, 0, 0)" })
    expect(input).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    fireEvent.click(input)

    expect(onContextClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
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

  test("sets `className` correctly", () => {
    const { getByTestId } = render(
      <StrengthMeter data-testid="strengthMeter" value={3} />,
    )

    expect(getByTestId("strengthMeter")).toHaveClass("ui-strength-meter__root")
    expect(getByTestId("strengthMeter").children[0]).toHaveClass(
      "ui-strength-meter__indicators",
    )
    expect(getByTestId("strengthMeter").children[0]?.children[0]).toHaveClass(
      "ui-strength-meter__indicator",
    )
  })

  test("renders HTML tag correctly", () => {
    const { getByTestId } = render(
      <StrengthMeter data-testid="strengthMeter" value={3} />,
    )

    expect(getByTestId("strengthMeter").tagName).toBe("DIV")
    expect(getByTestId("strengthMeter").children[0]?.tagName).toBe("DIV")
    expect(getByTestId("strengthMeter").children[0]?.children[0]?.tagName).toBe(
      "DIV",
    )
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

  test("merges indicator props with getter props without overwriting selected state", () => {
    const onIndicatorClick = vi.fn()
    const onRootClick = vi.fn()

    const { getByTestId } = render(
      <StrengthMeter
        data-testid="strengthMeter"
        value={3}
        getIndicatorProps={() => ({
          className: "from-user",
          style: { backgroundColor: "blue" },
          onClick: onIndicatorClick,
        })}
        onClick={onRootClick}
      />,
    )

    const indicator = getByTestId("strengthMeter").children[0]
      ?.children[0] as HTMLElement

    expect(indicator).toHaveClass("from-user")
    expect(indicator).toHaveAttribute("data-selected")
    expect(indicator).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    fireEvent.click(indicator)

    expect(onIndicatorClick).toHaveBeenCalledTimes(1)
    expect(onRootClick).toHaveBeenCalledTimes(1)
  })
})
