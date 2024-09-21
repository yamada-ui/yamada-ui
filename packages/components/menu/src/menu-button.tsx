import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { ChevronIcon } from "@yamada-ui/icon"
import { PopoverTrigger } from "@yamada-ui/popover"
import { assignRef, cx, dataAttr, funcAll, handlerAll } from "@yamada-ui/utils"
import type { KeyboardEvent, ReactNode } from "react"
import { useCallback, useMemo } from "react"
import { useMenu, useUpstreamMenuItem } from "./menu-context"
import type { MenuIconProps } from "./menu-item"
import { MenuIcon } from "./menu-item"

export interface MenuButtonProps extends HTMLUIProps<"button"> {}

export const MenuButton = forwardRef<MenuButtonProps, "button">(
  ({ className, children, as, ...rest }, ref) => {
    const { onKeyDownRef, onUpstreamRestoreFocus } = useUpstreamMenuItem() ?? {}
    const { isOpen, onOpen, onClose, onFocusFirstItem, onFocusLastItem } =
      useMenu()

    const onKeyDown = useCallback(
      (ev: KeyboardEvent) => {
        const actions: { [key: string]: Function } = {
          Enter: funcAll(onOpen, onFocusFirstItem),
          ArrowDown: funcAll(onOpen, onFocusFirstItem),
          ArrowUp: funcAll(onOpen, onFocusLastItem),
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()

        action()
      },
      [onFocusFirstItem, onFocusLastItem, onOpen],
    )

    const onItemKeyDown = useCallback(
      (ev: KeyboardEvent<HTMLLIElement>) => {
        const actions: { [key: string]: Function | undefined } = {
          ArrowRight: !isOpen ? funcAll(onOpen, onFocusFirstItem) : undefined,
          ArrowLeft: isOpen
            ? funcAll(onUpstreamRestoreFocus, onClose)
            : undefined,
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()

        action()
      },
      [isOpen, onOpen, onFocusFirstItem, onUpstreamRestoreFocus, onClose],
    )

    assignRef(onKeyDownRef, onItemKeyDown)

    const Component = useMemo(() => (as ? ui(as) : Button), [as])

    return (
      <PopoverTrigger>
        <Component
          ref={ref}
          className={cx("ui-menu", className)}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          {...rest}
          data-active={dataAttr(isOpen)}
          onKeyDown={handlerAll(rest.onKeyDown, onKeyDown)}
        >
          {children}
        </Component>
      </PopoverTrigger>
    )
  },
)

const Button = forwardRef<MenuButtonProps, "button">((rest, ref) => {
  const { styles } = useMenu()

  const css: CSSUIObject = {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    outline: 0,
    ...styles.button,
  }

  return <ui.button ref={ref} __css={css} {...rest} />
})

export interface MenuItemButtonProps extends MenuButtonProps {
  innerProps?: HTMLUIProps<"span">
  iconProps?: MenuIconProps
  icon?: ReactNode
}

export const MenuItemButton = forwardRef<MenuItemButtonProps, "button">(
  ({ className, children, innerProps, icon, iconProps, ...rest }, ref) => {
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
