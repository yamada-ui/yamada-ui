import { a11y, fireEvent, render, screen, waitFor } from "@yamada-ui/test"
import { Carousel, CarouselSlide } from "../src"

const slidesContentArr = new Array(3).fill(0).map((_, id) => `Slide ${id + 1}`)

describe("<Carousel/>", () => {
  it("should pass a11y test", async () => {
    await a11y(
      <Carousel>
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
    )
  })

  it("should render defaultSlide correctly", () => {
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

  it("should render correctly slide when using control button", () => {
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

  it("should switch to correctly slide when click on indicator", () => {
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
      ],
    )

    expect(screen.getByText("Slide 3").parentNode).toHaveAttribute(
      "data-selected",
    )
  })

  it("should render correctly when using autoplay", () => {
    const delayTimer = 500
    jest.useFakeTimers()

    const carouselElement = (
      <Carousel autoplay delay={delayTimer}>
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>
    )

    const { rerender } = render(carouselElement)

    // First after delay timer should be slide 2
    jest.advanceTimersByTime(delayTimer)
    rerender(carouselElement)
    expect(screen.getByText("Slide 2").parentNode).toHaveAttribute(
      "data-selected",
    )

    // Finally slide 3 must be have data-selected
    jest.advanceTimersByTime(delayTimer)
    rerender(carouselElement)
    expect(screen.getByText("Slide 3").parentNode).toHaveAttribute(
      "data-selected",
    )
  })

  it("should do not stop autoplay on mouse enter", async () => {
    render(
      <Carousel delay={500} autoplay stopMouseEnterAutoplay={false}>
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
    )

    fireEvent.mouseEnter(screen.getByText("Slide 1"))

    await waitFor(() => {
      expect(screen.getByText("Slide 2").parentNode).toHaveAttribute(
        "data-selected",
      )
    })
  })

  it("should stop autoplay on mouse enter", () => {
    jest.useFakeTimers()
    const carouselElement = (
      <Carousel delay={500} autoplay stopMouseEnterAutoplay>
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>
    )

    const { rerender } = render(carouselElement)

    fireEvent.mouseEnter(screen.getByText("Slide 1"))

    jest.advanceTimersByTime(10000)
    rerender(carouselElement)

    expect(screen.getByText("Slide 1").parentNode).toHaveAttribute(
      "data-selected",
    )
  })

  it("should disabled next and prev button when looping is disabled", () => {
    render(
      <Carousel
        controlNextProps={{ icon: <span>Next slide</span> }}
        controlPrevProps={{
          icon: <span>Prev slide</span>,
        }}
        loop={false}
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
      ],
    )

    // When last slide the next button should be disabled
    expect(screen.getByText("Next slide").parentNode).toBeDisabled()
  })

  it("should not display control element when withControl is false", () => {
    render(
      <Carousel withControls={false}>
        {slidesContentArr.map((value) => (
          <CarouselSlide key={value}>{value}</CarouselSlide>
        ))}
      </Carousel>,
    )

    expect(document.querySelectorAll(".ui-carousel__control")).toHaveLength(0)
  })

  it("should not display indicators element when withIndicators is false", () => {
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
})
