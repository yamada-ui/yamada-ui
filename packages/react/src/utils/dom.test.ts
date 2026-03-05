import { act, renderHook, waitFor } from "#test"
import {
  getEventRelatedTarget,
  isComposing,
  runKeyAction,
  useAttributeObserver,
  useIds,
  visuallyHiddenAttributes,
} from "./dom"

describe("getEventRelatedTarget", () => {
  test("should return the related target of an event", () => {
    const element = document.createElement("div")
    const ev = new FocusEvent("focus", {
      relatedTarget: element,
    }) as unknown as React.FocusEvent

    expect(getEventRelatedTarget(ev)).toBe(element)
  })
})

describe("isComposing", () => {
  test("should detect composing from keyboard event", () => {
    const ev = {
      keyCode: 229,
      nativeEvent: { isComposing: true },
    } as unknown as React.KeyboardEvent<HTMLElement>

    expect(isComposing(ev)).toBeTruthy()
  })

  test("should detect composing via keyCode when isComposing is false", () => {
    const ev = {
      keyCode: 229,
      nativeEvent: { isComposing: false },
    } as unknown as React.KeyboardEvent<HTMLElement>

    expect(isComposing(ev)).toBeTruthy()
  })

  test("should return false for non-composing keyboard event", () => {
    const ev = {
      keyCode: 13,
      nativeEvent: { isComposing: false },
    } as unknown as React.KeyboardEvent<HTMLElement>

    expect(isComposing(ev)).toBeFalsy()
  })

  test("should detect composing from InputEvent", () => {
    const inputEvent = new InputEvent("input", { data: "a" })
    Object.defineProperty(inputEvent, "isComposing", { value: true })

    const ev = {
      nativeEvent: inputEvent,
    } as unknown as React.ChangeEvent<HTMLElement>

    expect(isComposing(ev)).toBeTruthy()
  })

  test("should return false for non-composing events", () => {
    const ev = {
      nativeEvent: new Event("change"),
    } as unknown as React.ChangeEvent<HTMLElement>

    expect(isComposing(ev)).toBeFalsy()
  })
})

describe("runKeyAction", () => {
  test("should run action for matching key", () => {
    const action = vi.fn()
    const ev = {
      key: "Enter",
      code: "Enter",
      preventDefault: vi.fn(),
    } as unknown as React.KeyboardEvent<HTMLElement>

    runKeyAction(ev, { Enter: action })

    expect(action).toHaveBeenCalledWith(ev)
    expect(ev.preventDefault).toHaveBeenCalledWith()
  })

  test("should not run action for non-matching key", () => {
    const action = vi.fn()
    const ev = {
      key: "Escape",
      code: "Escape",
      preventDefault: vi.fn(),
    } as unknown as React.KeyboardEvent<HTMLElement>

    runKeyAction(ev, { Enter: action })

    expect(action).not.toHaveBeenCalled()
    expect(ev.preventDefault).not.toHaveBeenCalled()
  })

  test("should convert space key to code", () => {
    const action = vi.fn()
    const ev = {
      key: " ",
      code: "Space",
      preventDefault: vi.fn(),
    } as unknown as React.KeyboardEvent<HTMLElement>

    runKeyAction(ev, { Space: action })

    expect(ev.key).toBe("Space")
    expect(action).toHaveBeenCalledWith(ev)
  })

  test("should not call preventDefault when option is false", () => {
    const action = vi.fn()
    const ev = {
      key: "Enter",
      code: "Enter",
      preventDefault: vi.fn(),
    } as unknown as React.KeyboardEvent<HTMLElement>

    runKeyAction(ev, { Enter: action }, { preventDefault: false })

    expect(action).toHaveBeenCalledWith(ev)
    expect(ev.preventDefault).not.toHaveBeenCalled()
  })
})

describe("getEventRelatedTarget (additional)", () => {
  test("should fall back to activeElement when relatedTarget is null", () => {
    const activeElement = document.createElement("input")
    const ev = {
      currentTarget: {
        ownerDocument: { activeElement },
      },
      relatedTarget: null,
    } as unknown as React.FocusEvent

    expect(getEventRelatedTarget(ev)).toBe(activeElement)
  })
})

describe("useAttributeObserver", () => {
  test("should call func when observed attribute changes", async () => {
    const element = document.createElement("div")
    document.body.appendChild(element)
    const ref = { current: element }
    const func = vi.fn()

    renderHook(() => useAttributeObserver(ref, ["data-test"], true, func))

    act(() => {
      element.setAttribute("data-test", "value")
    })

    await waitFor(() => {
      expect(func).toHaveBeenCalledWith()
    })

    document.body.removeChild(element)
  })

  test("should not observe when disabled", () => {
    const element = document.createElement("div")
    const ref = { current: element }
    const func = vi.fn()

    renderHook(() => useAttributeObserver(ref, ["data-test"], false, func))

    element.setAttribute("data-test", "value")

    expect(func).not.toHaveBeenCalled()
  })

  test("should not observe when ref is null", () => {
    const ref = { current: null }
    const func = vi.fn()

    renderHook(() => useAttributeObserver(ref, ["data-test"], true, func))

    expect(func).not.toHaveBeenCalled()
  })

  test("should disconnect observer on unmount", () => {
    const element = document.createElement("div")
    document.body.appendChild(element)
    const ref = { current: element }
    const func = vi.fn()

    const { unmount } = renderHook(() =>
      useAttributeObserver(ref, ["data-test"], true, func),
    )

    unmount()

    element.setAttribute("data-test", "value")

    expect(func).not.toHaveBeenCalled()

    document.body.removeChild(element)
  })

  test("should use window when defaultView is null", () => {
    const element = document.createElement("div")
    Object.defineProperty(element, "ownerDocument", {
      configurable: true,
      value: { defaultView: null },
    })
    const ref = { current: element }
    const func = vi.fn()

    let observerCreated = false
    const OriginalMO = window.MutationObserver
    window.MutationObserver = class {
      constructor() {
        observerCreated = true
      }
      observe = vi.fn()
      disconnect = vi.fn()
      takeRecords = vi.fn(() => [])
    } as any

    renderHook(() => useAttributeObserver(ref, ["data-test"], true, func))

    expect(observerCreated).toBeTruthy()

    window.MutationObserver = OriginalMO
  })

  test("should handle non-attribute and missing attributeName changes", () => {
    const element = document.createElement("div")
    document.body.appendChild(element)
    const ref = { current: element }
    const func = vi.fn()

    let observerCallback: MutationCallback
    const OriginalMutationObserver = window.MutationObserver

    window.MutationObserver = class {
      constructor(callback: MutationCallback) {
        observerCallback = callback
      }
      observe = vi.fn()
      disconnect = vi.fn()
      takeRecords = vi.fn(() => [])
    } as any

    renderHook(() => useAttributeObserver(ref, ["data-test"], true, func))

    observerCallback!(
      [
        { type: "childList", attributeName: null } as any,
        { type: "attributes", attributeName: null } as any,
        { type: "attributes", attributeName: "data-other" } as any,
        { type: "attributes", attributeName: "data-test" } as any,
      ],
      {} as any,
    )

    expect(func).toHaveBeenCalledTimes(1)

    window.MutationObserver = OriginalMutationObserver
    document.body.removeChild(element)
  })
})

describe("useIds", () => {
  test("should generate sequential IDs", () => {
    const { result } = renderHook(() => {
      const gen = useIds()
      return [gen.next().value, gen.next().value, gen.next().value]
    })

    const [id0, id1, id2] = result.current
    expect(id0).toMatch(/-0$/)
    expect(id1).toMatch(/-1$/)
    expect(id2).toMatch(/-2$/)
  })
})

describe("visuallyHiddenAttributes", () => {
  test("should have correct attributes", () => {
    expect(visuallyHiddenAttributes).toStrictEqual({
      style: {
        border: "0px",
        clipPath: "rect(0px 0px 0px 0px)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0px",
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px",
      },
      "aria-hidden": true,
      tabIndex: -1,
    })
  })
})
