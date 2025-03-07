import type { InfiniteScrollAreaProps } from "."
import { useRef, useState } from "react"
import { InfiniteScrollArea } from "."
import { a11y, fireEvent, render, waitFor } from "../../../test"

describe("<InfiniteScrollArea />", () => {
  const defaultIntersectionObserver = global.IntersectionObserver
  const IntersectionObserverMock = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
  }))

  beforeAll(() => {
    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock)
  })

  afterAll(() => {
    vi.stubGlobal("IntersectionObserver", defaultIntersectionObserver)
  })

  test("InfiniteScrollArea renders correctly", async () => {
    const { container } = render(
      <InfiniteScrollArea loading={<>Loading…</>}>
        {Array(50)
          .fill(0)
          .map((_, index) => (
            <div key={index} role="article">
              {index}
            </div>
          ))}
      </InfiniteScrollArea>,
    )
    await a11y(container)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(InfiniteScrollArea.displayName).toBe("InfiniteScrollAreaRoot")
    expect(InfiniteScrollArea.__ui__).toBe("InfiniteScrollAreaRoot")
  })

  test("sets `className` correctly", () => {
    const { container } = render(
      <InfiniteScrollArea loading={<>Loading…</>}>
        {Array(50)
          .fill(0)
          .map((_, index) => (
            <div key={index}>{index}</div>
          ))}
      </InfiniteScrollArea>,
    )
    expect(container.firstChild).toHaveClass("ui-infinite-scroll-area__root")
  })

  test("renders HTML tag correctly", () => {
    const { container } = render(
      <InfiniteScrollArea loading={<>Loading…</>}>
        {Array(50)
          .fill(0)
          .map((_, index) => (
            <div key={index}>{index}</div>
          ))}
      </InfiniteScrollArea>,
    )
    expect(container.firstChild?.nodeName).toBe("DIV")
  })

  test("InfiniteScrollArea renders with initialLoad correctly", () => {
    const MyComponent = () => {
      const [count, setCount] = useState<number>(50)

      return (
        <InfiniteScrollArea
          initialLoad
          loading={<>Loading…</>}
          onLoad={({ finish, index }) => {
            setCount((prev) => prev + 50)

            if (index >= 5) finish()
          }}
        >
          {Array(count)
            .fill(0)
            .map((_, index) => (
              <div key={index}>{index}</div>
            ))}
        </InfiniteScrollArea>
      )
    }

    const { getByText } = render(<MyComponent />)
    expect(getByText("51")).toBeInTheDocument()
  })

  test("InfiniteScrollArea renders with Reverse correctly", async () => {
    const MyComponent = ({
      reverse,
    }: Pick<InfiniteScrollAreaProps, "reverse">) => {
      const rootRef = useRef<HTMLDivElement>(null)

      return (
        <div ref={rootRef}>
          <InfiniteScrollArea
            loading={<>Loading…</>}
            reverse={reverse}
            rootRef={rootRef}
          >
            {Array(50)
              .fill(0)
              .map((_, index) => (
                <div key={index}>{index}</div>
              ))}
          </InfiniteScrollArea>
        </div>
      )
    }

    const { container } = render(<MyComponent reverse />)
    fireEvent.scroll(container, {
      target: {
        scrollTop: 1000,
      },
    })
    await waitFor(() => {
      expect(container.scrollTop).toBe(1000)
    })

    expect(IntersectionObserverMock).toHaveBeenLastCalledWith(
      expect.any(Function),
      {
        root: null,
        rootMargin: undefined,
        threshold: undefined,
      },
    )
  })
})
