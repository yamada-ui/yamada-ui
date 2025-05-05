import type { MouseEvent } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { FieldProps } from "../field"
import { useCallback } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { handlerAll } from "../../utils"
import { useFieldProps } from "../field"

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

export const usePasswordInput = (props: UsePasswordInputProps) => {
  const {
    props: {
      defaultVisible,
      disabled,
      visible: visibleProp,
      onVisibleChange,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const [visible, setVisible] = useControllableState({
    defaultValue: defaultVisible,
    value: visibleProp,
    onChange: onVisibleChange,
  })

  const onClick = useCallback(
    (ev: MouseEvent<HTMLButtonElement>) => {
      if (disabled || ev.button !== 0) return

      ev.preventDefault()

      setVisible((prev) => !prev)
    },
    [disabled, setVisible],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}) => ({
      type: visible ? "text" : "password",
      disabled,
      ...ariaProps,
      ...dataProps,
      ...eventProps,
      ...rest,
      ...props,
    }),
    [visible, rest, disabled, dataProps, eventProps, ariaProps],
  )

  const getIconProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      "aria-label": "Toggle password visibility",
      disabled,
      ...dataProps,
      ...props,
      onClick: handlerAll(props.onClick, onClick),
    }),
    [onClick, dataProps, disabled],
  )

  return {
    setVisible,
    visible,
    getIconProps,
    getInputProps,
  }
}

export type UsePasswordInputReturn = ReturnType<typeof usePasswordInput>
