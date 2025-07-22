"use client"

import type { WithoutThemeProps } from "../../core"
import type { AlphaSliderStyle } from "./alpha-slider.style"
import { useMemo } from "react"
import { createSlotComponent } from "../../core"
import { useValue } from "../../hooks/use-value"
import { alphaToHex, convertColor } from "../../utils"
import { checkersProps } from "../color-swatch"
import { HueSlider } from "../hue-slider"
import { alphaSliderStyle } from "./alpha-slider.style"

interface ComponentContext
  extends Pick<
    Required<AlphaSliderRootProps>,
    "color" | "max" | "min" | "orientation"
  > {}

export const getAriaValueText = (alpha: number) => `${alpha * 100}%`

export interface AlphaSliderRootProps
  extends WithoutThemeProps<
    Omit<
      HueSlider.RootProps,
      "color" | "max" | "step" | "thumbProps" | "trackProps"
    >,
    AlphaSliderStyle
  > {
  /**
   * The color used for the slider.
   */
  color: string
  /**
   * The maximum allowed value of the slider. Cannot be less than min.
   *
   * @default 1
   */
  max?: number
  /**
   * The step in which increments or decrements have to be made.
   *
   * @default 0.01
   */
  step?: number
  /**
   * Props for the overlay element.
   */
  overlayProps?: AlphaSliderOverlayProps
  /**
   * Props for the thumb element.
   */
  thumbProps?: AlphaSliderThumbProps
  /**
   * Props for the track element.
   */
  trackProps?: AlphaSliderTrackProps
}

const {
  ComponentContext,
  PropsContext: AlphaSliderPropsContext,
  useComponentContext,
  usePropsContext: useAlphaSliderPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  AlphaSliderRootProps,
  AlphaSliderStyle,
  ComponentContext
>("alpha-slider", alphaSliderStyle)

export { AlphaSliderPropsContext, useAlphaSliderPropsContext }

/**
 * `AlphaSlider` is a component used to allow the user to select color transparency.
 *
 * @see https://yamada-ui.com/components/alpha-slider
 */
export const AlphaSliderRoot = withProvider<"div", AlphaSliderRootProps>(
  ({
    children,
    color,
    max = 1,
    min = 0,
    orientation: orientationProp = "horizontal",
    overlayProps,
    thumbProps,
    trackProps,
    ...rest
  }) => {
    const orientation = useValue(orientationProp)
    const computedChildren = useMemo(() => {
      if (children) return children

      return (
        <AlphaSliderTrack {...trackProps}>
          <AlphaSliderThumb {...thumbProps} />

          <AlphaSliderOverlay {...overlayProps} />
        </AlphaSliderTrack>
      )
    }, [children, overlayProps, thumbProps, trackProps])
    const context = useMemo(
      () => ({ color, max, min, orientation }),
      [color, min, max, orientation],
    )

    return (
      <ComponentContext value={context}>
        <HueSlider.Root max={max} min={min} orientation={orientation} {...rest}>
          {computedChildren}
        </HueSlider.Root>
      </ComponentContext>
    )
  },
  "root",
)({ getAriaValueText, step: 0.01 })

export interface AlphaSliderOverlayProps extends HueSlider.OverlayProps {}

export const AlphaSliderOverlay = withContext<"div", AlphaSliderOverlayProps>(
  HueSlider.Overlay,
  "overlay",
)(undefined, ({ layers, ...rest }) => {
  const { color, max, min, orientation } = useComponentContext()

  layers ??= [
    checkersProps,
    {
      bgGradient: `linear(${[
        orientation === "horizontal" ? "to-r" : "to-t",
        convertColor(color)("hex") + alphaToHex(min),
        convertColor(color)("hex") + alphaToHex(max),
      ].join(", ")})`,
      boxShadow: "inner",
    },
  ]

  return { layers, ...rest }
})

export interface AlphaSliderTrackProps extends HueSlider.TrackProps {}

export const AlphaSliderTrack = withContext<"div", AlphaSliderTrackProps>(
  HueSlider.Track,
  "track",
)()

export interface AlphaSliderThumbProps extends HueSlider.ThumbProps {}

export const AlphaSliderThumb = withContext<"div", AlphaSliderThumbProps>(
  HueSlider.Thumb,
  "thumb",
)()
