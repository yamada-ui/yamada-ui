import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { UseClickableProps } from "@yamada-ui/use-clickable"
import type { Merge } from "@yamada-ui/utils"
import { forwardRef, ui } from "@yamada-ui/core"
import { Ripple, useRipple } from "@yamada-ui/ripple"
import { useClickable } from "@yamada-ui/use-clickable"
import { cx, handlerAll, mergeRefs } from "@yamada-ui/utils"
import { useId } from "react"
import {
  useTabDescendant,
  useTabPanelDescendant,
  useTabsContext,
} from "./tabs-context"

export interface TabProps
  extends Merge<UseClickableProps<HTMLButtonElement>, HTMLUIProps<"button">> {}

export const Tab = forwardRef<TabProps, "button">(
  (
    {
      id,
      className,
      children,
      clickOnEnter,
      clickOnSpace,
      isDisabled,
      isFocusable,
      ...rest
    },
    ref,
  ) => {
    const {
      disableRipple,
      isManual,
      selectedIndex,
      setFocusedIndex,
      setSelectedIndex,
      styles,
    } = useTabsContext()
    const uuid = useId()
    const { index, register } = useTabDescendant({
      disabled: isDisabled && !isFocusable,
    })
    const { descendants } = useTabPanelDescendant()
    const tabpanelId = descendants.value(index)?.node.id
    const isSelected = index === selectedIndex

    id ??= uuid

    const onFocus = () => {
      setFocusedIndex(index)

      if (!isManual && !(isDisabled && isFocusable)) setSelectedIndex(index)
    }

    const clickableProps = useClickable<HTMLButtonElement>({
      id,
      "aria-controls": tabpanelId,
      "aria-selected": isSelected,
      role: "tab",
      ...rest,
      ref: mergeRefs(register, ref),
      clickOnEnter,
      clickOnSpace,
      isDisabled,
      isFocusable,
      onClick: handlerAll(rest.onClick, () => setSelectedIndex(index)),
      onFocus: isDisabled ? undefined : handlerAll(rest.onFocus, onFocus),
    })
    const { onPointerDown, ...rippleProps } = useRipple({
      ...clickableProps,
      isDisabled: disableRipple || isDisabled,
    })

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      outline: "0",
      overflow: "hidden",
      position: "relative",
      ...styles.tab,
    }

    return (
      <ui.button
        className={cx("ui-tabs__tab", className)}
        __css={css}
        {...clickableProps}
        type="button"
        tabIndex={isSelected ? 0 : -1}
        onPointerDown={onPointerDown}
      >
        {children}

        <Ripple isDisabled={disableRipple || isDisabled} {...rippleProps} />
      </ui.button>
    )
  },
)

Tab.displayName = "Tab"
Tab.__ui__ = "Tab"
