import {
  ui,
  forwardRef,
  HTMLUIProps,
  ThemeProps,
  CSSUIObject,
  useComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { CloseIcon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"

type CloseButtonOptions = {
  /**
   * If `true`, the button is disabled.
   *
   * @default false
   */
  isDisabled?: boolean
}

export type CloseButtonProps = HTMLUIProps<"button"> &
  ThemeProps<"CloseButton"> &
  CloseButtonOptions

export const CloseButton = forwardRef<CloseButtonProps, "button">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentStyle("CloseButton", props)
    const { className, children, isDisabled, __css, ...rest } =
      omitThemeProps(mergedProps)

    const css: CSSUIObject = {
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
      >
        {children || <CloseIcon width="1em" height="1em" />}
      </ui.button>
    )
  },
)
