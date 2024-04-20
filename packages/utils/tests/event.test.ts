import {
  isMouseEvent,
  isTouchEvent,
  isMultiTouchEvent,
  getEventWindow,
  pointFromTouch,
  pointFromMouse,
  getEventPoint,
  addDomEvent,
  addPointerEvent,
} from "../src"

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
        identifier,
        target,
        clientX,
        clientY,
      }: {
        identifier: number
        target: EventTarget
        clientX: number
        clientY: number
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
      touches: [new Touch({ identifier: 1, target: document })],
      targetTouches: [],
      changedTouches: [new Touch({ identifier: 1, target: document })],
    })
    expect(isMultiTouchEvent(touchEvent)).toBeFalsy()
  })

  test("getEventWindow returns the correct window object", () => {
    const mouseEvent = new MouseEvent("click")
    expect(getEventWindow(mouseEvent)).toBe(window)
  })

  test("pointFromTouch extracts point from touch event", () => {
    const touch = new Touch({
      identifier: 1,
      target: document,
      clientX: 100,
      clientY: 200,
    })
    const touchEvent = new TouchEvent("touchstart", {
      touches: [touch],
      targetTouches: [],
      changedTouches: [touch],
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
      identifier: 1,
      target: document,
      clientX: 300,
      clientY: 400,
    })
    const touchEvent = new TouchEvent("touchstart", {
      touches: [touch],
      targetTouches: [],
      changedTouches: [touch],
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

  test("addPointerEvent adds and removes pointer event listeners", () => {
    const mockCallback = vi.fn()
    const removeEventListener = addPointerEvent(
      window,
      "pointerdown",
      mockCallback,
    )

    window.dispatchEvent(
      new PointerEvent("pointerdown", { pointerType: "mouse" }),
    )

    expect(mockCallback).toHaveBeenCalledWith(
      expect.any(PointerEvent),
      expect.objectContaining({
        point: expect.objectContaining({ x: 0, y: 0 }),
      }),
    )

    removeEventListener()
  })
})
