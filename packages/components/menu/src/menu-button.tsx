import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { KeyboardEvent, ReactNode } from "react"
import type { MenuIconProps } from "./menu-item"
import { forwardRef, ui } from "@yamada-ui/core"
import { ChevronIcon } from "@yamada-ui/icon"
import { PopoverTrigger } from "@yamada-ui/popover"
import { assignRef, cx, dataAttr, funcAll, handlerAll } from "@yamada-ui/utils"
import { useCallback, useMemo } from "react"
import { useMenu, useUpstreamMenuItem } from "./menu-context"
import { MenuIcon } from "./menu-item"

export interface MenuButtonProps extends HTMLUIProps<"button"> {}

export const MenuButton = forwardRef<MenuButtonProps, "button">(
  ({ as, className, children, ...rest }, ref) => {
    const { onKeyDownRef, onUpstreamRestoreFocus } = useUpstreamMenuItem() ?? {}
    const { isOpen, onClose, onFocusFirstItem, onFocusLastItem, onOpen } =
      useMenu()

    const onKeyDown = useCallback(
      (ev: KeyboardEvent) => {
        const actions: { [key: string]: Function } = {
          ArrowDown: funcAll(onOpen, onFocusFirstItem),
          ArrowUp: funcAll(onOpen, onFocusLastItem),
          Enter: funcAll(onOpen, onFocusFirstItem),
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
          ArrowLeft: isOpen
            ? funcAll(onUpstreamRestoreFocus, onClose)
            : undefined,
          ArrowRight: !isOpen ? funcAll(onOpen, onFocusFirstItem) : undefined,
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
          aria-expanded={isOpen}
          aria-haspopup="menu"
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
    alignItems: "center",
    appearance: "none",
    display: "inline-flex",
    outline: 0,
    ...styles.button,
  }

  return <ui.button ref={ref} __css={css} {...rest} />
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
