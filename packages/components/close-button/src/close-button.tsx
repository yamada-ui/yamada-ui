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

type CloseButtonOptions = {
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
}

export type CloseButtonProps = HTMLUIProps<"button"> &
  ThemeProps<"CloseButton"> &
  CloseButtonOptions

export const CloseButton = forwardRef<CloseButtonProps, "button">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentStyle("CloseButton", props)
    const { className, children, isDisabled, __css, disableRipple, ...rest } =
      omitThemeProps(mergedProps)
    const { onClick, ...rippleProps } = useRipple(rest)

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
        onClick={onClick}
      >
        {children || <CloseIcon width="1em" height="1em" />}

        <Ripple isDisabled={disableRipple || isDisabled} {...rippleProps} />
      </ui.button>
    )
  },
)
