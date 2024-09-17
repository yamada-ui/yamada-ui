import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { useClickable } from "@yamada-ui/use-clickable"
import {
  ariaAttr,
  cx,
  funcAll,
  handlerAll,
  isActiveElement,
  isHTMLElement,
  mergeRefs,
  useUpdateEffect,
} from "@yamada-ui/utils"
import type {
  FC,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  ReactElement,
} from "react"
import { useCallback, useRef, useState } from "react"
import {
  useMenuDescendant,
  UpstreamMenuItemProvider,
  useMenu,
  useUpstreamMenuItem,
} from "./menu-context"

const isTargetMenuItem = (target: EventTarget | null) => {
  return (
    isHTMLElement(target) &&
    !!target?.getAttribute("role")?.startsWith("menuitem")
  )
}

interface MenuItemOptions {
  /**
   * If `true`, the menu item will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, the menu item will be focusable.
   *
   * @default false
   */
  isFocusable?: boolean
  /**
   * If `true`, the list element will be closed when selected.
   *
   * @default false
   */
  closeOnSelect?: boolean
  /**
   * The menu item icon to use.
   */
  icon?: ReactElement
  /**
   * Right-aligned label text content, useful for displaying hotkeys.
   */
  command?: string
}

export interface MenuItemProps extends HTMLUIProps<"li">, MenuItemOptions {}

export const MenuItem = forwardRef<MenuItemProps, "li">(
  (
    {
      className,
      isDisabled,
      isFocusable,
      closeOnSelect: customCloseOnSelect,
      icon,
      command,
      children,
      ...props
    },
    ref,
  ) => {
    const {
      focusedIndex,
      setFocusedIndex,
      isOpen,
      onClose,
      onUpstreamClose,
      closeOnSelect: generalCloseOnSelect,
      menuRef,
      requestAnimationFrameId,
      isNested,
      styles,
    } = useMenu()
    const { onUpstreamRestoreFocus } = useUpstreamMenuItem() ?? {}

    const trulyDisabled = isDisabled && !isFocusable

    const itemRef = useRef<HTMLLIElement>(null)
    const hasDownstreamRef = useRef<boolean>(false)
    const onKeyDownRef = useRef<KeyboardEventHandler<HTMLLIElement>>(
      () => void 0,
    )
    const { index, register } = useMenuDescendant({ disabled: trulyDisabled })
    const [isDownstreamOpen, setDownstreamOpen] = useState<boolean>(false)

    const isFocused = index === focusedIndex

    const onMouseOver = useCallback(() => {
      if (isDisabled) return

      setFocusedIndex(index)
    }, [index, isDisabled, setFocusedIndex])

    const onMouseLeave = useCallback(() => {
      if (isDisabled) return

      setFocusedIndex(-1)
    }, [setFocusedIndex, isDisabled])

    const onClick = useCallback(
      (ev: MouseEvent<HTMLLIElement>) => {
        if (!isTargetMenuItem(ev.currentTarget)) return

        const hasDownstream = hasDownstreamRef.current

        if (customCloseOnSelect ?? (!hasDownstream && generalCloseOnSelect)) {
          onClose()
          onUpstreamClose?.()
        }
      },
      [customCloseOnSelect, generalCloseOnSelect, onClose, onUpstreamClose],
    )

    const onFocus = useCallback(() => {
      setFocusedIndex(index)
    }, [setFocusedIndex, index])

    const onRestoreFocus = useCallback(() => {
      itemRef.current?.focus()

      setFocusedIndex(index)
    }, [setFocusedIndex, index])

    const onKeyDown = useCallback(
      (ev: KeyboardEvent<HTMLLIElement>) => {
        const actions: { [key: string]: Function | undefined } = {
          ArrowLeft: isNested
            ? funcAll(onUpstreamRestoreFocus, onClose)
            : undefined,
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()
        ev.stopPropagation()

        action()
      },
      [onUpstreamRestoreFocus, onClose, isNested],
    )

    const rest = useClickable<HTMLLIElement>({
      focusOnClick: false,
      ...props,
      onClick: handlerAll(props.onClick, onClick),
      onFocus: handlerAll(props.onFocus, onFocus),
      onMouseOver: handlerAll(props.onMouseOver, onMouseOver),
      onMouseLeave: handlerAll(props.onMouseLeave, onMouseLeave),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown, onKeyDownRef.current),
      ref: mergeRefs(register, itemRef, ref),
      isDisabled,
      isFocusable,
    })

    useUpdateEffect(() => {
      if (!isOpen) return

      const id = requestAnimationFrameId.current

      if (isFocused && !trulyDisabled && itemRef.current) {
        if (id) cancelAnimationFrame(id)

        requestAnimationFrameId.current = requestAnimationFrame(() => {
          itemRef.current?.focus({ preventScroll: true })

          requestAnimationFrameId.current = null
        })
      } else if (menuRef.current && !isActiveElement(menuRef.current)) {
        menuRef.current.focus({ preventScroll: true })
      }

      return () => {
        if (id) cancelAnimationFrame(id)
      }
    }, [isFocused, trulyDisabled, menuRef, isOpen])

    children =
      icon || command ? (
        <ui.span style={{ flex: 1 }}>{children}</ui.span>
      ) : (
        children
      )

    const css: CSSUIObject = {
      textDecoration: "none",
      color: "inherit",
      userSelect: "none",
      display: "flex",
      width: "100%",
      alignItems: "center",
      textAlign: "start",
      flex: "0 0 auto",
      outline: 0,
      gap: "0.75rem",
      ...styles.item,
    }

    return (
      <UpstreamMenuItemProvider
        value={{
          onKeyDownRef,
          onUpstreamRestoreFocus: onRestoreFocus,
          setDownstreamOpen,
          hasDownstreamRef,
        }}
      >
        <ui.li
          {...rest}
          {...(isDownstreamOpen ? { "data-active": "" } : {})}
          role="menuitem"
          tabIndex={isFocused ? 0 : -1}
          className={cx("ui-menu__item", className)}
          __css={css}
        >
          {icon ? <MenuIcon>{icon}</MenuIcon> : null}
          {children}
          {command ? <MenuCommand>{command}</MenuCommand> : null}
        </ui.li>
      </UpstreamMenuItemProvider>
    )
  },
)

interface MenuOptionItemOptions {
  /**
   * The menu option item icon to use.
   */
  icon?: ReactElement | null
  /**
   * The value of the menu option item.
   */
  value?: string
  /**
   * If `true`, the checkbox or radio will be checked.
   *
   * @default false
   */
  isChecked?: boolean
  /**
   * The type of the menu option item.
   */
  type?: "radio" | "checkbox"
}

export interface MenuOptionItemProps
  extends Omit<MenuItemProps, "icon" | "command" | "value">,
    MenuOptionItemOptions {}

export const MenuOptionItem = forwardRef<MenuOptionItemProps, "button">(
  (
    { className, icon, isChecked, closeOnSelect = false, children, ...rest },
    ref,
  ) => {
    return (
      <MenuItem
        ref={ref}
        className={cx("ui-menu__item--option", className)}
        aria-checked={ariaAttr(isChecked)}
        closeOnSelect={closeOnSelect}
        {...rest}
      >
        {icon !== null ? (
          <MenuIcon opacity={isChecked ? 1 : 0}>
            {icon || <CheckIcon />}
          </MenuIcon>
        ) : null}
        {children}
      </MenuItem>
    )
  },
)

export interface MenuIconProps extends HTMLUIProps<"span"> {}

export const MenuIcon = forwardRef<MenuIconProps, "span">(
  ({ className, ...rest }, ref) => {
    const { styles } = useMenu()

    const css: CSSUIObject = {
      flexShrink: 0,
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "0.85em",
      ...styles.icon,
    }

    return (
      <ui.span
        ref={ref}
        className={cx("ui-menu__item__icon", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export interface MenuCommandProps extends HTMLUIProps<"span"> {}

export const MenuCommand = forwardRef<MenuCommandProps, "span">(
  ({ className, ...rest }, ref) => {
    const { styles } = useMenu()

    const css: CSSUIObject = { ...styles.command }

    return (
      <ui.span
        ref={ref}
        className={cx("ui-menu__item__command", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

const CheckIcon: FC = () => (
  <svg viewBox="0 0 14 14" width="1em" height="1em">
    <polygon
      fill="currentColor"
      points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
    />
  </svg>
)
