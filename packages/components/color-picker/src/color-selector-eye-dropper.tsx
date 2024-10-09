import type { IconButtonProps } from "@yamada-ui/button"
import type { CSSUIObject, FC } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { IconButton } from "@yamada-ui/button"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { useColorSelectorContext } from "./use-color-selector"

export interface ColorSelectorEyeDropperProps extends IconButtonProps {}

export const ColorSelectorEyeDropper = forwardRef<
  ColorSelectorEyeDropperProps,
  "button"
>(({ className, ...rest }, ref) => {
  const { size, readOnly, styles, getEyeDropperProps } =
    useColorSelectorContext()

  const css: CSSUIObject = {
    h: "auto",
    minW: "auto",
    pointerEvents: readOnly ? "none" : undefined,
    ...styles.eyeDropper,
  }

  return (
    <IconButton
      className={cx("ui-color-selector__eye-dropper", className)}
      size={size}
      variant="outline"
      __css={css}
      {...getEyeDropperProps(rest, ref)}
    >
      <EyeDropperIcon className="ui-color-selector__eye-dropper__icon" />
    </IconButton>
  )
})

ColorSelectorEyeDropper.displayName = "ColorSelectorEyeDropper"
ColorSelectorEyeDropper.__ui__ = "ColorSelectorEyeDropper"

export const EyeDropperIcon: FC<IconProps> = ({ ...rest }) => {
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
      <path d="m2 22 1-1h3l9-9" />
      <path d="M3 21v-3l9-9" />
      <path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" />
    </Icon>
  )
}

EyeDropperIcon.displayName = "EyeDropperIcon"
EyeDropperIcon.__ui__ = "EyeDropperIcon"
