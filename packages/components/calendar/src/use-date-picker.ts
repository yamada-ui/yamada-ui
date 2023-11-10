import {
  CSSUIObject,
  HTMLUIProps,
  layoutStylesProperties,
  ThemeProps,
  useTheme,
} from "@yamada-ui/core"
import {
  FormControlOptions,
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { PopoverProps } from "@yamada-ui/popover"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { useOutsideClick } from "@yamada-ui/use-outside-click"
import {
  isActiveElement,
  useUpdateEffect,
  dataAttr,
  createContext,
  getEventRelatedTarget,
  handlerAll,
  isContains,
  mergeRefs,
  pickObject,
  PropGetter,
  RequiredPropGetter,
  splitObject,
  omitObject,
  Dict,
} from "@yamada-ui/utils"
import dayjs from "dayjs"
import {
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useRef,
  useState,
} from "react"
import { CalendarBaseProps } from "./calendar"
import {
  UseCalendarProps,
  isAfterMaxDate,
  isBeforeMinDate,
  isSameDate,
} from "./use-calendar"

type DatePickerContext = Record<string, CSSUIObject>

export const [DatePickerProvider, useDatePickerContext] =
  createContext<DatePickerContext>({
    strict: false,
    name: "DatePickerContext",
  })

type CalendarProps = Omit<
  UseCalendarProps<Date | null>,
  "prevRef" | "typeRef" | "nextRef"
>

type CalendarThemeProps = ThemeProps<"Calendar">

type UseDatePickerBaseProps = Omit<
  PopoverProps,
  | "initialFocusRef"
  | "closeOnButton"
  | "isOpen"
  | "trigger"
  | "autoFocus"
  | "restoreFocus"
  | "openDelay"
  | "closeDelay"
> &
  FormControlOptions &
  CalendarProps & {
    /**
     * The pattern used to check the <input> element's.
     *
     * @default '/[^0-9\-\/]/g'
     */
    pattern?: RegExp
    /**
     * Function that converts the input value to Date type.
     */
    parseDate?: (value: string) => Date | null
    /**
     * The format used for conversion.
     * Check the docs to see the format of possible modifiers you can pass.
     *
     * @see Doc https://day.js.org/docs/en/display/format#list-of-localized-formats
     * @default 'YYYY/MM/DD'
     */
    inputFormat?: string
    /**
     * If `true`, display the date picker clear icon.
     *
     * @default true
     */
    isClearable?: boolean
    /**
     * If `true`, the list element will be closed when value is selected.
     *
     * @default true
     */
    closeOnSelect?: boolean
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
     * Props for calendar component.
     */
    calendarProps?: CalendarBaseProps
  }

export type UseDatePickerProps = Omit<
  HTMLUIProps<"input">,
  keyof UseDatePickerBaseProps | "disabled" | "required" | "readOnly" | "size"
> &
  UseDatePickerBaseProps & {
    calendarVariant?: CalendarThemeProps["variant"]
    calendarSize?: CalendarThemeProps["size"]
    calendarColorScheme?: CalendarThemeProps["colorScheme"]
  }

export const useDatePicker = ({
  parseDate,
  defaultIsOpen,
  closeOnBlur = true,
  closeOnEsc = true,
  placement = "bottom-start",
  duration = 0.2,
  defaultValue,
  type,
  defaultType,
  onChangeType,
  month,
  defaultMonth,
  onChangeMonth,
  firstDayOfWeek,
  amountOfMonths,
  paginateBy,
  withWeekdays,
  disableOutsideDays,
  minDate,
  maxDate,
  locale,
  inputFormat = "YYYY/MM/DD",
  yearFormat,
  monthFormat,
  weekdayFormat,
  dateFormat,
  weekendDays,
  today,
  excludeDate,
  calendarVariant,
  calendarSize,
  calendarColorScheme,
  holidays,
  withHeader,
  withControls,
  withLabel,
  calendarProps,
  placeholder,
  closeOnSelect = true,
  allowInput = true,
  allowInputBeyond = false,
  pattern = /[^0-9\-\/]/g,
  ...rest
}: UseDatePickerProps) => {
  const { theme } = useTheme()

  rest = useFormControlProps(rest)

  locale ??= theme.__config.date?.locale ?? "en"

  const { id } = rest

  const formControlProps = pickObject(rest, formControlProperties)
  const [containerProps, inputProps] = splitObject(
    omitObject(rest as Dict, ["id", "value", "onChange"]),
    layoutStylesProperties,
  )

  const stringToDate = useCallback(
    (value: string): Date | null => {
      let date = parseDate
        ? parseDate(value)
        : dayjs(value, inputFormat, locale).toDate()

      if (date == null) return date

      if (!allowInputBeyond) {
        if (maxDate && isAfterMaxDate(date, maxDate)) date = maxDate
        if (minDate && isBeforeMinDate(date, minDate)) date = minDate
      }

      return date
    },
    [allowInputBeyond, inputFormat, locale, maxDate, minDate, parseDate],
  )

  const dateToString = useCallback(
    (value: Date | null): string | undefined => {
      if (value == null) return undefined

      if (!allowInputBeyond) {
        if (maxDate && isAfterMaxDate(value, maxDate)) value = maxDate
        if (minDate && isBeforeMinDate(value, minDate)) value = minDate
      }

      return dayjs(value)
        .locale(locale ?? "en")
        .format(inputFormat)
    },
    [allowInputBeyond, inputFormat, locale, maxDate, minDate],
  )

  const [isOpen, setIsOpen] = useState<boolean>(defaultIsOpen ?? false)
  const [value, setValue] = useControllableState<Date | null>({
    value: rest.value,
    defaultValue,
    onChange: rest.onChange,
    onUpdate: (prev, next) => !isSameDate(prev, next),
  })
  const [inputValue, setInputValue] = useState<string | undefined>(
    dateToString(value),
  )

  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const onOpen = useCallback(() => {
    if (formControlProps.disabled || formControlProps.readOnly) return

    setIsOpen(true)

    if (allowInput && inputRef.current) inputRef.current.focus()

    rest.onOpen?.()
  }, [allowInput, formControlProps, rest])

  const onClose = useCallback(() => {
    setIsOpen(false)

    rest.onClose?.()
  }, [rest])

  const onClear = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      ev.stopPropagation()

      setValue(null)
      setInputValue(undefined)
    },
    [setValue],
  )

  const onClick = useCallback(() => {
    if (isOpen) {
      if (allowInput && inputRef.current) inputRef.current.focus()
    } else {
      onOpen()
    }
  }, [allowInput, isOpen, onOpen])

  const onFocus = useCallback(() => {
    if (!isOpen) onOpen()
  }, [isOpen, onOpen])

  const onBlur = useCallback(
    (ev: FocusEvent<HTMLDivElement>) => {
      const relatedTarget = getEventRelatedTarget(ev)

      if (isContains(containerRef.current, relatedTarget)) return

      if (!closeOnBlur) return

      const inputValue = dateToString(value)

      setInputValue(inputValue)

      if (isOpen) onClose()
    },
    [closeOnBlur, dateToString, isOpen, onClose, value],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      if (ev.key === " ") ev.key = ev.code

      if (formControlProps.disabled || formControlProps.readOnly) return

      const actions: Record<string, Function | undefined> = {
        Space: !isOpen ? onClose : onOpen,
        Enter: !isOpen ? onClose : onOpen,
        Escape: closeOnEsc ? onClose : undefined,
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()

      action(ev)
    },
    [closeOnEsc, formControlProps, isOpen, onClose, onOpen],
  )

  const onCalendarChange = useCallback(
    (value: Date | null) => {
      const inputValue = dateToString(value)

      setValue(value)
      setInputValue(inputValue)

      if (closeOnSelect && value) onClose()
    },
    [closeOnSelect, dateToString, onClose, setValue],
  )

  const onInputChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      let inputValue = ev.target.value

      inputValue = inputValue.replace(pattern, "")

      const value = stringToDate(inputValue)

      setInputValue(inputValue)

      if (dayjs(value).isValid()) {
        setValue(value)
      } else {
        setValue(null)
      }
    },
    [pattern, stringToDate, setInputValue, setValue],
  )

  useUpdateEffect(() => {
    if (inputRef.current && isActiveElement(inputRef.current)) return

    const inputValue = dateToString(value)

    setInputValue(inputValue)
  }, [value])

  useOutsideClick({
    ref: containerRef,
    handler: onClose,
    enabled: closeOnBlur,
  })

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(containerRef, ref),
      ...containerProps,
      ...props,
      ...formControlProps,
      onClick: handlerAll(props.onClick, rest.onClick, onClick),
      onBlur: handlerAll(props.onBlur, rest.onBlur, onBlur),
    }),
    [containerProps, formControlProps, onBlur, onClick, rest],
  )

  const getPopoverProps = useCallback(
    (props?: PopoverProps): PopoverProps => ({
      ...rest,
      ...props,
      isOpen,
      onOpen,
      onClose,
      placement,
      duration,
      trigger: "never",
      closeOnButton: false,
    }),
    [duration, isOpen, onClose, onOpen, placement, rest],
  )

  const getFieldProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        ...props.style,
        ...(!allowInput ? { cursor: "pointer" } : {}),
      }

      return {
        ref: mergeRefs(ref, inputRef),
        tabIndex: !allowInput ? 0 : -1,
        ...props,
        ...formControlProps,
        style,
        "data-active": dataAttr(isOpen),
        "aria-expanded": dataAttr(isOpen),
        onFocus: handlerAll(props.onFocus, rest.onFocus, onFocus),
        onKeyDown: handlerAll(props.onKeyDown, rest.onKeyDown, onKeyDown),
      }
    },
    [allowInput, formControlProps, isOpen, rest, onFocus, onKeyDown],
  )

  const getInputProps: PropGetter = useCallback(
    (props = {}) => {
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
        style,
        id,
        tabIndex: !allowInput ? -1 : 0,
        value: inputValue ?? "",
        cursor: formControlProps.readOnly ? "default" : "text",
        pointerEvents: formControlProps.disabled ? "none" : "auto",
        onChange: handlerAll(props.onChange, onInputChange),
      }
    },
    [
      inputProps,
      allowInput,
      placeholder,
      formControlProps,
      id,
      inputValue,
      onInputChange,
    ],
  )

  const getCalendarProps = useCallback(
    (props?: CalendarProps): CalendarProps => ({
      ...props,
      type,
      defaultType,
      onChangeType,
      month,
      defaultMonth,
      onChangeMonth,
      firstDayOfWeek,
      amountOfMonths,
      paginateBy,
      withWeekdays,
      disableOutsideDays,
      yearFormat,
      monthFormat,
      weekdayFormat,
      dateFormat,
      weekendDays,
      today,
      holidays,
      withHeader,
      withControls,
      withLabel,
      variant: calendarVariant,
      size: calendarSize,
      colorScheme: calendarColorScheme,
      ...calendarProps,
      value,
      defaultValue,
      onChange: onCalendarChange,
      minDate,
      maxDate,
      excludeDate,
      locale,
    }),
    [
      amountOfMonths,
      calendarColorScheme,
      calendarProps,
      calendarSize,
      calendarVariant,
      dateFormat,
      defaultMonth,
      defaultType,
      defaultValue,
      disableOutsideDays,
      excludeDate,
      firstDayOfWeek,
      holidays,
      locale,
      maxDate,
      minDate,
      month,
      monthFormat,
      onCalendarChange,
      onChangeMonth,
      onChangeType,
      paginateBy,
      today,
      type,
      value,
      weekdayFormat,
      weekendDays,
      withControls,
      withHeader,
      withLabel,
      withWeekdays,
      yearFormat,
    ],
  )

  const getIconProps: RequiredPropGetter<{ clear: boolean }> = useCallback(
    ({ clear, ...props } = {}) => ({
      ...props,
      ...formControlProps,
      onClick: handlerAll(props.onClick, clear ? onClear : undefined),
    }),
    [formControlProps, onClear],
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
