import type { InfiniteScrollAreaProps } from "."
import { a11y, page, render } from "#test/browser"
import { useRef, useState } from "react"
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

  test("renders component correctly", async () => {
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

  test("sets `displayName` correctly", () => {
    expect(InfiniteScrollArea.displayName).toBe("InfiniteScrollAreaRoot")
  })

  test("sets `className` correctly", async () => {
    const { container } = await render(
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

  test("renders HTML tag correctly", async () => {
    const { container } = await render(
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

  test("InfiniteScrollArea renders with initialLoad correctly", async () => {
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

    await render(<MyComponent />)
    await expect.element(page.getByText("51")).toBeInTheDocument()
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

    const { container } = await render(<MyComponent reverse />)

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
