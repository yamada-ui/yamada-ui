import { page, render } from "#test/browser"
import { noop } from "../../utils"
import { ColorSelector } from "./"
import { useColorSelector } from "./use-color-selector"

const mockRect = (
  el: HTMLElement | SVGElement,
  rect: Partial<DOMRect>,
): (() => void) => {
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

const keyDown = (element: Element, key: string, code?: string) => {
  element.dispatchEvent(
    new KeyboardEvent("keydown", { key, bubbles: true, code }),
  )
}

const click = (element: Element) => {
  element.dispatchEvent(new MouseEvent("click", { bubbles: true }))
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

    const track = page.getByTestId("hue-track").element()
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

    const track = page.getByTestId("saturation-track").element()
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

    const track = page.getByTestId("alpha-track").element()
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

    const track = page.getByTestId("hue-track").element()
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

    const track = page.getByTestId("hue-track").element()
    const cleanup = mockRect(track, { left: 0, width: 360 })

    pointerDown(track, { clientX: 180, clientY: 0 })
    pointerUp(window, { clientX: 180, clientY: 0 })

    expect(onChangeStart).not.toHaveBeenCalled()
    expect(onChangeEnd).not.toHaveBeenCalled()

    cleanup()
  })

  test("merges saturation slider props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()
    const { user } = await render(
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

    const slider = page.getByTestId("saturation-slider")

    await expect.element(slider).toHaveClass("from-root", "from-user")
    await expect.element(slider).toHaveStyle({
      backgroundColor: "rgb(255, 0, 0)",
      color: "rgb(0, 0, 255)",
    })

    await user.click(slider)

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges hue slider props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()
    const { user } = await render(
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

    const slider = page.getByTestId("hue-slider")

    await expect.element(slider).toHaveClass("from-root", "from-user")
    await expect.element(slider).toHaveStyle({
      backgroundColor: "rgb(255, 0, 0)",
      color: "rgb(0, 0, 255)",
    })

    await user.click(slider)

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges alpha slider props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()
    const { user } = await render(
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

    const slider = page.getByTestId("alpha-slider")

    await expect.element(slider).toHaveClass("from-root", "from-user")
    await expect.element(slider).toHaveStyle({
      backgroundColor: "rgb(255, 0, 0)",
      color: "rgb(0, 0, 255)",
    })

    await user.click(slider)

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges color swatch group label props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()
    const { user } = await render(
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

    const groupLabel = page.getByTestId("group-label")

    await expect.element(groupLabel).toHaveClass("from-root", "from-user")

    await user.click(groupLabel)

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges color swatch item props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()
    const { user } = await render(
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
            data-testid="swatch-item"
            value="#ff0000"
            onClick={onUserClick}
          />
        </ColorSelector.ColorSwatchGroup>
      </ColorSelector.Root>,
    )

    const option = page.getByTestId("swatch-item")

    await expect.element(option).toHaveClass("from-root", "from-user")

    await user.click(option)

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges color swatch group props from root and user", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()
    const { user } = await render(
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

    const swatchGroup = page.getByTestId("swatch-group")

    await expect.element(swatchGroup).toHaveClass("from-root", "from-user")

    await user.click(swatchGroup)

    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("eye dropper triggers color pick on click", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    const onChange = vi.fn()
    const { user } = await render(
      <ColorSelector.Root defaultValue="#ff0000" onChange={onChange}>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    await user.click(page.getByTestId("eye-dropper"))

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

    keyDown(page.getByTestId("eye-dropper").element(), "Enter")

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

    keyDown(page.getByTestId("eye-dropper").element(), " ", "Space")

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

    const eyeDropper = page.getByTestId("eye-dropper")

    await expect.element(eyeDropper).toHaveAttribute("aria-disabled", "true")
    await expect.element(eyeDropper).toHaveAttribute("tabindex", "-1")

    click(eyeDropper.element())

    expect(openEyeDropper).not.toHaveBeenCalled()
  })

  test("eye dropper does not trigger on Enter key when disabled", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    await render(
      <ColorSelector.Root defaultValue="#ff0000" disabled>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    keyDown(page.getByTestId("eye-dropper").element(), "Enter")

    expect(openEyeDropper).not.toHaveBeenCalled()
  })

  test("eye dropper does not trigger when readOnly", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    await render(
      <ColorSelector.Root defaultValue="#ff0000" readOnly>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    const eyeDropper = page.getByTestId("eye-dropper")

    await expect.element(eyeDropper).toHaveAttribute("aria-disabled", "true")

    click(eyeDropper.element())

    expect(openEyeDropper).not.toHaveBeenCalled()
  })

  test("eye dropper handles null result gracefully", async () => {
    openEyeDropper.mockResolvedValue(null)

    const onChange = vi.fn()
    const { user } = await render(
      <ColorSelector.Root defaultValue="#ff0000" onChange={onChange}>
        <ColorSelector.EyeDropper data-testid="eye-dropper" />
      </ColorSelector.Root>,
    )

    await user.click(page.getByTestId("eye-dropper"))

    await vi.waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
    })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("calls onChange when clicking a color swatch item", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <ColorSelector.Root defaultValue="#ffffff" onChange={onChange}>
        <ColorSelector.ColorSwatchGroup>
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-0"
            value="#ff0000"
          />
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-1"
            value="#00ff00"
          />
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-2"
            value="#0000ff"
          />
        </ColorSelector.ColorSwatchGroup>
      </ColorSelector.Root>,
    )

    await user.click(page.getByTestId("swatch-1"))

    expect(onChange).toHaveBeenCalledWith("#00ff00")
  })

  test("calls onChange when pressing Enter on a color swatch item", async () => {
    const onChange = vi.fn()
    await render(
      <ColorSelector.Root defaultValue="#ffffff" onChange={onChange}>
        <ColorSelector.ColorSwatchGroup>
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-0"
            value="#ff0000"
          />
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-1"
            value="#00ff00"
          />
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-2"
            value="#0000ff"
          />
        </ColorSelector.ColorSwatchGroup>
      </ColorSelector.Root>,
    )

    keyDown(page.getByTestId("swatch-0").element(), "Enter")

    expect(onChange).toHaveBeenCalledWith("#ff0000")
  })

  test("calls onChange when pressing Space on a color swatch item", async () => {
    const onChange = vi.fn()
    await render(
      <ColorSelector.Root defaultValue="#ffffff" onChange={onChange}>
        <ColorSelector.ColorSwatchGroup>
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-0"
            value="#ff0000"
          />
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-1"
            value="#00ff00"
          />
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-2"
            value="#0000ff"
          />
        </ColorSelector.ColorSwatchGroup>
      </ColorSelector.Root>,
    )

    keyDown(page.getByTestId("swatch-0").element(), " ", "Space")

    expect(onChange).toHaveBeenCalledWith("#ff0000")
  })

  test("does not call onChange on swatch click when disabled", async () => {
    const onChange = vi.fn()
    await render(
      <ColorSelector.Root defaultValue="#ffffff" disabled onChange={onChange}>
        <ColorSelector.ColorSwatchGroup>
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-0"
            value="#ff0000"
          />
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-1"
            value="#00ff00"
          />
        </ColorSelector.ColorSwatchGroup>
      </ColorSelector.Root>,
    )

    click(page.getByTestId("swatch-0").element())

    expect(onChange).not.toHaveBeenCalled()
  })

  test("does not call onChange on swatch click when readOnly", async () => {
    const onChange = vi.fn()
    await render(
      <ColorSelector.Root defaultValue="#ffffff" readOnly onChange={onChange}>
        <ColorSelector.ColorSwatchGroup>
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-0"
            value="#ff0000"
          />
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-1"
            value="#00ff00"
          />
        </ColorSelector.ColorSwatchGroup>
      </ColorSelector.Root>,
    )

    click(page.getByTestId("swatch-0").element())

    expect(onChange).not.toHaveBeenCalled()
  })

  test("color swatch item does not trigger onChange on keyDown when disabled", async () => {
    const onChange = vi.fn()
    await render(
      <ColorSelector.Root defaultValue="#ffffff" disabled onChange={onChange}>
        <ColorSelector.ColorSwatchGroup>
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-0"
            value="#ff0000"
          />
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-1"
            value="#00ff00"
          />
        </ColorSelector.ColorSwatchGroup>
      </ColorSelector.Root>,
    )

    keyDown(page.getByTestId("swatch-0").element(), "Enter")

    expect(onChange).not.toHaveBeenCalled()
  })

  test("color swatch item does not trigger onChange on keyDown when readOnly", async () => {
    const onChange = vi.fn()
    await render(
      <ColorSelector.Root defaultValue="#ffffff" readOnly onChange={onChange}>
        <ColorSelector.ColorSwatchGroup>
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-0"
            value="#ff0000"
          />
          <ColorSelector.ColorSwatchItem
            data-testid="swatch-1"
            value="#00ff00"
          />
        </ColorSelector.ColorSwatchGroup>
      </ColorSelector.Root>,
    )

    keyDown(page.getByTestId("swatch-0").element(), " ", "Space")

    expect(onChange).not.toHaveBeenCalled()
  })
})

describe("useColorSelector", () => {
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

    const { user } = await render(<Wrapper />)

    const root = page.getByTestId("root")

    await expect.element(root).toHaveAttribute("data-disabled", "")
    await expect.element(root).toHaveAttribute("data-readonly", "")
    expect(root.element().getAttribute("style")).toContain("border-width: 1px;")
    expect(root.element().getAttribute("style")).toContain("color: blue;")

    await user.click(root)

    expect(onHookClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })
})
