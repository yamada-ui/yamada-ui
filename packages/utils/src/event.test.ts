import {
  addDomEvent,
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
        target: EventTarget
        clientX: number
        clientY: number
        identifier: number
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
    expect(mockCallback).toHaveBeenCalledWith(expect.any(MouseEvent))

    removeEventListener()
    mockCallback.mockClear()

    window.dispatchEvent(new MouseEvent("click"))
    expect(mockCallback).not.toHaveBeenCalled()
  })
})
