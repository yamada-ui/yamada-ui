"use client"

import type {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEvent,
} from "react"
import type { HTMLProps, HTMLRefAttributes, PropGetter } from "../../core"
import type { FieldProps } from "../field"
import { useCallback, useId, useRef } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import {
  dataAttr,
  handlerAll,
  mergeRefs,
  visuallyHiddenAttributes,
} from "../../utils"
import { useFieldProps } from "../field"

export interface UseSwitchProps<Y extends number | string = string>
  extends Omit<HTMLProps<"label">, "onBlur" | "onChange" | "onFocus" | "ref">,
    HTMLRefAttributes<"input">,
    FieldProps {
  /**
   * id assigned to input.
   */
  id?: string
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * If `true`, the switch will be checked.
   *
   * @default false
   */
  checked?: boolean
  /**
   * If `true`, the switch will be checked when the Enter key is pressed.
   *
   * @default true
   */
  checkOnEnter?: boolean
  /**
   * If `true`, the switch will be initially checked.
   *
   * @default false
   */
  defaultChecked?: boolean
  /**
   * The tab-index property of the underlying input element.
   */
  tabIndex?: number
  /**
   * The value to be used in the switch input.
   */
  value?: Y
  /**
   * The callback invoked when the switch is blurred.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>
  /**
   * The callback invoked when the checked state changes.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * The callback invoked when the switch is focused.
   */
  onFocus?: FocusEventHandler<HTMLInputElement>
}

export const useSwitch = <Y extends number | string = string>(
  props: UseSwitchProps<Y> = {},
) => {
  const uuid = useId()
  const {
    props: {
      id = uuid,
      ref,
      name,
      checked: checkedProp,
      checkOnEnter = true,
      defaultChecked = false,
      disabled,
      readOnly,
      required,
      value,
      onChange: onChangeProp,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const interactive = !(readOnly || disabled)
  const inputRef = useRef<HTMLInputElement>(null)
  const [checked, setChecked] = useControllableState({
    defaultValue: defaultChecked,
    value: checkedProp,
  })

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (!interactive) return ev.preventDefault()

      setChecked(ev.target.checked)
      onChangeProp?.(ev)
    },
    [onChangeProp, setChecked, interactive],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (interactive && checkOnEnter && ev.key === "Enter")
        inputRef.current?.click()
    },
    [interactive, checkOnEnter],
  )

  const getRootProps: PropGetter<"label"> = useCallback(
    (props = {}) => ({
      ...dataProps,
      htmlFor: id,
      "data-checked": dataAttr(checked),
      ...rest,
      ...props,
    }),
    [checked, rest, id, dataProps],
  )

  const getTrackProps: PropGetter = useCallback(
    (props = {}) => ({
      "data-checked": dataAttr(checked),
      ...dataProps,
      ...props,
    }),
    [checked, dataProps],
  )

  const getThumbProps: PropGetter = useCallback(
    (props = {}) => ({
      "data-checked": dataAttr(checked),
      ...dataProps,
      ...props,
    }),
    [checked, dataProps],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}) => ({
      ...ariaProps,
      ...dataProps,
      id,
      type: "checkbox",
      name,
      style: visuallyHiddenAttributes.style,
      checked,
      disabled,
      readOnly,
      required,
      role: "switch",
      tabIndex: interactive ? 0 : -1,
      value,
      ...props,
      ref: mergeRefs(inputRef, props.ref, ref),
      onBlur: handlerAll(eventProps.onBlur, props.onBlur),
      onChange: handlerAll(props.onChange, onChange),
      onFocus: handlerAll(eventProps.onFocus, props.onFocus),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [
      ariaProps,
      dataProps,
      id,
      name,
      checked,
      disabled,
      readOnly,
      required,
      interactive,
      value,
      ref,
      eventProps,
      onChange,
      onKeyDown,
    ],
  )

  const getLabelProps: PropGetter<"span"> = useCallback(
    (props = {}) => ({
      ...dataProps,
      "data-checked": dataAttr(checked),
      ...props,
    }),
    [dataProps, checked],
  )

  return {
    checked,
    getInputProps,
    getLabelProps,
    getRootProps,
    getThumbProps,
    getTrackProps,
  }
}

export type UseSwitchReturn = ReturnType<typeof useSwitch>
