import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useInputGroup } from "./input-group"

type InputElementOptions = {
  /**
   * If `true`, the element clickable.
   *
   * @default false
   */
  isClick?: boolean
  /**
   * The placement of the element.
   *
   * @default 'left'
   */
  placement?: "left" | "right"
}

export type InputElementProps = HTMLUIProps<"div"> & InputElementOptions

const InputElement = forwardRef<InputElementProps, "div">(
  ({ className, isClick = false, placement = "left", ...rest }, ref) => {
    const styles = useInputGroup()

    const css: CSSUIObject = {
      position: "absolute",
      top: "0",
      [placement === "left" ? "insetStart" : "insetEnd"]: "0",
      zIndex: "kurillin",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      w:
        styles.field?.height ??
        styles.field?.h ??
        styles.field?.minHeight ??
        styles.field?.minH,
      h: "100%",
      fontSize: styles.field?.fontSize,
      pointerEvents: isClick ? "auto" : "none",
      cursor: isClick ? "pointer" : "auto",
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
