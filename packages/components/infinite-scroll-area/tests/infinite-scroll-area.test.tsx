import type { InfiniteScrollAreaProps } from "../src"
import { a11y, fireEvent, render, waitFor } from "@yamada-ui/test"
import { useRef, useState } from "react"
import { Fragment } from "react/jsx-runtime"
import { InfiniteScrollArea } from "../src"

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

  test("InfiniteScrollArea renders with initialLoad correctly", async () => {
    const MyComponent = () => {
      const [count, setCount] = useState<number>(50)

      return (
        <InfiniteScrollArea
          initialLoad
          loading={<>Loading…</>}
          onLoad={async ({ finish, index }) => {
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
      isReverse,
    }: Pick<InfiniteScrollAreaProps, "isReverse">) => {
      const rootRef = useRef<HTMLDivElement>(null)

      return (
        <div ref={rootRef}>
          <InfiniteScrollArea
            isReverse={isReverse}
            loading={<>Loading…</>}
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

    const { container } = render(<MyComponent isReverse={true} />)
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
