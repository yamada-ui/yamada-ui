import { render, screen, waitFor } from "../../../test"
import { useElementSize, useResizeObserver } from "./"

describe("useResizeObserver", () => {
  const defaultResizeObserver = global.ResizeObserver

  const ResizeObserverMock = vi.fn((cb) => ({
    disconnect: vi.fn(),
    observe: vi.fn().mockImplementation(() => {
      cb([
        {
          contentRect: {
            height: 320,
            width: 400,
          },
        },
      ])
    }),
    unobserve: vi.fn(),
  }))

  beforeEach(() => {
    vi.stubGlobal("ResizeObserver", ResizeObserverMock)
  })

  afterEach(() => {
    vi.stubGlobal("ResizeObserver", defaultResizeObserver)
  })

  const ButtonWithSize = () => {
    const [ref, rect] = useResizeObserver()
    return (
      <button ref={ref}>
        {rect.width} x {rect.height}
      </button>
    )
  }

  test("return contentRect value correctly", async () => {
    render(<ButtonWithSize />)
    const button = await screen.findByRole("button")

    await waitFor(() => expect(button).toHaveTextContent("400 x 320"))
    await waitFor(() => expect(ResizeObserverMock).toHaveBeenCalledTimes(1))
  })
})

describe("useElementSize", () => {
  const defaultResizeObserver = global.ResizeObserver

  beforeAll(() => {
    global.ResizeObserver = class ResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        ;(() => {
          cb(
            [
              {
                contentRect: {
                  height: 200,
                  width: 150,
                },
              },
            ] as ResizeObserverEntry[],
            this,
          )
        })()
      }
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
    }
  })

  afterAll(() => {
    global.ResizeObserver = defaultResizeObserver
  })

  const ButtonWithSize = () => {
    const { ref, height, width } = useElementSize()
    return (
      <button ref={ref}>
        {width} x {height}
      </button>
    )
  }

  test("returns width and height correctly", async () => {
    render(<ButtonWithSize />)
    const button = await screen.findByRole("button")

    await waitFor(() => expect(button).toHaveTextContent("150 x 200"))
  })
})
