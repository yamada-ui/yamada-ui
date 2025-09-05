"use client"

import { useEffect } from "react"
import { useEnvironment } from "../../core"
import { useCallbackRef } from "../../utils"

type Handler<E extends string> = E extends keyof WindowEventMap
  ? (ev: WindowEventMap[E]) => void
  : (ev: CustomEvent) => void
type Options = AddEventListenerOptions | boolean

/**
 * `useWindowEvent` is a custom hook that assigns an event listener to `window`.
 *
 * @see https://yamada-ui.com/docs/hooks/use-window-event
 */
export const useWindowEvent = <E extends string>(
  ev: E,
  handler: Handler<E>,
  options?: Options,
) => {
  const { getWindow } = useEnvironment()
  const listener = useCallbackRef(
    handler,
  ) as unknown as EventListenerOrEventListenerObject

  useEffect(() => {
    getWindow()?.addEventListener(ev, listener, options)

    return () => {
      getWindow()?.removeEventListener(ev, listener, options)
    }
  }, [ev, listener, options, getWindow])
}
