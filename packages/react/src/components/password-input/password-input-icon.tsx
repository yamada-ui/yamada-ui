import type { CSSUIObject, FC, HTMLUIProps } from "../../core"
import type { IconProps } from "../icon"
import { cloneElement } from "react"
import { forwardRef, ui } from "../../core"
import { cx, getValidChildren } from "../../utils"
import { Icon } from "../icon"
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

interface EyeIconProps extends IconProps {}

export const EyeIcon: FC<EyeIconProps> = ({ ...rest }) => {
  return (
    <Icon
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  )
}

EyeIcon.displayName = "EyeIcon"
EyeIcon.__ui__ = "EyeIcon"

interface EyeOffIconProps extends IconProps {}

export const EyeOffIcon: FC<EyeOffIconProps> = ({ ...rest }) => {
  return (
    <Icon
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
      <path d="m2 2 20 20" />
    </Icon>
  )
}

EyeOffIcon.displayName = "EyeOffIcon"
EyeOffIcon.__ui__ = "EyeOffIcon"
