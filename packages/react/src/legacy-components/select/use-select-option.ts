import type { CSSProperties, MouseEvent } from "react"
import type { HTMLUIProps, PropGetter } from "../../core"
import { useCallback, useId, useMemo, useRef } from "react"
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
} from "../../utils"
import { useSelectContext, useSelectDescendant } from "./use-select"

const isTargetOption = (target: EventTarget | null): boolean =>
  isHTMLElement(target) && !!target.getAttribute("role")?.startsWith("option")

export interface UseSelectOptionProps extends Omit<HTMLUIProps, "value"> {
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
  disabled?: boolean
  /**
   * If `true`, the select option will be focusable.
   *
   * @default false
   */
  focusable?: boolean
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
    value: selectedValue,
    optionProps,
    onChange,
    onClose,
    onFocusNext,
  } = useSelectContext()
  const uuid = useId()
  const itemRef = useRef<HTMLLIElement>(null)
  const {
    id = uuid,
    children,
    closeOnSelect: customCloseOnSelect,
    disabled,
    focusable,
    icon: customIcon,
    value: optionValue,
    ...computedProps
  } = { ...optionProps, ...props }
  const trulyDisabled = !!disabled && !focusable
  const { descendants, index, register } = useSelectDescendant({
    disabled: trulyDisabled,
  })
  const values = descendants.values()
  const frontValues = values.slice(0, index)
  const hasPlaceholder = !!placeholder && placeholderInOptions
  const optionPlaceholder = hasPlaceholder && index === 0
  const multi = isArray(selectedValue)
  const focused = index === focusedIndex

  const value = useMemo(() => {
    let value = optionValue

    if (!optionPlaceholder && isUndefined(optionValue)) {
      if (isString(children) || isNumber(children)) {
        value = children.toString()
      } else {
        console.warn(
          `${
            !multi ? "Select" : "MultiSelect"
          }: Cannot infer the option value of complex children. Pass a \`value\` prop or use a plain string as children to <Option>.`,
        )
      }
    }

    if (hasPlaceholder && index > 0 && !optionValue) {
      console.warn(
        `${
          !multi ? "Select" : "MultiSelect"
        }: If placeholders are present, All options must be set value. If want to set an empty value, either don't set the placeholder or set \`placeholderInOptions\` to false.`,
      )
    }

    return value ?? ""
  }, [children, hasPlaceholder, index, multi, optionPlaceholder, optionValue])

  const duplicated = !multi
    ? frontValues.some(({ node }) => node.dataset.selectedValue === value)
    : false
  const selected =
    !duplicated &&
    (!multi ? value === selectedValue : selectedValue.includes(value))

  const onClick = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      ev.preventDefault()
      ev.stopPropagation()

      if (disabled || !isTargetOption(ev.currentTarget)) {
        if (fieldRef.current) fieldRef.current.focus()

        return
      }

      if (!duplicated) setFocusedIndex(index)

      onChange(value)

      if (fieldRef.current) fieldRef.current.focus()

      if (customCloseOnSelect ?? closeOnSelect) onClose()

      if (omitSelectedValues) onFocusNext()
    },
    [
      disabled,
      duplicated,
      setFocusedIndex,
      index,
      onChange,
      value,
      fieldRef,
      customCloseOnSelect,
      closeOnSelect,
      onClose,
      omitSelectedValues,
      onFocusNext,
    ],
  )

  const getOptionProps: PropGetter = useCallback(
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
        id,
        style: omitSelectedValues && selected ? style : undefined,
        "aria-disabled": ariaAttr(disabled),
        "aria-selected": selected,
        "data-disabled": dataAttr(disabled),
        "data-duplicated": dataAttr(duplicated),
        "data-focus": dataAttr(focused),
        "data-value": value,
        tabIndex: -1,
        onClick: handlerAll(computedProps.onClick, props.onClick, onClick),
      }
    },
    [
      id,
      value,
      computedProps,
      disabled,
      focused,
      duplicated,
      selected,
      omitSelectedValues,
      onClick,
      register,
    ],
  )

  return {
    children,
    customIcon,
    focused,
    selected,
    getOptionProps,
  }
}

export type UseSelectOptionReturn = ReturnType<typeof useSelectOption>
