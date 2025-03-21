import type { FC } from "../../core"
import { Carousel } from "."
import { a11y, act, fireEvent, render, screen } from "../../../test"
import { Button } from "../button"

const slidesContentArr = new Array(3).fill(0).map((_, id) => `Slide ${id + 1}`)

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

  test("should pass a11y test", async () => {
    await a11y(
      <Carousel.Root>
        {slidesContentArr.map((value) => (
          <Carousel.Slide key={value}>{value}</Carousel.Slide>
        ))}
      </Carousel.Root>,
    )
  })

  test.todo("should render correctly when orientation is set", () => {
    const { container, rerender } = render(
      <Carousel.Root orientation="horizontal">
        {slidesContentArr.map((value) => (
          <Carousel.Slide key={value}>{value}</Carousel.Slide>
        ))}
      </Carousel.Root>,
    )

    let sliders = container.querySelector(".ui-carousel__inner")
    expect(sliders).toBeInTheDocument()

    let styles = window.getComputedStyle(sliders!)
    expect(styles.flexDirection).toBe("row")

    rerender(
      <Carousel.Root orientation="vertical">
        {slidesContentArr.map((value) => (
          <Carousel.Slide key={value}>{value}</Carousel.Slide>
        ))}
      </Carousel.Root>,
    )

    sliders = container.querySelector(".ui-carousel__inner")
    expect(sliders).toBeInTheDocument()

    styles = window.getComputedStyle(sliders!)
    expect(styles.flexDirection).toBe("column")
  })

  test("should render defaultSlide correctly", () => {
    render(
      <Carousel.Root defaultIndex={2}>
        {slidesContentArr.map((value) => (
          <Carousel.Slide key={value}>{value}</Carousel.Slide>
        ))}
      </Carousel.Root>,
    )

    expect(screen.getByText("Slide 3").parentNode).toHaveAttribute(
      "data-selected",
    )
  })

  test("should render correctly slide when using control button", () => {
    render(
      <Carousel.Root
        controlNextProps={{ icon: <span>Next slide</span> }}
        controlPrevProps={{
          icon: <span>Prev slide</span>,
        }}
      >
        {slidesContentArr.map((value) => (
          <Carousel.Slide key={value}>{value}</Carousel.Slide>
        ))}
      </Carousel.Root>,
    )

    fireEvent.click(screen.getByText("Next slide"))

    expect(screen.getByText("Slide 2").parentNode).toHaveAttribute(
      "data-selected",
    )

    fireEvent.click(screen.getByText("Prev slide"))

    expect(screen.getByText("Slide 1").parentNode).toHaveAttribute(
      "data-selected",
    )
  })

  test("should switch to correctly slide when click on indicator", () => {
    render(
      <Carousel.Root>
        {slidesContentArr.map((value) => (
          <Carousel.Slide key={value}>{value}</Carousel.Slide>
        ))}
      </Carousel.Root>,
    )

    fireEvent.click(
      document.querySelectorAll(".ui-carousel__indicator")[
        slidesContentArr.length - 1
      ]!,
    )

    expect(screen.getByText("Slide 3").parentNode).toHaveAttribute(
      "data-selected",
    )
  })

  test("should render correctly when using autoplay", () => {
    const delayTimer = 500
    vi.useFakeTimers()

    const carouselElement = (
      <Carousel.Root autoplay delay={delayTimer}>
        {slidesContentArr.map((value) => (
          <Carousel.Slide key={value}>{value}</Carousel.Slide>
        ))}
      </Carousel.Root>
    )

    const { rerender } = render(carouselElement)

    // First after delay timer should be slide 2
    act(() => {
      vi.advanceTimersByTime(delayTimer)
    })
    rerender(carouselElement)
    expect(screen.getByText("Slide 2").parentNode).toHaveAttribute(
      "data-selected",
    )

    // Finally slide 3 must be have data-selected
    act(() => {
      vi.advanceTimersByTime(delayTimer)
    })
    rerender(carouselElement)
    expect(screen.getByText("Slide 3").parentNode).toHaveAttribute(
      "data-selected",
    )
  })

  test("should stop autoplay on mouse enter", () => {
    vi.useFakeTimers()
    const carouselElement = (
      <Carousel.Root autoplay delay={500} stopMouseEnterAutoplay>
        {slidesContentArr.map((value) => (
          <Carousel.Slide key={value}>{value}</Carousel.Slide>
        ))}
      </Carousel.Root>
    )

    const { rerender } = render(carouselElement)

    fireEvent.mouseEnter(screen.getByText("Slide 1"))

    vi.advanceTimersByTime(10000)
    rerender(carouselElement)

    expect(screen.getByText("Slide 1").parentNode).toHaveAttribute(
      "data-selected",
    )
  })

  test("should disabled next and prev button when looping is disabled", () => {
    render(
      <Carousel.Root
        loop={false}
        controlNextProps={{ icon: <span>Next slide</span> }}
        controlPrevProps={{
          icon: <span>Prev slide</span>,
        }}
      >
        {slidesContentArr.map((value) => (
          <Carousel.Slide key={value}>{value}</Carousel.Slide>
        ))}
      </Carousel.Root>,
    )

    // When first slide the prev button should be disabled
    expect(screen.getByText("Prev slide").parentNode).toBeDisabled()

    // Move to the last slide
    fireEvent.click(
      document.querySelectorAll(".ui-carousel__indicator")[
        slidesContentArr.length - 1
      ]!,
    )

    // When last slide the next button should be disabled
    expect(screen.getByText("Next slide").parentNode).toBeDisabled()
  })

  test("should not display control element when withControl is false", () => {
    render(
      <Carousel.Root withControls={false}>
        {slidesContentArr.map((value) => (
          <Carousel.Slide key={value}>{value}</Carousel.Slide>
        ))}
      </Carousel.Root>,
    )

    expect(document.querySelectorAll(".ui-carousel.__control")).toHaveLength(0)
  })

  test("should not display indicators element when withIndicators is false", () => {
    render(
      <Carousel.Root withIndicators={false}>
        {slidesContentArr.map((value) => (
          <Carousel.Slide key={value}>{value}</Carousel.Slide>
        ))}
      </Carousel.Root>,
    )

    expect(document.querySelectorAll(".ui-carousel__indicators")).toHaveLength(
      0,
    )
  })

  test("should render function indicator correctly", () => {
    const indicatorComponent: FC<{
      index: number
      selected: boolean
    }> = ({ index }) => {
      return <Button>{`test indicator ${index}`}</Button>
    }

    render(
      <Carousel.Root indicatorsProps={{ component: indicatorComponent }}>
        {slidesContentArr.map((value) => (
          <Carousel.Slide key={value}>{value}</Carousel.Slide>
        ))}
      </Carousel.Root>,
    )

    const indicators = screen.getAllByText(/test indicator \d+/i)

    expect(indicators).toHaveLength(slidesContentArr.length)

    indicators.forEach((indicator) => expect(indicator).toBeInTheDocument())
  })
})
