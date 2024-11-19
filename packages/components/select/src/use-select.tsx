import type { CSSUIObject, HTMLUIProps, PropGetter } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { ComboBoxProps, PopoverProps } from "@yamada-ui/popover"
import type { Merge } from "@yamada-ui/utils"
import type {
  Dispatch,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  ReactNode,
  RefObject,
  SetStateAction,
} from "react"
import type { OptionProps } from "./option"
import type { OptionGroupProps } from "./option-group"
import { layoutStyleProperties } from "@yamada-ui/core"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { createDescendant } from "@yamada-ui/use-descendant"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import { useOutsideClick } from "@yamada-ui/use-outside-click"
import {
  createContext,
  dataAttr,
  funcAll,
  getEventRelatedTarget,
  getValidChildren,
  handlerAll,
  isArray,
  isContains,
  isUndefined,
  mergeRefs,
  omitObject,
  pickObject,
  splitObject,
  useSafeLayoutEffect,
  useUnmountEffect,
  useUpdateEffect,
} from "@yamada-ui/utils"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Option } from "./option"
import { OptionGroup } from "./option-group"

export const {
  DescendantsContextProvider: SelectDescendantsContextProvider,
  useDescendant: useSelectDescendant,
  useDescendants: useSelectDescendants,
  useDescendantsContext: useSelectDescendantsContext,
} = createDescendant()

interface SelectItemWithValue extends OptionProps {
  label?: ReactNode
  value?: string
}

interface SelectItemWithItems extends OptionGroupProps {
  items?: SelectItemWithValue[]
}

export type SelectItem = SelectItemWithItems | SelectItemWithValue

export type MaybeValue = string | string[]

interface SelectContext
  extends Omit<
    UseSelectProps,
    "defaultValue" | "isEmpty" | "onChange" | "value"
  > {
  containerRef: RefObject<HTMLDivElement>
  fieldRef: RefObject<HTMLDivElement>
  focusedIndex: number
  isOpen: boolean
  label: MaybeValue | undefined
  setFocusedIndex: Dispatch<SetStateAction<number>>
  styles: { [key: string]: CSSUIObject | undefined }
  value: MaybeValue
  onChange: (newValue: string) => void
  onClose: () => void
  onFocusFirst: () => void
  onFocusLast: () => void
  onFocusNext: () => void
  onFocusPrev: () => void
  onOpen: () => void
}

export const [SelectProvider, useSelectContext] = createContext<SelectContext>({
  name: "SelectContext",
  errorMessage: `useSelectContext returned is 'undefined'. Seems you forgot to wrap the components in "<Select />"`,
})

export interface UseSelectProps<T extends MaybeValue = string>
  extends Merge<Omit<HTMLUIProps, "defaultValue" | "onChange">, ComboBoxProps>,
    FormControlOptions {
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * If `true`, the list element will be closed when value is selected.
   *
   * @default true
   */
  closeOnSelect?: boolean
  /**
   * The initial value of the select.
   */
  defaultValue?: T
  /**
   * If provided, generate options based on items.
   */
  items?: SelectItem[]
  /**
   * The maximum selectable value.
   */
  maxSelectValues?: number
  /**
   * If `true`, the selected item(s) will be excluded from the list.
   *
   * @default false
   */
  omitSelectedValues?: boolean
  /**
   * The placeholder of the select.
   */
  placeholder?: string
  /**
   * If `true`, include placeholders in options.
   *
   * @default true
   */
  placeholderInOptions?: boolean
  /**
   * The value of the select.
   */
  value?: T
  /**
   * Props for select option element.
   */
  optionProps?: Omit<OptionProps, "children" | "value">
  /**
   * The callback invoked when value state changes.
   */
  onChange?: (value: T) => void
}

export const useSelect = <T extends MaybeValue = string>(
  props: UseSelectProps<T>,
) => {
  const {
    animation,
    boundary,
    children,
    closeDelay,
    closeOnBlur = true,
    closeOnEsc = true,
    closeOnSelect = true,
    defaultIsOpen,
    defaultValue,
    duration = 0.2,
    eventListeners,
    flip,
    gutter,
    isLazy,
    isOpen: isOpenProp,
    items = [],
    lazyBehavior,
    matchWidth = true,
    maxSelectValues,
    modifiers,
    offset,
    omitSelectedValues = false,
    openDelay,
    placeholder,
    placeholderInOptions = true,
    placement = "bottom-start",
    preventOverflow,
    strategy,
    value: valueProp,
    optionProps,
    onChange: onChangeProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
    ...rest
  } = useFormControlProps(props)
  const { "aria-readonly": _ariaReadonly, ...formControlProps } = pickObject(
    rest,
    formControlProperties,
  )
  const [containerProps, fieldProps] = splitObject(
    omitObject(rest, ["aria-readonly"]),
    layoutStyleProperties,
  )

  const descendants = useSelectDescendants()

  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const fieldRef = useRef<HTMLDivElement>(null)
  const timeoutIds = useRef<Set<any>>(new Set([]))

  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const [label, setLabel] = useState<T | undefined>(undefined)

  const hasPlaceholder = !!placeholder && placeholderInOptions
  const isFocused = focusedIndex > -1
  const isMulti = isArray(value)
  const isEmptyValue = (!isMulti ? !value : !value.length) && !hasPlaceholder
  const selectedValues = descendants.values(
    ({ node }) => isMulti && value.includes(node.dataset.value ?? ""),
  )
  const selectedIndexes = selectedValues.map(({ index }) => index)
  const enabledValues = descendants.enabledValues(
    ({ index }) => !selectedIndexes.includes(index),
  )
  const activedescendantId = descendants.value(focusedIndex)?.node.id

  const validChildren = getValidChildren(children)

  const computedChildren = useMemo(() => {
    if (!validChildren.length && items.length) {
      return items
        .map((item, index) => {
          if ("value" in item) {
            const { label, value, ...props } = item

            return (
              <Option key={index} value={value} {...props}>
                {label}
              </Option>
            )
          } else if ("items" in item) {
            const { items = [], label, ...props } = item

            return (
              <OptionGroup key={index} label={label} {...props}>
                {items.map(({ label, value, ...props }, index) => (
                  <Option key={index} value={value} {...props}>
                    {label}
                  </Option>
                ))}
              </OptionGroup>
            )
          }
        })
        .filter(Boolean) as ReactElement[]
    } else {
      return validChildren
    }
  }, [validChildren, items])

  const isEmpty =
    !validChildren.length &&
    !computedChildren.length &&
    (!isMulti ? !hasPlaceholder : true)

  const onFocusFirst = useCallback(() => {
    const id = setTimeout(() => {
      const first = descendants.enabledFirstValue()

      if (!first) return

      if (!isMulti || !omitSelectedValues) {
        setFocusedIndex(first.index)
      } else {
        if (selectedIndexes.includes(first.index)) {
          const enabledFirst = enabledValues[0]

          setFocusedIndex(enabledFirst?.index ?? -1)
        } else {
          setFocusedIndex(first.index)
        }
      }
    })

    timeoutIds.current.add(id)
  }, [descendants, enabledValues, isMulti, omitSelectedValues, selectedIndexes])

  const onFocusLast = useCallback(() => {
    const id = setTimeout(() => {
      const last = descendants.enabledLastValue()

      if (!last) return

      if (!isMulti || !omitSelectedValues) {
        setFocusedIndex(last.index)
      } else {
        if (selectedIndexes.includes(last.index)) {
          const enabledLast = enabledValues.reverse()[0]

          setFocusedIndex(enabledLast?.index ?? -1)
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
        !isMulti
          ? node.dataset.value === value
          : value.includes(node.dataset.value ?? ""),
      )

      if (selected) setFocusedIndex(selected.index)
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
            enabledValues.find(({ index }) => next.index < index) ??
            enabledValues[0]

          setFocusedIndex(enabledNext?.index ?? -1)
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
            enabledValues.reverse().find(({ index }) => index < prev.index) ??
            enabledValues[0]

          setFocusedIndex(enabledPrev?.index ?? -1)
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

  const onFocusFirstOrSelected =
    isEmptyValue || omitSelectedValues ? onFocusFirst : onFocusSelected
  const onFocusLastOrSelected =
    isEmptyValue || omitSelectedValues ? onFocusLast : onFocusSelected

  const onChangeLabel = useCallback(
    (newValue: MaybeValue) => {
      const values = descendants.values()

      if (!values.length) return

      const resolvedValues = isArray(newValue) ? newValue : [newValue]

      const selectedLabel = resolvedValues
        .map((value) => {
          const { index, node } =
            values.find(({ node }) => node.dataset.value === value) ?? {}

          if (!node || (hasPlaceholder && index === 0)) return

          const { innerHTML } =
            Array.from(node.children).find(
              (child) => child.getAttribute("data-label") !== null,
            ) ?? {}

          return innerHTML
        })
        .filter((label) => !isUndefined(label))

      setLabel((!isMulti ? selectedLabel[0] : selectedLabel) as T)
    },
    [descendants, isMulti, hasPlaceholder],
  )

  const onChange = useCallback(
    (newValue: string) => {
      setValue((prev) => {
        if (!isArray(prev)) {
          return newValue as T
        } else {
          const isSelected = prev.includes(newValue)

          if (!isSelected) {
            return [...prev, newValue] as T
          } else {
            return prev.filter((value) => value !== newValue) as T
          }
        }
      })
    },
    [setValue],
  )

  const onClear = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      ev.stopPropagation()

      setValue([] as unknown as T)
      setLabel(undefined)
    },
    [setLabel, setValue],
  )

  const {
    isOpen,
    onClose,
    onOpen: onInternalOpen,
  } = useDisclosure({
    defaultIsOpen,
    isOpen: isOpenProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })

  const onOpen = useCallback(() => {
    if (formControlProps.disabled || formControlProps.readOnly) return

    if (isEmpty || isAllSelected) return

    onInternalOpen()
  }, [formControlProps, isEmpty, isAllSelected, onInternalOpen])

  const onSelect = useCallback(() => {
    let enabledValue = descendants.value(focusedIndex)

    if ("disabled" in (enabledValue?.node.dataset ?? {}))
      enabledValue = undefined

    if (!enabledValue) return

    const value = enabledValue.node.dataset.value ?? ""

    onChange(value)

    if (closeOnSelect) onClose()

    if (omitSelectedValues) onFocusNext()
  }, [
    closeOnSelect,
    descendants,
    focusedIndex,
    omitSelectedValues,
    onChange,
    onClose,
    onFocusNext,
  ])

  const onClick = useCallback(() => {
    if (isOpen) return

    onOpen()

    onFocusFirstOrSelected()
  }, [isOpen, onFocusFirstOrSelected, onOpen])

  const onFocus = useCallback(() => {
    if (isOpen) return

    onOpen()

    onFocusFirstOrSelected()
  }, [isOpen, onFocusFirstOrSelected, onOpen])

  const onBlur = useCallback(
    (ev: FocusEvent<HTMLDivElement>) => {
      const relatedTarget = getEventRelatedTarget(ev)

      if (isContains(containerRef.current, relatedTarget)) return

      if (!closeOnBlur) return

      if (isOpen) onClose()
    },
    [closeOnBlur, isOpen, onClose],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      if (ev.key === " ") ev.key = ev.code

      if (formControlProps.disabled || formControlProps.readOnly) return

      const actions: { [key: string]: Function | undefined } = {
        ArrowDown: isFocused
          ? () => onFocusNext()
          : !isOpen
            ? funcAll(onOpen, onFocusFirstOrSelected)
            : undefined,
        ArrowUp:
          ev.altKey && isOpen
            ? onClose
            : isFocused
              ? () => onFocusPrev()
              : !isOpen
                ? funcAll(onOpen, onFocusLastOrSelected)
                : undefined,
        End: isOpen ? onFocusLast : undefined,
        Enter: isFocused
          ? onSelect
          : !isOpen
            ? funcAll(onOpen, onFocusFirstOrSelected)
            : undefined,
        Escape: closeOnEsc ? onClose : undefined,
        Home: isOpen ? onFocusFirst : undefined,
        Space: isFocused
          ? onSelect
          : !isOpen
            ? funcAll(onOpen, onFocusFirstOrSelected)
            : undefined,
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()
      action()
    },
    [
      formControlProps.disabled,
      formControlProps.readOnly,
      isFocused,
      isOpen,
      onOpen,
      onFocusFirstOrSelected,
      onFocusLastOrSelected,
      onSelect,
      onFocusFirst,
      onFocusLast,
      closeOnEsc,
      onClose,
      onFocusNext,
      onFocusPrev,
    ],
  )

  useOutsideClick({
    ref: containerRef,
    enabled: isOpen && closeOnBlur,
    handler: onClose,
  })

  useEffect(() => {
    if (!isMulti) return

    if (!omitSelectedValues && isUndefined(maxSelectValues)) return

    const isAll = value.length > 0 && value.length === descendants.count()
    const isMax = value.length === maxSelectValues

    if (isAll || isMax) {
      onClose()
      setIsAllSelected(true)
    } else {
      setIsAllSelected(false)
    }
  }, [
    omitSelectedValues,
    value,
    descendants,
    isMulti,
    onClose,
    maxSelectValues,
  ])

  useSafeLayoutEffect(() => {
    onChangeLabel(value)
  }, [value])

  useUpdateEffect(() => {
    if (!isOpen) setFocusedIndex(-1)
  }, [isOpen])

  useUnmountEffect(() => {
    timeoutIds.current.forEach((id) => clearTimeout(id))
    timeoutIds.current.clear()
  })

  const getPopoverProps = useCallback(
    (props?: PopoverProps): PopoverProps => ({
      animation,
      boundary,
      closeDelay,
      closeOnBlur,
      duration,
      eventListeners,
      flip,
      gutter,
      isLazy,
      lazyBehavior,
      matchWidth,
      modifiers,
      offset,
      openDelay,
      placement,
      preventOverflow,
      strategy,
      ...props,
      closeOnButton: false,
      isOpen,
      trigger: "never",
      onClose,
      onOpen,
    }),
    [
      closeOnBlur,
      openDelay,
      closeDelay,
      isLazy,
      lazyBehavior,
      animation,
      duration,
      offset,
      gutter,
      preventOverflow,
      flip,
      matchWidth,
      boundary,
      eventListeners,
      strategy,
      placement,
      modifiers,
      isOpen,
      onOpen,
      onClose,
    ],
  )

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(containerRef, ref),
      ...containerProps,
      ...props,
      ...formControlProps,
      onBlur: handlerAll(props.onBlur, rest.onBlur, onBlur),
      onClick: handlerAll(props.onClick, rest.onClick, onClick),
    }),
    [containerProps, formControlProps, onBlur, onClick, rest],
  )

  const getFieldProps: PropGetter = useCallback(
    ({ "aria-label": ariaLabel, ...props } = {}, ref = null) => {
      ariaLabel ??=
        placeholder ??
        `Select ${isMulti ? "one or more options." : "an option."}`

      return {
        ref: mergeRefs(fieldRef, ref),
        "aria-activedescendant": activedescendantId,
        "aria-haspopup": "listbox",
        "aria-label": ariaLabel,
        role: "combobox",
        tabIndex: 0,
        ...fieldProps,
        ...props,
        "data-active": dataAttr(isOpen),
        "data-placeholder": dataAttr(
          !isMulti ? label === undefined : !label?.length,
        ),
        onFocus: handlerAll(props.onFocus, rest.onFocus, onFocus),
        onKeyDown: handlerAll(props.onKeyDown, rest.onKeyDown, onKeyDown),
      }
    },
    [
      activedescendantId,
      fieldProps,
      isOpen,
      isMulti,
      label,
      placeholder,
      rest,
      onFocus,
      onKeyDown,
    ],
  )

  return {
    children: computedChildren,
    closeOnSelect,
    containerRef,
    descendants,
    fieldRef,
    focusedIndex,
    isEmpty,
    isOpen,
    label,
    omitSelectedValues,
    placeholder,
    placeholderInOptions,
    setFocusedIndex,
    value,
    formControlProps,
    getContainerProps,
    getFieldProps,
    getPopoverProps,
    optionProps,
    onChange,
    onClear,
    onClose,
    onFocusFirst,
    onFocusLast,
    onFocusNext,
    onFocusPrev,
    onFocusSelected,
    onOpen,
  }
}

export type UseSelectReturn = ReturnType<typeof useSelect>
