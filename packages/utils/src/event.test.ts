import {
  addDomEvent,
  focusTransfer,
  focusTrap,
  getEventPoint,
  getEventWindow,
  isMouseEvent,
  isMultiTouchEvent,
  isTouchEvent,
  pointFromMouse,
  pointFromTouch,
} from "./event"

describe("Event", () => {
  const defaultTouch = global.Touch
  const defaultPointerEvent = global.PointerEvent

  beforeAll(() => {
    global.Touch = class Touch {
      identifier: number
      target: EventTarget
      clientX: number
      clientY: number

      constructor({
        target,
        clientX,
        clientY,
        identifier,
      }: {
        clientX: number
        clientY: number
        identifier: number
        target: EventTarget
      }) {
        this.identifier = identifier
        this.target = target
        this.clientX = clientX
        this.clientY = clientY
      }
    } as typeof global.Touch

    global.PointerEvent = class PointerEvent extends MouseEvent {
      pointerType: string

      constructor(type: string, params: PointerEventInit = {}) {
        super(type, params)
        this.pointerType = params.pointerType || ""
      }
    } as typeof global.PointerEvent
  })

  afterAll(() => {
    global.Touch = defaultTouch
    global.PointerEvent = defaultPointerEvent
  })

  test("isMouseEvent identifies mouse events", () => {
    const mouseEvent = new MouseEvent("click")
    expect(isMouseEvent(mouseEvent)).toBeTruthy()
  })

  test("isMouseEvent identifies PointerEvent with mouse pointerType", () => {
    const pointerEvent = new PointerEvent("pointerdown", {
      pointerType: "mouse",
    })
    expect(isMouseEvent(pointerEvent)).toBeTruthy()
  })

  test("isMouseEvent returns false for PointerEvent with touch pointerType", () => {
    const pointerEvent = new PointerEvent("pointerdown", {
      pointerType: "touch",
    })
    expect(isMouseEvent(pointerEvent)).toBeFalsy()
  })

  test("isTouchEvent identifies touch events", () => {
    const touchEvent = new TouchEvent("touchstart")
    expect(isTouchEvent(touchEvent)).toBeTruthy()
  })

  test("isMultiTouchEvent identifies multi-touch events", () => {
    const touchEvent = new TouchEvent("touchstart", {
      changedTouches: [new Touch({ target: document, identifier: 1 })],
      targetTouches: [],
      touches: [new Touch({ target: document, identifier: 1 })],
    })
    expect(isMultiTouchEvent(touchEvent)).toBeFalsy()
  })

  test("getEventWindow returns the correct window object", () => {
    const mouseEvent = new MouseEvent("click")
    expect(getEventWindow(mouseEvent)).toBe(window)
  })

  test("pointFromTouch extracts point from touch event", () => {
    const touch = new Touch({
      target: document,
      clientX: 100,
      clientY: 200,
      identifier: 1,
    })
    const touchEvent = new TouchEvent("touchstart", {
      changedTouches: [touch],
      targetTouches: [],
      touches: [touch],
    })
    expect(pointFromTouch(touchEvent, "client")).toStrictEqual({
      x: 100,
      y: 200,
    })
  })

  test("pointFromTouch uses changedTouches when touches is empty", () => {
    const touch = new Touch({
      target: document,
      clientX: 50,
      clientY: 60,
      identifier: 1,
    })
    const touchEvent = new TouchEvent("touchend", {
      changedTouches: [touch],
      targetTouches: [],
      touches: [],
    })
    expect(pointFromTouch(touchEvent)).toStrictEqual({ x: 50, y: 60 })
  })

  test("pointFromTouch returns zero when no touches available", () => {
    const touchEvent = new TouchEvent("touchend", {
      changedTouches: [],
      targetTouches: [],
      touches: [],
    })
    expect(pointFromTouch(touchEvent)).toStrictEqual({ x: 0, y: 0 })
  })

  test("pointFromMouse extracts point from mouse event", () => {
    const mouseEvent = new MouseEvent("click", { clientX: 100, clientY: 200 })
    expect(pointFromMouse(mouseEvent, "client")).toStrictEqual({
      x: 100,
      y: 200,
    })
  })

  test("getEventPoint extracts point from any event", () => {
    const mouseEvent = new MouseEvent("click", { clientX: 100, clientY: 200 })
    expect(getEventPoint(mouseEvent, "client")).toStrictEqual({
      x: 100,
      y: 200,
    })

    const touch = new Touch({
      target: document,
      clientX: 300,
      clientY: 400,
      identifier: 1,
    })
    const touchEvent = new TouchEvent("touchstart", {
      changedTouches: [touch],
      targetTouches: [],
      touches: [touch],
    })
    expect(getEventPoint(touchEvent, "client")).toStrictEqual({
      x: 300,
      y: 400,
    })
  })

  test("addDomEvent adds and removes event listeners", () => {
    const mockCallback = vi.fn()
    const removeEventListener = addDomEvent(window, "click", mockCallback)

    window.dispatchEvent(new MouseEvent("click"))
    expect(mockCallback).toHaveBeenCalledExactlyOnceWith(expect.any(MouseEvent))

    removeEventListener()
    mockCallback.mockClear()

    window.dispatchEvent(new MouseEvent("click"))
    expect(mockCallback).not.toHaveBeenCalled()
  })

  describe("focusTrap", () => {
    test("should return noop when el is null", () => {
      const cleanup = focusTrap(null)
      expect(cleanup).toBeTypeOf("function")
      cleanup()
    })

    test("should register keydown listener and return cleanup", () => {
      const container = document.createElement("div")
      document.body.appendChild(container)

      const addSpy = vi.spyOn(container, "addEventListener")
      const cleanup = focusTrap(container)

      expect(addSpy).toHaveBeenCalledWith("keydown", expect.any(Function), true)
      expect(cleanup).toBeTypeOf("function")

      cleanup()
      document.body.removeChild(container)
    })

    test("should ignore non-Tab keys", () => {
      const container = document.createElement("div")
      document.body.appendChild(container)

      const cleanup = focusTrap(container)

      const enterEvent = new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
      })
      const preventSpy = vi.spyOn(enterEvent, "preventDefault")
      container.dispatchEvent(enterEvent)

      expect(preventSpy).not.toHaveBeenCalled()

      cleanup()
      document.body.removeChild(container)
    })

    test("should cycle focus to first element on Tab from last element", () => {
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      const btn2 = document.createElement("button")
      btn2.setAttribute("tabindex", "1")
      container.appendChild(btn1)
      container.appendChild(btn2)
      document.body.appendChild(container)

      const cleanup = focusTrap(container)

      btn2.focus()
      expect(document.activeElement).toBe(btn2)

      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
      })
      const preventSpy = vi.spyOn(tabEvent, "preventDefault")
      container.dispatchEvent(tabEvent)

      expect(preventSpy).toHaveBeenCalledWith()
      expect(document.activeElement).toBe(btn1)

      cleanup()
      document.body.removeChild(container)
    })

    test("should cycle focus to last element on Shift+Tab from first element", () => {
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      const btn2 = document.createElement("button")
      btn2.setAttribute("tabindex", "1")
      container.appendChild(btn1)
      container.appendChild(btn2)
      document.body.appendChild(container)

      const cleanup = focusTrap(container)

      btn1.focus()
      expect(document.activeElement).toBe(btn1)

      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
        shiftKey: true,
      })
      container.dispatchEvent(tabEvent)

      expect(document.activeElement).toBe(btn2)

      cleanup()
      document.body.removeChild(container)
    })

    test("should call onFocus callback when provided", () => {
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      const btn2 = document.createElement("button")
      btn2.setAttribute("tabindex", "1")
      container.appendChild(btn1)
      container.appendChild(btn2)
      document.body.appendChild(container)

      const onFocusMock = vi.fn()
      const cleanup = focusTrap(container, onFocusMock)

      btn2.focus()
      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
      })
      container.dispatchEvent(tabEvent)

      expect(onFocusMock).toHaveBeenCalledWith(btn1)

      cleanup()
      document.body.removeChild(container)
    })

    test("should not trap when focus is not on edge elements", () => {
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      const btn2 = document.createElement("button")
      btn2.setAttribute("tabindex", "1")
      const btn3 = document.createElement("button")
      btn3.setAttribute("tabindex", "1")
      container.appendChild(btn1)
      container.appendChild(btn2)
      container.appendChild(btn3)
      document.body.appendChild(container)

      const cleanup = focusTrap(container)

      btn2.focus()
      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
      })
      const preventSpy = vi.spyOn(tabEvent, "preventDefault")
      container.dispatchEvent(tabEvent)

      expect(preventSpy).not.toHaveBeenCalled()

      cleanup()
      document.body.removeChild(container)
    })

    test("should not trap on Shift+Tab when focus is not on first element", () => {
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      const btn2 = document.createElement("button")
      btn2.setAttribute("tabindex", "1")
      const btn3 = document.createElement("button")
      btn3.setAttribute("tabindex", "1")
      container.appendChild(btn1)
      container.appendChild(btn2)
      container.appendChild(btn3)
      document.body.appendChild(container)

      const cleanup = focusTrap(container)

      btn2.focus()
      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
        shiftKey: true,
      })
      const preventSpy = vi.spyOn(tabEvent, "preventDefault")
      container.dispatchEvent(tabEvent)

      expect(preventSpy).not.toHaveBeenCalled()

      cleanup()
      document.body.removeChild(container)
    })
  })

  describe("focusTransfer", () => {
    test("should return a cleanup function", () => {
      const container = document.createElement("div")
      document.body.appendChild(container)

      const cleanup = focusTransfer(container)
      expect(cleanup).toBeTypeOf("function")

      cleanup()
      document.body.removeChild(container)
    })

    test("should ignore non-Tab keys", () => {
      const container = document.createElement("div")
      document.body.appendChild(container)

      const cleanup = focusTransfer(container)

      const enterEvent = new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
      })
      const preventSpy = vi.spyOn(enterEvent, "preventDefault")
      document.dispatchEvent(enterEvent)

      expect(preventSpy).not.toHaveBeenCalled()

      cleanup()
      document.body.removeChild(container)
    })

    test("should transfer focus from target to first tabbable on Tab", () => {
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      const btn2 = document.createElement("button")
      btn2.setAttribute("tabindex", "1")
      container.appendChild(btn1)
      container.appendChild(btn2)

      const target = document.createElement("button")
      target.setAttribute("tabindex", "1")

      const outsideBtn = document.createElement("button")
      outsideBtn.setAttribute("tabindex", "1")

      document.body.appendChild(container)
      document.body.appendChild(target)
      document.body.appendChild(outsideBtn)

      const cleanup = focusTransfer(container, target)

      target.focus()
      expect(document.activeElement).toBe(target)

      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
      })
      document.dispatchEvent(tabEvent)

      expect(document.activeElement).toBe(btn1)

      cleanup()
      document.body.removeChild(container)
      document.body.removeChild(target)
      document.body.removeChild(outsideBtn)
    })

    test("should transfer focus from last tabbable to next element on Tab", () => {
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      const btn2 = document.createElement("button")
      btn2.setAttribute("tabindex", "1")
      container.appendChild(btn1)
      container.appendChild(btn2)

      const target = document.createElement("button")
      target.setAttribute("tabindex", "1")

      const outsideBtn = document.createElement("button")
      outsideBtn.setAttribute("tabindex", "1")

      document.body.appendChild(container)
      document.body.appendChild(target)
      document.body.appendChild(outsideBtn)

      const cleanup = focusTransfer(container, target)

      btn2.focus()
      expect(document.activeElement).toBe(btn2)

      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
      })
      document.dispatchEvent(tabEvent)

      expect(document.activeElement).toBe(outsideBtn)

      cleanup()
      document.body.removeChild(container)
      document.body.removeChild(target)
      document.body.removeChild(outsideBtn)
    })

    test("should transfer focus to last tabbable on Shift+Tab from next element", () => {
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      const btn2 = document.createElement("button")
      btn2.setAttribute("tabindex", "1")
      container.appendChild(btn1)
      container.appendChild(btn2)

      const target = document.createElement("button")
      target.setAttribute("tabindex", "1")

      const outsideBtn = document.createElement("button")
      outsideBtn.setAttribute("tabindex", "1")

      document.body.appendChild(container)
      document.body.appendChild(target)
      document.body.appendChild(outsideBtn)

      const cleanup = focusTransfer(container, target)

      outsideBtn.focus()
      expect(document.activeElement).toBe(outsideBtn)

      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
        shiftKey: true,
      })
      document.dispatchEvent(tabEvent)

      expect(document.activeElement).toBe(btn2)

      cleanup()
      document.body.removeChild(container)
      document.body.removeChild(target)
      document.body.removeChild(outsideBtn)
    })

    test("should transfer focus to target on Shift+Tab from first tabbable", () => {
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      const btn2 = document.createElement("button")
      btn2.setAttribute("tabindex", "1")
      container.appendChild(btn1)
      container.appendChild(btn2)

      const target = document.createElement("button")
      target.setAttribute("tabindex", "1")

      const outsideBtn = document.createElement("button")
      outsideBtn.setAttribute("tabindex", "1")

      document.body.appendChild(container)
      document.body.appendChild(target)
      document.body.appendChild(outsideBtn)

      const cleanup = focusTransfer(container, target)

      btn1.focus()
      expect(document.activeElement).toBe(btn1)

      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
        shiftKey: true,
      })
      document.dispatchEvent(tabEvent)

      expect(document.activeElement).toBe(target)

      cleanup()
      document.body.removeChild(container)
      document.body.removeChild(target)
      document.body.removeChild(outsideBtn)
    })

    test("should call onFocus callback in focusTransfer", () => {
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      container.appendChild(btn1)

      const target = document.createElement("button")
      target.setAttribute("tabindex", "1")

      document.body.appendChild(container)
      document.body.appendChild(target)

      const onFocusMock = vi.fn()
      const cleanup = focusTransfer(container, target, onFocusMock)

      target.focus()
      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
      })
      document.dispatchEvent(tabEvent)

      expect(onFocusMock).toHaveBeenCalledWith(btn1)

      cleanup()
      document.body.removeChild(container)
      document.body.removeChild(target)
    })

    test("should handle no tabbable elements with Shift+Tab", () => {
      const container = document.createElement("div")
      const target = document.createElement("button")
      target.setAttribute("tabindex", "1")
      const afterTarget = document.createElement("button")
      afterTarget.setAttribute("tabindex", "1")
      const farBtn = document.createElement("button")
      farBtn.setAttribute("tabindex", "1")

      document.body.appendChild(container)
      document.body.appendChild(target)
      document.body.appendChild(afterTarget)
      document.body.appendChild(farBtn)

      const cleanup = focusTransfer(container, target)

      farBtn.focus()
      expect(document.activeElement).toBe(farBtn)

      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
        shiftKey: true,
      })
      document.dispatchEvent(tabEvent)

      expect(document.activeElement).toBe(target)

      cleanup()
      document.body.removeChild(container)
      document.body.removeChild(target)
      document.body.removeChild(afterTarget)
      document.body.removeChild(farBtn)
    })

    test("should not transfer on Shift+Tab when activeElement equals both nextTabbable and lastTabbable", () => {
      const target = document.createElement("button")
      target.setAttribute("tabindex", "1")

      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      container.appendChild(btn1)

      document.body.appendChild(target)
      document.body.appendChild(container)

      const cleanup = focusTransfer(container, target)

      btn1.focus()
      expect(document.activeElement).toBe(btn1)

      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
        shiftKey: true,
      })
      const preventSpy = vi.spyOn(tabEvent, "preventDefault")
      document.dispatchEvent(tabEvent)

      expect(preventSpy).not.toHaveBeenCalled()

      cleanup()
      document.body.removeChild(target)
      document.body.removeChild(container)
    })

    test("should not transfer on Shift+Tab from middle element", () => {
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      const btn2 = document.createElement("button")
      btn2.setAttribute("tabindex", "1")
      const btn3 = document.createElement("button")
      btn3.setAttribute("tabindex", "1")
      container.appendChild(btn1)
      container.appendChild(btn2)
      container.appendChild(btn3)

      const target = document.createElement("button")
      target.setAttribute("tabindex", "1")
      const outsideBtn = document.createElement("button")
      outsideBtn.setAttribute("tabindex", "1")

      document.body.appendChild(container)
      document.body.appendChild(target)
      document.body.appendChild(outsideBtn)

      const cleanup = focusTransfer(container, target)

      btn2.focus()
      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
        shiftKey: true,
      })
      const preventSpy = vi.spyOn(tabEvent, "preventDefault")
      document.dispatchEvent(tabEvent)

      expect(preventSpy).not.toHaveBeenCalled()

      cleanup()
      document.body.removeChild(container)
      document.body.removeChild(target)
      document.body.removeChild(outsideBtn)
    })

    test("should not transfer on forward Tab from middle element", () => {
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      const btn2 = document.createElement("button")
      btn2.setAttribute("tabindex", "1")
      const btn3 = document.createElement("button")
      btn3.setAttribute("tabindex", "1")
      container.appendChild(btn1)
      container.appendChild(btn2)
      container.appendChild(btn3)

      const target = document.createElement("button")
      target.setAttribute("tabindex", "1")
      const outsideBtn = document.createElement("button")
      outsideBtn.setAttribute("tabindex", "1")

      document.body.appendChild(container)
      document.body.appendChild(target)
      document.body.appendChild(outsideBtn)

      const cleanup = focusTransfer(container, target)

      btn2.focus()
      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
      })
      const preventSpy = vi.spyOn(tabEvent, "preventDefault")
      document.dispatchEvent(tabEvent)

      expect(preventSpy).not.toHaveBeenCalled()

      cleanup()
      document.body.removeChild(container)
      document.body.removeChild(target)
      document.body.removeChild(outsideBtn)
    })

    test("should handle no tabbable elements with forward Tab", () => {
      const container = document.createElement("div")
      const target = document.createElement("button")
      target.setAttribute("tabindex", "1")
      const afterTarget = document.createElement("button")
      afterTarget.setAttribute("tabindex", "1")
      const farBtn = document.createElement("button")
      farBtn.setAttribute("tabindex", "1")

      document.body.appendChild(container)
      document.body.appendChild(target)
      document.body.appendChild(afterTarget)
      document.body.appendChild(farBtn)

      const cleanup = focusTransfer(container, target)

      farBtn.focus()
      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
      })
      document.dispatchEvent(tabEvent)

      expect(document.activeElement).toBe(afterTarget)

      cleanup()
      document.body.removeChild(container)
      document.body.removeChild(target)
      document.body.removeChild(afterTarget)
      document.body.removeChild(farBtn)
    })

    test("should not transfer on Shift+Tab when activeElement is target and no tabbable elements", () => {
      const container = document.createElement("div")
      const target = document.createElement("button")
      target.setAttribute("tabindex", "1")

      document.body.appendChild(container)
      document.body.appendChild(target)

      const cleanup = focusTransfer(container, target)

      target.focus()
      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
        shiftKey: true,
      })
      const preventSpy = vi.spyOn(tabEvent, "preventDefault")
      document.dispatchEvent(tabEvent)

      expect(preventSpy).not.toHaveBeenCalled()

      cleanup()
      document.body.removeChild(container)
      document.body.removeChild(target)
    })

    test("should not transfer on forward Tab when target is the first tabbable", () => {
      const container = document.createElement("div")
      const target = document.createElement("button")
      target.setAttribute("tabindex", "1")
      container.appendChild(target)
      document.body.appendChild(container)

      const cleanup = focusTransfer(container, target)

      target.focus()
      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
      })
      const preventSpy = vi.spyOn(tabEvent, "preventDefault")
      document.dispatchEvent(tabEvent)

      expect(preventSpy).not.toHaveBeenCalled()

      cleanup()
      document.body.removeChild(container)
    })

    test("should not transfer on forward Tab when lastTabbable equals nextTabbable", () => {
      const target = document.createElement("button")
      target.setAttribute("tabindex", "1")
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      container.appendChild(btn1)

      document.body.appendChild(target)
      document.body.appendChild(container)

      const cleanup = focusTransfer(container, target)

      btn1.focus()
      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
      })
      const preventSpy = vi.spyOn(tabEvent, "preventDefault")
      document.dispatchEvent(tabEvent)

      expect(preventSpy).not.toHaveBeenCalled()

      cleanup()
      document.body.removeChild(target)
      document.body.removeChild(container)
    })
  })
})
