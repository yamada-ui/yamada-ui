"use client"

import type {
  JSXElementConstructor,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  RefObject,
} from "react"
import type { HTMLProps, PropGetter, SimpleDirection } from "../../core"
import type { Descendant } from "../use-descendants"
import type { UseDisclosureProps } from "../use-disclosure"
import { useCallback, useId, useRef } from "react"
import scrollIntoView from "scroll-into-view-if-needed"
import { useEnvironment } from "../../core"
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  findChild,
  getValidChildren,
  handlerAll,
  isComposing,
  isSomeElement,
  isUndefined,
  mergeRefs,
  runKeyAction,
  useUpdateEffect,
} from "../../utils"
import { createDescendants } from "../use-descendants"
import { useDisclosure } from "../use-disclosure"

interface ComboboxSharedItem extends Omit<HTMLProps, "children" | "value"> {
  label: ReactNode
}

export interface ComboboxItemWithValue extends ComboboxSharedItem {
  query?: string
  value?: string
}

export interface ComboboxItemWithItems extends ComboboxSharedItem {
  items: ComboboxItemWithValue[]
}

export type ComboboxItem = ComboboxItemWithItems | ComboboxItemWithValue

export interface CreateComboboxItemOptions {
  Group: JSXElementConstructor<any>
  Label: JSXElementConstructor<any>
  Option: JSXElementConstructor<any>
}

export const createComboboxItem = (
  children: ReactNode,
  { Group, Label, Option }: CreateComboboxItemOptions,
) => {
  const validChildren = getValidChildren(children)

  return validChildren
    .filter(
      ({ type }) => isSomeElement(type, Option) || isSomeElement(type, Group),
    )
    .map(({ type, props }) => {
      if (isSomeElement(type, Option)) {
        return { ...props, label: props.children }
      } else {
        const validChildren = getValidChildren(props.children)
        const label = findChild(validChildren, Label)

        return {
          ...props,
          items: validChildren
            .filter(({ type }) => isSomeElement(type, Option))
            .map(({ props }) => ({ ...props, label: props.children })),
          label: label?.props.children ?? props.label,
        }
      }
    })
}

export interface CreateComboboxChildrenOptions {
  Group: JSXElementConstructor<any>
  Option: JSXElementConstructor<any>
  Empty?: JSXElementConstructor<any>
}

export const createComboboxChildren = (
  items: ComboboxItem[],
  { Empty, Group, Option }: CreateComboboxChildrenOptions,
) => {
  return items.map((item, index) => {
    if ("data-empty" in item && Empty) {
      const { label, ...rest } = item

      return (
        <Empty key={index} {...rest}>
          {label}
        </Empty>
      )
    } else if ("items" in item) {
      const { items = [], label, ...rest } = item

      return (
        <Group key={index} label={label} {...rest}>
          {items.map(({ label, ...rest }, index) => (
            <Option key={index} {...rest}>
              {label}
            </Option>
          ))}
        </Group>
      )
    } else {
      const { label, ...rest } = item

      return (
        <Option key={index} {...rest}>
          {label}
        </Option>
      )
    }
  })
}

export interface ComboboxDescendantProps {
  id: string
  closeOnSelect?: boolean
  value?: string
}
export type ComboboxDescendant = Descendant<
  HTMLDivElement,
  ComboboxDescendantProps
>

const {
  DescendantsContext: ComboboxDescendantsContext,
  useDescendant: useComboboxDescendant,
  useDescendantRegister: useComboboxDescendantRegister,
  useDescendants: useComboboxDescendants,
} = createDescendants<HTMLDivElement, ComboboxDescendantProps>()

export {
  ComboboxDescendantsContext,
  useComboboxDescendant,
  useComboboxDescendantRegister,
  useComboboxDescendants,
}

interface ComboboxContext
  extends Pick<
    UseComboboxReturn,
    "onActiveDescendant" | "onClose" | "onSelect"
  > {}

const [ComboboxContext, useComboboxContext] = createContext<ComboboxContext>({
  name: "ComboboxContext",
})

interface ComboboxGroupContext
  extends Pick<UseComboboxGroupReturn, "getLabelProps"> {}

const [ComboboxGroupContext, useComboboxGroupContext] =
  createContext<ComboboxGroupContext>({
    name: "ComboboxGroupContext",
  })

export {
  ComboboxContext,
  ComboboxGroupContext,
  useComboboxContext,
  useComboboxGroupContext,
}

export interface UseComboboxProps
  extends Omit<HTMLProps, "onChange">,
    Omit<UseDisclosureProps, "timing"> {
  /**
   * If `true`, the list element will be closed when value is selected.
   *
   * @default true
   */
  closeOnSelect?: boolean
  /**
   * If `true`, the combobox will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The value to focus on when the combobox is opened.
   */
  initialFocusValue?: string
  /**
   * If `true`, the combobox will be opened when click on the field.
   *
   * @default true
   */
  openOnClick?: boolean
  /**
   * If `true`, the combobox will be opened when enter is pressed.
   *
   * @default true
   */
  openOnEnter?: boolean
  /**
   * If `true`, the combobox will be opened when space is pressed.
   *
   * @default true
   */
  openOnSpace?: boolean
  /**
   * If `true`, the combobox will be readonly.
   *
   * @default false
   */
  readOnly?: boolean
  /**
   * The `ref` of the element that should receive focus when selected.
   */
  selectFocusRef?: RefObject<HTMLElement | null>
  /**
   * If `true`, the item will be selected when space is pressed.
   *
   * @default true
   */
  selectOnSpace?: boolean
  /**
   * The callback invoked when value is selected.
   */
  onChange?: (value: string) => void
}

export const useCombobox = ({
  "aria-label": ariaLabelProp,
  "aria-labelledby": ariaLabelledbyProp,
  closeOnSelect: closeOnSelectProp = true,
  defaultOpen,
  disabled,
  initialFocusValue,
  open: openProp,
  openOnClick = true,
  openOnEnter = true,
  openOnSpace = true,
  readOnly,
  selectFocusRef,
  selectOnSpace = true,
  onChange: onChangeProp,
  onClose: onCloseProp,
  onOpen: onOpenProp,
  ...rest
}: UseComboboxProps = {}) => {
  const { getWindow } = useEnvironment()
  const interactive = !(readOnly || disabled)
  const triggerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const contentId = useId()
  const descendants = useComboboxDescendants()
  const { open, onClose, onOpen } = useDisclosure({
    defaultOpen,
    open: openProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })
  const activeDescendant = useRef<ComboboxDescendant | null>(null)

  const onSelect = useCallback(
    (value?: string, closeOnSelect = closeOnSelectProp) => {
      const ref = selectFocusRef ?? triggerRef

      ref.current?.focus()

      if (!interactive || isUndefined(value)) return

      onChangeProp?.(value)

      if (!closeOnSelect) return

      onClose()
    },
    [closeOnSelectProp, interactive, onChangeProp, onClose, selectFocusRef],
  )

  const onScrollIntoView = useCallback(
    (descendant?: ComboboxDescendant, block: SimpleDirection = "start") => {
      if (!contentRef.current || !descendant) return

      const style = getWindow()?.getComputedStyle(contentRef.current)
      const padding =
        block === "start" ? style?.paddingBlockStart : style?.paddingBlockEnd
      const value = parseInt(padding ?? "0px")

      scrollIntoView(descendant.node, {
        behavior: (actions) =>
          actions.forEach(({ el, top }) => {
            el.scrollTop = block === "start" ? top - value : top + value
          }),
        block,
        boundary: contentRef.current,
        inline: "nearest",
        scrollMode: "if-needed",
      })
    },
    [getWindow],
  )

  const onActiveDescendant = useCallback(
    (descendant?: ComboboxDescendant) => {
      if (!triggerRef.current || !descendant || disabled) return

      triggerRef.current.setAttribute("aria-activedescendant", descendant.id)

      activeDescendant.current = descendant

      descendants.active(descendant)
    },
    [descendants, disabled],
  )

  const onOpenWithActiveDescendant = useCallback(
    (
      getFallbackDescendant: () => ComboboxDescendant | undefined,
      block: SimpleDirection = "start",
    ) => {
      onOpen()

      setTimeout(() => {
        if (!initialFocusValue) {
          const descendant = getFallbackDescendant()

          onActiveDescendant(descendant)
          onScrollIntoView(descendant, block)
        } else {
          const values = descendants.values()
          const descendant =
            values.find(({ value }) => initialFocusValue === value) ??
            getFallbackDescendant()

          onActiveDescendant(descendant)
          onScrollIntoView(descendant, block)
        }
      })
    },
    [
      descendants,
      initialFocusValue,
      onActiveDescendant,
      onOpen,
      onScrollIntoView,
    ],
  )

  const onClick = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      if (disabled) return

      ev.preventDefault()

      if (!open) {
        if (openOnClick)
          onOpenWithActiveDescendant(descendants.enabledFirstValue)
      } else {
        onClose()
      }
    },
    [
      descendants,
      disabled,
      onClose,
      onOpenWithActiveDescendant,
      open,
      openOnClick,
    ],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      if (disabled || isComposing(ev)) return

      runKeyAction(
        ev,
        {
          ArrowDown: (ev) => {
            ev.preventDefault()

            if (!open) {
              onOpenWithActiveDescendant(descendants.enabledFirstValue)
            } else if (activeDescendant.current) {
              const descendant = descendants.enabledNextValue(
                activeDescendant.current,
              )

              onActiveDescendant(descendant)

              onScrollIntoView(
                descendant,
                descendant?.recurred ? "start" : "end",
              )
            } else {
              const descendant = descendants.enabledFirstValue()

              onActiveDescendant(descendant)

              onScrollIntoView(descendant)
            }
          },
          ArrowUp: (ev) => {
            ev.preventDefault()

            if (!open) {
              onOpenWithActiveDescendant(descendants.enabledLastValue, "end")
            } else if (activeDescendant.current) {
              const descendant = descendants.enabledPrevValue(
                activeDescendant.current,
              )

              onActiveDescendant(descendant)

              onScrollIntoView(
                descendant,
                descendant?.recurred ? "end" : "start",
              )
            } else {
              const descendant = descendants.enabledLastValue()

              onActiveDescendant(descendant)

              onScrollIntoView(descendant, "end")
            }
          },
          End: (ev) => {
            ev.preventDefault()

            if (!open) return

            const descendant = descendants.enabledLastValue()

            onActiveDescendant(descendant)

            onScrollIntoView(descendant, "end")
          },
          Enter: (ev) => {
            if (!open) {
              if (!openOnEnter) return

              ev.preventDefault()

              onOpenWithActiveDescendant(descendants.enabledFirstValue)
            } else {
              if (!activeDescendant.current) return

              ev.preventDefault()

              const { closeOnSelect, value } = activeDescendant.current

              onSelect(value, closeOnSelect)
            }
          },
          Home: (ev) => {
            if (!open) return

            ev.preventDefault()

            const descendant = descendants.enabledFirstValue()

            onActiveDescendant(descendant)

            onScrollIntoView(descendant)
          },
          Space: (ev) => {
            if (!open) {
              if (!openOnSpace) return

              ev.preventDefault()

              onOpenWithActiveDescendant(descendants.enabledFirstValue)
            } else {
              if (!activeDescendant.current || !selectOnSpace) return

              ev.preventDefault()

              const { closeOnSelect, value } = activeDescendant.current

              onSelect(value, closeOnSelect)
            }
          },
        },
        { preventDefault: false },
      )
    },
    [
      disabled,
      open,
      onOpenWithActiveDescendant,
      descendants,
      onActiveDescendant,
      onScrollIntoView,
      openOnEnter,
      onSelect,
      openOnSpace,
      selectOnSpace,
    ],
  )

  useUpdateEffect(() => {
    if (open) return

    activeDescendant.current = null
  }, [open])

  const getTriggerProps: PropGetter = useCallback(
    ({
      ref,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      ...props
    } = {}) => ({
      "aria-controls": open ? contentId : undefined,
      "aria-disabled": ariaAttr(!interactive),
      "aria-expanded": open,
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel || ariaLabelProp,
      "aria-labelledby": cx(ariaLabelledby, ariaLabelledbyProp),
      "data-disabled": dataAttr(disabled),
      "data-readonly": dataAttr(readOnly),
      role: "combobox",
      tabIndex: interactive ? 0 : -1,
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref, triggerRef),
      onClick: handlerAll(props.onClick, rest.onClick, onClick),
      onKeyDown: handlerAll(props.onKeyDown, rest.onKeyDown, onKeyDown),
    }),
    [
      open,
      contentId,
      interactive,
      ariaLabelledbyProp,
      disabled,
      readOnly,
      ariaLabelProp,
      rest,
      onClick,
      onKeyDown,
    ],
  )

  const getContentProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      id: contentId,
      role: "listbox",
      ...props,
      ref: mergeRefs(ref, contentRef),
      onKeyDown: handlerAll(props.onKeyDown),
    }),
    [contentId],
  )

  const getSeparatorProps: PropGetter = useCallback(
    (props) => ({ role: "separator", ...props }),
    [],
  )

  return {
    activeDescendant,
    descendants,
    interactive,
    open,
    getContentProps,
    getSeparatorProps,
    getTriggerProps,
    onActiveDescendant,
    onClose,
    onOpen,
    onOpenWithActiveDescendant,
    onScrollIntoView,
    onSelect,
  }
}

export type UseComboboxReturn = ReturnType<typeof useCombobox>

export interface UseComboboxGroupProps extends HTMLProps {}

export const useComboboxGroup = ({
  "aria-labelledby": ariaLabelledbyProp,
  ...rest
}: UseComboboxGroupProps = {}) => {
  const labelId = useId()

  const getGroupProps: PropGetter = useCallback(
    ({ "aria-labelledby": ariaLabelledby, ...props } = {}) => ({
      "aria-labelledby": cx(ariaLabelledbyProp, ariaLabelledby, labelId),
      role: "group",
      ...rest,
      ...props,
    }),
    [ariaLabelledbyProp, labelId, rest],
  )

  const getLabelProps: PropGetter<"span"> = useCallback(
    (props) => ({ id: labelId, role: "presentation", ...props }),
    [labelId],
  )

  return { getGroupProps, getLabelProps }
}

export type UseComboboxGroupReturn = ReturnType<typeof useComboboxGroup>

export interface UseComboboxItemProps extends HTMLProps {
  /**
   * If `true`, the item will be closed when selected.
   */
  closeOnSelect?: boolean
  /**
   * If `true`, the item will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the item will be selected.
   */
  selected?: boolean
  /**
   * The value of the item.
   */
  value?: string
}

export const useComboboxItem = ({
  id,
  "aria-disabled": ariaDisabled,
  "data-disabled": dataDisabled,
  closeOnSelect,
  disabled = false,
  selected = false,
  value,
  ...rest
}: UseComboboxItemProps = {}) => {
  const uuid = useId()
  const itemRef = useRef<HTMLDivElement>(null)
  const { onActiveDescendant, onClose, onSelect } = useComboboxContext()

  id ??= uuid

  const { descendants, register } = useComboboxDescendant({
    id,
    closeOnSelect,
    disabled,
    value,
  })

  const onActive = useCallback(() => {
    if (disabled) return

    const current = descendants.value(itemRef.current)

    onActiveDescendant(current)
  }, [descendants, disabled, onActiveDescendant])

  const onClick = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      ev.preventDefault()

      if (disabled) return

      onSelect(value, closeOnSelect)
    },
    [closeOnSelect, disabled, onSelect, value],
  )

  const getItemProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      id,
      "aria-disabled": ariaDisabled ?? ariaAttr(disabled),
      "aria-selected": selected,
      "data-disabled": dataDisabled ?? dataAttr(disabled),
      "data-selected": dataAttr(selected),
      "data-value": value,
      role: "option",
      tabIndex: -1,
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref, itemRef, register),
      onClick: handlerAll(props.onClick, rest.onClick, onClick),
      onMouseMove: handlerAll(props.onMouseMove, rest.onMouseMove, onActive),
    }),
    [
      id,
      ariaDisabled,
      disabled,
      selected,
      dataDisabled,
      value,
      rest,
      register,
      onClick,
      onActive,
    ],
  )

  const getIndicatorProps: PropGetter = useCallback(
    ({ style, ...props } = {}) => ({
      style: { opacity: selected ? 1 : 0, ...style },
      ...props,
    }),
    [selected],
  )

  return {
    descendants,
    disabled,
    selected,
    getIndicatorProps,
    getItemProps,
    onActiveDescendant,
    onClose,
  }
}
