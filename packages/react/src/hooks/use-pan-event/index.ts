import type {
  DataAttributes,
  HTMLAttributes,
  RefAttributes,
  RefObject,
} from "react"
import type { Point } from "../../utils"
import { useCallback, useRef } from "react"
import { useEnvironment } from "../../core"
import {
  addDomEvent,
  getEventPoint,
  handlerAll,
  isMultiTouchEvent,
  mergeRefs,
  useCallbackRef,
  useUnmountEffect,
} from "../../utils"

export interface PanEventProps {
  threshold?: number
  onEnd?: (ev: PointerEvent, point: Point, rect: DOMRect) => void
  onMove?: (ev: PointerEvent, point: Point, rect: DOMRect) => void
  onStart?: (ev: PointerEvent, point: Point, rect: DOMRect) => void
}

interface Props<Y extends HTMLElement>
  extends DataAttributes,
    HTMLAttributes<Y>,
    RefAttributes<Y> {}

export const usePanEvent = <Y extends HTMLElement>({
  threshold = 3,
  ...rest
}: PanEventProps = {}): [
  RefObject<null | Y>,
  (props?: Props<Y>) => Props<Y>,
] => {
  const { getWindow } = useEnvironment()
  const onStart = useCallbackRef(rest.onStart)
  const onMove = useCallbackRef(rest.onMove)
  const onEnd = useCallbackRef(rest.onEnd)
  const latestPoint = useRef<null | Point>(null)
  const unsubscribe = useRef<(() => void)[]>([])
  const ref = useRef<Y>(null)

  const cleanup = useCallback(() => {
    unsubscribe.current.forEach((unsubscribe) => unsubscribe())

    latestPoint.current = null
    unsubscribe.current = []
  }, [])

  const shouldMove = useCallback(
    (point: Point) => {
      if (threshold === 0) return true
      if (!latestPoint.current) return true

      const distance = Math.sqrt(
        Math.pow(point.x - latestPoint.current.x, 2) +
          Math.pow(point.y - latestPoint.current.y, 2),
      )

      return distance >= threshold
    },
    [threshold],
  )

  useUnmountEffect(() => {
    cleanup()
  })

  const getProps = useCallback(
    (props: Props<Y> = {}) => {
      return {
        ...props,
        ref: mergeRefs(ref, props.ref),
        onPointerDown: handlerAll(props.onPointerDown, (ev) => {
          const win = ev.nativeEvent.view ?? getWindow()

          if (!win) return
          if (isMultiTouchEvent(ev.nativeEvent)) return
          if (!ref.current) return

          ev.preventDefault()

          const point = getEventPoint(ev.nativeEvent)
          const rect = ref.current.getBoundingClientRect()

          onStart(ev.nativeEvent, point, rect)

          latestPoint.current = point

          unsubscribe.current.push(
            addDomEvent(win, "pointermove", (ev) => {
              if (!ref.current) return

              const point = getEventPoint(ev)
              const rect = ref.current.getBoundingClientRect()

              if (!shouldMove(point)) return

              latestPoint.current = point

              onMove(ev, point, rect)
            }),
          )

          unsubscribe.current.push(
            addDomEvent(win, "pointerup", (ev) => {
              if (!ref.current) return

              cleanup()

              const point = getEventPoint(ev)
              const rect = ref.current.getBoundingClientRect()

              onEnd(ev, point, rect)
            }),
          )

          unsubscribe.current.push(
            addDomEvent(win, "pointercancel", (ev) => {
              if (!ref.current) return

              cleanup()

              const point = getEventPoint(ev)
              const rect = ref.current.getBoundingClientRect()

              onEnd(ev, point, rect)
            }),
          )
        }),
      }
    },
    [cleanup, getWindow, onEnd, onMove, onStart, shouldMove],
  )

  return [ref, getProps] as const
}

export type UsePanEventReturn = ReturnType<typeof usePanEvent>
