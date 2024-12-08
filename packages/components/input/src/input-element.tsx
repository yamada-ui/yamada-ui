import type { HTMLUIProps } from "@yamada-ui/core"
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

    return (
      <ui.div
        ref={ref}
        className={cx("ui-input__element", className)}
        __css={{
          cursor: isClickable ? "pointer" : "auto",
          fontSize: fieldFontSize,
          [placement === "left" ? "insetStart" : "insetEnd"]: "0",
          pointerEvents: isClickable ? "auto" : "none",
          w: fieldHeight,
          ...styles.element,
        }}
        {...rest}
      />
    )
  },
)

InputElement.displayName = "InputElement"
InputElement.__ui__ = "InputElement"

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

InputLeftElement.displayName = "InputLeftElement"
InputLeftElement.__ui__ = "InputLeftElement"

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

InputRightElement.displayName = "InputRightElement"
InputRightElement.__ui__ = "InputRightElement"
