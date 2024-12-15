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
import { useCallback, useId, useMemo, useRef } from "react"
import {
  useAutocompleteContext,
  useAutocompleteDescendant,
} from "./autocomplete-context"

const isTargetOption = (target: EventTarget | null): boolean =>
  isHTMLElement(target) && !!target.getAttribute("role")?.startsWith("option")

export interface UseAutocompleteOptionProps
  extends Omit<HTMLUIProps, "children" | "value"> {
  /**
   * The label of the autocomplete option.
   */
  children?: string
  /**
   * If `true`, the list element will be closed when selected.
   *
   * @default false
   */
  closeOnSelect?: boolean
  /**
   * If `true`, the autocomplete option will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the autocomplete option will be focusable.
   *
   * @default false
   */
  focusable?: boolean
  /**
   * If `true`, the autocomplete option will be disabled.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
  /**
   * If `true`, the autocomplete option will be focusable.
   *
   * @default false
   *
   * @deprecated Use `focusable` instead.
   */
  isFocusable?: boolean
  /**
   * The value of the autocomplete option.
   */
  value?: string
}

export const useAutocompleteOption = (props: UseAutocompleteOptionProps) => {
  const {
    closeOnSelect,
    focusedIndex,
    inputRef,
    omitSelectedValues,
    setFocusedIndex,
    value: selectedValue,
    optionProps,
    onChange,
    onClose,
    onFocusNext,
  } = useAutocompleteContext()
  const uuid = useId()
  const itemRef = useRef<HTMLLIElement>(null)
  const {
    id = uuid,
    children,
    closeOnSelect: customCloseOnSelect,
    isDisabled,
    disabled = isDisabled,
    isFocusable,
    focusable = isFocusable,
    icon: customIcon,
    value: optionValue,
    ...computedProps
  } = { ...optionProps, ...props }
  const trulyDisabled = !!disabled && !focusable
  const { descendants, index, register } = useAutocompleteDescendant({
    disabled: trulyDisabled,
  })
  const values = descendants.values()
  const frontValues = values.slice(0, index)
  const multi = isArray(selectedValue)
  const target = "target" in (itemRef.current?.dataset ?? {})
  const focused = index === focusedIndex

  const value = useMemo(() => {
    let value = optionValue

    if (isUndefined(optionValue)) {
      if (isString(children) || isNumber(children)) {
        value = children.toString()
      } else {
        console.warn(
          `${
            !multi ? "Autocomplete" : "MultiAutocomplete"
          }: Cannot infer the option value of complex children. Pass a \`value\` prop or use a plain string as children to <Option>.`,
        )
      }
    }

    return value ?? ""
  }, [children, multi, optionValue])

  const duplicated = frontValues.some(
    ({ node }) => node.dataset.value === value,
  )
  const selected =
    !duplicated &&
    (!multi ? value === selectedValue : selectedValue.includes(value))

  const onClick = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      ev.stopPropagation()

      if (disabled || !isTargetOption(ev.currentTarget)) {
        if (inputRef.current) inputRef.current.focus()

        return
      }

      if (!duplicated) setFocusedIndex(index)

      onChange(value)

      if (inputRef.current) inputRef.current.focus()

      if (customCloseOnSelect ?? closeOnSelect) onClose()

      if (omitSelectedValues) onFocusNext(index)
    },
    [
      duplicated,
      onFocusNext,
      omitSelectedValues,
      disabled,
      value,
      setFocusedIndex,
      index,
      onChange,
      customCloseOnSelect,
      closeOnSelect,
      onClose,
      inputRef,
    ],
  )

  const getOptionProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const hidden = !target || (omitSelectedValues && selected)

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
        style: hidden ? style : undefined,
        "aria-disabled": ariaAttr(disabled),
        "aria-hidden": ariaAttr(hidden),
        "aria-selected": selected,
        "data-disabled": dataAttr(disabled),
        "data-duplicated": dataAttr(duplicated),
        "data-focus": dataAttr(focused),
        "data-target": dataAttr(true),
        "data-value": value,
        tabIndex: -1,
        onClick: handlerAll(computedProps.onClick, props.onClick, onClick),
      }
    },
    [
      id,
      duplicated,
      value,
      computedProps,
      disabled,
      focused,
      selected,
      target,
      omitSelectedValues,
      onClick,
      register,
    ],
  )

  return {
    target,
    children,
    customIcon,
    focused,
    omitSelectedValues,
    selected,
    getOptionProps,
  }
}

export type UseAutocompleteOptionReturn = ReturnType<
  typeof useAutocompleteOption
>

export const useAutocompleteCreate = () => {
  const { hit, onCreate } = useAutocompleteContext()

  const getCreateProps: PropGetter = useCallback(
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
        role: "option",
        ...props,
        style: hit ? style : undefined,
        "aria-hidden": ariaAttr(hit),
        "data-focus": dataAttr(!hit),
        tabIndex: -1,
        onClick: handlerAll(props.onClick, onCreate),
      }
    },
    [hit, onCreate],
  )

  return { getCreateProps }
}

export type UseAutocompleteCreateReturn = ReturnType<
  typeof useAutocompleteCreate
>

export const useAutocompleteEmpty = () => {
  const { empty, hit } = useAutocompleteContext()

  const getEmptyProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const hidden = hit && !empty

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
        role: "presentation",
        ...props,
        style: hidden ? style : undefined,
        "aria-hidden": ariaAttr(hidden),
        tabIndex: -1,
      }
    },
    [hit, empty],
  )

  return { getEmptyProps }
}

export type UseAutocompleteEmptyReturn = ReturnType<typeof useAutocompleteEmpty>
