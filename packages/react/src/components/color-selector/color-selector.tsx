"use client"

import type { ReactNode } from "react"
import type { HTMLStyledProps, StyleValue, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { ColorSwatchProps } from "../color-swatch"
import type { ColorSelectorStyle } from "./color-selector.style"
import type {
  UseColorSelectorProps,
  UseColorSelectorReturn,
} from "./use-color-selector"
import { useMemo } from "react"
import { createSlotComponent, styled, varAttr } from "../../core"
import { AlphaSlider } from "../alpha-slider"
import { ColorSwatch } from "../color-swatch"
import { HueSlider } from "../hue-slider"
import { PipetteIcon } from "../icon"
import { SaturationSlider } from "../saturation-slider"
import { colorSelectorStyle } from "./color-selector.style"
import { useColorSelector } from "./use-color-selector"

interface ComponentContext
  extends
    Pick<
      ColorSelectorRootProps,
      | "alphaSliderProps"
      | "colorSwatches"
      | "colorSwatchGroupLabelProps"
      | "colorSwatchGroupProps"
      | "colorSwatchItemProps"
      | "hueSliderProps"
      | "saturationSliderProps"
      | "shape"
      | "size"
    >,
    Pick<
      UseColorSelectorReturn,
      | "alpha"
      | "getAlphaSliderProps"
      | "getColorSwatchGroupLabelProps"
      | "getColorSwatchGroupProps"
      | "getColorSwatchItemProps"
      | "getEyeDropperProps"
      | "getHueSliderProps"
      | "getSaturationSliderProps"
    > {}

export interface ColorSelectorRootProps
  extends
    Merge<HTMLStyledProps, UseColorSelectorProps>,
    ThemeProps<ColorSelectorStyle> {
  /**
   * An array of colors in one of the supported formats.
   * Used to render swatches list below the color selector.
   */
  colorSwatches?: string[]
  /**
   * The number of columns in the color swatch group.
   *
   * @default 8
   */
  colorSwatchGroupColumns?: StyleValue<number>
  /**
   * The label of the color swatch group.
   */
  colorSwatchGroupLabel?: ReactNode
  /**
   * If `true`, the alpha slider will be displayed.
   *
   * @default false
   */
  withAlpha?: boolean
  /**
   * Props for the alpha slider.
   */
  alphaSliderProps?: ColorSelectorAlphaSliderProps
  /**
   * Props for the color swatch group label.
   */
  colorSwatchGroupLabelProps?: ColorSelectorColorSwatchGroupLabelProps
  /**
   * Props for the color swatch group.
   */
  colorSwatchGroupProps?: ColorSelectorColorSwatchGroupProps
  /**
   * Props for the color swatch item.
   */
  colorSwatchItemProps?: Omit<ColorSelectorColorSwatchItemProps, "value">
  /**
   * Props for the hue slider.
   */
  hueSliderProps?: ColorSelectorHueSliderProps
  /**
   * Props for the saturation slider.
   */
  saturationSliderProps?: ColorSelectorSaturationSliderProps
}

const {
  ComponentContext,
  PropsContext: ColorSelectorPropsContext,
  useComponentContext,
  usePropsContext: useColorSelectorPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  ColorSelectorRootProps,
  ColorSelectorStyle,
  ComponentContext
>("color-selector", colorSelectorStyle)

export { ColorSelectorPropsContext, useColorSelectorPropsContext }

/**
 * `ColorSelector` is a component used by the user to select a color.
 *
 * @see https://yamada-ui.com/docs/components/color-selector
 */
export const ColorSelectorRoot = withProvider<
  "div",
  ColorSelectorRootProps,
  "shape" | "size"
>(
  ({
    size,
    children,
    colorSwatches,
    colorSwatchGroupLabel,
    shape,
    withAlpha,
    alphaSliderProps,
    colorSwatchGroupLabelProps,
    colorSwatchGroupProps,
    colorSwatchItemProps,
    hueSliderProps,
    saturationSliderProps,
    ...rest
  }) => {
    const {
      alpha,
      getAlphaSliderProps,
      getColorSwatchGroupLabelProps,
      getColorSwatchGroupProps,
      getColorSwatchItemProps,
      getEyeDropperProps,
      getHueSliderProps,
      getRootProps,
      getSaturationSliderProps,
    } = useColorSelector(rest)
    const computedChildren = useMemo(() => {
      if (children) return children

      return (
        <>
          <ColorSelectorSaturationSlider />
          <ColorSelectorHueSlider />
          <ColorSelectorAlphaSlider />

          {colorSwatchGroupLabel ? (
            <ColorSelectorColorSwatchGroupLabel>
              {colorSwatchGroupLabel}
            </ColorSelectorColorSwatchGroupLabel>
          ) : null}
          {colorSwatches ? <ColorSelectorColorSwatchGroup /> : null}
        </>
      )
    }, [children, colorSwatchGroupLabel, colorSwatches])
    const context = useMemo(
      () => ({
        size,
        alpha: withAlpha ?? alpha,
        colorSwatches,
        colorSwatchGroupLabel,
        shape,
        alphaSliderProps,
        colorSwatchGroupLabelProps,
        colorSwatchGroupProps,
        colorSwatchItemProps,
        getAlphaSliderProps,
        getColorSwatchGroupLabelProps,
        getColorSwatchGroupProps,
        getColorSwatchItemProps,
        getEyeDropperProps,
        getHueSliderProps,
        getSaturationSliderProps,
        hueSliderProps,
        saturationSliderProps,
      }),
      [
        size,
        withAlpha,
        alpha,
        shape,
        colorSwatches,
        colorSwatchGroupLabel,
        alphaSliderProps,
        getAlphaSliderProps,
        getEyeDropperProps,
        getHueSliderProps,
        getSaturationSliderProps,
        getColorSwatchGroupLabelProps,
        getColorSwatchGroupProps,
        getColorSwatchItemProps,
        hueSliderProps,
        saturationSliderProps,
        colorSwatchGroupLabelProps,
        colorSwatchGroupProps,
        colorSwatchItemProps,
      ],
    )

    return (
      <ComponentContext value={context}>
        <styled.div {...getRootProps()}>{computedChildren}</styled.div>
      </ComponentContext>
    )
  },
  "root",
  { transferProps: ["size", "shape"] },
)(undefined, ({ colorSwatchGroupColumns = 8, ...rest }) => ({
  "--color-swatch-group-columns": varAttr(colorSwatchGroupColumns),
  ...rest,
}))

export interface ColorSelectorSaturationSliderProps
  extends SaturationSlider.RootProps {}

export const ColorSelectorSaturationSlider = withContext<
  "input",
  ColorSelectorSaturationSliderProps
>((props) => {
  const { size, shape, getSaturationSliderProps, saturationSliderProps } =
    useComponentContext()

  return (
    <SaturationSlider.Root
      size={size}
      shape={shape}
      {...getSaturationSliderProps({ ...saturationSliderProps, ...props })}
    />
  )
}, "saturationSlider")()

export interface ColorSelectorHueSliderProps extends HueSlider.RootProps {}

export const ColorSelectorHueSlider = withContext<
  "input",
  ColorSelectorHueSliderProps
>((props) => {
  const { size, shape, getHueSliderProps, hueSliderProps } =
    useComponentContext()

  return (
    <HueSlider.Root
      size={size}
      shape={shape}
      {...getHueSliderProps({ ...hueSliderProps, ...props })}
    />
  )
}, "hueSlider")()

export interface ColorSelectorAlphaSliderProps extends Partial<AlphaSlider.RootProps> {}

export const ColorSelectorAlphaSlider = withContext<
  "input",
  ColorSelectorAlphaSliderProps
>((props) => {
  const { size, alpha, shape, alphaSliderProps, getAlphaSliderProps } =
    useComponentContext()

  if (!alpha) return null

  return (
    <AlphaSlider.Root
      size={size}
      shape={shape}
      {...getAlphaSliderProps({ ...alphaSliderProps, ...props })}
    />
  )
}, "alphaSlider")()

export interface ColorSelectorEyeDropperProps extends HTMLStyledProps {
  /**
   * The icon to display in the eye dropper.
   */
  icon?: ReactNode
}

export const ColorSelectorEyeDropper = withContext<
  "div",
  ColorSelectorEyeDropperProps
>("div", "eyeDropper")(undefined, ({ children, icon, ...rest }) => {
  const { getEyeDropperProps } = useComponentContext()

  return getEyeDropperProps({
    children: icon || children || <PipetteIcon />,
    ...rest,
  })
})

export interface ColorSelectorColorSwatchGroupLabelProps extends HTMLStyledProps<"span"> {}

export const ColorSelectorColorSwatchGroupLabel = withContext<
  "span",
  ColorSelectorColorSwatchGroupLabelProps
>("span", "colorSwatchGroupLabel")(undefined, (props) => {
  const { colorSwatchGroupLabelProps, getColorSwatchGroupLabelProps } =
    useComponentContext()

  return getColorSwatchGroupLabelProps({
    ...colorSwatchGroupLabelProps,
    ...props,
  })
})

export interface ColorSelectorColorSwatchGroupProps extends HTMLStyledProps {}

export const ColorSelectorColorSwatchGroup = withContext<
  "div",
  ColorSelectorColorSwatchGroupProps
>("div", "colorSwatchGroup")(undefined, ({ children, ...rest }) => {
  const { colorSwatches, colorSwatchGroupProps, getColorSwatchGroupProps } =
    useComponentContext()

  return getColorSwatchGroupProps({
    children:
      children ??
      colorSwatchGroupProps?.children ??
      colorSwatches?.map((value, index) => (
        <ColorSelectorColorSwatchItem key={index} value={value} />
      )),
    ...colorSwatchGroupProps,
    ...rest,
  })
})

export interface ColorSelectorColorSwatchItemProps extends Omit<
  ColorSwatchProps,
  "color"
> {
  /**
   * The value of the color swatch.
   */
  value: string
}

export const ColorSelectorColorSwatchItem = withContext<
  "div",
  ColorSelectorColorSwatchItemProps
>(ColorSwatch, "colorSwatchItem")(undefined, (props) => {
  const { colorSwatchItemProps, getColorSwatchItemProps } =
    useComponentContext()

  return getColorSwatchItemProps({ ...colorSwatchItemProps, ...props })
})
