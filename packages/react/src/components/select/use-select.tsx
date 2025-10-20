"use client"

import type { MouseEvent, ReactNode } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type {
  ComboboxItem,
  ComboboxItemWithValue,
  UseComboboxItemProps,
  UseComboboxProps,
} from "../../hooks/use-combobox"
import type { Dict } from "../../utils"
import type { FieldProps } from "../field"
import { cloneElement, isValidElement, useCallback, useMemo } from "react"
import { useCombobox, useComboboxItem } from "../../hooks/use-combobox"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useI18n } from "../../providers/i18n-provider"
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  handlerAll,
  isArray,
  isNumber,
  isString,
  isUndefined,
  runKeyAction,
  toArray,
} from "../../utils"
import { useFieldProps } from "../field"

interface SelectRenderProps extends ComboboxItemWithValue {
  count: number
  index: number
  separator: string
  onClear: () => void
}

export interface SelectItemRender {
  (props: SelectRenderProps): ReactNode
}

const defaultRender: SelectItemRender = ({
  count,
  index,
  label,
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
      {!last ? separator : null}
    </span>
  )
}

interface SelectContext extends Pick<UseSelectReturn, "max" | "value"> {}

const [SelectContext, useSelectContext] = createContext<SelectContext>({
  name: "SelectContext",
})

export { SelectContext, useSelectContext }

export interface UseSelectProps<Multiple extends boolean = false>
  extends Omit<HTMLProps, "defaultValue" | "onChange" | "value">,
    Omit<
      UseComboboxProps,
      "defaultValue" | "initialFocusValue" | "onChange" | "value"
    >,
    FieldProps {
  /**
   * The initial value of the select.
   */
  defaultValue?: Multiple extends true ? string[] : string
  /**
   * If `true`, include placeholder in options.
   *
   * @default true
   */
  includePlaceholder?: boolean
  /**
   * If provided, generate options based on items.
   *
   * @default []
   */
  items?: ComboboxItem[]
  /**
   * The maximum selectable value.
   */
  max?: number
  /**
   * If `true`, the select will be multiple.
   *
   * @default false
   */
  multiple?: Multiple
  /**
   * The placeholder for select.
   */
  placeholder?: string
  /**
   * The function to render the selected items.
   */
  render?: (props: SelectRenderProps) => ReactNode
  /**
   * The visual separator between each value.
   *
   * @default ','
   */
  separator?: string
  /**
   * The value of the select.
   */
  value?: Multiple extends true ? string[] : string
  /**
   * The callback invoked when value state changes.
   */
  onChange?: (value: Multiple extends true ? string[] : string) => void
}

export const useSelect = <Multiple extends boolean = false>(
  props: UseSelectProps<Multiple> = {},
) => {
  type MaybeValue = Multiple extends true ? string[] : string

  const { t } = useI18n("select")
  const {
    context: { labelId } = {},
    props: {
      multiple = false,
      closeOnSelect = !multiple,
      defaultValue = (multiple ? [] : "") as MaybeValue,
      disabled,
      includePlaceholder = !multiple,
      items: itemProp = [],
      max,
      placeholder,
      readOnly,
      render = defaultRender,
      separator = ",",
      value: valueProp,
      onChange: onChangeProp,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const onChange = useCallback(
    (value: string) => {
      setValue((prev) => {
        if (isArray(prev)) {
          if (prev.includes(value)) {
            return prev.filter((prevValue) => prevValue !== value) as MaybeValue
          } else if (!isNumber(max) || prev.length < max) {
            return [...prev, value] as MaybeValue
          } else {
            return prev
          }
        } else {
          return value as MaybeValue
        }
      })
    },
    [max, setValue],
  )
  const items = useMemo<ComboboxItem[]>(() => {
    const items = [...itemProp]

    if (placeholder)
      items.unshift({
        hidden: !includePlaceholder,
        label: placeholder,
        value: "",
      })

    return items
  }, [itemProp, placeholder, includePlaceholder])
  const empty = useMemo(
    () => !items.filter(({ hidden }) => !hidden).length,
    [items],
  )
  const {
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
  const selectedItems = useMemo<ComboboxItemWithValue[]>(() => {
    if (isArray(value)) {
      if (value.length) {
        return toArray(value.map((value) => valueMap[value]))
      } else {
        return placeholder ? [{ label: placeholder, value: "" }] : []
      }
    } else {
      return isString(value) ? toArray(valueMap[value]) : []
    }
  }, [placeholder, value, valueMap])
  const children = useMemo<ReactNode>(() => {
    const count = selectedItems.length

    return selectedItems.map((item, index) => {
      const onClear = (ev?: MouseEvent<HTMLElement>) => {
        ev?.preventDefault()
        ev?.stopPropagation()

        if (item.value) onChange(item.value)
      }

      const component = render({
        count,
        index,
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
  }, [onChange, render, selectedItems, separator])

  const onClear = useCallback(() => {
    if (!interactive) return

    setValue((prev) => (isArray(prev) ? [] : "") as MaybeValue)
  }, [interactive, setValue])

  const getRootProps: PropGetter = useCallback(
    (props) => ({ ...dataProps, ...props }),
    [dataProps],
  )

  const getFieldProps: PropGetter = useCallback(
    ({ "aria-labelledby": ariaLabelledby, ...props } = {}) =>
      getTriggerProps({
        "aria-label": placeholder,
        "aria-labelledby": cx(ariaLabelledby, labelId),
        ...props,
        children,
      }),
    [children, getTriggerProps, labelId, placeholder],
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
    descendants,
    includePlaceholder,
    interactive,
    items,
    max,
    open,
    placeholder,
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
    onOpen,
    onSelect,
  }
}

export type UseSelectReturn = ReturnType<typeof useSelect>

export interface UseSelectOptionProps extends UseComboboxItemProps {}

export const useSelectOption = ({
  children,
  closeOnSelect,
  disabled,
  hidden,
  value,
  ...rest
}: UseSelectOptionProps = {}) => {
  const { max, value: selectedValue } = useSelectContext()

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

export type UseSelectOptionReturn = ReturnType<typeof useSelectOption>
