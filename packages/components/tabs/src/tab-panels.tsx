import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx, getValidChildren } from "@yamada-ui/utils"
import { createElement } from "react"
import { TabPanelProvider, useTabsContext } from "./tabs-context"

export interface TabPanelsProps extends HTMLUIProps {}

export const TabPanels = forwardRef<TabPanelsProps, "div">(
  ({ className, children, ...rest }, ref) => {
    const { selectedIndex, styles, tabPanelsProps } = useTabsContext()

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child, index) => {
      const isSelected = index === selectedIndex

      return createElement(
        TabPanelProvider,
        { key: index, value: { index, isSelected, selectedIndex } },
        child,
      )
    })

    const css: CSSUIObject = {
      w: "100%",
      ...styles.tabPanels,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-tabs__panels", className)}
        __css={css}
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
