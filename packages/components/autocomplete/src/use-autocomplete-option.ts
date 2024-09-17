import type { HTMLUIProps, PropGetter } from "@yamada-ui/core"
import {
  ariaAttr,
  dataAttr,
  handlerAll,
  isArray,
  isHTMLElement,
  mergeRefs,
  useUpdateEffect,
} from "@yamada-ui/utils"
import type { CSSProperties, MouseEvent } from "react"
import { useCallback, useId, useRef } from "react"
import {
  useAutocompleteContext,
  useAutocompleteDescendant,
} from "./autocomplete-context"

const isTargetOption = (target: EventTarget | null): boolean =>
  isHTMLElement(target) && !!target?.getAttribute("role")?.startsWith("option")

export interface UseAutocompleteOptionProps
  extends Omit<HTMLUIProps<"li">, "value" | "children"> {
  /**
   * The value of the select option.
   */
  value?: string
  /**
   * The label of the select option.
   */
  children?: string
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

export const useAutocompleteOption = (props: UseAutocompleteOptionProps) => {
  const {
    value,
    omitSelectedValues,
    onChange,
    onChangeLabel,
    focusedIndex,
    setFocusedIndex,
    onClose,
    closeOnSelect: generalCloseOnSelect,
    optionProps,
    inputRef,
    onFocusNext,
  } = useAutocompleteContext()

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

  const { index, register, descendants } = useAutocompleteDescendant({
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
  const isTarget = "target" in (itemRef.current?.dataset ?? {})
  const isFocused = index === focusedIndex

  const onClick = useCallback(
    (ev: MouseEvent<HTMLLIElement>) => {
      ev.stopPropagation()

      if (isDisabled) {
        if (inputRef.current) inputRef.current.focus()

        return
      }

      if (!isTargetOption(ev.currentTarget)) {
        if (inputRef.current) inputRef.current.focus()

        return
      }

      setFocusedIndex(index)

      onChange(optionValue ?? "")

      if (inputRef.current) inputRef.current.focus()

      if (customCloseOnSelect ?? generalCloseOnSelect) onClose()

      if (omitSelectedValues) onFocusNext(index)
    },
    [
      onFocusNext,
      omitSelectedValues,
      isDisabled,
      optionValue,
      setFocusedIndex,
      index,
      onChange,
      customCloseOnSelect,
      generalCloseOnSelect,
      onClose,
      inputRef,
    ],
  )

  useUpdateEffect(() => {
    if (isSelected) onChangeLabel(optionValue ?? "", { runOmit: false })
  }, [optionValue])

  const getOptionProps: PropGetter<"li"> = useCallback(
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
        ref: mergeRefs(itemRef, ref, register),
        id: useId(),
        role: "option",
        ...computedProps,
        ...props,
        tabIndex: -1,
        style:
          !isTarget || (omitSelectedValues && isSelected) ? style : undefined,
        "data-target": dataAttr(true),
        "data-value": optionValue ?? "",
        "data-focus": dataAttr(isFocused),
        "data-disabled": dataAttr(isDisabled),
        "aria-checked": isSelected,
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
      isTarget,
      omitSelectedValues,
      onClick,
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

export type UseAutocompleteOptionReturn = ReturnType<
  typeof useAutocompleteOption
>

export const useAutocompleteCreate = () => {
  const { isHit, onCreate } = useAutocompleteContext()

  const getCreateProps: PropGetter<"li"> = useCallback(
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
        tabIndex: -1,
        style: isHit ? style : undefined,
        "data-focus": dataAttr(!isHit),
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
  const { isHit, isEmpty } = useAutocompleteContext()

  const getEmptyProps: PropGetter<"li"> = useCallback(
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
        tabIndex: -1,
        style: isHit && !isEmpty ? style : undefined,
      }
    },
    [isHit, isEmpty],
  )

  return { getEmptyProps }
}

export type UseAutocompleteEmptyReturn = ReturnType<typeof useAutocompleteEmpty>
