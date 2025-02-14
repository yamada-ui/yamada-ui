import type { CSSUIObject } from "../../core"
import type { IconButtonProps } from "../button"
import { forwardRef } from "../../core"
import { cx } from "../../utils"
import { IconButton } from "../button"
import { PipetteIcon } from "../icon"
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
      <PipetteIcon className="ui-color-selector__eye-dropper__icon" />
    </IconButton>
  )
})

ColorSelectorEyeDropper.displayName = "ColorSelectorEyeDropper"
ColorSelectorEyeDropper.__ui__ = "ColorSelectorEyeDropper"
