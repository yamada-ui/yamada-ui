import type { PropGetter } from "@yamada-ui/core"
import type { ChangeEvent, CSSProperties } from "react"
import type { UseCalendarProps } from "./use-calendar"
import type { UseCalendarPickerProps } from "./use-calendar-picker"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import {
  getActiveElement,
  handlerAll,
  isActiveElement,
  isContains,
  isNumber,
  mergeRefs,
  useUpdateEffect,
} from "@yamada-ui/utils"
import dayjs from "dayjs"
import { useCallback, useRef, useState } from "react"
import { isAfterDate, isBeforeDate } from "./calendar-utils"
import { useCalendarPicker } from "./use-calendar-picker"

interface CalendarProps
  extends Omit<
    UseCalendarProps<[Date?, Date?]>,
    "enableMultiple" | "enableRange" | "nextRef" | "prevRef" | "typeRef"
  > {}

interface UseRangeDatePickerOptions {
  /**
   * If `true`, the list element will be closed when value is selected.
   *
   * @default true
   */
  closeOnSelect?: boolean
  /**
   * The end date placeholder
   */
  endPlaceholder?: string
  /**
   * The start date placeholder
   */
  startPlaceholder?: string
}

export interface UseRangeDatePickerProps
  extends UseCalendarPickerProps<CalendarProps>,
    UseRangeDatePickerOptions {}

export const useRangeDatePicker = ({
  allowInputBeyond = false,
  closeOnSelect = true,
  defaultValue = [],
  endPlaceholder,
  maxSelectValues,
  placeholder,
  startPlaceholder,
  value: valueProp,
  onChange: onChangeProp,
  ...rest
}: UseRangeDatePickerProps) => {
  const isComposition = useRef<boolean>(false)
  const startInputRef = useRef<HTMLInputElement>(null)
  const endInputRef = useRef<HTMLInputElement>(null)
  const draftValue = useRef<[Date?, Date?] | undefined>(undefined)
  const [value, setValue] = useControllableState<[Date?, Date?]>({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const [startValue, endValue] = value
  const minDate =
    endValue && isNumber(maxSelectValues)
      ? dayjs(endValue)
          .subtract(maxSelectValues - 1, "day")
          .toDate()
      : undefined
  const maxDate =
    startValue && isNumber(maxSelectValues)
      ? dayjs(startValue)
          .add(maxSelectValues - 1, "day")
          .toDate()
      : undefined

  const {
    id,
    allowInput,
    containerRef,
    dateToString,
    isOpen,
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
    allowInputBeyond,
    autoFocus: false,
    defaultValue,
    enableRange: true,
    maxSelectValues,
    value,
    onChange: ([startValue, endValue]: [Date?, Date?]) => {
      setStartInputValue(dateToString(startValue) ?? "")
      setEndInputValue(dateToString(endValue) ?? "")

      draftValue.current = [startValue, endValue]
      setValue([startValue, endValue])

      if (closeOnSelect && startValue && endValue) onClose()
    },
    onClear: () => {
      setStartInputValue("")
      setEndInputValue("")
      setValue([])

      draftValue.current = undefined

      if (allowInput && isOpen) startInputRef.current?.focus()
    },
    onClick: (ev) => {
      if (isOpen) {
        if (!startValue) {
          startInputRef.current?.focus()
        } else {
          endInputRef.current?.focus()
        }
      }

      rest.onClick?.(ev)
    },
    onClose: () => {
      const [startValue, endValue] = draftValue.current ?? value

      setStartInputValue(dateToString(startValue) ?? "")
      setEndInputValue(dateToString(endValue) ?? "")

      draftValue.current = undefined

      rest.onClose?.()
    },
    onDelete: (ev) => {
      if (!endInputRef.current || endInputRef.current.value.length > 1) return

      if (!containerRef.current) return

      const activeEl = getActiveElement(containerRef.current)

      if (!isContains(activeEl, endInputRef.current)) return

      ev.preventDefault()
      ev.stopPropagation()

      setEndInputValue("")
      setValue([startValue, undefined])

      const startInputValue = startInputRef.current?.value ?? ""
      const index = startInputValue.length

      startInputRef.current?.focus()
      startInputRef.current?.setSelectionRange(index, index)
    },
    onEnter: () => {
      if (isComposition.current) return

      if (!containerRef.current) return

      const activeEl = getActiveElement(containerRef.current)

      const isStart = isContains(activeEl, startInputRef.current)

      if (isStart) {
        const value = dateToString(startValue)

        if (value) {
          setStartInputValue(value)

          const endInputValue = endInputRef.current?.value ?? ""
          const index = endInputValue.length

          endInputRef.current?.focus()
          endInputRef.current?.setSelectionRange(index, index)
        }
      } else {
        const value = dateToString(endValue)

        if (value) setEndInputValue(value)
      }
    },
  })

  const [startInputValue, setStartInputValue] = useState<string>(
    dateToString(startValue) ?? "",
  )
  const [endInputValue, setEndInputValue] = useState<string>(
    dateToString(endValue) ?? "",
  )

  const onStartChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      let inputValue = ev.target.value

      if (!isComposition.current) inputValue = inputValue.replace(pattern, "")

      let startValue = stringToDate(inputValue)

      if (!!startValue && dayjs(startValue).isValid()) {
        if (!allowInputBeyond) {
          if (minDate && isBeforeDate(startValue, minDate)) startValue = minDate
        }

        if (endValue && isAfterDate(startValue, endValue)) startValue = endValue
      } else {
        startValue = undefined
      }

      draftValue.current = [startValue, endValue]
      setValue([startValue, endValue])
      setStartInputValue(inputValue)
    },
    [pattern, stringToDate, allowInputBeyond, minDate, setValue, endValue],
  )

  const onEndChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      let inputValue = ev.target.value

      if (!isComposition.current) inputValue = inputValue.replace(pattern, "")

      let endValue = stringToDate(inputValue)

      if (!!endValue && dayjs(endValue).isValid()) {
        if (!allowInputBeyond) {
          if (maxDate && isAfterDate(endValue, maxDate)) endValue = maxDate
        }

        if (startValue && isBeforeDate(endValue, startValue))
          endValue = startValue
      } else {
        endValue = undefined
      }

      draftValue.current = [startValue, endValue]
      setValue([startValue, endValue])
      setEndInputValue(inputValue)
    },
    [startValue, allowInputBeyond, maxDate, pattern, stringToDate, setValue],
  )

  useUpdateEffect(() => {
    setValue(valueProp ?? [])
  }, [valueProp])

  useUpdateEffect(() => {
    if (startInputRef.current && isActiveElement(startInputRef.current)) return

    setStartInputValue(dateToString(startValue) ?? "")
  }, [value])

  useUpdateEffect(() => {
    if (endInputRef.current && isActiveElement(endInputRef.current)) return

    setEndInputValue(dateToString(endValue) ?? "")
  }, [value])

  const getStartInputProps: PropGetter<"input"> = useCallback(
    (props = {}, ref) => {
      const style: CSSProperties = {
        ...props.style,
        ...(inputProps as { style?: CSSProperties }).style,
        ...(!allowInput ? { pointerEvents: "none" } : {}),
      }

      return {
        placeholder: startPlaceholder ?? placeholder,
        ...formControlProps,
        ...inputProps,
        ...props,
        id,
        ref: mergeRefs(ref, startInputRef),
        style,
        cursor: formControlProps.readOnly ? "default" : "text",
        pointerEvents: formControlProps.disabled ? "none" : "auto",
        tabIndex: !allowInput ? -1 : 0,
        value: startInputValue,
        zIndex: !startInputValue ? 1 : undefined,
        onChange: handlerAll(props.onChange, onStartChange),
        onClick: handlerAll(props.onClick, (ev) => {
          ev.preventDefault()
          ev.stopPropagation()
        }),
        onCompositionEnd: handlerAll(props.onCompositionEnd, () => {
          isComposition.current = false

          setStartInputValue((prev) => prev.replace(pattern, ""))
        }),
        onCompositionStart: handlerAll(
          props.onCompositionStart,
          () => (isComposition.current = true),
        ),
      }
    },
    [
      inputProps,
      allowInput,
      startPlaceholder,
      placeholder,
      formControlProps,
      id,
      startInputValue,
      onStartChange,
      pattern,
    ],
  )

  const getEndInputProps: PropGetter<"input"> = useCallback(
    (props = {}, ref) => {
      const style: CSSProperties = {
        ...props.style,
        ...(inputProps as { style?: CSSProperties }).style,
        ...(!allowInput ? { pointerEvents: "none" } : {}),
      }

      return {
        placeholder: endPlaceholder ?? placeholder,
        ...formControlProps,
        ...inputProps,
        ...props,
        id,
        ref: mergeRefs(ref, endInputRef),
        style,
        cursor: formControlProps.readOnly ? "default" : "text",
        pointerEvents: formControlProps.disabled ? "none" : "auto",
        tabIndex: !allowInput || !startInputValue ? -1 : 0,
        value: endInputValue,
        onChange: handlerAll(props.onChange, onEndChange),
        onClick: handlerAll(props.onClick, (ev) => {
          ev.preventDefault()
          ev.stopPropagation()
        }),
        onCompositionEnd: handlerAll(props.onCompositionEnd, () => {
          isComposition.current = false

          setEndInputValue((prev) => prev.replace(pattern, ""))
        }),
        onCompositionStart: handlerAll(
          props.onCompositionStart,
          () => (isComposition.current = true),
        ),
      }
    },
    [
      startInputValue,
      inputProps,
      allowInput,
      endPlaceholder,
      placeholder,
      formControlProps,
      id,
      endInputValue,
      onEndChange,
      pattern,
    ],
  )

  return {
    id,
    dateToString,
    inputValue: [startInputValue, endInputValue],
    value,
    getCalendarProps,
    getContainerProps,
    getEndInputProps,
    getFieldProps,
    getIconProps,
    getPopoverProps,
    getStartInputProps,
    onClose,
  }
}

export type UseRangeDatePickerReturn = ReturnType<typeof useRangeDatePicker>
