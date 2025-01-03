import type { CSSUIObject, HTMLUIProps } from "../../core"
import { cloneElement } from "react"
import { forwardRef, ui } from "../../core"
import { cx, getValidChildren } from "../../utils"
import { usePasswordInputContext } from "./password-input-context"

export interface PasswordInputIconProps extends HTMLUIProps {}

export const PasswordInputIcon = forwardRef<PasswordInputIconProps, "div">(
  ({ className, children, ...rest }, ref) => {
    const { styles } = usePasswordInputContext()

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) =>
      cloneElement(child, {
        style: {
          color: "currentColor",
          maxHeight: "1em",
          maxWidth: "1em",
        },
        "aria-hidden": true,
        focusable: false,
      }),
    )

    const css: CSSUIObject = { ...styles.icon }

    return (
      <ui.button
        ref={ref}
        type="button"
        className={cx("ui-password-input__icon", className)}
        __css={css}
        {...rest}
      >
        {cloneChildren}
      </ui.button>
    )
  },
)

PasswordInputIcon.displayName = "PasswordInputIcon"
PasswordInputIcon.__ui__ = "PasswordInputIcon"
