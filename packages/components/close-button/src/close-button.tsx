import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
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
  disabled?: boolean
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
  fullRounded?: boolean
  /**
   * If `true`, the button is disabled.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
  /**
   * If true, the button is full rounded.
   *
   * @default false
   *
   * @deprecated Use `fullRounded` instead.
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
      disabled = isDisabled,
      disableRipple,
      isRounded,
      fullRounded = isRounded,
      __css,
      ...rest
    } = omitThemeProps(mergedProps)
    const { onPointerDown, ...rippleProps } = useRipple({
      ...rest,
      disabled: disableRipple || disabled,
    })

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      flexShrink: 0,
      justifyContent: "center",
      outline: 0,
      overflow: "hidden",
      position: "relative",
      ...styles,
      ...__css,
      ...(fullRounded ? { borderRadius: "fallback(full, 9999px)" } : {}),
    }

    return (
      <ui.button
        ref={ref}
        type="button"
        className={cx("ui-close-button", className)}
        aria-label="Close"
        disabled={disabled}
        __css={css}
        {...rest}
        onPointerDown={onPointerDown}
      >
        {children || <CloseIcon height="1em" width="1em" />}

        <Ripple {...rippleProps} />
      </ui.button>
    )
  },
)

CloseButton.displayName = "CloseButton"
CloseButton.__ui__ = "CloseButton"
