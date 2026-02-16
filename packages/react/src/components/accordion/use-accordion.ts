"use client"

import type { KeyboardEvent } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import { useCallback, useEffect, useId, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendants } from "../../hooks/use-descendants"
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  handlerAll,
  isArray,
  mergeRefs,
  runKeyAction,
} from "../../utils"

const {
  DescendantsContext: AccordionDescendantsContext,
  useDescendant: useAccordionDescendant,
  useDescendants: useAccordionDescendants,
} = createDescendants<HTMLButtonElement>()

export {
  AccordionDescendantsContext,
  useAccordionDescendant,
  useAccordionDescendants,
}

interface AccordionContext extends Omit<
  UseAccordionReturn,
  "descendants" | "getRootProps"
> {}

const [AccordionContext, useAccordionContext] = createContext<AccordionContext>(
  {
    name: "AccordionContext",
  },
)

export { AccordionContext, useAccordionContext }

interface AccordionItemContext extends Omit<
  UseAccordionItemReturn,
  "getItemProps"
> {}

const [AccordionItemContext, useAccordionItemContext] =
  createContext<AccordionItemContext>({
    name: "AccordionItemContext",
  })

export { AccordionItemContext, useAccordionItemContext }

export interface UseAccordionProps extends Omit<HTMLProps, "onChange"> {
  /**
   * The initial index(es) of the accordion item to expand.
   */
  defaultIndex?: number | number[]
  /**
   * The index(es) of the accordion item to expand.
   */
  index?: number | number[]
  /**
   * If `true`, multiple accordion items can be expanded at once.
   *
   * @default false
   */
  multiple?: boolean
  /**
   * If `true`, any expanded accordion item can be collapsed again.
   *
   * @default false
   */
  toggle?: boolean
  /**
   * The callback invoked when accordion items are expanded or collapsed.
   */
  onChange?: (index: number | number[]) => void
}

export const useAccordion = ({
  defaultIndex: defaultIndexProp,
  index: indexProp,
  multiple,
  toggle,
  onChange,
  ...rest
}: UseAccordionProps = {}) => {
  if (
    (indexProp || defaultIndexProp) != null &&
    !isArray(indexProp || defaultIndexProp) &&
    multiple
  ) {
    console.warn(
      `Accordion: If 'multiple' is passed, then 'index' or 'defaultIndex' must be an array.`,
    )
  }

  if (multiple && toggle) {
    console.warn(
      `Accordion: If 'multiple' is passed, 'toggle' will be ignored. Either remove 'toggle' or 'multiple' depending on whether you want multiple accordions visible or not`,
    )
  }

  const descendants = useAccordionDescendants()

  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const [index, setIndex] = useControllableState({
    defaultValue: () =>
      multiple ? (defaultIndexProp ?? []) : (defaultIndexProp ?? -1),
    value: indexProp,
    onChange,
  })

  const getRootProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      ...props,
      ...rest,
      ref: mergeRefs(ref, rest.ref),
    }),
    [rest],
  )

  useEffect(() => {
    return () => setFocusedIndex(-1)
  }, [])

  return {
    descendants,
    focusedIndex,
    index,
    multiple,
    setFocusedIndex,
    setIndex,
    toggle,
    getRootProps,
  }
}

export type UseAccordionReturn = ReturnType<typeof useAccordion>

export interface UseAccordionItemProps extends HTMLProps {
  /**
   * If `true`, the accordion item will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The index of the accordion item.
   */
  index: number
}

export const useAccordionItem = ({
  disabled,
  index,
  ...rest
}: UseAccordionItemProps) => {
  const itemId = useId()
  const panelId = useId()
  const {
    index: selectedIndex,
    multiple,
    setFocusedIndex,
    setIndex,
    toggle,
  } = useAccordionContext()
  const { descendants, register } = useAccordionDescendant({ disabled })
  const open =
    index !== -1
      ? isArray(selectedIndex)
        ? selectedIndex.includes(index)
        : selectedIndex === index
      : false

  if (open && disabled)
    console.warn(`Accordion: Cannot open a disabled accordion item`)

  const onChange = useCallback(
    (open: boolean) => {
      if (index === -1) return

      if (multiple && isArray(selectedIndex)) {
        setIndex(
          open
            ? selectedIndex.concat(index)
            : selectedIndex.filter((i) => i !== index),
        )
      } else if (open) {
        setIndex(index)
      } else if (toggle) {
        setIndex(-1)
      }
    },
    [multiple, toggle, index, selectedIndex, setIndex],
  )

  const onFocus = useCallback(() => {
    setFocusedIndex(index)
  }, [setFocusedIndex, index])

  const onClick = useCallback(() => {
    onChange(!open)
    setFocusedIndex(index)
  }, [index, setFocusedIndex, open, onChange])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLButtonElement>) => {
      runKeyAction(ev, {
        ArrowDown: () => {
          const next = descendants.enabledNextValue(index)

          next?.node.focus()
        },
        ArrowUp: () => {
          const prev = descendants.enabledPrevValue(index)

          prev?.node.focus()
        },
        End: () => {
          const last = descendants.enabledLastValue()

          last?.node.focus()
        },
        Home: () => {
          const first = descendants.enabledFirstValue()

          first?.node.focus()
        },
      })
    },
    [descendants, index],
  )

  const getItemProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      "data-expanded": dataAttr(open),
      ...props,
      ...rest,
      ref: mergeRefs(ref, rest.ref),
    }),
    [open, rest],
  )

  const getButtonProps: PropGetter<"button"> = useCallback(
    ({ ref, ...props } = {}) => ({
      id: itemId,
      type: "button",
      "aria-controls": panelId,
      "aria-disabled": ariaAttr((!multiple && !toggle && open) || disabled),
      "aria-expanded": open,
      ...props,
      ref: mergeRefs(register, ref),
      disabled,
      onClick: handlerAll(props.onClick, onClick),
      onFocus: handlerAll(props.onFocus, onFocus),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [
      itemId,
      open,
      panelId,
      multiple,
      toggle,
      disabled,
      register,
      onClick,
      onFocus,
      onKeyDown,
    ],
  )

  const getPanelProps: PropGetter = useCallback(
    ({ "aria-labelledby": ariaLabelledby, ...props } = {}) => ({
      id: panelId,
      "aria-labelledby": cx(ariaLabelledby, itemId),
      role: "region",
      ...props,
    }),
    [itemId, panelId],
  )

  const getIconProps: PropGetter<"svg"> = useCallback(
    (props) => ({
      "aria-disabled": ariaAttr((!multiple && !toggle && open) || disabled),
      "aria-expanded": open,
      "aria-hidden": true,
      role: "presentation",
      ...props,
    }),
    [multiple, toggle, open, disabled],
  )

  return {
    disabled,
    open,
    getButtonProps,
    getIconProps,
    getItemProps,
    getPanelProps,
  }
}

export type UseAccordionItemReturn = ReturnType<typeof useAccordionItem>
