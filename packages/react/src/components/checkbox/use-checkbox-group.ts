"use client"

import type { ChangeEvent } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { FieldProps } from "../field"
import { useCallback } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  handlerAll,
  isNumber,
  isObject,
  isString,
  isUndefined,
  mergeRefs,
  visuallyHiddenAttributes,
} from "../../utils"
import { useFieldProps } from "../field"

interface CheckboxGroupContext
  extends Omit<UseCheckboxGroupReturn, "getRootProps"> {}

const [CheckboxGroupContext, useCheckboxGroupContext] =
  createContext<CheckboxGroupContext>({
    name: "CheckboxGroupContext",
    strict: false,
  })

export { CheckboxGroupContext, useCheckboxGroupContext }

export interface UseCheckboxGroupProps<Y extends string = string>
  extends Omit<HTMLProps, "defaultValue" | "onChange" | "value">,
    FieldProps {
  /**
   * The initial value of the checkbox group.
   *
   * @default '[]'
   */
  defaultValue?: Y[]
  /**
   * The maximum number of checkboxes that can be checked.
   */
  max?: number
  /**
   * The value of the checkbox group.
   */
  value?: Y[]
  /**
   * The callback fired when any children checkbox is checked or unchecked.
   */
  onChange?: (value: Y[]) => void
}

export const useCheckboxGroup = <Y extends string = string>(
  props: UseCheckboxGroupProps<Y> = {},
) => {
  const {
    context: { labelId } = {},
    props: {
      defaultValue = [],
      disabled,
      max,
      readOnly,
      required,
      value: valueProp,
      onChange: onChangeProp,
      ...rest
    },
    ariaProps: { "aria-describedby": ariaDescribedbyProp, ...ariaProps },
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const interactive = !(readOnly || disabled)
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })

  const onChange = useCallback(
    (valueOrEv: ChangeEvent<HTMLInputElement> | Y) => {
      if (!interactive) return

      if (isObject(valueOrEv)) valueOrEv = valueOrEv.target.value as Y

      setValue((prev) => {
        if (prev.includes(valueOrEv)) {
          return prev.filter((prevValue) => prevValue !== valueOrEv)
        } else if (!isNumber(max) || prev.length < max) {
          return [...prev, valueOrEv]
        } else {
          return prev
        }
      })
    },
    [interactive, max, setValue],
  )

  const getRootProps: PropGetter = useCallback(
    ({
      ref,
      "aria-describedby": ariaDescribedby,
      "aria-labelledby": ariaLabelledby,
      ...props
    } = {}) => ({
      ...dataProps,
      "aria-describedby": cx(ariaDescribedbyProp, ariaDescribedby),
      "aria-labelledby": cx(labelId, ariaLabelledby),
      role: "group",
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref),
    }),
    [ariaDescribedbyProp, dataProps, labelId, rest],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}) => {
      const checked =
        !isUndefined(value) &&
        (isString(props.value) || isNumber(props.value)) &&
        value.includes(props.value as Y)
      const trulyDisabled = !checked && isNumber(max) && value.length >= max

      return {
        ...dataProps,
        ...ariaProps,
        type: "checkbox",
        style: visuallyHiddenAttributes.style,
        "aria-checked": checked,
        "aria-disabled": ariaAttr(trulyDisabled),
        "data-checked": dataAttr(checked),
        "data-disabled": dataAttr(trulyDisabled),
        checked,
        disabled: trulyDisabled,
        readOnly,
        required,
        ...props,
        onBlur: handlerAll(props.onBlur, eventProps.onBlur),
        onChange: handlerAll(props.onChange, onChange),
        onFocus: handlerAll(props.onFocus, eventProps.onFocus),
      }
    },
    [
      ariaProps,
      dataProps,
      eventProps,
      max,
      onChange,
      readOnly,
      required,
      value,
    ],
  )

  const getLabelProps: PropGetter<"label"> = useCallback(
    (props) => ({
      ...dataProps,
      ...props,
    }),
    [dataProps],
  )

  return {
    max,
    value,
    getInputProps,
    getLabelProps,
    getRootProps,
    onChange,
  }
}

export type UseCheckboxGroupReturn = ReturnType<typeof useCheckboxGroup>
