"use client"

import type {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from "react"
import type { HTMLProps, HTMLRefAttributes, PropGetter } from "../../core"
import type {
  ComboboxItem,
  ComboboxItemWithValue,
  UseComboboxItemProps,
  UseComboboxProps,
} from "../../hooks/use-combobox"
import type { Dict } from "../../utils"
import type { FieldProps } from "../field"
import {
  cloneElement,
  isValidElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react"
import { useCombobox, useComboboxItem } from "../../hooks/use-combobox"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useI18n } from "../../providers/i18n-provider"
import {
  cast,
  contains,
  createContext,
  dataAttr,
  handlerAll,
  isArray,
  isNumber,
  isString,
  isUndefined,
  mergeRefs,
  runIfFn,
  runKeyAction,
  useUpdateEffect,
  visuallyHiddenAttributes,
} from "../../utils"
import { useFieldProps } from "../field"

interface AutocompleteRenderProps extends ComboboxItemWithValue {
  count: number
  focused: boolean
  index: number
  separator: string
  onClear: () => void
  max?: number
}

export interface SelectItemRender {
  (props: AutocompleteRenderProps): ReactNode
}

const defaultRender: SelectItemRender = ({
  count,
  focused,
  index,
  label,
  max,
  separator,
  value,
}) => {
  const last = count - 1 === index

  return (
    <span
      style={{ marginInlineEnd: "var(--gap)" }}
      data-placeholder={dataAttr(value === "")}
    >
      {label}
      {((!isNumber(max) || count < max) && focused) || !last ? separator : null}
    </span>
  )
}

const getInputValue = (item?: ComboboxItemWithValue) =>
  isString(item?.label) ? item.label : (item?.query ?? "")

export interface AutocompleteFilter {
  (
    inputValue: string,
    items: ComboboxItem[],
    matcher: AutocompleteMatcher,
  ): ComboboxItem[]
}

const defaultFilter: AutocompleteFilter = (inputValue, items, matcher) => {
  if (!inputValue.length) return items

  return items
    .map((item) => {
      if ("items" in item) {
        const items = item.items.filter((item) => {
          if ("query" in item) {
            return matcher(inputValue, item.query)
          } else if (isString(item.label)) {
            return matcher(inputValue, item.label)
          }
        })

        if (items.length) return { ...item, items }
      } else if ("query" in item) {
        if (matcher(inputValue, item.query)) return item
      } else if (isString(item.label)) {
        if (matcher(inputValue, item.label)) return item
      }
    })
    .filter(Boolean) as ComboboxItem[]
}

export interface AutocompleteMatcher {
  (input: string, target?: string): boolean
}

const defaultMatcher: AutocompleteMatcher = (input, target) =>
  target?.toLowerCase().includes(input.toLowerCase()) ?? false

interface AutocompleteContext
  extends Pick<UseAutocompleteReturn, "max" | "value"> {}

const [AutocompleteContext, useAutocompleteContext] =
  createContext<AutocompleteContext>({
    name: "AutocompleteContext",
  })

export { AutocompleteContext, useAutocompleteContext }

export interface UseAutocompleteProps<Y extends string | string[] = string>
  extends Omit<HTMLProps, "defaultValue" | "onChange" | "ref" | "value">,
    Omit<
      UseComboboxProps,
      "defaultValue" | "initialFocusValue" | "onChange" | "ref" | "value"
    >,
    HTMLRefAttributes<"input">,
    FieldProps {
  /**
   * If `true`, the autocomplete will allow custom value.
   *
   * @default false
   */
  allowCustomValue?: boolean
  /**
   * If `true`, the autocomplete will be closed when the input value changes.
   *
   * @default false
   */
  closeOnChange?: ((ev: ChangeEvent<HTMLInputElement>) => boolean) | boolean
  /**
   * The initial value of the input.
   */
  defaultInputValue?: string
  /**
   * The initial value of the autocomplete.
   */
  defaultValue?: Y
  /**
   * The message displayed when the search yields no hits.
   *
   * @default 'No results found'
   */
  emptyMessage?: ReactNode
  /**
   * The function to filter the items.
   */
  filter?: AutocompleteFilter
  /**
   * If `true`, the input will be focused when the clear icon is clicked.
   *
   * @default true
   */
  focusOnClear?: boolean
  /**
   * The value of the input.
   */
  inputValue?: string
  /**
   * If provided, generate options based on items.
   *
   * @default []
   */
  items?: ComboboxItem[]
  /**
   * The function to match the items.
   */
  matcher?: AutocompleteMatcher
  /**
   * The maximum selectable value.
   */
  max?: number
  /**
   * If `true`, the autocomplete will be multiple.
   *
   * @default false
   */
  multiple?: boolean
  /**
   * If `true`, the autocomplete will be opened when the input value changes.
   *
   * @default true
   */
  openOnChange?: ((ev: ChangeEvent<HTMLInputElement>) => boolean) | boolean
  /**
   * If `true`, the autocomplete will be opened when the input is focused.
   *
   * @default false
   */
  openOnFocus?: boolean
  /**
   * The placeholder for autocomplete.
   */
  placeholder?: string
  /**
   * The function to render the selected items.
   */
  render?: (props: AutocompleteRenderProps) => ReactNode
  /**
   * The visual separator between each value.
   *
   * @default ','
   */
  separator?: string
  /**
   * The value of the autocomplete.
   */
  value?: Y
  /**
   * The callback invoked when value state changes.
   */
  onChange?: (value: Y) => void
  /**
   * The callback invoked when input value state changes.
   */
  onInputChange?: (value: string) => void
}

export const useAutocomplete = <Y extends string | string[] = string>(
  props: UseAutocompleteProps<Y> = {},
) => {
  const { t } = useI18n("autocomplete")
  const {
    props: {
      ref,
      allowCustomValue = false,
      closeOnChange = false,
      multiple = false,
      closeOnSelect = !multiple,
      defaultInputValue,
      defaultValue = (multiple ? [] : "") as Y,
      disabled,
      emptyMessage = t("No results found"),
      filter = defaultFilter,
      focusOnClear = true,
      inputValue: inputValueProp,
      items = [],
      matcher = defaultMatcher,
      max,
      openOnChange = true,
      openOnFocus = false,
      placeholder,
      readOnly,
      render = defaultRender,
      separator = ",",
      value: valueProp,
      onChange: onChangeProp,
      onInputChange: onInputChangeProp,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const rootRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const valueMap = useMemo<{ [key: string]: ComboboxItemWithValue }>(() => {
    const valueMap: { [key: string]: ComboboxItemWithValue } = {}

    items.forEach((item) => {
      if ("items" in item) {
        item.items.forEach((item) => {
          item.value ??= isString(item.label) ? item.label : undefined

          if (!isUndefined(item.value)) valueMap[item.value] = item
        })
      } else {
        item.value ??= isString(item.label) ? item.label : undefined

        if (!isUndefined(item.value)) valueMap[item.value] = item
      }
    })

    return valueMap
  }, [items])
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const [inputValue, setInputValue] = useControllableState({
    defaultValue:
      defaultInputValue ??
      getInputValue(isArray(value) ? undefined : valueMap[value as string]),
    value: inputValueProp,
    onChange: onInputChangeProp,
  })
  const onChange = useCallback(
    (selectedValue: string) => {
      setValue((prev) => {
        if (isArray(prev)) {
          if (prev.includes(selectedValue)) {
            return prev.filter((prevValue) => prevValue !== selectedValue) as Y
          } else if (!isNumber(max) || prev.length < max) {
            return [...prev, selectedValue] as Y
          } else {
            return prev
          }
        } else {
          return selectedValue as Y
        }
      })

      if (isArray(value)) {
        setInputValue("")
      } else {
        const item = valueMap[selectedValue]

        setInputValue(getInputValue(item))
      }
    },
    [max, setInputValue, setValue, value, valueMap],
  )
  const {
    activeDescendant,
    descendants,
    interactive,
    open,
    getContentProps: getComboboxContentProps,
    getSeparatorProps,
    getTriggerProps,
    onActiveDescendant,
    onClose,
    onOpen,
    onOpenWithActiveDescendant,
    onSelect,
  } = useCombobox({
    closeOnSelect,
    disabled,
    initialFocusValue: isArray(value) ? value[0] : value,
    openOnEnter: false,
    openOnSpace: false,
    readOnly,
    selectFocusRef: inputRef,
    selectOnSpace: false,
    onChange,
    ...ariaProps,
    ...dataProps,
    ...eventProps,
    ...rest,
  })
  const filteredItems = useMemo<ComboboxItem[]>(() => {
    if (!items.length) return []

    return filter(inputValue, items, matcher)
  }, [filter, inputValue, items, matcher])
  const resolvedItems = useMemo<ComboboxItem[]>(() => {
    return filteredItems.length
      ? filteredItems
      : [{ "data-empty": "", label: emptyMessage }]
  }, [filteredItems, emptyMessage])
  const empty = useMemo(
    () => !resolvedItems.filter(({ hidden }) => !hidden).length,
    [resolvedItems],
  )
  const children = useMemo<ReactNode>(() => {
    if (!isArray(value)) return null

    const count = value.length

    return value.map((value, index) => {
      const item = valueMap[value] ?? { label: value, value }

      const onClear = (ev?: MouseEvent<HTMLElement>) => {
        ev?.preventDefault()
        ev?.stopPropagation()

        if (item.value) onChange(item.value)
      }

      const component = render({
        count,
        focused,
        index,
        max,
        separator,
        onClear,
        ...item,
      })

      if (isValidElement<Dict>(component)) {
        return cloneElement(component, { ...component.props, key: index })
      } else {
        return component
      }
    })
  }, [focused, max, onChange, render, separator, value, valueMap])
  const hasValues = isArray(value) && value.length

  const onInputChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (isArray(value) && value.length === max) return

      if (runIfFn(closeOnChange, ev)) {
        onClose()
      } else if (runIfFn(openOnChange, ev)) {
        onOpen()
      }

      activeDescendant.current = null

      const inputValue = ev.target.value

      setInputValue(inputValue)

      if (inputValue.length || isArray(value)) return

      setValue("" as Y)
    },
    [
      activeDescendant,
      closeOnChange,
      max,
      onClose,
      onOpen,
      openOnChange,
      setInputValue,
      setValue,
      value,
    ],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (disabled || ev.nativeEvent.isComposing) return

      runKeyAction(
        ev,
        {
          Backspace: (ev) => {
            if (!isArray(value)) return
            if (!!cast<HTMLInputElement>(ev.target).value.length) return

            ev.preventDefault()

            setValue((prev) => prev.slice(0, -1) as Y)
          },
          Enter: (ev) => {
            if (!open || !inputValue.length || activeDescendant.current) return

            const item = filteredItems[0]

            if (!item) {
              if (!allowCustomValue || !isArray(value)) return

              onSelect(inputValue)
            } else {
              ev.preventDefault()

              if ("items" in item) {
                onSelect(item.items[0]?.value)
              } else {
                onSelect(item.value)
              }
            }
          },
        },
        { preventDefault: false },
      )
    },
    [
      activeDescendant,
      allowCustomValue,
      disabled,
      filteredItems,
      inputValue,
      onSelect,
      open,
      setValue,
      value,
    ],
  )

  const onClick = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  const onMouseDown = useCallback(
    (ev: MouseEvent<HTMLInputElement>) => {
      if (!openOnFocus) return

      ev.preventDefault()
      ev.stopPropagation()
    },
    [openOnFocus],
  )

  const onFocus = useCallback(
    (ev: FocusEvent<HTMLInputElement>) => {
      ev.preventDefault()
      ev.stopPropagation()

      setFocused(true)

      if (openOnFocus) onOpenWithActiveDescendant(descendants.enabledFirstValue)
    },
    [openOnFocus, onOpenWithActiveDescendant, descendants],
  )

  const onBlur = useCallback(
    (ev: FocusEvent<HTMLInputElement>) => {
      ev.preventDefault()

      if (
        !contains(rootRef.current, ev.relatedTarget) &&
        !contains(contentRef.current, ev.relatedTarget)
      ) {
        setFocused(false)
        onClose()
      }

      if (isArray(value)) {
        setInputValue("")
      } else {
        if (allowCustomValue) {
          if (inputValue) setValue(inputValue as Y)
        } else {
          const item = valueMap[value as string]

          setInputValue(getInputValue(item))
        }
      }
    },
    [
      allowCustomValue,
      inputValue,
      onClose,
      setInputValue,
      setValue,
      value,
      valueMap,
    ],
  )

  const onClear = useCallback(() => {
    setValue((prev) => (isArray(prev) ? [] : "") as Y)
    setInputValue("")

    if (focusOnClear) inputRef.current?.focus()
  }, [focusOnClear, setInputValue, setValue])

  const getRootProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      ref: mergeRefs(ref, rootRef),
      ...dataProps,
      ...props,
    }),
    [dataProps],
  )

  const getFieldProps: PropGetter = useCallback(
    (props = {}) =>
      getTriggerProps({
        ...props,
        tabIndex: -1,
        onClick: handlerAll(props.onClick, onClick),
      }),

    [getTriggerProps, onClick],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}) => ({
      ref: mergeRefs(props.ref, ref, inputRef),
      style: {
        ...(!focused && isArray(value) && !!value.length
          ? visuallyHiddenAttributes.style
          : {}),
        ...props.style,
      },
      "data-max": dataAttr(
        isArray(value) && isNumber(max) && value.length >= max,
      ),
      autoCapitalize: "off",
      autoComplete: "off",
      autoCorrect: "off",
      placeholder: hasValues ? undefined : placeholder,
      spellCheck: false,
      value: inputValue,
      ...props,
      onBlur: handlerAll(props.onBlur, onBlur),
      onChange: handlerAll(props.onChange, onInputChange),
      onFocus: handlerAll(props.onFocus, onFocus),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      onMouseDown: handlerAll(props.onMouseDown, onMouseDown),
    }),
    [
      focused,
      hasValues,
      inputValue,
      max,
      onBlur,
      onFocus,
      onInputChange,
      onKeyDown,
      onMouseDown,
      placeholder,
      ref,
      value,
    ],
  )

  const getContentProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) =>
      getComboboxContentProps({
        ref: mergeRefs(ref, contentRef),
        hidden: empty,
        ...props,
      }),
    [empty, getComboboxContentProps],
  )

  const getIconProps: PropGetter = useCallback(
    (props) => ({ ...dataProps, ...props }),
    [dataProps],
  )

  const getClearIconProps: PropGetter = useCallback(
    (props = {}) =>
      getIconProps({
        "aria-label": t("Clear value"),
        role: "button",
        tabIndex: 0,
        ...props,
        onClick: handlerAll(props.onClick, onClear),
        onKeyDown: handlerAll(props.onKeyDown, (ev) =>
          runKeyAction(ev, {
            Enter: onClear,
            Space: onClear,
          }),
        ),
      }),
    [getIconProps, onClear, t],
  )

  useUpdateEffect(() => {
    if (isArray(valueProp)) return

    setInputValue(
      getInputValue(valueProp ? valueMap[valueProp as string] : undefined),
    )
  }, [valueProp])

  return {
    children,
    descendants,
    inputValue,
    interactive,
    items: resolvedItems,
    max,
    open,
    setInputValue,
    setValue,
    value,
    valueMap,
    getClearIconProps,
    getContentProps,
    getFieldProps,
    getIconProps,
    getInputProps,
    getRootProps,
    getSeparatorProps,
    onActiveDescendant,
    onChange,
    onClose,
    onInputChange,
    onOpen,
    onSelect,
  }
}

export type UseAutocompleteReturn = ReturnType<typeof useAutocomplete>

export interface UseAutocompleteOptionProps extends UseComboboxItemProps {}

export const useAutocompleteOption = ({
  children,
  closeOnSelect,
  disabled,
  hidden,
  value,
  ...rest
}: UseAutocompleteOptionProps = {}) => {
  const { max, value: selectedValue } = useAutocompleteContext()

  value ??= isString(children) ? children : undefined

  const selected = isArray(selectedValue)
    ? !isUndefined(value) && selectedValue.includes(value)
    : selectedValue === value
  const completed =
    isNumber(max) && isArray(selectedValue) && selectedValue.length >= max
  const { getIndicatorProps, getItemProps } = useComboboxItem({
    children,
    closeOnSelect,
    disabled: disabled || hidden || (completed && !selected),
    hidden,
    selected,
    value,
    ...rest,
  })

  const getOptionProps: PropGetter = useCallback(
    (props = {}) => getItemProps(props),
    [getItemProps],
  )

  return { getIndicatorProps, getOptionProps }
}

export type UseAutocompleteOptionReturn = ReturnType<
  typeof useAutocompleteOption
>
