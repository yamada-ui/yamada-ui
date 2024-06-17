import { fireEvent, render, screen } from "@yamada-ui/test"
import { SaturationSlider } from "../src"

describe("<SaturationSlider />", () => {
  test("SaturationSlider renders correctly", async () => {
    render(<SaturationSlider data-testid="saturationSlider" />)

    const alphaSlider = screen.getByTestId("saturationSlider")

    expect(alphaSlider).toBeInTheDocument()
  })

  test("SaturationSlider calls onChange when value changes using keyboard arrows", () => {
    const mockOnChange = vi.fn()
    render(<SaturationSlider onChange={mockOnChange} />)
    const slider = screen.getByRole("slider")
    fireEvent.keyDown(slider, { key: "Home" })

    fireEvent.keyDown(slider, { key: "ArrowUp" })
    expect(mockOnChange).toHaveBeenCalledWith([0, 0, 1])

    fireEvent.keyDown(slider, { key: "ArrowDown" })
    expect(mockOnChange).toHaveBeenCalledWith([0, 0, 0.99])

    fireEvent.keyDown(slider, { key: "ArrowLeft" })
    expect(mockOnChange).toHaveBeenCalledWith([0, 0, 0.99])

    fireEvent.keyDown(slider, { key: "ArrowRight" })
    expect(mockOnChange).toHaveBeenCalledWith([0, 0.01, 0.99])

    fireEvent.keyDown(slider, { key: "PageUp" })
    expect(mockOnChange).toHaveBeenCalledWith([0, 0.01, 0.99])

    fireEvent.keyDown(slider, { key: "PageDown" })
    expect(mockOnChange).toHaveBeenCalledWith([0, 0.01, 0.99])

    fireEvent.keyDown(slider, { key: "End" })
    expect(mockOnChange).toHaveBeenCalledWith([0, 0.01, 0.99])
  })
})
