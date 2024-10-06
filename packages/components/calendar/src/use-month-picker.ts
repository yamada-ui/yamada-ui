import type { PropGetter } from "@yamada-ui/core"
import type { ChangeEvent, CSSProperties } from "react"
import type { UseCalendarProps } from "./use-calendar"
import type { UseCalendarPickerProps } from "./use-calendar-picker"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { handlerAll, isActiveElement, useUpdateEffect } from "@yamada-ui/utils"
import dayjs from "dayjs"
import { useCallback, useState } from "react"
import { useCalendarPicker } from "./use-calendar-picker"

interface CalendarProps
  extends Pick<
    UseCalendarProps<Date | undefined>,
    | "defaultMonth"
    | "defaultValue"
    | "locale"
    | "maxDate"
    | "minDate"
    | "month"
    | "monthFormat"
    | "onChange"
    | "onChangeMonth"
    | "value"
    | "withControls"
    | "withHeader"
    | "withLabel"
    | "yearFormat"
  > {}

interface UseMonthPickerOptions {
  /**
   * The type of the month picker.
   */
  type?: "month" | "year"
  /**
   * If `true`, the calendar component will be closed when value is selected.
   *
   * @default true
   */
  closeOnSelect?: boolean
  /**
   * The initial type of the month picker.
   *
   * @default 'month'
   */
  defaultType?: "month" | "year"
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Docs https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'YYYY/MM'
   */
  inputFormat?: string
  /**
   * The callback invoked when type state changes.
   */
  onChangeType?: (type: "month" | "year") => void
}

export interface UseMonthPickerProps
  extends UseCalendarPickerProps<CalendarProps>,
    UseMonthPickerOptions {}

export const useMonthPicker = ({
  type: typeProp,
  closeOnSelect = true,
  defaultType = "month",
  defaultValue,
  placeholder,
  value: valueProp,
  onChange: onChangeProp,
  onChangeType: onChangeTypeProp,
  ...rest
}: UseMonthPickerProps) => {
  const [value, setValue] = useControllableState<Date | undefined>({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const [type, setType] = useControllableState({
    defaultValue: defaultType,
    value: typeProp,
    onChange: onChangeTypeProp,
  })

  const {
    id,
    allowInput,
    dateToString,
    inputRef,
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
    inputFormat: "YYYY/MM",
    ...rest,
    type,
    defaultType,
    defaultValue,
    value,
    onChange: setValue,
    onChangeType: (type, year, month) => {
      if (type !== "date") {
        setType(type)
      } else {
        let value: Date | undefined = undefined

        if (typeof year === "number" && typeof month === "number")
          value = new Date(year, month)

        const inputValue = dateToString(value)

        setValue(value)
        setInputValue(inputValue)

        if (closeOnSelect && value) onClose()
      }
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
    __selectType: "month",
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

  const getInputProps: PropGetter<"input"> = useCallback(
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
        id,
        ref,
        style,
        cursor: formControlProps.readOnly ? "default" : "text",
        pointerEvents: formControlProps.disabled ? "none" : "auto",
        tabIndex: !allowInput ? -1 : 0,
        value: inputValue ?? "",
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
    getCalendarProps,
    getContainerProps,
    getFieldProps,
    getIconProps,
    getInputProps,
    getPopoverProps,
    onClose,
  }
}

export type UseMonthPickerReturn = ReturnType<typeof useMonthPicker>
