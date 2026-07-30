import { isFunction } from "./assertion"
import {
  getActiveElement,
  getDocument,
  getNextTabbableElement,
  getTabbableElementEdges,
  isShadowRoot,
} from "./dom"
import { noop } from "./function"

export type AnyPointerEvent = MouseEvent | PointerEvent | TouchEvent

export interface Point {
  x: number
  y: number
}

export function isMouseEvent(ev: any): ev is MouseEvent {
  const win = getEventWindow(ev)

  if (typeof win.PointerEvent !== "undefined" && ev instanceof win.PointerEvent)
    return !!(ev.pointerType === "mouse")

  return ev instanceof win.MouseEvent
}

export function isTouchEvent(ev: AnyPointerEvent): ev is TouchEvent {
  return !!(ev as TouchEvent).touches
}

export function isMultiTouchEvent(ev: AnyPointerEvent): boolean {
  return isTouchEvent(ev) && ev.touches.length > 1
}

export function getEventWindow(ev: Event): typeof globalThis {
  return ((ev as UIEvent).view ?? window) as unknown as typeof globalThis
}

export function pointFromTouch(
  e: TouchEvent,
  type: "client" | "page" = "client",
): Point {
  const point = e.touches[0] || e.changedTouches[0]

  return { x: point?.[`${type}X`] ?? 0, y: point?.[`${type}Y`] ?? 0 }
}

export function pointFromMouse(
  point: MouseEvent | PointerEvent,
  type: "client" | "page" = "client",
): Point {
  return {
    x: point[`${type}X`],
    y: point[`${type}Y`],
  }
}

export function getEventPoint(
  ev: AnyPointerEvent,
  type: "client" | "page" = "client",
): Point {
  return isTouchEvent(ev) ? pointFromTouch(ev, type) : pointFromMouse(ev, type)
}

export interface EventMap
  extends
    DocumentEventMap,
    GlobalEventHandlersEventMap,
    WindowEventMap,
    FontFaceSetEventMap {}

export type EventType = keyof EventMap

export function addDomEvent<Y extends EventType>(
  target: EventTarget,
  type: Y,
  cb: (ev: EventMap[Y]) => void,
  options?: AddEventListenerOptions | boolean,
) {
  target.addEventListener(
    type,
    cb as EventListenerOrEventListenerObject,
    options,
  )

  return () => {
    target.removeEventListener(
      type,
      cb as EventListenerOrEventListenerObject,
      options,
    )
  }
}

export function focusTrap(
  el: HTMLElement | null,
  onFocus?: (elToFocus: HTMLElement) => void,
) {
  if (!el) return noop

  const rootNode = el.getRootNode()
  const root = isShadowRoot(rootNode) ? rootNode : getDocument(el)

  function onKeyDown(ev: KeyboardEvent) {
    if (ev.key !== "Tab") return

    let elToFocus: HTMLElement | null | undefined = null

    const [firstTabbable, lastTabbable] = getTabbableElementEdges(el, false)

    if (ev.shiftKey) {
      if (getActiveElement(root) === firstTabbable) elToFocus = lastTabbable
    } else {
      if (getActiveElement(root) === lastTabbable) elToFocus = firstTabbable
    }

    if (!elToFocus) return

    ev.preventDefault()

    if (isFunction(onFocus)) onFocus(elToFocus)
    else elToFocus.focus()
  }

  return addDomEvent(el, "keydown", onKeyDown, true)
}

export function focusTransfer(
  el: HTMLElement | null,
  target?: HTMLElement | null,
  onFocus?: (elToFocus: HTMLElement) => void,
) {
  const targetRootNode = target?.getRootNode()
  const doc = getDocument(el)
  const tabbableRoot = isShadowRoot(targetRootNode) ? targetRootNode : doc.body

  function onKeyDown(ev: KeyboardEvent) {
    if (ev.key !== "Tab") return

    let elToFocus: HTMLElement | null | undefined = null

    const [firstTabbable, lastTabbable] = getTabbableElementEdges(el, false)
    const nextTabbable = getNextTabbableElement(tabbableRoot, target)
    const noTabbableEls = !firstTabbable && !lastTabbable
    const activeElement = getActiveElement(doc)

    if (ev.shiftKey) {
      if (nextTabbable === activeElement) {
        if (activeElement !== lastTabbable) elToFocus = lastTabbable
      } else if (activeElement === firstTabbable || noTabbableEls) {
        if (activeElement !== target) elToFocus = target
      }
    } else {
      if (activeElement === target) {
        if (activeElement !== firstTabbable) elToFocus = firstTabbable
      } else if (activeElement === lastTabbable || noTabbableEls) {
        if (activeElement !== nextTabbable) elToFocus = nextTabbable
      }
    }

    if (!elToFocus) return

    ev.preventDefault()

    if (isFunction(onFocus)) onFocus(elToFocus)
    else elToFocus.focus()
  }

  return addDomEvent(doc, "keydown", onKeyDown, true)
}
