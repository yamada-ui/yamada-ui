import type { ForwardedRef } from "react"
import type { CSSUIObject, HTMLUIProps } from "../../core"
import type { AlphaSliderProps } from "./alpha-slider"
import type { HueSliderProps } from "./hue-slider"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { AlphaSlider } from "./alpha-slider"
import { HueSlider } from "./hue-slider"
import { useColorSelectorContext } from "./use-color-selector"

interface ColorSelectorSlidersOptions {
  /**
   * Ref for the alpha slider component.
   */
  alphaSliderRef?: ForwardedRef<HTMLInputElement>
  /**
   * Ref for the hue slider component.
   */
  hueSliderRef?: ForwardedRef<HTMLInputElement>
  /**
   * Props for the alpha slider component.
   */
  alphaSliderProps?: Omit<AlphaSliderProps, "defaultValue" | "value">
  /**
   * Props for the hue slider component.
   */
  hueSliderProps?: Omit<HueSliderProps, "defaultValue" | "value">
}

export interface ColorSelectorSlidersProps
  extends Omit<HTMLUIProps, "children">,
    ColorSelectorSlidersOptions {}

export const ColorSelectorSliders = forwardRef<
  ColorSelectorSlidersProps,
  "div"
>(
  (
    {
      className,
      alphaSliderRef,
      hueSliderRef,
      alphaSliderProps,
      hueSliderProps,
      ...rest
    },
    ref,
  ) => {
    let { size, styles, withAlpha, getAlphaSliderProps, getHueSliderProps } =
      useColorSelectorContext()

    if (size === "full") size = "lg"

    const css: CSSUIObject = {
      display: "flex",
      flexDirection: "column",
      ...styles.sliders,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-color-selector__sliders", className)}
        __css={css}
        {...rest}
      >
        <HueSlider
          className="ui-color-selector__hue-slider"
          size={size}
          __css={{ ...styles.hueSlider }}
          {...getHueSliderProps(hueSliderProps, hueSliderRef)}
        />

        {withAlpha ? (
          <AlphaSlider
            className="ui-color-selector__alpha-slider"
            size={size}
            __css={{ ...styles.alphaSlider }}
            {...getAlphaSliderProps(alphaSliderProps, alphaSliderRef)}
          />
        ) : null}
      </ui.div>
    )
  },
)

ColorSelectorSliders.displayName = "ColorSelectorSliders"
ColorSelectorSliders.__ui__ = "ColorSelectorSliders"
