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
import { useDisclosure } from '@yamada-ui/use-disclosure'
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
  onFocusFirstItem: () => void
  onFocusLastItem: () => void
  onFocusSelectedItem: () => void
  focusedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  listRef: RefObject<HTMLDivElement>
  styles: Record<string, CSSUIObject>
}

export const [SelectProvider, useSelectContext] = createContext<SelectContext>({
  name: 'SelectContext',
  errorMessage: `useSelectContext returned is 'undefined'. Seems you forgot to wrap the components in "<Select />"`,
})

export type UseSelectProps<T extends MaybeValue = Value> = Omit<
  HTMLUIProps<'div'>,
  'defaultValue' | 'onChange'
> &
  Omit<PopoverProps, 'initialFocusRef' | 'closeOnButton'> &
  FormControlOptions & {
    value?: T
    defaultValue?: T
    onChange?: (value: T) => void
    closeOnSelect?: boolean
    placeholderInOptions?: boolean
    isEmpty: boolean
    container?: Omit<HTMLUIProps<'div'>, 'children'>
    option?: Omit<OptionProps, 'value' | 'children'>
  }

export const useSelect = <T extends MaybeValue = Value>({
  placeholder,
  closeOnSelect = true,
  placeholderInOptions = true,
  isEmpty,
  placement = 'bottom-start',
  duration = 0.2,
  container,
  option,
  ...rest
}: UseSelectProps<T>) => {
  rest = useFormControlProps(rest)

  const formControlProps = pickObject(rest, formControlProperties)
  const computedProps = splitObject(rest, layoutStylesProperties)

  const descendants = useSelectDescendants()

  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
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
  const isEmptyValue = !isArray(value) ? !value : !value.length

  const onFocusFirstItem = useCallback(() => {
    const id = setTimeout(() => {
      const first = descendants.enabledfirstValue()

      if (first) setFocusedIndex(first.index)
    })

    timeoutIds.current.add(id)
  }, [descendants])

  const onFocusLastItem = useCallback(() => {
    const id = setTimeout(() => {
      const last = descendants.enabledlastValue()

      if (last) setFocusedIndex(last.index)
    })

    timeoutIds.current.add(id)
  }, [descendants])

  const onFocusSelectedItem = useCallback(() => {
    const values = descendants.enabledValues()

    const selected = values.find(({ node }) =>
      !isArray(value) ? node.dataset.value === value : value.includes(node.dataset.value ?? ''),
    )

    if (selected) {
      setFocusedIndex(selected.index)
      initialFocusRef.current = selected.node
    }
  }, [descendants, value])

  const onChangeDisplayValue = useCallback(
    (newValue: Value, runOmit: boolean = true) => {
      const values = descendants.enabledValues()
      const selectedValues = values
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
            const isSelected = !!(<string[] | undefined>prev)?.includes(selectedValue ?? '')

            if (!isSelected) {
              prev = <DisplayValue<T>>[...(<string[] | undefined>prev ?? []), selectedValue]
            } else if (runOmit) {
              prev = <DisplayValue<T>>(
                (<string[] | undefined>prev)?.filter((value) => value !== selectedValue)
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

  const onFocusList = useCallback(() => {
    requestAnimationFrame(() => listRef.current?.focus({ preventScroll: false }))
  }, [])

  const onOpenInternal = useCallback(() => {
    rest.onOpen?.()

    onFocusList()

    if (value || (placeholder && placeholderInOptions)) onFocusSelectedItem()
  }, [onFocusList, onFocusSelectedItem, placeholder, placeholderInOptions, rest, value])

  const [isOpen, onOpen, onClose] = useDisclosure({ ...rest, onOpen: onOpenInternal })
  const trulyIsOpen = isOpen && !isEmpty && !formControlProps.disabled && !formControlProps.readOnly

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      const actions: Record<string, Function> = {
        Enter: funcAll(onOpen, isEmptyValue ? onFocusFirstItem : undefined),
        ArrowDown: funcAll(onOpen, isEmptyValue ? onFocusFirstItem : undefined),
        ArrowUp: funcAll(onOpen, isEmptyValue ? onFocusLastItem : undefined),
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()
      action()
    },
    [isEmptyValue, onFocusFirstItem, onFocusLastItem, onOpen],
  )

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
      isOpen: trulyIsOpen,
      onOpen,
      onClose,
      placement,
      duration,
      initialFocusRef,
      closeOnButton: false,
    }),
    [duration, onClose, onOpen, placement, rest, trulyIsOpen],
  )

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref,
      ...props,
      ...computedProps[0],
      ...container,
      ...formControlProps,
    }),
    [computedProps, container, formControlProps],
  )

  const getFieldProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref,
      ...props,
      ...omitObject(computedProps[1] as Dict, ['value', 'defaultValue', 'onChange']),
      tabIndex: 0,
      'data-active': dataAttr(trulyIsOpen),
      'data-placeholder': dataAttr(!isMulti ? displayValue === undefined : !displayValue?.length),
      'aria-expanded': dataAttr(trulyIsOpen),
      onKeyDown: handlerAll(rest.onKeyDown, onKeyDown),
    }),
    [computedProps, trulyIsOpen, isMulti, displayValue, rest.onKeyDown, onKeyDown],
  )

  return {
    value,
    setValue,
    displayValue,
    setDisplayValue,
    onChangeDisplayValue,
    placeholder,
    placeholderInOptions,
    onChange,
    isOpen,
    onOpen,
    onClose,
    onFocusFirstItem,
    onFocusLastItem,
    onFocusSelectedItem,
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
  const { listRef, focusedIndex, setFocusedIndex, onClose } = useSelectContext()

  const descendants = useSelectDescendantsContext()

  const onNext = useCallback(() => {
    const next = descendants.enabledNextValue(focusedIndex)

    if (next) setFocusedIndex(next.index)
  }, [descendants, focusedIndex, setFocusedIndex])

  const onPrev = useCallback(() => {
    const prev = descendants.enabledPrevValue(focusedIndex)

    if (prev) setFocusedIndex(prev.index)
  }, [descendants, focusedIndex, setFocusedIndex])

  const onFirst = useCallback(() => {
    const first = descendants.enabledfirstValue()

    if (first) setFocusedIndex(first.index)
  }, [descendants, setFocusedIndex])

  const onLast = useCallback(() => {
    const last = descendants.enabledlastValue()

    if (last) setFocusedIndex(last.index)
  }, [descendants, setFocusedIndex])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      const actions: Record<string, KeyboardEventHandler> = {
        Tab: (ev) => ev.preventDefault(),
        Escape: onClose,
        ArrowDown: focusedIndex === -1 ? onFirst : onNext,
        ArrowUp: focusedIndex === -1 ? onLast : onPrev,
        Home: onFirst,
        End: onLast,
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      action(ev)
    },
    [focusedIndex, onClose, onFirst, onLast, onNext, onPrev],
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
    onChange,
    onChangeDisplayValue,
    focusedIndex,
    setFocusedIndex,
    isOpen,
    onClose,
    closeOnSelect: generalCloseOnSelect,
    option,
    listRef,
  } = useSelectContext()

  const {
    icon: customIcon,
    isDisabled,
    isFocusable,
    closeOnSelect: customCloseOnSelect,
    children,
    ...computedProps
  } = { ...option, ...props }

  const trulyDisabled = isDisabled && !isFocusable

  const itemRef = useRef<HTMLLIElement>(null)
  const { index, register, descendants } = useSelectDescendant({ disabled: trulyDisabled })

  if (!!placeholder && index > 0 && placeholderInOptions && !computedProps.value) {
    console.warn(
      `If placeholders are present, All options must be set value. If want to set an empty value, either don't set the placeholder or set 'placeholderInOptions' to false.`,
    )
  }

  const values = descendants.values()
  const frontValues = values.slice(0, index)

  const isDuplicated = !isArray(value)
    ? frontValues.some(({ node }) => node.dataset.value === (computedProps.value ?? ''))
    : false

  const isSelected =
    !isDuplicated &&
    (!isArray(value)
      ? (computedProps.value ?? '') === value
      : value.includes(computedProps.value ?? ''))
  const isFocused = index === focusedIndex

  const onClick = useCallback(
    (ev: MouseEvent<HTMLLIElement>) => {
      computedProps.onClick?.(ev)
      if (!isTargetOption(ev.currentTarget)) return

      onChange(computedProps.value ?? '')

      if (customCloseOnSelect ?? generalCloseOnSelect) onClose()
    },
    [computedProps, onChange, customCloseOnSelect, generalCloseOnSelect, onClose],
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
    if (!isSelected) return

    onChangeDisplayValue(computedProps.value ?? '', false)
  }, [isSelected, onChangeDisplayValue, computedProps])

  useUpdateEffect(() => {
    if (!isOpen) return

    if (isFocused && !trulyDisabled && itemRef.current) {
      requestAnimationFrame(() => itemRef.current?.focus())
    } else if (listRef.current && !isActiveElement(listRef.current)) {
      listRef.current.focus()
    }
  }, [isFocused, trulyDisabled, listRef, isOpen])

  const getOptionProps: PropGetter = useCallback(
    (props = {}) => ({
      ...omitObject(computedProps, ['value']),
      ...rest,
      ...props,
      role: 'select-item',
      tabIndex: isFocused ? 0 : -1,
      'data-value': computedProps.value ?? '',
      'aria-checked': ariaAttr(isSelected),
    }),
    [computedProps, isFocused, isSelected, rest],
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
