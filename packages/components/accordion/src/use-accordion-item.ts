import type { PropGetter } from "@yamada-ui/core"
import type { KeyboardEvent, KeyboardEventHandler } from "react"
import type { AccordionItemOptions } from "./accordion-item"
import { ariaAttr, handlerAll, isArray, mergeRefs } from "@yamada-ui/utils"
import { useCallback, useId } from "react"
import {
  useAccordionContext,
  useAccordionDescendant,
} from "./accordion-context"

interface UseAccordionItemProps
  extends Pick<AccordionItemOptions, "isDisabled"> {}

export function useAccordionItem({ isDisabled }: UseAccordionItemProps) {
  const itemId = useId()
  const panelId = useId()

  const { index, isMultiple, isToggle, setFocusedIndex, setIndex } =
    useAccordionContext()

  const {
    descendants,
    index: i,
    register,
  } = useAccordionDescendant({ disabled: isDisabled })

  const isOpen =
    i !== -1 ? (isArray(index) ? index.includes(i) : index === i) : false

  if (isOpen && isDisabled)
    console.warn(`Accordion: Cannot open a disabled accordion item`)

  const onChange = useCallback(
    (isOpen: boolean) => {
      if (i === -1) return

      if (isMultiple && isArray(index)) {
        setIndex(isOpen ? index.concat(i) : index.filter((v) => v !== i))
      } else if (isOpen) {
        setIndex(i)
      } else if (isToggle) {
        setIndex(-1)
      }
    },
    [isMultiple, isToggle, i, index, setIndex],
  )

  const onFocus = useCallback(() => {
    setFocusedIndex(i)
  }, [setFocusedIndex, i])

  const onClick = useCallback(() => {
    onChange(!isOpen)
    setFocusedIndex(i)
  }, [i, setFocusedIndex, isOpen, onChange])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      const actions: { [key: string]: KeyboardEventHandler } = {
        ArrowDown: () => {
          const next = descendants.enabledNextValue(i)

          next?.node.focus()
        },
        ArrowUp: () => {
          const prev = descendants.enabledPrevValue(i)

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
    [descendants, i],
  )

  const getLabelProps: PropGetter<"button"> = useCallback(
    (props = {}, ref = null) => ({
      id: itemId,
      type: "button",
      "aria-controls": panelId,
      "aria-disabled": ariaAttr(
        (!isMultiple && !isToggle && isOpen) || isDisabled,
      ),
      "aria-expanded": isOpen,
      ...props,
      ref: mergeRefs(register, ref),
      disabled: isDisabled,
      onClick: handlerAll(props.onClick, onClick),
      onFocus: handlerAll(props.onFocus, onFocus),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [
      itemId,
      isOpen,
      panelId,
      isMultiple,
      isToggle,
      isDisabled,
      register,
      onClick,
      onFocus,
      onKeyDown,
    ],
  )

  const getPanelProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      id: panelId,
      "aria-labelledby": itemId,
      role: "region",
      ...props,
      ref,
    }),
    [itemId, panelId],
  )

  return {
    isOpen,
    getLabelProps,
    getPanelProps,
  }
}
