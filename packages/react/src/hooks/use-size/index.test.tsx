import type { FC } from "react"
import { useRef, useState } from "react"
import { render, screen } from "../../../test"
import { useSize, useSizes } from "./"

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
                  blockSize: 320,
                  inlineSize: 400,
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
      offsetHeight: {
        get() {
          return parseFloat(window.getComputedStyle(this).height) || 320
        },
      },
      offsetWidth: {
        get() {
          return parseFloat(window.getComputedStyle(this).width) || 400
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

  test("returns sizes of multiple elements correctly", () => {
    const Component: FC = () => {
      const ref = useRef<HTMLDivElement>(null)
      const sizes = useSizes({ getNodes: () => [ref.current] })

      return (
        <div>
          <div ref={ref} style={{ height: 320, width: 400 }} data-testid="el">
            {sizes[0]?.width} x {sizes[0]?.height}
          </div>
        </div>
      )
    }
    render(<Component />)

    expect(screen.getByTestId("el")).toHaveTextContent("400 x 320")
  })

  test("updates size when element size changes", async () => {
    const Component: FC = () => {
      const [{ height, width }, setSize] = useState({ height: 320, width: 400 })
      const ref = useRef<HTMLDivElement>(null)
      const sizes = useSizes({ getNodes: () => [ref.current] })

      return (
        <div>
          <button onClick={() => setSize({ height: 300, width: 300 })}>
            Resize
          </button>

          <div ref={ref} style={{ height, width }} data-testid="el">
            {sizes[0]?.width} x {sizes[0]?.height}
          </div>
        </div>
      )
    }
    const { user } = render(<Component />)

    const targetElement = screen.getByTestId("el")

    expect(targetElement).toHaveTextContent("400 x 320")

    await user.click(screen.getByRole("button", { name: /resize/i }))

    expect(targetElement).toHaveStyle({ height: "300px", width: "300px" })
  })

  test("returns undefined size when element is null", () => {
    const Component: FC = () => {
      const sizes = useSizes({ getNodes: () => [null] })

      return (
        <div data-testid="el">
          {sizes[0] ? `${sizes[0].width} x ${sizes[0].height}` : "undefined"}
        </div>
      )
    }
    const { getByTestId } = render(<Component />)

    expect(getByTestId("el")).toHaveTextContent("undefined")
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
                height: 640,
                width: 800,
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
      offsetHeight: {
        get() {
          return parseFloat(window.getComputedStyle(this).height) || 320
        },
      },
      offsetWidth: {
        get() {
          return parseFloat(window.getComputedStyle(this).width) || 400
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
      <div ref={ref} style={{ height: 320, width: 400 }} data-testid="el">
        {size?.width} x {size?.height}
      </div>
    )
  }

  test("returns size of a single element correctly", () => {
    const { getByTestId } = render(<Component />)

    expect(getByTestId("el")).toHaveTextContent("400 x 320")
  })
})
