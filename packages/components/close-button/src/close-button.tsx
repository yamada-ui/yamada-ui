import type { HTMLUIProps, ThemeProps, CSSUIObject } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { CloseIcon } from "@yamada-ui/icon"
import { Ripple, useRipple } from "@yamada-ui/ripple"
import { cx } from "@yamada-ui/utils"

interface CloseButtonOptions {
  /**
   * If `true`, the button is disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, disable ripple effects when pressing a element.
   *
   * @default false
   */
  disableRipple?: boolean
  /**
   * If true, the button is full rounded.
   *
   * @default false
   */
  isRounded?: boolean
}

export interface CloseButtonProps
  extends HTMLUIProps<"button">,
    ThemeProps<"CloseButton">,
    CloseButtonOptions {}

/**
 * `CloseButton` is a component used primarily to trigger the close functionality of a component.
 *
 * @see Docs https://yamada-ui.com/components/other/close-button
 */

export const CloseButton = forwardRef<CloseButtonProps, "button">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentStyle("CloseButton", props)
    const {
      className,
      children,
      isDisabled,
      isRounded,
      __css,
      disableRipple,
      ...rest
    } = omitThemeProps(mergedProps)
    const { onPointerDown, ...rippleProps } = useRipple({
      ...rest,
      isDisabled: disableRipple || isDisabled,
    })

    const css: CSSUIObject = {
      position: "relative",
      overflow: "hidden",
      outline: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      ...styles,
      ...__css,
      ...(isRounded ? { borderRadius: "fallback(full, 9999px)" } : {}),
    }

    return (
      <ui.button
        ref={ref}
        type="button"
        aria-label="Close"
        className={cx("ui-close-button", className)}
        disabled={isDisabled}
        __css={css}
        {...rest}
        onPointerDown={onPointerDown}
      >
        {children || <CloseIcon width="1em" height="1em" />}

        <Ripple isDisabled={disableRipple || isDisabled} {...rippleProps} />
      </ui.button>
    )
  },
)
