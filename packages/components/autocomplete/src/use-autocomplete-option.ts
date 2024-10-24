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
import { useCallback, useId, useRef } from "react"
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
  isDisabled?: boolean
  /**
   * If `true`, the autocomplete option will be focusable.
   *
   * @default false
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
    value,
    optionProps,
    onChange,
    onClose,
    onFocusNext,
  } = useAutocompleteContext()
  const uuid = useId()
  const itemRef = useRef<HTMLLIElement>(null)
  let {
    id,
    children,
    closeOnSelect: customCloseOnSelect,
    icon: customIcon,
    isDisabled,
    isFocusable,
    value: optionValue,
    ...computedProps
  } = { ...optionProps, ...props }
  const trulyDisabled = !!isDisabled && !isFocusable
  const { descendants, index, register } = useAutocompleteDescendant({
    disabled: trulyDisabled,
  })
  const values = descendants.values()
  const frontValues = values.slice(0, index)
  const isMulti = isArray(value)
  const isDuplicated = frontValues.some(
    ({ node }) => node.dataset.value === (optionValue ?? ""),
  )
  const isSelected =
    !isDuplicated &&
    (!isMulti
      ? (optionValue ?? "") === value
      : value.includes(optionValue ?? ""))
  const isTarget = "target" in (itemRef.current?.dataset ?? {})
  const isFocused = index === focusedIndex

  id ??= uuid

  if (isUndefined(optionValue)) {
    if (isString(children) || isNumber(children)) {
      optionValue = children.toString()
    } else {
      console.warn(
        `${
          !isMulti ? "Autocomplete" : "MultiAutocomplete"
        }: Cannot infer the option value of complex children. Pass a \`value\` prop or use a plain string as children to <Option>.`,
      )
    }
  }

  const onClick = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      ev.stopPropagation()

      if (isDisabled || !isTargetOption(ev.currentTarget)) {
        if (inputRef.current) inputRef.current.focus()

        return
      }

      if (!isDuplicated) setFocusedIndex(index)

      onChange(optionValue ?? "")

      if (inputRef.current) inputRef.current.focus()

      if (customCloseOnSelect ?? closeOnSelect) onClose()

      if (omitSelectedValues) onFocusNext(index)
    },
    [
      isDuplicated,
      onFocusNext,
      omitSelectedValues,
      isDisabled,
      optionValue,
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
      const isHidden = !isTarget || (omitSelectedValues && isSelected)

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
        style: isHidden ? style : undefined,
        "aria-disabled": ariaAttr(isDisabled),
        "aria-hidden": ariaAttr(isHidden),
        "aria-selected": isSelected,
        "data-disabled": dataAttr(isDisabled),
        "data-duplicated": dataAttr(isDuplicated),
        "data-focus": dataAttr(isFocused),
        "data-target": dataAttr(true),
        "data-value": optionValue ?? "",
        tabIndex: -1,
        onClick: handlerAll(computedProps.onClick, props.onClick, onClick),
      }
    },
    [
      id,
      isDuplicated,
      optionValue,
      computedProps,
      isDisabled,
      isFocused,
      isSelected,
      isTarget,
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
    isTarget,
    omitSelectedValues,
    getOptionProps,
  }
}

export type UseAutocompleteOptionReturn = ReturnType<
  typeof useAutocompleteOption
>

export const useAutocompleteCreate = () => {
  const { isHit, onCreate } = useAutocompleteContext()

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
        style: isHit ? style : undefined,
        "aria-hidden": ariaAttr(isHit),
        "data-focus": dataAttr(!isHit),
        tabIndex: -1,
        onClick: handlerAll(props.onClick, onCreate),
      }
    },
    [isHit, onCreate],
  )

  return { getCreateProps }
}

export type UseAutocompleteCreateReturn = ReturnType<
  typeof useAutocompleteCreate
>

export const useAutocompleteEmpty = () => {
  const { isEmpty, isHit } = useAutocompleteContext()

  const getEmptyProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const isHidden = isHit && !isEmpty

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
        style: isHidden ? style : undefined,
        "aria-hidden": ariaAttr(isHidden),
        tabIndex: -1,
      }
    },
    [isHit, isEmpty],
  )

  return { getEmptyProps }
}

export type UseAutocompleteEmptyReturn = ReturnType<typeof useAutocompleteEmpty>
