import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import type { LazyMode } from "@yamada-ui/use-disclosure"
import { cx, pickChildren, getValidChildren, findChild } from "@yamada-ui/utils"
import { useEffect, useState } from "react"
import { Tab } from "./tab"
import type { TabListProps } from "./tab-list"
import { TabList } from "./tab-list"
import { TabPanel } from "./tab-panel"
import type { TabPanelsProps } from "./tab-panels"
import { TabPanels } from "./tab-panels"
import {
  DescendantsContextProvider,
  TabsProvider,
  useDescendants,
} from "./tabs-context"

export interface TabsOptions {
  /**
   * The index of the selected tab.
   */
  index?: number
  /**
   * The index of the selected tab.
   */
  defaultIndex?: number
  /**
   * If `true`, tabs will stretch to width of the tablist.
   *
   * @default false
   */
  isFitted?: boolean
  /**
   * The alignment of the tabs.
   */
  align?: "start" | "end" | "center"
  /**
   * If `true`, the tabs will be manually activated and display its panel by pressing Space or Enter.
   *
   * If `false`, the tabs will be automatically activated and their panel is displayed when they receive focus.
   *
   * @default false
   */
  isManual?: boolean
  /**
   * If `true`, rendering of the tab panel's will be deferred until it is selected.
   *
   * @default true
   */
  isLazy?: boolean
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
  orientation?: "vertical" | "horizontal"
  /**
   * The callback invoked when the index changes.
   */
  onChange?: (index: number) => void
  /**
   * Props for tab list component.
   */
  tabListProps?: TabListProps
  /**
   * Props for tab panels components.
   */
  tabPanelsProps?: TabPanelsProps
  /**
   * If `true`, disable ripple effects when pressing the tab.
   *
   * @default false
   */
  disableRipple?: boolean
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
      index,
      defaultIndex = 0,
      onChange,
      isFitted,
      isManual,
      isLazy = true,
      disableRipple = false,
      lazyBehavior = "keepMounted",
      orientation = "horizontal",
      tabListProps,
      tabPanelsProps,
      children,
      ...rest
    } = omitThemeProps(mergedProps)

    const [focusedIndex, setFocusedIndex] = useState<number>(defaultIndex)

    const [selectedIndex, setSelectedIndex] = useControllableState({
      value: index,
      defaultValue: defaultIndex,
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

    return (
      <DescendantsContextProvider value={descendants}>
        <TabsProvider
          value={{
            focusedIndex,
            setFocusedIndex,
            selectedIndex,
            setSelectedIndex,
            disableRipple,
            isFitted,
            align,
            isManual,
            isLazy,
            lazyBehavior,
            orientation,
            tabListProps,
            tabPanelsProps,
            styles,
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
