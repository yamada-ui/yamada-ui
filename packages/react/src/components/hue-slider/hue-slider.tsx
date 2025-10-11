"use client"

import type { HTMLStyledProps, ThemeProps, WithoutThemeProps } from "../../core"
import type { HueSliderStyle } from "./hue-slider.style"
import { useCallback, useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useValue } from "../../hooks/use-value"
import { useI18n } from "../../providers/i18n-provider"
import { Slider } from "../slider"
import { hueSliderStyle } from "./hue-slider.style"

interface ComponentContext
  extends Pick<Required<HueSliderRootProps>, "max" | "min" | "orientation"> {}

export interface HueSliderRootProps
  extends WithoutThemeProps<
      Omit<
        Slider.RootProps,
        | "betweenThumbs"
        | "marks"
        | "marksProps"
        | "max"
        | "rangeFill"
        | "rangeProps"
        | "thumbFill"
        | "thumbProps"
        | "trackFill"
        | "trackProps"
      >,
      HueSliderStyle
    >,
    ThemeProps<HueSliderStyle> {
  /**
   * The maximum allowed value of the slider. Cannot be less than min.
   *
   * @default 360
   */
  max?: number
  /**
   * Props for the overlay element.
   */
  overlayProps?: HueSliderOverlayProps
  /**
   * Props for the thumb element.
   */
  thumbProps?: HueSliderThumbProps
  /**
   * Props for the track element.
   */
  trackProps?: HueSliderTrackProps
}

const {
  ComponentContext,
  PropsContext: HueSliderPropsContext,
  useComponentContext,
  usePropsContext: useHueSliderPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<HueSliderRootProps, HueSliderStyle, ComponentContext>(
  "hue-slider",
  hueSliderStyle,
)

export { HueSliderPropsContext, useHueSliderPropsContext }

/**
 * `HueSlider` is a component used to allow the user to select a color hue.
 *
 * @see https://yamada-ui.com/docs/components/hue-slider
 */
export const HueSliderRoot = withProvider<"input", HueSliderRootProps>(
  ({
    children,
    max = 360,
    min = 0,
    orientation: orientationProp = "horizontal",
    overlayProps,
    thumbProps,
    trackProps,
    ...rest
  }) => {
    const { t } = useI18n("hueSlider")
    const orientation = useValue(orientationProp)
    const computedChildren = useMemo(() => {
      if (children) return children

      return (
        <HueSliderTrack {...trackProps}>
          <HueSliderThumb {...thumbProps} />

          <HueSliderOverlay {...overlayProps} />
        </HueSliderTrack>
      )
    }, [children, overlayProps, thumbProps, trackProps])
    const context = useMemo(
      () => ({ max, min, orientation }),
      [max, min, orientation],
    )
    const getColorName = useCallback(
      (hue: number): string => {
        if (hue < 30 || hue >= 330) return t("Red")
        if (hue < 90) return t("Yellow")
        if (hue < 150) return t("Green")
        if (hue < 210) return t("Cyan")
        if (hue < 270) return t("Blue")
        return t("Magenta")
      },
      [t],
    )
    const getAriaValueText = useCallback(
      (hue: number) => `${hue}°, ${getColorName(hue)}`,
      [getColorName],
    )

    return (
      <ComponentContext value={context}>
        <Slider.Root
          getAriaValueText={getAriaValueText}
          max={max}
          min={min}
          orientation={orientation}
          {...rest}
        >
          {computedChildren}
        </Slider.Root>
      </ComponentContext>
    )
  },
  "root",
)({
  "--thumb-fill": "transparent",
  "--track-fill": "transparent",
})

export interface HueSliderTrackProps extends Slider.TrackProps {}

export const HueSliderTrack = withContext<"div", HueSliderTrackProps>(
  Slider.Track,
  "track",
)()

export interface HueSliderOverlayProps extends HTMLStyledProps {
  /**
   * The layers used for the overlay element.
   */
  layers?: HTMLStyledProps[]
}

export const HueSliderOverlay = withContext<"fragment", HueSliderOverlayProps>(
  ({ layers, ...rest }) => {
    const { max, min, orientation } = useComponentContext()

    layers ??= [
      {
        bgGradient: `linear(${[
          orientation === "horizontal" ? "to-r" : "to-t",
          ...Array.from({ length: 7 }).map(
            (_, index) =>
              `hsl(${Math.round(min + ((max - min) / 6) * index)}, 100%, 50%)`,
          ),
        ].join(", ")})`,
        boxShadow: "inner",
      },
    ]

    return (
      <>
        {layers.map((props, index) => (
          <styled.div
            key={index}
            data-orientation={orientation}
            {...rest}
            {...props}
          />
        ))}
      </>
    )
  },
  "overlay",
)()

export interface HueSliderThumbProps extends Slider.ThumbProps {}

export const HueSliderThumb = withContext<"div", HueSliderThumbProps>(
  Slider.Thumb,
  "thumb",
)()
