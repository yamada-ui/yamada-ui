import type {
  Dispatch,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  ReactElement,
  ReactNode,
  RefAttributes,
  RefObject,
  SetStateAction,
} from "react"
import type { ComponentArgs, HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { IconProps } from "../icon"
import type { HTMLMotionPropsWithoutChildren } from "../motion"
import type { MenuStyle } from "./menu.style"
import {
  cloneElement,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react"
import { createSlotComponent, styled } from "../../core"
import { useClickable } from "../../hooks/use-clickable"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useDisclosure } from "../../hooks/use-disclosure"
import {
  assignRef,
  dataAttr,
  fnAll,
  getValidChildren,
  handlerAll,
  isActiveElement,
  isArray,
  isHTMLElement,
  isString,
  mergeRefs,
  useUnmountEffect,
  useUpdateEffect,
} from "../../utils"
import { Button } from "../button"
import { CheckIcon, ChevronDownIcon, MenuIcon } from "../icon"
import { Popover } from "../popover"
import {
  DescendantsContext,
  UpstreamMenuItemProvider,
  UpstreamMenuProvider,
  useDescendants,
  useMenuDescendant,
  useMenuDescendantsContext,
  useUpstreamMenu,
  useUpstreamMenuItem,
} from "./menu-context"
import { menuStyle } from "./menu.style"

const isTargetMenuItem = (target: EventTarget | null) =>
  isHTMLElement(target) && !!target.getAttribute("role")?.startsWith("menuitem")

export interface MenuContext {
  buttonRef: RefObject<HTMLButtonElement | null>
  focusedIndex: number
  menuRef: RefObject<HTMLDivElement | null>
  nested: boolean
  open: boolean
  requestAnimationFrameId: RefObject<null | number>
  setFocusedIndex: Dispatch<SetStateAction<number>>
  onClose: () => void
  onFocusFirstItem: () => void
  onFocusLastItem: () => void
  onOpen: () => void
  closeOnSelect?: boolean
  onUpstreamClose?: () => void
}

export interface MenuRootProps
  extends ThemeProps<MenuStyle>,
    Omit<Popover.RootProps, "closeOnButton" | "relatedRef"> {
  /**
   * If `true`, the list element will be closed when value is selected.
   *
   * @default true
   */
  closeOnSelect?: boolean
}

export const {
  ComponentContext: MenuContext,
  PropsContext: MenuPropsContext,
  useComponentContext: useMenuContext,
  usePropsContext: useMenuPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<MenuRootProps, MenuStyle, MenuContext>(
  "menu",
  menuStyle,
)

/**
 * `Menu` is a component that displays a common dropdown menu.
 *
 * @see https://yamada-ui.com/components/menu
 */
export const MenuRoot = withProvider<"div", MenuRootProps>((props) => {
  const { relatedRef, onDownstreamCloseMapRef, onUpstreamClose } =
    useUpstreamMenu() ?? {}
  const nested = !!relatedRef
  const {
    closeOnBlur = !nested,
    closeOnSelect = true,
    duration = 0.2,
    initialFocusRef,
    offset = nested ? [-8, 8] : undefined,
    placement = nested ? "end-start" : "start-end",
    onClose: onCloseProp,
    onOpen: onOpenProp,
    ...rest
  } = props
  const { hasDownstreamRef, setDownstreamOpen } = useUpstreamMenuItem() ?? {}
  const descendants = useDescendants()
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const timeoutIds = useRef<Set<any>>(new Set([]))
  const requestAnimationFrameId = useRef<null | number>(null)
  const onCloseMapRef = useRef<Map<string, () => void>>(new Map())

  const onFocusMenu = useCallback(() => {
    requestAnimationFrame(() =>
      menuRef.current?.focus({ preventScroll: false }),
    )
  }, [])

  const onFocusFirstItem = useCallback(() => {
    const id = setTimeout(() => {
      if (initialFocusRef) return

      const first = descendants.enabledFirstValue()

      if (first) setFocusedIndex(first.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, initialFocusRef])

  const onFocusLastItem = useCallback(() => {
    const id = setTimeout(() => {
      if (initialFocusRef) return

      const last = descendants.enabledLastValue()

      if (last) setFocusedIndex(last.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, initialFocusRef])

  const onOpenInternal = useCallback(() => {
    onOpenProp?.()

    if (!nested) onFocusMenu()
  }, [onOpenProp, nested, onFocusMenu])

  const onCloseInternal = useCallback(() => {
    onCloseProp?.()

    for (const onClose of onCloseMapRef.current.values()) {
      onClose()
    }
  }, [onCloseProp])

  const id = useId()
  const { open, onClose, onOpen } = useDisclosure({
    ...props,
    onClose: onCloseInternal,
    onOpen: onOpenInternal,
  })

  useEffect(() => {
    const onCloseMap = onDownstreamCloseMapRef?.current

    onCloseMap?.set(id, onClose)

    return () => {
      onCloseMap?.delete(id)
    }
  }, [id, onClose, onDownstreamCloseMapRef])

  useEffect(() => {
    if (setDownstreamOpen) setDownstreamOpen(open)
  }, [setDownstreamOpen, open])

  useEffect(() => {
    if (hasDownstreamRef) hasDownstreamRef.current = true

    return () => {
      if (hasDownstreamRef) hasDownstreamRef.current = false
    }
  })

  useUpdateEffect(() => {
    if (!open) setFocusedIndex(-1)
  }, [open])

  useUnmountEffect(() => {
    timeoutIds.current.forEach((id) => clearTimeout(id))
    timeoutIds.current.clear()
  })

  return (
    <DescendantsContext value={descendants}>
      <UpstreamMenuProvider
        value={{
          relatedRef: menuRef,
          onDownstreamCloseMapRef: onCloseMapRef,
          onUpstreamClose: fnAll(onUpstreamClose, onClose),
        }}
      >
        <MenuContext
          value={{
            buttonRef,
            closeOnSelect,
            focusedIndex,
            menuRef,
            nested,
            open,
            requestAnimationFrameId,
            setFocusedIndex,
            onClose,
            onFocusFirstItem,
            onFocusLastItem,
            onOpen,
            onUpstreamClose,
          }}
        >
          <Popover.Root
            {...{
              trigger: nested ? "hover" : "click",
              ...rest,
              closeOnBlur,
              closeOnButton: false,
              duration,
              initialFocusRef,
              offset,
              open,
              placement,
              relatedRef,
              onClose,
              onOpen,
            }}
          />
        </MenuContext>
      </UpstreamMenuProvider>
    </DescendantsContext>
  )
}, "root")()

export interface MenuButtonProps extends HTMLStyledProps<"button"> {}

export const MenuButton = withContext<"button", MenuButtonProps>(
  ({ id, ref, as, children, ...rest }) => {
    const { onKeyDownRef, onUpstreamRestoreFocus } = useUpstreamMenuItem() ?? {}
    const {
      buttonRef,
      open,
      onClose,
      onFocusFirstItem,
      onFocusLastItem,
      onOpen,
    } = useMenuContext()
    const uuid = useId()

    id ??= uuid

    const onKeyDown = useCallback(
      (ev: KeyboardEvent) => {
        if (ev.key === " ") ev.key = ev.code

        const actions: { [key: string]: Function } = {
          ArrowDown: fnAll(onOpen, onFocusFirstItem),
          ArrowUp: fnAll(onOpen, onFocusLastItem),
          Enter: fnAll(onOpen, onFocusFirstItem),
          Space: fnAll(onOpen, onFocusFirstItem),
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
          ArrowLeft: open ? fnAll(onUpstreamRestoreFocus, onClose) : undefined,
          ArrowRight: !open ? fnAll(onOpen, onFocusFirstItem) : undefined,
          Enter: !open ? fnAll(onOpen, onFocusFirstItem) : undefined,
          Space: !open ? fnAll(onOpen, onFocusFirstItem) : undefined,
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()

        action()
      },
      [open, onOpen, onFocusFirstItem, onUpstreamRestoreFocus, onClose],
    )

    assignRef(onKeyDownRef, onItemKeyDown)

    const Component = useMemo(() => (as ? styled(as) : Button), [as])

    return (
      <Popover.Trigger>
        <Component
          id={id}
          ref={mergeRefs(buttonRef, ref)}
          aria-haspopup="menu"
          {...rest}
          data-active={dataAttr(open)}
          onKeyDown={handlerAll(rest.onKeyDown, onKeyDown)}
        >
          {children}
        </Component>
      </Popover.Trigger>
    )
  },
  "button",
)()

export interface MenuItemButtonProps extends MenuButtonProps {
  icon?: ReactNode
  iconProps?: IconProps
  innerProps?: HTMLStyledProps<"span">
}

export const MenuItemButton = withContext<"div", MenuItemButtonProps>(
  ({ children, icon, iconProps, innerProps, ...rest }) => {
    return (
      <MenuButton flex="1" {...rest}>
        <styled.span as="span" flex="1" {...innerProps}>
          {children}
        </styled.span>

        <MenuIcon {...iconProps}>
          {icon ?? (
            <ChevronDownIcon fontSize="1.5em" transform="rotate(-90deg)" />
          )}
        </MenuIcon>
      </MenuButton>
    )
  },
  "item-button",
)()

export interface MenuItemProps extends HTMLStyledProps {
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
}

export const MenuItem = withContext<"div", MenuItemProps>(
  ({
    id,
    ref,
    children,
    closeOnSelect: customCloseOnSelect,
    command,
    disabled,
    focusable,
    icon,
    ...props
  }) => {
    const {
      closeOnSelect,
      focusedIndex,
      menuRef,
      nested,
      open,
      requestAnimationFrameId,
      setFocusedIndex,
      onClose,
      onUpstreamClose,
    } = useMenuContext()
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
            ? fnAll(onUpstreamRestoreFocus, onClose)
            : undefined,
          Space: !hasDownstreamRef.current
            ? fnAll(onUpstreamClose, onClose)
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
      } else if (
        menuRef.current &&
        !isActiveElement(menuRef.current, document)
      ) {
        menuRef.current.focus({ preventScroll: true })
      }

      return () => {
        if (id) cancelAnimationFrame(id)
      }
    }, [focused, trulyDisabled, menuRef, open])

    children =
      icon || command ? (
        <styled.span style={{ flex: 1 }}>{children}</styled.span>
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
        <styled.div
          id={id}
          data-focus={dataAttr(downstreamOpen)}
          {...rest}
          role={role}
          tabIndex={!downstreamOpen && focused ? 0 : -1}
        >
          {icon ? <MenuIcon>{icon}</MenuIcon> : null}
          {children}
          {command ? <MenuCommand>{command}</MenuCommand> : null}
        </styled.div>
      </UpstreamMenuItemProvider>
    )
  },
  "item",
)()

export interface MenuOptionItemProps
  extends Omit<MenuItemProps, "command" | "icon" | "value"> {
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
   * The value of the menu option item.
   */
  value?: string
}

export const MenuOptionItem = withContext<"div", MenuOptionItemProps>(
  ({ checked, children, closeOnSelect = false, icon, ...rest }) => {
    return (
      <MenuItem aria-checked={checked} closeOnSelect={closeOnSelect} {...rest}>
        {icon !== null ? (
          <MenuIcon opacity={checked ? 1 : 0}>
            {icon || <CheckIcon boxSize="4" />}
          </MenuIcon>
        ) : null}
        {children}
      </MenuItem>
    )
  },
  "option-item",
)()

interface MenuContentProps extends HTMLMotionPropsWithoutChildren {}

const MenuContent = withContext<"div", MenuContentProps>((props) => {
  const { buttonRef, focusedIndex, setFocusedIndex, onClose } = useMenuContext()

  const descendants = useMenuDescendantsContext()

  const activedescendantId = descendants.value(focusedIndex)?.node.id

  const onNext = useCallback(() => {
    const next = descendants.enabledNextValue(focusedIndex)

    if (next) setFocusedIndex(next.index)
  }, [descendants, focusedIndex, setFocusedIndex])

  const onPrev = useCallback(() => {
    const prev = descendants.enabledPrevValue(focusedIndex)

    if (prev) setFocusedIndex(prev.index)
  }, [descendants, focusedIndex, setFocusedIndex])

  const onFirst = useCallback(() => {
    const first = descendants.enabledFirstValue()

    if (first) setFocusedIndex(first.index)
  }, [descendants, setFocusedIndex])

  const onLast = useCallback(() => {
    const last = descendants.enabledLastValue()

    if (last) setFocusedIndex(last.index)
  }, [descendants, setFocusedIndex])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      const actions: { [key: string]: KeyboardEventHandler } = {
        ArrowDown: focusedIndex === -1 ? onFirst : onNext,
        ArrowUp: focusedIndex === -1 ? onLast : onPrev,
        End: onLast,
        Escape: onClose,
        Home: onFirst,
        Tab: onClose,
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      action(ev)
    },
    [focusedIndex, onClose, onFirst, onLast, onNext, onPrev],
  )

  return (
    <Popover.Content
      as="div"
      aria-activedescendant={activedescendantId}
      aria-labelledby={buttonRef.current?.id}
      role="menu"
      {...props}
      onKeyDown={handlerAll(props.onKeyDown, onKeyDown)}
    />
  )
}, "content")()

export interface MenuListProps extends HTMLStyledProps {
  contentProps?: MenuContentProps
}

export const MenuList = withContext<"div", MenuListProps>(
  ({ ref, children, contentProps, ...rest }) => {
    const { menuRef } = useMenuContext()

    return (
      <MenuContent {...contentProps}>
        <styled.div ref={mergeRefs(menuRef, ref)} tabIndex={-1} {...rest}>
          {children}
        </styled.div>
      </MenuContent>
    )
  },
  "list",
)()

export interface MenuGroupProps extends HTMLStyledProps {
  /**
   * The label of the group.
   */
  label?: string
  /**
   * Props for menu group element.
   */
  labelProps?: HTMLStyledProps<"header">
}

export const MenuGroup = withContext<"section", MenuGroupProps>(
  ({ children, label, labelProps, ...rest }) => {
    const id = useId()
    const labelId = labelProps?.id ?? id

    return (
      <styled.section aria-labelledby={labelId} role="group" {...rest}>
        {label ? (
          <MenuGroupHeader role="presentation" {...labelProps} id={labelId}>
            {label}
          </MenuGroupHeader>
        ) : null}

        <MenuItemGroup>{children}</MenuItemGroup>
      </styled.section>
    )
  },
  "group",
)()

interface MenuItemGroupProps extends HTMLStyledProps {}

const MenuItemGroup = withContext<"div", MenuItemGroupProps>(
  "div",
  "item-group",
)()

interface MenuGroupHeaderProps extends HTMLStyledProps<"header"> {}

const MenuGroupHeader = withContext<"header", MenuGroupHeaderProps>(
  "header",
  "groupLabel",
)()

interface MenuOptionGroupOptions<Y extends string | string[] = string> {
  /**
   * The type of the menu option group.
   *
   * @default 'checkbox'
   */
  type?: "checkbox" | "radio"
  /**
   * The initial value of the menu item group.
   */
  defaultValue?: Y
  /**
   * The value of the menu item group.
   */
  value?: Y
  /**
   * The callback fired when any children checkbox is checked or unchecked.
   */
  onChange?: (value: Y) => void
}

export interface MenuOptionGroupProps<Y extends string | string[] = string>
  extends Merge<MenuGroupProps, MenuOptionGroupOptions<Y>> {}

export const MenuOptionGroup = withContext<
  typeof MenuGroup,
  MenuOptionGroupProps
>(
  <Y extends string | string[] = string>({
    type,
    children,
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
    ...rest
  }: MenuOptionGroupProps<Y>) => {
    const radio = type === "radio"

    defaultValue ??= (radio ? "" : []) as Y

    const [value, setValue] = useControllableState({
      defaultValue,
      value: valueProp,
      onChange: onChangeProp,
    })

    const onChange = useCallback(
      (selectedValue: string) => {
        if (radio && isString(value)) setValue(selectedValue as Y)

        if (!radio && isArray(value)) {
          const nextValue = value.includes(selectedValue)
            ? value.filter((item) => item !== selectedValue)
            : value.concat(selectedValue)

          setValue(nextValue as Y)
        }
      },
      [radio, value, setValue],
    )

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) => {
      if (child.type !== MenuOptionItem) return child

      const onClick = (ev: MouseEvent) => {
        onChange(child.props.value)
        child.props.onClick?.(ev)
      }

      const checked =
        !radio && isArray(value)
          ? value.includes(child.props.value)
          : child.props.value === value

      return cloneElement(child, { type, checked, onClick })
    })

    return <MenuGroup {...rest}>{cloneChildren}</MenuGroup>
  },
  "option-group",
)() as ComponentArgs & {
  <Y extends string | string[] = string>(
    props: MenuOptionGroupProps<Y> & RefAttributes<HTMLDivElement>,
  ): ReactElement
}

export interface MenuCommandProps extends HTMLStyledProps<"span"> {}

export const MenuCommand = withContext<"span", MenuCommandProps>(
  "span",
  "command",
)()

export interface MenuSeparatorProps extends HTMLStyledProps<"hr"> {}

export const MenuSeparator = withContext<"hr", MenuSeparatorProps>(
  "hr",
  "separator",
)()
