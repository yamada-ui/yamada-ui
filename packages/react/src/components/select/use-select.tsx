"use client"

import type { ReactNode } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type {
  UseComboboxItemProps,
  UseComboboxProps,
} from "../../hooks/use-combobox"
import type { FieldProps } from "../field"
import { cloneElement, isValidElement, useCallback, useMemo } from "react"
import { useCombobox, useComboboxItem } from "../../hooks/use-combobox"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useI18n } from "../../providers/i18n-provider"
import {
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

export interface SelectRenderProps extends SelectItemWithValue {
  count: number
  index: number
  separator: string
}

const defaultRender = ({
  count,
  index,
  label,
  separator,
  value,
}: SelectRenderProps) => {
  const last = count - 1 === index

  return (
    <span data-placeholder={dataAttr(value === "")}>
      {label}
      {!last ? `${separator} ` : null}
    </span>
  )
}

interface SelectSharedItem extends Omit<HTMLProps, "children" | "value"> {
  label: ReactNode
}

interface SelectItemWithValue extends SelectSharedItem {
  value?: string
}

interface SelectItemWithItems extends SelectSharedItem {
  items: SelectItemWithValue[]
}

export type SelectItem = SelectItemWithItems | SelectItemWithValue

interface SelectContext extends Pick<UseSelectReturn, "max" | "value"> {}

const [SelectContext, useSelectContext] = createContext<SelectContext>({
  name: "SelectContext",
})

export { SelectContext, useSelectContext }

export interface UseSelectProps<Y extends string | string[] = string>
  extends Omit<HTMLProps, "defaultValue" | "onChange" | "value">,
    Omit<
      UseComboboxProps,
      "defaultValue" | "initialFocusValue" | "onChange" | "value"
    >,
    FieldProps {
  /**
   * The initial value of the select.
   */
  defaultValue?: Y
  /**
   * If provided, generate options based on items.
   *
   * @default '[]'
   */
  items?: SelectItem[]
  /**
   * The maximum selectable value.
   */
  max?: number
  /**
   * If `true`, the select will be multiple.
   *
   * @default false
   */
  multiple?: boolean
  /**
   * The placeholder for select.
   */
  placeholder?: string
  /**
   * If `true`, include placeholders in options.
   *
   * @default true
   */
  placeholderInOptions?: boolean
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
  value?: Y
  /**
   * The callback invoked when value state changes.
   */
  onChange?: (value: Y) => void
}

export const useSelect = <Y extends string | string[] = string>(
  props: UseSelectProps<Y> = {},
) => {
  const { t } = useI18n("select")
  const {
    context: { labelId } = {},
    props: {
      multiple = false,
      closeOnSelect = !multiple,
      defaultValue = (multiple ? [] : "") as Y,
      disabled,
      items: itemProp = [],
      max,
      placeholder,
      placeholderInOptions = !multiple,
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
            return prev.filter((prevValue) => prevValue !== value) as Y
          } else if (!isNumber(max) || prev.length < max) {
            return [...prev, value] as Y
          } else {
            return prev
          }
        } else {
          return value as Y
        }
      })
    },
    [max, setValue],
  )
  const {
    descendants,
    interactive,
    open,
    getContentProps,
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
  const items = useMemo<SelectItem[]>(() => {
    const items = [...itemProp]

    if (placeholder)
      items.unshift({
        hidden: !placeholderInOptions,
        label: placeholder,
        value: "",
      })

    return items
  }, [itemProp, placeholder, placeholderInOptions])
  const valueMap = useMemo<{ [key: string]: SelectItemWithValue }>(() => {
    const valueMap: { [key: string]: SelectItemWithValue } = {}

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
  const selectedItems = useMemo<SelectItemWithValue[]>(() => {
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
      const component = render({ count, index, separator, ...item })

      if (isValidElement<any>(component)) {
        return cloneElement(component, { ...component.props, key: index })
      } else {
        return component
      }
    })
  }, [render, selectedItems, separator])

  const onClear = useCallback(() => {
    setValue((prev) => (isArray(prev) ? [] : "") as Y)
  }, [setValue])

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
            Escape: onClear,
          }),
        ),
      }),
    [getIconProps, onClear, t],
  )

  return {
    descendants,
    interactive,
    items,
    max,
    open,
    placeholder,
    placeholderInOptions,
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
