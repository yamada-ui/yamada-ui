import type { HTMLUIProps, PropGetter } from "@yamada-ui/core"
import type { CSSProperties, MouseEvent } from "react"
import {
  ariaAttr,
  dataAttr,
  handlerAll,
  isArray,
  isHTMLElement,
  isNumber,
  isString,
  isUndefined,
  mergeRefs,
} from "@yamada-ui/utils"
import { useCallback, useRef } from "react"
import { useSelectContext, useSelectDescendant } from "./use-select"

const isTargetOption = (target: EventTarget | null): boolean =>
  isHTMLElement(target) && !!target.getAttribute("role")?.startsWith("option")

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
    closeOnSelect,
    fieldRef,
    focusedIndex,
    omitSelectedValues,
    placeholder,
    placeholderInOptions,
    setFocusedIndex,
    value,
    optionProps,
    onChange,
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

      if (isDisabled || !isTargetOption(ev.currentTarget)) {
        if (fieldRef.current) fieldRef.current.focus()

        return
      }

      if (!isDuplicated) setFocusedIndex(index)

      onChange(optionValue ?? "")

      if (fieldRef.current) fieldRef.current.focus()

      if (customCloseOnSelect ?? closeOnSelect) onClose()

      if (omitSelectedValues) onFocusNext()
    },
    [
      isDisabled,
      isDuplicated,
      setFocusedIndex,
      index,
      onChange,
      optionValue,
      fieldRef,
      customCloseOnSelect,
      closeOnSelect,
      onClose,
      omitSelectedValues,
      onFocusNext,
    ],
  )

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
        "data-duplicated": dataAttr(isDuplicated),
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
      isDuplicated,
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
