import type { Ref } from "react"
import { a11y, act, render, renderHook, screen } from "#test"
import { Carousel } from "./"
import { useCarousel } from "./use-carousel"

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

function invokeCallbackRef<T>(ref: Ref<T> | undefined, node: null | T) {
  if (typeof ref === "function") ref(node)
}

function invokeHandler<E>(handler: ((event: E) => void) | undefined, event: E) {
  handler?.(event)
}

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
    render(
      <Carousel.Root data-testid="carousel">
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
      </Carousel.Root>,
    )

    expect(screen.getByTestId("carousel")).toHaveClass("ui-carousel__root")
    expect(screen.getByTestId("carouselList")).toHaveClass("ui-carousel__list")
    expect(screen.getByRole("tablist")).toHaveClass("ui-carousel__indicators")
    expect(
      screen.getByRole("button", { name: "Go to previous slide" }),
    ).toHaveClass("ui-carousel__trigger--prev")
    expect(
      screen.getByRole("button", { name: "Go to next slide" }),
    ).toHaveClass("ui-carousel__trigger--next")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Carousel.Root data-testid="carousel">
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
      </Carousel.Root>,
    )

    expect(screen.getByTestId("carousel").tagName).toBe("SECTION")
    expect(screen.getByTestId("carouselList").tagName).toBe("DIV")
    expect(screen.getByRole("tablist").tagName).toBe("DIV")
    expect(
      screen.getByRole("button", { name: "Go to previous slide" }).tagName,
    ).toBe("BUTTON")
    expect(
      screen.getByRole("button", { name: "Go to next slide" }).tagName,
    ).toBe("BUTTON")
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

describe("useCarousel getRootProps", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    mockState.canScrollNext.mockReset()
    mockState.canScrollNext.mockReturnValue(true)
    mockState.off.mockReset()
    mockState.on.mockReset()
    mockState.scrollNext.mockReset()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test("merges hook defaults with user props via mergeProps", () => {
    const hookRef = vi.fn()
    const userRef = vi.fn()
    const hookOnMouseEnter = vi.fn()
    const hookOnMouseLeave = vi.fn()
    const userOnMouseEnter = vi.fn()
    const userOnMouseLeave = vi.fn()
    const { result } = renderHook(() =>
      useCarousel({
        id: "hook-id",
        ref: hookRef,
        className: "hook",
        style: { color: "red" },
        "data-testid": "carousel-root",
        autoplay: true,
        delay: 20,
        orientation: "vertical",
        onMouseEnter: hookOnMouseEnter,
        onMouseLeave: hookOnMouseLeave,
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      ref: userRef,
      className: "user",
      style: { backgroundColor: "blue" },
      onMouseEnter: userOnMouseEnter,
      onMouseLeave: userOnMouseLeave,
    })
    const node = document.createElement("section")
    const enterEvent = new MouseEvent("mouseenter")
    const leaveEvent = new MouseEvent("mouseleave")

    expect(typeof merged.ref).toBe("function")

    invokeCallbackRef(merged.ref, node)
    invokeCallbackRef(merged.ref, null)

    expect(hookRef).toHaveBeenCalledTimes(2)
    expect(hookRef).toHaveBeenNthCalledWith(1, node)
    expect(hookRef).toHaveBeenNthCalledWith(2, null)
    expect(userRef).toHaveBeenCalledTimes(2)
    expect(userRef).toHaveBeenNthCalledWith(1, node)
    expect(userRef).toHaveBeenNthCalledWith(2, null)

    act(() => {
      vi.advanceTimersByTime(20)
    })
    expect(mockState.scrollNext).toHaveBeenCalledTimes(1)

    act(() => {
      invokeHandler(merged.onMouseEnter, enterEvent as never)
    })

    expect(hookOnMouseEnter).toHaveBeenCalledTimes(1)
    expect(hookOnMouseEnter).toHaveBeenCalledWith(enterEvent)
    expect(userOnMouseEnter).toHaveBeenCalledTimes(1)
    expect(userOnMouseEnter).toHaveBeenCalledWith(enterEvent)

    act(() => {
      vi.advanceTimersByTime(40)
    })
    expect(mockState.scrollNext).toHaveBeenCalledTimes(1)

    act(() => {
      invokeHandler(merged.onMouseLeave, leaveEvent as never)
    })

    expect(hookOnMouseLeave).toHaveBeenCalledTimes(1)
    expect(hookOnMouseLeave).toHaveBeenCalledWith(leaveEvent)
    expect(userOnMouseLeave).toHaveBeenCalledTimes(1)
    expect(userOnMouseLeave).toHaveBeenCalledWith(leaveEvent)

    act(() => {
      vi.advanceTimersByTime(20)
    })
    expect(mockState.scrollNext).toHaveBeenCalledTimes(2)

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged.style).toStrictEqual({
      backgroundColor: "blue",
      color: "red",
    })
    expect(merged["data-orientation"]).toBe("vertical")
    expect(merged["data-testid"]).toBe("carousel-root")
    expect(merged["aria-roledescription"]).toBe("carousel")
  })
})
