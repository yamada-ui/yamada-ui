import type { FC, HTMLUIProps } from "../../core"
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
   * The placement of the element.
   *
   * @default 'left'
   */
  placement?: "left" | "right"
}

export interface InputElementProps extends HTMLUIProps, InputElementOptions {}

const InputElement: FC<InputElementProps> = ({
  className,
  clickable = false,
  placement = "left",
  ...rest
}) => {
  const { fieldFontSize, fieldHeight, styles } = useInputGroup()

  return (
    <ui.div
      className={cx("ui-input__element", className)}
      __css={{
        cursor: clickable ? "pointer" : "auto",
        fontSize: fieldFontSize,
        [placement === "left" ? "insetStart" : "insetEnd"]: "0",
        pointerEvents: clickable ? "auto" : "none",
        w: fieldHeight,
        ...styles.element,
      }}
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
