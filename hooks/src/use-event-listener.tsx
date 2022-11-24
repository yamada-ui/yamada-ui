import { useCallbackRef } from '@yamada-ui/utils'
import { useEffect } from 'react'

type Events = keyof DocumentEventMap | keyof WindowEventMap | keyof GlobalEventHandlersEventMap
type Target = EventTarget | null | (() => EventTarget | null)
type Options = boolean | AddEventListenerOptions
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
    const el = typeof target === 'function' ? target() : target ?? document

    if (!handler || !el) return

    el.addEventListener(event, listener as EventListenerOrEventListenerObject, options)

    return () => {
      el.removeEventListener(event, listener as EventListenerOrEventListenerObject, options)
    }
  }, [event, target, options, listener, handler])

  return () => {
    const el = typeof target === 'function' ? target() : target ?? document

    el?.removeEventListener(event, listener as EventListenerOrEventListenerObject, options)
  }
}
