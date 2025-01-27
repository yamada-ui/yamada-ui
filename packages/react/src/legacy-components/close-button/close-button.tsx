import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "../../core"
import { omitThemeProps, ui, useComponentStyle } from "../../core"
import { cx } from "../../utils"
import { XIcon } from "../icon"
import { Ripple, useRipple } from "../ripple"

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

export const CloseButton: FC<CloseButtonProps> = (props) => {
  const [styles, mergedProps] = useComponentStyle("CloseButton", props)
  const {
    className,
    children,
    disabled,
    disableRipple,
    isRounded,
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
    ...(isRounded ? { borderRadius: "fallback(full, 9999px)" } : {}),
  }

  return (
    <ui.button
      type="button"
      className={cx("ui-close-button", className)}
      aria-label="Close"
      disabled={disabled}
      __css={css}
      {...rest}
      onPointerDown={onPointerDown}
    >
      {children || <XIcon boxSize="2em" />}

      <Ripple {...rippleProps} />
    </ui.button>
  )
}

CloseButton.__ui__ = "CloseButton"
