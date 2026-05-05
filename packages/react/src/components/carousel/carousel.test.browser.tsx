import type { FC } from "react"
import { page, render } from "#test/browser"
import { Carousel } from "./"

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
  test("should merge root consumer props with internal props", async () => {
    const ref = vi.fn()
    const onMouseEnter = vi.fn()
    const onMouseLeave = vi.fn()

    const { user } = await render(
      <TestComponent
        ref={ref}
        className="custom-root"
        style={{ marginTop: "1px" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />,
    )

    const root = page.getByTestId("carousel")

    await expect.element(root).toHaveClass("ui-carousel__root")
    await expect.element(root).toHaveClass("custom-root")
    await expect.element(root).toHaveStyle("margin-top: 1px")

    await user.hover(root)
    await user.unhover(root)

    expect(onMouseEnter).toHaveBeenCalledWith(
      expect.objectContaining({ type: "mouseenter" }),
    )
    expect(onMouseLeave).toHaveBeenCalledWith(
      expect.objectContaining({ type: "mouseleave" }),
    )

    const rootElement = root.element()
    const refElement = ref.mock.calls.find(
      ([value]) => value instanceof HTMLElement,
    )?.[0]

    expect(refElement).toBe(rootElement)
  })

  test("should render defaultSlide correctly", async () => {
    await render(<TestComponent defaultIndex={1} />)

    await expect
      .element(page.getByText("Slide 2"))
      .toHaveAttribute("data-selected")
  })

  test("should render correctly slide when using control button", async () => {
    const { user } = await render(<TestComponent />)

    await user.click(page.getByRole("button", { name: "Go to next slide" }))

    const slide2 = page.getByText("Slide 2")
    await expect.element(slide2).toHaveAttribute("data-selected")

    await user.click(
      page.getByRole("button", {
        name: "Go to previous slide",
      }),
    )

    const slide1 = page.getByText("Slide 1")
    await expect.element(slide1).toHaveAttribute("data-selected")
  })

  test("should disabled next and prev button when looping is disabled", async () => {
    const { user } = await render(<TestComponent loop={false} />)

    await expect
      .element(page.getByRole("button", { name: "Go to previous slide" }))
      .toBeDisabled()

    await user.click(page.getByRole("tab", { name: "Go to 5 slide" }))
    await expect
      .element(page.getByRole("button", { name: "Go to next slide" }))
      .toBeDisabled()
  })

  test("should move the carousel correctly when left or right arrow keys are pressed", async () => {
    const { user } = await render(<TestComponent orientation="horizontal" />)

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
    const { user } = await render(<TestComponent orientation="vertical" />)

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

  test("renders custom children in CarouselIndicators", async () => {
    await render(
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

    const customIndicator = page.getByRole("button", { name: "Custom" })
    await expect.element(customIndicator).toBeVisible()
  })

  test("renders CarouselIndicators with render prop returning a valid element", async () => {
    await render(
      <Carousel.Root>
        <Carousel.List>
          {Array.from({ length: 3 }).map((_, index) => (
            <Carousel.Item key={index} index={index}>
              Slide {index + 1}
            </Carousel.Item>
          ))}
        </Carousel.List>

        <Carousel.Indicators
          render={({ index, selected }) => (
            <button data-testid={`render-indicator-${index}`}>
              {selected ? "active" : "inactive"}
            </button>
          )}
        />
      </Carousel.Root>,
    )

    await expect.element(page.getByTestId("render-indicator-0")).toBeVisible()
    await expect.element(page.getByTestId("render-indicator-1")).toBeVisible()
    await expect.element(page.getByTestId("render-indicator-2")).toBeVisible()
  })

  test("renders CarouselIndicators with render prop returning a non-element", async () => {
    await render(
      <Carousel.Root>
        <Carousel.List>
          {Array.from({ length: 3 }).map((_, index) => (
            <Carousel.Item key={index} index={index}>
              Slide {index + 1}
            </Carousel.Item>
          ))}
        </Carousel.List>

        <Carousel.Indicators render={({ index }) => `dot-${index}`} />
      </Carousel.Root>,
    )

    await expect.element(page.getByText("dot-0")).toBeVisible()
    await expect.element(page.getByText("dot-1")).toBeVisible()
  })
})
