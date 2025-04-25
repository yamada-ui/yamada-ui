export type AnyPointerEvent = MouseEvent | PointerEvent | TouchEvent

export type PointType = "client" | "page"

export interface Point {
  x: number
  y: number
}

export interface PointerEventInfo {
  point: Point
}

export type MixedEventListener = (
  e: AnyPointerEvent,
  info: PointerEventInfo,
) => void

export function isMouseEvent(ev: any): ev is MouseEvent {
  const win = getEventWindow(ev)

  if (typeof win.PointerEvent !== "undefined" && ev instanceof win.PointerEvent)
    return !!(ev.pointerType === "mouse")

  return ev instanceof win.MouseEvent
}

export function isTouchEvent(ev: AnyPointerEvent): ev is TouchEvent {
  return !!(ev as TouchEvent).touches
}

export function isMultiTouchEvent(ev: AnyPointerEvent) {
  return isTouchEvent(ev) && ev.touches.length > 1
}

export function getEventWindow(ev: Event): typeof globalThis {
  return ((ev as UIEvent).view ?? window) as unknown as typeof globalThis
}

export function pointFromTouch(
  e: TouchEvent,
  type: PointType = process.env.NODE_ENV === "test" ? "client" : "page",
) {
  const point = e.touches[0] || e.changedTouches[0]

  return { x: point?.[`${type}X`] ?? 0, y: point?.[`${type}Y`] ?? 0 }
}

export function pointFromMouse(
  point: MouseEvent | PointerEvent,
  type: PointType = "page",
) {
  return {
    x: point[`${type}X`],
    y: point[`${type}Y`],
  }
}

export function getEventPoint(
  ev: AnyPointerEvent,
  type: PointType = process.env.NODE_ENV === "test" ? "client" : "page",
) {
  return isTouchEvent(ev) ? pointFromTouch(ev, type) : pointFromMouse(ev, type)
}

export function addDomEvent(
  target: EventTarget,
  type: string,
  cb: EventListener,
  options?: AddEventListenerOptions,
) {
  target.addEventListener(type, cb, options)

  return () => {
    target.removeEventListener(type, cb, options)
  }
}

function filter(cb: EventListener): EventListener {
  return function (ev: Event) {
    const isMouse = isMouseEvent(ev)

    if (!isMouse || ev.button === 0) cb(ev)
  }
}

function wrap(cb: MixedEventListener, filterPrimary = false): EventListener {
  function listener(ev: any) {
    return cb(ev, { point: getEventPoint(ev) })
  }

  const fn = filterPrimary ? filter(listener) : listener

  return fn as EventListener
}

export function addPointerEvent(
  target: EventTarget,
  type: string,
  cb: MixedEventListener,
  options?: AddEventListenerOptions,
) {
  return addDomEvent(target, type, wrap(cb, type === "pointerdown"), options)
}
