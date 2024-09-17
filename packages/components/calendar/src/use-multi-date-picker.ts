import type { PropGetter } from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { handlerAll, isNumber, useUpdateEffect } from "@yamada-ui/utils"
import dayjs from "dayjs"
import type { ChangeEvent, CSSProperties } from "react"
import { useCallback, useRef, useState } from "react"
import { isSameDate } from "./calendar-utils"
import type { UseCalendarProps } from "./use-calendar"
import type { UseCalendarPickerProps } from "./use-calendar-picker"
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
    "prevRef" | "typeRef" | "nextRef" | "enableMultiple" | "enableRange"
  > {}

interface UseMultiDatePickerOptions {
  /**
   * If `true`, the calendar component will be closed when value is selected.
   *
   * @default false
   */
  closeOnSelect?: boolean
  /**
   * If `true`, the calendar component will be closed when value is max selected.
   *
   * @default true
   */
  closeOnMaxSelect?: boolean
}

export interface UseMultiDatePickerProps
  extends UseCalendarPickerProps<CalendarProps>,
    UseMultiDatePickerOptions {}

export const useMultiDatePicker = ({
  value: valueProp,
  defaultValue = [],
  onChange: onChangeProp,
  placeholder,
  closeOnSelect = false,
  maxSelectValues,
  closeOnMaxSelect = true,
  excludeDate,
  ...rest
}: UseMultiDatePickerProps) => {
  const isComposition = useRef<boolean>(false)
  const draftValue = useRef<Date | undefined>(undefined)
  const [value, setValue] = useControllableState<Date[]>({
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
  })
  const [inputValue, setInputValue] = useState<string>("")

  const resolvedValue = getResolvedValue([...(value ?? []), draftValue.current])

  const {
    id,
    allowInput,
    pattern,
    inputProps,
    formControlProps,
    isOpen,
    onClose,
    dateToString,
    stringToDate,
    getContainerProps,
    getPopoverProps,
    getFieldProps,
    getCalendarProps,
    getIconProps,
  } = useCalendarPicker({
    excludeDate,
    ...rest,
    maxSelectValues,
    enableMultiple: true,
    value: resolvedValue,
    defaultValue,
    onChange: (value: Date[]) => {
      value = value?.filter((value) => !isSameDate(value, draftValue.current))

      setValue(value)
      setInputValue("")

      draftValue.current = undefined

      if (closeOnSelect && !!value?.length) onClose()
    },
    onClear: () => {
      setValue([])
      setInputValue("")
    },
    onClose: () => {
      setInputValue("")

      rest.onClose?.()
    },
    onEnter: () => {
      if (isComposition.current) return

      const value = stringToDate(inputValue)

      if (!!value && dayjs(value).isValid()) {
        setValue((prev) => {
          if (prev.length === maxSelectValues) return prev

          const isSelected = prev?.some((prevValue) =>
            isSameDate(prevValue, value),
          )

          return !isSelected ? [...(prev ?? []), value!] : prev
        })
      }

      setInputValue("")
      draftValue.current = undefined
    },
    onDelete: (ev) => {
      if (inputValue.length) return

      ev.preventDefault()
      ev.stopPropagation()

      setValue((prev) => prev.slice(0, -1))
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

      if (!isComposition.current) inputValue = inputValue.replace(pattern, "")

      setInputValue(inputValue)

      const value = stringToDate(inputValue)

      draftValue.current = dayjs(value).isValid() ? value : undefined
    },
    [pattern, stringToDate],
  )

  const onCompositionStart = useCallback(() => {
    isComposition.current = true
  }, [])

  const onCompositionEnd = useCallback(() => {
    isComposition.current = false

    setInputValue((prev) => prev.replace(pattern, ""))
  }, [pattern])

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
        ref,
        style,
        id,
        tabIndex: !allowInput ? -1 : 0,
        value: inputValue ?? "",
        cursor: formControlProps.readOnly ? "default" : "text",
        pointerEvents: formControlProps.disabled ? "none" : "auto",
        onChange: handlerAll(props.onChange, onChange),
        onCompositionStart: handlerAll(
          props.onCompositionStart,
          onCompositionStart,
        ),
        onCompositionEnd: handlerAll(props.onCompositionEnd, onCompositionEnd),
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
      onCompositionStart,
      onCompositionEnd,
    ],
  )

  return {
    id,
    value,
    setValue,
    isOpen,
    onClose,
    dateToString,
    getContainerProps,
    getPopoverProps,
    getFieldProps,
    getInputProps,
    getIconProps,
    getCalendarProps,
  }
}

export type UseMultiDatePickerReturn = ReturnType<typeof useMultiDatePicker>
