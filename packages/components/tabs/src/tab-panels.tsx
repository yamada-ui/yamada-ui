import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { createContext, cx, getValidChildren } from "@yamada-ui/utils"
import { createElement } from "react"
import { useTabsContext } from "./tabs"

const [TabPanelProvider, useTabPanelContext] = createContext<{
  isSelected: boolean
  selectedIndex: number
}>({})

export { useTabPanelContext }

export type TabPanelsProps = HTMLUIProps<"div">

export const TabPanels = forwardRef<TabPanelsProps, "div">(
  ({ className, children, ...rest }, ref) => {
    const { selectedIndex, tabPanelsProps, styles } = useTabsContext()

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child, index) => {
      const isSelected = index === selectedIndex

      return createElement(
        TabPanelProvider,
        { key: index, value: { isSelected, selectedIndex } },
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
