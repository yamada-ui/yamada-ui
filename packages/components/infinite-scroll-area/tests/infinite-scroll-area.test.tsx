import { a11y, render } from "@yamada-ui/test"
import { Fragment } from "react/jsx-runtime"
import { InfiniteScrollArea } from "../src"

describe("<InfiniteScrollArea />", () => {
  const defaultIntersectionObserver = global.IntersectionObserver

  beforeAll(() => {
    global.IntersectionObserver = class IntersectionObserver {
      constructor(public callback: Function) {}

      root = null
      rootMargin = ""
      thresholds = []

      observe() {}

      disconnect() {}

      unobserve() {}

      takeRecords() {
        return []
      }
    }
  })

  afterAll(() => {
    global.IntersectionObserver = defaultIntersectionObserver
  })

  test("InfiniteScrollArea renders correctly", async () => {
    const { container } = render(
      <InfiniteScrollArea loading={<>Loading…</>}>
        {Array(50)
          .fill(0)
          .map((_, index) => (
            <Fragment key={index}>{index}</Fragment>
          ))}
      </InfiniteScrollArea>,
    )
    await a11y(container)
  })
})
