import type { CSSUIObject, FC, HTMLUIProps } from "../../core"
import { ui } from "../../core"
import { cx } from "../../utils"
import { useInputGroup } from "./input-context"

interface InputElementOptions {
  /**
   * If `true`, the element clickable.
   *
   * @default false
   */
  clickable?: boolean
  /**
   * If `true`, the element clickable.
   *
   * @default false
   *
   * @deprecated Use `clickable` instead.
   */
  isClick?: boolean
  /**
   * If `true`, the element clickable.
   *
   * @default false
   *
   * @deprecated Use `clickable` instead.
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

const InputElement: FC<InputElementProps> = ({
  className,
  isClick = false,
  isClickable = isClick,
  clickable = isClickable,
  placement = "left",
  ...rest
}) => {
  const { fieldFontSize, fieldHeight, styles } = useInputGroup()

  const css: CSSUIObject = {
    alignItems: "center",
    cursor: clickable ? "pointer" : "auto",
    display: "flex",
    fontSize: fieldFontSize,
    h: "100%",
    justifyContent: "center",
    [placement === "left" ? "insetStart" : "insetEnd"]: "0",
    pointerEvents: clickable ? "auto" : "none",
    position: "absolute",
    top: "0",
    w: fieldHeight,
    zIndex: "fallback(kurillin, 9)",
    ...styles.element,
  }

  return (
    <ui.div
      className={cx("ui-input__element", className)}
      __css={css}
      {...rest}
    />
  )
}

InputElement.__ui__ = "InputElement"

export const InputLeftElement: FC<InputElementProps> = ({
  className,
  ...rest
}) => {
  return (
    <InputElement
      className={cx("ui-input__element--left", className)}
      placement="left"
      {...rest}
    />
  )
}

InputLeftElement.__ui__ = "InputLeftElement"

export const InputRightElement: FC<InputElementProps> = ({
  className,
  ...rest
}) => {
  return (
    <InputElement
      className={cx("ui-input__element--right", className)}
      placement="right"
      {...rest}
    />
  )
}

InputRightElement.__ui__ = "InputRightElement"
