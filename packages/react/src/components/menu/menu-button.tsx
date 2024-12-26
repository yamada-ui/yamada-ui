import type { KeyboardEvent, ReactNode } from "react"
import type { HTMLUIProps } from "../../core"
import type { MenuIconProps } from "./menu-item"
import { useCallback, useId, useMemo } from "react"
import { forwardRef, ui } from "../../core"
import {
  assignRef,
  cx,
  dataAttr,
  funcAll,
  handlerAll,
  mergeRefs,
} from "../../utils"
import { ChevronIcon } from "../icon"
import { PopoverTrigger } from "../popover"
import { useMenu, useUpstreamMenuItem } from "./menu-context"
import { MenuIcon } from "./menu-item"

export interface MenuButtonProps extends HTMLUIProps<"button"> {}

export const MenuButton = forwardRef<MenuButtonProps, "button">(
  ({ id, as, className, children, ...rest }, ref) => {
    const { onKeyDownRef, onUpstreamRestoreFocus } = useUpstreamMenuItem() ?? {}
    const {
      buttonRef,
      open,
      onClose,
      onFocusFirstItem,
      onFocusLastItem,
      onOpen,
    } = useMenu()
    const uuid = useId()

    id ??= uuid

    const onKeyDown = useCallback(
      (ev: KeyboardEvent) => {
        if (ev.key === " ") ev.key = ev.code

        const actions: { [key: string]: Function } = {
          ArrowDown: funcAll(onOpen, onFocusFirstItem),
          ArrowUp: funcAll(onOpen, onFocusLastItem),
          Enter: funcAll(onOpen, onFocusFirstItem),
          Space: funcAll(onOpen, onFocusFirstItem),
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()

        action()
      },
      [onFocusFirstItem, onFocusLastItem, onOpen],
    )

    const onItemKeyDown = useCallback(
      (ev: KeyboardEvent<HTMLDivElement>) => {
        if (ev.key === " ") ev.key = ev.code

        const actions: { [key: string]: Function | undefined } = {
          ArrowLeft: open
            ? funcAll(onUpstreamRestoreFocus, onClose)
            : undefined,
          ArrowRight: !open ? funcAll(onOpen, onFocusFirstItem) : undefined,
          Enter: !open ? funcAll(onOpen, onFocusFirstItem) : undefined,
          Space: !open ? funcAll(onOpen, onFocusFirstItem) : undefined,
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()

        action()
      },
      [open, onOpen, onFocusFirstItem, onUpstreamRestoreFocus, onClose],
    )

    assignRef(onKeyDownRef, onItemKeyDown)

    const Component = useMemo(() => (as ? ui(as) : Button), [as])

    return (
      <PopoverTrigger>
        <Component
          id={id}
          ref={mergeRefs(buttonRef, ref)}
          className={cx("ui-menu", className)}
          aria-haspopup="menu"
          {...rest}
          data-active={dataAttr(open)}
          onKeyDown={handlerAll(rest.onKeyDown, onKeyDown)}
        >
          {children}
        </Component>
      </PopoverTrigger>
    )
  },
)

MenuButton.displayName = "MenuButton"
MenuButton.__ui__ = "MenuButton"

const Button = forwardRef<MenuButtonProps, "button">((rest, ref) => {
  const { styles } = useMenu()

  return <ui.button ref={ref} __css={styles.button} {...rest} />
})

export interface MenuItemButtonProps extends MenuButtonProps {
  icon?: ReactNode
  iconProps?: MenuIconProps
  innerProps?: HTMLUIProps<"span">
}

export const MenuItemButton = forwardRef<MenuItemButtonProps, "button">(
  ({ className, children, icon, iconProps, innerProps, ...rest }, ref) => {
    return (
      <MenuButton
        ref={ref}
        className={cx("ui-menu__item-button", className)}
        flex="1"
        {...rest}
      >
        <ui.span as="span" flex="1" {...innerProps}>
          {children}
        </ui.span>

        <MenuIcon {...iconProps}>
          {icon ?? <ChevronIcon fontSize="1.5em" transform="rotate(-90deg)" />}
        </MenuIcon>
      </MenuButton>
    )
  },
)

MenuItemButton.displayName = "MenuItemButton"
MenuItemButton.__ui__ = "MenuItemButton"
