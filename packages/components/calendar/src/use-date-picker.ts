import type { CSSUIObject, UIPropGetter } from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import {
  isActiveElement,
  useUpdateEffect,
  createContext,
  handlerAll,
} from "@yamada-ui/utils"
import dayjs from "dayjs"
import type { ChangeEvent, CSSProperties } from "react"
import { useCallback, useState } from "react"
import { isSameDate } from "./calendar-utils"
import type { UseCalendarProps } from "./use-calendar"
import type { UseCalendarPickerProps } from "./use-calendar-picker"
import { useCalendarPicker } from "./use-calendar-picker"

type DatePickerContext = Record<string, CSSUIObject>

export const [DatePickerProvider, useDatePickerContext] =
  createContext<DatePickerContext>({
    strict: false,
    name: "DatePickerContext",
  })

type CalendarProps = Omit<
  UseCalendarProps<Date | undefined>,
  "prevRef" | "typeRef" | "nextRef" | "enableMultiple" | "enableRange"
>

type UseDatePickerOptions = {
  /**
   * If `true`, the calendar component will be closed when value is selected.
   *
   * @default true
   */
  closeOnSelect?: boolean
}

export type UseDatePickerProps = UseCalendarPickerProps<CalendarProps> &
  UseDatePickerOptions

export const useDatePicker = ({
  value: valueProp,
  defaultValue,
  onChange: onChangeProp,
  placeholder,
  closeOnSelect = true,
  ...rest
}: UseDatePickerProps) => {
  const [value, setValue] = useControllableState<Date | undefined>({
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
    onUpdate: (prev, next) => !isSameDate(prev, next),
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
    ...rest,
    value,
    defaultValue,
    onChange: (value: Date | undefined) => {
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
        autoComplete: "off",
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
    value,
    getContainerProps,
    getPopoverProps,
    getFieldProps,
    getInputProps,
    getIconProps,
    getCalendarProps,
  }
}

export type UseDatePickerReturn = ReturnType<typeof useDatePicker>
