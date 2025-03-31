import type { ChangeEvent, CSSProperties } from "react"
import type { PropGetter } from "../../core"
import type { UseCalendarProps } from "./use-calendar"
import type { UseCalendarPickerProps } from "./use-calendar-picker"
import dayjs from "dayjs"
import { useCallback, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { handlerAll, isActiveElement, useUpdateEffect } from "../../utils"
import { useCalendarPicker } from "./use-calendar-picker"

interface CalendarProps
  extends Pick<
    UseCalendarProps<Date | undefined>,
    | "defaultValue"
    | "locale"
    | "maxDate"
    | "minDate"
    | "onChange"
    | "value"
    | "withControls"
    | "withHeader"
    | "withLabel"
    | "yearFormat"
  > {}

interface UseYearPickerOptions {
  /**
   * If `true`, the calendar component will be closed when value is selected.
   *
   * @default true
   */
  closeOnSelect?: boolean
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'YYYY'
   */
  inputFormat?: string
}

export interface UseYearPickerProps
  extends UseCalendarPickerProps<CalendarProps>,
    UseYearPickerOptions {}

export const useYearPicker = ({
  closeOnSelect = true,
  defaultValue,
  placeholder,
  value: valueProp,
  onChange: onChangeProp,
  ...rest
}: UseYearPickerProps) => {
  const [value, setValue] = useControllableState<Date | undefined>({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })

  const {
    allowInput,
    dateToString,
    inputFormat,
    inputRef,
    locale,
    pattern,
    stringToDate,
    formControlProps,
    getCalendarProps,
    getContainerProps,
    getFieldProps,
    getIconProps,
    getPopoverProps,
    inputProps,
    onClose,
  } = useCalendarPicker({
    inputFormat: "YYYY",
    ...rest,
    type: "year",
    defaultValue,
    value,
    onChange: setValue,
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
    __selectType: "year",
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

  useUpdateEffect(() => {
    const inputValue = dateToString(value)

    setInputValue(inputValue)
  }, [locale, inputFormat])

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        ...props.style,
        ...inputProps.style,
        ...(formControlProps.disabled || !allowInput
          ? { pointerEvents: "none" }
          : {}),
      }

      return {
        placeholder,
        tabIndex: !allowInput ? -1 : 0,
        ...formControlProps,
        ...inputProps,
        ...props,
        ref,
        style,
        value: inputValue ?? "",
        onChange: handlerAll(props.onChange, onChange),
      }
    },
    [
      inputProps,
      allowInput,
      placeholder,
      formControlProps,
      inputValue,
      onChange,
    ],
  )

  return {
    value,
    getCalendarProps,
    getContainerProps,
    getFieldProps,
    getIconProps,
    getInputProps,
    getPopoverProps,
    onClose,
  }
}

export type UseYearPickerReturn = ReturnType<typeof useYearPicker>
