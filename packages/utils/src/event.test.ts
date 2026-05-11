import {
  focusTransfer,
  focusTrap,
  getEventPoint,
  isMultiTouchEvent,
  isTouchEvent,
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

  test("getEventPoint extracts point from touch event", () => {
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

  describe("focusTrap", () => {
    test("should return noop when el is null", () => {
      const cleanup = focusTrap(null)
      expect(cleanup).toBeTypeOf("function")
      cleanup()
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
  })
})
