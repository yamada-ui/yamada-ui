"use client"

import type { FC, PropsWithChildren, ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { UseLazyMountProps } from "../../hooks/use-lazy-mount"
import type { TabsStyle } from "./tabs.style"
import type { UseTabPanelProps, UseTabProps, UseTabsProps } from "./use-tabs"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useLazyMount } from "../../hooks/use-lazy-mount"
import { useValue } from "../../hooks/use-value"
import { isNull, isUndefined } from "../../utils"
import { tabsStyle } from "./tabs.style"
import {
  TabDescendantsContext,
  TabPanelDescendantsContext,
  TabsContext,
  useTab,
  useTabPanel,
  useTabs,
  useTabsContext,
} from "./use-tabs"

interface ComponentContext
  extends Pick<TabsRootProps, "items" | "lazy" | "lazyBehavior"> {}

interface TabsItem extends TabsTabProps {
  /**
   * The content for panel element.
   */
  panel: ReactNode
  /**
   * The content for tab element.
   */
  tab: ReactNode
  /**
   * Props for panel element.
   */
  panelProps?: TabsPanelProps
}

export interface TabsRootProps
  extends Omit<HTMLStyledProps, "onChange">,
    Omit<UseTabsProps, "orientation">,
    Pick<UseLazyMountProps, "lazy" | "lazyBehavior">,
    ThemeProps<TabsStyle> {
  /**
   * If provided, generate tab and panel components based on tabs.
   */
  items?: TabsItem[]
}

const {
  ComponentContext,
  PropsContext: TabsPropsContext,
  useComponentContext,
  usePropsContext: useTabsPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<TabsRootProps, TabsStyle, ComponentContext>(
  "tabs",
  tabsStyle,
)

export { TabsPropsContext, useTabsPropsContext }

/**
 * `Tabs` is a component for switching between different display areas.
 *
 * @see https://yamada-ui.com/components/tabs
 */
export const TabsRoot: FC<TabsRootProps> = withProvider(
  ({
    children,
    items,
    lazy,
    lazyBehavior,
    orientation: orientationProp,
    ...rest
  }) => {
    const computedOrientation = useValue(orientationProp)
    const {
      focusedIndex,
      index,
      manual,
      orientation,
      setFocusedIndex,
      setIndex,
      tabDescendants,
      tabPanelDescendants,
      getListProps,
      getRootProps,
    } = useTabs({ orientation: computedOrientation, ...rest })
    const componentContext = useMemo(
      () => ({ items, lazy, lazyBehavior }),
      [items, lazy, lazyBehavior],
    )
    const tabsContext = useMemo(
      () => ({
        focusedIndex,
        index,
        manual,
        orientation,
        setFocusedIndex,
        setIndex,
        getListProps,
      }),
      [
        manual,
        focusedIndex,
        index,
        orientation,
        setFocusedIndex,
        setIndex,
        getListProps,
      ],
    )

    return (
      <TabDescendantsContext value={tabDescendants}>
        <TabPanelDescendantsContext value={tabPanelDescendants}>
          <TabsContext value={tabsContext}>
            <ComponentContext value={componentContext}>
              <styled.div {...getRootProps()}>{children}</styled.div>
            </ComponentContext>
          </TabsContext>
        </TabPanelDescendantsContext>
      </TabDescendantsContext>
    )
  },
  "root",
  { transferProps: ["orientation"] },
)()

export interface TabsListProps extends HTMLStyledProps {}

export const TabsList = withContext<"div", TabsListProps>(
  ({ children, ...rest }) => {
    const { items } = useComponentContext()
    const { getListProps } = useTabsContext()
    const computedChildren = useMemo(() => {
      if (children) {
        return children
      } else {
        return items?.map(
          (
            { id, panel: _panel, tab, panelProps: _panelProps, ...rest },
            index,
          ) =>
            isUndefined(tab) || isNull(tab) ? null : (
              <TabsTab id={id} key={id ?? index} {...rest}>
                {tab}
              </TabsTab>
            ),
        )
      }
    }, [children, items])

    return <styled.div {...getListProps(rest)}>{computedChildren}</styled.div>
  },
  "list",
)()

export interface TabsTabProps extends HTMLStyledProps<"button">, UseTabProps {}

export const TabsTab = withContext<"button", TabsTabProps>("button", "tab")(
  undefined,
  (props) => {
    const { getRootProps } = useTab(props)

    return getRootProps()
  },
)

export interface TabsPanelsProps extends PropsWithChildren {}

export const TabsPanels: FC<TabsPanelsProps> = ({ children }) => {
  const { items } = useComponentContext()

  return useMemo(() => {
    if (children) {
      return children
    } else {
      return items?.map(({ id, panel, panelProps }, index) =>
        isUndefined(panel) || isNull(panel) ? null : (
          <TabsPanel key={id ?? index} {...panelProps}>
            {panel}
          </TabsPanel>
        ),
      )
    }
  }, [children, items])
}

export interface TabsPanelProps extends HTMLStyledProps, UseTabPanelProps {}

export const TabsPanel = withContext<"div", TabsPanelProps>("div", "panel")(
  undefined,
  (props) => {
    const { lazy, lazyBehavior } = useComponentContext()
    const { selected: mounted, getRootProps } = useTabPanel(props)
    const children = useLazyMount({ lazy, lazyBehavior, mounted, ...props })

    return { ...getRootProps(), children }
  },
)
