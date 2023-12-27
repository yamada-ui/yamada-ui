import { useCallbackRef } from "@yamada-ui/utils"
import { useEffect } from "react"

type Handler<E extends string> = E extends keyof WindowEventMap
  ? (ev: WindowEventMap[E]) => void
  : (ev: CustomEvent) => void
type Options = boolean | AddEventListenerOptions

/**
 * `useWindowEvent` is a custom hook that assigns an event listener to `window`.
 *
 * @see Docs https://yamada-ui.com/hooks/use-window-event
 */
export const useWindowEvent = <E extends string>(
  event: E,
  handler: Handler<E>,
  options?: Options,
) => {
  const listener = useCallbackRef(
    handler,
  ) as unknown as EventListenerOrEventListenerObject

  useEffect(() => {
    window.addEventListener(event, listener, options)

    return () => {
      window.removeEventListener(event, listener, options)
    }
  }, [event, listener, options])
}
