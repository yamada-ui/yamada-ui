import type { FC } from "react"
import type { UsePanEventProps } from "./"
import { useRef } from "react"
import { drag, render, waitFor } from "../../../test"
import { usePanEvent } from "./"

describe("usePanEvent", () => {
  const Component: FC<UsePanEventProps> = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    usePanEvent(ref, props)

    return <div ref={ref} data-testid="el" />
  }

  test("should start pan session on pointerdown", async () => {
    const onSessionStart = vi.fn()

    const { getByTestId, user } = render(<Component {...{ onSessionStart }} />)

    const el = getByTestId("el")

    await user.pointer({
      target: el,
      coords: { x: 0, y: 0 },
      keys: "[MouseLeft]",
    })

    await waitFor(() =>
      expect(onSessionStart).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
      ),
    )
    expect(onSessionStart.mock.calls[0]?.[1]).toMatchObject({
      delta: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
      point: { x: 0, y: 0 },
      velocity: { x: 0, y: 0 },
    })
  })

  test("should call onStart when pan starts", async () => {
    const onStart = vi.fn()

    const { getByTestId, user } = render(<Component {...{ onStart }} />)

    const el = getByTestId("el")

    await drag(user)({ target: el, coords: (i) => ({ x: i * 10, y: i * 10 }) })

    await waitFor(() =>
      expect(onStart).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
      ),
    )
    const { point } = onStart.mock.calls[0]?.[1] ?? {}
    expect(point.x).toBeGreaterThanOrEqual(10)
    expect(point.x).toBeLessThanOrEqual(100)
    expect(point.y).toBeGreaterThanOrEqual(10)
    expect(point.y).toBeLessThanOrEqual(100)
  })

  test("should call onMove during pan", async () => {
    const onMove = vi.fn()

    const { getByTestId, user } = render(<Component {...{ onMove }} />)

    const el = getByTestId("el")

    await drag(user)({ target: el, coords: (i) => ({ x: i * 10, y: i * 10 }) })

    await waitFor(() =>
      expect(onMove).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
      ),
    )
    const { point } = onMove.mock.calls[0]?.[1] ?? {}
    expect(point.x).toBeGreaterThanOrEqual(10)
    expect(point.x).toBeLessThanOrEqual(100)
    expect(point.y).toBeGreaterThanOrEqual(10)
    expect(point.y).toBeLessThanOrEqual(100)
  })

  test("should call onEnd when pan ends", async () => {
    const onEnd = vi.fn()

    const { getByTestId, user } = render(<Component {...{ onEnd }} />)

    const el = getByTestId("el")

    await drag(user)({ target: el, coords: (i) => ({ x: i * 10, y: i * 10 }) })

    await waitFor(() =>
      expect(onEnd).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
      ),
    )
    const { point } = onEnd.mock.calls[0]?.[1] ?? {}
    expect(point.x).toBeGreaterThanOrEqual(100)
    expect(point.y).toBeGreaterThanOrEqual(100)
  })

  test("should call onSessionEnd when pan session ends", async () => {
    const onSessionEnd = vi.fn()

    const { getByTestId, user } = render(<Component {...{ onSessionEnd }} />)

    const el = getByTestId("el")

    await drag(user)({ target: el, coords: (i) => ({ x: i * 10, y: i * 10 }) })

    await waitFor(() =>
      expect(onSessionEnd).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
      ),
    )
    const { point } = onSessionEnd.mock.calls[0]?.[1] ?? {}
    expect(point.x).toBeGreaterThanOrEqual(100)
    expect(point.y).toBeGreaterThanOrEqual(100)
  })
})
