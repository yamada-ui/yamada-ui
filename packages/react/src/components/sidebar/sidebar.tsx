"use client"

import type { FC, PropsWithChildren, ReactNode } from "react"
import type {
  Breakpoint,
  ExtractStyleValue,
  HTMLProps,
  HTMLStyledProps,
  ThemeProps,
} from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { CollapseProps } from "../collapse"
import type { Loading } from "../loading"
import type { WithTransitionProps } from "../motion"
import type {
  UseSidebarGroupProps,
  UseSidebarGroupReturn,
  UseSidebarItemProps,
  UseSidebarItemReturn,
  UseSidebarProps,
  UseSidebarReturn,
} from "./use-sidebar"
import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useMemo,
} from "react"
import { createSlotComponent, mergeProps, styled } from "../../core"
import { useBreakpointValue } from "../../hooks/use-breakpoint"
import { useValue } from "../../hooks/use-value"
import {
  cast,
  createContext,
  dataAttr,
  isObject,
  isString,
  runIfFn,
  useIncludesChildren,
  useSplitChildren,
  useValidChildren,
} from "../../utils"
import { Collapse } from "../collapse"
import { Drawer } from "../drawer"
import { ChevronRightIcon } from "../icon"
import { useLoadingComponent } from "../loading"
import { Tooltip, type TooltipProps } from "../tooltip"
import { sidebarStyle, type SidebarStyle } from "./sidebar.style"
import {
  SidebarContext,
  SidebarDescendantsContext,
  SidebarItemContext,
  useSidebar,
  useSidebarContext,
  useSidebarGroup,
  useSidebarItem,
} from "./use-sidebar"

interface SidebarItemCallBackProps {
  disabled?: boolean
  expanded?: boolean
}

type SidebarItemReactNode =
  | ReactNodeOrFunction<SidebarItemCallBackProps>
  | {
      group: ReactNodeOrFunction<SidebarItemCallBackProps>
      item?: ReactNodeOrFunction<SidebarItemCallBackProps>
    }
  | {
      item: ReactNodeOrFunction<SidebarItemCallBackProps>
      group?: ReactNodeOrFunction<SidebarItemCallBackProps>
    }

interface SidebarItemSharedRenderProps
  extends
    Pick<SidebarItemProps, "label">,
    Pick<
      UseSidebarItemReturn,
      | "expanded"
      | "expandedValue"
      | "onExpandedChange"
      | "onSelectedChange"
      | "selected"
      | "selectedValue"
      | "value"
    > {
  itemProps: HTMLStyledProps<"li">
  linkProps: HTMLStyledProps<"a">
  triggerProps: HTMLStyledProps<"button">
  endElement?: ReactNode
  startElement?: ReactNode
}

interface SidebarItemRenderProps
  extends
    PropsWithChildren,
    Omit<SidebarItemSharedRenderProps, "endElement" | "startElement">,
    Pick<
      UseSidebarItemReturn,
      | "group"
      | "groupLoading"
      | "groupOpen"
      | "onGroupClose"
      | "onGroupOpen"
      | "onGroupToggle"
    > {
  endElement: { group?: ReactNode; item?: ReactNode }
  startElement: { group?: ReactNode; item?: ReactNode }
  indicator?: ReactNode
  link?: ReactNode
  trigger?: ReactNode
}

interface SidebarItemLinkRenderProps extends Omit<
  SidebarItemSharedRenderProps,
  "itemProps" | "triggerProps"
> {}

interface SidebarItemTriggerRenderProps
  extends
    Omit<SidebarItemSharedRenderProps, "itemProps" | "linkProps">,
    Pick<
      UseSidebarItemReturn,
      | "groupLoading"
      | "groupOpen"
      | "onGroupClose"
      | "onGroupOpen"
      | "onGroupToggle"
    > {
  indicator?: ReactNode
}

interface SidebarItemRender {
  item?: ReactNodeOrFunction<SidebarItemRenderProps>
  link?: ReactNodeOrFunction<SidebarItemLinkRenderProps>
  trigger?: ReactNodeOrFunction<SidebarItemTriggerRenderProps>
}

interface SidebarGroup extends Omit<SidebarGroupProps, "children" | "value"> {
  children: SidebarItemWithValue[]
  group: true
}

export interface SidebarItemWithValue extends Omit<
  SidebarItemProps,
  "children"
> {
  children?: SidebarItemWithValue[]
}

export type SidebarItem = SidebarGroup | SidebarItemWithValue

const createKey = (props: SidebarItem, index: number) => {
  return "value" in props ? props.value || index : index
}

const getReactNodeOrFunction = (
  type: "group" | "item",
  custom?: SidebarItemReactNode,
  root?: SidebarItemReactNode,
): ReactNodeOrFunction<SidebarItemCallBackProps> => {
  if (isObject(custom) && ("group" in custom || "item" in custom)) {
    return custom[type]
  } else if (custom) {
    return custom
  } else if (isObject(root) && ("group" in root || "item" in root)) {
    return root[type]
  } else {
    return root
  }
}

interface ComponentContext extends Pick<
  UseSidebarReturn,
  | "getContentProps"
  | "getFooterProps"
  | "getHeaderProps"
  | "getSidePanelProps"
  | "getTriggerProps"
> {
  breakpoint: ExtractStyleValue<NonNullable<SidebarRootProps["breakpoint"]>>
  mode: ExtractStyleValue<NonNullable<SidebarRootProps["mode"]>>
  placement: ExtractStyleValue<NonNullable<SidebarRootProps["placement"]>>
}

interface GroupComponentContext
  extends
    Pick<SidebarGroupProps, "contentProps" | "labelProps">,
    Pick<UseSidebarGroupReturn, "getContentProps" | "getLabelProps"> {}

const [GroupComponentContext, useGroupComponentContext] =
  createContext<GroupComponentContext>({ name: "GroupComponentContext" })

interface ItemComponentContext {
  contentProps: SidebarItemContentProps
  endElementProps: SidebarItemEndElementProps
  indicatorProps: SidebarItemIndicatorProps
  labelProps: SidebarItemLabelProps
  startElementProps: SidebarItemStartElementProps
  tooltipProps: SidebarItemTooltipProps
}

const [ItemComponentContext, useItemComponentContext] =
  createContext<ItemComponentContext>({ name: "ItemComponentContext" })

interface SidePanelComponentContext extends Pick<
  SidebarSidePanelProps,
  | "animated"
  | "contentProps"
  | "endElement"
  | "endElementProps"
  | "footerProps"
  | "groupContentProps"
  | "groupProps"
  | "handleProps"
  | "headerProps"
  | "indicator"
  | "indicatorHidden"
  | "indicatorProps"
  | "itemContentProps"
  | "itemProps"
  | "items"
  | "labelProps"
  | "linkProps"
  | "loadingScheme"
  | "menuProps"
  | "render"
  | "startElement"
  | "startElementProps"
  | "tooltipProps"
  | "triggerProps"
> {}

const [SidePanelComponentContext, useSidePanelComponentContext] =
  createContext<SidePanelComponentContext>({
    name: "SidePanelComponentContext",
  })

export interface SidebarRootProps
  extends
    HTMLStyledProps<"div">,
    ThemeProps<SidebarStyle>,
    Omit<UseSidebarProps, "mobile"> {
  /**
   * The breakpoint to use for the sidebar.
   *
   * @default 'md'
   */
  breakpoint?: Exclude<Breakpoint, "base">
}

const {
  ComponentContext,
  PropsContext: SidebarPropsContext,
  useComponentContext,
  usePropsContext: useSidebarPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<SidebarRootProps, SidebarStyle, ComponentContext>(
  "sidebar",
  sidebarStyle,
)

export { SidebarPropsContext, useSidebarPropsContext }

/**
 * `Sidebar` is a component that is used to display a list of items in a sidebar.
 *
 * @see https://yamada-ui.com/docs/components/sidebar
 */
export const SidebarRoot = withProvider<
  "div",
  SidebarRootProps,
  "mode" | "placement"
>(
  ({
    breakpoint = "md",
    mode: modeProp = "offcanvas",
    placement: placementProp = "start",
    ...rest
  }) => {
    const mobile =
      useBreakpointValue<boolean | undefined>({ [breakpoint]: true }) ?? false
    const mode = useValue(modeProp)
    const placement = useValue(placementProp)
    const {
      descendants,
      expandedValue,
      open,
      selectedValue,
      getContentProps,
      getFooterProps,
      getHeaderProps,
      getRootProps,
      getSidePanelProps,
      getTriggerProps,
      onClose,
      onExpandedChange,
      onOpen,
      onSelectedChange,
      onToggle,
    } = useSidebar({ mobile, ...rest })
    const context = useMemo(
      () => ({
        expandedValue,
        mobile,
        open,
        selectedValue,
        onClose,
        onExpandedChange,
        onOpen,
        onSelectedChange,
        onToggle,
      }),
      [
        mobile,
        expandedValue,
        open,
        selectedValue,
        onClose,
        onExpandedChange,
        onOpen,
        onSelectedChange,
        onToggle,
      ],
    )
    const componentContext = useMemo(
      () => ({
        breakpoint,
        mode,
        placement,
        getContentProps,
        getFooterProps,
        getHeaderProps,
        getSidePanelProps,
        getTriggerProps,
      }),
      [
        breakpoint,
        mode,
        placement,
        getContentProps,
        getFooterProps,
        getHeaderProps,
        getSidePanelProps,
        getTriggerProps,
      ],
    )

    return (
      <SidebarDescendantsContext value={descendants}>
        <SidebarContext value={context}>
          <ComponentContext value={componentContext}>
            <styled.div data-group {...getRootProps()} />
          </ComponentContext>
        </SidebarContext>
      </SidebarDescendantsContext>
    )
  },
  "root",
  { transferProps: ["mode", "placement"] },
)()

export interface SidebarMainPanelProps extends HTMLStyledProps {}

export const SidebarMainPanel = withContext<"div", SidebarMainPanelProps>(
  "div",
  "mainPanel",
)()

export interface SidebarTriggerProps extends HTMLStyledProps<"button"> {}

export const SidebarTrigger = withContext<"button", SidebarTriggerProps>(
  "button",
  "trigger",
)(undefined, (props) => {
  const { getTriggerProps } = useComponentContext()

  return { asChild: true, ...getTriggerProps(props) }
})

export interface SidebarSidePanelProps
  extends
    Omit<HTMLStyledProps<"aside">, "content">,
    Pick<SidebarContentProps, "items">,
    Pick<
      SidebarItemProps,
      | "animated"
      | "endElement"
      | "endElementProps"
      | "indicator"
      | "indicatorProps"
      | "labelProps"
      | "linkProps"
      | "loadingScheme"
      | "render"
      | "startElement"
      | "startElementProps"
      | "tooltipProps"
      | "triggerProps"
    > {
  /**
   * The content of the sidebar.
   */
  content?: ReactNode
  /**
   * The footer of the sidebar.
   */
  footer?: ReactNode
  /**
   * The header of the sidebar.
   */
  header?: ReactNode
  /**
   * If `true`, hide the tree indicator icon for all items.
   *
   * @default false
   */
  indicatorHidden?: boolean
  /**
   * If `true`, the sidebar will be rendered with a handle.
   *
   * @default true
   */
  withHandle?: boolean
  /**
   * Props for the content component.
   */
  contentProps?: SidebarContentProps
  /**
   * Props for the drawer component.
   */
  drawerProps?: Omit<
    Drawer.RootProps,
    | "body"
    | "cancel"
    | "children"
    | "footer"
    | "header"
    | "middle"
    | "onCancel"
    | "onClose"
    | "onMiddle"
    | "onOpen"
    | "onSuccess"
    | "open"
    | "success"
    | "title"
    | "trigger"
  >
  /**
   * Props for the footer component.
   */
  footerProps?: SidebarFooterProps
  /**
   * Props for the group content component.
   */
  groupContentProps?: Omit<SidebarGroupContentProps, "children">
  /**
   * Props for the group component.
   */
  groupProps?: Omit<SidebarGroupProps, "children" | "label" | "value">
  /**
   * Props for the handle component.
   */
  handleProps?: SidebarHandleProps
  /**
   * Props for the header component.
   */
  headerProps?: SidebarHeaderProps
  /**
   * Props for the item content component.
   */
  itemContentProps?: SidebarItemContentProps
  /**
   * Props for the item component.
   */
  itemProps?: Omit<
    SidebarItemProps,
    "children" | "items" | "label" | "open" | "value"
  >
  /**
   * Props for the menu component.
   *
   * @default 'md'
   */
  menuProps?: SidebarMenuProps
}

export const SidebarSidePanel = withContext<"aside", SidebarSidePanelProps>(
  ({
    animated = true,
    children,
    content,
    endElement,
    footer,
    header,
    indicator,
    indicatorHidden,
    items,
    loadingScheme,
    render,
    startElement,
    withHandle = true,
    contentProps,
    drawerProps,
    endElementProps,
    footerProps,
    groupContentProps,
    groupProps,
    handleProps,
    headerProps,
    indicatorProps,
    itemContentProps,
    itemProps,
    labelProps,
    linkProps,
    menuProps,
    startElementProps,
    tooltipProps,
    triggerProps,
    ...rest
  }) => {
    const { mobile, open, onClose } = useSidebarContext()
    const { breakpoint, placement, getSidePanelProps } = useComponentContext()
    const [
      omittedChildren,
      customHeader,
      customContent,
      customFooter,
      customHandle,
    ] = useSplitChildren(
      children,
      SidebarHeader,
      SidebarContent,
      SidebarFooter,
      SidebarHandle,
    )
    const context = useMemo(
      () => ({
        animated,
        endElement,
        indicator,
        indicatorHidden,
        items,
        loadingScheme,
        render,
        startElement,
        contentProps,
        endElementProps,
        footerProps,
        groupContentProps,
        groupProps,
        handleProps,
        headerProps,
        indicatorProps,
        itemContentProps,
        itemProps,
        labelProps,
        linkProps,
        menuProps,
        startElementProps,
        tooltipProps,
        triggerProps,
      }),
      [
        animated,
        endElement,
        indicator,
        indicatorHidden,
        items,
        render,
        loadingScheme,
        startElement,
        contentProps,
        endElementProps,
        footerProps,
        groupContentProps,
        groupProps,
        handleProps,
        headerProps,
        indicatorProps,
        itemContentProps,
        itemProps,
        labelProps,
        linkProps,
        menuProps,
        startElementProps,
        tooltipProps,
        triggerProps,
      ],
    )

    return (
      <SidePanelComponentContext value={context}>
        {mobile ? (
          <Drawer.Root
            size="sm"
            autoFocus={false}
            duration={!animated ? 0 : undefined}
            open={open}
            placement={`inline-${placement}`}
            withCloseButton={false}
            portalProps={{ disabled: true }}
            onClose={onClose}
            {...drawerProps}
          >
            <Drawer.Content>
              {customHeader ??
                (header ? <SidebarHeader>{header}</SidebarHeader> : null)}

              {customContent ??
                (content || items ? (
                  <SidebarContent>{content}</SidebarContent>
                ) : null)}

              {customFooter ??
                (footer ? <SidebarFooter>{footer}</SidebarFooter> : null)}
            </Drawer.Content>
          </Drawer.Root>
        ) : (
          <>
            <SidebarGap
              data-animated={dataAttr(animated)}
              display={{ base: undefined, [breakpoint]: "none" }}
            />

            <styled.aside
              data-animated={dataAttr(animated)}
              data-group
              display={{ base: undefined, [breakpoint]: "none" }}
              {...getSidePanelProps(rest)}
            >
              {customHeader ??
                (header ? <SidebarHeader>{header}</SidebarHeader> : null)}
              {customContent ??
                (content || items ? (
                  <SidebarContent>{content}</SidebarContent>
                ) : null)}
              {customFooter ??
                (footer ? <SidebarFooter>{footer}</SidebarFooter> : null)}
              {customHandle ?? (withHandle ? <SidebarHandle /> : null)}

              {omittedChildren}
            </styled.aside>
          </>
        )}
      </SidePanelComponentContext>
    )
  },
  "sidePanel",
)()

interface SidebarGapProps extends HTMLStyledProps<"div"> {}

const SidebarGap = withContext<"div", SidebarGapProps>("div", "gap")()

export interface SidebarHeaderProps extends HTMLStyledProps<"header"> {}

export const SidebarHeader = withContext<"header", SidebarHeaderProps>(
  "header",
  "header",
)(undefined, (props) => {
  const { getHeaderProps } = useComponentContext()
  const { headerProps } = useSidePanelComponentContext()

  return getHeaderProps(mergeProps(headerProps, props)())
})

export interface SidebarFooterProps extends HTMLStyledProps<"footer"> {}

export const SidebarFooter = withContext<"footer", SidebarFooterProps>(
  "footer",
  "footer",
)(undefined, (props) => {
  const { getFooterProps } = useComponentContext()
  const { footerProps } = useSidePanelComponentContext()

  return getFooterProps(mergeProps(footerProps, props)())
})

export interface SidebarContentProps extends HTMLStyledProps<"ul"> {
  /**
   * If provided, generate elements based on items.
   */
  items?: SidebarItem[]
}

export const SidebarContent = withContext<"ul", SidebarContentProps>(
  ({ children, items, ...rest }) => {
    const { getContentProps } = useComponentContext()
    const { items: rootItems, contentProps } = useSidePanelComponentContext()
    const computedChildren = useMemo(() => {
      if (children) return children

      return (items ?? rootItems)?.map((props, index) => {
        const key = createKey(props, index)

        if ("group" in props) {
          const { children, group: _, ...rest } = props

          return <SidebarGroup key={key} items={children} {...rest} />
        } else {
          const { children, ...rest } = props

          return <SidebarItem key={key} items={children} {...rest} />
        }
      })
    }, [children, items, rootItems])

    return (
      <styled.ul {...getContentProps(mergeProps(contentProps, rest)())}>
        {computedChildren}
      </styled.ul>
    )
  },
  "content",
)()

export interface SidebarHandleProps extends HTMLStyledProps<"button"> {}

export const SidebarHandle = withContext<"button", SidebarHandleProps>(
  (props) => {
    const { handleProps } = useSidePanelComponentContext()

    return (
      <SidebarTrigger {...mergeProps(handleProps, props)()}>
        <styled.button tabIndex={-1} />
      </SidebarTrigger>
    )
  },
  "handle",
)()

export interface SidebarGroupProps
  extends
    Omit<HTMLStyledProps<"li">, "content" | "value">,
    UseSidebarGroupProps {
  /**
   * If provided, generate elements based on items.
   */
  items?: SidebarItemWithValue[]
  /**
   * The label of the group.
   */
  label?: ReactNode
  /**
   * Props for the content component.
   */
  contentProps?: Omit<SidebarGroupContentProps, "children">
  /**
   * Props for the label component.
   */
  labelProps?: HTMLStyledProps<"span">
}

export const SidebarGroup = withContext<"li", SidebarGroupProps>(
  ({
    children,
    items,
    label,
    value: valueProp = isString(label) ? label : undefined,
    contentProps,
    labelProps,
    ...rest
  }) => {
    const { groupProps } = useSidePanelComponentContext()
    const computedChildren = useMemo(() => {
      if (children) return children

      return items?.map(({ children, ...rest }, index) => {
        const key = createKey(rest, index)

        return <SidebarItem key={key} items={children} {...rest} />
      })
    }, [children, items])
    const [omittedChildren, customLabel, customContent] = useSplitChildren(
      computedChildren,
      SidebarGroupLabel,
      SidebarGroupContent,
    )
    const { getContentProps, getLabelProps, getRootProps } = useSidebarGroup({
      ...mergeProps(groupProps, rest)(),
      value: valueProp,
    })
    const context = useMemo(
      () => ({ contentProps, getContentProps, getLabelProps, labelProps }),
      [getLabelProps, labelProps, getContentProps, contentProps],
    )

    return (
      <GroupComponentContext value={context}>
        <styled.li {...getRootProps()}>
          {customLabel ??
            (label ? <SidebarGroupLabel>{label}</SidebarGroupLabel> : null)}
          {customContent ?? (
            <SidebarGroupContent>{omittedChildren}</SidebarGroupContent>
          )}
        </styled.li>
      </GroupComponentContext>
    )
  },
  "group",
)()

export interface SidebarGroupLabelProps extends HTMLStyledProps<"span"> {}

export const SidebarGroupLabel = withContext<"span", SidebarGroupLabelProps>(
  "span",
  "groupLabel",
)(undefined, (props) => {
  const { getLabelProps, labelProps } = useGroupComponentContext()

  return getLabelProps(mergeProps(labelProps, props)())
})

export interface SidebarGroupContentProps extends HTMLStyledProps<"div"> {}

export const SidebarGroupContent = withContext<"div", SidebarGroupContentProps>(
  "div",
  "groupContent",
)(undefined, ({ children, ...rest }) => {
  const validChildren = useValidChildren(children)
  const list = useIncludesChildren(validChildren, SidebarItem)
  const { groupContentProps } = useSidePanelComponentContext()
  const { contentProps, getContentProps } = useGroupComponentContext()

  return {
    as: list ? "ul" : "div",
    children,
    ...getContentProps(mergeProps(groupContentProps, contentProps, rest)()),
  }
})

export interface SidebarMenuProps extends HTMLStyledProps<"div"> {}

export const SidebarMenu = withContext<"div", SidebarMenuProps>("div", "menu")(
  undefined,
  (props) => {
    const { menuProps } = useSidePanelComponentContext()

    return { "data-menu": "", ...mergeProps(menuProps, props)() }
  },
)

export interface SidebarMenuButtonProps extends HTMLStyledProps<"button"> {}

export const SidebarMenuButton = withContext<"button", SidebarMenuButtonProps>(
  "button",
  ["menu", "button"],
)(undefined, (props) => {
  const { open } = useSidebarContext()
  const { mode } = useComponentContext()
  const { menuProps } = useSidePanelComponentContext()
  const offcanvas = mode === "offcanvas"

  return {
    "data-menu": "",
    ...mergeProps(menuProps, props)(),
    tabIndex: !offcanvas || open ? 0 : -1,
  }
})

export interface SidebarItemProps
  extends
    Omit<HTMLStyledProps<"li">, "value">,
    Omit<UseSidebarItemProps, "asyncChildren"> {
  /**
   * The label to display in the item.
   */
  label: ReactNode
  /**
   * If `true`, the sidebar item will be animated.
   *
   * @default true
   */
  animated?: boolean
  /**
   * The element to display at the end of the item.
   */
  endElement?: SidebarItemReactNode
  /**
   * The sidebar item indicator icon to use.
   */
  indicator?: ReactNodeOrFunction<SidebarItemCallBackProps>
  /**
   * If provided, generate elements based on items.
   */
  items?: SidebarItemWithValue[]
  /**
   * The loading scheme.
   *
   * @default 'oval'
   */
  loadingScheme?: Loading.Scheme
  /**
   * If provided, the sidebar item will be rendered with custom components.
   */
  render?: SidebarItemRender
  /**
   * The element to display at the start of the item.
   */
  startElement?: SidebarItemReactNode
  /**
   * Props for the content component.
   */
  contentProps?: Omit<SidebarItemContentProps, "children">
  /**
   * Props for the end component.
   */
  endElementProps?: SidebarItemEndElementProps
  /**
   * Props for the indicator component.
   */
  indicatorProps?: SidebarItemIndicatorProps
  /**
   * Props for the label component.
   */
  labelProps?: SidebarItemLabelProps
  /**
   * Props for the link component.
   */
  linkProps?: SidebarItemLinkProps
  /**
   * Props for the start component.
   */
  startElementProps?: SidebarItemStartElementProps
  /**
   * Props for the tooltip component.
   */
  tooltipProps?: Omit<SidebarItemTooltipProps, "children" | "content">
  /**
   * Props for the trigger component.
   */
  triggerProps?: SidebarItemTriggerProps
  /**
   * If provided, the sidebar item will be rendered as an async sidebar item.
   */
  asyncChildren?: () => Promise<SidebarItemWithValue[]>
}

export const SidebarItem = withContext<"li", SidebarItemProps>(
  ({
    animated: animatedProp,
    asyncChildren: asyncChildrenProp,
    children: childrenProp,
    endElement,
    indicator: indicatorProp,
    items,
    label,
    loadingScheme,
    render,
    startElement,
    contentProps,
    endElementProps,
    indicatorProps,
    labelProps,
    linkProps,
    startElementProps,
    tooltipProps,
    triggerProps,
    ...rest
  }) => {
    const { mode } = useComponentContext()
    const offcanvas = mode === "offcanvas"
    const componentContext = useSidePanelComponentContext()
    const Loading = useLoadingComponent(
      loadingScheme ?? componentContext.loadingScheme ?? "oval",
    )
    const computedChildren = useMemo(() => {
      if (childrenProp) return childrenProp

      return items?.map(({ children, ...rest }, index) => {
        const key = createKey(rest, index)

        return <SidebarItem key={key} items={children} {...rest} />
      })
    }, [childrenProp, items])
    const asyncChildren = useCallback(async () => {
      const items = await asyncChildrenProp?.()

      return items?.map(({ children, ...rest }, index) => {
        const key = createKey(rest, index)

        return <SidebarItem key={key} items={children} {...rest} />
      })
    }, [asyncChildrenProp])
    const {
      branchOpen,
      children,
      disabled,
      expanded,
      expandedValue,
      group,
      groupLoading,
      groupOpen,
      open,
      selected,
      selectedValue,
      value,
      getContentProps,
      getIndicatorProps,
      getItemProps,
      getLabelProps,
      getLinkProps,
      getTriggerProps,
      onExpandedChange,
      onGroupClose,
      onGroupOpen,
      onGroupToggle,
      onSelectedChange,
    } = useSidebarItem({
      ...componentContext.itemProps,
      ...rest,
      asyncChildren: asyncChildrenProp ? asyncChildren : undefined,
      children: computedChildren,
    })
    const animated = animatedProp ?? componentContext.animated ?? true
    const tabIndex = offcanvas ? (open && expanded ? 0 : -1) : expanded ? 0 : -1
    const callbackProps = useMemo(
      () => ({ disabled, expanded: groupOpen }),
      [disabled, groupOpen],
    )
    const mergedTriggerProps = useMemo(() => {
      return getTriggerProps({
        tabIndex,
        ...mergeProps(componentContext.triggerProps, triggerProps)(),
      }) as SidebarItemTriggerProps
    }, [getTriggerProps, tabIndex, componentContext.triggerProps, triggerProps])
    const mergedLinkProps = useMemo(() => {
      return getLinkProps({
        tabIndex,
        ...mergeProps(componentContext.linkProps, linkProps)(),
      }) as SidebarItemLinkProps
    }, [getLinkProps, tabIndex, componentContext.linkProps, linkProps])
    const indicator = useMemo<ReactNode>(
      () => runIfFn(indicatorProp ?? componentContext.indicator, callbackProps),
      [indicatorProp, componentContext.indicator, callbackProps],
    )
    const groupStartElement = useMemo<ReactNode>(
      () =>
        runIfFn(
          getReactNodeOrFunction(
            "group",
            startElement,
            componentContext.startElement,
          ),
          callbackProps,
        ),
      [startElement, componentContext.startElement, callbackProps],
    )
    const groupEndElement = useMemo<ReactNode>(
      () =>
        runIfFn(
          getReactNodeOrFunction(
            "group",
            endElement,
            componentContext.endElement,
          ),
          callbackProps,
        ),
      [endElement, componentContext.endElement, callbackProps],
    )
    const itemStartElement = useMemo<ReactNode>(
      () =>
        runIfFn(
          getReactNodeOrFunction(
            "item",
            startElement,
            componentContext.startElement,
          ),
          callbackProps,
        ),
      [startElement, componentContext.startElement, callbackProps],
    )
    const itemEndElement = useMemo<ReactNode>(
      () =>
        runIfFn(
          getReactNodeOrFunction(
            "item",
            endElement,
            componentContext.endElement,
          ),
          callbackProps,
        ),
      [endElement, componentContext.endElement, callbackProps],
    )
    const trigger = useMemo<ReactNode>(
      () =>
        runIfFn(render?.trigger ?? componentContext.render?.trigger, {
          endElement: groupEndElement,
          expanded,
          expandedValue,
          groupLoading,
          groupOpen,
          indicator,
          label,
          selected,
          selectedValue,
          startElement: groupStartElement,
          value,
          triggerProps: mergedTriggerProps,
          onExpandedChange,
          onGroupClose,
          onGroupOpen,
          onGroupToggle,
          onSelectedChange,
        }),
      [
        render?.trigger,
        componentContext.render?.trigger,
        groupEndElement,
        expanded,
        expandedValue,
        groupLoading,
        groupOpen,
        indicator,
        label,
        selected,
        selectedValue,
        groupStartElement,
        value,
        mergedTriggerProps,
        onExpandedChange,
        onGroupClose,
        onGroupOpen,
        onGroupToggle,
        onSelectedChange,
      ],
    )
    const link = useMemo<ReactNode>(
      () =>
        runIfFn(render?.link ?? componentContext.render?.link, {
          endElement: itemEndElement,
          expanded,
          expandedValue,
          label,
          selected,
          selectedValue,
          startElement: itemStartElement,
          value,
          linkProps: mergedLinkProps,
          onExpandedChange,
          onSelectedChange,
        }),
      [
        render?.link,
        componentContext.render?.link,
        itemEndElement,
        expanded,
        expandedValue,
        label,
        selected,
        selectedValue,
        itemStartElement,
        value,
        mergedLinkProps,
        onExpandedChange,
        onSelectedChange,
      ],
    )
    const item = useMemo<ReactNode>(
      () =>
        runIfFn(render?.item ?? componentContext.render?.item, {
          children,
          endElement: { group: groupEndElement, item: itemEndElement },
          expanded,
          expandedValue,
          group,
          groupLoading,
          groupOpen,
          indicator,
          label,
          link,
          selected,
          selectedValue,
          startElement: { group: groupStartElement, item: itemStartElement },
          trigger,
          value,
          itemProps: getItemProps() as HTMLStyledProps<"li">,
          linkProps: mergedLinkProps,
          triggerProps: mergedTriggerProps,
          onExpandedChange,
          onGroupClose,
          onGroupOpen,
          onGroupToggle,
          onSelectedChange,
        }),
      [
        render?.item,
        componentContext.render?.item,
        children,
        groupEndElement,
        itemEndElement,
        expanded,
        expandedValue,
        group,
        groupLoading,
        groupOpen,
        indicator,
        label,
        link,
        selected,
        selectedValue,
        groupStartElement,
        itemStartElement,
        trigger,
        value,
        getItemProps,
        mergedLinkProps,
        mergedTriggerProps,
        onExpandedChange,
        onGroupClose,
        onGroupOpen,
        onGroupToggle,
        onSelectedChange,
      ],
    )
    const context = useMemo(
      () => ({ branchOpen, groupOpen }),
      [branchOpen, groupOpen],
    )
    const itemComponentContext = useMemo(
      () => ({
        contentProps: {
          duration: !animated ? 0 : undefined,
          open: groupOpen,
          ...getContentProps(
            mergeProps(componentContext.itemContentProps, contentProps)(),
          ),
        },
        endElementProps: mergeProps(
          componentContext.endElementProps,
          endElementProps,
        )(),
        indicatorProps: getIndicatorProps({
          "data-animated": dataAttr(animated),
          ...mergeProps(componentContext.indicatorProps, indicatorProps)(),
        }) as SidebarItemIndicatorProps,
        labelProps: getLabelProps(
          mergeProps(componentContext.labelProps, labelProps)(),
        ) as SidebarItemLabelProps,
        startElementProps: mergeProps(
          componentContext.startElementProps,
          startElementProps,
        )(),
        tooltipProps: {
          content: label,
          disabled: open,
          ...mergeProps(componentContext.tooltipProps, tooltipProps)(),
        },
      }),
      [
        animated,
        componentContext.endElementProps,
        componentContext.indicatorProps,
        componentContext.itemContentProps,
        componentContext.labelProps,
        componentContext.startElementProps,
        componentContext.tooltipProps,
        contentProps,
        endElementProps,
        getContentProps,
        getIndicatorProps,
        getLabelProps,
        groupOpen,
        indicatorProps,
        label,
        labelProps,
        open,
        startElementProps,
        tooltipProps,
      ],
    )

    return (
      <SidebarItemContext value={context}>
        <ItemComponentContext value={itemComponentContext}>
          {item ?? (
            <styled.li {...getItemProps()}>
              {group ? (
                <>
                  {trigger ?? (
                    <SidebarItemTrigger {...mergedTriggerProps}>
                      {groupStartElement ? (
                        <SidebarItemStartElement>
                          {groupStartElement}
                        </SidebarItemStartElement>
                      ) : null}
                      {label ? (
                        <SidebarItemLabel>{label}</SidebarItemLabel>
                      ) : null}
                      {groupEndElement ? (
                        <SidebarItemEndElement>
                          {groupEndElement}
                        </SidebarItemEndElement>
                      ) : null}
                      <SidebarItemIndicator>
                        {groupLoading ? (
                          <Loading />
                        ) : (
                          runIfFn(indicator, callbackProps)
                        )}
                      </SidebarItemIndicator>
                    </SidebarItemTrigger>
                  )}

                  <SidebarItemContent>{children}</SidebarItemContent>
                </>
              ) : (
                (link ?? (
                  <SidebarItemLink {...mergedLinkProps}>
                    {itemStartElement ? (
                      <SidebarItemStartElement>
                        {itemStartElement}
                      </SidebarItemStartElement>
                    ) : null}
                    {label ? (
                      <SidebarItemLabel>{label}</SidebarItemLabel>
                    ) : null}
                    {itemEndElement ? (
                      <SidebarItemEndElement>
                        {itemEndElement}
                      </SidebarItemEndElement>
                    ) : null}
                  </SidebarItemLink>
                ))
              )}
            </styled.li>
          )}
        </ItemComponentContext>
      </SidebarItemContext>
    )
  },
  "item",
)()

interface SidebarItemTooltipProps extends TooltipProps {}

const SidebarItemTooltip: FC<SidebarItemTooltipProps> = (props) => {
  const { tooltipProps } = useItemComponentContext()
  const { children, disabled, ...rest } = { ...tooltipProps, ...props }
  const { mode, placement } = useComponentContext()
  const offcanvas = mode === "offcanvas"

  if (offcanvas || disabled) {
    return children
  } else {
    return (
      <Tooltip
        closeOnClick={false}
        gutter={16}
        placement={`center-${placement === "start" ? "end" : "start"}`}
        {...rest}
      >
        {children}
      </Tooltip>
    )
  }
}

export interface SidebarItemTriggerProps extends HTMLStyledProps<"button"> {}

export const SidebarItemTrigger = withContext<
  "button",
  SidebarItemTriggerProps
>((props) => {
  return (
    <SidebarItemTooltip>
      <styled.button {...props} />
    </SidebarItemTooltip>
  )
}, "itemTrigger")()

export interface SidebarItemLinkProps extends HTMLStyledProps<"a"> {}

export const SidebarItemLink = withContext<"a", SidebarItemLinkProps>(
  (props) => {
    return (
      <SidebarItemTooltip>
        <styled.a {...props} />
      </SidebarItemTooltip>
    )
  },
  "itemLink",
)()

export interface SidebarItemContentProps
  extends
    Omit<HTMLStyledProps<"ul">, "transition">,
    Pick<CollapseProps, "animationOpacity" | keyof WithTransitionProps> {}

export const SidebarItemContent = withContext<"ul", SidebarItemContentProps>(
  (props) => {
    const { contentProps = {} } = useItemComponentContext()

    return (
      <Collapse
        as="ul"
        {...cast<CollapseProps>(mergeProps(contentProps, props)())}
      />
    )
  },
  "itemContent",
)()

export interface SidebarItemIndicatorProps extends HTMLStyledProps<"svg"> {}

export const SidebarItemIndicator = withContext<
  "svg",
  SidebarItemIndicatorProps
>(({ children = <ChevronRightIcon />, ...rest }) => {
  const { indicatorHidden } = useSidePanelComponentContext()

  if (indicatorHidden) return null

  if (isValidElement<HTMLProps<"svg">>(children))
    return cloneElement(children, { ...rest, ...children.props })

  return Children.count(children) > 1 ? Children.only(null) : null
}, "itemIndicator")(undefined, (props) => {
  const { indicatorProps } = useItemComponentContext()

  return mergeProps(indicatorProps, props)()
})

export interface SidebarItemStartElementProps extends HTMLStyledProps {}

export const SidebarItemStartElement = withContext<
  "div",
  SidebarItemStartElementProps
>("div", {
  name: "ItemStartElement",
  slot: ["itemElement", "start"],
})(undefined, (props) => {
  const { startElementProps } = useItemComponentContext()

  return mergeProps(startElementProps, props)()
})

export interface SidebarItemEndElementProps extends HTMLStyledProps {}

export const SidebarItemEndElement = withContext<
  "div",
  SidebarItemEndElementProps
>("div", {
  name: "ItemEndElement",
  slot: ["itemElement", "end"],
})(undefined, (props) => {
  const { endElementProps } = useItemComponentContext()

  return mergeProps(endElementProps, props)()
})

export interface SidebarItemLabelProps extends HTMLStyledProps<"span"> {}

export const SidebarItemLabel = withContext<"span", SidebarItemLabelProps>(
  "span",
  "itemLabel",
)(undefined, (props) => {
  const { labelProps } = useItemComponentContext()

  return mergeProps(labelProps, props)()
})
