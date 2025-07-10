"use client"

import type { EventMap, EventType } from "../../utils"
import { useCallback, useEffect, useRef } from "react"
import { isFunction, useCallbackRef } from "../../utils"

export const useEventListener = <Y extends EventType>(
  target: (() => EventTarget | null) | EventTarget | null | undefined,
  ev: Y,
  handler: (ev: EventMap[Y]) => void,
  options?: AddEventListenerOptions | boolean,
) => {
  const listener = useCallbackRef(handler)

  useEffect(() => {
    const el = isFunction(target) ? target() : (target ?? document)

    if (!el) return

    el.addEventListener(
      ev,
      listener as EventListenerOrEventListenerObject,
      options,
    )

    return () => {
      el.removeEventListener(
        ev,
        listener as EventListenerOrEventListenerObject,
        options,
      )
    }
  }, [ev, target, options, listener, handler])

  return () => {
    const el = isFunction(target) ? target() : (target ?? document)

    el?.removeEventListener(
      ev,
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
      ev: Y,
      listener: any,
      options: AddEventListenerOptions | boolean,
    ) => {
      listeners.current.set(listener, { el, ev, options })

      el.addEventListener(
        ev,
        listener as EventListenerOrEventListenerObject,
        options,
      )
    },
    [],
  )

  const remove = useCallback(
    <Y extends EventType>(
      el: EventTarget,
      ev: Y,
      listener: any,
      options: boolean | EventListenerOptions,
    ) => {
      el.removeEventListener(
        ev,
        listener as EventListenerOrEventListenerObject,
        options,
      )

      listeners.current.delete(listener)
    },
    [],
  )

  useEffect(
    () => () => {
      currentListeners.forEach(({ el, ev, options }, key) =>
        remove(el, ev, key, options),
      )
    },
    [remove, currentListeners],
  )

  return { add, remove }
}
