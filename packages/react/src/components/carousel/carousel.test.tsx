import type { FC } from "react"
import { a11y, fireEvent, render, screen } from "#test"
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

  test("sets `displayName` correctly", () => {
    expect(Carousel.Root.displayName).toBe("CarouselRoot")
    expect(Carousel.List.displayName).toBe("CarouselList")
    expect(Carousel.Item.displayName).toBe("CarouselItem")
    expect(Carousel.PrevTrigger.displayName).toBe("CarouselPrevTrigger")
    expect(Carousel.NextTrigger.displayName).toBe("CarouselNextTrigger")
    expect(Carousel.Indicators.displayName).toBe("CarouselIndicators")
    expect(Carousel.Indicator.displayName).toBe("CarouselIndicator")
  })

  test("sets `className` correctly", () => {
    render(<TestComponent />)
    expect(screen.getByTestId("carousel")).toHaveClass("ui-carousel__root")
    expect(screen.getByTestId("carouselList")).toHaveClass("ui-carousel__list")
    expect(screen.getByRole("tabpanel", { name: "1 of 5" })).toHaveClass(
      "ui-carousel__item",
    )
    expect(screen.getByRole("tablist")).toHaveClass("ui-carousel__indicators")
    expect(screen.getByRole("tab", { name: "Go to 1 slide" })).toHaveClass(
      "ui-carousel__indicator",
    )
    expect(
      screen.getByRole("button", { name: "Go to previous slide" }),
    ).toHaveClass("ui-carousel__trigger--prev")
    expect(
      screen.getByRole("button", { name: "Go to next slide" }),
    ).toHaveClass("ui-carousel__trigger--next")
  })

  test("renders HTML tag correctly", () => {
    render(<TestComponent />)
    expect(screen.getByTestId("carousel").tagName).toBe("SECTION")
    expect(screen.getByTestId("carouselList").tagName).toBe("DIV")
    expect(screen.getByRole("tabpanel", { name: "1 of 5" }).tagName).toBe("DIV")
    expect(screen.getByRole("tablist").tagName).toBe("DIV")
    expect(screen.getByRole("tab", { name: "Go to 1 slide" }).tagName).toBe(
      "BUTTON",
    )
    expect(
      screen.getByRole("button", { name: "Go to previous slide" }).tagName,
    ).toBe("BUTTON")
    expect(
      screen.getByRole("button", { name: "Go to next slide" }).tagName,
    ).toBe("BUTTON")
  })

  test("should render defaultSlide correctly", () => {
    render(<TestComponent defaultIndex={1} />)
    expect(screen.getByText("Slide 2")).toHaveAttribute("data-selected")
  })

  test("should render correctly slide when using control button", async () => {
    const { user } = render(<TestComponent />)
    await user.click(screen.getByRole("button", { name: "Go to next slide" }))
    expect(screen.getByText("Slide 2")).toHaveAttribute("data-selected")
    await user.click(
      screen.getByRole("button", { name: "Go to previous slide" }),
    )
    expect(screen.getByText("Slide 1")).toHaveAttribute("data-selected")
  })

  test("should switch to correctly slide when click on indicator", async () => {
    const { user } = render(<TestComponent />)
    await user.click(screen.getByRole("tab", { name: "Go to 2 slide" }))
    expect(screen.getByText("Slide 2")).toHaveAttribute("data-selected")
  })

  test("should disabled next and prev button when looping is disabled", async () => {
    const { user } = render(<TestComponent loop={false} />)
    expect(
      screen.getByRole("button", { name: "Go to previous slide" }),
    ).toBeDisabled()
    await user.click(screen.getByRole("tab", { name: "Go to 5 slide" }))
    expect(
      screen.getByRole("button", { name: "Go to next slide" }),
    ).toBeDisabled()
  })

  test("should move the carousel correctly when left or right arrow keys are pressed", async () => {
    const { user } = render(<TestComponent orientation="horizontal" />)
    await user.click(screen.getByRole("tab", { name: "Go to 1 slide" }))
    await user.keyboard("{ArrowDown}")
    expect(screen.getByText("Slide 1")).toHaveAttribute("data-selected")
    await user.keyboard("{ArrowUp}")
    expect(screen.getByText("Slide 1")).toHaveAttribute("data-selected")
    await user.keyboard("{ArrowRight}")
    expect(screen.getByText("Slide 2")).toHaveAttribute("data-selected")
    await user.keyboard("{ArrowLeft}")
    expect(screen.getByText("Slide 1")).toHaveAttribute("data-selected")
    await user.keyboard("{ArrowLeft}")
    expect(screen.getByText("Slide 5")).toHaveAttribute("data-selected")
    await user.keyboard("{ArrowRight}")
    expect(screen.getByText("Slide 1")).toHaveAttribute("data-selected")
    await user.keyboard("{End}")
    expect(screen.getByText("Slide 5")).toHaveAttribute("data-selected")
    await user.keyboard("{Home}")
    expect(screen.getByText("Slide 1")).toHaveAttribute("data-selected")
  })

  test("should move the carousel correctly when up or down arrow keys are pressed", async () => {
    const { user } = render(<TestComponent orientation="vertical" />)
    await user.click(screen.getByRole("tab", { name: "Go to 1 slide" }))
    await user.keyboard("{ArrowLeft}")
    expect(screen.getByText("Slide 1")).toHaveAttribute("data-selected")
    await user.keyboard("{ArrowRight}")
    expect(screen.getByText("Slide 1")).toHaveAttribute("data-selected")
    await user.keyboard("{ArrowDown}")
    expect(screen.getByText("Slide 2")).toHaveAttribute("data-selected")
    await user.keyboard("{ArrowUp}")
    expect(screen.getByText("Slide 1")).toHaveAttribute("data-selected")
    await user.keyboard("{ArrowUp}")
    expect(screen.getByText("Slide 5")).toHaveAttribute("data-selected")
    await user.keyboard("{ArrowDown}")
    expect(screen.getByText("Slide 1")).toHaveAttribute("data-selected")
    await user.keyboard("{End}")
    expect(screen.getByText("Slide 5")).toHaveAttribute("data-selected")
    await user.keyboard("{Home}")
    expect(screen.getByText("Slide 1")).toHaveAttribute("data-selected")
  })

  test("should render correctly when using autoplay", () => {
    const delay = 500
    vi.useFakeTimers()
    const node = <TestComponent autoplay delay={delay} />
    const { rerender } = render(node)
    expect(screen.getByText("Slide 1")).toHaveAttribute("data-selected")
    vi.advanceTimersByTime(delay)
    rerender(node)
    expect(screen.getByText("Slide 2")).toHaveAttribute("data-selected")
    vi.advanceTimersByTime(delay)
    rerender(node)
    expect(screen.getByText("Slide 3")).toHaveAttribute("data-selected")
    vi.useRealTimers()
  })

  test("should stop autoplay on mouse enter", () => {
    vi.useFakeTimers()
    const node = <TestComponent autoplay delay={500} />
    const { rerender } = render(node)
    expect(screen.getByText("Slide 1")).toHaveAttribute("data-selected")
    fireEvent.mouseEnter(screen.getByTestId("carousel"))
    vi.advanceTimersByTime(2000)
    rerender(node)
    expect(screen.getByText("Slide 1")).toHaveAttribute("data-selected")
    vi.useRealTimers()
  })
})
