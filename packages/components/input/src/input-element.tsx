import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
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
    const { styles, fieldHeight, fieldFontSize } = useInputGroup()

    isClickable ??= isClick

    const css: CSSUIObject = {
      position: "absolute",
      top: "0",
      [placement === "left" ? "insetStart" : "insetEnd"]: "0",
      zIndex: "fallback(kurillin, 9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      w: fieldHeight,
      h: "100%",
      fontSize: fieldFontSize,
      pointerEvents: isClickable ? "auto" : "none",
      cursor: isClickable ? "pointer" : "auto",
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
