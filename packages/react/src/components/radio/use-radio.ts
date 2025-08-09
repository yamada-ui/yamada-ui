"use client"

import type { ChangeEvent, ChangeEventHandler, FocusEventHandler } from "react"
import type { HTMLProps, HTMLRefAttributes, PropGetter } from "../../core"
import type { FieldProps } from "../field"
import { useCallback, useId } from "react"
import { useControllableEventState } from "../../hooks/use-controllable-state"
import {
  cx,
  dataAttr,
  handlerAll,
  isUndefined,
  mergeRefs,
  visuallyHiddenAttributes,
} from "../../utils"
import { useFieldProps } from "../field"
import { useRadioGroupContext } from "./use-radio-group"

export interface UseRadioProps<Y extends string = string>
  extends Omit<HTMLProps<"label">, "onBlur" | "onChange" | "onFocus" | "ref">,
    HTMLRefAttributes<"input">,
    FieldProps {
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
   */
  checked?: boolean
  /**
   * If `true`, the radio will be initially checked.
   *
   * @default false
   */
  defaultChecked?: boolean
  /**
   * The value of the radio.
   */
  value?: Y
  /**
   * The callback invoked when the radio is blurred.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>
  /**
   * The callback invoked when the checked state changes.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * The callback invoked when the radio is focused.
   */
  onFocus?: FocusEventHandler<HTMLInputElement>
}

export const useRadio = <Y extends string = string>({
  "aria-describedby": ariaDescribedbyProp,
  ...props
}: UseRadioProps<Y> = {}) => {
  const group = useRadioGroupContext()
  const {
    name: groupName,
    value: groupValue,
    getInputProps: getGroupInputProps,
    getLabelProps,
  } = group ?? {}
  const uuid = useId()
  const {
    props: {
      id,
      ref,
      name = groupName,
      checked: checkedProp,
      defaultChecked = false,
      disabled,
      readOnly,
      required,
      value,
      onChange: onChangeProp,
      ...rest
    },
    ariaProps: { "aria-describedby": ariaDescribedby, ...ariaProps },
    dataProps,
    eventProps,
  } = useFieldProps({
    id: group ? uuid : undefined,
    ...props,
    notSupportReadOnly: true,
  })
  const interactive = !(readOnly || disabled)
  const resolvedAriaDescribedby = group ? ariaDescribedbyProp : ariaDescribedby
  const resolvedChecked =
    !isUndefined(groupValue) && !isUndefined(value)
      ? groupValue === value
      : checkedProp
  const [checked, setChecked] = useControllableEventState({
    defaultValue: defaultChecked,
    value: resolvedChecked,
    onChange: onChangeProp,
  })

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (!interactive) return (ev.defaultPrevented = true)

      setChecked(ev)
    },
    [setChecked, interactive],
  )

  const getRootProps: PropGetter<"label"> = useCallback(
    (props = {}) => {
      const sharedProps = {
        ...dataProps,
        htmlFor: id,
        "data-checked": dataAttr(checked),
        ...rest,
        ...props,
      }

      return getLabelProps?.(sharedProps) ?? sharedProps
    },
    [dataProps, getLabelProps, id, checked, rest],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    ({ "aria-describedby": ariaDescribedby, ...props } = {}) => {
      const sharedProps = {
        ...dataProps,
        ...ariaProps,
        id,
        type: "radio",
        name,
        style: visuallyHiddenAttributes.style,
        "aria-checked": checked,
        "aria-describedby": cx(resolvedAriaDescribedby, ariaDescribedby),
        "data-checked": dataAttr(checked),
        checked,
        disabled,
        readOnly,
        required,
        value,
        ...props,
        ref: mergeRefs(props.ref, ref),
        onBlur: handlerAll(props.onBlur, eventProps.onBlur),
        onChange: handlerAll(props.onChange, onChange),
        onFocus: handlerAll(props.onFocus, eventProps.onFocus),
      }

      return getGroupInputProps?.(sharedProps) ?? sharedProps
    },
    [
      id,
      name,
      checked,
      resolvedAriaDescribedby,
      disabled,
      readOnly,
      required,
      value,
      dataProps,
      ariaProps,
      ref,
      eventProps,
      onChange,
      getGroupInputProps,
    ],
  )

  const getIndicatorProps: PropGetter = useCallback(
    (props = {}) => ({
      ...dataProps,
      "aria-hidden": "true",
      "data-checked": dataAttr(checked),
      ...props,
    }),
    [dataProps, checked],
  )

  return {
    checked,
    getIndicatorProps,
    getInputProps,
    getRootProps,
    onChange,
  }
}

export type UseRadioReturn = ReturnType<typeof useRadio>
