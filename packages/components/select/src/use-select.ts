import type { CSSUIObject, HTMLUIProps, UIPropGetter } from "@yamada-ui/core"
import { layoutStyleProperties } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import type { MotionUIPropGetter } from "@yamada-ui/motion"
import type { PopoverProps } from "@yamada-ui/popover"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { createDescendant } from "@yamada-ui/use-descendant"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import { useOutsideClick } from "@yamada-ui/use-outside-click"
import {
  createContext,
  dataAttr,
  funcAll,
  handlerAll,
  omitObject,
  pickObject,
  splitObject,
  useUnmountEffect,
  useUpdateEffect,
  mergeRefs,
  isHTMLElement,
  ariaAttr,
  isArray,
  isUndefined,
  getEventRelatedTarget,
  isContains,
} from "@yamada-ui/utils"
import type {
  Dispatch,
  ForwardedRef,
  KeyboardEvent,
  RefObject,
  SetStateAction,
  FocusEvent,
  MouseEvent,
  CSSProperties,
} from "react"
import { useCallback, useRef, useState, useEffect } from "react"
import type { OptionProps } from "./"

const isTargetOption = (target: EventTarget | null): boolean =>
  isHTMLElement(target) &&
  !!target?.getAttribute("role")?.startsWith("select-item")

export const {
  DescendantsContextProvider: SelectDescendantsContextProvider,
  useDescendantsContext: useSelectDescendantsContext,
  useDescendants: useSelectDescendants,
  useDescendant: useSelectDescendant,
} = createDescendant<HTMLElement>()

export type MaybeValue = string | string[]

type SelectContext = Omit<
  UseSelectProps,
  "value" | "defaultValue" | "onChange" | "isEmpty"
> & {
  value: MaybeValue
  label: MaybeValue | undefined
  onChange: (newValue: string) => void
  onChangeLabel: (newValue: string, runOmit?: boolean) => void
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onFocusFirst: () => void
  onFocusLast: () => void
  onFocusNext: () => void
  onFocusPrev: () => void
  focusedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  containerRef: RefObject<HTMLDivElement>
  fieldRef: RefObject<HTMLDivElement>
  listRef: RefObject<HTMLUListElement>
  styles: Record<string, CSSUIObject>
}

export const [SelectProvider, useSelectContext] = createContext<SelectContext>({
  strict: false,
  name: "SelectContext",
})

export type UseSelectProps<T extends MaybeValue = string> = Omit<
  HTMLUIProps<"div">,
  "defaultValue" | "onChange" | "offset"
> &
  Omit<
    PopoverProps,
    | "initialFocusRef"
    | "closeOnButton"
    | "trigger"
    | "autoFocus"
    | "restoreFocus"
    | "openDelay"
    | "closeDelay"
  > &
  FormControlOptions & {
    /**
     * The HTML `name` attribute used for forms.
     */
    name?: string
    /**
     * The placeholder of the select.
     */
    placeholder?: string
    /**
     * The value of the select.
     */
    value?: T
    /**
     * The initial value of the select.
     */
    defaultValue?: T
    /**
     * The callback invoked when value state changes.
     */
    onChange?: (value: T) => void
    /**
     * If `true`, the list element will be closed when value is selected.
     *
     * @default true
     */
    closeOnSelect?: boolean
    /**
     * If `true`, include placeholders in options.
     *
     * @default true
     */
    placeholderInOptions?: boolean
    isEmpty: boolean
    /**
     * If `true`, the selected item(s) will be excluded from the list.
     *
     * @default false
     */
    omitSelectedValues?: boolean
    /**
     * The maximum selectable value.
     */
    maxSelectValues?: number
    /**
     * Props for select option element.
     */
    optionProps?: Omit<OptionProps, "value" | "children">
  }

export const useSelect = <T extends MaybeValue = string>({
  placeholder,
  closeOnBlur = true,
  closeOnEsc = true,
  closeOnSelect = true,
  placeholderInOptions = true,
  omitSelectedValues = false,
  maxSelectValues,
  isEmpty,
  placement = "bottom-start",
  duration = 0.2,
  isOpen: isOpenProp,
  defaultIsOpen,
  onOpen: onOpenProp,
  onClose: onCloseProp,
  optionProps,
  ...rest
}: UseSelectProps<T>) => {
  rest = useFormControlProps(rest)

  const { "aria-readonly": _ariaReadonly, ...formControlProps } = pickObject(
    rest,
    formControlProperties,
  )
  const [containerProps, fieldProps] = splitObject(
    omitObject(rest, ["value", "defaultValue", "onChange", "aria-readonly"]),
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
    value: rest.value,
    defaultValue: rest.defaultValue,
    onChange: rest.onChange,
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
      const last = descendants.enabledLastValue()

      if (!last) return

      if (!isMulti || !omitSelectedValues) {
        setFocusedIndex(last.index)
      } else {
        if (selectedIndexes.includes(last.index)) {
          const enabledLast = enabledValues.reverse()[0]

          setFocusedIndex(enabledLast.index)
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
            enabledValues.reverse().find(({ index }) => index < prev.index) ??
            enabledValues[0]

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

  const onFocusFirstOrSelected =
    isEmptyValue || omitSelectedValues ? onFocusFirst : onFocusSelected
  const onFocusLastOrSelected =
    isEmptyValue || omitSelectedValues ? onFocusLast : onFocusSelected

  const onChangeLabel = useCallback(
    (newValue: string, runOmit: boolean = true) => {
      const values = descendants.values()
      const selectedValues = values
        .filter(({ node }) => node.dataset.value === newValue)
        .map(({ node, index }) => {
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
    onOpen: onInternalOpen,
    onClose,
  } = useDisclosure({
    isOpen: isOpenProp,
    defaultIsOpen,
    onOpen: onOpenProp,
    onClose: onCloseProp,
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

      const actions: Record<string, Function | undefined> = {
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
        Space: isFocused
          ? onSelect
          : !isOpen
            ? funcAll(onOpen, onFocusFirstOrSelected)
            : undefined,
        Enter: isFocused
          ? onSelect
          : !isOpen
            ? funcAll(onOpen, onFocusFirstOrSelected)
            : undefined,
        Home: isOpen ? onFocusFirst : undefined,
        End: isOpen ? onFocusLast : undefined,
        Escape: closeOnEsc ? onClose : undefined,
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
    handler: onClose,
    enabled: isOpen && closeOnBlur,
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
      matchWidth: true,
      ...rest,
      ...props,
      isOpen,
      onOpen,
      onClose,
      placement,
      duration,
      trigger: "never",
      closeOnButton: false,
      closeOnBlur,
    }),
    [duration, closeOnBlur, onClose, onOpen, placement, rest, isOpen],
  )

  const getContainerProps: UIPropGetter = useCallback(
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

  const getFieldProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(fieldRef, ref),
      tabIndex: 0,
      ...fieldProps,
      ...props,
      "data-active": dataAttr(isOpen),
      "data-placeholder": dataAttr(
        !isMulti ? label === undefined : !label?.length,
      ),
      "aria-expanded": dataAttr(isOpen),
      onFocus: handlerAll(props.onFocus, rest.onFocus, onFocus),
      onKeyDown: handlerAll(props.onKeyDown, rest.onKeyDown, onKeyDown),
    }),
    [fieldProps, isOpen, isMulti, label, rest, onFocus, onKeyDown],
  )

  return {
    descendants,
    value,
    label,
    focusedIndex,
    placeholder,
    placeholderInOptions,
    omitSelectedValues,
    closeOnSelect,
    isOpen,
    containerRef,
    fieldRef,
    listRef,
    optionProps,
    formControlProps,
    onChangeLabel,
    onChange,
    onClear,
    onOpen,
    onClose,
    onFocusFirst,
    onFocusLast,
    onFocusSelected,
    onFocusNext,
    onFocusPrev,
    setFocusedIndex,
    getPopoverProps,
    getContainerProps,
    getFieldProps,
  }
}

export type UseSelectReturn = ReturnType<typeof useSelect>

export const useSelectList = () => {
  const { listRef, focusedIndex } = useSelectContext()

  const descendants = useSelectDescendantsContext()

  const beforeFocusedIndex = useRef<number>(-1)
  const selectedValue = descendants.value(focusedIndex)

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

  const getListProps: MotionUIPropGetter<"ul"> = useCallback(
    (props = {}, ref = null) => ({
      as: "ul",
      ref: mergeRefs(listRef, ref),
      role: "select",
      tabIndex: -1,
      ...props,
    }),
    [listRef],
  )

  return {
    getListProps,
  }
}

export type UseSelectListReturn = ReturnType<typeof useSelectList>

export type UseSelectOptionGroupProps = HTMLUIProps<"ul"> & {
  /**
   * The label of the option group.
   */
  label: string
}

export const useSelectOptionGroup = ({
  label,
  ...rest
}: UseSelectOptionGroupProps) => {
  const { value, omitSelectedValues } = useSelectContext()

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
    ({ node, index }) =>
      node.parentElement?.dataset.label === label &&
      !selectedIndexes.includes(index),
  )

  const isEmpty = !childValues.length

  const computedRest = splitObject(rest, layoutStyleProperties)

  const getContainerProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        width: "1px",
        margin: "-1px",
        padding: "0px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "absolute",
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

  const getGroupProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref,
      ...props,
      ...computedRest[1],
      "data-label": label,
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

export type UseSelectOptionProps = Omit<HTMLUIProps<"li">, "value"> & {
  /**
   * The value of the select option.
   */
  value?: string
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
   * If `true`, the list element will be closed when selected.
   *
   * @default false
   */
  closeOnSelect?: boolean
}

export const useSelectOption = (
  ref: ForwardedRef<any> | undefined,
  props: UseSelectOptionProps,
) => {
  const {
    fieldRef,
    value,
    placeholder,
    placeholderInOptions,
    omitSelectedValues,
    closeOnSelect: generalCloseOnSelect,
    focusedIndex,
    optionProps,
    onChange,
    onChangeLabel,
    onFocusNext,
    onClose,
    setFocusedIndex,
  } = useSelectContext()

  let {
    icon: customIcon,
    isDisabled,
    isFocusable,
    closeOnSelect: customCloseOnSelect,
    children,
    value: optionValue,
    ...computedProps
  } = { ...optionProps, ...props }

  const trulyDisabled = !!isDisabled && !isFocusable

  const itemRef = useRef<HTMLLIElement>(null)

  const { index, register, descendants } = useSelectDescendant({
    disabled: trulyDisabled,
  })

  const values = descendants.values()
  const frontValues = values.slice(0, index)

  const isMulti = isArray(value)
  const isDuplicated = !isMulti
    ? frontValues.some(({ node }) => node.dataset.value === (optionValue ?? ""))
    : false

  const isSelected =
    !isDuplicated &&
    (!isMulti
      ? (optionValue ?? "") === value
      : value.includes(optionValue ?? ""))
  const isFocused = index === focusedIndex

  if (!!placeholder && index > 0 && placeholderInOptions && !optionValue) {
    console.warn(
      `${
        !isMulti ? "Select" : "MultiSelect"
      }: If placeholders are present, All options must be set value. If want to set an empty value, either don't set the placeholder or set 'placeholderInOptions' to false.`,
    )
  }
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

  const getOptionProps: UIPropGetter<"li"> = useCallback(
    (props = {}) => {
      const style: CSSProperties = {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        width: "1px",
        margin: "-1px",
        padding: "0px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "absolute",
      }

      return {
        ref: mergeRefs(itemRef, ref, register),
        ...computedProps,
        ...props,
        role: "select-item",
        tabIndex: -1,
        style: omitSelectedValues && isSelected ? style : undefined,
        "data-value": optionValue ?? "",
        "data-focus": dataAttr(isFocused),
        "data-disabled": dataAttr(isDisabled),
        "aria-checked": ariaAttr(isSelected),
        "aria-disabled": ariaAttr(isDisabled),
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
      ref,
      register,
    ],
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
