import { Button } from "@yamada-ui/react"
import { render, screen, waitFor } from "@yamada-ui/test"
import { useResizeObserver } from "../src"

describe("useResizeObserver", () => {
  const defaultResizeObserver = global.ResizeObserver

  beforeAll(() => {
    global.ResizeObserver = class ResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        ;(() => {
          cb(
            [
              {
                contentRect: {
                  height: 320,
                  width: 400,
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
    const [ref, rect] = useResizeObserver()
    return (
      <Button ref={ref}>
        {rect.width} x {rect.height}
      </Button>
    )
  }

  test("return contentRect value correctly", async () => {
    render(<ButtonWithSize />)
    const button = await screen.findByRole("button")

    await waitFor(() => expect(button.textContent).toBe("400 x 320"))
  })
})
