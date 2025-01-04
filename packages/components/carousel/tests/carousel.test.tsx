import type { FC } from "react"
import { Button } from "@yamada-ui/button"
import { a11y, act, fireEvent, render, screen } from "@yamada-ui/test"
import { Carousel, CarouselSlide } from "../src"

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
      <Carousel>
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
    )
  })

  test("should render correctly when orientation is set", () => {
    const { container, rerender } = render(
      <Carousel orientation="horizontal">
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
    )

    let sliders = container.querySelector(".ui-carousel__sliders__inner")
    expect(sliders).toBeInTheDocument()

    let styles = window.getComputedStyle(sliders!)
    expect(styles.flexDirection).toBe("row")

    rerender(
      <Carousel orientation="vertical">
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
    )

    sliders = container.querySelector(".ui-carousel__sliders__inner")
    expect(sliders).toBeInTheDocument()

    styles = window.getComputedStyle(sliders!)
    expect(styles.flexDirection).toBe("column")
  })

  test("should render defaultSlide correctly", () => {
    render(
      <Carousel defaultIndex={2}>
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
    )

    expect(screen.getByText("Slide 3").parentNode).toHaveAttribute(
      "data-selected",
    )
  })

  test("should render correctly slide when using control button", () => {
    render(
      <Carousel
        controlNextProps={{ icon: <span>Next slide</span> }}
        controlPrevProps={{
          icon: <span>Prev slide</span>,
        }}
      >
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
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
      <Carousel>
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
    )

    fireEvent.click(
      document.querySelectorAll(".ui-carousel__indicators__indicator")[
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
      <Carousel autoplay delay={delayTimer}>
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>
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
      <Carousel autoplay delay={500} stopMouseEnterAutoplay>
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>
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
      <Carousel
        loop={false}
        controlNextProps={{ icon: <span>Next slide</span> }}
        controlPrevProps={{
          icon: <span>Prev slide</span>,
        }}
      >
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
    )

    // When first slide the prev button should be disabled
    expect(screen.getByText("Prev slide").parentNode).toBeDisabled()

    // Move to the last slide
    fireEvent.click(
      document.querySelectorAll(".ui-carousel__indicators__indicator")[
        slidesContentArr.length - 1
      ]!,
    )

    // When last slide the next button should be disabled
    expect(screen.getByText("Next slide").parentNode).toBeDisabled()
  })

  test("should not display control element when withControl is false", () => {
    render(
      <Carousel withControls={false}>
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
    )

    expect(document.querySelectorAll(".ui-carousel__control")).toHaveLength(0)
  })

  test("should not display indicators element when withIndicators is false", () => {
    render(
      <Carousel withIndicators={false}>
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
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
      <Carousel indicatorsProps={{ component: indicatorComponent }}>
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
    )

    const indicators = screen.getAllByText(/test indicator \d+/i)

    expect(indicators).toHaveLength(slidesContentArr.length)

    indicators.forEach((indicator) => expect(indicator).toBeInTheDocument())
  })

  const indicatorComponent: FC<{
    index: number
    selected: boolean
  }> = ({ index }) => {
    return (
      <Button className="ui-carousel__indicators__indicator">
        {`test indicator ${index}`}
      </Button>
    )
  }

  test("should move the carousel correctly when left or right arrow keys are pressed", () => {
    render(
      <Carousel indicatorsProps={{ component: indicatorComponent }}>
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
    )

    const carouselIndicators = document.querySelectorAll(
      ".ui-carousel__indicators__indicator",
    )
    expect(carouselIndicators).toHaveLength(3)

    const firstSlide = carouselIndicators[0] as HTMLButtonElement
    firstSlide.focus()
    expect(document.activeElement).toBe(firstSlide)

    fireEvent.keyDown(firstSlide, { key: "ArrowRight", code: "ArrowRight" })
    expect(document.activeElement).toBe(carouselIndicators[1])

    fireEvent.keyDown(firstSlide, { key: "ArrowLeft", code: "ArrowLeft" })
    expect(document.activeElement).toBe(carouselIndicators[2])

    fireEvent.keyDown(firstSlide, { key: "Home", code: "Home" })
    expect(document.activeElement).toBe(carouselIndicators[0])

    fireEvent.keyDown(firstSlide, { key: "End", code: "End" })
    expect(document.activeElement).toBe(carouselIndicators[2])
  })

  test("should move the carousel correctly when up or down arrow keys are pressed", () => {
    render(
      <Carousel
        orientation="vertical"
        indicatorsProps={{ component: indicatorComponent }}
      >
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
    )

    const carouselIndicators = document.querySelectorAll(
      ".ui-carousel__indicators__indicator",
    )
    expect(carouselIndicators).toHaveLength(3)

    const firstSlide = carouselIndicators[0] as HTMLButtonElement
    firstSlide.focus()
    expect(document.activeElement).toBe(firstSlide)

    fireEvent.keyDown(firstSlide, { key: "ArrowDown", code: "ArrowDown" })
    expect(document.activeElement).toBe(carouselIndicators[1])

    fireEvent.keyDown(firstSlide, { key: "ArrowUp", code: "ArrowUp" })
    expect(document.activeElement).toBe(carouselIndicators[2])

    fireEvent.keyDown(firstSlide, { key: "Home", code: "Home" })
    expect(document.activeElement).toBe(carouselIndicators[0])

    fireEvent.keyDown(firstSlide, { key: "End", code: "End" })
    expect(document.activeElement).toBe(carouselIndicators[2])
  })
})
