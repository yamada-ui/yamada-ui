import type { ChangeEvent, CSSProperties } from "react"
import type { PropGetter } from "../../core"
import type { UseCalendarProps } from "./use-calendar"
import type { UseCalendarPickerProps } from "./use-calendar-picker"
import dayjs from "dayjs"
import { useCallback, useRef, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { handlerAll, isNumber, useUpdateEffect } from "../../utils"
import { isSameDate } from "./calendar-utils"
import { useCalendarPicker } from "./use-calendar-picker"

const getResolvedValue = (value: (Date | undefined)[]) => {
  const timestamps = new Set(
    value.map((date) => date?.getTime()).filter(Boolean),
  ) as Set<number>

  return Array.from(timestamps).map(
    (timestamp) => new Date(timestamp),
  ) as Date[]
}

interface CalendarProps
  extends Omit<
    UseCalendarProps<Date[]>,
    "enableMultiple" | "enableRange" | "nextRef" | "prevRef" | "typeRef"
  > {}

interface UseMultiDatePickerOptions {
  /**
   * If `true`, the calendar component will be closed when value is max selected.
   *
   * @default true
   */
  closeOnMaxSelect?: boolean
  /**
   * If `true`, the calendar component will be closed when value is selected.
   *
   * @default false
   */
  closeOnSelect?: boolean
}

export interface UseMultiDatePickerProps
  extends UseCalendarPickerProps<CalendarProps>,
    UseMultiDatePickerOptions {}

export const useMultiDatePicker = ({
  closeOnMaxSelect = true,
  closeOnSelect = false,
  defaultValue = [],
  excludeDate,
  maxSelectValues,
  placeholder,
  value: valueProp,
  onChange: onChangeProp,
  ...rest
}: UseMultiDatePickerProps) => {
  const composition = useRef<boolean>(false)
  const draftValue = useRef<Date | undefined>(undefined)
  const [value, setValue] = useControllableState<Date[]>({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const [inputValue, setInputValue] = useState<string>("")
  const resolvedValue = getResolvedValue([...value, draftValue.current])
  const {
    allowInput,
    dateToString,
    open,
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
    excludeDate,
    ...rest,
    defaultValue,
    enableMultiple: true,
    maxSelectValues,
    value: resolvedValue,
    onChange: (value: Date[]) => {
      value = value.filter((value) => !isSameDate(value, draftValue.current))

      setValue(value)
      setInputValue("")

      draftValue.current = undefined

      if (closeOnSelect && !!value.length) onClose()
    },
    onClear: () => {
      setValue([])
      setInputValue("")
    },
    onClose: () => {
      setInputValue("")

      rest.onClose?.()
    },
    onDelete: (ev) => {
      if (inputValue.length) return

      ev.preventDefault()
      ev.stopPropagation()

      setValue((prev) => prev.slice(0, -1))
    },
    onEnter: () => {
      if (composition.current) return

      const value = stringToDate(inputValue)

      if (!!value && dayjs(value).isValid()) {
        setValue((prev) => {
          if (prev.length === maxSelectValues) return prev

          const selected = prev.some((prevValue) =>
            isSameDate(prevValue, value),
          )

          return !selected ? [...prev, value!] : prev
        })
      }

      setInputValue("")
      draftValue.current = undefined
    },
  })

  useUpdateEffect(() => {
    setValue(valueProp ?? [])
  }, [valueProp])

  useUpdateEffect(() => {
    if (!closeOnMaxSelect || !isNumber(maxSelectValues)) return

    if (maxSelectValues <= value.length) onClose()
  }, [value])

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      let inputValue = ev.target.value

      if (!composition.current) inputValue = inputValue.replace(pattern, "")

      setInputValue(inputValue)

      const value = stringToDate(inputValue)

      draftValue.current = dayjs(value).isValid() ? value : undefined
    },
    [pattern, stringToDate],
  )

  const onCompositionStart = useCallback(() => {
    composition.current = true
  }, [])

  const onCompositionEnd = useCallback(() => {
    composition.current = false

    setInputValue((prev) => prev.replace(pattern, ""))
  }, [pattern])

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
        value: inputValue,
        onChange: handlerAll(props.onChange, onChange),
        onCompositionEnd: handlerAll(props.onCompositionEnd, onCompositionEnd),
        onCompositionStart: handlerAll(
          props.onCompositionStart,
          onCompositionStart,
        ),
      }
    },
    [
      inputProps,
      allowInput,
      placeholder,
      formControlProps,
      inputValue,
      onChange,
      onCompositionStart,
      onCompositionEnd,
    ],
  )

  return {
    dateToString,
    open,
    setValue,
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

export type UseMultiDatePickerReturn = ReturnType<typeof useMultiDatePicker>
