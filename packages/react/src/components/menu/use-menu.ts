"use client"

import type { KeyboardEvent, MouseEvent, RefObject } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { Descendant, Descendants } from "../../hooks/use-descendants"
import type { UseDisclosureProps } from "../../hooks/use-disclosure"
import { useCallback, useId, useRef } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendants } from "../../hooks/use-descendants"
import { useDisclosure } from "../../hooks/use-disclosure"
import {
  ariaAttr,
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

interface MenuDescendantProps {
  id: string
}
type MenuDescendant = Descendant<HTMLDivElement, MenuDescendantProps>

const {
  DescendantsContext: MenuDescendantsContext,
  useDescendant: useMenuDescendant,
  useDescendantRegister: useMenuDescendantRegister,
  useDescendants: useMenuDescendants,
} = createDescendants<HTMLDivElement, MenuDescendantProps>()

export { MenuDescendantsContext, useMenuDescendant, useMenuDescendants }

interface MenuContext
  extends Pick<
    UseMenuReturn,
    | "onActiveDescendant"
    | "onClose"
    | "onCloseSubMenu"
    | "onOpen"
    | "onSelect"
    | "subMenu"
    | "subMenuDirection"
  > {}

const [MenuContext, useMenuContext] = createContext<MenuContext>({
  name: "MenuContext",
})

interface MenuGroupContext extends Pick<UseMenuGroupReturn, "getLabelProps"> {}

const [MenuGroupContext, useMenuGroupContext] = createContext<MenuGroupContext>(
  {
    name: "MenuGroupContext",
  },
)

interface MainMenuContext {
  descendants: Descendants<HTMLDivElement, MenuDescendantProps>
  onActiveDescendant: (descendant?: MenuDescendant) => void
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
  MenuGroupContext,
  MenuOptionGroupContext,
  useMainMenuContext,
  useMenuContext,
  useMenuGroupContext,
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
  const contentId = useId()
  const descendants = useMenuDescendants()
  const updateRef = useRef<() => void>(noop)
  const onCloseRef = useRef<() => void>(noop)
  const contentRef = useRef<HTMLDivElement>(null)
  const { open, onClose, onOpen } = useDisclosure({
    defaultOpen,
    open: openProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })
  const onCloseSubMenu = useCallback(() => onCloseRef.current(), [])
  const onActiveDescendant = useCallback(
    (
      descendant?: MenuDescendant,
      options: FocusOptions = { preventScroll: true },
    ) => {
      if (!contentRef.current || !descendant || disabled) return

      contentRef.current.setAttribute("aria-activedescendant", descendant.id)

      descendants.active(descendant, options)
    },
    [descendants, disabled],
  )
  const { mainCloseOnSelect, subMenu, getSubMenuProps, onMainSelect } =
    useSubMenu({
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

  const onClick = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      if (disabled) return

      ev.preventDefault()

      if (!open) {
        onOpen()
      } else {
        onClose()
      }
    },
    [disabled, onClose, onOpen, open],
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

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return

      runKeyAction(ev, {
        ArrowDown: () => {
          onOpen()

          setTimeout(() => {
            const descendant = descendants.enabledFirstValue()

            onActiveDescendant(descendant)
          })
        },
        ArrowUp: () => {
          onOpen()

          setTimeout(() => {
            const descendant = descendants.enabledLastValue()

            onActiveDescendant(descendant)
          })
        },
        Enter: () => {
          onOpen()

          setTimeout(() => {
            const descendant = descendants.enabledFirstValue()

            onActiveDescendant(descendant)
          })
        },
        Space: () => {
          onOpen()

          setTimeout(() => {
            const descendant = descendants.enabledFirstValue()

            onActiveDescendant(descendant)
          })
        },
      })
    },
    [descendants, disabled, onActiveDescendant, onOpen],
  )

  const getTriggerProps: PropGetter = useCallback(
    (props = {}) => ({
      ...getSubMenuProps({
        id: triggerId,
        "aria-controls": open ? contentId : undefined,
        "aria-disabled": ariaAttr(disabled),
        "aria-expanded": open,
        "aria-haspopup": "menu",
        "data-trigger": dataAttr(true),
        role: "button",
        tabIndex: disabled ? -1 : 0,
        ...props,
        onClick: handlerAll(props.onClick, onClick),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      }),
    }),
    [contentId, disabled, getSubMenuProps, onClick, onKeyDown, open, triggerId],
  )

  const getContextTriggerProps: PropGetter = useCallback(
    (props = {}) => ({
      id: triggerId,
      "aria-controls": open ? contentId : undefined,
      "aria-disabled": ariaAttr(disabled),
      "aria-expanded": open,
      "aria-haspopup": "menu",
      "data-trigger": dataAttr(true),
      role: "application",
      ...props,
      onContextMenu: handlerAll(props.onContextMenu, onContextMenu),
    }),
    [contentId, disabled, onContextMenu, open, triggerId],
  )

  const getContentProps: PropGetter = useCallback(
    ({ ref, "aria-labelledby": ariaLabelledby, ...props } = {}) => ({
      id: contentId,
      "aria-labelledby": cx(ariaLabelledby, triggerId),
      role: "menu",
      ...props,
      ref: mergeRefs(ref, contentRef),
    }),
    [contentId, triggerId],
  )

  const getSeparatorProps: PropGetter = useCallback(
    (props) => ({ role: "separator", ...props }),
    [],
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
    onCloseSubMenu,
    onOpen,
    onSelect,
  }
}

export type UseMenuReturn = ReturnType<typeof useMenu>

export interface UseSubMenuProps
  extends Omit<Required<UseDisclosureProps>, "defaultOpen" | "timing"> {
  descendants: Descendants<HTMLDivElement, MenuDescendantProps>
  onActiveDescendant: (descendant?: MenuDescendant) => void
  disabled?: boolean
  subMenuDirection?: SubMenuDirection
}

export const useSubMenu = ({
  descendants,
  disabled = false,
  open,
  subMenuDirection = "end",
  onActiveDescendant,
  onClose,
  onOpen,
}: UseSubMenuProps) => {
  const uuid = useId()
  const {
    closeOnSelect: mainCloseOnSelect,
    descendants: mainDescendants,
    onActiveDescendant: onActiveMainDescendant,
    onCloseRef,
    onSelect: onMainSelect,
  } = useMainMenuContext() ?? {}
  const subMenu = !!mainDescendants && !!onActiveMainDescendant
  const createRegister = useMenuDescendantRegister(mainDescendants)
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

      const descendant = descendants.value(triggerRef.current)

      onActiveMainDescendant(descendant)

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
          const descendant = currentDescendant.enabledNextValue(
            triggerRef.current,
          )

          onActiveCurrentDescendant(descendant)

          ev.defaultPrevented = true
        },
        ArrowUp: () => {
          const descendant = currentDescendant.enabledPrevValue(
            triggerRef.current,
          )

          onActiveCurrentDescendant(descendant)

          ev.defaultPrevented = true
        },
        End: () => {
          const descendant = currentDescendant.enabledLastValue()

          onActiveCurrentDescendant(descendant)

          ev.defaultPrevented = true
        },
        Home: () => {
          const descendant = currentDescendant.enabledFirstValue()

          onActiveCurrentDescendant(descendant)

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
    ({ id = uuid, ref, ...props } = {}) => {
      const getDisabled = (node: HTMLDivElement) =>
        disabled || dataDisabled(node) || ariaDisabled(node)
      const register = createRegister({ id, disabled: getDisabled })

      return {
        role: subMenu ? "menuitem" : "button",
        ...props,
        ref: mergeRefs(ref, triggerRef, register),
        onClick: handlerAll(onClick, props.onClick),
        onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
        onMouseEnter: handlerAll(onMouseEnter, props.onMouseEnter),
        onMouseMove: handlerAll(onMouseMove, props.onMouseMove),
      }
    },
    [
      uuid,
      subMenu,
      createRegister,
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

export interface UseMenuGroupProps extends HTMLProps {}

export const useMenuGroup = ({
  "aria-labelledby": ariaLabelledbyProp,
  ...rest
}: UseMenuGroupProps) => {
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

export type UseMenuGroupReturn = ReturnType<typeof useMenuGroup>

export interface UseMenuItemProps extends HTMLProps {
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
   * The value of the menu item.
   */
  value?: string
}

export const useMenuItem = ({
  id,
  "aria-disabled": ariaDisabled,
  "data-disabled": dataDisabled,
  "data-trigger": dataTrigger,
  closeOnSelect,
  disabled = false,
  value,
  ...rest
}: UseMenuItemProps) => {
  const trigger = isTruthyDataAttr(dataTrigger)
  const {
    subMenu,
    subMenuDirection,
    onActiveDescendant,
    onClose,
    onCloseSubMenu,
    onSelect,
  } = useMenuContext()
  const uuid = useId()
  const itemRef = useRef<HTMLDivElement>(null)
  const subMenuTrigger = subMenu && trigger

  id ??= uuid

  const { descendants, register } = useMenuDescendant({
    id,
    disabled: disabled || subMenuTrigger,
  })

  const onActive = useCallback(() => {
    if (disabled) return

    const descendant = descendants.value(itemRef.current)

    onActiveDescendant(descendant)
  }, [descendants, disabled, onActiveDescendant])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      runKeyAction(ev, {
        ArrowDown: () => {
          const descendant = descendants.enabledNextValue(itemRef.current)

          onActiveDescendant(descendant)
        },
        ArrowUp: () => {
          const descendant = descendants.enabledPrevValue(itemRef.current)

          onActiveDescendant(descendant)
        },
        End: () => {
          const descendant = descendants.enabledLastValue()

          onActiveDescendant(descendant)
        },
        Enter: () => onSelect(value, closeOnSelect),
        Home: () => {
          const descendant = descendants.enabledFirstValue()

          onActiveDescendant(descendant)
        },
        Space: () => onSelect(value, closeOnSelect),
        [subMenuDirection === "end" ? "ArrowLeft" : "ArrowRight"]: () => {
          if (!subMenu) return

          onClose()

          const descendant = descendants.firstValue()

          descendant?.node.focus()
        },
      })
    },
    [
      closeOnSelect,
      descendants,
      onActiveDescendant,
      onClose,
      onSelect,
      subMenu,
      subMenuDirection,
      value,
    ],
  )

  const getItemProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      id,
      "aria-disabled": ariaDisabled ?? ariaAttr(disabled),
      "data-disabled": dataDisabled ?? dataAttr(disabled),
      role: "menuitem",
      tabIndex: -1,
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref, itemRef, register),
      onClick: handlerAll(props.onClick, rest.onClick, () =>
        onSelect(value, closeOnSelect),
      ),
      onFocus: handlerAll(props.onFocus, rest.onFocus, onActive),
      onKeyDown: handlerAll(props.onKeyDown, rest.onKeyDown, onKeyDown),
      onMouseMove: handlerAll(props.onMouseMove, rest.onMouseMove, () => {
        onCloseSubMenu()
        onActive()
      }),
    }),
    [
      id,
      ariaDisabled,
      disabled,
      dataDisabled,
      rest,
      register,
      onActive,
      onKeyDown,
      onSelect,
      value,
      closeOnSelect,
      onCloseSubMenu,
    ],
  )

  return {
    subMenuTrigger,
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
  const { getItemProps } = useMenuItem({ disabled, value, ...rest })
  const radio = type === "radio" && isString(selectedValue)
  const checkbox = type === "checkbox" && isArray(selectedValue)
  const selected = radio
    ? value === selectedValue
    : checkbox
      ? selectedValue.includes(value)
      : false

  const getIndicatorProps: PropGetter = useCallback(
    ({ style, ...props } = {}) => ({
      style: { opacity: selected ? 1 : 0, ...style },
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
