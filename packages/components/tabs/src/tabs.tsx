import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { LazyMode } from "@yamada-ui/use-disclosure"
import type { TabListProps } from "./tab-list"
import type { TabPanelsProps } from "./tab-panels"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { cx, findChild, getValidChildren, pickChildren } from "@yamada-ui/utils"
import { useEffect, useId, useState } from "react"
import { Tab } from "./tab"
import { TabList } from "./tab-list"
import { TabPanel } from "./tab-panel"
import { TabPanels } from "./tab-panels"
import {
  DescendantsContextProvider,
  TabsProvider,
  useDescendants,
} from "./tabs-context"

export interface TabsOptions {
  /**
   * The alignment of the tabs.
   */
  align?: "center" | "end" | "start"
  /**
   * The index of the selected tab.
   */
  defaultIndex?: number
  /**
   * If `true`, disable ripple effects when pressing the tab.
   *
   * @default false
   */
  disableRipple?: boolean
  /**
   * The index of the selected tab.
   */
  index?: number
  /**
   * If `true`, tabs will stretch to width of the tablist.
   *
   * @default false
   */
  isFitted?: boolean
  /**
   * If `true`, rendering of the tab panel's will be deferred until it is selected.
   *
   * @default true
   */
  isLazy?: boolean
  /**
   * If `true`, the tabs will be manually activated and display its panel by pressing Space or Enter.
   *
   * If `false`, the tabs will be automatically activated and their panel is displayed when they receive focus.
   *
   * @default false
   */
  isManual?: boolean
  /**
   * The lazy behavior of tab panels' content when not active. Only works when `isLazy={true}`.
   *
   * - `unmount`: The content of inactive tab panels are always unmounted.
   * - `keepMounted`: The content of inactive tab panels is initially unmounted, but stays mounted when selected.
   *
   * @default 'unmount'
   */
  lazyBehavior?: LazyMode
  /**
   * The orientation of the tab list.
   *
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical"
  /**
   * Props for tab list component.
   */
  tabListProps?: TabListProps
  /**
   * Props for tab panels components.
   */
  tabPanelsProps?: TabPanelsProps
  /**
   * The callback invoked when the index changes.
   */
  onChange?: (index: number) => void
}

export interface TabsProps
  extends Omit<HTMLUIProps, "onChange">,
    ThemeProps<"Tabs">,
    TabsOptions {}

/**
 * `Tabs` is a component for switching between different display areas.
 *
 * @see Docs https://yamada-ui.com/components/disclosure/tabs
 */
export const Tabs = forwardRef<TabsProps, "div">(
  ({ align = "start", ...props }, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("Tabs", {
      align,
      ...props,
    })
    const {
      className,
      children,
      defaultIndex = 0,
      disableRipple = false,
      index,
      isFitted,
      isLazy = true,
      isManual,
      lazyBehavior = "keepMounted",
      orientation = "horizontal",
      tabListProps,
      tabPanelsProps,
      onChange,
      ...rest
    } = omitThemeProps(mergedProps)

    const [focusedIndex, setFocusedIndex] = useState<number>(defaultIndex)

    const [selectedIndex, setSelectedIndex] = useControllableState({
      defaultValue: defaultIndex,
      value: index,
      onChange,
    })

    const descendants = useDescendants()

    const validChildren = getValidChildren(children)

    const customTabList = findChild(validChildren, TabList)
    const customTabPanels = findChild(validChildren, TabPanels)
    const cloneTabs = pickChildren(validChildren, Tab)
    const cloneTabPanels = pickChildren(validChildren, TabPanel)

    useEffect(() => {
      if (index != null) setFocusedIndex(index)
    }, [index])

    const css: CSSUIObject = { w: "100%", ...styles.container }

    const uuid = useId()

    const tabPanelIds = cloneTabPanels.map(
      (panel, index) => panel.props.id ?? `${uuid}-${index}`,
    )

    const tabIds = cloneTabs.map(
      (tab, index) => tab.props.id ?? `${uuid}-${index}`,
    )

    return (
      <DescendantsContextProvider value={descendants}>
        <TabsProvider
          value={{
            align,
            disableRipple,
            focusedIndex,
            isFitted,
            isLazy,
            isManual,
            lazyBehavior,
            orientation,
            selectedIndex,
            setFocusedIndex,
            setSelectedIndex,
            styles,
            tabIds,
            tabPanelIds,
            tabListProps,
            tabPanelsProps,
          }}
        >
          <ui.div
            ref={ref}
            className={cx("ui-tabs", className)}
            __css={css}
            {...rest}
          >
            {customTabList ?? <TabList>{cloneTabs}</TabList>}
            {customTabPanels ?? <TabPanels>{cloneTabPanels}</TabPanels>}
          </ui.div>
        </TabsProvider>
      </DescendantsContextProvider>
    )
  },
)

Tabs.displayName = "Tabs"
Tabs.__ui__ = "Tabs"
