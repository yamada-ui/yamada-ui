import type { CSSUIObject, PropGetter } from "@yamada-ui/core"
import type { ChangeEvent, CSSProperties } from "react"
import type { UseCalendarProps } from "./use-calendar"
import type { UseCalendarPickerProps } from "./use-calendar-picker"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import {
  createContext,
  handlerAll,
  isActiveElement,
  useUpdateEffect,
} from "@yamada-ui/utils"
import dayjs from "dayjs"
import { useCallback, useState } from "react"
import { isSameDate } from "./calendar-utils"
import { useCalendarPicker } from "./use-calendar-picker"

interface DatePickerContext {
  [key: string]: CSSUIObject
}

export const [DatePickerProvider, useDatePickerContext] =
  createContext<DatePickerContext>({
    name: "DatePickerContext",
    strict: false,
  })

interface CalendarProps
  extends Omit<
    UseCalendarProps<Date | undefined>,
    "enableMultiple" | "enableRange" | "nextRef" | "prevRef" | "typeRef"
  > {}

interface UseDatePickerOptions {
  /**
   * If `true`, the calendar component will be closed when value is selected.
   *
   * @default true
   */
  closeOnSelect?: boolean
}

export interface UseDatePickerProps
  extends UseCalendarPickerProps<CalendarProps>,
    UseDatePickerOptions {}

export const useDatePicker = ({
  closeOnSelect = true,
  defaultValue,
  placeholder,
  value: valueProp,
  onChange: onChangeProp,
  ...rest
}: UseDatePickerProps) => {
  const [value, setValue] = useControllableState<Date | undefined>({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
    onUpdate: (prev, next) => !isSameDate(prev, next),
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
    ...rest,
    defaultValue,
    value,
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
        autoComplete: "off",
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

export type UseDatePickerReturn = ReturnType<typeof useDatePicker>
