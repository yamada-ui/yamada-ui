import { vi } from "vitest"
import { page, render } from "#test/browser"
import { Slider } from "."

const getTrackRect = (testId: string) => {
  const track = page.getByTestId(testId).element()

  if (!(track instanceof HTMLElement))
    throw new Error("Expected an HTMLElement")

  return { rect: track.getBoundingClientRect(), track }
}

const pointer = (
  target: EventTarget,
  type: "pointerdown" | "pointermove" | "pointerup",
  x: number,
  y: number,
) => {
  target.dispatchEvent(
    new PointerEvent(type, {
      bubbles: true,
      clientX: x,
      clientY: y,
      isPrimary: true,
    }),
  )
}

describe("<Slider />", () => {
  test("pointer interaction triggers onChangeStart and onChangeEnd for single slider", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    await render(
      <Slider.Root
        style={{ width: 200 }}
        defaultValue={50}
        trackProps={{ "data-testid": "track" }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const { rect, track } = getTrackRect("track")

    pointer(track, "pointerdown", rect.left + rect.width / 2, rect.top)
    expect(onChangeStart).toHaveBeenCalledWith(50)

    pointer(window, "pointerup", rect.left + (rect.width * 60) / 100, rect.top)
    expect(onChangeEnd).toHaveBeenCalledWith(60)
  })

  test("pointer interaction triggers onChange during move for single slider", async () => {
    const onChange = vi.fn()

    await render(
      <Slider.Root
        style={{ width: 200 }}
        defaultValue={50}
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
      />,
    )

    const { rect, track } = getTrackRect("track")

    pointer(track, "pointerdown", rect.left + rect.width / 2, rect.top)
    pointer(
      window,
      "pointermove",
      rect.left + (rect.width * 60) / 100,
      rect.top,
    )
    expect(onChange).toHaveBeenCalledWith(60)

    pointer(window, "pointerup", rect.left + (rect.width * 60) / 100, rect.top)
  })

  test("pointer interaction triggers callbacks for range slider", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()
    const onChange = vi.fn()

    await render(
      <Slider.Root
        style={{ width: 200 }}
        defaultValue={[25, 75]}
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const { rect, track } = getTrackRect("track")

    pointer(track, "pointerdown", rect.left + (rect.width * 20) / 100, rect.top)
    expect(onChangeStart).toHaveBeenCalledWith([20, 75])

    pointer(
      window,
      "pointermove",
      rect.left + (rect.width * 30) / 100,
      rect.top,
    )
    expect(onChange).toHaveBeenCalledWith([20, 75])

    pointer(window, "pointerup", rect.left + (rect.width * 30) / 100, rect.top)
    expect(onChangeEnd).toHaveBeenCalledWith([30, 75])
  })

  test("pointer interaction selects the closest thumb on the second-thumb side", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    await render(
      <Slider.Root
        style={{ width: 200 }}
        defaultValue={[25, 75]}
        trackProps={{ "data-testid": "track" }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const { rect, track } = getTrackRect("track")

    pointer(track, "pointerdown", rect.left + (rect.width * 80) / 100, rect.top)
    expect(onChangeStart).toHaveBeenCalledWith([25, 80])

    pointer(window, "pointerup", rect.left + (rect.width * 80) / 100, rect.top)
    expect(onChangeEnd).toHaveBeenCalledWith([25, 80])
  })

  test("pointer interaction does not trigger callbacks when disabled", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()
    const onChange = vi.fn()

    await render(
      <Slider.Root
        style={{ width: 200 }}
        defaultValue={50}
        disabled
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const { rect, track } = getTrackRect("track")

    pointer(track, "pointerdown", rect.left + rect.width / 2, rect.top)
    pointer(
      window,
      "pointermove",
      rect.left + (rect.width * 60) / 100,
      rect.top,
    )
    pointer(window, "pointerup", rect.left + (rect.width * 60) / 100, rect.top)

    expect(onChangeStart).not.toHaveBeenCalled()
    expect(onChange).not.toHaveBeenCalled()
    expect(onChangeEnd).not.toHaveBeenCalled()
  })

  test("vertical slider pointer interaction uses y-axis", async () => {
    const onChange = vi.fn()

    await render(
      <Slider.Root
        style={{ height: 200 }}
        defaultValue={50}
        orientation="vertical"
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
      />,
    )

    const { rect, track } = getTrackRect("track")

    pointer(
      track,
      "pointerdown",
      rect.left,
      rect.top + (rect.height * 30) / 100,
    )
    expect(onChange).toHaveBeenCalledWith(70)

    pointer(window, "pointerup", rect.left, rect.top + (rect.height * 30) / 100)
  })
})
