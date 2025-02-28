import type { PointerEvent } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { FieldProps } from "../field"
import { useCallback } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { handlerAll } from "../../utils"

export interface UsePasswordInputProps extends HTMLProps<"input">, FieldProps {
  /**
   * Determines whether the password input is visible by default.
   *
   * @default false
   */
  defaultVisible?: boolean
  /**
   * Determines the visibility of the password input.
   *
   * @default false
   */
  visible?: boolean
  /**
   * Callback function that is triggered when the visibility of the password input changes.
   */
  onVisibleChange?: (visible: boolean) => void
}

export const usePasswordInput = ({
  "aria-readonly": ariaReadonly,
  defaultVisible,
  disabled,
  visible: visibleProp,
  onVisibleChange,
  ...rest
}: UsePasswordInputProps) => {
  const [visible, setVisible] = useControllableState({
    defaultValue: defaultVisible,
    value: visibleProp,
    onChange: onVisibleChange,
  })

  const onPointerDown = useCallback(
    (ev: PointerEvent<HTMLDivElement>) => {
      if (disabled || ev.button !== 0) return

      ev.preventDefault()

      setVisible((prev) => !prev)
    },
    [disabled, setVisible],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}) => ({
      type: visible ? "text" : "password",
      ...rest,
      "aria-readonly": ariaReadonly,
      ...props,
    }),
    [visible, rest, ariaReadonly],
  )

  const getIconProps: PropGetter = useCallback(
    (props = {}) => ({
      "aria-label": "Toggle password visibility",
      tabIndex: -1,
      ...props,
      onPointerDown: handlerAll(props.onPointerDown, onPointerDown),
    }),
    [onPointerDown],
  )

  return {
    setVisible,
    visible,
    getIconProps,
    getInputProps,
  }
}

export type UsePasswordInputReturn = ReturnType<typeof usePasswordInput>
