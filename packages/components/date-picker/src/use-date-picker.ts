import {
  CalendarBaseProps,
  CalendarType,
  UseCalendarProps,
  isAfterMaxDate,
  isBeforeMinDate,
  isAfterMaxMonth,
  isBeforeMinMonth,
} from '@yamada-ui/calendar'
import { CSSUIObject, HTMLUIProps, layoutStylesProperties } from '@yamada-ui/core'
import {
  FormControlOptions,
  formControlProperties,
  useFormControlProps,
} from '@yamada-ui/form-control'
import { PopoverProps } from '@yamada-ui/popover'
import { useControllableState } from '@yamada-ui/use-controllable-state'
import { useOutsideClick } from '@yamada-ui/use-outside-click'
import {
  dataAttr,
  createContext,
  getEventRelatedTarget,
  handlerAll,
  isContains,
  mergeRefs,
  pickObject,
  PropGetter,
  splitObject,
  useUpdateEffect,
  omitObject,
  Dict,
  DOMAttributes,
  useUnmountEffect,
} from '@yamada-ui/utils'
import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'

type DatePickerContext = Omit<
  UseDatePickerReturn,
  'getContainerProps' | 'getPopoverProps' | 'getCalendarProps' | 'onClear'
> & {
  styles: Record<string, CSSUIObject>
}

export const [DatePickerProvider, useDatePickerContext] = createContext<DatePickerContext>({
  strict: false,
  name: 'DatePickerContext',
})

type Selection = { type: CalendarType; start: number; end: number; index: number }

type Selections = Selection[]

type CalendarProps = UseCalendarProps<Date | undefined | null>

export type CalendarOrder =
  | ['year', 'month', 'date']
  | ['year', 'date', 'month']
  | ['month', 'year', 'date']
  | ['month', 'date', 'year'?]
  | ['date', 'year', 'month']
  | ['date', 'month', 'year'?]

type UseDatePickerBaseProps = Omit<
  PopoverProps,
  | 'initialFocusRef'
  | 'closeOnButton'
  | 'isOpen'
  | 'trigger'
  | 'autoFocus'
  | 'restoreFocus'
  | 'openDelay'
  | 'closeDelay'
> &
  FormControlOptions &
  CalendarProps & {
    isClearable?: boolean
    closeOnSelect?: boolean
    separator?: string
    order?: CalendarOrder
    allowFreeInput?: boolean
    calendarProps?: CalendarBaseProps
    yearPlaceholder?: string
    monthPlaceholder?: string
    datePlaceholder?: string
    onChangeInputYear?: (year: string | null | undefined, error?: string) => void
    onChangeInputMonth?: (month: string | null | undefined, error?: string) => void
    onChangeInputDate?: (date: string | null | undefined, error?: string) => void
  }

export type UseDatePickerProps = Omit<HTMLUIProps<'input'>, keyof UseDatePickerBaseProps> &
  UseDatePickerBaseProps

const yearInputFormat = (value: Date | string, defaultFormat: string): string => {
  if (typeof value === 'string') {
    return value.padStart(defaultFormat.length, '0')
  } else {
    return value.getFullYear().toString().padStart(defaultFormat.length, '0')
  }
}
const monthInputFormat = (value: Date | string, defaultFormat: string): string => {
  if (typeof value === 'string') {
    return value.padStart(defaultFormat.length, '0')
  } else {
    return (value.getMonth() + 1).toString().padStart(defaultFormat.length, '0')
  }
}
const dateInputFormat = (value: Date | string, defaultFormat: string): string => {
  if (typeof value === 'string') {
    return value.padStart(defaultFormat.length, '0')
  } else {
    return value.getDate().toString().padStart(defaultFormat.length, '0')
  }
}

const computedDisplayValue = (
  order: CalendarOrder,
  separator: string,
  yearInputFormat: () => string,
  monthInputFormat: () => string,
  dateInputFormat: () => string,
): [string, Selections] => {
  let selections: Selections = []

  const displayValue = [...order]
    .reduce<string[]>((prev, type, index) => {
      if (type) {
        let current: string

        if (type === 'year') {
          current = yearInputFormat()
        } else if (type === 'month') {
          current = monthInputFormat()
        } else {
          current = dateInputFormat()
        }

        if (index !== 0) prev = [...prev, separator]

        const start = prev.join('').length
        const end = start + current.length

        selections = [...selections, { type, start, end, index }]

        prev = [...prev, current]
      }

      return prev
    }, [])
    .join('')

  return [displayValue, selections]
}

const computedValues = (
  values: string[],
  beforeValues: string[],
  defaultValues: string[],
  selections: Selection[],
) =>
  beforeValues.map((beforeValue, index) => {
    const defaultValue = defaultValues[index]
    const currentValue = values[index]

    if (!currentValue) return defaultValue

    const isDefaultValue = beforeValue === defaultValue
    const isNewValue = beforeValue.replace(/^0+/, '').length === defaultValue.length
    const isError = currentValue !== defaultValue && /[^0-9]/.test(currentValue)

    if (isError) return beforeValue

    if (isDefaultValue || isNewValue) {
      return currentValue
    } else {
      const { start, end } = selections[index]

      return (beforeValue + currentValue).slice(-1 * (end - start))
    }
  })

export const useDatePicker = ({
  closeOnBlur = true,
  placement = 'bottom-start',
  duration = 0.2,
  defaultValue,
  type,
  defaultType,
  onChangeType,
  defaultMonth,
  firstDayOfWeek,
  amountOfMonths,
  paginateBy,
  withWeekdays,
  disableOutsideDays,
  minDate,
  maxDate,
  locale,
  yearFormat,
  monthFormat,
  weekdayFormat,
  dateFormat,
  weekendDays,
  today,
  excludeDate,
  holidays,
  typeRef,
  prevRef,
  nextRef,
  withHeader,
  withControls,
  withLabel,
  calendarProps,
  placeholder,
  closeOnSelect = true,
  order = ['year', 'month', 'date'],
  separator = '/',
  allowFreeInput = true,
  yearPlaceholder = 'YYYY',
  monthPlaceholder = 'MM',
  datePlaceholder = 'DD',
  onChangeInputYear,
  onChangeInputMonth,
  onChangeInputDate,
  ...rest
}: UseDatePickerProps) => {
  rest = useFormControlProps(rest)

  const { id } = rest

  const formControlProps = pickObject(rest, formControlProperties)
  const computedProps = splitObject(rest, layoutStylesProperties)
  const inputProps: DOMAttributes = useMemo(
    () =>
      omitObject(computedProps[1] as Dict, ['id', 'value', 'onChange', 'month', 'onChangeMonth']),
    [computedProps],
  )

  const [isOpen, setIsOpen] = useState<boolean>(rest.defaultIsOpen ?? false)
  const [value, setValue] = useControllableState<Date | undefined | null>({
    value: rest.value,
    defaultValue,
    onChange: rest.onChange,
  })
  const [month, onChangeMonth] = useControllableState<Date>({
    value: rest.month,
    defaultValue: defaultMonth,
    onChange: rest.onChangeMonth,
  })
  const [displayValue, setDisplayValue] = useState<string | undefined>(() => {
    if (!value) return undefined

    const [displayValue] = computedDisplayValue(
      order,
      separator,
      () => yearInputFormat(value, yearPlaceholder),
      () => monthInputFormat(value, monthPlaceholder),
      () => dateInputFormat(value, datePlaceholder),
    )

    return displayValue
  })
  const [defaultDisplayValue, selections] = useMemo(
    () =>
      computedDisplayValue(
        order,
        separator,
        () => yearPlaceholder,
        () => monthPlaceholder,
        () => datePlaceholder,
      ),
    [datePlaceholder, monthPlaceholder, order, separator, yearPlaceholder],
  )

  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const selectionRef = useRef<Selection | undefined>(undefined)
  const beforeDisplayValueRef = useRef<string[]>(
    displayValue?.split(separator) ?? defaultDisplayValue.split(separator),
  )
  const timeoutIds = useRef<Set<any>>(new Set([]))

  const minYear = minDate instanceof Date ? minDate.getFullYear() : 1
  const maxYear = maxDate instanceof Date ? maxDate.getFullYear() : 10000

  const findSelection = useCallback(
    ({ position, type: targetType }: { position?: number; type?: CalendarType }) => {
      if (position) {
        return selections.find(({ start, end }) => start <= position && position <= end)
      } else if (targetType) {
        return selections.find(({ type }) => type === targetType)
      }
    },
    [selections],
  )

  const onSelection = useCallback(({ type, start, end, index }: Selection) => {
    selectionRef.current = { type, start, end, index }

    inputRef.current?.setSelectionRange(null, null)

    console.log(inputRef.current?.selectionStart, inputRef.current?.selectionEnd, start, end)

    inputRef.current?.setSelectionRange(start, end)
  }, [])

  const onSelectionTarget = useCallback(
    (position: number) => {
      const selection = findSelection({ position })

      if (selection) onSelection(selection)
    },
    [findSelection, onSelection],
  )

  const onSelectionStart = useCallback(() => onSelection(selections[0]), [selections, onSelection])

  const onSelectionEnd = useCallback(
    () => onSelection(selections[selections.length - 1]),
    [selections, onSelection],
  )

  const onSelectionNext = useCallback(() => {
    if (!inputRef.current) return

    let { index = 0 } = selectionRef.current ?? {}

    if (index === selections.length - 1) return

    const selection = selections[index + 1]

    onSelection(selection)
  }, [selections, onSelection])

  const onSelectionPrev = useCallback(() => {
    if (!inputRef.current) return

    let { index = 0 } = selectionRef.current ?? {}

    if (index === 0) return

    const selection = selections[index - 1]

    onSelection(selection)
  }, [selections, onSelection])

  const onOpen = useCallback(() => {
    if (formControlProps.disabled || formControlProps.readOnly) return

    setIsOpen(true)

    if (allowFreeInput && inputRef.current) inputRef.current.focus()

    rest.onOpen?.()
  }, [allowFreeInput, formControlProps, rest])

  const onClose = useCallback(() => {
    setIsOpen(false)

    inputRef.current?.blur()

    rest.onClose?.()
  }, [rest])

  const onClear = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      ev.stopPropagation()

      setValue(null)

      if (allowFreeInput && inputRef.current) {
        setDisplayValue(defaultDisplayValue)

        inputRef.current.value = defaultDisplayValue
        inputRef.current.focus()

        onSelectionStart()
      } else {
        setDisplayValue(undefined)
      }
    },
    [allowFreeInput, defaultDisplayValue, onSelectionStart, setValue],
  )

  const onClick = useCallback(() => {
    console.log('container', 'click')

    if (isOpen) {
      if (allowFreeInput && inputRef.current) inputRef.current.focus()
    } else {
      onOpen()
    }
  }, [allowFreeInput, isOpen, onOpen])

  const onFocus = useCallback(() => {
    console.log('container', 'focus')

    if (!isOpen) onOpen()
  }, [isOpen, onOpen])

  const onBlur = useCallback(
    (ev: FocusEvent<HTMLInputElement>) => {
      const relatedTarget = getEventRelatedTarget(ev)

      if (isContains(containerRef.current, relatedTarget)) return

      console.log('container', 'blur')

      if (!closeOnBlur) return

      if (isOpen) {
        if (!value) {
          beforeDisplayValueRef.current = defaultDisplayValue.split(separator)

          setDisplayValue(undefined)
        }

        onClose()
      }
    },
    [closeOnBlur, defaultDisplayValue, isOpen, onClose, separator, value],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (formControlProps.disabled || formControlProps.readOnly) return

      const actions: Record<string, Function | undefined> = {
        ArrowDown: () => {},
        ArrowUp: () => {},
        ArrowLeft: onSelectionPrev,
        ArrowRight: onSelectionNext,
        Home: () => {},
        End: () => {},
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()

      action(ev)
    },
    [formControlProps, onSelectionNext, onSelectionPrev],
  )

  const onChange = useCallback(
    (newValue: Date | undefined | null) => {
      setValue(newValue)

      if (closeOnSelect && newValue) onClose()
    },
    [closeOnSelect, onClose, setValue],
  )

  useOutsideClick({
    ref: containerRef,
    handler: onClose,
    enabled: closeOnBlur,
  })

  useUpdateEffect(() => {
    if (value) {
      const [displayValue] = computedDisplayValue(
        order,
        separator,
        () => yearInputFormat(value, yearPlaceholder),
        () => monthInputFormat(value, monthPlaceholder),
        () => dateInputFormat(value, datePlaceholder),
      )

      setDisplayValue(displayValue)

      beforeDisplayValueRef.current = displayValue.split(separator)

      if (isOpen) {
        if (inputRef.current) inputRef.current.value = displayValue

        onSelectionEnd()
      }
    } else {
      beforeDisplayValueRef.current = defaultDisplayValue.split(separator)

      if (isOpen) {
        setDisplayValue(defaultDisplayValue)

        if (inputRef.current) inputRef.current.value = defaultDisplayValue

        onSelectionStart()
      } else {
        setDisplayValue(undefined)
      }
    }
  }, [value])

  useUnmountEffect(() => {
    timeoutIds.current.forEach((id) => clearTimeout(id))
    timeoutIds.current.clear()
  })

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(containerRef, ref),
      ...computedProps[0],
      ...props,
      ...formControlProps,
      onClick: handlerAll(props.onClick, onClick),
      onFocus: handlerAll(props.onFocus, onFocus),
      onBlur: handlerAll(props.onBlur, onBlur),
    }),
    [computedProps, formControlProps, onBlur, onClick, onFocus],
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
      trigger: 'never',
      closeOnButton: false,
    }),
    [duration, isOpen, onClose, onOpen, placement, rest],
  )

  const getFieldProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref,
      tabIndex: -1,
      ...props,
      'data-active': dataAttr(isOpen),
      'aria-expanded': dataAttr(isOpen),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [isOpen, onKeyDown],
  )

  const getCalendarProps = useCallback(
    (props?: CalendarProps): CalendarProps => ({
      ...props,
      ...calendarProps,
      value,
      defaultValue,
      onChange,
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
      yearFormat,
      monthFormat,
      weekdayFormat,
      dateFormat,
      weekendDays,
      today,
      excludeDate,
      holidays,
      typeRef,
      prevRef,
      nextRef,
      withHeader,
      withControls,
      withLabel,
    }),
    [
      amountOfMonths,
      calendarProps,
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
      nextRef,
      onChange,
      onChangeMonth,
      onChangeType,
      paginateBy,
      prevRef,
      today,
      type,
      typeRef,
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

  return {
    inputRef,
    beforeDisplayValueRef,
    selectionRef,
    id,
    placeholder,
    yearPlaceholder,
    monthPlaceholder,
    datePlaceholder,
    allowFreeInput,
    closeOnSelect,
    separator,
    value,
    setValue,
    month,
    defaultMonth,
    onChangeMonth,
    displayValue,
    setDisplayValue,
    defaultDisplayValue,
    selections,
    minYear,
    maxYear,
    minDate,
    maxDate,
    excludeDate,
    formControlProps,
    inputProps,
    isOpen,
    onOpen,
    onClose,
    onClear,
    findSelection,
    onSelection,
    onSelectionTarget,
    onSelectionStart,
    onSelectionEnd,
    onSelectionPrev,
    onSelectionNext,
    onChangeInputYear,
    onChangeInputMonth,
    onChangeInputDate,
    getContainerProps,
    getPopoverProps,
    getFieldProps,
    getCalendarProps,
  }
}

export type UseDatePickerReturn = ReturnType<typeof useDatePicker>

export const useDatePickerInput = () => {
  const {
    inputRef,
    beforeDisplayValueRef,
    selectionRef,
    formControlProps,
    inputProps,
    id,
    placeholder,
    yearPlaceholder,
    monthPlaceholder,
    datePlaceholder,
    value,
    setValue,
    excludeDate,
    allowFreeInput,
    separator,
    minYear,
    maxYear,
    minDate,
    maxDate,
    onChangeMonth,
    displayValue,
    setDisplayValue,
    defaultDisplayValue,
    selections,
    findSelection,
    onSelection,
    onSelectionTarget,
    onSelectionStart,
    onSelectionEnd,
    onSelectionNext,
    onChangeInputYear,
    onChangeInputMonth,
    onChangeInputDate,
  } = useDatePickerContext()

  const defaultValues = defaultDisplayValue.split(separator)
  const beforeValues = beforeDisplayValueRef.current

  const onClick = useCallback(
    (ev: MouseEvent<HTMLInputElement>) => {
      console.log('input', 'click')

      onSelectionTarget((ev.target as HTMLInputElement).selectionStart ?? 0)
    },
    [onSelectionTarget],
  )

  const onFocus = useCallback(() => {
    console.log('input', 'focus')

    if (!allowFreeInput || !inputRef.current) return

    if (!value) {
      if (!inputRef.current.value) {
        setDisplayValue(defaultDisplayValue)

        inputRef.current.value = defaultDisplayValue
      }

      onSelectionStart()
    } else {
      onSelectionEnd()
    }
  }, [
    allowFreeInput,
    inputRef,
    value,
    onSelectionStart,
    setDisplayValue,
    defaultDisplayValue,
    onSelectionEnd,
  ])

  const onShouldSelection = useCallback(
    (index: number) => (isNext: boolean) => {
      const selection = selections[index]

      if (isNext) {
        onSelectionNext()
      } else {
        onSelection(selection)
      }
    },
    [onSelection, onSelectionNext, selections],
  )

  const onComputedSelection = useCallback(
    (value: number, type: CalendarType | undefined, index: number) => {
      const isEnd = selections.length - 1 === index
      const count = value.toString().length

      if (isEnd) {
        onShouldSelection(index)(false)
      }

      if (type === 'year') {
        const isCompleted = count === yearPlaceholder.length

        onShouldSelection(index)(isCompleted)
      } else if (type === 'month') {
        const isCompleted = count === monthPlaceholder.length
        const isPossibility = value === 0 || value === 1

        onShouldSelection(index)(isCompleted || !isPossibility)
      } else if (type === 'date') {
        const isCompleted = count === datePlaceholder.length
        const isPossibility = value === 0 || value === 1 || value === 2 || value === 3

        onShouldSelection(index)(isCompleted || !isPossibility)
      }
    },
    [selections, onShouldSelection, yearPlaceholder, monthPlaceholder, datePlaceholder],
  )

  const runOnChange = useCallback(
    (values: string[], type: CalendarType | undefined, index: number) => {
      const isDefaultValue = values[index] === defaultValues[index]

      if (type === 'year') {
        if (!isDefaultValue) {
          values[index] = yearInputFormat(values[index], yearPlaceholder)

          const year = parseInt(values[index])

          let error: string | undefined
          let month = 0

          if (year < minYear) error = 'min-date'
          if (year > maxYear) error = 'max-date'

          const monthIndex = findSelection({ type: 'month' })?.index

          const isSetMonth =
            typeof monthIndex === 'number' && values[monthIndex] !== defaultValues[monthIndex]

          if (isSetMonth) month = parseInt(values[monthIndex]) - 1

          if (!error) onChangeMonth(new Date(year, month))

          onChangeInputYear?.(values[index], error)
        } else {
          onChangeInputYear?.(undefined)
        }
      } else if (type === 'month') {
        if (!isDefaultValue) {
          values[index] = monthInputFormat(values[index], monthPlaceholder)

          let error: string | undefined
          let year: number | undefined

          const yearIndex = findSelection({ type: 'year' })?.index

          const isNotIncludeYear = typeof yearIndex !== 'number'
          const isSetYear =
            typeof yearIndex === 'number' && values[yearIndex] !== defaultValues[yearIndex]

          if (isNotIncludeYear) year = new Date().getFullYear()
          if (isSetYear) year = parseInt(values[yearIndex])

          if (typeof year === 'number') {
            const month = new Date(year, parseInt(values[index]) - 1)

            if (isBeforeMinMonth(month, minDate)) error = 'min-date'
            if (isAfterMaxMonth(month, maxDate)) error = 'max-date'

            if (!error) onChangeMonth(month)
          }

          onChangeInputMonth?.(values[index], error)
        } else {
          onChangeInputMonth?.(undefined)
        }
      } else {
        if (!isDefaultValue) {
          values[index] = dateInputFormat(values[index], datePlaceholder)

          let error: string | undefined
          let year: number | undefined
          let month: number | undefined

          const yearIndex = findSelection({ type: 'year' })?.index
          const monthIndex = findSelection({ type: 'month' })?.index

          const isNotIncludeYear = typeof yearIndex !== 'number'
          const isSetYear =
            typeof yearIndex === 'number' && values[yearIndex] !== defaultValues[yearIndex]
          const isSetMonth =
            typeof monthIndex === 'number' && values[monthIndex] !== defaultValues[monthIndex]

          if (isNotIncludeYear) year = new Date().getFullYear()
          if (isSetYear) year = parseInt(values[yearIndex])
          if (isSetMonth) month = parseInt(values[monthIndex]) - 1

          if (typeof year === 'number' && typeof month === 'number') {
            const date = new Date(year, month, parseInt(values[index]))

            if (isBeforeMinDate(date, minDate)) error = 'min-date'
            if (isAfterMaxDate(date, maxDate)) error = 'max-date'
            if (!!excludeDate?.(date)) error = 'exclude-date'

            if (!error) setValue(date)
          }

          onChangeInputDate?.(values[index], error)
        } else {
          onChangeInputDate?.(undefined)
        }
      }

      return values
    },
    [
      datePlaceholder,
      defaultValues,
      excludeDate,
      findSelection,
      maxDate,
      maxYear,
      minDate,
      minYear,
      monthPlaceholder,
      onChangeInputDate,
      onChangeInputMonth,
      onChangeInputYear,
      onChangeMonth,

      setValue,
      yearPlaceholder,
    ],
  )

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      console.log('input', 'change')

      const { type, index = 0 } = selectionRef.current ?? {}

      let values = ev.target.value.split(separator)

      values = computedValues(values, beforeValues, defaultValues, selections)

      values = runOnChange(values, type, index)

      beforeDisplayValueRef.current = values

      const displayValue = values.join(separator)

      if (inputRef.current) inputRef.current.value = displayValue

      onComputedSelection(parseInt(values[index]), type, index)

      setDisplayValue(displayValue)
    },
    [
      beforeDisplayValueRef,
      beforeValues,
      defaultValues,
      inputRef,
      onComputedSelection,
      runOnChange,
      selectionRef,
      selections,
      separator,
      setDisplayValue,
    ],
  )

  const getInputProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(ref, inputRef),
      placeholder,
      ...formControlProps,
      ...inputProps,
      ...props,
      id,
      value: displayValue ?? '',
      cursor: formControlProps.readOnly ? 'default' : 'text',
      pointerEvents: formControlProps.disabled ? 'none' : 'auto',
      onChange: handlerAll(props.onChange, onChange),
      onFocus: handlerAll(props.onFocus, onFocus),
      onClick: handlerAll(props.onClick, onClick),
    }),
    [
      inputRef,
      placeholder,
      formControlProps,
      inputProps,
      id,
      displayValue,
      onChange,
      onFocus,
      onClick,
    ],
  )

  return { getInputProps }
}

export type UseDatePickerInputReturn = ReturnType<typeof useDatePickerInput>
