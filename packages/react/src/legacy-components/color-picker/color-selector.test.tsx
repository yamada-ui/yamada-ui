import { expect } from "vitest"
import { fireEvent, render, screen } from "../../../test"
import { ColorSelector } from "./"

describe("<ColorSelector />", () => {
  test("ColorSelector renders correctly", () => {
    render(<ColorSelector data-testid="ColorSelector" />)

    const alphaSlider = screen.getByTestId("ColorSelector")

    expect(alphaSlider).toBeInTheDocument()
  })

  test("ColorSelector with eye dropper", () => {
    render(<ColorSelector data-testid="ColorSelector" withEyeDropper />)

    const buttons = screen.getAllByRole("button")

    const eyeDropperButton = buttons[0]
    expect(eyeDropperButton?.getAttribute("aria-label")).toBe("Pick a color")
  })

  test("ColorSelector with swatches", () => {
    render(
      <ColorSelector
        data-testid="ColorSelector"
        swatchesProps={{
          swatches: ["#2e2e2e", "#868e96"],
          swatchesLabel: "Swatch label",
        }}
      />,
    )

    const label = screen.getByText("Swatch label")
    const swatchButtons = screen.getAllByRole("button", {
      name: /^Select #.* as the color$/,
    })
    const expectedSwatchAriaLabels = [
      "Select #2e2e2e as the color",
      "Select #868e96 as the color",
    ]

    expect(label).toBeInTheDocument()

    expect(swatchButtons).toHaveLength(2)

    swatchButtons.forEach((button, index) => {
      const swatchAriaLabel = button.getAttribute("aria-label")
      expect(swatchAriaLabel).toBe(expectedSwatchAriaLabels[index])
    })
  })

  test("ColorSelector hook updates color value and calls onChange", () => {
    const mockOnChange = vi.fn()
    render(<ColorSelector onChange={mockOnChange} />)

    const inputs = screen.getAllByRole("spinbutton")

    const inputR = inputs[0]!
    const inputG = inputs[1]!
    const inputB = inputs[2]!

    fireEvent.change(inputR, { target: { value: "128" } })
    fireEvent.change(inputG, { target: { value: "64" } })
    fireEvent.change(inputB, { target: { value: "32" } })

    expect(mockOnChange).toHaveBeenCalledWith("#804020")
  })

  test("ColorSelector should apply HSLA color value correctly", () => {
    const initialValue = "hsla(240, 100%, 50%, 0.5)"

    render(<ColorSelector defaultValue={initialValue} />)

    screen.getByDisplayValue("hsla(240, 100%, 50%, 0.5)")
  })
})
