import { a11y } from "#test"
import { InfiniteScrollArea } from "."
import { noop } from "../../utils"

describe("<InfiniteScrollArea />", () => {
  // jsdom does not implement IntersectionObserver; supply a no-op stub so the
  // component can mount during the axe pass.
  const defaultIntersectionObserver = globalThis.IntersectionObserver
  const IntersectionObserverMock = vi.fn(
    function IntersectionObserverMock(this: {
      disconnect: () => void
      observe: () => void
      takeRecords: () => void
      unobserve: () => void
    }) {
      this.disconnect = noop
      this.observe = noop
      this.takeRecords = noop
      this.unobserve = noop
    },
  )

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
})
