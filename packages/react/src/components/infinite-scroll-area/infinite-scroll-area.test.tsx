import type { InfiniteScrollAreaProps } from "."
import { useRef, useState } from "react"
import { a11y, render, screen } from "#test"
import { InfiniteScrollArea } from "."
import { noop } from "../../utils"

describe("<InfiniteScrollArea />", () => {
  const defaultIntersectionObserver = globalThis.IntersectionObserver
  const IntersectionObserverMock = vi.fn(function IntersectionObserverMock(
    this: {
      disconnect: () => void
      observe: (el: Element) => void
      takeRecords: () => void
      unobserve: (el: Element) => void
    },
    cb: (entries: IntersectionObserverEntry[]) => void,
  ) {
    this.disconnect = noop
    this.observe = (el: Element) => {
      cb([{ target: el, isIntersecting: true } as IntersectionObserverEntry])
    }
    this.takeRecords = noop
    this.unobserve = noop
  })

  beforeAll(() => {
    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock)
  })

  afterAll(() => {
    vi.stubGlobal("IntersectionObserver", defaultIntersectionObserver)
  })

  test("passes a11y checks", async () => {
    await a11y(
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
  })

  test("sets default tabIndex on feed root for accessibility", () => {
    render(
      <InfiniteScrollArea
        data-testid="infinite-scroll-area"
        loading={<>Loading…</>}
      >
        {Array(50)
          .fill(0)
          .map((_, index) => (
            <div key={index}>{index}</div>
          ))}
      </InfiniteScrollArea>,
    )

    expect(screen.getByTestId("infinite-scroll-area")).toHaveAttribute(
      "tabindex",
      "0",
    )
  })

  test("preserves explicit tabIndex on feed root", () => {
    render(
      <InfiniteScrollArea
        data-testid="infinite-scroll-area"
        loading={<>Loading…</>}
        tabIndex={-1}
      >
        {Array(50)
          .fill(0)
          .map((_, index) => (
            <div key={index}>{index}</div>
          ))}
      </InfiniteScrollArea>,
    )

    expect(screen.getByTestId("infinite-scroll-area")).toHaveAttribute(
      "tabindex",
      "-1",
    )
  })

  test("renders with `initialLoad` correctly", async () => {
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

    render(<MyComponent />)
    await expect(screen.findByText("51")).resolves.toBeInTheDocument()
  })

  test("passes the rootRef to the IntersectionObserver when `reverse`", () => {
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

    const rootElement = container.firstElementChild
    expect(IntersectionObserverMock).toHaveBeenLastCalledWith(
      expect.any(Function),
      {
        root: rootElement,
        rootMargin: undefined,
        threshold: undefined,
      },
    )
  })
})
