import type { HTMLUIProps } from "../../core"
import type { UseClickableProps } from "../../hooks/use-clickable"
import type { Merge } from "../../utils"
import { useId } from "react"
import { forwardRef, ui } from "../../core"
import { useClickable } from "../../hooks/use-clickable"
import { cx, handlerAll, mergeRefs } from "../../utils"
import { Ripple, useRipple } from "../ripple"
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
        __css={styles.tab}
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
