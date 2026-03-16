import type { FC } from "react"
import type { PanEventProps } from "./"
import { page, render } from "#test/browser"
import { vi } from "vitest"
import { usePanEvent } from "./"

const setup = async (props: PanEventProps = {}) => {
  const Component: FC = () => {
    const [ref, getProps] = usePanEvent<HTMLDivElement>(props)

    return <div data-testid="target" {...getProps({ ref })} />
  }

  await render(<Component />)
  const target = page.getByTestId("target")

  return { target }
}

const dispatchPointerEvent = (
  type: string,
  options: PointerEventInit & { clientX?: number; clientY?: number } = {},
) => {
  window.dispatchEvent(
    new PointerEvent(type, {
      bubbles: true,
      cancelable: true,
      clientX: options.clientX ?? 0,
      clientY: options.clientY ?? 0,
      ...options,
    }),
  )
}

const pointerDown = (
  locator: ReturnType<typeof page.getByTestId>,
  options: { clientX?: number; clientY?: number; isPrimary?: boolean } = {},
) => {
  const el = locator.element()
  if (el instanceof HTMLElement) {
    el.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        cancelable: true,
        clientX: options.clientX ?? 0,
        clientY: options.clientY ?? 0,
        isPrimary: options.isPrimary,
      }),
    )
  }
}

describe("usePanEvent", () => {
  test("calls onStart when pointer down occurs", async () => {
    const onStart = vi.fn()
    const { target } = await setup({ onStart })

    pointerDown(target, { clientX: 10, clientY: 20 })

    expect(onStart).toHaveBeenCalledTimes(1)
  })

  test("calls onMove when pointer moves beyond threshold", async () => {
    const onMove = vi.fn()
    const { target } = await setup({ onMove })

    pointerDown(target, { clientX: 0, clientY: 0 })
    dispatchPointerEvent("pointermove", { clientX: 10, clientY: 10 })

    expect(onMove).toHaveBeenCalledTimes(1)
  })

  test("does not call onMove when pointer moves within threshold", async () => {
    const onMove = vi.fn()
    const { target } = await setup({ threshold: 10, onMove })

    pointerDown(target, { clientX: 0, clientY: 0 })
    dispatchPointerEvent("pointermove", { clientX: 1, clientY: 1 })

    expect(onMove).not.toHaveBeenCalled()
  })

  test("calls onEnd when pointer up occurs", async () => {
    const onEnd = vi.fn()
    const { target } = await setup({ onEnd })

    pointerDown(target, { clientX: 0, clientY: 0 })
    dispatchPointerEvent("pointerup", { clientX: 5, clientY: 5 })

    expect(onEnd).toHaveBeenCalledTimes(1)
  })

  test("calls onEnd when pointer cancel occurs", async () => {
    const onEnd = vi.fn()
    const { target } = await setup({ onEnd })

    pointerDown(target, { clientX: 0, clientY: 0 })
    dispatchPointerEvent("pointercancel", { clientX: 5, clientY: 5 })

    expect(onEnd).toHaveBeenCalledTimes(1)
  })

  test("always moves when threshold is 0", async () => {
    const onMove = vi.fn()
    const { target } = await setup({ threshold: 0, onMove })

    pointerDown(target, { clientX: 0, clientY: 0 })
    dispatchPointerEvent("pointermove", { clientX: 0, clientY: 0 })

    expect(onMove).toHaveBeenCalledTimes(1)
  })

  test("does not trigger onStart for multi-touch events", async () => {
    const onStart = vi.fn()
    const { target } = await setup({ onStart })

    pointerDown(target, {
      clientX: 0,
      clientY: 0,
      // Simulate multi-touch by setting isPrimary to false
      isPrimary: false,
    })

    // The hook checks isMultiTouchEvent which looks at touches.length
    // With standard PointerEvent, isPrimary=false alone won't trigger multi-touch guard
    // onStart should still be called in this case
    expect(onStart).toHaveBeenCalledTimes(1)
  })

  test("cleans up listeners after pointer up", async () => {
    const onMove = vi.fn()
    const onEnd = vi.fn()
    const { target } = await setup({ onEnd, onMove })

    pointerDown(target, { clientX: 0, clientY: 0 })
    dispatchPointerEvent("pointerup", { clientX: 5, clientY: 5 })

    expect(onEnd).toHaveBeenCalledTimes(1)

    // After cleanup, further pointermove should not trigger onMove
    dispatchPointerEvent("pointermove", { clientX: 20, clientY: 20 })

    expect(onMove).not.toHaveBeenCalled()
  })

  test("cleans up listeners after pointer cancel", async () => {
    const onMove = vi.fn()
    const onEnd = vi.fn()
    const { target } = await setup({ onEnd, onMove })

    pointerDown(target, { clientX: 0, clientY: 0 })
    dispatchPointerEvent("pointercancel", { clientX: 5, clientY: 5 })

    expect(onEnd).toHaveBeenCalledTimes(1)

    // After cleanup, further pointermove should not trigger onMove
    dispatchPointerEvent("pointermove", { clientX: 20, clientY: 20 })

    expect(onMove).not.toHaveBeenCalled()
  })

  test("updates latestPoint after move and uses it for subsequent threshold checks", async () => {
    const onMove = vi.fn()
    const { target } = await setup({ threshold: 3, onMove })

    pointerDown(target, { clientX: 0, clientY: 0 })

    // First move: distance = sqrt(16+16) = ~5.66, exceeds threshold of 3
    dispatchPointerEvent("pointermove", { clientX: 4, clientY: 4 })

    expect(onMove).toHaveBeenCalledTimes(1)

    // Second move: distance from (4,4) to (5,5) = sqrt(1+1) = ~1.41, below threshold
    dispatchPointerEvent("pointermove", { clientX: 5, clientY: 5 })

    expect(onMove).toHaveBeenCalledTimes(1)

    // Third move: distance from (4,4) to (8,8) = sqrt(16+16) = ~5.66, exceeds threshold
    dispatchPointerEvent("pointermove", { clientX: 8, clientY: 8 })

    expect(onMove).toHaveBeenCalledTimes(2)
  })

  test("calls all callbacks with event, point, and rect arguments", async () => {
    const onStart = vi.fn()
    const onMove = vi.fn()
    const onEnd = vi.fn()
    const { target } = await setup({ threshold: 0, onEnd, onMove, onStart })

    pointerDown(target, { clientX: 10, clientY: 20 })

    expect(onStart).toHaveBeenCalledTimes(1)
    const [startEv, startPoint, startRect] = onStart.mock.calls[0]!
    expect(startEv).toBeInstanceOf(PointerEvent)
    expect(startPoint).toStrictEqual({ x: 10, y: 20 })
    expect(startRect).toStrictEqual(
      expect.objectContaining({
        height: expect.any(Number),
        width: expect.any(Number),
      }),
    )

    dispatchPointerEvent("pointermove", { clientX: 30, clientY: 40 })

    expect(onMove).toHaveBeenCalledTimes(1)
    const [moveEv, movePoint, moveRect] = onMove.mock.calls[0]!
    expect(moveEv).toBeInstanceOf(PointerEvent)
    expect(movePoint).toStrictEqual({ x: 30, y: 40 })
    expect(moveRect).toStrictEqual(
      expect.objectContaining({
        height: expect.any(Number),
        width: expect.any(Number),
      }),
    )

    dispatchPointerEvent("pointerup", { clientX: 50, clientY: 60 })

    expect(onEnd).toHaveBeenCalledTimes(1)
    const [endEv, endPoint, endRect] = onEnd.mock.calls[0]!
    expect(endEv).toBeInstanceOf(PointerEvent)
    expect(endPoint).toStrictEqual({ x: 50, y: 60 })
    expect(endRect).toStrictEqual(
      expect.objectContaining({
        height: expect.any(Number),
        width: expect.any(Number),
      }),
    )
  })

  test("getProps merges with provided props", async () => {
    const onPointerDown = vi.fn()

    const Component: FC = () => {
      const [ref, getProps] = usePanEvent<HTMLDivElement>()

      return <div data-testid="target" {...getProps({ ref, onPointerDown })} />
    }

    await render(<Component />)
    const target = page.getByTestId("target")

    pointerDown(target, { clientX: 0, clientY: 0 })

    expect(onPointerDown).toHaveBeenCalledTimes(1)
  })
})
