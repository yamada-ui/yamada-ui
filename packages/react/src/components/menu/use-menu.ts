"use client"

import type { KeyboardEvent, MouseEvent } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { Descendant } from "../../hooks/use-descendant"
import type { UseDisclosureProps } from "../../hooks/use-disclosure"
import { useCallback, useId, useRef } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendant } from "../../hooks/use-descendant"
import { useDisclosure } from "../../hooks/use-disclosure"
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  handlerAll,
  isArray,
  isString,
  mergeRefs,
  noop,
  runKeyAction,
  useUpdateEffect,
} from "../../utils"

interface MenuDescendantProps {
  id: string
  value: string
}
type MenuDescendant = Descendant<HTMLDivElement, MenuDescendantProps>

const {
  DescendantsContext: MenuDescendantsContext,
  useDescendant: useMenuDescendant,
  useDescendants: useMenuDescendants,
} = createDescendant<HTMLDivElement, MenuDescendantProps>()

export { MenuDescendantsContext, useMenuDescendant, useMenuDescendants }

interface MenuContext
  extends Pick<
    UseMenuReturn,
    "closeOnSelect" | "onActiveDescendant" | "onClose" | "onOpen" | "onSelect"
  > {}

const [MenuContext, useMenuContext] = createContext<MenuContext>({
  name: "MenuContext",
})

interface MenuOptionGroupContext {
  type: "checkbox" | "radio"
  value: string | string[]
  onChange?: (value: string) => void
}

const [MenuOptionGroupContext, useMenuOptionGroupContext] =
  createContext<MenuOptionGroupContext>({
    name: "MenuOptionGroupContext",
  })

export {
  MenuContext,
  MenuOptionGroupContext,
  useMenuContext,
  useMenuOptionGroupContext,
}

export interface UseMenuProps extends Omit<UseDisclosureProps, "timing"> {
  /**
   * If `true`, focus will be transferred to the first or last interactive element when the menu opens.
   *
   * @default true
   */
  autoFocus?: boolean
  /**
   * If `true`, the menu item will be closed when selected.
   *
   * @default true
   */
  closeOnSelect?: boolean
  /**
   * If `true`, the menu will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * Callback invoked when a menu item is selected.
   */
  onSelect?: (value: string) => void
}

export const useMenu = ({
  autoFocus = true,
  closeOnSelect = true,
  defaultOpen,
  disabled = false,
  open: openProp,
  onClose: onCloseProp,
  onOpen: onOpenProp,
  onSelect,
}: UseMenuProps = {}) => {
  const triggerId = useId()
  const updateRef = useRef<() => void>(noop)
  const contentRef = useRef<HTMLDivElement>(null)
  const descendants = useMenuDescendants()
  const {
    open,
    onClose,
    onOpen: onInternalOpen,
  } = useDisclosure({
    defaultOpen,
    open: openProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })

  const onActiveDescendant = useCallback(
    (descendant?: MenuDescendant) => {
      if (!contentRef.current || !descendant) return

      contentRef.current.setAttribute("aria-activedescendant", descendant.id)

      descendants.focus(descendant.node)
    },
    [descendants],
  )

  const onOpen = useCallback(
    (edge: "first" | "last" = "first") => {
      if (disabled) return

      onInternalOpen()

      setTimeout(() => {
        if (!autoFocus) return

        const method =
          edge !== "last" ? "enabledFirstValue" : "enabledLastValue"
        const descendant = descendants[method]()

        onActiveDescendant(descendant)
      })
    },
    [autoFocus, descendants, disabled, onActiveDescendant, onInternalOpen],
  )

  const onClick = useCallback(() => {
    onOpen()
  }, [onOpen])

  const onContextMenu = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      ev.preventDefault()
      onOpen()
      updateRef.current()
    },
    [onOpen],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLButtonElement>) => {
      runKeyAction(ev, {
        ArrowDown: () => onOpen(),
        ArrowUp: () => onOpen("last"),
        Enter: () => onOpen(),
        Space: () => onOpen(),
      })
    },
    [onOpen],
  )

  const getTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      id: triggerId,
      "aria-haspopup": "menu",
      ...props,
      onClick: handlerAll(props.onClick, onClick),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [onClick, onKeyDown, triggerId],
  )

  const getContextTriggerProps: PropGetter = useCallback(
    (props = {}) => ({
      id: triggerId,
      "aria-haspopup": "menu",
      role: "application",
      ...props,
      onContextMenu: handlerAll(props.onContextMenu, onContextMenu),
    }),
    [onContextMenu, triggerId],
  )

  const getContentProps: PropGetter = useCallback(
    ({ ref, "aria-labelledby": ariaLabelledby, ...props } = {}) => ({
      "aria-labelledby": cx(ariaLabelledby, triggerId),
      role: "menu",
      ...props,
      ref: mergeRefs(ref, contentRef),
    }),
    [triggerId],
  )

  const getGroupProps: PropGetter = useCallback(
    (props) => ({
      role: "group",
      ...props,
    }),
    [],
  )

  const getSeparatorProps: PropGetter = useCallback(
    (props) => ({
      role: "separator",
      ...props,
    }),
    [],
  )

  return {
    closeOnSelect,
    descendants,
    open,
    updateRef,
    getContentProps,
    getContextTriggerProps,
    getGroupProps,
    getSeparatorProps,
    getTriggerProps,
    onActiveDescendant,
    onClose,
    onOpen,
    onSelect,
  }
}

export type UseMenuReturn = ReturnType<typeof useMenu>

export interface UseMenuItemProps extends HTMLProps {
  /**
   * The value of the menu item.
   */
  value: string
  /**
   * If `true`, the menu item will be closed when selected.
   */
  closeOnSelect?: boolean
  /**
   * If `true`, the menu item will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the menu item will be focusable.
   *
   * @default false
   */
  focusable?: boolean
}

export const useMenuItem = ({
  id,
  closeOnSelect: closeOnSelectProp,
  disabled = false,
  focusable = false,
  value,
  ...rest
}: UseMenuItemProps) => {
  const uuid = useId()
  const itemRef = useRef<HTMLDivElement>(null)
  const {
    closeOnSelect,
    onActiveDescendant,
    onClose,
    onSelect: onSelectProp,
  } = useMenuContext()

  id ??= uuid

  const { descendants, register } = useMenuDescendant({
    id,
    disabled: disabled && !focusable,
    value,
  })

  closeOnSelectProp ??= closeOnSelect

  const onActive = useCallback(() => {
    if (disabled && !focusable) return

    const index = descendants.indexOf(itemRef.current)
    const current = descendants.value(index)

    onActiveDescendant(current)
  }, [descendants, disabled, focusable, onActiveDescendant])

  const onSelect = useCallback(() => {
    if (disabled) return

    onSelectProp?.(value)

    if (closeOnSelectProp) {
      onClose()
    } else {
      onActive()
    }
  }, [disabled, onSelectProp, value, closeOnSelectProp, onClose, onActive])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      runKeyAction(ev, {
        ArrowDown: () => {
          const index = descendants.indexOf(itemRef.current)
          const next = descendants.enabledNextValue(index)

          onActiveDescendant(next)
        },
        ArrowUp: () => {
          const index = descendants.indexOf(itemRef.current)
          const prev = descendants.enabledPrevValue(index)

          onActiveDescendant(prev)
        },
        End: () => {
          const last = descendants.enabledLastValue()

          onActiveDescendant(last)
        },
        Enter: onSelect,
        Home: () => {
          const first = descendants.enabledFirstValue()

          onActiveDescendant(first)
        },
        Space: onSelect,
      })
    },
    [descendants, onActiveDescendant, onSelect],
  )

  const getItemProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      id,
      "aria-disabled": ariaAttr(disabled),
      "data-disabled": dataAttr(disabled),
      role: "menuitem",
      tabIndex: -1,
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref, itemRef, register),
      onClick: handlerAll(props.onClick, onSelect),
      onKeyDown: handlerAll(props.onKeyDown, rest.onKeyDown, onKeyDown),
      onMouseMove: handlerAll(props.onMouseMove, onActive),
    }),
    [disabled, id, register, rest, onKeyDown, onSelect, onActive],
  )

  return {
    getItemProps,
  }
}

export type UseMenuItemReturn = ReturnType<typeof useMenuItem>

export type MenuOptionGroupType = "checkbox" | "radio"
export type MenuOptionGroupValue<Y extends MenuOptionGroupType> =
  Y extends "checkbox" ? string[] : string

export interface UseMenuOptionGroupProps<
  Y extends MenuOptionGroupType = "checkbox",
  M extends MenuOptionGroupValue<Y> = MenuOptionGroupValue<Y>,
> {
  /**
   * The type of the menu option group.
   */
  type?: Y
  /**
   * The initial value of the menu item group.
   */
  defaultValue?: M
  /**
   * The value of the menu item group.
   */
  value?: M
  /**
   * The callback fired when any children checkbox is checked or unchecked.
   */
  onChange?: (value: M) => void
}

export const useMenuOptionGroup = <
  Y extends "checkbox" | "radio" = "checkbox",
  M extends Y extends "checkbox" ? string[] : string = Y extends "checkbox"
    ? string[]
    : string,
>({
  type = "checkbox" as Y,
  defaultValue = (type === "checkbox" ? [] : "") as M,
  value: valueProp,
  onChange: onChangeProp,
}: UseMenuOptionGroupProps<Y, M>) => {
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const radio = type === "radio"

  const onChange = useCallback(
    (selectedValue: string) => {
      setValue((prev) => {
        if (radio && isString(prev)) {
          return selectedValue as M
        } else if (!radio && isArray(prev)) {
          return (
            prev.includes(selectedValue)
              ? prev.filter((value) => value !== selectedValue)
              : prev.concat(selectedValue)
          ) as M
        } else {
          return prev
        }
      })
    },
    [radio, setValue],
  )

  useUpdateEffect(() => {
    setValue(valueProp!)
  }, [valueProp])

  return {
    type,
    value,
    onChange,
  }
}

export type UseMenuOptionGroupReturn = ReturnType<typeof useMenuOptionGroup>

export interface UseMenuOptionItemProps extends UseMenuItemProps {}

export const useMenuOptionItem = ({
  disabled,
  value,
  ...rest
}: UseMenuOptionItemProps) => {
  const { type, value: selectedValue, onChange } = useMenuOptionGroupContext()
  const { getItemProps } = useMenuItem({ disabled, value, ...rest })
  const radio = type === "radio" && isString(selectedValue)
  const checkbox = type === "checkbox" && isArray(selectedValue)
  const selected = radio
    ? value === selectedValue
    : checkbox
      ? selectedValue.includes(value)
      : false

  const getIndicatorProps: PropGetter<"svg"> = useCallback(
    ({ style, ...props } = {}) => ({
      style: { opacity: selected ? 1 : 0, ...style },
      role: "presentation",
      ...props,
    }),
    [selected],
  )

  const getOptionItemProps: PropGetter = useCallback(
    (props = {}) =>
      getItemProps({
        role: radio ? "menuitemradio" : "menuitemcheckbox",
        ...props,
        onClick: handlerAll(props.onClick, () =>
          !disabled ? onChange?.(value) : noop,
        ),
      }),
    [disabled, getItemProps, onChange, radio, value],
  )

  return {
    type,
    selected,
    getIndicatorProps,
    getOptionItemProps,
  }
}

export type UseMenuOptionItemReturn = ReturnType<typeof useMenuOptionItem>
