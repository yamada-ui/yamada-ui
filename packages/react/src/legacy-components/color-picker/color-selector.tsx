import type { FC, ForwardedRef, ReactNode } from "react"
import type { CSSUIObject, HTMLUIProps, ThemeProps } from "../../core"
import type { ColorSelectorBodyProps } from "./color-selector-body"
import type { ColorSelectorChannelsProps } from "./color-selector-channels"
import type { ColorSelectorSwatchesProps } from "./color-selector-swatches"
import type { SaturationSliderProps } from "./saturation-slider"
import type { UseColorSelectorProps } from "./use-color-selector"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { cx, runIfFunc } from "../../utils"
import { ColorSelectorBody } from "./color-selector-body"
import { ColorSelectorChannels } from "./color-selector-channels"
import { ColorSelectorSwatches } from "./color-selector-swatches"
import { SaturationSlider } from "./saturation-slider"
import { ColorSelectorProvider, useColorSelector } from "./use-color-selector"

interface ColorSelectorOptions {
  children?: FC<{ value: string }> | ReactNode
  /**
   * Ref for the saturation slider component.
   */
  saturationSliderRef?: ForwardedRef<HTMLInputElement>
  /**
   * If `true`, display the channels component.
   *
   * @default true
   */
  withChannel?: boolean
  /**
   * If `true`, display the saturation, hue, alpha, channels and eye dropper component.
   *
   * @default true
   */
  withPicker?: boolean
  /**
   * Props for the channels component.
   */
  channelsProps?: ColorSelectorChannelsProps
  /**
   * Props for the color selector input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for the saturation slider component.
   */
  saturationSliderProps?: Omit<SaturationSliderProps, "defaultValue" | "value">
  /**
   * Props for the swatches component.
   */
  swatchesProps?: ColorSelectorSwatchesProps
}

export interface ColorSelectorProps
  extends ThemeProps<"ColorSelector">,
    UseColorSelectorProps,
    ColorSelectorOptions,
    Pick<
      ColorSelectorBodyProps,
      | "alphaSliderProps"
      | "alphaSliderRef"
      | "eyeDropperProps"
      | "eyeDropperRef"
      | "hueSliderProps"
      | "hueSliderRef"
      | "withEyeDropper"
      | "withResult"
    >,
    Pick<
      ColorSelectorSwatchesProps,
      "swatches" | "swatchesColumns" | "swatchesLabel" | "swatchProps"
    >,
    Pick<ColorSelectorChannelsProps, "channelProps"> {}

/**
 * `ColorSelector` is a component used by the user to select a color.
 *
 * @see Docs https://yamada-ui.com/components/forms/color-selector
 */
export const ColorSelector = forwardRef<ColorSelectorProps, "input">(
  ({ size, ...props }, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("ColorSelector", {
      size,
      ...props,
    })
    const {
      className,
      alphaSliderRef,
      children,
      eyeDropperRef,
      hueSliderRef,
      saturationSliderRef,
      swatches,
      swatchesColumns = 7,
      swatchesLabel,
      withChannel = true,
      withEyeDropper,
      withPicker = true,
      withResult = true,
      alphaSliderProps,
      channelProps,
      channelsProps,
      eyeDropperProps,
      hueSliderProps,
      inputProps,
      saturationSliderProps,
      swatchesProps,
      swatchProps,
      ...computedProps
    } = omitThemeProps(mergedProps)
    const {
      value,
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
      <ColorSelectorProvider value={{ size, styles, value, ...rest }}>
        <ui.div
          ref={ref}
          className={cx("ui-color-selector", className)}
          __css={css}
          {...getContainerProps()}
        >
          <ui.input {...getInputProps(inputProps, ref)} />

          {withPicker ? (
            <SaturationSlider
              className="ui-color-selector__saturation-slider"
              size={size}
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
                alphaSliderRef,
                eyeDropperRef,
                hueSliderRef,
                withEyeDropper,
                withResult,
                alphaSliderProps,
                eyeDropperProps,
                hueSliderProps,
              }}
            />
          ) : null}

          {withPicker && withChannel ? (
            <ColorSelectorChannels {...{ channelProps, ...channelsProps }} />
          ) : null}

          <ColorSelectorSwatches
            {...{
              swatches,
              swatchesColumns,
              swatchesLabel,
              swatchProps,
              ...swatchesProps,
            }}
          />

          {runIfFunc(children, { value })}
        </ui.div>
      </ColorSelectorProvider>
    )
  },
)

ColorSelector.displayName = "ColorSelector"
ColorSelector.__ui__ = "ColorSelector"
