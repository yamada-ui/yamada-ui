import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { UseClickableProps } from "@yamada-ui/use-clickable"
import type { Merge } from "@yamada-ui/utils"
import { forwardRef, ui } from "@yamada-ui/core"
import { Ripple, useRipple } from "@yamada-ui/ripple"
import { useClickable } from "@yamada-ui/use-clickable"
import { ariaAttr, cx, handlerAll, mergeRefs } from "@yamada-ui/utils"
import { useTabsContext, useTabsDescendant } from "./tabs-context"

export interface TabProps
  extends Merge<UseClickableProps<HTMLButtonElement>, HTMLUIProps<"button">> {}

export const Tab = forwardRef<TabProps, "button">(
  (
    {
      className,
      children,
      clickOnEnter,
      clickOnSpace,
      isDisabled,
      isFocusable,
      ...props
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

    const { index, register } = useTabsDescendant({
      disabled: isDisabled && !isFocusable,
    })

    const isSelected = index === selectedIndex

    const onFocus = () => {
      setFocusedIndex(index)

      if (!isManual && !(isDisabled && isFocusable)) setSelectedIndex(index)
    }

    const rest = useClickable({
      ref: mergeRefs(register, ref),
      clickOnEnter,
      clickOnSpace,
      isDisabled,
      isFocusable,
      onClick: handlerAll(props.onClick, () => setSelectedIndex(index)),
    })
    const { onPointerDown, ...rippleProps } = useRipple({
      ...rest,
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
        role="tab"
        __css={css}
        {...props}
        {...rest}
        type="button"
        aria-selected={ariaAttr(isSelected)}
        tabIndex={isSelected ? 0 : -1}
        onFocus={isDisabled ? undefined : handlerAll(props.onFocus, onFocus)}
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
