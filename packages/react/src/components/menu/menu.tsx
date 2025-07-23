"use client"

import type { FC, ReactElement, ReactNode } from "react"
import type {
  Direction,
  GenericsComponent,
  HTMLProps,
  HTMLStyledProps,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { MenuStyle } from "./menu.style"
import type {
  MenuOptionGroupType,
  MenuOptionGroupValue,
  UseMenuItemProps,
  UseMenuOptionGroupProps,
  UseMenuOptionItemProps,
  UseMenuProps,
  UseMenuReturn,
} from "./use-menu"
import { Fragment, useMemo, useState } from "react"
import { createSlotComponent, styled } from "../../core"
import { cast, handlerAll } from "../../utils"
import { CheckIcon, ChevronRightIcon, CircleSmallIcon } from "../icon"
import { Popover } from "../popover"
import { menuStyle } from "./menu.style"
import {
  MainMenuContext,
  MenuContext,
  MenuDescendantsContext,
  MenuOptionGroupContext,
  useMenu,
  useMenuContext,
  useMenuItem,
  useMenuOptionGroup,
  useMenuOptionItem,
} from "./use-menu"

interface MenuSharedItem {
  label?: ReactNode
}

interface MenuItemWithValue extends MenuSharedItem, MenuItemProps {}

interface MenuOptionItem extends MenuSharedItem, MenuOptionItemProps {}

interface MenuItemWithSeparator extends MenuSeparatorProps {
  type: "separator"
}

interface MenuItemWithRadioGroup<Y extends string = string>
  extends Omit<MenuItemWithItems, "defaultValue" | "items" | "onChange">,
    MenuOptionGroupProps<"radio", Y> {
  type: "radio"
  items?: MenuOptionItem[]
}

interface MenuItemWithCheckboxGroup<Y extends string[] = string[]>
  extends Omit<MenuItemWithItems, "defaultValue" | "items" | "onChange">,
    MenuOptionGroupProps<"checkbox", Y> {
  type: "checkbox"
  items?: MenuOptionItem[]
}

interface MenuItemWithItems extends MenuSharedItem, MenuGroupProps {
  hasEndSeparator?: boolean
  hasSeparator?: boolean
  hasStartSeparator?: boolean
  items?: MenuItemWithValue[]
  labelProps?: MenuLabelProps
}

interface ComponentContext
  extends Pick<
    UseMenuReturn,
    | "getContentProps"
    | "getContextTriggerProps"
    | "getGroupProps"
    | "getSeparatorProps"
    | "getTriggerProps"
  > {}

export interface MenuRootProps
  extends Omit<UseMenuProps, "autoFocus">,
    Omit<
      WithoutThemeProps<Popover.RootProps, MenuStyle>,
      "autoFocus" | "modal" | "withCloseButton"
    >,
    ThemeProps<MenuStyle> {
  /**
   * The placement of the popper relative to its reference.
   *
   * @default 'end-start'
   */
  placement?: Direction
}

const {
  ComponentContext,
  PropsContext: MenuPropsContext,
  StyleContext,
  useComponentContext,
  usePropsContext: useMenuPropsContext,
  withContext,
  useRootComponentProps,
} = createSlotComponent<MenuRootProps, MenuStyle, ComponentContext>(
  "menu",
  menuStyle,
)

export { MenuPropsContext, useMenuPropsContext }

/**
 * `Menu` is a component that displays a common dropdown menu.
 *
 * @see https://yamada-ui.com/components/menu
 */
export const MenuRoot: FC<MenuRootProps> = (props) => {
  const [
    styleContext,
    {
      animationScheme,
      autoUpdate,
      blockScrollOnMount,
      children,
      closeOnBlur,
      closeOnEsc,
      closeOnScroll,
      disabled,
      duration,
      elements,
      flip,
      gutter,
      initialFocusRef,
      matchWidth,
      middleware,
      offset,
      placement,
      platform,
      preventOverflow,
      strategy,
      transform,
      whileElementsMounted,
      ...rest
    },
  ] = useRootComponentProps(props)
  const {
    closeOnSelect,
    descendants,
    open,
    subMenu,
    subMenuDirection,
    updateRef,
    getContentProps,
    getContextTriggerProps,
    getGroupProps,
    getSeparatorProps,
    getTriggerProps,
    onActiveDescendant,
    onClose,
    onCloseRef,
    onOpen,
    onSelect,
  } = useMenu({ disabled, ...rest })
  const menuContext = useMemo(
    () => ({
      subMenu,
      subMenuDirection,
      onActiveDescendant,
      onClose,
      onOpen,
      onSelect,
    }),
    [onClose, onOpen, onSelect, onActiveDescendant, subMenu, subMenuDirection],
  )
  const mainMenuContext = useMemo(
    () => ({
      closeOnSelect,
      descendants,
      onActiveDescendant,
      onClose,
      onCloseRef,
      onSelect,
    }),
    [
      closeOnSelect,
      descendants,
      onActiveDescendant,
      onClose,
      onCloseRef,
      onSelect,
    ],
  )
  const componentContext = useMemo(
    () => ({
      getContentProps,
      getContextTriggerProps,
      getGroupProps,
      getSeparatorProps,
      getTriggerProps,
    }),
    [
      getContentProps,
      getGroupProps,
      getContextTriggerProps,
      getSeparatorProps,
      getTriggerProps,
    ],
  )

  return (
    <StyleContext value={styleContext}>
      <MenuDescendantsContext value={descendants}>
        <MenuContext value={menuContext}>
          <MainMenuContext value={mainMenuContext}>
            <ComponentContext value={componentContext}>
              <Popover.Root
                {...{
                  animationScheme:
                    animationScheme ??
                    (subMenu ? "inline-start" : "block-start"),
                  autoFocus: !!initialFocusRef,
                  autoUpdate,
                  blockScrollOnMount,
                  closeOnBlur,
                  closeOnEsc,
                  closeOnScroll,
                  disabled,
                  duration,
                  elements,
                  flip,
                  gutter,
                  initialFocusRef,
                  matchWidth,
                  middleware,
                  offset: offset ?? (subMenu ? [0, 0] : undefined),
                  open,
                  placement:
                    placement ??
                    (subMenu ? `center-${subMenuDirection}` : "end-start"),
                  platform,
                  preventOverflow,
                  strategy,
                  transform,
                  updateRef,
                  whileElementsMounted,
                  onClose,
                  onOpen,
                }}
              >
                {children}
              </Popover.Root>
            </ComponentContext>
          </MainMenuContext>
        </MenuContext>
      </MenuDescendantsContext>
    </StyleContext>
  )
}

export interface MenuTriggerProps extends Popover.TriggerProps {}

export const MenuTrigger = withContext<"button", MenuTriggerProps>(
  Popover.Trigger,
  "trigger",
)(undefined, (props) => {
  const { getTriggerProps } = useComponentContext()

  return cast<HTMLProps<"button">>(getTriggerProps(cast<HTMLProps>(props)))
})

interface Rect {
  left: number
  top: number
}

export interface MenuContextTriggerProps extends HTMLProps {}

export const MenuContextTrigger = withContext<"div", MenuContextTriggerProps>(
  ({ children, onContextMenu, ...rest }) => {
    const [rect, setRect] = useState<Rect>({
      left: 0,
      top: 0,
    })
    const { getContextTriggerProps } = useComponentContext()

    return (
      <>
        <MenuAnchor>
          <styled.div style={{ position: "absolute", ...rect }} />
        </MenuAnchor>

        <styled.div
          asChild
          {...getContextTriggerProps({
            onContextMenu: handlerAll(onContextMenu, (ev) => {
              setRect({ left: ev.pageX, top: ev.pageY })
            }),
            ...rest,
          })}
        >
          {children}
        </styled.div>
      </>
    )
  },
  "contextTrigger",
)()

export interface MenuAnchorProps extends Popover.AnchorProps {}

export const MenuAnchor = withContext<"div", MenuAnchorProps>(
  Popover.Anchor,
  "anchor",
)()

export interface MenuContentProps extends Popover.ContentProps {
  /**
   * If provided, generate elements based on items.
   */
  items?: (
    | MenuItemWithCheckboxGroup
    | MenuItemWithItems
    | MenuItemWithRadioGroup
    | MenuItemWithSeparator
    | MenuItemWithValue
  )[]
}

export const MenuContent = withContext<"div", MenuContentProps>(
  Popover.Content,
  "content",
)(undefined, ({ children, items = [], portalProps, ...rest }) => {
  const { subMenu } = useMenuContext()
  const { getContentProps } = useComponentContext()
  const computedChildren = useMemo(() => {
    if (children) return children

    return items.map((props, index) => {
      if ("type" in props) {
        if (props.type === "radio") {
          const {
            type,
            hasSeparator = true,
            hasEndSeparator = hasSeparator,
            hasStartSeparator = hasSeparator,
            items = [],
            label,
            labelProps,
            ...rest
          } = props

          return (
            <Fragment key={index}>
              {hasStartSeparator ? <MenuSeparator /> : null}

              {label ? <MenuLabel {...labelProps}>{label}</MenuLabel> : null}

              <MenuOptionGroup type={type} {...rest}>
                {items.map(({ label, ...rest }, index) => (
                  <MenuOptionItem key={index} {...rest}>
                    {label}
                  </MenuOptionItem>
                ))}
              </MenuOptionGroup>

              {hasEndSeparator ? <MenuSeparator /> : null}
            </Fragment>
          )
        } else if (props.type === "checkbox") {
          const {
            type,
            hasSeparator = true,
            hasEndSeparator = hasSeparator,
            hasStartSeparator = hasSeparator,
            items = [],
            label,
            labelProps,
            ...rest
          } = props

          return (
            <Fragment key={index}>
              {hasStartSeparator ? <MenuSeparator /> : null}

              {label ? <MenuLabel {...labelProps}>{label}</MenuLabel> : null}

              <MenuOptionGroup type={type} {...rest}>
                {items.map(({ label, ...rest }, index) => (
                  <MenuOptionItem key={index} {...rest}>
                    {label}
                  </MenuOptionItem>
                ))}
              </MenuOptionGroup>

              {hasEndSeparator ? <MenuSeparator /> : null}
            </Fragment>
          )
        } else {
          return <MenuSeparator key={index} />
        }
      } else if ("items" in props) {
        const {
          hasSeparator = true,
          hasEndSeparator = hasSeparator,
          hasStartSeparator = hasSeparator,
          items = [],
          label,
          labelProps,
          ...rest
        } = props

        return (
          <Fragment key={index}>
            {hasStartSeparator ? <MenuSeparator /> : null}

            {label ? <MenuLabel {...labelProps}>{label}</MenuLabel> : null}

            <MenuGroup {...rest}>
              {items.map(({ label, ...rest }, index) => (
                <MenuItem key={index} {...rest}>
                  {label}
                </MenuItem>
              ))}
            </MenuGroup>

            {hasEndSeparator ? <MenuSeparator /> : null}
          </Fragment>
        )
      } else if ("value" in props) {
        const { label, ...rest } = props
        return (
          <MenuItem key={index} {...rest}>
            {label}
          </MenuItem>
        )
      }
    })
  }, [children, items])

  return {
    ...getContentProps(
      cast<HTMLProps>({ ...rest, children: computedChildren }),
    ),
    portalProps: subMenu ? { ...portalProps, disabled: true } : portalProps,
  }
})

export interface MenuLabelProps extends HTMLStyledProps<"span"> {}

export const MenuLabel = withContext<"span", MenuLabelProps>(
  "span",
  "label",
)({
  role: "presentation",
})

export interface MenuGroupProps extends HTMLStyledProps {}

export const MenuGroup = withContext<"div", MenuGroupProps>("div", "group")(
  undefined,
  (props) => {
    const { getGroupProps } = useComponentContext()

    return getGroupProps(props)
  },
)

export interface MenuOptionGroupProps<
  Y extends MenuOptionGroupType = "checkbox",
  M extends MenuOptionGroupValue<Y> = MenuOptionGroupValue<Y>,
> extends UseMenuOptionGroupProps<Y, M>,
    Omit<MenuGroupProps, "defaultValue" | "onChange"> {}

export const MenuOptionGroup = withContext<"div", MenuOptionGroupProps>(
  ({
    type: typeProp,
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
    ...rest
  }) => {
    const { type, value, onChange } = useMenuOptionGroup({
      type: typeProp,
      defaultValue,
      value: valueProp,
      onChange: onChangeProp,
    })
    const { getGroupProps } = useComponentContext()
    const context = useMemo(
      () => ({ type, value, onChange }),
      [type, value, onChange],
    )

    return (
      <MenuOptionGroupContext value={context}>
        <styled.div {...getGroupProps(rest)} />
      </MenuOptionGroupContext>
    )
  },
  { name: "optionGroup", slot: ["group", "option"] },
)() as GenericsComponent<{
  <
    Y extends MenuOptionGroupType = "checkbox",
    M extends MenuOptionGroupValue<Y> = MenuOptionGroupValue<Y>,
  >(
    props: MenuOptionGroupProps<Y, M>,
  ): ReactElement
}>

export interface MenuItemProps extends HTMLStyledProps, UseMenuItemProps {}

export const MenuItem = withContext<"div", MenuItemProps>(
  ({ children, ...rest }) => {
    const { subMenuTrigger, getItemProps } = useMenuItem(rest)

    return (
      <styled.div {...getItemProps()}>
        {children}

        {subMenuTrigger ? (
          <MenuIndicator as={ChevronRightIcon} ms="auto" />
        ) : null}
      </styled.div>
    )
  },
  "item",
)()

export interface MenuOptionItemProps
  extends HTMLStyledProps,
    UseMenuOptionItemProps {}

export const MenuOptionItem = withContext<"div", MenuOptionItemProps>(
  ({ children, ...rest }) => {
    const { type, getIndicatorProps, getOptionItemProps } =
      useMenuOptionItem(rest)

    return (
      <styled.div {...getOptionItemProps()}>
        <MenuIndicator
          as={type === "radio" ? CircleSmallIcon : CheckIcon}
          {...getIndicatorProps()}
        />
        {children}
      </styled.div>
    )
  },
  { name: "optionItem", slot: ["item", "option"] },
)()

export interface MenuIndicatorProps extends HTMLStyledProps<"svg"> {}

export const MenuIndicator = withContext<"svg", MenuIndicatorProps>(
  "svg",
  "indicator",
)()

export interface MenuCommandProps extends HTMLStyledProps<"kbd"> {}

export const MenuCommand = withContext<"kbd", MenuCommandProps>(
  "kbd",
  "command",
)()

export interface MenuSeparatorProps extends HTMLStyledProps<"hr"> {}

export const MenuSeparator = withContext<"hr", MenuSeparatorProps>(
  "hr",
  "separator",
)(undefined, (props) => {
  const { getSeparatorProps } = useComponentContext()

  return getSeparatorProps(props)
})
