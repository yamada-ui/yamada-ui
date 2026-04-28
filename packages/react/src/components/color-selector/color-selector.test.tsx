import { page, render } from "#test/browser"
import { noop } from "../../utils"
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

const getTestElement = (testId: string) =>
  page.getByTestId(testId).element() as HTMLElement

const getOptionElement = (index = 0) =>
  page.getByRole("option").nth(index).element() as HTMLElement

const keyDown = (element: Element, init: KeyboardEventInit) => {
  element.dispatchEvent(
    new KeyboardEvent("keydown", { bubbles: true, ...init }),
  )
}

const pointerDown = (element: Element, init: PointerEventInit) => {
  element.dispatchEvent(
    new PointerEvent("pointerdown", { bubbles: true, ...init }),
  )
}

const pointerUp = (target: Element | Window, init: PointerEventInit) => {
  target.dispatchEvent(
    new PointerEvent("pointerup", { bubbles: true, ...init }),
  )
}

const mockRect = (el: HTMLElement, rect: Partial<DOMRect>): (() => void) => {
  const original = el.getBoundingClientRect
  el.getBoundingClientRect = () =>
    ({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      toJSON: noop,
      top: 0,
      width: 0,
      x: 0,
      y: 0,
      ...rect,
    }) as DOMRect

  return () => {
    el.getBoundingClientRect = original
  }
}

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

  test("renders component correctly", async () => {
    await render(
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

  test("sets `className` correctly", async () => {
    await render(
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

    expect(getTestElement("root")).toHaveClass("ui-color-selector__root")
    expect(getTestElement("alphaSlider")).toHaveClass(
      "ui-color-selector__alpha-slider",
    )
    expect(getTestElement("hueSlider")).toHaveClass(
      "ui-color-selector__hue-slider",
    )
    expect(getTestElement("saturationSlider")).toHaveClass(
      "ui-color-selector__saturation-slider",
    )
    expect(getTestElement("colorSwatchGroupLabel")).toHaveClass(
      "ui-color-selector__color-swatch-group-label",
    )
    expect(page.getByRole("listbox").element()).toHaveClass(
      "ui-color-selector__color-swatch-group",
    )
    expect(getOptionElement()).toHaveClass(
      "ui-color-selector__color-swatch-item",
    )
  })

  test("merges saturation slider props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()

    await render(
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

    const saturationSlider = getTestElement("saturation-slider")

    expect(saturationSlider).toHaveClass("from-root", "from-user")
    expect(saturationSlider).toHaveStyle({
      backgroundColor: "rgb(255, 0, 0)",
      color: "rgb(0, 0, 255)",
    })

    saturationSlider.click()

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges hue slider props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()

    await render(
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

    const hueSlider = getTestElement("hue-slider")

    expect(hueSlider).toHaveClass("from-root", "from-user")
    expect(hueSlider).toHaveStyle({
      backgroundColor: "rgb(255, 0, 0)",
      color: "rgb(0, 0, 255)",
    })

    hueSlider.click()

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges alpha slider props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()

    await render(
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

    const alphaSlider = getTestElement("alpha-slider")

    expect(alphaSlider).toHaveClass("from-root", "from-user")
    expect(alphaSlider).toHaveStyle({
      backgroundColor: "rgb(255, 0, 0)",
      color: "rgb(0, 0, 255)",
    })

    alphaSlider.click()

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges color swatch group label props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()

    await render(
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

    const groupLabel = getTestElement("group-label")

    expect(groupLabel).toHaveClass("from-root", "from-user")

    groupLabel.click()

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges color swatch item props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()

    await render(
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

    const option = page.getByRole("option").element() as HTMLElement

    expect(option).toHaveClass("from-root", "from-user")

    option.click()

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges color swatch group props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()

    await render(
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

    const swatchGroup = getTestElement("swatch-group")

    expect(swatchGroup).toHaveClass("from-root", "from-user")

    swatchGroup.click()

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("renders HTML tag correctly", async () => {
    await render(
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

    expect(getTestElement("root").tagName).toBe("DIV")
    expect(getTestElement("alphaSlider").tagName).toBe("DIV")
    expect(getTestElement("hueSlider").tagName).toBe("DIV")
    expect(getTestElement("saturationSlider").tagName).toBe("DIV")
    expect(getTestElement("colorSwatchGroupLabel").tagName).toBe("SPAN")
    expect(page.getByRole("listbox").element().tagName).toBe("DIV")
    expect(getOptionElement().tagName).toBe("DIV")
  })

  test("does not show alpha slider when format is hex", async () => {
    await render(
      <ColorSelector.Root data-testid="root" defaultValue="#ff0000">
        <ColorSelector.SaturationSlider data-testid="saturation" />
        <ColorSelector.HueSlider data-testid="hue" />
        <ColorSelector.AlphaSlider data-testid="alpha" />
      </ColorSelector.Root>,
    )

    expect(getTestElement("root")).toBeInTheDocument()
    expect(document.querySelector('[data-testid="alpha"]')).toBeNull()
  })

  test("shows alpha slider when withAlpha is true", async () => {
    await render(
      <ColorSelector.Root data-testid="root" defaultValue="#ff0000" withAlpha>
        <ColorSelector.SaturationSlider data-testid="saturation" />
        <ColorSelector.HueSlider data-testid="hue" />
        <ColorSelector.AlphaSlider data-testid="alpha" />
      </ColorSelector.Root>,
    )

    expect(getTestElement("alpha")).toBeInTheDocument()
  })

  test("renders eye dropper with default icon", async () => {
    await render(
      <ColorSelector.Root defaultValue="#ff0000">
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    const eyeDropper = getTestElement("eye-dropper")

    expect(eyeDropper).toBeInTheDocument()
    expect(eyeDropper.querySelector("svg")).not.toBeNull()
  })

  test("renders eye dropper with custom icon", async () => {
    await render(
      <ColorSelector.Root defaultValue="#ff0000">
        <ColorSelector.EyeDropper
          data-testid="eye-dropper"
          icon={<span data-testid="custom-icon">X</span>}
        />
      </ColorSelector.Root>,
    )

    expect(getTestElement("custom-icon")).toBeInTheDocument()
  })

  test("eye dropper triggers color pick on click", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    const onChange = vi.fn()

    await render(
      <ColorSelector.Root defaultValue="#ff0000" onChange={onChange}>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    getTestElement("eye-dropper").click()

    await vi.waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith("#00ff00")
    })
  })

  test("eye dropper triggers color pick on Enter key", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    const onChange = vi.fn()

    await render(
      <ColorSelector.Root defaultValue="#ff0000" onChange={onChange}>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    keyDown(getTestElement("eye-dropper"), { key: "Enter" })

    await vi.waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith("#00ff00")
    })
  })

  test("eye dropper triggers color pick on Space key", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    const onChange = vi.fn()

    await render(
      <ColorSelector.Root defaultValue="#ff0000" onChange={onChange}>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    keyDown(getTestElement("eye-dropper"), { key: " ", code: "Space" })

    await vi.waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith("#00ff00")
    })
  })

  test("eye dropper does not trigger when disabled", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    await render(
      <ColorSelector.Root defaultValue="#ff0000" disabled>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    const eyeDropper = getTestElement("eye-dropper")

    expect(eyeDropper).toHaveAttribute("aria-disabled", "true")
    expect(eyeDropper).toHaveAttribute("tabindex", "-1")

    eyeDropper.click()

    await vi.waitFor(() => {
      expect(openEyeDropper).not.toHaveBeenCalled()
    })
  })

  test("eye dropper does not trigger when readOnly", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    await render(
      <ColorSelector.Root defaultValue="#ff0000" readOnly>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    const eyeDropper = getTestElement("eye-dropper")

    expect(eyeDropper).toHaveAttribute("aria-disabled", "true")

    eyeDropper.click()

    await vi.waitFor(() => {
      expect(openEyeDropper).not.toHaveBeenCalled()
    })
  })

  test("eye dropper handles null result gracefully", async () => {
    openEyeDropper.mockResolvedValue(null)

    const onChange = vi.fn()

    await render(
      <ColorSelector.Root defaultValue="#ff0000" onChange={onChange}>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    getTestElement("eye-dropper").click()

    await vi.waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
    })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("calls onChange when clicking a color swatch item", async () => {
    const onChange = vi.fn()

    await render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00", "#0000ff"]}
        defaultValue="#ffffff"
        onChange={onChange}
      />,
    )

    getOptionElement(1).click()

    expect(onChange).toHaveBeenCalledWith("#00ff00")
  })

  test("calls onChange when pressing Enter on a color swatch item", async () => {
    const onChange = vi.fn()

    await render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00", "#0000ff"]}
        defaultValue="#ffffff"
        onChange={onChange}
      />,
    )

    keyDown(getOptionElement(), { key: "Enter" })

    expect(onChange).toHaveBeenCalledWith("#ff0000")
  })

  test("calls onChange when pressing Space on a color swatch item", async () => {
    const onChange = vi.fn()

    await render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00", "#0000ff"]}
        defaultValue="#ffffff"
        onChange={onChange}
      />,
    )

    keyDown(getOptionElement(), { key: " ", code: "Space" })

    expect(onChange).toHaveBeenCalledWith("#ff0000")
  })

  test("does not call onChange on swatch click when disabled", async () => {
    const onChange = vi.fn()

    await render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00"]}
        defaultValue="#ffffff"
        disabled
        onChange={onChange}
      />,
    )

    getOptionElement().click()

    expect(onChange).not.toHaveBeenCalled()
  })

  test("does not call onChange on swatch click when readOnly", async () => {
    const onChange = vi.fn()

    await render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00"]}
        defaultValue="#ffffff"
        readOnly
        onChange={onChange}
      />,
    )

    getOptionElement().click()

    expect(onChange).not.toHaveBeenCalled()
  })

  test("swatch items have correct aria attributes when disabled", async () => {
    await render(
      <ColorSelector.Root
        colorSwatches={["#ff0000"]}
        defaultValue="#ffffff"
        disabled
      />,
    )

    const option = getOptionElement()

    expect(option).toHaveAttribute("aria-disabled", "true")
    expect(option).toHaveAttribute("tabindex", "-1")
  })

  test("renders with controlled value", async () => {
    const onChange = vi.fn()

    const { rerender } = await render(
      <ColorSelector.Root
        data-testid="root"
        value="#ff0000"
        onChange={onChange}
      />,
    )

    expect(getTestElement("root")).toBeInTheDocument()

    rerender(
      <ColorSelector.Root
        data-testid="root"
        value="#00ff00"
        onChange={onChange}
      />,
    )

    expect(getTestElement("root")).toBeInTheDocument()
  })

  test("renders with custom children", async () => {
    await render(
      <ColorSelector.Root defaultValue="#ff0000">
        <ColorSelector.SaturationSlider data-testid="saturation" />
        <ColorSelector.HueSlider data-testid="hue" />
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    expect(getTestElement("saturation")).toBeInTheDocument()
    expect(getTestElement("hue")).toBeInTheDocument()
    expect(getTestElement("eye-dropper")).toBeInTheDocument()
  })

  test("renders with hsla format and handles alpha slider", async () => {
    const onChange = vi.fn()

    await render(
      <ColorSelector.Root
        data-testid="root"
        defaultValue="hsla(0, 100%, 50%, 0.5)"
        format="hsla"
        alphaSliderProps={{ "data-testid": "alpha" }}
        onChange={onChange}
      />,
    )

    expect(getTestElement("alpha")).toBeInTheDocument()
  })

  test("sets data-disabled on root when disabled", async () => {
    await render(
      <ColorSelector.Root data-testid="root" defaultValue="#ff0000" disabled />,
    )

    expect(getTestElement("root")).toHaveAttribute("data-disabled")
  })

  test("sets data-readonly on root when readOnly", async () => {
    await render(
      <ColorSelector.Root data-testid="root" defaultValue="#ff0000" readOnly />,
    )

    expect(getTestElement("root")).toHaveAttribute("data-readonly")
  })

  test("renders color swatch group with colorSwatchGroupProps", async () => {
    await render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00"]}
        defaultValue="#ffffff"
        colorSwatchGroupProps={{ "data-testid": "swatch-group" }}
      />,
    )

    expect(getTestElement("swatch-group")).toBeInTheDocument()
  })

  test("renders color swatch items with colorSwatchItemProps", async () => {
    await render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00"]}
        defaultValue="#ffffff"
        colorSwatchItemProps={{ "data-custom": "true" }}
      />,
    )

    expect(getOptionElement()).toHaveAttribute("data-custom", "true")
  })

  test("handles onChangeStart callback", async () => {
    const onChangeStart = vi.fn()

    await render(
      <ColorSelector.Root
        colorSwatches={["#ff0000"]}
        defaultValue="#ffffff"
        saturationSliderProps={{ "data-testid": "saturation" }}
        onChangeStart={onChangeStart}
      />,
    )

    expect(getTestElement("saturation")).toBeInTheDocument()
  })

  test("handles onChangeEnd callback", async () => {
    const onChangeEnd = vi.fn()

    await render(
      <ColorSelector.Root
        colorSwatches={["#ff0000"]}
        defaultValue="#ffffff"
        saturationSliderProps={{ "data-testid": "saturation" }}
        onChangeEnd={onChangeEnd}
      />,
    )

    expect(getTestElement("saturation")).toBeInTheDocument()
  })

  test("hue slider pointer interaction triggers onChange, onChangeStart and onChangeEnd", async () => {
    const onChange = vi.fn()
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    await render(
      <ColorSelector.Root
        defaultValue="#ff0000"
        hueSliderProps={{ trackProps: { "data-testid": "hue-track" } }}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = getTestElement("hue-track")
    const cleanup = mockRect(track, { left: 0, width: 360 })

    pointerDown(track, { clientX: 180, clientY: 0 })
    expect(onChangeStart).toHaveBeenCalledWith(expect.any(String))

    pointerUp(window, { clientX: 180, clientY: 0 })
    expect(onChangeEnd).toHaveBeenCalledWith(expect.any(String))

    cleanup()
  })

  test("saturation slider pointer interaction triggers onChangeStart and onChangeEnd", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    await render(
      <ColorSelector.Root
        defaultValue="#ff0000"
        saturationSliderProps={{
          trackProps: { "data-testid": "saturation-track" },
        }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = getTestElement("saturation-track")
    const cleanup = mockRect(track, {
      height: 200,
      left: 0,
      top: 0,
      width: 200,
    })

    pointerDown(track, { clientX: 100, clientY: 100 })
    expect(onChangeStart).toHaveBeenCalledWith(expect.any(String))

    pointerUp(window, { clientX: 100, clientY: 100 })
    expect(onChangeEnd).toHaveBeenCalledWith(expect.any(String))

    cleanup()
  })

  test("alpha slider pointer interaction triggers onChangeStart and onChangeEnd", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    await render(
      <ColorSelector.Root
        defaultValue="hsla(0, 100%, 50%, 0.5)"
        format="hsla"
        alphaSliderProps={{ trackProps: { "data-testid": "alpha-track" } }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = getTestElement("alpha-track")
    const cleanup = mockRect(track, { left: 0, width: 100 })

    pointerDown(track, { clientX: 50, clientY: 0 })
    expect(onChangeStart).toHaveBeenCalledWith(expect.any(String))

    pointerUp(window, { clientX: 50, clientY: 0 })
    expect(onChangeEnd).toHaveBeenCalledWith(expect.any(String))

    cleanup()
  })

  test("does not trigger onChangeStart or onChangeEnd when disabled", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    await render(
      <ColorSelector.Root
        defaultValue="#ff0000"
        disabled
        hueSliderProps={{ trackProps: { "data-testid": "hue-track" } }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = getTestElement("hue-track")
    const cleanup = mockRect(track, { left: 0, width: 360 })

    pointerDown(track, { clientX: 180, clientY: 0 })
    pointerUp(window, { clientX: 180, clientY: 0 })

    expect(onChangeStart).not.toHaveBeenCalled()
    expect(onChangeEnd).not.toHaveBeenCalled()

    cleanup()
  })

  test("does not trigger onChangeStart or onChangeEnd when readOnly", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    await render(
      <ColorSelector.Root
        defaultValue="#ff0000"
        readOnly
        hueSliderProps={{ trackProps: { "data-testid": "hue-track" } }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = getTestElement("hue-track")
    const cleanup = mockRect(track, { left: 0, width: 360 })

    pointerDown(track, { clientX: 180, clientY: 0 })
    pointerUp(window, { clientX: 180, clientY: 0 })

    expect(onChangeStart).not.toHaveBeenCalled()
    expect(onChangeEnd).not.toHaveBeenCalled()

    cleanup()
  })

  test("eye dropper has correct tabIndex when interactive", async () => {
    await render(
      <ColorSelector.Root defaultValue="#ff0000">
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    expect(getTestElement("eye-dropper")).toHaveAttribute("tabindex", "0")
  })

  test("renders eye dropper with children when no icon prop", async () => {
    await render(
      <ColorSelector.Root defaultValue="#ff0000">
        <ColorSelector.EyeDropper data-testid="eye-dropper">
          <span data-testid="child-content">dropper</span>
        </ColorSelector.EyeDropper>
      </ColorSelector.Root>,
    )

    expect(getTestElement("child-content")).toBeInTheDocument()
  })

  test("renders with rgba format", async () => {
    const onChange = vi.fn()

    await render(
      <ColorSelector.Root
        data-testid="root"
        defaultValue="rgba(255, 0, 0, 0.5)"
        format="rgba"
        alphaSliderProps={{ "data-testid": "alpha" }}
        onChange={onChange}
      />,
    )

    expect(getTestElement("alpha")).toBeInTheDocument()
  })

  test("color swatch item does not trigger onChange on keyDown when disabled", async () => {
    const onChange = vi.fn()

    await render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00"]}
        defaultValue="#ffffff"
        disabled
        onChange={onChange}
      />,
    )

    keyDown(getOptionElement(), { key: "Enter" })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("color swatch item does not trigger onChange on keyDown when readOnly", async () => {
    const onChange = vi.fn()

    await render(
      <ColorSelector.Root
        colorSwatches={["#ff0000", "#00ff00"]}
        defaultValue="#ffffff"
        readOnly
        onChange={onChange}
      />,
    )

    keyDown(getOptionElement(), { key: " ", code: "Space" })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("eye dropper does not trigger on Enter key when disabled", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    await render(
      <ColorSelector.Root defaultValue="#ff0000" disabled>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    keyDown(getTestElement("eye-dropper"), { key: "Enter" })

    await vi.waitFor(() => {
      expect(openEyeDropper).not.toHaveBeenCalled()
    })
  })
})
