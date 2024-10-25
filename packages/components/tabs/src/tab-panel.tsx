import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { FilterDescendant } from "@yamada-ui/use-descendant"
import { forwardRef, ui } from "@yamada-ui/core"
import { useLazyDisclosure } from "@yamada-ui/use-disclosure"
import { cx, mergeRefs } from "@yamada-ui/utils"
import { useId, useRef } from "react"
import {
  useTabPanelContext,
  useTabsContext,
  useTabsDescendant,
  useTabsDescendantsContext,
} from "./tabs-context"

export interface TabPanelProps extends HTMLUIProps {}

export const TabPanel = forwardRef<TabPanelProps, "div">(
  ({ id, className, children, ...rest }, ref) => {
    const { isLazy: enabled, lazyBehavior: mode, styles } = useTabsContext()

    const uuid = useId()

    id ??= uuid

    const { index, isSelected } = useTabPanelContext()

    const descendants = useTabsDescendantsContext()

    const { register } = useTabsDescendant({
      disabled: !isSelected,
    })

    const filter: FilterDescendant<HTMLButtonElement | HTMLDivElement> = (
      descendant,
    ) => descendant.node.getAttribute("role") === "tab"
    const tabDescendant = descendants.value(index, filter)

    const tabId = tabDescendant?.node.id

    const hasBeenSelected = useRef<boolean>(false)

    if (isSelected) hasBeenSelected.current = true

    const shouldRenderChildren = useLazyDisclosure({
      enabled,
      isSelected,
      mode,
      wasSelected: hasBeenSelected.current,
    })

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
