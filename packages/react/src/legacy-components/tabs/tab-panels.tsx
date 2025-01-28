import type { HTMLUIProps } from "../../core"
import { createElement } from "react"
import { forwardRef, ui } from "../../core"
import { cx, getValidChildren } from "../../utils"
import { TabPanelProvider, useTabsContext } from "./tabs-context"

export interface TabPanelsProps extends HTMLUIProps {}

export const TabPanels = forwardRef<TabPanelsProps, "div">(
  ({ className, children, ...rest }, ref) => {
    const { selectedIndex, styles, tabPanelsProps } = useTabsContext()
    const validChildren = getValidChildren(children)
    const cloneChildren = validChildren.map((child, index) => {
      const selected = index === selectedIndex

      return createElement(
        TabPanelProvider,
        { key: index, value: { index, selected, selectedIndex } },
        child,
      )
    })

    return (
      <ui.div
        ref={ref}
        className={cx("ui-tabs__panels", className)}
        __css={styles.tabPanels}
        {...tabPanelsProps}
        {...rest}
      >
        {cloneChildren}
      </ui.div>
    )
  },
)

TabPanels.displayName = "TabPanels"
TabPanels.__ui__ = "TabPanels"
