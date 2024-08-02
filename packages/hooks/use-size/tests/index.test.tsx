import { act, fireEvent, render } from "@yamada-ui/test"
import type { FC } from "react"
import { useRef, useState } from "react"
import { useSizes, useSize } from "../src"

describe("useSizes", () => {
  const defaultResizeObserver = global.ResizeObserver
  const defaultMutationObserver = global.MutationObserver
  const defaultOffsetWidth = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    "offsetWidth",
  )
  const defaultOffsetHeight = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    "offsetHeight",
  )

  beforeAll(() => {
    global.ResizeObserver = class ResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        cb(
          [
            {
              borderBoxSize: [
                {
                  inlineSize: 400,
                  blockSize: 320,
                },
              ],
            },
          ] as any,
          this,
        )
      }

      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
    }

    global.MutationObserver = class MutationObserver {
      constructor(cb: MutationCallback) {
        setTimeout(() => {
          cb([], this)
        })
      }

      observe = vi.fn()
      disconnect = vi.fn()
      takeRecords = vi.fn()
    }

    Object.defineProperties(HTMLElement.prototype, {
      offsetWidth: {
        get() {
          return parseFloat(window.getComputedStyle(this).width) || 400
        },
      },
      offsetHeight: {
        get() {
          return parseFloat(window.getComputedStyle(this).height) || 320
        },
      },
    })
  })

  afterAll(() => {
    global.ResizeObserver = defaultResizeObserver
    global.MutationObserver = defaultMutationObserver

    Object.defineProperty(
      HTMLElement.prototype,
      "offsetWidth",
      defaultOffsetWidth!,
    )
    Object.defineProperty(
      HTMLElement.prototype,
      "offsetHeight",
      defaultOffsetHeight!,
    )
  })

  test("returns sizes of multiple elements correctly", async () => {
    const Component: FC = () => {
      const ref = useRef<HTMLDivElement>(null)
      const sizes = useSizes({ getNodes: () => [ref.current] })

      return (
        <div>
          <div ref={ref} data-testid="el" style={{ width: 400, height: 320 }}>
            {sizes[0]?.width} x {sizes[0]?.height}
          </div>
        </div>
      )
    }
    const { getByTestId } = render(<Component />)

    expect(getByTestId("el").textContent).toBe("400 x 320")
  })

  test("updates size when element size changes", async () => {
    const Component: FC = () => {
      const [{ width, height }, setSize] = useState({ width: 400, height: 320 })
      const ref = useRef<HTMLDivElement>(null)
      const sizes = useSizes({ getNodes: () => [ref.current] })

      return (
        <div>
          <button
            onClick={() => setSize({ width: 400, height: 320 })}
            data-testid="resize-button"
          >
            Resize
          </button>

          <div ref={ref} data-testid="el" style={{ width, height }}>
            {sizes[0]?.width} x {sizes[0]?.height}
          </div>
        </div>
      )
    }
    const { getByTestId } = render(<Component />)

    expect(getByTestId("el").textContent).toBe("400 x 320")

    await act(async () => fireEvent.click(getByTestId("resize-button")))

    expect(getByTestId("el").textContent).toBe("400 x 320")
  })

  test("returns undefined size when element is null", async () => {
    const Component: FC = () => {
      const sizes = useSizes({ getNodes: () => [null] })

      return (
        <div data-testid="el">
          {sizes[0] ? `${sizes[0].width} x ${sizes[0].height}` : "undefined"}
        </div>
      )
    }
    const { getByTestId } = render(<Component />)

    expect(getByTestId("el").textContent).toBe("undefined")
  })
})

describe("useSize", () => {
  const defaultResizeObserver = global.ResizeObserver
  const defaultOffsetWidth = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    "offsetWidth",
  )
  const defaultOffsetHeight = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    "offsetHeight",
  )

  beforeAll(() => {
    global.ResizeObserver = class ResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        cb(
          [
            {
              contentRect: {
                width: 800,
                height: 640,
              },
            },
          ] as ResizeObserverEntry[],
          this,
        )
      }
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
    }

    Object.defineProperties(HTMLElement.prototype, {
      offsetWidth: {
        get() {
          return parseFloat(window.getComputedStyle(this).width) || 400
        },
      },
      offsetHeight: {
        get() {
          return parseFloat(window.getComputedStyle(this).height) || 320
        },
      },
    })
  })

  afterAll(() => {
    global.ResizeObserver = defaultResizeObserver

    Object.defineProperty(
      HTMLElement.prototype,
      "offsetWidth",
      defaultOffsetWidth!,
    )
    Object.defineProperty(
      HTMLElement.prototype,
      "offsetHeight",
      defaultOffsetHeight!,
    )
  })

  const Component: FC = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const size = useSize(ref)

    return (
      <div ref={ref} data-testid="el" style={{ width: 400, height: 320 }}>
        {size?.width} x {size?.height}
      </div>
    )
  }

  test("returns size of a single element correctly", async () => {
    const { getByTestId } = render(<Component />)

    expect(getByTestId("el").textContent).toBe("400 x 320")
  })
})
