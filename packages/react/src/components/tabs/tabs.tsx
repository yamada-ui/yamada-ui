import type { HTMLUIProps, ThemeProps } from "../../core"
import type { LazyMode } from "../../hooks/use-disclosure"
import type { TabListProps } from "./tab-list"
import type { TabPanelsProps } from "./tab-panels"
import { useEffect, useState } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { cx, findChild, getValidChildren, pickChildren } from "../../utils"
import { Tab } from "./tab"
import { TabList } from "./tab-list"
import { TabPanel } from "./tab-panel"
import { TabPanels } from "./tab-panels"
import {
  TabDescendantsContextProvider,
  TabPanelDescendantsContextProvider,
  TabsProvider,
  useTabDescendants,
  useTabPanelDescendants,
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
   * If `true`, tabs will stretch to width of the tablist.
   *
   * @default false
   */
  fitted?: boolean
  /**
   * The index of the selected tab.
   */
  index?: number
  /**
   * If `true`, tabs will stretch to width of the tablist.
   *
   * @default false
   *
   * @deprecated Use `fitted` instead.
   */
  isFitted?: boolean
  /**
   * If `true`, rendering of the tab panel's will be deferred until it is selected.
   *
   * @default true
   *
   * @deprecated Use `lazy` instead.
   */
  isLazy?: boolean
  /**
   * If `true`, the tabs will be manually activated and display its panel by pressing Space or Enter.
   *
   * If `false`, the tabs will be automatically activated and their panel is displayed when they receive focus.
   *
   * @default false
   *
   * @deprecated Use `manual` instead.
   */
  isManual?: boolean
  /**
   * If `true`, rendering of the tab panel's will be deferred until it is selected.
   *
   * @default true
   */
  lazy?: boolean
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
   * If `true`, the tabs will be manually activated and display its panel by pressing Space or Enter.
   *
   * If `false`, the tabs will be automatically activated and their panel is displayed when they receive focus.
   *
   * @default false
   */
  manual?: boolean
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
      isFitted,
      fitted = isFitted,
      index,
      isLazy = true,
      isManual,
      lazy = isLazy,
      lazyBehavior = "keepMounted",
      manual = isManual,
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
    const tabDescendants = useTabDescendants()
    const tabPanelDescendants = useTabPanelDescendants()
    const validChildren = getValidChildren(children)
    const customTabList = findChild(validChildren, TabList)
    const customTabPanels = findChild(validChildren, TabPanels)
    const cloneTabs = pickChildren(validChildren, Tab)
    const cloneTabPanels = pickChildren(validChildren, TabPanel)

    useEffect(() => {
      if (index != null) setFocusedIndex(index)
    }, [index])

    return (
      <TabDescendantsContextProvider value={tabDescendants}>
        <TabPanelDescendantsContextProvider value={tabPanelDescendants}>
          <TabsProvider
            value={{
              align,
              disableRipple,
              fitted,
              focusedIndex,
              lazy,
              lazyBehavior,
              manual,
              orientation,
              selectedIndex,
              setFocusedIndex,
              setSelectedIndex,
              styles,
              tabListProps,
              tabPanelsProps,
            }}
          >
            <ui.div
              ref={ref}
              className={cx("ui-tabs", className)}
              __css={styles.container}
              {...rest}
            >
              {customTabList ?? <TabList>{cloneTabs}</TabList>}
              {customTabPanels ?? <TabPanels>{cloneTabPanels}</TabPanels>}
            </ui.div>
          </TabsProvider>
        </TabPanelDescendantsContextProvider>
      </TabDescendantsContextProvider>
    )
  },
)

Tabs.displayName = "Tabs"
Tabs.__ui__ = "Tabs"
