import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { Ripple, useRipple } from "@yamada-ui/ripple"
import type { UseClickableProps } from "@yamada-ui/use-clickable"
import { useClickable } from "@yamada-ui/use-clickable"
import { ariaAttr, cx, handlerAll, mergeRefs } from "@yamada-ui/utils"
import { useTabsContext, useTabsDescendant } from "./tabs"

export type TabProps = HTMLUIProps<"button"> &
  Omit<UseClickableProps, "ref" | "color">

export const Tab = forwardRef<TabProps, "button">(
  (
    {
      className,
      isDisabled,
      isFocusable,
      clickOnEnter,
      clickOnSpace,
      children,
      ...props
    },
    ref,
  ) => {
    const {
      selectedIndex,
      isManual,
      disableRipple,
      setSelectedIndex,
      setFocusedIndex,
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
      isDisabled,
      isFocusable,
      clickOnEnter,
      clickOnSpace,
      onClick: handlerAll(props.onClick, () => setSelectedIndex(index)),
    })
    const { onPointerDown, ...rippleProps } = useRipple({
      ...rest,
      isDisabled: disableRipple || isDisabled,
    })

    const css: CSSUIObject = {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...styles.tab,
    }

    return (
      <ui.button
        className={cx("ui-tabs__tab", className)}
        __css={css}
        role="tab"
        {...props}
        {...rest}
        type="button"
        tabIndex={isSelected ? 0 : -1}
        aria-selected={ariaAttr(isSelected)}
        onPointerDown={onPointerDown}
        onFocus={isDisabled ? undefined : handlerAll(props.onFocus, onFocus)}
      >
        {children}

        <Ripple isDisabled={disableRipple || isDisabled} {...rippleProps} />
      </ui.button>
    )
  },
)
