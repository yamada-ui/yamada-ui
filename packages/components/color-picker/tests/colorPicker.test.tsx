import { render, screen, fireEvent } from "@yamada-ui/test"
import { ColorPicker } from "../src"

describe("<ColorPicker />", () => {
  test("ColorPicker renders correctly", async () => {
    render(<ColorPicker data-testid="color" />)
    const colorPicker = screen.getByTestId("color")
    expect(colorPicker).toBeInTheDocument()
  })

  test("ColorPicker changes color on selecting a new color", () => {
    render(<ColorPicker data-testid="color" />)
    const colorPicker = screen.getByTestId("color")
    fireEvent.change(colorPicker, { target: { value: "#ff0000" } })
    expect(colorPicker).toHaveValue("#ff0000")
  })

  test("ColorPicker renders with the correct initial color", () => {
    render(<ColorPicker color="#00ff00" data-testid="color" />)
    const colorPicker = screen.getByTestId("color")
    expect(colorPicker).toHaveValue("#00ff00")
  })

  test("ColorPicker displays a color preview", () => {
    render(<ColorPicker data-testid="color" />)
    const colorPreview = screen.getByTestId("color")
    expect(colorPreview).toBeInTheDocument()
  })

  test("ColorPicker resets to initial color on reset button click", () => {
    render(<ColorPicker color="#00ff00" data-testid="color" />)
    const colorPicker = screen.getByTestId("color")
    fireEvent.change(colorPicker, { target: { value: "#ff0000" } })
    const resetButton = screen.getByRole("button", { name: /reset/i })
    fireEvent.click(resetButton)
    expect(colorPicker).toHaveValue("#00ff00")
  })
})
