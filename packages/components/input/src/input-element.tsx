import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useInputGroup } from "./input-context"

interface InputElementOptions {
  /**
   * If `true`, the element clickable.
   *
   * @default false
   *
   * @deprecated Use `isClickable` instead.
   */
  isClick?: boolean
  /**
   * If `true`, the element clickable.
   *
   * @default false
   */
  isClickable?: boolean
  /**
   * The placement of the element.
   *
   * @default 'left'
   */
  placement?: "left" | "right"
}

export interface InputElementProps extends HTMLUIProps, InputElementOptions {}

const InputElement = forwardRef<InputElementProps, "div">(
  (
    { className, isClick = false, isClickable, placement = "left", ...rest },
    ref,
  ) => {
    const { fieldFontSize, fieldHeight, styles } = useInputGroup()

    isClickable ??= isClick

    const css: CSSUIObject = {
      alignItems: "center",
      cursor: isClickable ? "pointer" : "auto",
      display: "flex",
      fontSize: fieldFontSize,
      h: "100%",
      justifyContent: "center",
      [placement === "left" ? "insetStart" : "insetEnd"]: "0",
      pointerEvents: isClickable ? "auto" : "none",
      position: "absolute",
      top: "0",
      w: fieldHeight,
      zIndex: "fallback(kurillin, 9)",
      ...styles.element,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-input__element", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export const InputLeftElement = forwardRef<InputElementProps, "div">(
  ({ className, ...rest }, ref) => {
    return (
      <InputElement
        ref={ref}
        className={cx("ui-input__element--left", className)}
        placement="left"
        {...rest}
      />
    )
  },
)

export const InputRightElement = forwardRef<InputElementProps, "div">(
  ({ className, ...rest }, ref) => {
    return (
      <InputElement
        ref={ref}
        className={cx("ui-input__element--right", className)}
        placement="right"
        {...rest}
      />
    )
  },
)
