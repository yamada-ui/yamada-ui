import type { Dict } from "@yamada-ui/utils"
import type { HTMLAttributes, KeyboardEvent, MouseEvent, Ref } from "react"
import { useEventListeners } from "@yamada-ui/use-event-listener"
import { dataAttr, isTouchDevice, mergeRefs } from "@yamada-ui/utils"
import { useCallback, useState } from "react"

export type UseClickableProps<
  Y extends HTMLElement = HTMLElement,
  M extends HTMLAttributes<Y> = HTMLAttributes<Y>,
> = {
  /**
   * The ref for the element.
   */
  ref?: Ref<HTMLElement>
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
   * Disable the touch device behavior.
   *
   * @default true
   */
  disableTouchBehavior?: boolean
  /**
   * Whether or not to focus the element when it is clicked.
   * If `true`, the element will receive focus upon click.
   *
   * @default true
   */
  focusOnClick?: boolean
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
} & M

const isValidElement = (
  ev: KeyboardEvent | KeyboardEvent["nativeEvent"],
): boolean => {
  const { isContentEditable, tagName } = ev.target as HTMLElement

  return (
    tagName !== "INPUT" && tagName !== "TEXTAREA" && isContentEditable !== true
  )
}

export const useClickable = <
  Y extends HTMLElement = HTMLElement,
  M extends HTMLAttributes<Y> = Dict,
>(
  {
    ref,
    clickOnEnter = true,
    clickOnSpace = true,
    disableTouchBehavior = true,
    focusOnClick = true,
    isDisabled,
    isFocusable,
    tabIndex: _tabIndex,
    onClick,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseOver,
    onMouseUp,
    ...props
  }: UseClickableProps<Y, M> = {} as UseClickableProps<Y, M>,
) => {
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
    (ev: MouseEvent<Y>) => {
      if (isDisabled) {
        ev.stopPropagation()
        ev.preventDefault()

        return
      }

      if (focusOnClick) ev.currentTarget.focus()
      onClick?.(ev)
    },
    [isDisabled, focusOnClick, onClick],
  )

  const onDocumentKeyUp = useCallback(
    (ev: KeyboardEvent<Y>) => {
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
    (ev: KeyboardEvent<Y>) => {
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
    (ev: KeyboardEvent<Y>) => {
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
    (ev: MouseEvent<Y>) => {
      if (ev.button !== 0) return

      setIsPressed(false)

      listeners.remove(document, "mouseup", onDocumentMouseUp, false)
    },
    [listeners],
  )

  const handleMouseDown = useCallback(
    (ev: MouseEvent<Y>) => {
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
    (ev: MouseEvent<Y>) => {
      if (ev.button !== 0) return

      if (!isButton) setIsPressed(false)

      onMouseUp?.(ev)
    },
    [onMouseUp, isButton],
  )

  const handleMouseOver = useCallback(
    (ev: MouseEvent<Y>) => {
      if (isDisabled) {
        ev.preventDefault()

        return
      }

      if (disableTouchBehavior && isTouchDevice()) return

      onMouseOver?.(ev)
    },
    [isDisabled, onMouseOver, disableTouchBehavior],
  )

  const handleMouseLeave = useCallback(
    (ev: MouseEvent<Y>) => {
      if (isPressed) {
        ev.preventDefault()

        setIsPressed(false)
      }

      if (disableTouchBehavior && isTouchDevice()) return

      onMouseLeave?.(ev)
    },
    [isPressed, onMouseLeave, disableTouchBehavior],
  )

  if (isButton) {
    return {
      ...props,
      ref: mergeRefs(ref, refCb),
      type: "button",
      disabled: trulyDisabled,
      "aria-disabled": trulyDisabled ? undefined : isDisabled,
      onClick: handleClick,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onMouseLeave,
      onMouseOver,
      onMouseUp,
    }
  } else {
    return {
      ...props,
      ref: mergeRefs(ref, refCb),
      role: "button",
      tabIndex: trulyDisabled ? undefined : tabIndex,
      "aria-disabled": isDisabled ? ("true" as const) : undefined,
      "data-active": dataAttr(isPressed),
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onMouseOver: handleMouseOver,
      onMouseUp: handleMouseUp,
    }
  }
}

export type UseClickableReturn = ReturnType<typeof useClickable>
