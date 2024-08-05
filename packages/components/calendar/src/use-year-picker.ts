import type { UIPropGetter } from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { isActiveElement, useUpdateEffect, handlerAll } from "@yamada-ui/utils"
import dayjs from "dayjs"
import type { ChangeEvent, CSSProperties } from "react"
import { useCallback, useState } from "react"
import type { UseCalendarProps } from "./use-calendar"
import {
  useCalendarPicker,
  type UseCalendarPickerProps,
} from "./use-calendar-picker"

type CalendarProps = Pick<
  UseCalendarProps<Date | undefined>,
  | "value"
  | "defaultValue"
  | "onChange"
  | "locale"
  | "minDate"
  | "maxDate"
  | "yearFormat"
  | "withHeader"
  | "withControls"
  | "withLabel"
>

type UseYearPickerOptions = {
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Docs https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'YYYY'
   */
  inputFormat?: string
  /**
   * If `true`, the calendar component will be closed when value is selected.
   *
   * @default true
   */
  closeOnSelect?: boolean
}

export type UseYearPickerProps = UseCalendarPickerProps<CalendarProps> &
  UseYearPickerOptions

export const useYearPicker = ({
  value: valueProp,
  defaultValue,
  onChange: onChangeProp,
  placeholder,
  closeOnSelect = true,
  ...rest
}: UseYearPickerProps) => {
  const [value, setValue] = useControllableState<Date | undefined>({
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
  })

  const {
    inputRef,
    id,
    allowInput,
    pattern,
    inputProps,
    formControlProps,
    onClose,
    dateToString,
    stringToDate,
    getContainerProps,
    getPopoverProps,
    getFieldProps,
    getCalendarProps,
    getIconProps,
  } = useCalendarPicker({
    inputFormat: "YYYY",
    ...rest,
    __selectType: "year",
    value,
    defaultValue,
    onChange: setValue,
    type: "year",
    onChangeType: (__type, year, month) => {
      let value: Date | undefined = undefined

      if (typeof year === "number" && typeof month === "number")
        value = new Date(year, month)

      const inputValue = dateToString(value)

      setValue(value)
      setInputValue(inputValue)

      if (closeOnSelect && value) onClose()
    },
    onClear: () => {
      setValue(undefined)
      setInputValue(undefined)
    },
    onClose: () => {
      const inputValue = dateToString(value)

      setInputValue(inputValue)

      rest.onClose?.()
    },
  })

  const [inputValue, setInputValue] = useState<string | undefined>(
    dateToString(value),
  )

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      let inputValue = ev.target.value

      inputValue = inputValue.replace(pattern, "")

      const value = stringToDate(inputValue)

      setInputValue(inputValue)

      if (!!value && dayjs(value).isValid()) {
        setValue(value)
      } else {
        setValue(undefined)
      }
    },
    [pattern, stringToDate, setInputValue, setValue],
  )

  useUpdateEffect(() => {
    setValue(valueProp)
  }, [valueProp])

  useUpdateEffect(() => {
    if (inputRef.current && isActiveElement(inputRef.current)) return

    const inputValue = dateToString(value)

    setInputValue(inputValue)
  }, [value])

  const getInputProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        ...props.style,
        ...(inputProps as { style?: CSSProperties }).style,
        ...(!allowInput ? { pointerEvents: "none" } : {}),
      }

      return {
        placeholder,
        ...formControlProps,
        ...inputProps,
        ...props,
        ref,
        style,
        id,
        tabIndex: !allowInput ? -1 : 0,
        value: inputValue ?? "",
        cursor: formControlProps.readOnly ? "default" : "text",
        pointerEvents: formControlProps.disabled ? "none" : "auto",
        onChange: handlerAll(props.onChange, onChange),
      }
    },
    [
      inputProps,
      allowInput,
      placeholder,
      formControlProps,
      id,
      inputValue,
      onChange,
    ],
  )

  return {
    id,
    value,
    onClose,
    getContainerProps,
    getPopoverProps,
    getFieldProps,
    getInputProps,
    getIconProps,
    getCalendarProps,
  }
}

export type UseYearPickerReturn = ReturnType<typeof useYearPicker>
