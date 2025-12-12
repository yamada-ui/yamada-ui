import type { FC } from "react"
import { page, render } from "#browser-test"
import { Carousel } from "../"

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
  test("sets `displayName` correctly", () => {
    expect(Carousel.Root.displayName).toBe("CarouselRoot")
    expect(Carousel.List.displayName).toBe("CarouselList")
    expect(Carousel.Item.displayName).toBe("CarouselItem")
    expect(Carousel.PrevTrigger.displayName).toBe("CarouselPrevTrigger")
    expect(Carousel.NextTrigger.displayName).toBe("CarouselNextTrigger")
    expect(Carousel.Indicators.displayName).toBe("CarouselIndicators")
    expect(Carousel.Indicator.displayName).toBe("CarouselIndicator")
  })

  test("sets `className` correctly", async () => {
    render(<TestComponent />)

    await expect
      .element(page.getByTestId("carousel"))
      .toHaveClass("ui-carousel__root")
    await expect
      .element(page.getByTestId("carouselList"))
      .toHaveClass("ui-carousel__list")
    await expect
      .element(page.getByRole("tabpanel", { name: "1 of 5" }))
      .toHaveClass("ui-carousel__item")
    await expect
      .element(page.getByRole("tablist"))
      .toHaveClass("ui-carousel__indicators")
    await expect
      .element(page.getByRole("tab", { name: "Go to 1 slide" }))
      .toHaveClass("ui-carousel__indicator")
    await expect
      .element(page.getByRole("button", { name: "Go to previous slide" }))
      .toHaveClass("ui-carousel__trigger--prev")
    await expect
      .element(page.getByRole("button", { name: "Go to next slide" }))
      .toHaveClass("ui-carousel__trigger--next")
  })

  test("renders HTML tag correctly", () => {
    render(<TestComponent />)

    expect(page.getByTestId("carousel").element().tagName).toBe("SECTION")
    expect(page.getByTestId("carouselList").element().tagName).toBe("DIV")
    expect(
      page.getByRole("tabpanel", { name: "1 of 5" }).element().tagName,
    ).toBe("DIV")
    expect(page.getByRole("tablist").element().tagName).toBe("DIV")
    expect(
      page.getByRole("tab", { name: "Go to 1 slide" }).element().tagName,
    ).toBe("BUTTON")
    expect(
      page.getByRole("button", { name: "Go to previous slide" }).element()
        .tagName,
    ).toBe("BUTTON")
    expect(
      page.getByRole("button", { name: "Go to next slide" }).element().tagName,
    ).toBe("BUTTON")
  })

  test("should render defaultSlide correctly", async () => {
    render(<TestComponent defaultIndex={1} />)

    await expect
      .element(page.getByText("Slide 2"))
      .toHaveAttribute("data-selected")
  })

  test("should render correctly slide when using control button", async () => {
    const { user } = render(<TestComponent />)

    await user.click(page.getByRole("button", { name: "Go to next slide" }))
    vi.waitFor(async () => {
      await expect
        .element(page.getByText("Slide 2"))
        .toHaveAttribute("data-selected")
    })

    await user.click(
      page.getByRole("button", {
        name: "Go to previous slide",
      }),
    )
    vi.waitFor(async () => {
      await expect
        .element(page.getByText("Slide 1"))
        .toHaveAttribute("data-selected")
    })
  })

  test("should switch to correctly slide when click on indicator", async () => {
    const { user } = render(<TestComponent />)

    await user.click(page.getByRole("tab", { name: "Go to 2 slide" }))
    await expect
      .element(page.getByText("Slide 2"))
      .toHaveAttribute("data-selected")
  })

  test("should disabled next and prev button when looping is disabled", async () => {
    const { user } = render(<TestComponent loop={false} />)

    await expect
      .element(page.getByRole("button", { name: "Go to previous slide" }))
      .toBeDisabled()

    await user.click(page.getByRole("tab", { name: "Go to 5 slide" }))
    await expect
      .element(page.getByRole("button", { name: "Go to next slide" }))
      .toBeDisabled()
  })

  test("should move the carousel correctly when left or right arrow keys are pressed", async () => {
    const { user } = render(<TestComponent orientation="horizontal" />)

    await user.click(page.getByRole("tab", { name: "Go to 1 slide" }))
    await user.keyboard("{ArrowDown}")
    await expect
      .element(page.getByText("Slide 1"))
      .toHaveAttribute("data-selected")

    await user.keyboard("{ArrowUp}")
    await expect
      .element(page.getByText("Slide 1"))
      .toHaveAttribute("data-selected")

    await user.keyboard("{ArrowRight}")
    await expect
      .element(page.getByText("Slide 2"))
      .toHaveAttribute("data-selected")

    await user.keyboard("{ArrowLeft}")
    await expect
      .element(page.getByText("Slide 1"))
      .toHaveAttribute("data-selected")

    await user.keyboard("{ArrowLeft}")
    await expect
      .element(page.getByText("Slide 5"))
      .toHaveAttribute("data-selected")

    await user.keyboard("{ArrowRight}")
    await expect
      .element(page.getByText("Slide 1"))
      .toHaveAttribute("data-selected")

    await user.keyboard("{End}")
    await expect
      .element(page.getByText("Slide 5"))
      .toHaveAttribute("data-selected")

    await user.keyboard("{Home}")
    await expect
      .element(page.getByText("Slide 1"))
      .toHaveAttribute("data-selected")
  })

  test("should move the carousel correctly when up or down arrow keys are pressed", async () => {
    const { user } = render(<TestComponent orientation="vertical" />)

    await user.click(page.getByRole("tab", { name: "Go to 1 slide" }))

    await user.keyboard("{ArrowLeft}")
    await expect
      .element(page.getByText("Slide 1"))
      .toHaveAttribute("data-selected")

    await user.keyboard("{ArrowRight}")
    await expect
      .element(page.getByText("Slide 1"))
      .toHaveAttribute("data-selected")

    await user.keyboard("{ArrowDown}")
    await expect
      .element(page.getByText("Slide 2"))
      .toHaveAttribute("data-selected")

    await user.keyboard("{ArrowUp}")
    await expect
      .element(page.getByText("Slide 1"))
      .toHaveAttribute("data-selected")

    await user.keyboard("{ArrowUp}")
    await expect
      .element(page.getByText("Slide 5"))
      .toHaveAttribute("data-selected")

    await user.keyboard("{ArrowDown}")
    await expect
      .element(page.getByText("Slide 1"))
      .toHaveAttribute("data-selected")

    await user.keyboard("{End}")
    await expect
      .element(page.getByText("Slide 5"))
      .toHaveAttribute("data-selected")

    await user.keyboard("{Home}")
    await expect
      .element(page.getByText("Slide 1"))
      .toHaveAttribute("data-selected")
  })

  describe("use Timers", () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    test("should render correctly when using autoplay", async () => {
      const delay = 500

      const node = <TestComponent autoplay delay={delay} />
      const { rerender } = render(node)

      await expect
        .element(page.getByText("Slide 1"))
        .toHaveAttribute("data-selected")
      vi.advanceTimersByTime(delay)

      rerender(node)
      await expect
        .element(page.getByText("Slide 2"))
        .toHaveAttribute("data-selected")

      vi.advanceTimersByTime(delay)
      rerender(node)
      await expect
        .element(page.getByText("Slide 3"))
        .toHaveAttribute("data-selected")
    })

    test("should stop autoplay on mouse hover", async () => {
      const node = <TestComponent autoplay delay={500} />
      const { rerender, user } = render(node)

      await expect
        .element(page.getByText("Slide 1"))
        .toHaveAttribute("data-selected")
      await user.hover(page.getByTestId("carousel"))
      vi.advanceTimersByTime(2000)

      rerender(node)
      await expect
        .element(page.getByText("Slide 1"))
        .toHaveAttribute("data-selected")
    })
  })
})
