import { useEventListeners } from "@yamada-ui/use-event-listener"
import { dataAttr, mergeRefs } from "@yamada-ui/utils"
import {
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  Ref,
  useCallback,
  useState,
} from "react"

export type UseClickableProps = HTMLAttributes<HTMLElement> & {
  /**
   * If `true`, the element will be disabled. It will set the `disabled` HTML attribute.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true` and isDisabled, the element will have only `aria-disabled` set to `true`.
   *
   * @default false
   */
  isFocusable?: boolean
  /**
   * Whether or not trigger click on pressing `Enter`.
   *
   * @default true
   */
  clickOnEnter?: boolean
  /**
   * Whether or not trigger click on pressing `Space`.
   *
   * @default true
   */
  clickOnSpace?: boolean
  /**
   * The ref for the element.
   */
  ref?: Ref<HTMLElement>
}

const isValidElement = (
  ev: KeyboardEvent | KeyboardEvent["nativeEvent"],
): boolean => {
  const { tagName, isContentEditable } = ev.target as HTMLElement

  return (
    tagName !== "INPUT" && tagName !== "TEXTAREA" && isContentEditable !== true
  )
}

export const useClickable = ({
  ref,
  isDisabled,
  isFocusable,
  clickOnEnter = true,
  clickOnSpace = true,
  onMouseDown,
  onMouseUp,
  onClick,
  onKeyDown,
  onKeyUp,
  tabIndex: _tabIndex,
  onMouseOver,
  onMouseLeave,
  ...props
}: UseClickableProps = {}) => {
  const [isButton, setIsButton] = useState<boolean>(true)
  const [isPressed, setIsPressed] = useState<boolean>(false)

  const listeners = useEventListeners()

  const tabIndex = isButton ? _tabIndex : _tabIndex || 0
  const trulyDisabled = isDisabled && !isFocusable

  const refCb = (node: any) => {
    if (!node) return

    if (node.tagName !== "BUTTON") setIsButton(false)
  }

  const handleClick = useCallback(
    (ev: MouseEvent<HTMLElement>) => {
      if (isDisabled) {
        ev.stopPropagation()
        ev.preventDefault()

        return
      }

      ev.currentTarget.focus()
      onClick?.(ev)
    },
    [isDisabled, onClick],
  )

  const onDocumentKeyUp = useCallback(
    (ev: KeyboardEvent) => {
      if (isPressed && isValidElement(ev)) {
        ev.preventDefault()
        ev.stopPropagation()

        setIsPressed(false)

        listeners.remove(document, "keyup", onDocumentKeyUp, false)
      }
    },
    [isPressed, listeners],
  )

  const handleKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLElement>) => {
      onKeyDown?.(ev)

      if (isDisabled || ev.defaultPrevented || ev.metaKey) return

      if (!isValidElement(ev.nativeEvent) || isButton) return

      if (clickOnSpace && ev.key === " ") {
        ev.preventDefault()
        setIsPressed(true)
      }

      if (clickOnEnter && ev.key === "Enter") {
        ev.preventDefault()
        ev.currentTarget.click()
      }

      listeners.add(document, "keyup", onDocumentKeyUp, false)
    },
    [
      isDisabled,
      isButton,
      onKeyDown,
      clickOnEnter,
      clickOnSpace,
      listeners,
      onDocumentKeyUp,
    ],
  )

  const handleKeyUp = useCallback(
    (ev: KeyboardEvent<HTMLElement>) => {
      onKeyUp?.(ev)

      if (isDisabled || ev.defaultPrevented || ev.metaKey) return

      if (!isValidElement(ev.nativeEvent) || isButton) return

      if (clickOnSpace && ev.key === " ") {
        ev.preventDefault()
        setIsPressed(false)

        ev.currentTarget.click()
      }
    },
    [clickOnSpace, isButton, isDisabled, onKeyUp],
  )

  const onDocumentMouseUp = useCallback(
    (ev: MouseEvent) => {
      if (ev.button !== 0) return

      setIsPressed(false)

      listeners.remove(document, "mouseup", onDocumentMouseUp, false)
    },
    [listeners],
  )

  const handleMouseDown = useCallback(
    (ev: MouseEvent<HTMLElement>) => {
      if (ev.button !== 0) return

      if (isDisabled) {
        ev.stopPropagation()
        ev.preventDefault()

        return
      }

      if (!isButton) setIsPressed(true)

      ev.currentTarget.focus({ preventScroll: true })

      listeners.add(document, "mouseup", onDocumentMouseUp, false)

      onMouseDown?.(ev)
    },
    [isDisabled, isButton, onMouseDown, listeners, onDocumentMouseUp],
  )

  const handleMouseUp = useCallback(
    (ev: MouseEvent<HTMLElement>) => {
      if (ev.button !== 0) return

      if (!isButton) setIsPressed(false)

      onMouseUp?.(ev)
    },
    [onMouseUp, isButton],
  )

  const handleMouseOver = useCallback(
    (ev: MouseEvent<HTMLElement>) => {
      if (isDisabled) {
        ev.preventDefault()

        return
      }

      onMouseOver?.(ev)
    },
    [isDisabled, onMouseOver],
  )

  const handleMouseLeave = useCallback(
    (ev: MouseEvent<HTMLElement>) => {
      if (isPressed) {
        ev.preventDefault()

        setIsPressed(false)
      }

      onMouseLeave?.(ev)
    },
    [isPressed, onMouseLeave],
  )

  if (isButton) {
    return {
      ...props,
      ref: mergeRefs(ref, refCb),
      type: "button",
      "aria-disabled": trulyDisabled ? undefined : isDisabled,
      disabled: trulyDisabled,
      onClick: handleClick,
      onMouseDown,
      onMouseUp,
      onKeyUp,
      onKeyDown,
      onMouseOver,
      onMouseLeave,
    }
  } else {
    return {
      ...props,
      ref: mergeRefs(ref, refCb),
      role: "button",
      "data-active": dataAttr(isPressed),
      "aria-disabled": isDisabled ? ("true" as const) : undefined,
      tabIndex: trulyDisabled ? undefined : tabIndex,
      onClick: handleClick,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onKeyUp: handleKeyUp,
      onKeyDown: handleKeyDown,
      onMouseOver: handleMouseOver,
      onMouseLeave: handleMouseLeave,
    }
  }
}

export type UseClickableReturn = ReturnType<typeof useClickable>
