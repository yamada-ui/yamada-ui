import { render, screen, fireEvent } from "@yamada-ui/test"
import { ColorPicker } from "../src"

describe("<ColorPicker />", () => {
  test("ColorPicker renders correctly", async () => {
    render(<ColorPicker data-testid="colorPicker" />)

    const colorPicker = screen.getByTestId("colorPicker")

    expect(colorPicker).toBeInTheDocument()
  })

  test("ColorPicker changes color on selecting a new color", () => {
    render(<ColorPicker data-testid="colorPicker" />)

    const colorPicker = screen.getByTestId("colorPicker")
    const value = "#ff0000"

    fireEvent.change(colorPicker, { target: { value } })

    expect(colorPicker).toHaveValue(value)
  })

  test("ColorPicker renders with the correct initial value", () => {
    render(<ColorPicker defaultValue="#00ff00" data-testid="colorPicker" />)

    const colorPicker = screen.getByTestId("colorPicker")

    expect(colorPicker).toHaveValue("#00ff00")
  })
})
