import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { useLazyDisclosure } from "@yamada-ui/use-disclosure"
import { cx, mergeRefs } from "@yamada-ui/utils"
import { useId, useRef } from "react"
import {
  useTabDescendant,
  useTabPanelContext,
  useTabPanelDescendant,
  useTabsContext,
} from "./tabs-context"

export interface TabPanelProps extends HTMLUIProps {}

export const TabPanel = forwardRef<TabPanelProps, "div">(
  ({ id, className, children, ...rest }, ref) => {
    const { isLazy: enabled, lazyBehavior: mode, styles } = useTabsContext()
    const uuid = useId()
    const { index, isSelected } = useTabPanelContext()
    const { register } = useTabPanelDescendant()
    const { descendants } = useTabDescendant()
    const hasBeenSelected = useRef<boolean>(false)
    const tabId = descendants.value(index)?.node.id

    if (isSelected) hasBeenSelected.current = true

    const shouldRenderChildren = useLazyDisclosure({
      enabled,
      isSelected,
      mode,
      wasSelected: hasBeenSelected.current,
    })

    id ??= uuid

    const css: CSSUIObject = { ...styles.tabPanel }

    return (
      <ui.div
        id={id}
        ref={mergeRefs(register, ref)}
        className={cx("ui-tabs__panel", className)}
        aria-labelledby={tabId}
        role="tabpanel"
        __css={css}
        {...rest}
        hidden={!isSelected}
      >
        {shouldRenderChildren ? children : null}
      </ui.div>
    )
  },
)

TabPanel.displayName = "TabPanel"
TabPanel.__ui__ = "TabPanel"
