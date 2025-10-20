import { render, screen } from "#test"
import { ColorSelector } from "./"

describe("<Container />", () => {
  test("renders component correctly", () => {
    render(
      <ColorSelector.Root
        colorSwatches={[
          "hsl(0, 100%, 50%)",
          "hsl(45, 100%, 50%)",
          "hsl(90, 100%, 50%)",
          "hsl(135, 100%, 50%)",
          "hsl(180, 100%, 50%)",
          "hsl(225, 100%, 50%)",
          "hsl(270, 100%, 50%)",
          "hsl(315, 100%, 50%)",
        ]}
        colorSwatchGroupLabel="Pick a color"
        format="hexa"
      />,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(ColorSelector.Root.displayName).toBe("ColorSelectorRoot")
    expect(ColorSelector.SaturationSlider.displayName).toBe(
      "ColorSelectorSaturationSlider",
    )
    expect(ColorSelector.HueSlider.displayName).toBe("ColorSelectorHueSlider")
    expect(ColorSelector.AlphaSlider.displayName).toBe(
      "ColorSelectorAlphaSlider",
    )
    expect(ColorSelector.EyeDropper.displayName).toBe("ColorSelectorEyeDropper")
    expect(ColorSelector.ColorSwatchGroup.displayName).toBe(
      "ColorSelectorColorSwatchGroup",
    )
    expect(ColorSelector.ColorSwatchGroupLabel.displayName).toBe(
      "ColorSelectorColorSwatchGroupLabel",
    )
    expect(ColorSelector.ColorSwatchItem.displayName).toBe(
      "ColorSelectorColorSwatchItem",
    )
  })

  test("sets `className` correctly", () => {
    render(
      <ColorSelector.Root
        data-testid="root"
        colorSwatches={[
          "hsl(0, 100%, 50%)",
          "hsl(45, 100%, 50%)",
          "hsl(90, 100%, 50%)",
          "hsl(135, 100%, 50%)",
          "hsl(180, 100%, 50%)",
          "hsl(225, 100%, 50%)",
          "hsl(270, 100%, 50%)",
          "hsl(315, 100%, 50%)",
        ]}
        colorSwatchGroupLabel="Pick a color"
        format="hexa"
        alphaSliderProps={{ "data-testid": "alphaSlider" }}
        colorSwatchGroupLabelProps={{ "data-testid": "colorSwatchGroupLabel" }}
        hueSliderProps={{ "data-testid": "hueSlider" }}
        saturationSliderProps={{ "data-testid": "saturationSlider" }}
      />,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-color-selector__root")
    expect(screen.getByTestId("alphaSlider")).toHaveClass(
      "ui-color-selector__alpha-slider",
    )
    expect(screen.getByTestId("hueSlider")).toHaveClass(
      "ui-color-selector__hue-slider",
    )
    expect(screen.getByTestId("saturationSlider")).toHaveClass(
      "ui-color-selector__saturation-slider",
    )
    expect(screen.getByTestId("colorSwatchGroupLabel")).toHaveClass(
      "ui-color-selector__color-swatch-group-label",
    )
    expect(screen.getByRole("listbox")).toHaveClass(
      "ui-color-selector__color-swatch-group",
    )
    expect(screen.getAllByRole("option")[0]).toHaveClass(
      "ui-color-selector__color-swatch-item",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
      <ColorSelector.Root
        data-testid="root"
        colorSwatches={[
          "hsl(0, 100%, 50%)",
          "hsl(45, 100%, 50%)",
          "hsl(90, 100%, 50%)",
          "hsl(135, 100%, 50%)",
          "hsl(180, 100%, 50%)",
          "hsl(225, 100%, 50%)",
          "hsl(270, 100%, 50%)",
          "hsl(315, 100%, 50%)",
        ]}
        colorSwatchGroupLabel="Pick a color"
        format="hexa"
        alphaSliderProps={{ "data-testid": "alphaSlider" }}
        colorSwatchGroupLabelProps={{ "data-testid": "colorSwatchGroupLabel" }}
        hueSliderProps={{ "data-testid": "hueSlider" }}
        saturationSliderProps={{ "data-testid": "saturationSlider" }}
      />,
    )

    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getByTestId("alphaSlider").tagName).toBe("DIV")
    expect(screen.getByTestId("hueSlider").tagName).toBe("DIV")
    expect(screen.getByTestId("saturationSlider").tagName).toBe("DIV")
    expect(screen.getByTestId("colorSwatchGroupLabel").tagName).toBe("SPAN")
    expect(screen.getByRole("listbox").tagName).toBe("DIV")
    expect(screen.getAllByRole("option")[0]?.tagName).toBe("DIV")
  })
})
