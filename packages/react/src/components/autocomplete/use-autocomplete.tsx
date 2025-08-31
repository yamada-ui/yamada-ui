"use client"

import type { ChangeEvent, KeyboardEvent, MouseEvent, ReactNode } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type {
  ComboboxItem,
  ComboboxItemWithValue,
  UseComboboxItemProps,
  UseComboboxProps,
} from "../../hooks/use-combobox"
import type { FieldProps } from "../field"
import { useCallback, useMemo, useRef } from "react"
import { useCombobox, useComboboxItem } from "../../hooks/use-combobox"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useI18n } from "../../providers/i18n-provider"
import {
  cast,
  createContext,
  handlerAll,
  isArray,
  isString,
  isUndefined,
  mergeRefs,
  runIfFn,
  runKeyAction,
  useUpdateEffect,
} from "../../utils"
import { useFieldProps } from "../field"

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

interface AutocompleteContext extends Pick<UseAutocompleteReturn, "value"> {}

const [AutocompleteContext, useAutocompleteContext] =
  createContext<AutocompleteContext>({
    name: "AutocompleteContext",
  })

export { AutocompleteContext, useAutocompleteContext }

export interface UseAutocompleteProps
  extends Omit<HTMLProps, "defaultValue" | "onChange" | "value">,
    Omit<
      UseComboboxProps,
      "defaultValue" | "initialFocusValue" | "onChange" | "value"
    >,
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
  defaultValue?: string
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
   * The value of the autocomplete.
   */
  value?: string
  /**
   * The callback invoked when value state changes.
   */
  onChange?: (value: string) => void
  /**
   * The callback invoked when input value state changes.
   */
  onInputChange?: (value: string) => void
}

export const useAutocomplete = (props: UseAutocompleteProps = {}) => {
  const { t } = useI18n("autocomplete")
  const {
    props: {
      allowCustomValue = false,
      closeOnChange = false,
      closeOnSelect = true,
      defaultInputValue,
      defaultValue,
      disabled,
      emptyMessage = t("No results found"),
      filter = defaultFilter,
      focusOnClear = true,
      inputValue: inputValueProp,
      items = [],
      matcher = defaultMatcher,
      openOnChange = true,
      openOnFocus = false,
      placeholder,
      readOnly,
      value: valueProp,
      onChange: onChangeProp,
      onInputChange: onInputChangeProp,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
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
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const [inputValue, setInputValue] = useControllableState({
    defaultValue: defaultInputValue ?? getInputValue(valueMap[value]),
    value: inputValueProp,
    onChange: onInputChangeProp,
  })
  const onChange = useCallback(
    (value: string) => {
      setValue(value)

      const item = valueMap[value]

      setInputValue(getInputValue(item))
    },
    [setInputValue, setValue, valueMap],
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
    onSelect,
  } = useCombobox({
    closeOnSelect,
    disabled,
    initialFocusValue: isArray(value) ? value[0] : value,
    readOnly,
    onChange,
    ...ariaProps,
    ...dataProps,
    ...eventProps,
    ...rest,
  })
  const filteredItems = useMemo<ComboboxItem[]>(() => {
    if (!items.length) return []

    const filteredItems = filter(inputValue, items, matcher)

    return filteredItems.length
      ? filteredItems
      : [{ "data-empty": "", label: emptyMessage }]
  }, [emptyMessage, filter, inputValue, items, matcher])
  const empty = useMemo(
    () => !filteredItems.filter(({ hidden }) => !hidden).length,
    [filteredItems],
  )

  const onInputChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (runIfFn(closeOnChange, ev)) {
        onClose()
      } else if (runIfFn(openOnChange, ev)) {
        onOpen()
      }

      activeDescendant.current = null

      const value = ev.target.value

      setInputValue(value)

      if (!value.length) setValue("")
    },
    [
      activeDescendant,
      closeOnChange,
      onClose,
      onOpen,
      openOnChange,
      setInputValue,
      setValue,
    ],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (!open || disabled || ev.nativeEvent.isComposing) return

      if (!inputValue.length) return
      if (activeDescendant.current) return

      const item = filteredItems[0]

      if (!item) return

      runKeyAction(ev, {
        Enter: () => {
          if ("items" in item) {
            onSelect(item.items[0]?.value)
          } else {
            onSelect(item.value)
          }
        },
      })
    },
    [activeDescendant, disabled, filteredItems, inputValue, onSelect, open],
  )

  const onClick = useCallback(() => {
    if (openOnFocus) inputRef.current?.focus()
  }, [openOnFocus])

  const onMouseDown = useCallback(
    (ev: MouseEvent<HTMLInputElement>) => {
      if (!openOnFocus) return

      ev.preventDefault()
      ev.stopPropagation()
    },
    [openOnFocus],
  )

  const onFocus = useCallback(() => {
    if (openOnFocus) onOpen()
  }, [openOnFocus, onOpen])

  const onBlur = useCallback(() => {
    if (allowCustomValue) {
      if (inputValue) setValue(inputValue)
    } else {
      const item = valueMap[value]

      setInputValue(getInputValue(item))
    }
  }, [allowCustomValue, inputValue, setInputValue, setValue, value, valueMap])

  const onClear = useCallback(() => {
    setValue("")
    setInputValue("")

    if (focusOnClear) inputRef.current?.focus()
  }, [focusOnClear, setInputValue, setValue])

  const getRootProps: PropGetter = useCallback(
    (props) => ({ ...dataProps, ...props }),
    [dataProps],
  )

  const getFieldProps: PropGetter<"input"> = useCallback(
    ({ ref, ...props } = {}) =>
      cast<HTMLProps<"input">>(
        getTriggerProps({
          ref: mergeRefs(ref, inputRef),
          autoCapitalize: "off",
          autoComplete: "off",
          autoCorrect: "off",
          placeholder,
          spellCheck: false,
          value: inputValue,
          ...props,
          onBlur: handlerAll(props.onBlur, onBlur),
          onChange: handlerAll(props.onChange, onInputChange),
          onClick: handlerAll(props.onClick, onClick),
          onFocus: handlerAll(props.onFocus, onFocus),
          onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
          onMouseDown: handlerAll(props.onMouseDown, onMouseDown),
        }),
      ),
    [
      getTriggerProps,
      inputValue,
      onBlur,
      onClick,
      onFocus,
      onInputChange,
      onKeyDown,
      onMouseDown,
      placeholder,
    ],
  )

  const getContentProps: PropGetter = useCallback(
    (props) => getComboboxContentProps({ hidden: empty, ...props }),
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
    const item = valueMap[value]

    setInputValue(getInputValue(item))
  }, [valueProp])

  return {
    descendants,
    inputValue,
    interactive,
    items: filteredItems,
    open,
    setInputValue,
    setValue,
    value,
    valueMap,
    getClearIconProps,
    getContentProps,
    getFieldProps,
    getIconProps,
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
  const { value: selectedValue } = useAutocompleteContext()

  value ??= isString(children) ? children : undefined

  const selected = selectedValue === value
  const { getIndicatorProps, getItemProps } = useComboboxItem({
    children,
    closeOnSelect,
    disabled: disabled || hidden,
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
