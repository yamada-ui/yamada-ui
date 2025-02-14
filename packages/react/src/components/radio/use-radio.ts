import type {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  SyntheticEvent,
} from "react"
import type { PropGetter } from "../../core"
import type { Dict } from "../../utils"
import type { FormControlOptions } from "../form-control"
import { useCallback, useEffect, useId, useState } from "react"
import { trackFocusVisible } from "../../hooks/use-focus-visible"
import { dataAttr, handlerAll, splitObject, useCallbackRef } from "../../utils"
import { formControlProperties, useFormControlProps } from "../form-control"

export interface UseRadioProps<Y extends number | string = string>
  extends FormControlOptions {
  /**
   * id assigned to input.
   */
  id?: string
  /**
   * The name of the input field in a radio.
   */
  name?: string
  /**
   * If `true`, the radio will be checked.
   *
   * @default false
   */
  checked?: boolean
  /**
   * If `true`, the radio will be initially checked.
   *
   * @default false
   */
  defaultChecked?: boolean
  /**
   * The value to be used in the radio button.
   */
  value?: Y
  /**
   * The callback invoked when the checked state changes.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const useRadio = <
  Y extends number | string = string,
  M extends Dict = Dict,
>({
  id,
  ...props
}: M & UseRadioProps<Y>) => {
  const uuid = useId()

  id ??= uuid

  const {
    id: _id,
    name,
    checked: checkedProp,
    defaultChecked,
    value,
    onChange: onChangeProp,
    ...computedProps
  } = useFormControlProps({ id, ...props })
  const [
    {
      "aria-readonly": _ariaReadonly,
      disabled,
      readOnly,
      required,
      onBlur: onBlurProp,
      onFocus: onFocusProp,
      ...formControlProps
    },
    rest,
  ] = splitObject(computedProps, formControlProperties)
  const [focusVisible, setFocusVisible] = useState<boolean>(false)
  const [focused, setFocused] = useState<boolean>(false)
  const [hovered, setHovered] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(!!defaultChecked)
  const controlled = checkedProp !== undefined
  const resolvedChecked = controlled ? (checkedProp as boolean) : checked

  useEffect(() => {
    return trackFocusVisible(setFocusVisible)
  }, [])

  const onChange = useCallbackRef(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (readOnly || disabled) {
        ev.preventDefault()

        return
      }

      if (!controlled) setChecked(ev.target.checked)

      onChangeProp?.(ev)
    },
    [readOnly, disabled, controlled],
  )
  const onFocus = useCallbackRef(onFocusProp)
  const onBlur = useCallbackRef(onBlurProp)

  const onKeyDown = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === " ") setActive(true)
    },
    [setActive],
  )

  const onKeyUp = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === " ") setActive(false)
    },
    [setActive],
  )

  const getContainerProps: PropGetter<"label"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref,
      "data-checked": dataAttr(resolvedChecked),
      "data-focus": dataAttr(focused),
      "data-focus-visible": dataAttr(focused && focusVisible),
    }),
    [resolvedChecked, formControlProps, focused, focusVisible],
  )

  const getIconProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref,
      "aria-hidden": true,
      "data-active": dataAttr(active),
      "data-checked": dataAttr(resolvedChecked),
      "data-focus": dataAttr(focused),
      "data-focus-visible": dataAttr(focused && focusVisible),
      "data-hover": dataAttr(hovered),
      onMouseDown: handlerAll(props.onMouseDown, () => setActive(true)),
      onMouseEnter: handlerAll(props.onMouseEnter, () => setHovered(true)),
      onMouseLeave: handlerAll(props.onMouseLeave, () => setHovered(false)),
      onMouseUp: handlerAll(props.onMouseUp, () => setActive(false)),
    }),
    [resolvedChecked, active, focused, focusVisible, hovered, formControlProps],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      id,
      ref,
      type: "radio",
      name,
      style: {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0px",
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px",
      },
      "aria-checked": resolvedChecked,
      checked: resolvedChecked,
      disabled,
      readOnly,
      required,
      value,
      onBlur: handlerAll(props.onBlur, onBlur, () => setFocused(false)),
      onChange: handlerAll(props.onChange, onChange),
      onFocus: handlerAll(props.onFocus, onFocus, () => setFocused(true)),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      onKeyUp: handlerAll(props.onKeyUp, onKeyUp),
    }),
    [
      formControlProps,
      id,
      name,
      value,
      required,
      disabled,
      readOnly,
      resolvedChecked,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
    ],
  )

  const getLabelProps: PropGetter<"span"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref,
      "data-checked": dataAttr(resolvedChecked),
      onMouseDown: handlerAll(props.onMouseDown, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
      onTouchStart: handlerAll(props.onTouchStart, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
    }),
    [resolvedChecked, formControlProps],
  )

  return {
    active,
    checked: resolvedChecked,
    focused,
    focusVisible,
    hovered,
    props: rest,
    getContainerProps,
    getIconProps,
    getInputProps,
    getLabelProps,
  }
}

export type UseRadioReturn = ReturnType<typeof useRadio>
