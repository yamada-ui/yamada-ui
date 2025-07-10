"use client"

import type { EventMap, EventType } from "../../utils"
import { useCallback, useEffect, useRef } from "react"
import { isFunction, useCallbackRef } from "../../utils"

export const useEventListener = <Y extends EventType>(
  target: (() => EventTarget | null) | EventTarget | null | undefined,
  event: Y,
  handler: (ev: EventMap[Y]) => void,
  options?: AddEventListenerOptions | boolean,
) => {
  const listener = useCallbackRef(handler)

  useEffect(() => {
    const el = isFunction(target) ? target() : (target ?? document)

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
    const el = isFunction(target) ? target() : (target ?? document)

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
    <Y extends EventType>(
      el: EventTarget,
      event: Y,
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
    <Y extends EventType>(
      el: EventTarget,
      event: Y,
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
