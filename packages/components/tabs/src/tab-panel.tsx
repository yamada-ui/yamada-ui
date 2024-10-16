import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { useLazyDisclosure } from "@yamada-ui/use-disclosure"
import { cx } from "@yamada-ui/utils"
import { useRef } from "react"
import { useTabPanelContext, useTabsContext } from "./tabs-context"

export interface TabPanelProps extends HTMLUIProps {}

export const TabPanel = forwardRef<TabPanelProps, "div">(
  ({ className, children, ...rest }, ref) => {
    const {
      baseId,
      isLazy: enabled,
      lazyBehavior: mode,
      styles,
    } = useTabsContext()
    const { index, isSelected } = useTabPanelContext()

    const hasBeenSelected = useRef<boolean>(false)

    if (isSelected) hasBeenSelected.current = true

    const shouldRenderChildren = useLazyDisclosure({
      enabled,
      isSelected,
      mode,
      wasSelected: hasBeenSelected.current,
    })

    const css: CSSUIObject = { ...styles.tabPanel }

    const id = `${baseId}-${index}`

    return (
      <ui.div
        id={id}
        ref={ref}
        className={cx("ui-tabs__panel", className)}
        role="tabpanel"
        __css={css}
        {...rest}
        aria-labelledby={id}
        hidden={!isSelected}
      >
        {shouldRenderChildren ? children : null}
      </ui.div>
    )
  },
)

TabPanel.displayName = "TabPanel"
TabPanel.__ui__ = "TabPanel"
