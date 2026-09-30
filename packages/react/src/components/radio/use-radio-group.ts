"use client"

import type { ChangeEvent } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { FieldProps } from "../field"
import { useCallback, useId } from "react"
import { mergeProps } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import {
  createContext,
  dataAttr,
  isObject,
  isUndefined,
  visuallyHiddenAttributes,
} from "../../utils"
import { useFieldProps } from "../field"

interface RadioGroupContext extends Omit<UseRadioGroupReturn, "getRootProps"> {}

const [RadioGroupContext, useRadioGroupContext] =
  createContext<RadioGroupContext>({
    name: "RadioGroupContext",
    strict: false,
  })

export { RadioGroupContext, useRadioGroupContext }

export interface UseRadioGroupProps<Y extends string = string>
  extends Omit<HTMLProps, "defaultValue" | "onChange" | "value">, FieldProps {
  /**
   * The initial value of the radio group.
   */
  defaultValue?: Y
  /**
   * The value of the radio group.
   */
  value?: Y
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: (value: Y) => void
}

export const useRadioGroup = <Y extends string = string>(
  props: UseRadioGroupProps<Y> = {},
) => {
  const uuid = useId()
  const {
    context: { labelId } = {},
    props: {
      id = uuid,
      defaultValue,
      disabled,
      readOnly,
      required,
      value: valueProp,
      onChange: onChangeProp,
      ...rest
    },
    ariaProps: { "aria-describedby": ariaDescribedby, ...ariaProps },
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

      if (isObject(valueOrEv)) setValue(valueOrEv.target.value as Y)
      else setValue(valueOrEv)
    },
    [interactive, setValue],
  )

  const getRootProps: PropGetter = useCallback(
    (props = {}) =>
      mergeProps(
        dataProps,
        {
          id,
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": labelId,
          role: "radiogroup",
        },
        rest,
        props,
      )(),
    [ariaDescribedby, dataProps, id, labelId, rest],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}) => {
      const checked = !isUndefined(value) && value === props.value

      return mergeProps(
        {
          ...dataProps,
          ...ariaProps,
          type: "radio",
          name: id,
          style: visuallyHiddenAttributes.style,
          "aria-checked": checked,
          "data-checked": dataAttr(checked),
          checked,
          disabled,
          readOnly,
          required,
        },
        props,
        { onChange, ...eventProps },
      )()
    },
    [
      ariaProps,
      dataProps,
      disabled,
      eventProps,
      id,
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
    name: id,
    value,
    getInputProps,
    getLabelProps,
    getRootProps,
    onChange,
  }
}

export type UseRadioGroupReturn = ReturnType<typeof useRadioGroup>
