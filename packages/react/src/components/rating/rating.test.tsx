import type { FocusEventHandler, PropsWithChildren, Ref } from "react"
import type { UseRatingProps } from "./use-rating"
import { createElement, createRef } from "react"
import { a11y, act, render, renderHook, screen } from "#test"
import { Rating } from "."
import { RatingContext, useRating, useRatingItem } from "./use-rating"

const dispatchMouse = (
  el: EventTarget,
  type: "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout",
  init: MouseEventInit = {},
) => {
  el.dispatchEvent(new MouseEvent(type, { bubbles: true, ...init }))
}

const dispatchTouchStart = (
  el: EventTarget,
  touches: { clientX: number; clientY: number }[] = [],
) => {
  const event = new Event("touchstart", {
    bubbles: true,
    cancelable: true,
  }) as Event & { touches: { clientX: number; clientY: number }[] }

  Object.defineProperty(event, "touches", { value: touches })

  el.dispatchEvent(event)
}

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
  const defaultGetBoundingClientRect =
    window.HTMLElement.prototype.getBoundingClientRect

  beforeAll(() => {
    window.HTMLElement.prototype.getBoundingClientRect = () => {
      return {
        height: 20,
        left: 16,
        width: 100,
      } as DOMRect
    }
    vi.spyOn(HTMLElement.prototype, "matches").mockImplementation(() => true)
  })

  afterAll(() => {
    window.HTMLElement.prototype.getBoundingClientRect =
      defaultGetBoundingClientRect
    vi.clearAllMocks()
  })

  test("passes a11y checks", async () => {
    await a11y(<Rating />)
  })

  test("should merge `groupProps` with slot props without overwriting user props", () => {
    const onClick = vi.fn()

    const { container } = render(
      <Rating
        groupProps={(value) => ({
          className: `group-${value}`,
          style: { outlineColor: "red" },
          value,
          onClick,
        })}
      />,
    )

    const firstGroup = container.querySelector(".ui-rating__group")

    expect(firstGroup).toHaveClass("ui-rating__group", "group-1")
    expect(firstGroup).toHaveStyle({ outlineColor: "rgb(255, 0, 0)" })

    firstGroup?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    expect(onClick).toHaveBeenCalledTimes(1)
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

  test("fills items up to the hovered position", async () => {
    const { container } = render(
      <Rating data-testid="rating" height={20} width={100} />,
    )

    const rating = screen.getByTestId("rating")

    const items = container.querySelectorAll(".ui-rating__item")

    for (let i = 1; i < items.length; i++) {
      expect(items[i]).not.toHaveAttribute("data-filled")
    }

    dispatchMouse(rating, "mouseenter")
    dispatchMouse(rating, "mousemove", { clientX: 50, clientY: 10 })

    await vi.waitFor(() => {
      expect(items[1]).toHaveAttribute("data-filled")
      expect(items[2]).toHaveAttribute("data-filled")
      expect(items[3]).not.toHaveAttribute("data-filled")
    })

    dispatchMouse(rating, "mouseleave")
    dispatchMouse(rating, "mouseout", { relatedTarget: document.body })

    await vi.waitFor(() => {
      expect(items[1]).not.toHaveAttribute("data-filled")
      expect(items[2]).not.toHaveAttribute("data-filled")
    })
  })

  test("updates value on the mouseDown event", () => {
    const onChange = vi.fn()

    const { container } = render(<Rating onChange={onChange} />)

    const items = container.querySelectorAll(".ui-rating__item")
    dispatchMouse(items[3]!, "mousedown", { button: 0 })

    expect(onChange).toHaveBeenCalledExactlyOnceWith(3)
  })

  test("updates value on item touchStart event", () => {
    const onChange = vi.fn()

    const { container } = render(<Rating onChange={onChange} />)

    const items = container.querySelectorAll(".ui-rating__item")
    dispatchTouchStart(items[3]!)

    expect(onChange).toHaveBeenCalledExactlyOnceWith(3)
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

  test("updates value on root touchStart event", () => {
    const onChange = vi.fn()

    render(<Rating data-testid="rating" onChange={onChange} />)

    const rating = screen.getByTestId("rating")

    dispatchTouchStart(rating, [{ clientX: 50, clientY: 10 }])

    expect(onChange).toHaveBeenCalledWith(2)
  })

  test("calls preventDefault on root touchEnd", () => {
    render(<Rating data-testid="rating" />)

    const rating = screen.getByTestId("rating")

    const event = new Event("touchend", {
      bubbles: true,
      cancelable: true,
    })
    const preventDefaultSpy = vi.spyOn(event, "preventDefault")

    rating.dispatchEvent(event)

    expect(preventDefaultSpy).toHaveBeenCalledWith()
  })

  test("does not update value when disabled", () => {
    const { container } = render(<Rating disabled />)

    const items = container.querySelectorAll(".ui-rating__item")

    dispatchMouse(items[3]!, "mousedown", { button: 0 })

    expect(items[3]?.firstChild).not.toHaveAttribute("data-checked")
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

  test("resets hovered value on blur when mouse is outside", () => {
    const { container } = render(<Rating />)
    const inputs = container.querySelectorAll("input[type='radio']")
    const firstInput = inputs[0]
    if (!(firstInput instanceof HTMLInputElement))
      throw new Error("expected input element")

    firstInput.focus()
    dispatchMouse(container.firstChild!, "mouseleave")
    firstInput.blur()

    const activeInput = container.querySelector("input[data-active='true']")
    expect(activeInput).toBeNull()
  })

  test("updates value via keyboard", async () => {
    const onChange = vi.fn()

    const { container, user } = render(<Rating onChange={onChange} />)

    const inputs = container.querySelectorAll("input[type='radio']")
    const firstInput = inputs[0]
    if (!(firstInput instanceof HTMLInputElement))
      throw new Error("expected input element")

    await user.tab()
    firstInput.focus()
    await user.keyboard("{ArrowRight}")

    await vi.waitFor(() => {
      expect(document.activeElement).toBe(inputs[1])
    })

    await user.keyboard("{Space}")

    expect(onChange).toHaveBeenCalledWith(1)
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
