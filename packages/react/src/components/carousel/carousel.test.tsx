import type { FC } from "react"
import { a11y } from "#test"
import { Carousel } from "."

interface TestComponentProps extends Carousel.RootProps {}

const TestComponent: FC<TestComponentProps> = (props) => {
  return (
    <Carousel.Root data-testid="carousel" {...props}>
      <Carousel.List data-testid="carouselList">
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Item key={index} index={index}>
            Slide {index + 1}
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

describe("<Carousel />", () => {
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

  test("renders component correctly", async () => {
    await a11y(<TestComponent />)
  })
})
