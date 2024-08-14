import { drag, render, waitFor } from "@yamada-ui/test"
import type { FC } from "react"
import { useRef } from "react"
import type { UsePanEventProps } from "../src"
import { usePanEvent } from "../src"

describe("usePanEvent", () => {
  beforeAll(() => {
    Object.defineProperties(MouseEvent.prototype, {
      pageX: {
        get() {
          return this.clientX
        },
        configurable: true,
      },
      pageY: {
        get() {
          return this.clientY
        },
        configurable: true,
      },
    })
  })

  afterAll(() => {
    Object.defineProperty(MouseEvent.prototype, "pageX", {
      value: undefined,
      configurable: true,
    })
    Object.defineProperty(MouseEvent.prototype, "pageY", {
      value: undefined,
      configurable: true,
    })
  })

  const Component: FC<UsePanEventProps> = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    usePanEvent(ref, props)

    return <div ref={ref} data-testid="el" />
  }

  test("should start pan session on pointerdown", async () => {
    const onSessionStart = vi.fn()

    const { user, getByTestId } = render(<Component {...{ onSessionStart }} />)

    const el = getByTestId("el")

    await user.pointer({
      target: el,
      keys: "[MouseLeft]",
      coords: { x: 0, y: 0 },
    })

    await waitFor(() =>
      expect(onSessionStart).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
      ),
    )
    expect(onSessionStart.mock.calls[0][1]).toMatchObject({
      point: { x: 0, y: 0 },
      delta: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
      velocity: { x: 0, y: 0 },
    })
  })

  test("should call onStart when pan starts", async () => {
    const onStart = vi.fn()

    const { user, getByTestId } = render(<Component {...{ onStart }} />)

    const el = getByTestId("el")

    await drag(user)({ target: el, coords: (i) => ({ x: i * 10, y: i * 10 }) })

    await waitFor(() =>
      expect(onStart).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
      ),
    )
    const { point } = onStart.mock.calls[0][1]
    expect(point.x).toBeGreaterThanOrEqual(10)
    expect(point.x).toBeLessThanOrEqual(100)
    expect(point.y).toBeGreaterThanOrEqual(10)
    expect(point.y).toBeLessThanOrEqual(100)
  })

  test("should call onMove during pan", async () => {
    const onMove = vi.fn()

    const { user, getByTestId } = render(<Component {...{ onMove }} />)

    const el = getByTestId("el")

    await drag(user)({ target: el, coords: (i) => ({ x: i * 10, y: i * 10 }) })

    await waitFor(() =>
      expect(onMove).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
      ),
    )
    const { point } = onMove.mock.calls[0][1]
    expect(point.x).toBeGreaterThanOrEqual(10)
    expect(point.x).toBeLessThanOrEqual(100)
    expect(point.y).toBeGreaterThanOrEqual(10)
    expect(point.y).toBeLessThanOrEqual(100)
  })

  test("should call onEnd when pan ends", async () => {
    const onEnd = vi.fn()

    const { user, getByTestId } = render(<Component {...{ onEnd }} />)

    const el = getByTestId("el")

    await drag(user)({ target: el, coords: (i) => ({ x: i * 10, y: i * 10 }) })

    await waitFor(() =>
      expect(onEnd).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
      ),
    )
    const { point } = onEnd.mock.calls[0][1]
    expect(point.x).toBeGreaterThanOrEqual(100)
    expect(point.y).toBeGreaterThanOrEqual(100)
  })

  test("should call onSessionEnd when pan session ends", async () => {
    const onSessionEnd = vi.fn()

    const { user, getByTestId } = render(<Component {...{ onSessionEnd }} />)

    const el = getByTestId("el")

    await drag(user)({ target: el, coords: (i) => ({ x: i * 10, y: i * 10 }) })

    await waitFor(() =>
      expect(onSessionEnd).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
      ),
    )
    const { point } = onSessionEnd.mock.calls[0][1]
    expect(point.x).toBeGreaterThanOrEqual(100)
    expect(point.y).toBeGreaterThanOrEqual(100)
  })
})
