import { useCallbackRef } from "@yamada-ui/utils"
import { useCallback, useEffect, useRef } from "react"

type Events =
  | keyof DocumentEventMap
  | keyof GlobalEventHandlersEventMap
  | keyof WindowEventMap
type Target = (() => EventTarget | null) | EventTarget | null
type Options = AddEventListenerOptions | boolean
type Handler<E extends Events> = E extends keyof DocumentEventMap
  ? (event: DocumentEventMap[E]) => void
  : E extends keyof WindowEventMap
    ? (event: WindowEventMap[E]) => void
    : E extends keyof GlobalEventHandlersEventMap
      ? (event: GlobalEventHandlersEventMap[E]) => void
      : ((event: Event) => void) | undefined

export const useEventListener = <E extends Events>(
  target: Target,
  event: E,
  handler: Handler<E>,
  options?: Options,
) => {
  const listener = useCallbackRef(handler)

  useEffect(() => {
    const el = typeof target === "function" ? target() : (target ?? document)

    if (!el) return

    el.addEventListener(
      event,
      listener as EventListenerOrEventListenerObject,
      options,
    )

    return () => {
      el.removeEventListener(
        event,
        listener as EventListenerOrEventListenerObject,
        options,
      )
    }
  }, [event, target, options, listener, handler])

  return () => {
    const el = typeof target === "function" ? target() : (target ?? document)

    el?.removeEventListener(
      event,
      listener as EventListenerOrEventListenerObject,
      options,
    )
  }
}

export const useEventListeners = () => {
  const listeners = useRef(new Map())
  const currentListeners = listeners.current

  const add = useCallback(
    <E extends Events>(
      el: EventTarget,
      event: E,
      listener: any,
      options: AddEventListenerOptions | boolean,
    ) => {
      listeners.current.set(listener, { el, event, options })

      el.addEventListener(
        event,
        listener as EventListenerOrEventListenerObject,
        options,
      )
    },
    [],
  )

  const remove = useCallback(
    <E extends Events>(
      el: EventTarget,
      event: E,
      listener: any,
      options: boolean | EventListenerOptions,
    ) => {
      el.removeEventListener(
        event,
        listener as EventListenerOrEventListenerObject,
        options,
      )

      listeners.current.delete(listener)
    },
    [],
  )

  useEffect(
    () => () => {
      currentListeners.forEach(({ el, event, options }, key) =>
        remove(el, event, key, options),
      )
    },
    [remove, currentListeners],
  )

  return { add, remove }
}
