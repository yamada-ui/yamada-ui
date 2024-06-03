import type { IconButtonProps } from "@yamada-ui/button"
import { IconButton } from "@yamada-ui/button"
import { forwardRef } from "@yamada-ui/core"
import type { CSSUIObject } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import type { FC } from "react"
import { useColorSelectorContext } from "./use-color-selector"

export type ColorSelectorEyeDropperProps = IconButtonProps

export const ColorSelectorEyeDropper = forwardRef<
  ColorSelectorEyeDropperProps,
  "button"
>(({ className, ...rest }, ref) => {
  const { getEyeDropperProps, readOnly, size, styles } =
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
      variant="outline"
      size={size}
      __css={css}
      {...getEyeDropperProps(rest, ref)}
    >
      <EyeDropperIcon className="ui-color-selector__eye-dropper-icon" />
    </IconButton>
  )
})

export const EyeDropperIcon: FC<IconProps> = ({ ...rest }) => {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="m2 22 1-1h3l9-9" />
      <path d="M3 21v-3l9-9" />
      <path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" />
    </Icon>
  )
}
