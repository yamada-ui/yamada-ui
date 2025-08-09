"use client"

import type { ChangeEvent } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { FieldProps } from "../field"
import { useCallback, useId } from "react"
import { useControllableState } from "../../client"
import {
  createContext,
  cx,
  dataAttr,
  handlerAll,
  isObject,
  isUndefined,
  mergeRefs,
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
  extends Omit<HTMLProps, "defaultValue" | "onChange" | "value">,
    FieldProps {
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

      if (isObject(valueOrEv)) {
        setValue(valueOrEv.target.value as Y)
      } else {
        setValue(valueOrEv)
      }
    },
    [interactive, setValue],
  )

  const getRootProps: PropGetter = useCallback(
    ({ ref, "aria-describedby": ariaDescribedby, ...props } = {}) => ({
      ...dataProps,
      id,
      "aria-describedby": cx(ariaDescribedbyProp, ariaDescribedby),
      role: "radiogroup",
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref),
    }),
    [ariaDescribedbyProp, dataProps, id, rest],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}) => {
      const checked = !isUndefined(value) && value === props.value

      return {
        type: "radio",
        name: id,
        style: visuallyHiddenAttributes.style,
        "aria-checked": checked,
        "data-checked": dataAttr(checked),
        checked,
        disabled,
        readOnly,
        required,
        ...dataProps,
        ...ariaProps,
        ...props,
        onBlur: handlerAll(props.onBlur, eventProps.onBlur),
        onChange: handlerAll(props.onChange, onChange),
        onFocus: handlerAll(props.onFocus, eventProps.onFocus),
      }
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
