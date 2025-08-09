"use client"

import type { ChangeEvent, ChangeEventHandler, FocusEventHandler } from "react"
import type { HTMLProps, HTMLRefAttributes, PropGetter } from "../../core"
import type { FieldProps } from "../field"
import { useCallback, useId } from "react"
import { useControllableEventState } from "../../hooks/use-controllable-state"
import {
  ariaAttr,
  cx,
  dataAttr,
  handlerAll,
  isNumber,
  isUndefined,
  mergeRefs,
  visuallyHiddenAttributes,
} from "../../utils"
import { useFieldProps } from "../field"
import { useCheckboxGroupContext } from "./use-checkbox-group"

export interface UseCheckboxProps<Y extends string = string>
  extends Omit<HTMLProps<"label">, "onBlur" | "onChange" | "onFocus" | "ref">,
    HTMLRefAttributes<"input">,
    FieldProps {
  /**
   * id assigned to input.
   */
  id?: string
  /**
   * The name of the input field in a checkbox.
   */
  name?: string
  /**
   * If `true`, the checkbox will be checked.
   */
  checked?: boolean
  /**
   * If `true`, the checkbox will be initially checked.
   *
   * @default false
   */
  defaultChecked?: boolean
  /**
   * If `true`, the checkbox will be indeterminate.
   *
   * @default false
   */
  indeterminate?: boolean
  /**
   * The value of the checkbox.
   */
  value?: Y
  /**
   * The callback invoked when the checkbox is blurred.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>
  /**
   * The callback invoked when the checked state changes.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * The callback invoked when the checkbox is focused.
   */
  onFocus?: FocusEventHandler<HTMLInputElement>
}

export const useCheckbox = <Y extends string = string>({
  "aria-describedby": ariaDescribedbyProp,
  ...props
}: UseCheckboxProps<Y> = {}) => {
  const group = useCheckboxGroupContext()
  const {
    max,
    value: groupValue,
    getInputProps: getGroupInputProps,
    getLabelProps,
  } = group ?? {}
  const uuid = useId()
  const {
    props: {
      id,
      ref,
      name,
      checked: checkedProp,
      defaultChecked = false,
      disabled,
      indeterminate = false,
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
  const resolvedAriaDescribedby = group ? ariaDescribedbyProp : ariaDescribedby
  const resolvedChecked =
    !isUndefined(groupValue) && !isUndefined(value)
      ? groupValue.includes(value)
      : checkedProp
  const [checked, setChecked] = useControllableEventState({
    defaultValue: defaultChecked,
    value: resolvedChecked,
    onChange: onChangeProp,
  })
  const trulyDisabled =
    !checked && isNumber(max) && group && group.value.length >= max
  const interactive = !(readOnly || trulyDisabled)

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (!interactive) return (ev.defaultPrevented = true)

      if (indeterminate) ev.target.checked = true

      setChecked(ev)
    },
    [interactive, indeterminate, setChecked],
  )

  const getRootProps: PropGetter<"label"> = useCallback(
    (props = {}) => {
      const sharedProps = {
        ...dataProps,
        htmlFor: id,
        "data-checked": dataAttr(checked),
        "data-disabled": dataAttr(!interactive),
        "data-indeterminate": dataAttr(indeterminate),
        ...rest,
        ...props,
      }

      return getLabelProps?.(sharedProps) ?? sharedProps
    },
    [dataProps, id, checked, interactive, indeterminate, rest, getLabelProps],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    ({ "aria-describedby": ariaDescribedby, ...props } = {}) => {
      const sharedProps = {
        ...dataProps,
        ...ariaProps,
        id,
        type: "checkbox",
        name,
        style: visuallyHiddenAttributes.style,
        "aria-checked": indeterminate ? ("mixed" as const) : checked,
        "aria-describedby": cx(resolvedAriaDescribedby, ariaDescribedby),
        "aria-disabled": ariaAttr(!interactive),
        "data-checked": dataAttr(checked),
        "data-disabled": dataAttr(!interactive),
        "data-indeterminate": dataAttr(indeterminate),
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
      dataProps,
      ariaProps,
      id,
      name,
      indeterminate,
      checked,
      resolvedAriaDescribedby,
      interactive,
      disabled,
      readOnly,
      required,
      value,
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
      "data-disabled": dataAttr(!interactive),
      "data-indeterminate": dataAttr(indeterminate),
      ...props,
    }),
    [dataProps, checked, interactive, indeterminate],
  )

  return {
    checked,
    indeterminate,
    getIndicatorProps,
    getInputProps,
    getRootProps,
    onChange,
  }
}

export type UseCheckboxReturn = ReturnType<typeof useCheckbox>
