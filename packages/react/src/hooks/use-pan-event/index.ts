import type { RefObject } from "react"
import type { AnyPointerEvent, Point } from "../../utils"
import sync, { cancelSync, getFrameData } from "framesync"
import { useEffect, useRef } from "react"
import {
  addDomEvent,
  getEventPoint,
  isMouseEvent,
  isMultiTouchEvent,
} from "../../utils"
import { useLatestRef } from "../use-latest-ref"

interface PointerEventInfo {
  point: Point
}

interface PanEventInfo {
  delta: Point
  offset: Point
  point: Point
  velocity: Point
}

type PanEventHandler = (ev: AnyPointerEvent, info: PanEventInfo) => void
type PointerEventListener = (
  ev: AnyPointerEvent,
  info: PointerEventInfo,
) => void

interface TimestampedPoint extends Point {
  timestamp: number
}

type PanEventHistory = TimestampedPoint[]

interface PanEventHandlers {
  onEnd: PanEventHandler
  onMove: PanEventHandler
  onSessionEnd: PanEventHandler
  onSessionStart: PanEventHandler
  onStart: PanEventHandler
}

const subtract = (a: Point, b?: Point): Point => ({
  x: a.x - (b?.x ?? 0),
  y: a.y - (b?.y ?? 0),
})

const getPanInfo = (
  info: PointerEventInfo,
  history: PanEventHistory,
): PanEventInfo => ({
  delta: subtract(info.point, history[history.length - 1]),
  offset: subtract(info.point, history[0]),
  point: info.point,
  velocity: getVelocity(history, 0.1),
})

const toMilliseconds = (v: number) => v * 1000

const getVelocity = (history: TimestampedPoint[], timeDelta: number): Point => {
  if (history.length < 2) return { x: 0, y: 0 }

  let i = history.length - 1
  let timestampedPoint: TimestampedPoint | undefined = undefined

  const lastPoint = history[history.length - 1]

  while (i >= 0) {
    timestampedPoint = history[i]

    if (
      lastPoint &&
      timestampedPoint &&
      lastPoint.timestamp - timestampedPoint.timestamp >
        toMilliseconds(timeDelta)
    ) {
      break
    }

    i--
  }

  if (!lastPoint || !timestampedPoint) return { x: 0, y: 0 }

  const time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000

  if (time === 0) return { x: 0, y: 0 }

  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time,
  }

  if (currentVelocity.x === Infinity) currentVelocity.x = 0

  if (currentVelocity.y === Infinity) currentVelocity.y = 0

  return currentVelocity
}

const filter = (cb: EventListener): EventListener => {
  return function (ev: Event) {
    const isMouse = isMouseEvent(ev)

    if (!isMouse || ev.button === 0) cb(ev)
  }
}

const wrap = (
  cb: PointerEventListener,
  filterPrimary = false,
): EventListener => {
  function listener(ev: any) {
    return cb(ev, { point: getEventPoint(ev) })
  }

  const fn = filterPrimary ? filter(listener) : listener

  return fn as EventListener
}

const addPointerEvent = (
  target: EventTarget,
  type: "pointercancel" | "pointerdown" | "pointermove" | "pointerup",
  cb: PointerEventListener,
  options?: AddEventListenerOptions,
) => addDomEvent(target, type, wrap(cb, type === "pointerdown"), options)

const pipe =
  <Y>(...fns: ((a: Y) => Y)[]) =>
  (v: Y) =>
    fns.reduce((a, b) => b(a), v)

const distance1D = (a: number, b: number) => Math.abs(a - b)

const isPoint = (point: any): point is { x: number; y: number } =>
  "x" in point && "y" in point

const distance = <Y extends number | Point>(a: Y, b: Y) => {
  if (typeof a === "number" && typeof b === "number") return distance1D(a, b)

  if (isPoint(a) && isPoint(b)) {
    const xDelta = distance1D(a.x, b.x)
    const yDelta = distance1D(a.y, b.y)

    return Math.sqrt(xDelta ** 2 + yDelta ** 2)
  }

  return 0
}

const panEvent = (
  ev: AnyPointerEvent,
  handlers: Partial<PanEventHandlers>,
  threshold = 3,
) => {
  if (isMultiTouchEvent(ev)) return

  const win = ev.view ?? window
  const info = { point: getEventPoint(ev) }
  const { timestamp } = getFrameData()
  const { onEnd, onMove, onSessionEnd, onSessionStart, onStart } = handlers

  const history: PanEventHistory = [{ ...info.point, timestamp }]

  let startEvent: AnyPointerEvent | null = null
  let lastEvent: AnyPointerEvent | null = null
  let lastEventInfo: null | PointerEventInfo = null

  ev.stopPropagation()
  ev.preventDefault()

  onSessionStart?.(ev, getPanInfo(info, history))

  const updatePoint = () => {
    if (!(lastEvent && lastEventInfo)) return

    const info = getPanInfo(lastEventInfo, history)

    const isPanStarted = startEvent !== null

    const isDistancePastThreshold =
      distance(info.offset, { x: 0, y: 0 }) >= threshold

    if (!isPanStarted && !isDistancePastThreshold) return

    const { timestamp } = getFrameData()

    history.push({ ...info.point, timestamp })

    if (!isPanStarted) {
      onStart?.(lastEvent, info)

      startEvent = lastEvent
    }

    onMove?.(lastEvent, info)
  }

  const onPointerMove = (ev: AnyPointerEvent, info: PointerEventInfo) => {
    lastEvent = ev
    lastEventInfo = info

    sync.update(updatePoint, true)
  }

  const onPointerUp = (ev: AnyPointerEvent, info: PointerEventInfo) => {
    const panInfo = getPanInfo(info, history)

    onSessionEnd?.(ev, panInfo)

    end()

    if (!onEnd || !startEvent) return

    onEnd(ev, panInfo)
  }

  const updateHandlers = (newHandlers: Partial<PanEventHandlers>) => {
    handlers = newHandlers
  }

  let removeListeners = pipe(
    addPointerEvent(win, "pointermove", onPointerMove),
    addPointerEvent(win, "pointerup", onPointerUp),
    addPointerEvent(win, "pointercancel", onPointerUp),
  )

  const end = () => {
    removeListeners()

    cancelSync.update(updatePoint)
  }

  return {
    end,
    updateHandlers,
  }
}

type PanEvent = ReturnType<typeof panEvent>

export interface UsePanEventProps {
  threshold?: number
  onEnd?: PanEventHandler
  onMove?: PanEventHandler
  onSessionEnd?: PanEventHandler
  onSessionStart?: PanEventHandler
  onStart?: PanEventHandler
}

export const usePanEvent = (
  ref: RefObject<HTMLElement | null>,
  {
    threshold,
    onEnd,
    onMove,
    onSessionEnd,
    onSessionStart,
    onStart,
  }: UsePanEventProps,
) => {
  const hasPanEvents =
    !!onMove || !!onStart || !!onEnd || !!onSessionStart || !!onSessionEnd

  const panSession = useRef<null | PanEvent>(null)

  const handlersRef = useLatestRef<Partial<PanEventHandlers>>({
    onEnd: (ev, info) => {
      panSession.current = null

      onEnd?.(ev, info)
    },
    onMove,
    onSessionEnd,
    onSessionStart,
    onStart,
  })

  useEffect(() => {
    panSession.current?.updateHandlers(handlersRef.current)
  })

  useEffect(() => {
    const node = ref.current

    if (!node || !hasPanEvents) return

    const onPointerDown = (ev: AnyPointerEvent) => {
      panSession.current = panEvent(ev, handlersRef.current, threshold)
    }

    return addPointerEvent(node, "pointerdown", onPointerDown)
  }, [ref, hasPanEvents, handlersRef, threshold])

  useEffect(() => {
    return () => {
      panSession.current?.end()
      panSession.current = null
    }
  }, [])
}
