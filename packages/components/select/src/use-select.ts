import { CSSUIObject, HTMLUIProps, layoutStylesProperties } from '@yamada-ui/core'
import {
  FormControlOptions,
  formControlProperties,
  useFormControlProps,
} from '@yamada-ui/form-control'
import { PopoverProps } from '@yamada-ui/popover'
import { useClickable } from '@yamada-ui/use-clickable'
import { useControllableState } from '@yamada-ui/use-controllable-state'
import { createDescendant } from '@yamada-ui/use-descendant'
import {
  createContext,
  dataAttr,
  Dict,
  funcAll,
  handlerAll,
  omitObject,
  pickObject,
  PropGetter,
  splitObject,
  useUnmountEffect,
  useUpdateEffect,
  mergeRefs,
  isActiveElement,
  isHTMLElement,
  ariaAttr,
  isArray,
  isUndefined,
} from '@yamada-ui/utils'
import {
  Dispatch,
  ForwardedRef,
  KeyboardEvent,
  KeyboardEventHandler,
  RefObject,
  SetStateAction,
  useCallback,
  useRef,
  useState,
  FocusEvent,
  MouseEvent,
  useEffect,
  CSSProperties,
} from 'react'
import { OptionProps } from './'

const isTargetOption = (target: EventTarget | null) =>
  isHTMLElement(target) && !!target?.getAttribute('role')?.startsWith('select-item')

export const {
  DescendantsContextProvider: SelectDescendantsContextProvider,
  useDescendantsContext: useSelectDescendantsContext,
  useDescendants: useSelectDescendants,
  useDescendant: useSelectDescendant,
} = createDescendant<HTMLElement>()

export type Value = string | number

export type MaybeValue = Value | Value[]

export type DisplayValue<T> = (T extends Array<Value> ? string[] : string) | undefined

type SelectContext = Omit<UseSelectProps, 'value' | 'defaultValue' | 'onChange' | 'isEmpty'> & {
  value: Value | Value[]
  displayValue: DisplayValue<Value> | DisplayValue<Value[]>
  onChange: (newValue: Value) => void
  onChangeDisplayValue: (newValue: Value, runOmit?: boolean) => void
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onFocusFirst: () => void
  onFocusLast: () => void
  onFocusNext: () => void
  onFocusPrev: () => void
  focusedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  listRef: RefObject<HTMLDivElement>
  styles: Record<string, CSSUIObject>
}

export const [SelectProvider, useSelectContext] = createContext<SelectContext>({
  strict: false,
  name: 'SelectContext',
})

export type UseSelectProps<T extends MaybeValue = Value> = Omit<
  HTMLUIProps<'div'>,
  'defaultValue' | 'onChange'
> &
  Omit<PopoverProps, 'initialFocusRef' | 'closeOnButton' | 'isOpen'> &
  FormControlOptions & {
    value?: T
    defaultValue?: T
    onChange?: (value: T) => void
    closeOnSelect?: boolean
    placeholderInOptions?: boolean
    isEmpty: boolean
    omitSelectedValues?: boolean
    maxSelectedValues?: number
    option?: Omit<OptionProps, 'value' | 'children'>
  }

export const useSelect = <T extends MaybeValue = Value>({
  placeholder,
  closeOnSelect = true,
  placeholderInOptions = true,
  omitSelectedValues = false,
  maxSelectedValues,
  isEmpty,
  placement = 'bottom-start',
  duration = 0.2,
  option,
  ...rest
}: UseSelectProps<T>) => {
  rest = useFormControlProps(rest)

  const formControlProps = pickObject(rest, formControlProperties)
  const computedProps = splitObject(rest, layoutStylesProperties)

  const descendants = useSelectDescendants()

  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false)

  const initialFocusRef = useRef<any>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const timeoutIds = useRef<Set<any>>(new Set([]))

  const [value, setValue] = useControllableState({
    value: rest.value,
    defaultValue: rest.defaultValue,
    onChange: rest.onChange,
  })
  const [displayValue, setDisplayValue] = useState<DisplayValue<T>>(undefined)

  const isMulti = isArray(value)
  const isEmptyValue = (!isMulti ? !value : !value.length) && !(placeholder && placeholderInOptions)

  const selectedValues = descendants
    .enabledValues()
    .filter(({ node }) => isMulti && value.includes(node.dataset.value ?? ''))
  const selectedIndexes = selectedValues.map(({ index }) => index)
  const enabledValues = descendants
    .enabledValues()
    .filter(({ index }) => !selectedIndexes.includes(index))

  const onFocusList = useCallback(() => {
    requestAnimationFrame(() => listRef.current?.focus({ preventScroll: false }))
  }, [])

  const onFocusFirst = useCallback(() => {
    const id = setTimeout(() => {
      const first = descendants.enabledfirstValue()

      if (!first) return

      if (!isMulti || !omitSelectedValues) {
        setFocusedIndex(first.index)
      } else {
        if (selectedIndexes.includes(first.index)) {
          const enabledFirst = enabledValues[0]

          setFocusedIndex(enabledFirst.index)
        } else {
          setFocusedIndex(first.index)
        }
      }
    })

    timeoutIds.current.add(id)
  }, [descendants, enabledValues, isMulti, omitSelectedValues, selectedIndexes])

  const onFocusLast = useCallback(() => {
    const id = setTimeout(() => {
      const last = descendants.enabledlastValue()

      if (!last) return

      if (!isMulti || !omitSelectedValues) {
        setFocusedIndex(last.index)
      } else {
        if (selectedIndexes.includes(last.index)) {
          const enabledlast = enabledValues.reverse()[0]

          setFocusedIndex(enabledlast.index)
        } else {
          setFocusedIndex(last.index)
        }
      }
    })

    timeoutIds.current.add(id)
  }, [descendants, enabledValues, isMulti, omitSelectedValues, selectedIndexes])

  const onFocusSelected = useCallback(() => {
    const id = setTimeout(() => {
      const values = descendants.enabledValues()

      const selected = values.find(({ node }) =>
        !isMulti ? node.dataset.value === value : value.includes(node.dataset.value ?? ''),
      )

      if (selected) {
        setFocusedIndex(selected.index)
        initialFocusRef.current = selected.node
      }
    })

    timeoutIds.current.add(id)
  }, [descendants, isMulti, value])

  const onFocusNext = useCallback(() => {
    const id = setTimeout(() => {
      const next = descendants.enabledNextValue(focusedIndex)

      if (!next) return

      if (!isMulti || !omitSelectedValues) {
        setFocusedIndex(next.index)
      } else {
        if (selectedIndexes.includes(next.index)) {
          const enabledNext =
            enabledValues.find(({ index }) => next.index < index) ?? enabledValues[0]

          setFocusedIndex(enabledNext.index)
        } else {
          setFocusedIndex(next.index)
        }
      }
    })

    timeoutIds.current.add(id)
  }, [
    descendants,
    enabledValues,
    focusedIndex,
    isMulti,
    omitSelectedValues,
    selectedIndexes,
    setFocusedIndex,
  ])

  const onFocusPrev = useCallback(() => {
    const id = setTimeout(() => {
      const prev = descendants.enabledPrevValue(focusedIndex)

      if (!prev) return

      if (!isMulti || !omitSelectedValues) {
        setFocusedIndex(prev.index)
      } else {
        if (selectedIndexes.includes(prev.index)) {
          const enabledPrev =
            enabledValues.reverse().find(({ index }) => index < prev.index) ?? enabledValues[0]

          setFocusedIndex(enabledPrev.index)
        } else {
          setFocusedIndex(prev.index)
        }
      }
    })

    timeoutIds.current.add(id)
  }, [
    descendants,
    enabledValues,
    focusedIndex,
    isMulti,
    omitSelectedValues,
    selectedIndexes,
    setFocusedIndex,
  ])

  const onChangeDisplayValue = useCallback(
    (newValue: Value, runOmit: boolean = true) => {
      const enabledValues = descendants.enabledValues()
      const selectedValues = enabledValues
        .filter(({ node }) => node.dataset.value === newValue)
        .map(({ node, index }) =>
          !(!!placeholder && placeholderInOptions) || index !== 0
            ? node.textContent ?? ''
            : undefined,
        )

      setDisplayValue((prev) => {
        if (!isMulti) {
          return <DisplayValue<T>>selectedValues[0]
        } else {
          selectedValues.forEach((selectedValue) => {
            const isSelected = isArray(prev) && prev.includes(selectedValue ?? '')

            if (!isSelected) {
              prev = <DisplayValue<T>>[...(isArray(prev) ? prev : []), selectedValue]
            } else if (runOmit) {
              prev = <DisplayValue<T>>(
                (isArray(prev) ? prev.filter((value) => value !== selectedValue) : undefined)
              )
            }
          })

          return prev
        }
      })
    },
    [descendants, isMulti, placeholder, placeholderInOptions],
  )

  const onChange = useCallback(
    (newValue: Value) => {
      setValue((prev) => {
        if (!isArray(prev)) {
          return <T>newValue
        } else {
          const isSelected = prev.includes(newValue)

          if (!isSelected) {
            return <T>[...prev, newValue]
          } else {
            return <T>prev.filter((value) => value !== newValue)
          }
        }
      })

      onChangeDisplayValue(newValue)
    },
    [onChangeDisplayValue, setValue],
  )

  const [isOpen, setIsOpen] = useState<boolean>(rest.defaultIsOpen ?? false)

  const onOpen = useCallback(() => {
    if (formControlProps.disabled || formControlProps.readOnly) return

    if (isEmpty || isAllSelected) return

    setIsOpen(true)

    rest.onOpen?.()

    onFocusList()

    if (!isEmptyValue && !omitSelectedValues) onFocusSelected()
  }, [
    formControlProps,
    isEmpty,
    isAllSelected,
    rest,
    onFocusList,
    isEmptyValue,
    omitSelectedValues,
    onFocusSelected,
  ])

  const onClose = useCallback(() => {
    setIsOpen(false)

    rest.onClose?.()
  }, [rest])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      const actions: Record<string, Function> = {
        Enter: funcAll(onOpen, isEmptyValue || omitSelectedValues ? onFocusFirst : undefined),
        ArrowDown: funcAll(onOpen, isEmptyValue || omitSelectedValues ? onFocusFirst : undefined),
        ArrowUp: funcAll(onOpen, isEmptyValue || omitSelectedValues ? onFocusLast : undefined),
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()
      action()
    },
    [isEmptyValue, omitSelectedValues, onFocusFirst, onFocusLast, onOpen],
  )

  useEffect(() => {
    if (!isMulti) return

    if (!omitSelectedValues && isUndefined(maxSelectedValues)) return

    const isAll = value.length > 0 && value.length === descendants.count()
    const isMax = value.length === maxSelectedValues

    if (isAll || isMax) {
      onClose()
      setIsAllSelected(true)
    } else {
      setIsAllSelected(false)
    }
  }, [omitSelectedValues, value, descendants, isMulti, onClose, maxSelectedValues])

  useUpdateEffect(() => {
    if (!isOpen) setFocusedIndex(-1)
  }, [isOpen])

  useUnmountEffect(() => {
    timeoutIds.current.forEach((id) => clearTimeout(id))
    timeoutIds.current.clear()
  })

  const getPopoverProps = useCallback(
    (props?: PopoverProps): PopoverProps => ({
      ...rest,
      ...props,
      isOpen,
      onOpen,
      onClose,
      placement,
      duration,
      initialFocusRef,
      closeOnButton: false,
    }),
    [duration, onClose, onOpen, placement, rest, isOpen],
  )

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref,
      ...computedProps[0],
      ...props,
      ...formControlProps,
    }),
    [computedProps, formControlProps],
  )

  const getFieldProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref,
      tabIndex: 0,
      ...omitObject(computedProps[1] as Dict, ['value', 'defaultValue', 'onChange']),
      ...props,
      'data-active': dataAttr(isOpen),
      'data-placeholder': dataAttr(!isMulti ? displayValue === undefined : !displayValue?.length),
      'aria-expanded': dataAttr(isOpen),
      onKeyDown: handlerAll(props.onKeyDown, rest.onKeyDown, onKeyDown),
    }),
    [computedProps, isOpen, isMulti, displayValue, rest, onKeyDown],
  )

  return {
    selectedValues,
    value,
    setValue,
    displayValue,
    setDisplayValue,
    onChangeDisplayValue,
    placeholder,
    placeholderInOptions,
    omitSelectedValues,
    onChange,
    isOpen,
    onOpen,
    onClose,
    onFocusFirst,
    onFocusLast,
    onFocusSelected,
    onFocusNext,
    onFocusPrev,
    focusedIndex,
    setFocusedIndex,
    closeOnSelect,
    option,
    listRef,
    descendants,
    formControlProps,
    getPopoverProps,
    getContainerProps,
    getFieldProps,
  }
}

export type UseSelectReturn = ReturnType<typeof useSelect>

export const useSelectList = () => {
  const { listRef, focusedIndex, onFocusNext, onFocusPrev, onFocusFirst, onFocusLast, onClose } =
    useSelectContext()

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      const actions: Record<string, KeyboardEventHandler> = {
        Tab: (ev) => ev.preventDefault(),
        Escape: onClose,
        ArrowDown: focusedIndex === -1 ? onFocusFirst : onFocusNext,
        ArrowUp: focusedIndex === -1 ? onFocusLast : onFocusPrev,
        Home: onFocusFirst,
        End: onFocusLast,
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      action(ev)
    },
    [focusedIndex, onClose, onFocusFirst, onFocusLast, onFocusNext, onFocusPrev],
  )

  const getListProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      as: 'ul',
      ref: mergeRefs(listRef, ref),
      role: 'select',
      tabIndex: -1,
      ...props,
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [listRef, onKeyDown],
  )

  return {
    getListProps,
  }
}

export type UseSelectListReturn = ReturnType<typeof useSelectList>

export type UseSelectOptionGroupProps = HTMLUIProps<'ul'> & {
  label: string
}

export const useSelectOptionGroup = ({ label, ...rest }: UseSelectOptionGroupProps) => {
  const { value, omitSelectedValues } = useSelectContext()

  const isMulti = isArray(value)

  const descendants = useSelectDescendantsContext()

  const values = descendants.values()
  const enabledValues = descendants.enabledValues()
  const selectedValues =
    isMulti && omitSelectedValues
      ? enabledValues.filter(({ node }) => value.includes(node.dataset.value ?? ''))
      : []
  const selectedIndexes = selectedValues.map(({ index }) => index)
  const childValues = values.filter(
    ({ node, index }) =>
      node.parentElement?.dataset.label === label && !selectedIndexes.includes(index),
  )

  const isEmpty = !childValues.length

  const computedRest = splitObject(rest, layoutStylesProperties)

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        border: '0px',
        clip: 'rect(0px, 0px, 0px, 0px)',
        height: '1px',
        width: '1px',
        margin: '-1px',
        padding: '0px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'absolute',
      }

      return {
        ref,
        ...props,
        ...computedRest[0],
        style: isEmpty ? style : undefined,
      }
    },
    [computedRest, isEmpty],
  )

  const getGroupProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref,
      ...props,
      ...computedRest[1],
      'data-label': label,
    }),
    [computedRest, label],
  )

  return {
    label,
    getContainerProps,
    getGroupProps,
  }
}

export type UseSelectOptionGroupReturn = ReturnType<typeof useSelectOptionGroup>

export type UseSelectOptionProps = Omit<HTMLUIProps<'li'>, 'value' | 'children'> & {
  value?: Value
  children?: string
  isDisabled?: boolean
  isFocusable?: boolean
  closeOnSelect?: boolean
}

export const useSelectOption = (
  ref: ForwardedRef<any> | undefined,
  props: UseSelectOptionProps,
) => {
  const {
    value,
    placeholder,
    placeholderInOptions,
    omitSelectedValues,
    onChange,
    onChangeDisplayValue,
    focusedIndex,
    setFocusedIndex,
    onFocusNext,
    isOpen,
    onClose,
    closeOnSelect: generalCloseOnSelect,
    option,
    listRef,
  } = useSelectContext()

  let {
    icon: customIcon,
    isDisabled,
    isFocusable,
    closeOnSelect: customCloseOnSelect,
    children,
    ...computedProps
  } = { ...option, ...props }

  const trulyDisabled = !!isDisabled && !isFocusable

  const itemRef = useRef<HTMLLIElement>(null)

  const { index, register, descendants } = useSelectDescendant({ disabled: trulyDisabled })

  if (!!placeholder && index > 0 && placeholderInOptions && !computedProps.value) {
    console.warn(
      `If placeholders are present, All options must be set value. If want to set an empty value, either don't set the placeholder or set 'placeholderInOptions' to false.`,
    )
  }

  const values = descendants.enabledValues()
  const frontValues = values.slice(0, index)

  const isMulti = isArray(value)
  const isDuplicated = !isMulti
    ? frontValues.some(({ node }) => node.dataset.value === (computedProps.value ?? ''))
    : false

  const isSelected =
    !isDuplicated &&
    (!isMulti ? (computedProps.value ?? '') === value : value.includes(computedProps.value ?? ''))
  const isFocused = index === focusedIndex

  const onClick = useCallback(
    (ev: MouseEvent<HTMLLIElement>) => {
      computedProps.onClick?.(ev)
      if (!isTargetOption(ev.currentTarget)) return

      onChange(computedProps.value ?? '')

      if (customCloseOnSelect ?? generalCloseOnSelect) onClose()

      if (omitSelectedValues) onFocusNext()
    },
    [
      computedProps,
      onChange,
      customCloseOnSelect,
      generalCloseOnSelect,
      onClose,
      omitSelectedValues,
      onFocusNext,
    ],
  )

  const onFocus = useCallback(
    (ev: FocusEvent<HTMLLIElement>) => {
      computedProps.onFocus?.(ev)
      setFocusedIndex(index)
    },
    [computedProps, setFocusedIndex, index],
  )

  const rest = useClickable({
    onClick,
    onFocus,
    ref: mergeRefs(register, itemRef, ref),
    isDisabled,
    isFocusable,
  })

  useEffect(() => {
    if (isSelected) onChangeDisplayValue(computedProps.value ?? '', false)
  }, [computedProps, isSelected, onChangeDisplayValue])

  useUpdateEffect(() => {
    if (!isOpen) return

    if (isFocused && !trulyDisabled && itemRef.current) {
      requestAnimationFrame(() => itemRef.current?.focus())
    } else if (listRef.current && !isActiveElement(listRef.current)) {
      listRef.current.focus()
    }
  }, [isFocused, trulyDisabled, listRef, isOpen])

  const getOptionProps: PropGetter = useCallback(
    (props = {}) => {
      const style: CSSProperties = {
        border: '0px',
        clip: 'rect(0px, 0px, 0px, 0px)',
        height: '1px',
        width: '1px',
        margin: '-1px',
        padding: '0px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'absolute',
      }

      return {
        ...omitObject(computedProps, ['value']),
        ...rest,
        ...props,
        role: 'select-item',
        tabIndex: isFocused ? 0 : -1,
        style: omitSelectedValues && isSelected ? style : undefined,
        'data-value': computedProps.value ?? '',
        'aria-checked': ariaAttr(isSelected),
      }
    },
    [computedProps, isFocused, isSelected, omitSelectedValues, rest],
  )

  return {
    isSelected,
    isFocused,
    customIcon,
    children,
    getOptionProps,
  }
}

export type UseSelectOptionReturn = ReturnType<typeof useSelectOption>
