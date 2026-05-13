import type { FC } from "react"
import type { PanEventProps } from "./"
import { vi } from "vitest"
import { page, render } from "#test/browser"
import { usePanEvent } from "./"

const setup = async (props: PanEventProps = {}) => {
  const Component: FC = () => {
    const [ref, getProps] = usePanEvent<HTMLButtonElement>(props)

    return (
      <button type="button" {...getProps({ ref })}>
        target
      </button>
    )
  }

  await render(<Component />)

  return page.getByRole("button", { name: "target" }).element()
}

const createPointerEvent = (
  type: string,
  options: PointerEventInit & { clientX?: number; clientY?: number } = {},
) => {
  return new PointerEvent(type, {
    bubbles: true,
    cancelable: true,
    clientX: options.clientX ?? 0,
    clientY: options.clientY ?? 0,
    ...options,
  })
}

const dispatchPointerDown = (
  target: HTMLElement | SVGElement,
  options: PointerEventInit & { clientX?: number; clientY?: number } = {},
) => {
  target.dispatchEvent(createPointerEvent("pointerdown", options))
}

describe("usePanEvent", () => {
  test("calls onStart when pointer down occurs", async () => {
    const onStart = vi.fn()
    const target = await setup({ onStart })

    dispatchPointerDown(target, { clientX: 10, clientY: 20 })

    expect(onStart).toHaveBeenCalledTimes(1)
  })

  test("calls onMove when pointer moves beyond threshold", async () => {
    const onMove = vi.fn()
    const target = await setup({ onMove })

    dispatchPointerDown(target, { clientX: 0, clientY: 0 })
    window.dispatchEvent(
      createPointerEvent("pointermove", { clientX: 10, clientY: 10 }),
    )

    expect(onMove).toHaveBeenCalledTimes(1)
  })

  test("does not call onMove when pointer moves within threshold", async () => {
    const onMove = vi.fn()
    const target = await setup({ threshold: 10, onMove })

    dispatchPointerDown(target, { clientX: 0, clientY: 0 })
    window.dispatchEvent(
      createPointerEvent("pointermove", { clientX: 1, clientY: 1 }),
    )

    expect(onMove).not.toHaveBeenCalled()
  })

  test("calls onEnd when pointer up occurs", async () => {
    const onEnd = vi.fn()
    const target = await setup({ onEnd })

    dispatchPointerDown(target, { clientX: 0, clientY: 0 })
    window.dispatchEvent(
      createPointerEvent("pointerup", { clientX: 5, clientY: 5 }),
    )

    expect(onEnd).toHaveBeenCalledTimes(1)
  })

  test("calls onEnd when pointer cancel occurs", async () => {
    const onEnd = vi.fn()
    const target = await setup({ onEnd })

    dispatchPointerDown(target, { clientX: 0, clientY: 0 })
    window.dispatchEvent(
      createPointerEvent("pointercancel", { clientX: 5, clientY: 5 }),
    )

    expect(onEnd).toHaveBeenCalledTimes(1)
  })

  test("always moves when threshold is 0", async () => {
    const onMove = vi.fn()
    const target = await setup({ threshold: 0, onMove })

    dispatchPointerDown(target, { clientX: 0, clientY: 0 })
    window.dispatchEvent(
      createPointerEvent("pointermove", { clientX: 0, clientY: 0 }),
    )

    expect(onMove).toHaveBeenCalledTimes(1)
  })

  test("cleans up listeners after pointer up", async () => {
    const onMove = vi.fn()
    const onEnd = vi.fn()
    const target = await setup({ onEnd, onMove })

    dispatchPointerDown(target, { clientX: 0, clientY: 0 })
    window.dispatchEvent(
      createPointerEvent("pointerup", { clientX: 5, clientY: 5 }),
    )

    expect(onEnd).toHaveBeenCalledTimes(1)

    window.dispatchEvent(
      createPointerEvent("pointermove", { clientX: 20, clientY: 20 }),
    )

    expect(onMove).not.toHaveBeenCalled()
  })

  test("cleans up listeners after pointer cancel", async () => {
    const onMove = vi.fn()
    const onEnd = vi.fn()
    const target = await setup({ onEnd, onMove })

    dispatchPointerDown(target, { clientX: 0, clientY: 0 })
    window.dispatchEvent(
      createPointerEvent("pointercancel", { clientX: 5, clientY: 5 }),
    )

    expect(onEnd).toHaveBeenCalledTimes(1)

    window.dispatchEvent(
      createPointerEvent("pointermove", { clientX: 20, clientY: 20 }),
    )

    expect(onMove).not.toHaveBeenCalled()
  })

  test("updates latestPoint after move and uses it for subsequent threshold checks", async () => {
    const onMove = vi.fn()
    const target = await setup({ threshold: 3, onMove })

    dispatchPointerDown(target, { clientX: 0, clientY: 0 })
    window.dispatchEvent(
      createPointerEvent("pointermove", { clientX: 4, clientY: 4 }),
    )

    expect(onMove).toHaveBeenCalledTimes(1)

    window.dispatchEvent(
      createPointerEvent("pointermove", { clientX: 5, clientY: 5 }),
    )

    expect(onMove).toHaveBeenCalledTimes(1)

    window.dispatchEvent(
      createPointerEvent("pointermove", { clientX: 8, clientY: 8 }),
    )

    expect(onMove).toHaveBeenCalledTimes(2)
  })

  test("calls all callbacks with event, point, and rect arguments", async () => {
    const onStart = vi.fn()
    const onMove = vi.fn()
    const onEnd = vi.fn()
    const target = await setup({ threshold: 0, onEnd, onMove, onStart })

    dispatchPointerDown(target, { clientX: 10, clientY: 20 })

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

    window.dispatchEvent(
      createPointerEvent("pointermove", { clientX: 30, clientY: 40 }),
    )

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

    window.dispatchEvent(
      createPointerEvent("pointerup", { clientX: 50, clientY: 60 }),
    )

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
      const [ref, getProps] = usePanEvent<HTMLButtonElement>()

      return (
        <button type="button" {...getProps({ ref, onPointerDown })}>
          target
        </button>
      )
    }

    await render(<Component />)

    const target = page.getByRole("button", { name: "target" }).element()

    dispatchPointerDown(target, { clientX: 0, clientY: 0 })

    expect(onPointerDown).toHaveBeenCalledTimes(1)
  })
})
