import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type {
  FC,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  ReactElement,
} from "react"
import { forwardRef, ui } from "@yamada-ui/core"
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
import { useCallback, useRef, useState } from "react"
import {
  UpstreamMenuItemProvider,
  useMenu,
  useMenuDescendant,
  useUpstreamMenuItem,
} from "./menu-context"

const isTargetMenuItem = (target: EventTarget | null) => {
  return (
    isHTMLElement(target) &&
    !!target.getAttribute("role")?.startsWith("menuitem")
  )
}

interface MenuItemOptions {
  /**
   * If `true`, the list element will be closed when selected.
   *
   * @default false
   */
  closeOnSelect?: boolean
  /**
   * Right-aligned label text content, useful for displaying hotkeys.
   */
  command?: string
  /**
   * The menu item icon to use.
   */
  icon?: ReactElement
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
}

export interface MenuItemProps extends HTMLUIProps<"li">, MenuItemOptions {}

export const MenuItem = forwardRef<MenuItemProps, "li">(
  (
    {
      className,
      children,
      closeOnSelect: customCloseOnSelect,
      command,
      icon,
      isDisabled,
      isFocusable,
      ...props
    },
    ref,
  ) => {
    const {
      closeOnSelect: generalCloseOnSelect,
      focusedIndex,
      isNested,
      isOpen,
      menuRef,
      requestAnimationFrameId,
      setFocusedIndex,
      styles,
      onClose,
      onUpstreamClose,
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
      ref: mergeRefs(register, itemRef, ref),
      isDisabled,
      isFocusable,
      onClick: handlerAll(props.onClick, onClick),
      onFocus: handlerAll(props.onFocus, onFocus),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown, onKeyDownRef.current),
      onMouseLeave: handlerAll(props.onMouseLeave, onMouseLeave),
      onMouseOver: handlerAll(props.onMouseOver, onMouseOver),
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
      alignItems: "center",
      color: "inherit",
      display: "flex",
      flex: "0 0 auto",
      gap: "0.75rem",
      outline: 0,
      textAlign: "start",
      textDecoration: "none",
      userSelect: "none",
      width: "100%",
      ...styles.item,
    }

    return (
      <UpstreamMenuItemProvider
        value={{
          hasDownstreamRef,
          setDownstreamOpen,
          onKeyDownRef,
          onUpstreamRestoreFocus: onRestoreFocus,
        }}
      >
        <ui.li
          {...rest}
          {...(isDownstreamOpen ? { "data-active": "" } : {})}
          className={cx("ui-menu__item", className)}
          role="menuitem"
          tabIndex={isFocused ? 0 : -1}
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
   * The type of the menu option item.
   */
  type?: "checkbox" | "radio"
  /**
   * The menu option item icon to use.
   */
  icon?: null | ReactElement
  /**
   * If `true`, the checkbox or radio will be checked.
   *
   * @default false
   */
  isChecked?: boolean
  /**
   * The value of the menu option item.
   */
  value?: string
}

export interface MenuOptionItemProps
  extends Omit<MenuItemProps, "command" | "icon" | "value">,
    MenuOptionItemOptions {}

export const MenuOptionItem = forwardRef<MenuOptionItemProps, "button">(
  (
    { className, children, closeOnSelect = false, icon, isChecked, ...rest },
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
      alignItems: "center",
      display: "inline-flex",
      flexShrink: 0,
      fontSize: "0.85em",
      justifyContent: "center",
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
  <svg height="1em" viewBox="0 0 14 14" width="1em">
    <polygon
      fill="currentColor"
      points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
    />
  </svg>
)
