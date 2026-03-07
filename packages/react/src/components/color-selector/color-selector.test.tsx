import { fireEvent, render, screen, waitFor } from "#test"
import { ColorSelector } from "./"

describe("<ColorSelector />", () => {
  const defaultEyeDropper = (window as any).EyeDropper
  const openEyeDropper = vi.fn()
  class EyeDropperMock {
    open = openEyeDropper
  }

  beforeEach(() => {
    openEyeDropper.mockReset()
    vi.stubGlobal("EyeDropper", EyeDropperMock)
  })

  afterAll(() => {
    vi.stubGlobal("EyeDropper", defaultEyeDropper)
  })

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

  test("does not show alpha slider when format is hex", () => {
    render(
      <ColorSelector.Root data-testid="root" defaultValue="#ff0000">
        <ColorSelector.SaturationSlider data-testid="saturation" />
        <ColorSelector.HueSlider data-testid="hue" />
        <ColorSelector.AlphaSlider data-testid="alpha" />
      </ColorSelector.Root>,
    )

    expect(screen.getByTestId("root")).toBeInTheDocument()
    expect(screen.queryByTestId("alpha")).not.toBeInTheDocument()
  })

  test("shows alpha slider when withAlpha is true", () => {
    render(
      <ColorSelector.Root data-testid="root" defaultValue="#ff0000" withAlpha>
        <ColorSelector.SaturationSlider data-testid="saturation" />
        <ColorSelector.HueSlider data-testid="hue" />
        <ColorSelector.AlphaSlider data-testid="alpha" />
      </ColorSelector.Root>,
    )

    expect(screen.getByTestId("alpha")).toBeInTheDocument()
  })

  test("renders eye dropper with default icon", () => {
    render(
      <ColorSelector.Root defaultValue="#ff0000">
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    const eyeDropper = screen.getByTestId("eye-dropper")

    expect(eyeDropper).toBeInTheDocument()
    expect(eyeDropper.querySelector("svg")).not.toBeNull()
  })

  test("renders eye dropper with custom icon", () => {
    render(
      <ColorSelector.Root defaultValue="#ff0000">
        <ColorSelector.EyeDropper
          data-testid="eye-dropper"
          icon={<span data-testid="custom-icon">X</span>}
        />
      </ColorSelector.Root>,
    )

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument()
  })

  test("eye dropper triggers color pick on click", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    const onChange = vi.fn()

    render(
      <ColorSelector.Root defaultValue="#ff0000" onChange={onChange}>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    fireEvent.click(screen.getByTestId("eye-dropper"))

    await waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith()
    })
  })

  test("eye dropper triggers color pick on Enter key", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    const onChange = vi.fn()

    render(
      <ColorSelector.Root defaultValue="#ff0000" onChange={onChange}>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    fireEvent.keyDown(screen.getByTestId("eye-dropper"), { key: "Enter" })

    await waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith()
    })
  })

  test("eye dropper triggers color pick on Space key", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    const onChange = vi.fn()

    render(
      <ColorSelector.Root defaultValue="#ff0000" onChange={onChange}>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    fireEvent.keyDown(screen.getByTestId("eye-dropper"), {
      key: " ",
      code: "Space",
    })

    await waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith()
    })
  })

  test("eye dropper does not trigger when disabled", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    render(
      <ColorSelector.Root defaultValue="#ff0000" disabled>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    const eyeDropper = screen.getByTestId("eye-dropper")

    expect(eyeDropper).toHaveAttribute("aria-disabled", "true")
    expect(eyeDropper).toHaveAttribute("tabindex", "-1")

    fireEvent.click(eyeDropper)

    await waitFor(() => {
      expect(openEyeDropper).not.toHaveBeenCalled()
    })
  })

  test("eye dropper does not trigger when readOnly", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    render(
      <ColorSelector.Root defaultValue="#ff0000" readOnly>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    const eyeDropper = screen.getByTestId("eye-dropper")

    expect(eyeDropper).toHaveAttribute("aria-disabled", "true")

    fireEvent.click(eyeDropper)

    await waitFor(() => {
      expect(openEyeDropper).not.toHaveBeenCalled()
    })
  })

  test("eye dropper handles null result gracefully", async () => {
    openEyeDropper.mockResolvedValue(null)

    const onChange = vi.fn()

    render(
      <ColorSelector.Root defaultValue="#ff0000" onChange={onChange}>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    fireEvent.click(screen.getByTestId("eye-dropper"))

    await waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
    })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("calls onChange when clicking a color swatch item", () => {
    const onChange = vi.fn()

    render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00", "#0000ff"]}
        defaultValue="#ffffff"
        onChange={onChange}
      />,
    )

    const options = screen.getAllByRole("option")

    fireEvent.click(options[1]!)

    expect(onChange).toHaveBeenCalledWith()
  })

  test("calls onChange when pressing Enter on a color swatch item", () => {
    const onChange = vi.fn()

    render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00", "#0000ff"]}
        defaultValue="#ffffff"
        onChange={onChange}
      />,
    )

    const options = screen.getAllByRole("option")

    fireEvent.keyDown(options[0]!, { key: "Enter" })

    expect(onChange).toHaveBeenCalledWith()
  })

  test("calls onChange when pressing Space on a color swatch item", () => {
    const onChange = vi.fn()

    render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00", "#0000ff"]}
        defaultValue="#ffffff"
        onChange={onChange}
      />,
    )

    const options = screen.getAllByRole("option")

    fireEvent.keyDown(options[0]!, { key: " ", code: "Space" })

    expect(onChange).toHaveBeenCalledWith()
  })

  test("does not call onChange on swatch click when disabled", () => {
    const onChange = vi.fn()

    render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00"]}
        defaultValue="#ffffff"
        disabled
        onChange={onChange}
      />,
    )

    const options = screen.getAllByRole("option")

    fireEvent.click(options[0]!)

    expect(onChange).not.toHaveBeenCalled()
  })

  test("does not call onChange on swatch click when readOnly", () => {
    const onChange = vi.fn()

    render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00"]}
        defaultValue="#ffffff"
        readOnly
        onChange={onChange}
      />,
    )

    const options = screen.getAllByRole("option")

    fireEvent.click(options[0]!)

    expect(onChange).not.toHaveBeenCalled()
  })

  test("swatch items have correct aria attributes when disabled", () => {
    render(
      <ColorSelector.Root
        colorSwatches={["#ff0000"]}
        defaultValue="#ffffff"
        disabled
      />,
    )

    const option = screen.getAllByRole("option")[0]

    expect(option).toHaveAttribute("aria-disabled", "true")
    expect(option).toHaveAttribute("tabindex", "-1")
  })

  test("renders with controlled value", () => {
    const onChange = vi.fn()

    const { rerender } = render(
      <ColorSelector.Root
        data-testid="root"
        value="#ff0000"
        onChange={onChange}
      />,
    )

    expect(screen.getByTestId("root")).toBeInTheDocument()

    rerender(
      <ColorSelector.Root
        data-testid="root"
        value="#00ff00"
        onChange={onChange}
      />,
    )

    expect(screen.getByTestId("root")).toBeInTheDocument()
  })

  test("renders with custom children", () => {
    render(
      <ColorSelector.Root defaultValue="#ff0000">
        <ColorSelector.SaturationSlider data-testid="saturation" />
        <ColorSelector.HueSlider data-testid="hue" />
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    expect(screen.getByTestId("saturation")).toBeInTheDocument()
    expect(screen.getByTestId("hue")).toBeInTheDocument()
    expect(screen.getByTestId("eye-dropper")).toBeInTheDocument()
  })

  test("renders with hsla format and handles alpha slider", () => {
    const onChange = vi.fn()

    render(
      <ColorSelector.Root
        data-testid="root"
        defaultValue="hsla(0, 100%, 50%, 0.5)"
        format="hsla"
        alphaSliderProps={{ "data-testid": "alpha" }}
        onChange={onChange}
      />,
    )

    expect(screen.getByTestId("alpha")).toBeInTheDocument()
  })

  test("sets data-disabled on root when disabled", () => {
    render(
      <ColorSelector.Root data-testid="root" defaultValue="#ff0000" disabled />,
    )

    expect(screen.getByTestId("root")).toHaveAttribute("data-disabled")
  })

  test("sets data-readonly on root when readOnly", () => {
    render(
      <ColorSelector.Root data-testid="root" defaultValue="#ff0000" readOnly />,
    )

    expect(screen.getByTestId("root")).toHaveAttribute("data-readonly")
  })

  test("renders color swatch group with colorSwatchGroupProps", () => {
    render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00"]}
        defaultValue="#ffffff"
        colorSwatchGroupProps={{ "data-testid": "swatch-group" }}
      />,
    )

    expect(screen.getByTestId("swatch-group")).toBeInTheDocument()
  })

  test("renders color swatch items with colorSwatchItemProps", () => {
    render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00"]}
        defaultValue="#ffffff"
        colorSwatchItemProps={{ "data-custom": "true" }}
      />,
    )

    const options = screen.getAllByRole("option")

    expect(options[0]).toHaveAttribute("data-custom", "true")
  })

  test("handles onChangeStart callback", () => {
    const onChangeStart = vi.fn()

    render(
      <ColorSelector.Root
        colorSwatches={["#ff0000"]}
        defaultValue="#ffffff"
        saturationSliderProps={{ "data-testid": "saturation" }}
        onChangeStart={onChangeStart}
      />,
    )

    expect(screen.getByTestId("saturation")).toBeInTheDocument()
  })

  test("handles onChangeEnd callback", () => {
    const onChangeEnd = vi.fn()

    render(
      <ColorSelector.Root
        colorSwatches={["#ff0000"]}
        defaultValue="#ffffff"
        saturationSliderProps={{ "data-testid": "saturation" }}
        onChangeEnd={onChangeEnd}
      />,
    )

    expect(screen.getByTestId("saturation")).toBeInTheDocument()
  })
})
