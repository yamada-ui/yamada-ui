import { a11y, render, screen } from "#test"
import { ColorSelector } from "./"

const colorSwatches = [
  "hsl(0, 100%, 50%)",
  "hsl(45, 100%, 50%)",
  "hsl(90, 100%, 50%)",
  "hsl(135, 100%, 50%)",
  "hsl(180, 100%, 50%)",
  "hsl(225, 100%, 50%)",
  "hsl(270, 100%, 50%)",
  "hsl(315, 100%, 50%)",
]

describe("<ColorSelector />", () => {
  test("passes a11y checks", async () => {
    await a11y(
      <ColorSelector.Root
        colorSwatches={colorSwatches}
        colorSwatchGroupLabel="Pick a color"
        format="hexa"
      />,
    )
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

  test("renders eye dropper with children when no icon prop", () => {
    render(
      <ColorSelector.Root defaultValue="#ff0000">
        <ColorSelector.EyeDropper data-testid="eye-dropper">
          <span data-testid="child-content">dropper</span>
        </ColorSelector.EyeDropper>
      </ColorSelector.Root>,
    )

    expect(screen.getByTestId("child-content")).toBeInTheDocument()
  })

  test("eye dropper has correct tabIndex when interactive", () => {
    render(
      <ColorSelector.Root defaultValue="#ff0000">
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    expect(screen.getByTestId("eye-dropper")).toHaveAttribute("tabindex", "0")
  })

  test("swatch items have correct aria attributes when disabled", () => {
    render(
      <ColorSelector.Root
        colorSwatches={["#ff0000"]}
        defaultValue="#ffffff"
        disabled
      />,
    )

    const option = screen.getByRole("option")

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
    render(
      <ColorSelector.Root
        data-testid="root"
        defaultValue="hsla(0, 100%, 50%, 0.5)"
        format="hsla"
        alphaSliderProps={{ "data-testid": "alpha" }}
      />,
    )

    expect(screen.getByTestId("alpha")).toBeInTheDocument()
  })

  test("renders with rgba format", () => {
    render(
      <ColorSelector.Root
        data-testid="root"
        defaultValue="rgba(255, 0, 0, 0.5)"
        format="rgba"
        alphaSliderProps={{ "data-testid": "alpha" }}
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

    expect(screen.getAllByRole("option")[0]).toHaveAttribute(
      "data-custom",
      "true",
    )
  })
})
