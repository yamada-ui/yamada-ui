import type { FocusEventHandler, PropsWithChildren, Ref } from "react"
import type { UseRatingProps } from "./use-rating"
import { createElement, createRef } from "react"
import { a11y, act, render, renderHook, screen } from "#test"
import { Rating } from "."
import { RatingContext, useRating, useRatingItem } from "./use-rating"

function invokeCallbackRef<T>(ref: Ref<T> | undefined, node: null | T) {
  if (typeof ref === "function") ref(node)
}

function invokeHandler<E>(handler: ((event: E) => void) | undefined, event: E) {
  handler?.(event)
}

function createRatingItemWrapper(props: UseRatingProps = {}) {
  return function RatingItemWrapper({ children }: PropsWithChildren) {
    const { getRootProps: _getRootProps, ...context } = useRating(props)

    return createElement(RatingContext, { value: context }, children)
  }
}

describe("<Rating />", () => {
  test("passes a11y checks", async () => {
    await a11y(<Rating />)
  })

  test("renders correctly with value", () => {
    const { container } = render(<Rating value={4} />)

    const items = container.querySelectorAll(".ui-rating__item")

    for (let i = 1; i < 5; i++) {
      expect(items[i]).toHaveAttribute("data-filled")
    }
  })

  test("renders disabled rating with aria-disabled", () => {
    render(<Rating data-testid="rating" disabled />)

    expect(screen.getByTestId("rating")).toHaveAttribute("aria-disabled")
  })

  test("renders readonly rating with aria-readonly", () => {
    render(<Rating data-testid="rating" readOnly />)

    expect(screen.getByTestId("rating")).toHaveAttribute("aria-readonly")
  })

  test("highlightSelectedOnly fills only the selected item", () => {
    const { container } = render(
      <Rating defaultValue={3} highlightSelectedOnly />,
    )

    const items = container.querySelectorAll(".ui-rating__item")
    expect(items[3]).toHaveAttribute("data-filled")

    for (let i = 1; i < 3; i++) {
      expect(items[i]).not.toHaveAttribute("data-filled")
    }
    for (let i = 4; i < items.length; i++) {
      expect(items[i]).not.toHaveAttribute("data-filled")
    }
  })

  test("applies custom color per value", () => {
    const colors: { [key: number]: string } = {
      1: "red.500",
      2: "orange.500",
      3: "yellow.500",
      4: "green.500",
      5: "blue.500",
    }

    const getColor = (value: number): string | undefined => colors[value]

    const { container } = render(<Rating color={getColor} defaultValue={5} />)
    const items = container.querySelectorAll(".ui-rating__item")

    const styleElements = document.getElementsByTagName("style")
    const cssText = Array.from(styleElements)
      .map((style) => style.textContent)
      .join("")

    for (let i = 1; i < items.length; i++) {
      expect(items[i]).toHaveAttribute("data-filled")

      const emotionClass = Array.from(items[i]!.classList)[1]

      const expectedColor = getColor(i)
      const expectedVar = `var(--ui-colors-${expectedColor!.replace(".", "-")})`

      const ruleExists =
        cssText.includes(`${emotionClass}[data-filled]`) &&
        cssText.includes(`color:${expectedVar}`)
      expect(ruleExists).toBeTruthy()
    }
  })
})

describe("useRating", () => {
  test("getRootProps keeps caller precedence and composes refs and handlers", () => {
    const order: string[] = []
    const onChange = vi.fn()
    const restOnBlur = vi.fn()
    const restOnBlurHandler: FocusEventHandler<HTMLDivElement> = (event) => {
      order.push("rest-blur")
      restOnBlur(event)
    }
    const restOnFocus = vi.fn()
    const restOnFocusHandler: FocusEventHandler<HTMLDivElement> = (event) => {
      order.push("rest-focus")
      restOnFocus(event)
    }
    const propsOnBlur = vi.fn()
    const propsOnBlurHandler: FocusEventHandler<HTMLDivElement> = (event) => {
      order.push("props-blur")
      propsOnBlur(event)
    }
    const propsOnFocus = vi.fn()
    const propsOnFocusHandler: FocusEventHandler<HTMLDivElement> = (event) => {
      order.push("props-focus")
      propsOnFocus(event)
    }
    const restOnMouseEnter = vi.fn(() => {
      order.push("rest-mouseenter")
    })
    const propsOnMouseEnter = vi.fn(() => {
      order.push("props-mouseenter")
    })
    const restRef = createRef<HTMLDivElement>()
    const propsRef = createRef<HTMLDivElement>()
    const { result } = renderHook(
      () =>
        useRating({
          ref: restRef,
          className: "from-rest",
          style: { color: "red", paddingTop: "4px" },
          "aria-label": "from-rest",
          role: "presentation",
          onBlur: restOnBlurHandler,
          onChange,
          onFocus: restOnFocusHandler,
          onMouseEnter: restOnMouseEnter,
        }),
      { withProvider: false },
    )
    const merged = result.current.getRootProps({
      ref: propsRef,
      className: "from-props",
      style: { backgroundColor: "blue", paddingTop: "8px" },
      "aria-label": "from-props",
      role: "radiogroup",
      onBlur: propsOnBlurHandler,
      onFocus: propsOnFocusHandler,
      onMouseEnter: propsOnMouseEnter,
    })
    const node = document.createElement("div")
    const touchEvent = new Event("touchstart", {
      bubbles: true,
      cancelable: true,
    }) as Event & { touches: { clientX: number; clientY: number }[] }
    const focusEvent = new FocusEvent("focus")
    const blurEvent = new FocusEvent("blur")

    Object.defineProperty(touchEvent, "touches", {
      value: [{ clientX: 50, clientY: 10 }],
    })
    Object.defineProperty(node, "getBoundingClientRect", {
      value: () =>
        ({
          bottom: 20,
          height: 20,
          left: 0,
          right: 100,
          top: 0,
          width: 100,
          x: 0,
          y: 0,
        }) as DOMRect,
    })

    expect(merged["aria-label"]).toBe("from-props")
    expect(merged.role).toBe("radiogroup")
    expect(String(merged.className)).toContain("from-rest")
    expect(String(merged.className)).toContain("from-props")
    expect(merged.style).toMatchObject({
      backgroundColor: "blue",
      color: "red",
      paddingTop: "8px",
    })

    act(() => {
      invokeCallbackRef(merged.ref, node)
      invokeHandler(merged.onMouseEnter, new MouseEvent("mouseenter") as never)
      invokeHandler(merged.onFocus, focusEvent as never)
      invokeHandler(merged.onBlur, blurEvent as never)
      invokeHandler(merged.onTouchStart, touchEvent as never)
    })

    expect(order).toStrictEqual([
      "props-mouseenter",
      "rest-mouseenter",
      "rest-focus",
      "props-focus",
      "rest-blur",
      "props-blur",
    ])
    expect(result.current.outsideRef.current).toBeFalsy()
    expect(restRef.current).toBe(node)
    expect(propsRef.current).toBe(node)
    expect(onChange).toHaveBeenCalledExactlyOnceWith(3)
  })
})

describe("useRatingItem", () => {
  test("getLabelProps merges className style and pointer handlers", () => {
    const onChange = vi.fn()
    const restOnMouseDown = vi.fn()
    const propsOnMouseDown = vi.fn()
    const restOnTouchStart = vi.fn()
    const propsOnTouchStart = vi.fn()
    const { result } = renderHook(
      () =>
        useRatingItem({
          className: "from-rest",
          style: { color: "red", paddingTop: "4px" },
          groupValue: 1,
          index: 1,
          onMouseDown: restOnMouseDown,
          onTouchStart: restOnTouchStart,
        }),
      {
        withProvider: false,
        wrapper: createRatingItemWrapper({ fractions: 2, onChange }),
      },
    )
    const merged = result.current.getLabelProps({
      className: "from-props",
      style: { backgroundColor: "blue", paddingTop: "8px" },
      onMouseDown: propsOnMouseDown,
      onTouchStart: propsOnTouchStart,
    })

    expect(String(merged.className)).toContain("from-rest")
    expect(String(merged.className)).toContain("from-props")
    expect(merged.style).toMatchObject({
      backgroundColor: "blue",
      color: "red",
      paddingTop: "8px",
      zIndex: -1,
    })

    act(() => {
      invokeHandler(merged.onMouseDown, new MouseEvent("mousedown") as never)
      invokeHandler(merged.onTouchStart, new Event("touchstart") as never)
    })

    expect(restOnMouseDown).toHaveBeenCalledTimes(1)
    expect(propsOnMouseDown).toHaveBeenCalledTimes(1)
    expect(restOnTouchStart).toHaveBeenCalledTimes(1)
    expect(propsOnTouchStart).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenNthCalledWith(1, 0.5)
    expect(onChange).toHaveBeenNthCalledWith(2, 0.5)
  })
})
