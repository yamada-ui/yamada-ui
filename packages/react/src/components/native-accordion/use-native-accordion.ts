"use client"

import type { KeyboardEvent, SyntheticEvent } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import { useCallback, useId } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendants } from "../../hooks/use-descendants"
import {
  createContext,
  dataAttr,
  handlerAll,
  isArray,
  mergeRefs,
  runKeyAction,
} from "../../utils"

const {
  DescendantsContext: NativeAccordionDescendantsContext,
  useDescendant: useNativeAccordionDescendant,
  useDescendants: useNativeAccordionDescendants,
} = createDescendants<HTMLDetailsElement>()

export {
  NativeAccordionDescendantsContext,
  useNativeAccordionDescendant,
  useNativeAccordionDescendants,
}

interface NativeAccordionContext
  extends Omit<UseNativeAccordionReturn, "descendants" | "getRootProps"> {}

const [NativeAccordionContext, useNativeAccordionContext] =
  createContext<NativeAccordionContext>({
    name: "NativeAccordionContext",
  })

export { NativeAccordionContext, useNativeAccordionContext }

interface NativeAccordionItemContext
  extends Omit<UseNativeAccordionItemReturn, "getItemProps"> {}

const [NativeAccordionItemContext, useNativeAccordionItemContext] =
  createContext<NativeAccordionItemContext>({
    name: "NativeAccordionItemContext",
  })

export { NativeAccordionItemContext, useNativeAccordionItemContext }

export interface UseNativeAccordionProps extends Omit<HTMLProps, "onChange"> {
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
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

export const useNativeAccordion = ({
  name: nameProp,
  defaultIndex: defaultIndexProp,
  index: indexProp,
  multiple,
  toggle,
  onChange,
  ...rest
}: UseNativeAccordionProps = {}) => {
  if (
    (indexProp || defaultIndexProp) != null &&
    !isArray(indexProp || defaultIndexProp) &&
    multiple
  ) {
    console.warn(
      `NativeAccordion: If 'multiple' is passed, then 'index' or 'defaultIndex' must be an array.`,
    )
  }

  if (multiple && toggle) {
    console.warn(
      `NativeAccordion: If 'multiple' is passed, 'toggle' will be ignored. Either remove 'toggle' or 'multiple' depending on whether you want multiple accordions visible or not`,
    )
  }

  const descendants = useNativeAccordionDescendants()
  const generatedName = useId()
  const name = nameProp ?? generatedName

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

  return {
    name,
    descendants,
    index,
    multiple,
    setIndex,
    toggle,
    getRootProps,
  }
}

export type UseNativeAccordionReturn = ReturnType<typeof useNativeAccordion>

export interface UseNativeAccordionItemProps extends HTMLProps<"details"> {
  /**
   * The index of the accordion item.
   */
  index: number
  /**
   * If `true`, the accordion item will be disabled.
   *
   * @default false
   */
  disabled?: boolean
}

export const useNativeAccordionItem = ({
  disabled,
  index,
  ...rest
}: UseNativeAccordionItemProps) => {
  const {
    name,
    index: selectedIndex,
    multiple,
    setIndex,
    toggle,
  } = useNativeAccordionContext()

  const { descendants, register } = useNativeAccordionDescendant({ disabled })

  const open =
    index !== -1
      ? isArray(selectedIndex)
        ? selectedIndex.includes(index)
        : selectedIndex === index
      : false

  const onToggle = useCallback(
    (ev: SyntheticEvent<HTMLDetailsElement>) => {
      const nextOpen = ev.currentTarget.open
      if (index === -1 || nextOpen === open) return

      if (multiple && isArray(selectedIndex)) {
        setIndex(
          nextOpen
            ? [...selectedIndex, index]
            : selectedIndex.filter((i) => i !== index),
        )
      } else if (nextOpen) {
        setIndex(index)
      } else if (toggle) {
        setIndex(-1)
      }
    },
    [multiple, toggle, index, selectedIndex, setIndex, open],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLElement>) => {
      runKeyAction(ev, {
        ArrowDown: () => {
          const next = descendants.enabledNextValue(index)

          next?.node.querySelector("summary")?.focus()
        },
        ArrowUp: () => {
          const prev = descendants.enabledPrevValue(index)

          prev?.node.querySelector("summary")?.focus()
        },
        End: () => {
          const last = descendants.enabledLastValue()

          last?.node.querySelector("summary")?.focus()
        },
        Enter: () => {
          if (disabled || (!multiple && !toggle && open)) {
            ev.preventDefault()
          }
        },
        Home: () => {
          const first = descendants.enabledFirstValue()

          first?.node.querySelector("summary")?.focus()
        },
        Space: () => {
          if (disabled || (!multiple && !toggle && open)) {
            ev.preventDefault()
          }
        },
      })
    },
    [descendants, index, disabled, multiple, toggle, open],
  )

  const getItemProps: PropGetter<"details"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ...props,
      name: !multiple ? name : undefined,
      ...rest,
      ref: mergeRefs(register, ref, rest.ref),
      "data-expanded": dataAttr(open),
      open,
      onToggle: handlerAll(props.onToggle, onToggle),
    }),
    [open, rest, onToggle, register, name, multiple],
  )

  const getSummaryProps: PropGetter<"summary"> = useCallback(
    (props = {}) => ({
      ...props,
      "data-disabled": dataAttr(disabled),
      "data-expanded": dataAttr(open),
      onClick: handlerAll(props.onClick, (ev: React.MouseEvent) => {
        if (disabled || (!multiple && !toggle && open)) {
          ev.preventDefault()
          return
        }
      }),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [disabled, multiple, toggle, open, onKeyDown],
  )

  const getPanelProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      "data-expanded": dataAttr(open),
    }),
    [open],
  )

  const getIconProps: PropGetter<"span"> = useCallback(
    (props = {}) => ({
      ...props,
      "aria-hidden": true,
      "data-expanded": dataAttr(open),
    }),
    [open],
  )

  return {
    disabled,
    open,
    getIconProps,
    getItemProps,
    getPanelProps,
    getSummaryProps,
  }
}

export type UseNativeAccordionItemReturn = ReturnType<
  typeof useNativeAccordionItem
>
