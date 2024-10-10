import type { CSSUIObject, HTMLUIProps, PropGetter } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { ComboBoxProps, PopoverProps } from "@yamada-ui/popover"
import type { Merge } from "@yamada-ui/utils"
import type {
  CSSProperties,
  Dispatch,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  RefObject,
  SetStateAction,
} from "react"
import type { OptionProps } from "./option"
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
  ariaAttr,
  createContext,
  dataAttr,
  funcAll,
  getEventRelatedTarget,
  handlerAll,
  isArray,
  isContains,
  isHTMLElement,
  isNumber,
  isString,
  isUndefined,
  mergeRefs,
  omitObject,
  pickObject,
  splitObject,
  useUnmountEffect,
  useUpdateEffect,
} from "@yamada-ui/utils"
import { useCallback, useEffect, useId, useRef, useState } from "react"

const isTargetOption = (target: EventTarget | null): boolean =>
  isHTMLElement(target) && !!target.getAttribute("role")?.startsWith("option")

export const {
  DescendantsContextProvider: SelectDescendantsContextProvider,
  useDescendant: useSelectDescendant,
  useDescendants: useSelectDescendants,
  useDescendantsContext: useSelectDescendantsContext,
} = createDescendant()

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
  listRef: RefObject<HTMLUListElement>
  setFocusedIndex: Dispatch<SetStateAction<number>>
  styles: { [key: string]: CSSUIObject | undefined }
  value: MaybeValue
  onChange: (newValue: string) => void
  onChangeLabel: (newValue: string, runOmit?: boolean) => void
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
  isEmpty: boolean
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
    isEmpty,
    isLazy,
    isOpen: isOpenProp,
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
  const listRef = useRef<HTMLUListElement>(null)
  const timeoutIds = useRef<Set<any>>(new Set([]))

  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const [label, setLabel] = useState<T | undefined>(undefined)

  const isFocused = focusedIndex > -1
  const isMulti = isArray(value)
  const isEmptyValue =
    (!isMulti ? !value : !value.length) &&
    !(placeholder && placeholderInOptions)

  const selectedValues = descendants.values(
    ({ node }) => isMulti && value.includes(node.dataset.value ?? ""),
  )

  const selectedIndexes = selectedValues.map(({ index }) => index)
  const enabledValues = descendants.enabledValues(
    ({ index }) => !selectedIndexes.includes(index),
  )

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
    (newValue: string, runOmit = true) => {
      const values = descendants.values()

      if (!values.length) return

      const selectedValues = values
        .filter(({ node }) => node.dataset.value === newValue)
        .map(({ index, node }) => {
          if (!(!!placeholder && placeholderInOptions) || index !== 0) {
            const el = Array.from(node.children).find(
              (child) => child.getAttribute("data-label") !== null,
            )

            return el?.innerHTML ?? ""
          } else {
            return undefined
          }
        })

      setLabel((prev) => {
        if (!isMulti) {
          return selectedValues[0] as T
        } else {
          selectedValues.forEach((selectedValue) => {
            const isSelected =
              isArray(prev) && prev.includes(selectedValue ?? "")

            if (!isSelected) {
              prev = [...(isArray(prev) ? prev : []), selectedValue] as T
            } else if (runOmit) {
              prev = (
                isArray(prev)
                  ? prev.filter((value) => value !== selectedValue)
                  : undefined
              ) as T
            }
          })

          return prev
        }
      })
    },
    [descendants, isMulti, placeholder, placeholderInOptions],
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

      onChangeLabel(newValue)
    },
    [onChangeLabel, setValue],
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
        ArrowUp: isFocused
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
        "aria-label": ariaLabel,
        role: "combobox",
        tabIndex: 0,
        ...fieldProps,
        ...props,
        "aria-activedescendant": descendants.value(focusedIndex)?.node.id,
        "aria-controls": listRef.current?.id,
        "aria-expanded": isOpen,
        "data-active": dataAttr(isOpen),
        "data-placeholder": dataAttr(
          !isMulti ? label === undefined : !label?.length,
        ),
        onFocus: handlerAll(props.onFocus, rest.onFocus, onFocus),
        onKeyDown: handlerAll(props.onKeyDown, rest.onKeyDown, onKeyDown),
      }
    },
    [
      descendants,
      fieldProps,
      focusedIndex,
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
    closeOnSelect,
    containerRef,
    descendants,
    fieldRef,
    focusedIndex,
    isOpen,
    label,
    listRef,
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
    onChangeLabel,
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

export const useSelectList = () => {
  const { focusedIndex, listRef, value } = useSelectContext()

  const descendants = useSelectDescendantsContext()

  const beforeFocusedIndex = useRef<number>(-1)
  const selectedValue = descendants.value(focusedIndex)
  const isMulti = isArray(value)

  useEffect(() => {
    if (!listRef.current || !selectedValue) return

    if (beforeFocusedIndex.current === selectedValue.index) return

    const parent = listRef.current
    const child = selectedValue.node

    const parentHeight = parent.clientHeight
    const viewTop = parent.scrollTop
    const viewBottom = viewTop + parentHeight

    const childHeight = child.clientHeight
    const childTop = child.offsetTop
    const childBottom = childTop + childHeight

    const isInView = viewTop <= childTop && childBottom <= viewBottom

    const isScrollBottom = beforeFocusedIndex.current < selectedValue.index

    if (!isInView) {
      if (childBottom <= parentHeight) {
        listRef.current.scrollTo({ top: 0 })
      } else {
        if (!isScrollBottom) {
          listRef.current.scrollTo({ top: childTop + 1 })
        } else {
          listRef.current.scrollTo({ top: childBottom - parentHeight })
        }
      }
    }

    beforeFocusedIndex.current = selectedValue.index
  }, [listRef, selectedValue])

  const id = useId()

  const getListProps: PropGetter<"ul"> = useCallback(
    (props = {}, ref = null) => ({
      id,
      ref: mergeRefs(listRef, ref),
      "aria-multiselectable": ariaAttr(isMulti),
      position: "relative",
      role: "listbox",
      tabIndex: -1,
      ...props,
    }),
    [id, isMulti, listRef],
  )

  return {
    getListProps,
  }
}

export type UseSelectListReturn = ReturnType<typeof useSelectList>

export interface UseSelectOptionGroupProps extends HTMLUIProps<"ul"> {
  /**
   * The label of the option group.
   */
  label: string
}

export const useSelectOptionGroup = ({
  label,
  ...rest
}: UseSelectOptionGroupProps) => {
  const { omitSelectedValues, value } = useSelectContext()

  const isMulti = isArray(value)

  const descendants = useSelectDescendantsContext()

  const values = descendants.values()
  const selectedValues =
    isMulti && omitSelectedValues
      ? descendants.values(({ node }) =>
          value.includes(node.dataset.value ?? ""),
        )
      : []
  const selectedIndexes = selectedValues.map(({ index }) => index)
  const childValues = values.filter(
    ({ index, node }) =>
      node.parentElement?.dataset.label === label &&
      !selectedIndexes.includes(index),
  )

  const isEmpty = !childValues.length

  const [containerProps, groupProps] = splitObject(rest, layoutStyleProperties)

  const getContainerProps: PropGetter<"li"> = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0px",
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px",
      }

      return {
        ref,
        ...props,
        ...containerProps,
        style: isEmpty ? style : undefined,
      }
    },
    [containerProps, isEmpty],
  )

  const getGroupProps: PropGetter<"ul"> = useCallback(
    ({ "aria-label": ariaLabel, ...props } = {}, ref = null) => {
      ariaLabel ??= label

      return {
        ref,
        "aria-label": ariaLabel,
        role: "group",
        ...props,
        ...groupProps,
        "data-label": label,
      }
    },
    [groupProps, label],
  )

  return {
    label,
    getContainerProps,
    getGroupProps,
  }
}

export type UseSelectOptionGroupReturn = ReturnType<typeof useSelectOptionGroup>

export interface UseSelectOptionProps extends Omit<HTMLUIProps<"li">, "value"> {
  /**
   * If `true`, the list element will be closed when selected.
   *
   * @default false
   */
  closeOnSelect?: boolean
  /**
   * If `true`, the select option will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, the select option will be focusable.
   *
   * @default false
   */
  isFocusable?: boolean
  /**
   * The value of the select option.
   */
  value?: string
}

export const useSelectOption = (props: UseSelectOptionProps) => {
  const {
    closeOnSelect: generalCloseOnSelect,
    fieldRef,
    focusedIndex,
    omitSelectedValues,
    placeholder,
    placeholderInOptions,
    setFocusedIndex,
    value,
    optionProps,
    onChange,
    onChangeLabel,
    onClose,
    onFocusNext,
  } = useSelectContext()

  let {
    children,
    closeOnSelect: customCloseOnSelect,
    icon: customIcon,
    isDisabled,
    isFocusable,
    value: optionValue,
    ...computedProps
  } = { ...optionProps, ...props }

  const trulyDisabled = !!isDisabled && !isFocusable

  const itemRef = useRef<HTMLLIElement>(null)

  const { descendants, index, register } = useSelectDescendant({
    disabled: trulyDisabled,
  })

  const values = descendants.values()
  const frontValues = values.slice(0, index)
  const hasPlaceholder = !!placeholder && placeholderInOptions
  const isPlaceholder = hasPlaceholder && index === 0
  const isMulti = isArray(value)

  if (!isPlaceholder && isUndefined(optionValue)) {
    if (isString(children) || isNumber(children)) {
      optionValue = children.toString()
    } else {
      console.warn(
        `${
          !isMulti ? "Select" : "MultiSelect"
        }: Cannot infer the option value of complex children. Pass a \`value\` prop or use a plain string as children to <Option>.`,
      )
    }
  }

  if (hasPlaceholder && index > 0 && !optionValue) {
    console.warn(
      `${
        !isMulti ? "Select" : "MultiSelect"
      }: If placeholders are present, All options must be set value. If want to set an empty value, either don't set the placeholder or set 'placeholderInOptions' to false.`,
    )
  }

  const isDuplicated = !isMulti
    ? frontValues.some(({ node }) => node.dataset.value === (optionValue ?? ""))
    : false
  const isSelected =
    !isDuplicated &&
    (!isMulti
      ? (optionValue ?? "") === value
      : value.includes(optionValue ?? ""))
  const isFocused = index === focusedIndex

  const onClick = useCallback(
    (ev: MouseEvent<HTMLLIElement>) => {
      ev.preventDefault()
      ev.stopPropagation()

      if (isDisabled) {
        if (fieldRef.current) fieldRef.current.focus()

        return
      }

      if (!isTargetOption(ev.currentTarget)) {
        if (fieldRef.current) fieldRef.current.focus()

        return
      }

      setFocusedIndex(index)

      onChange(optionValue ?? "")

      if (fieldRef.current) fieldRef.current.focus()

      if (customCloseOnSelect ?? generalCloseOnSelect) onClose()

      if (omitSelectedValues) onFocusNext()
    },
    [
      isDisabled,
      setFocusedIndex,
      index,
      onChange,
      optionValue,
      fieldRef,
      customCloseOnSelect,
      generalCloseOnSelect,
      onClose,
      omitSelectedValues,
      onFocusNext,
    ],
  )

  useEffect(() => {
    if (isSelected) onChangeLabel(optionValue ?? "", false)
  }, [optionValue, isSelected, onChangeLabel])

  const getOptionProps: PropGetter<"li"> = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0px",
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px",
      }

      return {
        ref: mergeRefs(itemRef, ref, register),
        role: "option",
        ...computedProps,
        ...props,
        style: omitSelectedValues && isSelected ? style : undefined,
        "aria-checked": ariaAttr(isSelected),
        "aria-disabled": ariaAttr(isDisabled),
        "data-disabled": dataAttr(isDisabled),
        "data-focus": dataAttr(isFocused),
        "data-value": optionValue ?? "",
        tabIndex: -1,
        onClick: handlerAll(computedProps.onClick, props.onClick, onClick),
      }
    },
    [
      optionValue,
      computedProps,
      isDisabled,
      isFocused,
      isSelected,
      omitSelectedValues,
      onClick,
      register,
    ],
  )

  return {
    children,
    customIcon,
    isFocused,
    isSelected,
    getOptionProps,
  }
}

export type UseSelectOptionReturn = ReturnType<typeof useSelectOption>
