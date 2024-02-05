import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { ForwardedRef } from "react"
import type { ColorSelectorBodyProps } from "./color-selector-body"
import { ColorSelectorBody } from "./color-selector-body"
import { ColorSelectorChannels } from "./color-selector-channels"
import type { ColorSelectorSwatchesProps } from "./color-selector-swatches"
import { ColorSelectorSwatches } from "./color-selector-swatches"
import type { SaturationSliderProps } from "./saturation-slider"
import { SaturationSlider } from "./saturation-slider"
import type { UseColorSelectorProps } from "./use-color-selector"
import { ColorSelectorProvider, useColorSelector } from "./use-color-selector"

type ColorSelectorOptions = {
  /**
   * If `true`, display the saturation, hue, alpha, channels and eye dropper component.
   *
   * @default true
   */
  withPicker?: boolean
  /**
   * If `true`, display the channels component.
   *
   * @default true
   */
  withChannel?: boolean
  /**
   * Props for the color selector input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Ref for the saturation slider component.
   */
  saturationSliderRef?: ForwardedRef<HTMLInputElement>
  /**
   * Props for the saturation slider component.
   */
  saturationSliderProps?: Omit<SaturationSliderProps, "value" | "defaultValue">
  /**
   * Props for the swatches component.
   */
  swatchesProps?: ColorSelectorSwatchesProps
}

export type ColorSelectorProps = ThemeProps<"ColorSelector"> &
  UseColorSelectorProps &
  ColorSelectorOptions &
  Pick<
    ColorSelectorBodyProps,
    | "withResult"
    | "withEyeDropper"
    | "eyeDropperRef"
    | "eyeDropperProps"
    | "hueSliderRef"
    | "hueSliderProps"
    | "alphaSliderRef"
    | "alphaSliderProps"
  > &
  Pick<
    ColorSelectorSwatchesProps,
    "swatchesLabel" | "swatches" | "swatchesColumns" | "swatchProps"
  >

/**
 * `ColorSelector` is a component used by the user to select a color.
 *
 * @see Docs https://yamada-ui.com/components/forms/color-selector
 */
export const ColorSelector = forwardRef<ColorSelectorProps, "input">(
  ({ size, ...props }, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle("ColorSelector", {
      size,
      ...props,
    })
    const {
      className,
      withResult = true,
      withPicker = true,
      withChannel = true,
      swatches,
      swatchesColumns = 7,
      inputProps,
      withEyeDropper,
      eyeDropperRef,
      eyeDropperProps,
      saturationSliderRef,
      saturationSliderProps,
      hueSliderRef,
      hueSliderProps,
      alphaSliderRef,
      alphaSliderProps,
      swatchesLabel,
      swatchProps,
      swatchesProps,
      ...computedProps
    } = omitThemeProps(mergedProps)
    const {
      getContainerProps,
      getInputProps,
      getSaturationSliderProps,
      ...rest
    } = useColorSelector(computedProps)

    const css: CSSUIObject = {
      display: "flex",
      flexDirection: "column",
      ...styles.container,
    }

    return (
      <ColorSelectorProvider value={{ styles, size, ...rest }}>
        <ui.div
          ref={ref}
          className={cx("ui-color-selector", className)}
          __css={css}
          {...getContainerProps()}
        >
          <ui.input {...getInputProps(inputProps, ref)} />

          {withPicker ? (
            <SaturationSlider
              size={size}
              className="ui-color-selector__saturation-slider"
              __css={{ ...styles.saturationSlider }}
              {...getSaturationSliderProps(
                saturationSliderProps,
                saturationSliderRef,
              )}
            />
          ) : null}

          {withPicker ? (
            <ColorSelectorBody
              {...{
                withResult,
                withEyeDropper,
                eyeDropperRef,
                eyeDropperProps,
                hueSliderRef,
                hueSliderProps,
                alphaSliderRef,
                alphaSliderProps,
              }}
            />
          ) : null}

          {withPicker && withChannel ? <ColorSelectorChannels /> : null}

          <ColorSelectorSwatches
            {...{
              swatchesLabel,
              swatches,
              swatchesColumns,
              swatchProps,
              ...swatchesProps,
            }}
          />
        </ui.div>
      </ColorSelectorProvider>
    )
  },
)
