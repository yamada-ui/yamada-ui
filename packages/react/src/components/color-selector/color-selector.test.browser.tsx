import { page, render } from "#test/browser"
import { noop } from "../../utils"
import { ColorSelector } from "./"

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

describe("<ColorSelector />", () => {
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
})
