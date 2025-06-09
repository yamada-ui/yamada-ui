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
      disabled = isDisabled,
      isFocusable,
      focusable = isFocusable,
      ...rest
    },
    ref,
  ) => {
    const uuid = useId()
    const {
      disableRipple,
      manual,
      orientation,
      selectedIndex,
      setFocusedIndex,
      setSelectedIndex,
      styles,
    } = useTabsContext()
    const { index, register } = useTabDescendant({
      disabled: disabled && !focusable,
    })
    const { descendants } = useTabPanelDescendant()
    const tabpanelId = descendants.value(index)?.node.id
    const isSelected = index === selectedIndex
    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      outline: "0",
      overflow: "hidden",
      position: "relative",
      ...styles.tab,
    }

    id ??= uuid

    const onFocus = () => {
      setFocusedIndex(index)

      if (!manual && !(disabled && focusable)) setSelectedIndex(index)
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
      disabled,
      focusable,
      focusOnClick: false,
      onClick: handlerAll(rest.onClick, () => setSelectedIndex(index)),
      onFocus: disabled ? undefined : handlerAll(rest.onFocus, onFocus),
    })
    const { onPointerDown, ...rippleProps } = useRipple({
      ...clickableProps,
      disabled: disableRipple || disabled,
    })

    return (
      <ui.button
        className={cx("ui-tabs__tab", className)}
        __css={css}
        {...clickableProps}
        type="button"
        data-orientation={orientation}
        tabIndex={isSelected ? 0 : -1}
        onPointerDown={onPointerDown}
      >
        {children}

        <Ripple {...rippleProps} />
      </ui.button>
    )
  },
)

Tab.displayName = "Tab"
Tab.__ui__ = "Tab"
