export type AnyPointerEvent = MouseEvent | TouchEvent | PointerEvent

export type PointType = 'page' | 'client'

export type Point = {
  x: number
  y: number
}

export type PointerEventInfo = {
  point: Point
}

export type MixedEventListener = (e: AnyPointerEvent, info: PointerEventInfo) => void

export const isMouseEvent = (ev: any): ev is MouseEvent => {
  const win = getEventWindow(ev)

  if (typeof win.PointerEvent !== 'undefined' && ev instanceof win.PointerEvent)
    return !!(ev.pointerType === 'mouse')

  return ev instanceof win.MouseEvent
}

export const isTouchEvent = (ev: AnyPointerEvent): ev is TouchEvent => !!(ev as TouchEvent).touches

export const isMultiTouchEvent = (ev: AnyPointerEvent) => isTouchEvent(ev) && ev.touches.length > 1

export const getEventWindow = (ev: Event): typeof globalThis =>
  ((ev as UIEvent).view ?? window) as unknown as typeof globalThis

export const pointFromTouch = (e: TouchEvent, type: PointType = 'page') => {
  const point = e.touches[0] || e.changedTouches[0]

  return { x: point[`${type}X`], y: point[`${type}Y`] }
}

export const pointFromMouse = (point: MouseEvent | PointerEvent, type: PointType = 'page') => ({
  x: point[`${type}X`],
  y: point[`${type}Y`],
})

export const getEventPoint = (ev: AnyPointerEvent, type: PointType = 'page') =>
  isTouchEvent(ev) ? pointFromTouch(ev, type) : pointFromMouse(ev, type)

export const addDomEvent = (
  target: EventTarget,
  type: string,
  cb: EventListener,
  options?: AddEventListenerOptions,
) => {
  target.addEventListener(type, cb, options)

  return () => {
    target.removeEventListener(type, cb, options)
  }
}

const filter =
  (cb: EventListener): EventListener =>
  (event: Event) => {
    const isMouse = isMouseEvent(event)

    if (!isMouse || (isMouse && event.button === 0)) cb(event)
  }

const wrap = (cb: MixedEventListener, filterPrimary = false): EventListener => {
  const listener = (event: any) => cb(event, { point: getEventPoint(event) })

  const fn = filterPrimary ? filter(listener) : listener

  return fn as EventListener
}

export const addPointerEvent = (
  target: EventTarget,
  type: string,
  cb: MixedEventListener,
  options?: AddEventListenerOptions,
) => addDomEvent(target, type, wrap(cb, type === 'pointerdown'), options)
