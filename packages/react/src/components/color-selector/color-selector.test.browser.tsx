import { page, render } from "#test/browser"
import { ColorSelector } from "./"

const getTrackRect = (testId: string) => {
  const track = page.getByTestId(testId).element()

  if (!(track instanceof HTMLElement))
    throw new Error("Expected an HTMLElement")

  return { rect: track.getBoundingClientRect(), track }
}

const pointer = (
  target: EventTarget,
  type: "pointerdown" | "pointerup",
  x: number,
  y: number,
) => {
  target.dispatchEvent(
    new PointerEvent(type, { bubbles: true, clientX: x, clientY: y }),
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
        hueSliderProps={{
          trackProps: { style: { width: 360 }, "data-testid": "hue-track" },
        }}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const { rect, track } = getTrackRect("hue-track")

    pointer(track, "pointerdown", rect.left + rect.width / 2, rect.top)
    expect(onChangeStart).toHaveBeenCalledWith(expect.any(String))

    pointer(window, "pointerup", rect.left + rect.width / 2, rect.top)
    expect(onChangeEnd).toHaveBeenCalledWith(expect.any(String))
  })

  test("saturation slider pointer interaction triggers onChangeStart and onChangeEnd", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()
    await render(
      <ColorSelector.Root
        defaultValue="#ff0000"
        saturationSliderProps={{
          trackProps: {
            style: { height: 200, width: 200 },
            "data-testid": "saturation-track",
          },
        }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const { rect, track } = getTrackRect("saturation-track")

    pointer(
      track,
      "pointerdown",
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
    )
    expect(onChangeStart).toHaveBeenCalledWith(expect.any(String))

    pointer(
      window,
      "pointerup",
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
    )
    expect(onChangeEnd).toHaveBeenCalledWith(expect.any(String))
  })

  test("alpha slider pointer interaction triggers onChangeStart and onChangeEnd", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()
    await render(
      <ColorSelector.Root
        defaultValue="hsla(0, 100%, 50%, 0.5)"
        format="hsla"
        alphaSliderProps={{
          trackProps: { style: { width: 100 }, "data-testid": "alpha-track" },
        }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const { rect, track } = getTrackRect("alpha-track")

    pointer(track, "pointerdown", rect.left + rect.width / 2, rect.top)
    expect(onChangeStart).toHaveBeenCalledWith(expect.any(String))

    pointer(window, "pointerup", rect.left + rect.width / 2, rect.top)
    expect(onChangeEnd).toHaveBeenCalledWith(expect.any(String))
  })

  test("does not trigger onChangeStart or onChangeEnd when disabled", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()
    await render(
      <ColorSelector.Root
        defaultValue="#ff0000"
        disabled
        hueSliderProps={{
          trackProps: { style: { width: 360 }, "data-testid": "hue-track" },
        }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const { rect, track } = getTrackRect("hue-track")

    pointer(track, "pointerdown", rect.left + rect.width / 2, rect.top)
    pointer(window, "pointerup", rect.left + rect.width / 2, rect.top)

    expect(onChangeStart).not.toHaveBeenCalled()
    expect(onChangeEnd).not.toHaveBeenCalled()
  })

  test("does not trigger onChangeStart or onChangeEnd when readOnly", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()
    await render(
      <ColorSelector.Root
        defaultValue="#ff0000"
        readOnly
        hueSliderProps={{
          trackProps: { style: { width: 360 }, "data-testid": "hue-track" },
        }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const { rect, track } = getTrackRect("hue-track")

    pointer(track, "pointerdown", rect.left + rect.width / 2, rect.top)
    pointer(window, "pointerup", rect.left + rect.width / 2, rect.top)

    expect(onChangeStart).not.toHaveBeenCalled()
    expect(onChangeEnd).not.toHaveBeenCalled()
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
