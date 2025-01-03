import type {
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  ReactElement,
} from "react"
import type { HTMLUIProps } from "../../core"
import { useCallback, useId, useRef, useState } from "react"
import { forwardRef, ui } from "../../core"
import { useClickable } from "../../hooks/use-clickable"
import {
  cx,
  dataAttr,
  funcAll,
  handlerAll,
  isActiveElement,
  isHTMLElement,
  mergeRefs,
  useUpdateEffect,
} from "../../utils"
import { CheckIcon } from "../icon"
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
  /**
   * The menu item icon to use.
   */
  icon?: ReactElement
  /**
   * If `true`, the menu item will be disabled.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
  /**
   * If `true`, the menu item will be focusable.
   *
   * @default false
   *
   * @deprecated Use `focusable` instead.
   */
  isFocusable?: boolean
}

export interface MenuItemProps extends HTMLUIProps, MenuItemOptions {}

export const MenuItem = forwardRef<MenuItemProps, "div">(
  (
    {
      id,
      className,
      children,
      closeOnSelect: customCloseOnSelect,
      command,
      isDisabled,
      disabled = isDisabled,
      isFocusable,
      focusable = isFocusable,
      icon,
      ...props
    },
    ref,
  ) => {
    const {
      closeOnSelect,
      focusedIndex,
      menuRef,
      nested,
      open,
      requestAnimationFrameId,
      setFocusedIndex,
      styles,
      onClose,
      onUpstreamClose,
    } = useMenu()
    const { onUpstreamRestoreFocus } = useUpstreamMenuItem() ?? {}
    const [downstreamOpen, setDownstreamOpen] = useState<boolean>(false)
    const uuid = useId()
    const itemRef = useRef<HTMLDivElement>(null)
    const hasDownstreamRef = useRef<boolean>(false)
    const onKeyDownRef = useRef<KeyboardEventHandler<HTMLDivElement>>(
      () => void 0,
    )
    const trulyDisabled = disabled && !focusable
    const type = itemRef.current?.getAttribute("type")
    const role = !!type
      ? type === "checkbox"
        ? "menuitemcheckbox"
        : "menuitemradio"
      : "menuitem"
    const { index, register } = useMenuDescendant({ disabled: trulyDisabled })
    const focused = index === focusedIndex

    id ??= uuid

    const onMouseOver = useCallback(() => {
      if (disabled) return

      setFocusedIndex(index)
    }, [index, disabled, setFocusedIndex])

    const onMouseLeave = useCallback(() => {
      if (disabled) return

      setFocusedIndex(-1)
    }, [setFocusedIndex, disabled])

    const onClick = useCallback(
      (ev: MouseEvent<HTMLDivElement>) => {
        if (!isTargetMenuItem(ev.currentTarget)) return

        const hasDownstream = hasDownstreamRef.current

        if (customCloseOnSelect ?? (!hasDownstream && closeOnSelect)) {
          onClose()
          onUpstreamClose?.()
        }
      },
      [customCloseOnSelect, closeOnSelect, onClose, onUpstreamClose],
    )

    const onFocus = useCallback(() => {
      setFocusedIndex(index)
    }, [setFocusedIndex, index])

    const onRestoreFocus = useCallback(() => {
      itemRef.current?.focus()

      setFocusedIndex(index)
    }, [setFocusedIndex, index])

    const onKeyDown = useCallback(
      (ev: KeyboardEvent<HTMLDivElement>) => {
        if (ev.key === " ") ev.key = ev.code

        const actions: { [key: string]: Function | undefined } = {
          ArrowLeft: nested
            ? funcAll(onUpstreamRestoreFocus, onClose)
            : undefined,
          Space: !hasDownstreamRef.current
            ? funcAll(onUpstreamClose, onClose)
            : undefined,
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()
        ev.stopPropagation()

        action()
      },
      [nested, onUpstreamRestoreFocus, onClose, onUpstreamClose],
    )

    const rest = useClickable<HTMLDivElement>({
      clickOnSpace: false,
      focusOnClick: false,
      ...props,
      ref: mergeRefs(register, itemRef, ref),
      disabled,
      focusable,
      onClick: handlerAll(props.onClick, onClick),
      onFocus: handlerAll(props.onFocus, onFocus),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown, onKeyDownRef.current),
      onMouseLeave: handlerAll(props.onMouseLeave, onMouseLeave),
      onMouseOver: handlerAll(props.onMouseOver, onMouseOver),
    })

    useUpdateEffect(() => {
      if (!open) return

      const id = requestAnimationFrameId.current

      if (focused && !trulyDisabled && itemRef.current) {
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
    }, [focused, trulyDisabled, menuRef, open])

    children =
      icon || command ? (
        <ui.span style={{ flex: 1 }}>{children}</ui.span>
      ) : (
        children
      )

    return (
      <UpstreamMenuItemProvider
        value={{
          hasDownstreamRef,
          setDownstreamOpen,
          onKeyDownRef,
          onUpstreamRestoreFocus: onRestoreFocus,
        }}
      >
        <ui.div
          id={id}
          className={cx("ui-menu__item", className)}
          data-focus={dataAttr(downstreamOpen)}
          __css={styles.item}
          {...rest}
          role={role}
          tabIndex={!downstreamOpen && focused ? 0 : -1}
        >
          {icon ? <MenuIcon>{icon}</MenuIcon> : null}
          {children}
          {command ? <MenuCommand>{command}</MenuCommand> : null}
        </ui.div>
      </UpstreamMenuItemProvider>
    )
  },
)

MenuItem.displayName = "MenuItem"
MenuItem.__ui__ = "MenuItem"

interface MenuOptionItemOptions {
  /**
   * The type of the menu option item.
   */
  type?: "checkbox" | "radio"
  /**
   * If `true`, the checkbox or radio will be checked.
   *
   * @default false
   */
  checked?: boolean
  /**
   * The menu option item icon to use.
   */
  icon?: null | ReactElement
  /**
   * If `true`, the checkbox or radio will be checked.
   *
   * @default false
   *
   * @deprecated Use `checked` instead.
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
    {
      className,
      isChecked,
      checked = isChecked,
      children,
      closeOnSelect = false,
      icon,
      ...rest
    },
    ref,
  ) => {
    return (
      <MenuItem
        ref={ref}
        className={cx("ui-menu__item--option", className)}
        aria-checked={checked}
        closeOnSelect={closeOnSelect}
        {...rest}
      >
        {icon !== null ? (
          <MenuIcon opacity={checked ? 1 : 0}>
            {icon || <CheckIcon boxSize="4" />}
          </MenuIcon>
        ) : null}
        {children}
      </MenuItem>
    )
  },
)

MenuOptionItem.displayName = "MenuOptionItem"
MenuOptionItem.__ui__ = "MenuOptionItem"

export interface MenuIconProps extends HTMLUIProps<"span"> {}

export const MenuIcon = forwardRef<MenuIconProps, "span">(
  ({ className, ...rest }, ref) => {
    const { styles } = useMenu()

    return (
      <ui.span
        ref={ref}
        className={cx("ui-menu__item__icon", className)}
        aria-hidden
        __css={styles.icon}
        {...rest}
      />
    )
  },
)

MenuIcon.displayName = "MenuIcon"
MenuIcon.__ui__ = "MenuIcon"

export interface MenuCommandProps extends HTMLUIProps<"span"> {}

export const MenuCommand = forwardRef<MenuCommandProps, "span">(
  ({ className, ...rest }, ref) => {
    const { styles } = useMenu()

    return (
      <ui.span
        ref={ref}
        className={cx("ui-menu__item__command", className)}
        __css={styles.command}
        {...rest}
      />
    )
  },
)

MenuCommand.displayName = "MenuCommand"
MenuCommand.__ui__ = "MenuCommand"
