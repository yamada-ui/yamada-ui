import { a11y, fireEvent, render, renderHook, screen } from "#test"
import { ColorSelector } from "./"
import { useColorSelector } from "./use-color-selector"

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

  test("passes a11y checks", async () => {
    await a11y(
      <ColorSelector.Root
        colorSwatches={colorSwatches}
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
        colorSwatches={colorSwatches}
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

  test("merges saturation slider props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()
    const { user } = render(
      <ColorSelector.Root
        defaultValue="#ff0000"
        saturationSliderProps={{
          className: "from-root",
          style: { backgroundColor: "rgb(255, 0, 0)" },
          "data-testid": "saturation-slider",
          onClick: onRootClick,
        }}
      >
        <ColorSelector.SaturationSlider
          className="from-user"
          style={{ color: "rgb(0, 0, 255)" }}
          onClick={onUserClick}
        />
      </ColorSelector.Root>,
    )

    const saturationSlider = screen.getByTestId("saturation-slider")

    expect(saturationSlider).toHaveClass("from-root", "from-user")
    expect(saturationSlider).toHaveStyle({
      backgroundColor: "rgb(255, 0, 0)",
      color: "rgb(0, 0, 255)",
    })

    await user.click(saturationSlider)

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges hue slider props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()
    const { user } = render(
      <ColorSelector.Root
        defaultValue="#ff0000"
        hueSliderProps={{
          className: "from-root",
          style: { backgroundColor: "rgb(255, 0, 0)" },
          "data-testid": "hue-slider",
          onClick: onRootClick,
        }}
      >
        <ColorSelector.HueSlider
          className="from-user"
          style={{ color: "rgb(0, 0, 255)" }}
          onClick={onUserClick}
        />
      </ColorSelector.Root>,
    )

    const hueSlider = screen.getByTestId("hue-slider")

    expect(hueSlider).toHaveClass("from-root", "from-user")
    expect(hueSlider).toHaveStyle({
      backgroundColor: "rgb(255, 0, 0)",
      color: "rgb(0, 0, 255)",
    })

    await user.click(hueSlider)

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges alpha slider props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()
    const { user } = render(
      <ColorSelector.Root
        defaultValue="hsla(0, 100%, 50%, 0.5)"
        format="hsla"
        alphaSliderProps={{
          className: "from-root",
          style: { backgroundColor: "rgb(255, 0, 0)" },
          "data-testid": "alpha-slider",
          onClick: onRootClick,
        }}
      >
        <ColorSelector.AlphaSlider
          className="from-user"
          style={{ color: "rgb(0, 0, 255)" }}
          onClick={onUserClick}
        />
      </ColorSelector.Root>,
    )

    const alphaSlider = screen.getByTestId("alpha-slider")

    expect(alphaSlider).toHaveClass("from-root", "from-user")
    expect(alphaSlider).toHaveStyle({
      backgroundColor: "rgb(255, 0, 0)",
      color: "rgb(0, 0, 255)",
    })

    await user.click(alphaSlider)

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges color swatch group label props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()
    const { user } = render(
      <ColorSelector.Root
        colorSwatches={["#ff0000"]}
        defaultValue="#ffffff"
        colorSwatchGroupLabelProps={{
          className: "from-root",
          "data-testid": "group-label",
          onClick: onRootClick,
        }}
      >
        <ColorSelector.ColorSwatchGroupLabel
          className="from-user"
          onClick={onUserClick}
        >
          Swatches
        </ColorSelector.ColorSwatchGroupLabel>
        <ColorSelector.ColorSwatchGroup />
      </ColorSelector.Root>,
    )

    const groupLabel = screen.getByTestId("group-label")

    expect(groupLabel).toHaveClass("from-root", "from-user")

    await user.click(groupLabel)

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges color swatch item props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()
    const { user } = render(
      <ColorSelector.Root
        defaultValue="#ffffff"
        colorSwatchItemProps={{
          className: "from-root",
          onClick: onRootClick,
        }}
      >
        <ColorSelector.ColorSwatchGroup>
          <ColorSelector.ColorSwatchItem
            className="from-user"
            value="#ff0000"
            onClick={onUserClick}
          />
        </ColorSelector.ColorSwatchGroup>
      </ColorSelector.Root>,
    )

    const option = screen.getByRole("option")

    expect(option).toHaveClass("from-root", "from-user")

    await user.click(option)

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges color swatch group props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()
    const { user } = render(
      <ColorSelector.Root
        colorSwatches={["#ff0000"]}
        defaultValue="#ffffff"
        colorSwatchGroupProps={{
          className: "from-root",
          "data-testid": "swatch-group",
          onClick: onRootClick,
        }}
      >
        <ColorSelector.ColorSwatchGroup
          className="from-user"
          onClick={onUserClick}
        />
      </ColorSelector.Root>,
    )

    const swatchGroup = screen.getByTestId("swatch-group")

    expect(swatchGroup).toHaveClass("from-root", "from-user")

    await user.click(swatchGroup)

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
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

  test("eye dropper triggers color pick on click", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    const onChange = vi.fn()
    const { user } = render(
      <ColorSelector.Root defaultValue="#ff0000" onChange={onChange}>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    await user.click(screen.getByTestId("eye-dropper"))

    await vi.waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith("#00ff00")
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

    await vi.waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith("#00ff00")
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

    await vi.waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith("#00ff00")
    })
  })

  test("eye dropper does not trigger when disabled", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    const { user } = render(
      <ColorSelector.Root defaultValue="#ff0000" disabled>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    const eyeDropper = screen.getByTestId("eye-dropper")

    expect(eyeDropper).toHaveAttribute("aria-disabled", "true")
    expect(eyeDropper).toHaveAttribute("tabindex", "-1")

    await user.click(eyeDropper)

    expect(openEyeDropper).not.toHaveBeenCalled()
  })

  test("eye dropper does not trigger on Enter key when disabled", () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    render(
      <ColorSelector.Root defaultValue="#ff0000" disabled>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    fireEvent.keyDown(screen.getByTestId("eye-dropper"), { key: "Enter" })

    expect(openEyeDropper).not.toHaveBeenCalled()
  })

  test("eye dropper does not trigger when readOnly", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    const { user } = render(
      <ColorSelector.Root defaultValue="#ff0000" readOnly>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    const eyeDropper = screen.getByTestId("eye-dropper")

    expect(eyeDropper).toHaveAttribute("aria-disabled", "true")

    await user.click(eyeDropper)

    expect(openEyeDropper).not.toHaveBeenCalled()
  })

  test("eye dropper handles null result gracefully", async () => {
    openEyeDropper.mockResolvedValue(null)

    const onChange = vi.fn()
    const { user } = render(
      <ColorSelector.Root defaultValue="#ff0000" onChange={onChange}>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    await user.click(screen.getByTestId("eye-dropper"))

    await vi.waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
    })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("calls onChange when clicking a color swatch item", async () => {
    const onChange = vi.fn()
    const { user } = render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00", "#0000ff"]}
        defaultValue="#ffffff"
        onChange={onChange}
      />,
    )

    await user.click(screen.getAllByRole("option")[1]!)

    expect(onChange).toHaveBeenCalledWith("#00ff00")
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

    fireEvent.keyDown(screen.getAllByRole("option")[0]!, { key: "Enter" })

    expect(onChange).toHaveBeenCalledWith("#ff0000")
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

    fireEvent.keyDown(screen.getAllByRole("option")[0]!, {
      key: " ",
      code: "Space",
    })

    expect(onChange).toHaveBeenCalledWith("#ff0000")
  })

  test("does not call onChange on swatch click when disabled", async () => {
    const onChange = vi.fn()
    const { user } = render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00"]}
        defaultValue="#ffffff"
        disabled
        onChange={onChange}
      />,
    )

    await user.click(screen.getAllByRole("option")[0]!)

    expect(onChange).not.toHaveBeenCalled()
  })

  test("does not call onChange on swatch click when readOnly", async () => {
    const onChange = vi.fn()
    const { user } = render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00"]}
        defaultValue="#ffffff"
        readOnly
        onChange={onChange}
      />,
    )

    await user.click(screen.getAllByRole("option")[0]!)

    expect(onChange).not.toHaveBeenCalled()
  })

  test("color swatch item does not trigger onChange on keyDown when disabled", () => {
    const onChange = vi.fn()
    render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00"]}
        defaultValue="#ffffff"
        disabled
        onChange={onChange}
      />,
    )

    fireEvent.keyDown(screen.getAllByRole("option")[0]!, { key: "Enter" })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("color swatch item does not trigger onChange on keyDown when readOnly", () => {
    const onChange = vi.fn()
    render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00"]}
        defaultValue="#ffffff"
        readOnly
        onChange={onChange}
      />,
    )

    fireEvent.keyDown(screen.getAllByRole("option")[0]!, {
      key: " ",
      code: "Space",
    })

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

describe("useColorSelector", () => {
  test("getRootProps merges data attributes, rest, and user props", () => {
    const { result } = renderHook(() =>
      useColorSelector({
        id: "hook-id",
        className: "hook",
        "data-testid": "cs-root",
        value: "#ff0000",
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      className: "user",
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("cs-root")
  })

  test("getRootProps merges style, chains click handlers, and preserves hook data attrs", async () => {
    const onHookClick = vi.fn()
    const onUserClick = vi.fn()

    function Wrapper() {
      const { getRootProps } = useColorSelector({
        style: { borderWidth: "1px" },
        disabled: true,
        readOnly: true,
        value: "#ff0000",
        onClick: onHookClick,
      })

      return (
        <div
          {...getRootProps({
            style: { color: "blue" },
            "data-testid": "root",
            onClick: onUserClick,
          })}
        />
      )
    }

    const { user } = render(<Wrapper />)

    const root = screen.getByTestId("root")

    expect(root).toHaveAttribute("data-disabled", "")
    expect(root).toHaveAttribute("data-readonly", "")
    expect(root).toHaveStyle({
      borderWidth: "1px",
      color: "rgb(0, 0, 255)",
    })

    await user.click(root)

    expect(onHookClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("getRootProps merges refs from hook props and user props", () => {
    const hookRef = vi.fn()
    const userRef = vi.fn()

    function Wrapper() {
      const { getRootProps } = useColorSelector({
        ref: hookRef,
        value: "#ff0000",
      })

      return <div {...getRootProps({ ref: userRef, "data-testid": "root" })} />
    }

    render(<Wrapper />)

    const node = screen.getByTestId("root")

    expect(hookRef).toHaveBeenCalledWith(node)
    expect(userRef).toHaveBeenCalledWith(node)
  })
})
