import { a11y, render, screen } from "#test"
import { Carousel } from "./"

describe("<Carousel />", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        disconnect() {}
        observe() {}
        unobserve() {}
      },
    )
  })

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
