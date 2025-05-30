import type { HTMLAttributes, KeyboardEvent, MouseEvent, Ref } from "react"
import type { StyledProps } from "../../core"
import { useCallback, useState } from "react"
import { dataAttr, isTouchDevice, mergeRefs } from "../../utils"
import { useEventListeners } from "../use-event-listener"

type Props<Y extends HTMLElement = HTMLElement> = Omit<
  HTMLAttributes<Y>,
  "ref" | "size" | keyof StyledProps
>

export type UseClickableProps<
  Y extends HTMLElement = HTMLElement,
  M extends Props<Y> = Props<Y>,
> = M & {
  /**
   * The ref for the element.
   */
  ref?: Ref<Y>
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
   * If `true`, the element will be disabled. It will set the `disabled` HTML attribute.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * Disable the touch device behavior.
   *
   * @default true
   */
  disableTouchBehavior?: boolean
  /**
   * If `true` and isDisabled, the element will have only `aria-disabled` set to `true`.
   *
   * @default false
   */
  focusable?: boolean
  /**
   * Whether or not to focus the element when it is clicked.
   * If `true`, the element will receive focus upon click.
   *
   * @default true
   */
  focusOnClick?: boolean
}

const isValidElement = (
  ev: KeyboardEvent | KeyboardEvent["nativeEvent"],
): boolean => {
  const { isContentEditable, tagName } = ev.target as HTMLElement

  return tagName !== "INPUT" && tagName !== "TEXTAREA" && !isContentEditable
}

export const useClickable = <
  Y extends HTMLElement = HTMLElement,
  M extends Props<Y> = Props<Y>,
>(
  {
    ref,
    clickOnEnter = true,
    clickOnSpace = true,
    disabled,
    disableTouchBehavior = true,
    focusable,
    focusOnClick = true,
    tabIndex: tabIndexProp,
    onClick: onClickProp,
    onKeyDown: onKeyDownProp,
    onKeyUp: onKeyUpProp,
    onMouseDown: onMouseDownProp,
    onMouseLeave: onMouseLeaveProp,
    onMouseOver: onMouseOverProp,
    onMouseUp: onMouseUpProp,
    ...props
  }: UseClickableProps<Y, M> = {} as UseClickableProps<Y, M>,
) => {
  const [button, setButton] = useState<boolean>(true)
  const [pressed, setPressed] = useState<boolean>(false)

  const listeners = useEventListeners()

  const tabIndex = button ? tabIndexProp : tabIndexProp || 0
  const trulyDisabled = disabled && !focusable

  const refCb = (node: any) => {
    if (!node) return

    if (node.tagName !== "BUTTON") setButton(false)
  }

  const onClick = useCallback(
    (ev: MouseEvent<Y>) => {
      if (disabled) {
        ev.stopPropagation()
        ev.preventDefault()

        return
      }

      if (focusOnClick) ev.currentTarget.focus()
      onClickProp?.(ev)
    },
    [disabled, focusOnClick, onClickProp],
  )

  const onDocumentKeyUp = useCallback(
    (ev: KeyboardEvent<Y>) => {
      if (pressed && isValidElement(ev)) {
        ev.preventDefault()
        ev.stopPropagation()

        setPressed(false)

        listeners.remove(document, "keyup", onDocumentKeyUp, false)
      }
    },
    [pressed, listeners],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<Y>) => {
      onKeyDownProp?.(ev)

      if (disabled || ev.defaultPrevented || ev.metaKey) return

      if (!isValidElement(ev.nativeEvent) || button) return

      if (clickOnSpace && ev.key === " ") {
        ev.preventDefault()
        setPressed(true)
      }

      if (clickOnEnter && ev.key === "Enter") {
        ev.preventDefault()
        ev.currentTarget.click()
      }

      listeners.add(document, "keyup", onDocumentKeyUp, false)
    },
    [
      disabled,
      button,
      onKeyDownProp,
      clickOnEnter,
      clickOnSpace,
      listeners,
      onDocumentKeyUp,
    ],
  )

  const onKeyUp = useCallback(
    (ev: KeyboardEvent<Y>) => {
      onKeyUpProp?.(ev)

      if (disabled || ev.defaultPrevented || ev.metaKey) return

      if (!isValidElement(ev.nativeEvent) || button) return

      if (clickOnSpace && ev.key === " ") {
        ev.preventDefault()
        setPressed(false)

        ev.currentTarget.click()
      }
    },
    [clickOnSpace, button, disabled, onKeyUpProp],
  )

  const onDocumentMouseUp = useCallback(
    (ev: MouseEvent<Y>) => {
      if (ev.button !== 0) return

      setPressed(false)

      listeners.remove(document, "mouseup", onDocumentMouseUp, false)
    },
    [listeners],
  )

  const onMouseDown = useCallback(
    (ev: MouseEvent<Y>) => {
      if (ev.button !== 0) return

      if (disabled) {
        ev.stopPropagation()
        ev.preventDefault()

        return
      }

      if (!button) setPressed(true)

      if (focusOnClick) ev.currentTarget.focus({ preventScroll: true })

      listeners.add(document, "mouseup", onDocumentMouseUp, false)

      onMouseDownProp?.(ev)
    },
    [
      disabled,
      button,
      onMouseDownProp,
      listeners,
      onDocumentMouseUp,
      focusOnClick,
    ],
  )

  const onMouseUp = useCallback(
    (ev: MouseEvent<Y>) => {
      if (ev.button !== 0) return

      if (!button) setPressed(false)

      onMouseUpProp?.(ev)
    },
    [onMouseUpProp, button],
  )

  const onMouseOver = useCallback(
    (ev: MouseEvent<Y>) => {
      if (disabled) {
        ev.preventDefault()

        return
      }

      if (disableTouchBehavior && isTouchDevice()) return

      onMouseOverProp?.(ev)
    },
    [disabled, onMouseOverProp, disableTouchBehavior],
  )

  const onMouseLeave = useCallback(
    (ev: MouseEvent<Y>) => {
      if (pressed) {
        ev.preventDefault()

        setPressed(false)
      }

      if (disableTouchBehavior && isTouchDevice()) return

      onMouseLeaveProp?.(ev)
    },
    [pressed, onMouseLeaveProp, disableTouchBehavior],
  )

  if (button) {
    return {
      ...props,
      ref: mergeRefs(ref, refCb),
      type: "button" as const,
      "aria-disabled": trulyDisabled ? undefined : disabled,
      disabled: trulyDisabled,
      onClick: onClick,
      onKeyDown: onKeyDownProp,
      onKeyUp: onKeyUpProp,
      onMouseDown: onMouseDownProp,
      onMouseLeave: onMouseLeaveProp,
      onMouseOver: onMouseOverProp,
      onMouseUp: onMouseUpProp,
    }
  } else {
    return {
      ...props,
      ref: mergeRefs(ref, refCb),
      "aria-disabled": disabled ? ("true" as const) : undefined,
      "data-active": dataAttr(pressed),
      role: "button",
      tabIndex: trulyDisabled ? undefined : tabIndex,
      onClick,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onMouseLeave,
      onMouseOver,
      onMouseUp,
    }
  }
}

export type UseClickableReturn = ReturnType<typeof useClickable>
