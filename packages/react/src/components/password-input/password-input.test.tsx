import { a11y, render, screen } from "#test"
import { PasswordInput, StrengthMeter } from "./"

describe("<PasswordInput />", () => {
  test("renders component correctly", async () => {
    await a11y(<PasswordInput placeholder="password" />)
  })

  test("renders expected html elements", () => {
    render(<PasswordInput placeholder="password" />)

    const input = screen.getByPlaceholderText("password")
    const button = screen.getByRole("button")

    expect(input.tagName).toBe("INPUT")
    expect(button.tagName).toBe("BUTTON")
    expect(input.parentElement?.tagName).toBe("DIV")
  })
})

describe("<StrengthMeter />", () => {
  test("renders component correctly", async () => {
    await a11y(<StrengthMeter value={3} />)
  })

  test("renders expected html elements", () => {
    render(<StrengthMeter value={3} />)

    const strengthMeter = screen.getByRole("meter")

    expect(strengthMeter.tagName).toBe("DIV")
    expect(strengthMeter.children[0]?.tagName).toBe("DIV")
    expect(strengthMeter.children[0]?.children[0]?.tagName).toBe("DIV")
    expect(screen.getByText("High").tagName).toBe("SPAN")
  })
})
