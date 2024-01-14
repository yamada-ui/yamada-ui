import { forwardRef, ui } from "@yamada-ui/core"
import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { ForwardedRef } from "react"
import type { AlphaSliderProps } from "./alpha-slider"
import { AlphaSlider } from "./alpha-slider"
import type { HueSliderProps } from "./hue-slider"
import { HueSlider } from "./hue-slider"
import { useColorPickerContext } from "./use-color-picker"

type ColorPickerSlidersOptions = {
  /**
   * Ref for the hue slider component.
   */
  hueSliderRef?: ForwardedRef<HTMLInputElement>
  /**
   * Props for the hue slider component.
   */
  hueSliderProps?: Omit<HueSliderProps, "value" | "defaultValue">
  /**
   * Ref for the alpha slider component.
   */
  alphaSliderRef?: ForwardedRef<HTMLInputElement>
  /**
   * Props for the alpha slider component.
   */
  alphaSliderProps?: Omit<AlphaSliderProps, "value" | "defaultValue">
}

export type ColorPickerSlidersProps = Omit<HTMLUIProps<"div">, "children"> &
  ColorPickerSlidersOptions

export const ColorPickerSliders = forwardRef<ColorPickerSlidersProps, "div">(
  (
    {
      className,
      hueSliderRef,
      hueSliderProps,
      alphaSliderRef,
      alphaSliderProps,
      ...rest
    },
    ref,
  ) => {
    let { size, withAlpha, getHueSliderProps, getAlphaSliderProps, styles } =
      useColorPickerContext()

    if (size === "full") size = "lg"

    const css: CSSUIObject = {
      display: "flex",
      flexDirection: "column",
      ...styles.sliders,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-color-picker__sliders", className)}
        __css={css}
        {...rest}
      >
        <HueSlider
          size={size}
          className="ui-color-picker__hue-slider"
          __css={{ ...styles.hueSlider }}
          {...getHueSliderProps(hueSliderProps, hueSliderRef)}
        />

        {withAlpha ? (
          <AlphaSlider
            size={size}
            className="ui-color-picker__alpha-slider"
            __css={{ ...styles.alphaSlider }}
            {...getAlphaSliderProps(alphaSliderProps, alphaSliderRef)}
          />
        ) : null}
      </ui.div>
    )
  },
)
