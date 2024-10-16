import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useInputGroup } from "./input-context"

interface InputAddonOptions {
  /**
   * The placement of the element.
   *
   * @default 'left'
   */
  placement?: "left" | "right"
}

export interface InputAddonProps extends HTMLUIProps, InputAddonOptions {}

const InputAddon = forwardRef<InputAddonProps, "div">(
  ({ className, placement = "left", ...rest }, ref) => {
    const { styles } = useInputGroup()

    const placementStyles = {
      left: {
        me: "-1px",
        roundedRight: "0px !important",
      },
      right: {
        ms: "-1px",
        roundedLeft: "0px !important",
      },
    }

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      flex: "0 0 auto",
      w: "auto",
      whiteSpace: "nowrap",
      ...styles.addon,
      ...placementStyles[placement],
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-input__addon", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

InputAddon.displayName = "InputAddon"
InputAddon.__ui__ = "InputAddon"

export const InputLeftAddon = forwardRef<InputAddonProps, "div">(
  ({ className, ...rest }, ref) => {
    return (
      <InputAddon
        ref={ref}
        className={cx("ui-input__addon--left", className)}
        placement="left"
        {...rest}
      />
    )
  },
)

InputLeftAddon.displayName = "InputLeftAddon"
InputLeftAddon.__ui__ = "InputLeftAddon"

export const InputRightAddon = forwardRef<InputAddonProps, "div">(
  ({ className, ...rest }, ref) => {
    return (
      <InputAddon
        ref={ref}
        className={cx("ui-input__addon--right", className)}
        placement="right"
        {...rest}
      />
    )
  },
)

InputRightAddon.displayName = "InputRightAddon"
InputRightAddon.__ui__ = "InputRightAddon"
