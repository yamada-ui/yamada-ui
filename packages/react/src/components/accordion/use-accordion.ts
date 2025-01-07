import type { KeyboardEvent, KeyboardEventHandler } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { AccordionItemProps } from "./accordion"
import { useCallback, useEffect, useId, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendant } from "../../hooks/use-descendant"
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  handlerAll,
  isArray,
  mergeRefs,
} from "../../utils"
import { useAccordionContext } from "./accordion"

export const {
  DescendantsContext: AccordionDescendantsContext,
  useDescendant: useAccordionDescendant,
  useDescendants: useAccordionDescendants,
} = createDescendant<HTMLButtonElement>()

interface AccordionItemContext
  extends Omit<UseAccordionItemReturn, "getItemProps">,
    Pick<AccordionItemProps, "icon"> {}

export const [AccordionItemContext, useAccordionItemContext] =
  createContext<AccordionItemContext>({
    name: "AccordionItemContext",
  })

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
}

export const useAccordionItem = ({
  disabled,
  ...rest
}: UseAccordionItemProps = {}) => {
  const itemId = useId()
  const panelId = useId()
  const {
    index: selectedIndex,
    multiple,
    setFocusedIndex,
    setIndex,
    toggle,
  } = useAccordionContext()
  const { descendants, index, register } = useAccordionDescendant({ disabled })
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
      const actions: { [key: string]: KeyboardEventHandler } = {
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
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      action(ev)
    },
    [descendants, index],
  )

  const getItemProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      "aria-expanded": open,
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
      "aria-disabled": dataAttr(disabled),
      "aria-expanded": open,
      "aria-hidden": true,
      ...props,
    }),
    [open, disabled],
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
