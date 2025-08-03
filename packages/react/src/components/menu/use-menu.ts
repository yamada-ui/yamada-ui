"use client"

import type { KeyboardEvent, MouseEvent, RefObject } from "react"
import type { PropGetter } from "../../core"
import type {
  ComboboxDescendant,
  ComboboxDescendantProps,
  UseComboboxItemProps,
} from "../../hooks/use-combobox"
import type { Descendants } from "../../hooks/use-descendants"
import type { UseDisclosureProps } from "../../hooks/use-disclosure"
import { useCallback, useId, useRef } from "react"
import {
  useCombobox,
  useComboboxDescendantRegister,
  useComboboxItem,
} from "../../hooks/use-combobox"
import { useControllableState } from "../../hooks/use-controllable-state"
import {
  assignRef,
  createContext,
  cx,
  dataAttr,
  handlerAll,
  isArray,
  isString,
  isTruthyDataAttr,
  mergeRefs,
  noop,
  runKeyAction,
  useUpdateEffect,
} from "../../utils"

type SubMenuDirection = "end" | "start"

interface MenuContext
  extends Pick<UseMenuReturn, "onSelect" | "subMenu" | "subMenuDirection"> {}

const [MenuContext, useMenuContext] = createContext<MenuContext>({
  name: "MenuContext",
})

interface MainMenuContext {
  descendants: Descendants<HTMLDivElement, ComboboxDescendantProps>
  onActiveDescendant: (
    descendant?: ComboboxDescendant,
    options?: FocusOptions,
  ) => void
  onCloseRef: RefObject<() => void>
  onSelect: (value?: string, closeOnSelect?: boolean) => void
  closeOnSelect?: boolean
}

const [MainMenuContext, useMainMenuContext] = createContext<MainMenuContext>({
  name: "MainMenuContext",
  strict: false,
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
  MainMenuContext,
  MenuContext,
  MenuOptionGroupContext,
  useMainMenuContext,
  useMenuContext,
  useMenuOptionGroupContext,
}

export interface UseMenuProps extends Omit<UseDisclosureProps, "timing"> {
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
   * The direction of the sub menu.
   *
   * @default 'end'
   */
  subMenuDirection?: SubMenuDirection
  /**
   * Callback invoked when a menu item is selected.
   */
  onSelect?: (value?: string) => void
}

export const useMenu = ({
  closeOnSelect,
  defaultOpen,
  disabled = false,
  open: openProp,
  subMenuDirection = "end",
  onClose: onCloseProp,
  onOpen: onOpenProp,
  onSelect: onSelectProp,
}: UseMenuProps = {}) => {
  const triggerId = useId()
  const updateRef = useRef<() => void>(noop)
  const onCloseRef = useRef<() => void>(noop)
  const {
    descendants,
    open,
    getContentProps: getComboboxContentProps,
    getSeparatorProps,
    getTriggerProps: getComboboxTriggerProps,
    onActiveDescendant,
    onClose,
    onOpen,
  } = useCombobox({
    activedescendant: "content",
    defaultOpen,
    disabled,
    open: openProp,
    role: "menu",
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })
  const { mainCloseOnSelect, subMenu, getSubMenuProps, onMainSelect } =
    useSubMenu({
      id: triggerId,
      descendants,
      disabled,
      open,
      subMenuDirection,
      onActiveDescendant,
      onClose,
      onOpen,
    })

  closeOnSelect ??= mainCloseOnSelect ?? true

  const onSelect = useCallback(
    (value?: string, closeOnSelectProp = closeOnSelect) => {
      if (disabled) return

      onSelectProp?.(value)
      onMainSelect?.(value, closeOnSelectProp)

      if (!closeOnSelectProp) return

      onClose()
    },
    [closeOnSelect, disabled, onClose, onMainSelect, onSelectProp],
  )

  const onContextMenu = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      if (disabled) return

      ev.preventDefault()
      onOpen()
      updateRef.current()
    },
    [disabled, onOpen],
  )

  const getTriggerProps: PropGetter = useCallback(
    (props = {}) =>
      getComboboxTriggerProps({
        id: triggerId,
        "data-trigger": dataAttr(true),
        ...getSubMenuProps(props),
      }),
    [getComboboxTriggerProps, getSubMenuProps, triggerId],
  )

  const getContextTriggerProps: PropGetter = useCallback(
    (props = {}) =>
      getComboboxTriggerProps({
        id: triggerId,
        "data-trigger": dataAttr(true),
        role: "application",
        ...props,
        onClick: handlerAll(props.onClick, (ev) => {
          ev.defaultPrevented = true
        }),
        onContextMenu: handlerAll(props.onContextMenu, onContextMenu),
        onKeyDown: handlerAll(props.onKeyDown, (ev) => {
          ev.defaultPrevented = true
        }),
      }),
    [getComboboxTriggerProps, onContextMenu, triggerId],
  )

  const getContentProps: PropGetter = useCallback(
    ({ "aria-labelledby": ariaLabelledby, ...props } = {}) =>
      getComboboxContentProps({
        "aria-labelledby": cx(ariaLabelledby, triggerId),
        ...props,
      }),
    [getComboboxContentProps, triggerId],
  )

  return {
    closeOnSelect,
    descendants,
    open,
    subMenu,
    subMenuDirection,
    updateRef,
    getContentProps,
    getContextTriggerProps,
    getSeparatorProps,
    getTriggerProps,
    onActiveDescendant,
    onClose,
    onCloseRef,
    onOpen,
    onSelect,
  }
}

export type UseMenuReturn = ReturnType<typeof useMenu>

export interface UseSubMenuProps
  extends Omit<Required<UseDisclosureProps>, "defaultOpen" | "timing"> {
  id: string
  descendants: Descendants<HTMLDivElement, ComboboxDescendantProps>
  onActiveDescendant: (
    descendant?: ComboboxDescendant,
    options?: FocusOptions,
  ) => void
  disabled?: boolean
  subMenuDirection?: SubMenuDirection
}

export const useSubMenu = ({
  id,
  descendants,
  disabled = false,
  open,
  subMenuDirection = "end",
  onActiveDescendant,
  onClose,
  onOpen,
}: UseSubMenuProps) => {
  const {
    closeOnSelect: mainCloseOnSelect,
    descendants: mainDescendants,
    onActiveDescendant: onActiveMainDescendant,
    onCloseRef,
    onSelect: onMainSelect,
  } = useMainMenuContext() ?? {}
  const subMenu = !!mainDescendants && !!onActiveMainDescendant
  const createRegister = useComboboxDescendantRegister(mainDescendants)
  const triggerRef = useRef<HTMLDivElement>(null)

  const dataDisabled = useCallback((node?: HTMLDivElement | null) => {
    node ??= triggerRef.current

    if (!node) return false

    const dataDisabled = isTruthyDataAttr(node.getAttribute("data-disabled"))

    return dataDisabled
  }, [])

  const ariaDisabled = useCallback((node?: HTMLDivElement | null) => {
    node ??= triggerRef.current

    if (!node) return false

    const ariaDisabled = isTruthyDataAttr(node.getAttribute("aria-disabled"))

    return ariaDisabled
  }, [])

  const onClick = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      if (!subMenu) return

      ev.defaultPrevented = disabled || dataDisabled() || ariaDisabled()
    },
    [ariaDisabled, dataDisabled, disabled, subMenu],
  )

  const onMouseEnter = useCallback(() => {
    if (!subMenu || disabled || dataDisabled() || ariaDisabled()) return

    onOpen()
  }, [ariaDisabled, dataDisabled, disabled, onOpen, subMenu])

  const onMouseMove = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      if (!subMenu || disabled || dataDisabled() || ariaDisabled()) return

      const index = descendants.indexOf(triggerRef.current)
      const current = descendants.value(index)

      onActiveMainDescendant(current)

      ev.defaultPrevented = true
    },
    [
      ariaDisabled,
      dataDisabled,
      descendants,
      disabled,
      onActiveMainDescendant,
      subMenu,
    ],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      if (!subMenu || disabled) return

      const currentDescendant = open ? descendants : mainDescendants
      const onActiveCurrentDescendant = open
        ? onActiveDescendant
        : onActiveMainDescendant

      runKeyAction(ev, {
        ArrowDown: () => {
          const index = currentDescendant.indexOf(triggerRef.current)
          const next = currentDescendant.enabledNextValue(index)

          onActiveCurrentDescendant(next)

          ev.defaultPrevented = true
        },
        ArrowUp: () => {
          const index = currentDescendant.indexOf(triggerRef.current)
          const prev = currentDescendant.enabledPrevValue(index)

          onActiveCurrentDescendant(prev)

          ev.defaultPrevented = true
        },
        End: () => {
          const last = currentDescendant.enabledLastValue()

          onActiveCurrentDescendant(last)

          ev.defaultPrevented = true
        },
        Home: () => {
          const first = currentDescendant.enabledFirstValue()

          onActiveCurrentDescendant(first)

          ev.defaultPrevented = true
        },
        [subMenuDirection === "end" ? "ArrowRight" : "ArrowLeft"]: () => {
          onOpen()

          setTimeout(() => {
            const descendant = descendants.enabledFirstValue()

            onActiveDescendant(descendant)
          })

          ev.defaultPrevented = true
        },
      })
    },
    [
      subMenu,
      disabled,
      open,
      descendants,
      mainDescendants,
      onActiveDescendant,
      onActiveMainDescendant,
      subMenuDirection,
      onOpen,
    ],
  )

  assignRef(onCloseRef, onClose)

  const getSubMenuProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => {
      return {
        role: subMenu ? "menuitem" : "button",
        ...props,
        ref: mergeRefs(
          ref,
          triggerRef,
          createRegister({
            id,
            disabled: (node) =>
              disabled || dataDisabled(node) || ariaDisabled(node),
          }),
        ),
        onClick: handlerAll(onClick, props.onClick),
        onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
        onMouseEnter: handlerAll(onMouseEnter, props.onMouseEnter),
        onMouseMove: handlerAll(onMouseMove, props.onMouseMove),
      }
    },
    [
      subMenu,
      createRegister,
      id,
      onClick,
      onKeyDown,
      onMouseEnter,
      onMouseMove,
      disabled,
      dataDisabled,
      ariaDisabled,
    ],
  )

  return { mainCloseOnSelect, subMenu, getSubMenuProps, onMainSelect }
}

export type UseSubMenuReturn = ReturnType<typeof useSubMenu>

export interface UseMenuItemProps extends UseComboboxItemProps {
  /**
   * If `true`, the menu item will be closed when selected.
   */
  closeOnSelect?: boolean
  /**
   * The value of the menu item.
   */
  value?: string
}

export const useMenuItem = ({
  "data-trigger": dataTrigger,
  closeOnSelect,
  disabled = false,
  value,
  ...rest
}: UseMenuItemProps) => {
  const trigger = isTruthyDataAttr(dataTrigger)
  const { subMenu, subMenuDirection, onSelect } = useMenuContext()
  const { onCloseRef } = useMainMenuContext() ?? {}
  const subMenuTrigger = subMenu && trigger
  const {
    descendants,
    getIndicatorProps,
    getItemProps: getComboboxItemProps,
    onClose,
  } = useComboboxItem({
    ...rest,
    descendantDisabled: disabled || subMenuTrigger,
    disabled,
  })

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      runKeyAction(ev, {
        Enter: () => onSelect(value, closeOnSelect),
        Space: () => onSelect(value, closeOnSelect),
        [subMenuDirection === "end" ? "ArrowLeft" : "ArrowRight"]: () => {
          if (!subMenu) return

          onClose()

          const trigger = descendants.firstValue()

          trigger?.node.focus()
        },
      })
    },
    [
      closeOnSelect,
      descendants,
      onClose,
      onSelect,
      subMenu,
      subMenuDirection,
      value,
    ],
  )

  const getItemProps: PropGetter = useCallback(
    (props = {}) =>
      getComboboxItemProps({
        ...props,
        onClick: handlerAll(props.onClick, rest.onClick, () =>
          !disabled && !subMenuTrigger ? onSelect(value, closeOnSelect) : noop,
        ),
        onKeyDown: handlerAll(props.onKeyDown, rest.onKeyDown, onKeyDown),
        onMouseMove: handlerAll(props.onMouseMove, rest.onMouseMove, () =>
          onCloseRef?.current(),
        ),
      }),
    [
      rest,
      subMenuTrigger,
      getComboboxItemProps,
      onKeyDown,
      disabled,
      onSelect,
      value,
      closeOnSelect,
      onCloseRef,
    ],
  )

  return {
    subMenuTrigger,
    getIndicatorProps,
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

export interface UseMenuOptionItemProps extends UseMenuItemProps {
  /**
   * The value of the menu option item.
   */
  value: string
}

export const useMenuOptionItem = ({
  disabled,
  value,
  ...rest
}: UseMenuOptionItemProps) => {
  const { type, value: selectedValue, onChange } = useMenuOptionGroupContext()
  const radio = type === "radio" && isString(selectedValue)
  const checkbox = type === "checkbox" && isArray(selectedValue)
  const selected = radio
    ? value === selectedValue
    : checkbox
      ? selectedValue.includes(value)
      : false
  const { getIndicatorProps, getItemProps } = useMenuItem({
    disabled,
    selected,
    value,
    ...rest,
  })

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
