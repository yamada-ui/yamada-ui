import { a11y, render, screen } from "#test"
import { Carousel } from "./"

const mockState = vi.hoisted(() => {
  return {
    canScrollNext: vi.fn(() => true),
    off: vi.fn(),
    scrollNext: vi.fn(),
    on: vi.fn(),
  }
})

vi.mock("embla-carousel-react", () => ({
  default: () => [
    vi.fn(),
    {
      canScrollNext: mockState.canScrollNext,
      canScrollPrev: vi.fn(() => false),
      off: mockState.off,
      reInit: vi.fn(),
      scrollNext: mockState.scrollNext,
      scrollPrev: vi.fn(),
      scrollProgress: vi.fn(() => 0),
      scrollTo: vi.fn(),
      selectedScrollSnap: vi.fn(() => 0),
      on: mockState.on,
    },
  ],
}))

describe("<Carousel />", () => {
  test("passes a11y checks", async () => {
    await a11y(
      <Carousel.Root>
        <Carousel.List>
          {Array.from({ length: 3 }).map((_, index) => (
            <Carousel.Item key={index} index={index}>
              Slide {index + 1}
            </Carousel.Item>
          ))}
        </Carousel.List>

        <Carousel.PrevTrigger />
        <Carousel.NextTrigger />

        <Carousel.Indicators />
      </Carousel.Root>,
    )
  })

  test("renders custom children in CarouselIndicators", () => {
    render(
      <Carousel.Root>
        <Carousel.List>
          {Array.from({ length: 3 }).map((_, index) => (
            <Carousel.Item key={index} index={index}>
              Slide {index + 1}
            </Carousel.Item>
          ))}
        </Carousel.List>

        <Carousel.Indicators>
          <button data-testid="custom-indicator">Custom</button>
        </Carousel.Indicators>
      </Carousel.Root>,
    )

    expect(screen.getByRole("button", { name: "Custom" })).toBeInTheDocument()
  })
})
