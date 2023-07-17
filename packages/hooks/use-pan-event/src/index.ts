import { useLatestRef } from '@yamada-ui/use-latest-ref'
import {
  addPointerEvent,
  AnyPointerEvent,
  getEventPoint,
  isMultiTouchEvent,
  Point,
  PointerEventInfo,
} from '@yamada-ui/utils'
import sync, { cancelSync, getFrameData } from 'framesync'
import { RefObject, useEffect, useRef } from 'react'

type PanEventInfo = {
  point: Point
  delta: Point
  offset: Point
  velocity: Point
}

type PanEventHandler = (event: AnyPointerEvent, info: PanEventInfo) => void

type TimestampedPoint = Point & { timestamp: number }

type PanEventHistory = TimestampedPoint[]

type PanEventHandlers = {
  onSessionStart: PanEventHandler
  onSessionEnd: PanEventHandler
  onStart: PanEventHandler
  onMove: PanEventHandler
  onEnd: PanEventHandler
}

const subtract = (a: Point, b: Point) => ({ x: a.x - b.x, y: a.y - b.y })

const getPanInfo = (info: PointerEventInfo, history: PanEventHistory) => ({
  point: info.point,
  delta: subtract(info.point, history[history.length - 1]),
  offset: subtract(info.point, history[0]),
  velocity: getVelocity(history, 0.1),
})

const toMilliseconds = (v: number) => v * 1000

const getVelocity = (history: TimestampedPoint[], timeDelta: number): Point => {
  if (history.length < 2) return { x: 0, y: 0 }

  let i = history.length - 1
  let timestampedPoint: TimestampedPoint | null = null

  const lastPoint = history[history.length - 1]

  while (i >= 0) {
    timestampedPoint = history[i]

    if (
      lastPoint.timestamp - timestampedPoint.timestamp >
      toMilliseconds(timeDelta)
    ) {
      break
    }

    i--
  }

  if (!timestampedPoint) return { x: 0, y: 0 }

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

const pipe =
  <Y extends any>(...fns: ((a: Y) => Y)[]) =>
  (v: Y) =>
    fns.reduce((a, b) => b(a), v)

const distance1D = (a: number, b: number) => Math.abs(a - b)

const isPoint = (point: any): point is { x: number; y: number } =>
  'x' in point && 'y' in point

const distance = <Y extends Point | number>(a: Y, b: Y) => {
  if (typeof a === 'number' && typeof b === 'number') return distance1D(a, b)

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
  threshold: number = 3,
) => {
  if (isMultiTouchEvent(ev)) return

  const win = ev.view ?? window
  const info = { point: getEventPoint(ev) }
  const { timestamp } = getFrameData()
  const { onSessionStart } = handlers

  const history: PanEventHistory = [{ ...info.point, timestamp }]

  let startEvent: AnyPointerEvent | null = null
  let lastEvent: AnyPointerEvent | null = null
  let lastEventInfo: PointerEventInfo | null = null

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

    const { onStart, onMove } = handlers

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

  const onPointerUp = (event: AnyPointerEvent, info: PointerEventInfo) => {
    const panInfo = getPanInfo(info, history)
    const { onEnd, onSessionEnd } = handlers

    onSessionEnd?.(event, panInfo)

    end()

    if (!onEnd || !startEvent) return

    onEnd?.(event, panInfo)
  }

  const updateHandlers = (newHandlers: Partial<PanEventHandlers>) => {
    handlers = newHandlers
  }

  let removeListeners = pipe(
    addPointerEvent(win, 'pointermove', onPointerMove),
    addPointerEvent(win, 'pointerup', onPointerUp),
    addPointerEvent(win, 'pointercancel', onPointerUp),
  )

  const end = () => {
    removeListeners?.()

    cancelSync.update(updatePoint)
  }

  return {
    updateHandlers,
    end,
  }
}

type ReturnPanEvent = ReturnType<typeof panEvent>

export type UsePanEventProps = {
  onMove?: PanEventHandler
  onStart?: PanEventHandler
  onEnd?: PanEventHandler
  onSessionStart?: PanEventHandler
  onSessionEnd?: PanEventHandler
  threshold?: number
}

export const usePanEvent = (
  ref: RefObject<HTMLElement>,
  {
    onMove,
    onStart,
    onEnd,
    onSessionStart,
    onSessionEnd,
    threshold,
  }: UsePanEventProps,
) => {
  const hasPanEvents =
    !!onMove || !!onStart || !!onEnd || !!onSessionStart || !!onSessionEnd

  const panSession = useRef<ReturnPanEvent | null>(null)

  const handlersRef = useLatestRef<Partial<PanEventHandlers>>({
    onSessionStart,
    onSessionEnd,
    onStart,
    onMove,
    onEnd: (event, info) => {
      panSession.current = null

      onEnd?.(event, info)
    },
  })

  useEffect(() => {
    panSession.current?.updateHandlers(handlersRef.current)
  })

  useEffect(() => {
    const node = ref.current

    if (!node || !hasPanEvents) return

    const onPointerDown = (event: AnyPointerEvent) => {
      panSession.current = panEvent(event, handlersRef.current, threshold)
    }

    return addPointerEvent(node, 'pointerdown', onPointerDown)
  }, [ref, hasPanEvents, handlersRef, threshold])

  useEffect(() => {
    return () => {
      panSession.current?.end()
      panSession.current = null
    }
  }, [])
}
