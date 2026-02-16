"use client"

import type {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from "react"
import type { HTMLProps, HTMLRefAttributes, PropGetter } from "../../core"
import type { UseComboboxProps } from "../../hooks/use-combobox"
import type { Dict } from "../../utils"
import type {
  CalendarFormat,
  MaybeDateValue,
  UseCalendarProps,
} from "../calendar"
import type { FieldProps } from "../field"
import dayjs from "dayjs"
import {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { useCombobox } from "../../hooks/use-combobox"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useI18n } from "../../providers/i18n-provider"
import {
  ariaAttr,
  cast,
  contains,
  dataAttr,
  focusTransfer,
  handlerAll,
  isArray,
  isComposing,
  isDate,
  isNumber,
  isObject,
  mergeRefs,
  runIfFn,
  runKeyAction,
  useUpdateEffect,
  visuallyHiddenAttributes,
} from "../../utils"
import {
  DEFAULT_MAX_DATE,
  DEFAULT_MIN_DATE,
  getAdjustedMonth,
  isAfterDate,
  isBeforeDate,
  updateMaybeDateValue,
  useCalendarProps,
} from "../calendar"
import { useFieldProps } from "../field"
import { useDateTimeFormat } from "../format"

export interface DatePickerFormat extends CalendarFormat {
  input?: Intl.DateTimeFormatOptions | null
}

type InputAlign = "end" | "start"
type MaybeInputValue<Range extends boolean = false> = Range extends true
  ? { end?: string; start?: string }
  : string | undefined

interface DatePickerRenderProps {
  count: number
  date: Date
  focused: boolean
  index: number
  max?: number
  separator: string
  value: string
  onClear: () => void
}

export interface DatePickerRender {
  (props: DatePickerRenderProps): ReactNode
}

const defaultRender: DatePickerRender = ({
  count,
  focused,
  index,
  max,
  separator,
  value,
}) => {
  const last = count - 1 === index

  return (
    <span style={{ marginInlineEnd: "var(--gap)" }}>
      {value}
      {((!isNumber(max) || count < max) && focused) || !last ? separator : null}
    </span>
  )
}

export interface UseDatePickerProps<
  Multiple extends boolean = false,
  Range extends boolean = false,
>
  extends
    Omit<UseCalendarProps<Multiple, Range>, "format" | "ref">,
    Omit<
      UseComboboxProps,
      "defaultValue" | "initialFocusValue" | "onChange" | "ref" | "value"
    >,
    HTMLRefAttributes<"input">,
    FieldProps {
  /**
   * The `id` attribute of the input element.
   */
  id?: string
  /**
   * The `name` attribute of the input element.
   */
  name?: string
  /**
   * If `true`, allows input.
   *
   * @default true
   */
  allowInput?: boolean
  /**
   * If `true`, allows input of dates beyond the `minDate` and `maxDate` restrictions.
   *
   * @default true
   */
  allowInputBeyond?: boolean
  /**
   * If `true`, the date picker will be closed when the input value changes.
   *
   * @default false
   */
  closeOnChange?: ((ev: ChangeEvent<HTMLInputElement>) => boolean) | boolean
  /**
   * The initial value of the input.
   */
  defaultInputValue?: MaybeInputValue<Range>
  /**
   * If `true`, the input will be focused when the clear icon is clicked.
   *
   * @default true
   */
  focusOnClear?: boolean
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see https://day.js.org/docs/en/display/format#list-of-localized-formats
   */
  format?: DatePickerFormat
  /**
   * The value of the input.
   */
  inputValue?: MaybeInputValue<Range>
  /**
   * If `true`, the date picker will be opened when the input value changes.
   *
   * @default true
   */
  openOnChange?: ((ev: ChangeEvent<HTMLInputElement>) => boolean) | boolean
  /**
   * If `true`, the date picker will be opened when the input is focused.
   *
   * @default true
   */
  openOnFocus?: boolean
  /**
   * Function that converts the input value to Date type.
   */
  parseDate?: (value: string) => Date | undefined
  /**
   * The pattern used to check the input element.
   */
  pattern?: RegExp
  /**
   * The placeholder for date picker.
   */
  placeholder?: string
  /**
   * The function to render the selected date.
   */
  render?: (props: DatePickerRenderProps) => ReactNode
  /**
   * The visual separator between each value.
   *
   * @default ','
   */
  separator?: string
  /**
   * The callback invoked when input value state changes.
   */
  onInputChange?: (value: MaybeInputValue<Range>) => void
}

export const useDatePicker = <
  Multiple extends boolean = false,
  Range extends boolean = false,
>({
  maxDate = DEFAULT_MAX_DATE,
  minDate = DEFAULT_MIN_DATE,
  ...props
}: UseDatePickerProps<Multiple, Range> = {}) => {
  if (dayjs(minDate).isAfter(dayjs(maxDate))) maxDate = minDate

  const { locale: defaultLocale, t } = useI18n("datePicker")
  const {
    props: {
      id,
      ref,
      name,
      allowInput = true,
      allowInputBeyond = false,
      closeOnChange = false,
      multiple = false,
      closeOnSelect = !multiple,
      defaultInputValue,
      defaultMonth = new Date(),
      range = false,
      defaultValue = (range
        ? { end: undefined, start: undefined }
        : multiple
          ? []
          : undefined) as MaybeDateValue<Multiple, Range>,
      disabled,
      focusOnClear = true,
      format,
      inputValue: inputValueProp,
      locale = defaultLocale,
      max,
      month: monthProp,
      openOnChange = true,
      openOnClick = true,
      openOnFocus = true,
      parseDate,
      pattern,
      placeholder: placeholderProp,
      readOnly,
      render = defaultRender,
      required,
      separator = range ? "-" : ",",
      value: valueProp,
      onChange: onChangeProp,
      onChangeMonth: onChangeMonthProp,
      onInputChange: onInputChangeProp,
      ...computedProps
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const dateTimeFormat = useDateTimeFormat({ locale })
  const { calendarFormat, inputFormat } = useMemo(() => {
    const { input: inputFormat, ...calendarFormat } = format ?? {}
    const defaultInputFormat: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    }

    return {
      calendarFormat,
      inputFormat:
        inputFormat !== null ? (inputFormat ?? defaultInputFormat) : undefined,
    }
  }, [format])
  const [calendarProps, rest] = useCalendarProps<Multiple, Range>(computedProps)
  const { excludeDate } = calendarProps
  const fieldRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const startInputRef = useRef<HTMLInputElement>(null)
  const endInputRef = useRef<HTMLInputElement>(null)
  const focusByClickRef = useRef<boolean>(false)
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useControllableState({
    defaultValue: defaultValue as MaybeDateValue<Multiple, Range>,
    value: valueProp,
    onChange: onChangeProp,
  })
  const [month, setMonth] = useControllableState({
    defaultValue: () => {
      let value = defaultMonth

      if (dayjs(minDate).isAfter(dayjs(defaultMonth)))
        value = dayjs(minDate).set("date", 1).toDate()

      if (valueProp) {
        value = getAdjustedMonth(valueProp, value)
      } else if (defaultValue) {
        value = getAdjustedMonth(defaultValue, value)
      }

      return value
    },
    value: monthProp,
    onChange: onChangeMonthProp,
  })
  const stringToDate = useCallback(
    (value: string, start: Date = minDate, end: Date = maxDate) => {
      let date = parseDate?.(value)

      if (!date && dayjs(value).isValid()) date = dayjs(value, locale).toDate()

      if (date == null) return undefined
      if (excludeDate?.(date)) return undefined

      if (!allowInputBeyond) {
        if (isBeforeDate(date, start)) date = start
        if (isAfterDate(date, end)) date = end
      }

      return date
    },
    [allowInputBeyond, excludeDate, locale, maxDate, minDate, parseDate],
  )
  const dateToString = useCallback(
    (date?: Date) => {
      if (date == null) return ""

      return dateTimeFormat(date, inputFormat)
    },
    [dateTimeFormat, inputFormat],
  )
  const [inputValue, setInputValue] = useControllableState({
    defaultValue: () => {
      if (defaultInputValue) {
        if (isObject(defaultInputValue)) {
          if (dayjs(defaultInputValue.start).isValid())
            defaultInputValue.start = dateTimeFormat(
              dayjs(defaultInputValue.start).toDate(),
              inputFormat,
            )

          if (dayjs(defaultInputValue.end).isValid())
            defaultInputValue.end = dateTimeFormat(
              dayjs(defaultInputValue.end).toDate(),
              inputFormat,
            )

          return defaultInputValue
        } else {
          if (dayjs(defaultInputValue).isValid()) {
            return dateTimeFormat(
              dayjs(defaultInputValue).toDate(),
              inputFormat,
            ) as MaybeInputValue<Range>
          } else {
            return defaultInputValue as MaybeInputValue<Range>
          }
        }
      } else if (isDate(value)) {
        return dateToString(value) as MaybeInputValue<Range>
      } else if (isObject(value) && !isArray(value)) {
        return {
          end: dateToString(value.end),
          start: dateToString(value.start),
        } as MaybeInputValue<Range>
      } else {
        return "" as MaybeInputValue<Range>
      }
    },
    value: inputValueProp,
    onChange: onInputChangeProp,
  })
  const {
    interactive,
    open,
    getContentProps: getComboboxContentProps,
    getTriggerProps,
    popoverProps,
    onClose,
    onOpen,
  } = useCombobox({
    disabled,
    matchWidth: false,
    openOnClick: false,
    openOnEnter: !allowInput,
    openOnSpace: !allowInput,
    placement: "end-start",
    readOnly,
    transferFocus: false,
    ...ariaProps,
    ...dataProps,
    ...eventProps,
    ...rest,
  })
  const children = useMemo<ReactNode>(() => {
    if (!isArray(value)) return null

    const count = value.length

    return value.map((date, index) => {
      const value = dateToString(date)

      const onClear = (ev?: MouseEvent<HTMLElement>) => {
        ev?.preventDefault()
        ev?.stopPropagation()

        setValue(
          (prev) =>
            updateMaybeDateValue(date, max)(prev) as MaybeDateValue<
              Multiple,
              Range
            >,
        )
      }

      const component = render({
        count,
        date,
        focused,
        index,
        max,
        separator,
        value,
        onClear,
      })

      if (isValidElement<Dict>(component)) {
        return cloneElement(component, { ...component.props, key: index })
      } else {
        return component
      }
    })
  }, [dateToString, focused, max, render, separator, setValue, value])
  const { endPlaceholder, startPlaceholder } = useMemo(() => {
    if (range) {
      const startPlaceholder =
        placeholderProp ?? dateTimeFormat(new Date(), inputFormat)
      const endPlaceholder =
        placeholderProp ??
        dateTimeFormat(dayjs().add(1, "day").toDate(), inputFormat)

      return { endPlaceholder, startPlaceholder }
    } else {
      const placeholder =
        placeholderProp ?? dateTimeFormat(new Date(), inputFormat)

      return { endPlaceholder: placeholder, startPlaceholder: placeholder }
    }
  }, [dateTimeFormat, inputFormat, placeholderProp, range])

  const onChange = useCallback(
    (value: MaybeDateValue<Multiple, Range>) => {
      setValue(value)

      if (isArray(value)) {
        setInputValue("" as MaybeInputValue<Range>)
      } else if (isObject(value) && !isDate(value)) {
        setInputValue({
          end: dateToString(value.end),
          start: dateToString(value.start),
        } as MaybeInputValue<Range>)
      } else {
        setInputValue(dateToString(value) as MaybeInputValue<Range>)
      }

      if (!closeOnSelect) return

      if (isObject(value) && !isArray(value) && !isDate(value)) {
        if (value.end && value.start) onClose()
      } else {
        onClose()
      }
    },
    [setValue, closeOnSelect, setInputValue, dateToString, onClose],
  )

  const onInputChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (!allowInput) return
      if (isArray(value) && value.length === max) return

      if (runIfFn(closeOnChange, ev)) {
        onClose()
      } else if (runIfFn(openOnChange, ev)) {
        onOpen()
      }

      let inputValue = ev.target.value

      if (pattern) inputValue = inputValue.replace(pattern, "")

      if (isArray(value)) {
        const date = stringToDate(inputValue)

        setInputValue(inputValue as MaybeInputValue<Range>)

        if (date) setMonth(dayjs(date).set("date", 1).toDate())
      } else if (isObject(value) && !isDate(value)) {
        const align = contains(endInputRef.current, ev.target) ? "end" : "start"
        const minDate =
          value.start && align === "end"
            ? dayjs(value.start).add(1, "day").toDate()
            : undefined
        const maxDate =
          value.end && align === "start"
            ? dayjs(value.end).subtract(1, "day").toDate()
            : undefined
        const date = stringToDate(inputValue, minDate, maxDate)

        setInputValue((prev) =>
          isObject(prev)
            ? ({
                ...(prev as MaybeInputValue<true>),
                [align]: inputValue,
              } as MaybeInputValue<Range>)
            : prev,
        )
        setValue((prev) =>
          isObject(prev) && !isDate(prev)
            ? ({ ...prev, [align]: date } as MaybeDateValue<Multiple, Range>)
            : prev,
        )
      } else {
        const date = stringToDate(inputValue)

        setInputValue(inputValue as MaybeInputValue<Range>)
        setValue(date as MaybeDateValue<Multiple, Range>)
      }
    },
    [
      allowInput,
      closeOnChange,
      max,
      onClose,
      onOpen,
      openOnChange,
      pattern,
      setInputValue,
      setMonth,
      setValue,
      stringToDate,
      value,
    ],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (disabled || isComposing(ev)) return

      const inputValue = cast<HTMLInputElement>(ev.target).value

      runKeyAction(
        ev,
        {
          Backspace: (ev) => {
            if (!value || isDate(value)) return
            if (!!inputValue.length) return

            if (isArray(value)) {
              ev.preventDefault()

              setValue((prev) =>
                isArray(prev)
                  ? (prev.slice(0, -1) as MaybeDateValue<Multiple, Range>)
                  : prev,
              )
            } else if (contains(endInputRef.current, ev.target)) {
              ev.preventDefault()

              setInputValue({ end: "", start: "" } as MaybeInputValue<Range>)
              setValue({ end: undefined, start: undefined } as MaybeDateValue<
                Multiple,
                Range
              >)

              startInputRef.current?.focus()
            }
          },
          Enter: (ev) => {
            if (!open || !inputValue.length) return

            if (isDate(value) || isArray(value)) {
              const date = stringToDate(inputValue)

              if (!date) return

              ev.preventDefault()

              if (isArray(value)) {
                setInputValue("" as MaybeInputValue<Range>)
              } else {
                setInputValue(dateToString(date) as MaybeInputValue<Range>)
              }

              setValue(
                (prev) =>
                  updateMaybeDateValue(date, max)(prev) as MaybeDateValue<
                    Multiple,
                    Range
                  >,
              )
            } else if (isObject(value)) {
              const align = contains(endInputRef.current, ev.target)
                ? "end"
                : "start"
              const minDate =
                value.start && align === "end"
                  ? dayjs(value.start).add(1, "day").toDate()
                  : undefined
              const maxDate =
                value.end && align === "start"
                  ? dayjs(value.end).subtract(1, "day").toDate()
                  : undefined
              const date = stringToDate(inputValue, minDate, maxDate)

              if (!date) return

              ev.preventDefault()

              setInputValue((prev) =>
                isObject(prev)
                  ? ({
                      ...(prev as MaybeInputValue<true>),
                      [align]: dateToString(date),
                    } as MaybeInputValue<Range>)
                  : prev,
              )
              setValue((prev) =>
                isObject(prev) && !isDate(prev)
                  ? ({ ...prev, [align]: date } as MaybeDateValue<
                      Multiple,
                      Range
                    >)
                  : prev,
              )

              if (align === "start") endInputRef.current?.focus()
            }
          },
        },
        { preventDefault: false },
      )
    },
    [
      dateToString,
      disabled,
      max,
      open,
      setInputValue,
      setValue,
      stringToDate,
      value,
    ],
  )

  const onClick = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      if (!interactive) return

      focusByClickRef.current = true

      if (allowInput) {
        if (isObject(value) && !isArray(value) && !isDate(value)) {
          if (contains(startInputRef.current, ev.target)) return
          if (contains(endInputRef.current, ev.target)) return

          const { end, start } = value

          if ((!start && !end) || !!end) {
            startInputRef.current?.focus()
          } else {
            endInputRef.current?.focus()
          }
        } else {
          startInputRef.current?.focus()
        }
      }

      if (openOnClick) onOpen()
    },
    [allowInput, interactive, onOpen, openOnClick, value],
  )

  const onMouseDown = useCallback(
    (ev: MouseEvent<HTMLDivElement | HTMLInputElement>) => {
      if (!openOnFocus) return

      ev.preventDefault()
      ev.stopPropagation()
    },
    [openOnFocus],
  )

  const onFieldFocus = useCallback(() => {
    if (allowInput) return

    if (openOnFocus) onOpen()

    focusByClickRef.current = false
  }, [allowInput, onOpen, openOnFocus])

  const onInputFocus = useCallback(
    (ev: FocusEvent<HTMLInputElement>) => {
      ev.preventDefault()
      ev.stopPropagation()

      setFocused(true)

      if (openOnFocus && !focusByClickRef.current) onOpen()

      focusByClickRef.current = false
    },
    [onOpen, openOnFocus],
  )

  const onBlur = useCallback(
    (ev: FocusEvent<HTMLInputElement>) => {
      setFocused(false)

      if (
        contains(fieldRef.current, ev.relatedTarget) ||
        contains(contentRef.current, ev.relatedTarget)
      ) {
        ev.preventDefault()
      } else {
        if (isArray(value)) {
          setInputValue("" as MaybeInputValue<Range>)
        } else if (isObject(value) && !isDate(value)) {
          setInputValue((prev) =>
            isObject(prev)
              ? ({
                  end: dateToString(value.end),
                  start: dateToString(value.start),
                } as MaybeInputValue<Range>)
              : prev,
          )
        } else {
          setInputValue(dateToString(value) as MaybeInputValue<Range>)
        }
      }
    },
    [dateToString, setInputValue, value],
  )

  const onClear = useCallback(() => {
    if (!interactive) return

    setValue((prev) => {
      if (isDate(prev)) {
        return undefined as MaybeDateValue<Multiple, Range>
      } else if (isArray(prev)) {
        return [] as unknown as MaybeDateValue<Multiple, Range>
      } else if (isObject(prev)) {
        return { end: undefined, start: undefined } as MaybeDateValue<
          Multiple,
          Range
        >
      } else {
        return prev
      }
    })

    setInputValue(
      (range ? { end: "", start: "" } : "") as MaybeInputValue<Range>,
    )

    if (focusOnClear) {
      if (allowInput) {
        startInputRef.current?.focus()
      } else {
        fieldRef.current?.focus()
      }
    }
  }, [allowInput, focusOnClear, interactive, range, setInputValue, setValue])

  useEffect(() => {
    if (!open) return

    return focusTransfer(
      contentRef.current,
      allowInput ? startInputRef.current : fieldRef.current,
    )
  }, [allowInput, open])

  useUpdateEffect(() => {
    setMonth((prev) => getAdjustedMonth(value, prev))
  }, [value, range])

  useUpdateEffect(() => {
    if (isArray(valueProp)) return

    if (isObject(valueProp) && !isDate(valueProp)) {
      setInputValue({
        end: dateToString(valueProp.end),
        start: dateToString(valueProp.start),
      } as MaybeInputValue<Range>)
    } else {
      setInputValue(dateToString(valueProp) as MaybeInputValue<Range>)
    }
  }, [valueProp])

  const getRootProps: PropGetter = useCallback(
    (props) => ({
      "data-range": dataAttr(range),
      ...dataProps,
      ...props,
    }),
    [dataProps, range],
  )

  const getFieldProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) =>
      getTriggerProps({
        ref: mergeRefs(ref, fieldRef),
        "aria-haspopup": "dialog",
        tabIndex: !allowInput ? 0 : -1,
        ...props,
        onClick: handlerAll(props.onClick, onClick),
        onFocus: handlerAll(props.onFocus, onFieldFocus),
        onMouseDown: handlerAll(props.onMouseDown, onMouseDown),
      }),

    [allowInput, getTriggerProps, onClick, onFieldFocus, onMouseDown],
  )

  const getInputProps: PropGetter<"input", { align?: InputAlign }> =
    useCallback(
      ({ align = "start", ...props } = {}) => {
        const inputProps: HTMLProps<"input"> = {
          style: {
            ...(!allowInput ? { pointerEvents: "none" } : {}),
            ...props.style,
          },
          autoComplete: "off",
          disabled,
          readOnly,
          required,
          tabIndex: allowInput ? 0 : -1,
          ...dataProps,
          ...props,
          onBlur: handlerAll(props.onBlur, onBlur),
          onChange: handlerAll(props.onChange, onInputChange),
          onFocus: handlerAll(props.onFocus, onInputFocus),
          onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
          onMouseDown: handlerAll(props.onMouseDown, onMouseDown),
        }

        if (isObject(inputValue)) {
          if (align === "start") {
            inputProps.ref = mergeRefs(props.ref, ref, startInputRef)
            inputProps.value = inputValue.start
            inputProps.placeholder = startPlaceholder
          } else {
            inputProps.ref = mergeRefs(props.ref, ref, endInputRef)
            inputProps.value = inputValue.end
            inputProps.placeholder = endPlaceholder
          }

          if (!inputValue.start && align === "start") {
            inputProps.id = id
            inputProps.name = name
          }

          if (!!inputValue.start && align === "end") {
            inputProps.id = id
            inputProps.name = name
          }
        } else {
          inputProps.ref = mergeRefs(props.ref, ref, startInputRef)
          inputProps.value = inputValue
          inputProps.id = id
          inputProps.name = name

          if (isArray(value)) {
            inputProps.style = {
              ...(!focused && !!value.length
                ? visuallyHiddenAttributes.style
                : {}),
              ...inputProps.style,
            }
            inputProps.placeholder = !value.length
              ? startPlaceholder
              : undefined
            inputProps["data-max"] = dataAttr(
              isNumber(max) && value.length >= max,
            )
          } else {
            inputProps.placeholder = startPlaceholder
          }
        }

        return inputProps
      },
      [
        allowInput,
        dataProps,
        disabled,
        endPlaceholder,
        focused,
        id,
        inputValue,
        max,
        name,
        onBlur,
        onInputFocus,
        onInputChange,
        onKeyDown,
        onMouseDown,
        readOnly,
        ref,
        required,
        startPlaceholder,
        value,
      ],
    )

  const getContentProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) =>
      getComboboxContentProps({
        ref: mergeRefs(ref, contentRef),
        role: "dialog",
        ...props,
      }),
    [getComboboxContentProps],
  )

  const getCalendarProps: PropGetter<UseCalendarProps<Multiple, Range>> =
    useCallback(
      (props) =>
        ({
          disabled: !interactive,
          format: calendarFormat,
          locale,
          max,
          maxDate,
          minDate,
          month,
          multiple,
          range,
          value,
          onChange,
          onChangeMonth: setMonth,
          ...calendarProps,
          ...props,
        }) as UseCalendarProps<Multiple, Range>,
      [
        interactive,
        calendarFormat,
        locale,
        max,
        maxDate,
        minDate,
        month,
        multiple,
        range,
        value,
        onChange,
        setMonth,
        calendarProps,
      ],
    )

  const getIconProps: PropGetter = useCallback(
    (props) => ({ ...dataProps, ...props }),
    [dataProps],
  )

  const getClearIconProps: PropGetter = useCallback(
    (props = {}) =>
      getIconProps({
        "aria-disabled": ariaAttr(!interactive),
        "aria-label": t("Clear value"),
        role: "button",
        tabIndex: interactive ? 0 : -1,
        ...props,
        onClick: handlerAll(props.onClick, onClear),
        onKeyDown: handlerAll(props.onKeyDown, (ev) =>
          runKeyAction(ev, { Enter: onClear, Space: onClear }),
        ),
      }),
    [getIconProps, interactive, onClear, t],
  )

  return {
    children,
    dateToString,
    inputValue,
    interactive,
    month,
    open,
    range,
    separator,
    setInputValue,
    setMonth,
    setValue,
    stringToDate,
    value,
    getCalendarProps,
    getClearIconProps,
    getContentProps,
    getFieldProps,
    getIconProps,
    getInputProps,
    getRootProps,
    popoverProps,
    onChange,
    onClose,
    onInputChange,
    onOpen,
  }
}

export type UseDatePickerReturn = ReturnType<typeof useDatePicker>
