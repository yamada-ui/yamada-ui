import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { ForwardedRef } from "react"
import type { ColorPickerBodyProps } from "./color-picker-body"
import { ColorPickerBody } from "./color-picker-body"
import { ColorPickerChannels } from "./color-picker-channels"
import type { ColorPickerSwatchesProps } from "./color-picker-swatches"
import { ColorPickerSwatches } from "./color-picker-swatches"
import type { SaturationSliderProps } from "./saturation-slider"
import { SaturationSlider } from "./saturation-slider"
import type { UseColorPickerProps } from "./use-color-picker"
import { ColorPickerProvider, useColorPicker } from "./use-color-picker"

type ColorPickerOptions = {
  /**
   * If `true`, display the saturation, hue, alpha, channels and eye dropper component.
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
   * Props for the color picker input element.
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
  swatchesProps?: ColorPickerSwatchesProps
}

export type ColorPickerProps = ThemeProps<"ColorPicker"> &
  UseColorPickerProps &
  ColorPickerOptions &
  Pick<
    ColorPickerBodyProps,
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
    ColorPickerSwatchesProps,
    "swatchesLabel" | "swatches" | "swatchesColumns" | "swatchProps"
  >

export const ColorPicker = forwardRef<ColorPickerProps, "input">(
  ({ size, ...props }, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle("ColorPicker", {
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
    } = useColorPicker(computedProps)

    const css: CSSUIObject = {
      display: "flex",
      flexDirection: "column",
      ...styles.container,
    }

    return (
      <ColorPickerProvider value={{ styles, size, ...rest }}>
        <ui.div
          ref={ref}
          className={cx("ui-color-picker", className)}
          __css={css}
          {...getContainerProps()}
        >
          <ui.input {...getInputProps(inputProps, ref)} />

          {withPicker ? (
            <SaturationSlider
              size={size}
              className="ui-color-picker__saturation-slider"
              __css={{ ...styles.saturationSlider }}
              {...getSaturationSliderProps(
                saturationSliderProps,
                saturationSliderRef,
              )}
            />
          ) : null}

          {withPicker ? (
            <ColorPickerBody
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

          {withPicker && withChannel ? <ColorPickerChannels /> : null}

          <ColorPickerSwatches
            {...{
              swatchesLabel,
              swatches,
              swatchesColumns,
              swatchProps,
              ...swatchesProps,
            }}
          />
        </ui.div>
      </ColorPickerProvider>
    )
  },
)
