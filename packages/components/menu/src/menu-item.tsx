import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { useClickable } from "@yamada-ui/use-clickable"
import {
  ariaAttr,
  createContext,
  cx,
  funcAll,
  handlerAll,
  isActiveElement,
  isHTMLElement,
  mergeRefs,
  useUpdateEffect,
} from "@yamada-ui/utils"
import type {
  Dispatch,
  FC,
  FocusEvent,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  MutableRefObject,
  ReactElement,
  RefObject,
  SetStateAction,
} from "react"
import { useCallback, useRef, useState } from "react"
import { useMenu, useMenuDescendant } from "./menu"

type UpstreamMenuItemContext = {
  onUpstreamRestoreFocus: () => void
  onKeyDownRef: RefObject<KeyboardEventHandler<HTMLButtonElement>>
  setDownstreamOpen: Dispatch<SetStateAction<boolean>>
  hasDownstreamRef: MutableRefObject<boolean>
}

export const [UpstreamMenuItemProvider, useUpstreamMenuItem] =
  createContext<UpstreamMenuItemContext>({
    strict: false,
    name: "UpstreamMenuItemContext",
  })

const isTargetMenuItem = (target: EventTarget | null) => {
  return (
    isHTMLElement(target) &&
    !!target?.getAttribute("role")?.startsWith("menu-item")
  )
}

type MenuItemOptions = {
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

export type MenuItemProps = HTMLUIProps<"button"> & MenuItemOptions

export const MenuItem = forwardRef<MenuItemProps, "button">(
  (
    {
      as,
      className,
      type,
      isDisabled,
      isFocusable,
      closeOnSelect: customCloseOnSelect,
      icon,
      command,
      children,
      onClick: onClickProp,
      onFocus: onFocusProp,
      onMouseEnter: onMouseEnterProp,
      onMouseMove: onMouseMoveProp,
      onMouseLeave: onMouseLeaveProp,
      onKeyDown: onKeyDownProp,
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

    const buttonRef = useRef<HTMLButtonElement>(null)
    const hasDownstreamRef = useRef<boolean>(false)
    const onKeyDownRef = useRef<KeyboardEventHandler<HTMLButtonElement>>(
      () => void 0,
    )
    const { index, register } = useMenuDescendant({ disabled: trulyDisabled })
    const [isDownstreamOpen, setDownstreamOpen] = useState<boolean>(false)

    const isFocused = index === focusedIndex

    const onMouseEnter = useCallback(
      (event: any) => {
        onMouseEnterProp?.(event)

        if (isDisabled) return

        setFocusedIndex(index)
      },
      [setFocusedIndex, index, isDisabled, onMouseEnterProp],
    )

    const onMouseMove = useCallback(
      (event: any) => {
        onMouseMoveProp?.(event)

        if (buttonRef.current && !isActiveElement(buttonRef.current))
          onMouseEnter(event)
      },
      [onMouseEnter, onMouseMoveProp],
    )

    const onMouseLeave = useCallback(
      (event: any) => {
        onMouseLeaveProp?.(event)

        if (isDisabled) return

        setFocusedIndex(-1)
      },
      [setFocusedIndex, isDisabled, onMouseLeaveProp],
    )

    const onClick = useCallback(
      (ev: MouseEvent<HTMLButtonElement>) => {
        onClickProp?.(ev)

        if (!isTargetMenuItem(ev.currentTarget)) return

        const hasDownstream = hasDownstreamRef.current

        if (customCloseOnSelect ?? (!hasDownstream && generalCloseOnSelect)) {
          onClose()
          onUpstreamClose?.()
        }
      },
      [
        onClickProp,
        customCloseOnSelect,
        generalCloseOnSelect,
        onClose,
        onUpstreamClose,
      ],
    )

    const onFocus = useCallback(
      (ev: FocusEvent<HTMLButtonElement>) => {
        onFocusProp?.(ev)

        setFocusedIndex(index)
      },
      [onFocusProp, setFocusedIndex, index],
    )

    const onRestoreFocus = useCallback(() => {
      buttonRef.current?.focus()

      setFocusedIndex(index)
    }, [setFocusedIndex, index])

    const onKeyDown = useCallback(
      (ev: KeyboardEvent<HTMLButtonElement>) => {
        onKeyDownProp?.(ev)

        const actions: Record<string, Function | undefined> = {
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
      [onKeyDownProp, onUpstreamRestoreFocus, onClose, isNested],
    )

    const rest = useClickable<HTMLButtonElement>({
      focusOnClick: false,
      ...props,
      onClick,
      onFocus,
      onMouseEnter,
      onMouseMove,
      onMouseLeave,
      onKeyDown: handlerAll(onKeyDown, onKeyDownRef.current),
      ref: mergeRefs(register, buttonRef, ref),
      isDisabled,
      isFocusable,
    })

    useUpdateEffect(() => {
      if (!isOpen) return

      const id = requestAnimationFrameId.current

      if (isFocused && !trulyDisabled && buttonRef.current) {
        if (id) cancelAnimationFrame(id)

        requestAnimationFrameId.current = requestAnimationFrame(() => {
          buttonRef.current?.focus({ preventScroll: true })

          requestAnimationFrameId.current = null
        })
      } else if (menuRef.current && !isActiveElement(menuRef.current)) {
        menuRef.current.focus({ preventScroll: true })
      }

      return () => {
        if (id) cancelAnimationFrame(id)
      }
    }, [isFocused, trulyDisabled, menuRef, isOpen])

    type = as || type ? type ?? undefined : "button"

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
          as={as}
          type={type}
          role="menu-item"
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

type MenuOptionItemOptions = {
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

export type MenuOptionItemProps = Omit<MenuItemProps, "icon" | "command"> &
  MenuOptionItemOptions

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

export type MenuIconProps = HTMLUIProps<"span">

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
        className={cx("ui-menu__item-icon", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type MenuCommandProps = HTMLUIProps<"span">

export const MenuCommand = forwardRef<MenuCommandProps, "span">(
  ({ className, ...rest }, ref) => {
    const { styles } = useMenu()

    const css: CSSUIObject = { ...styles.command }

    return (
      <ui.span
        ref={ref}
        className={cx("ui-menu__item-command", className)}
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
