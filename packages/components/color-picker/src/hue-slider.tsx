import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { UseColorSliderProps } from "./use-color-slider"
import { useColorSlider } from "./use-color-slider"

const defaultOverlays = (
  min: number,
  max: number,
  withShadow: boolean,
): HTMLUIProps[] => {
  let overlays: HTMLUIProps[] = [
    {
      bgGradient: `linear(to-r, ${[...Array(7)]
        .map(
          (_, index) =>
            `hsl(${Math.round(min + ((max - min) / 6) * index)}, 100%, 50%)`,
        )
        .join(", ")})`,
    },
  ]

  if (withShadow)
    overlays = [
      ...overlays,
      {
        boxShadow: `rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset`,
      },
    ]

  return overlays
}

interface HueSliderOptions {
  /**
   * The minimum allowed value of the slider. Cannot be greater than max.
   *
   * @default 0
   */
  min?: number
  /**
   * The maximum allowed value of the slider. Cannot be less than min.
   *
   * @default 360
   */
  max?: number
  /**
   * The step in which increments or decrements have to be made.
   *
   * @default 1
   */
  step?: number
  /**
   * If `true`, the slider has an inner `box-shadow`.
   *
   * @default true
   */
  withShadow?: boolean
  /**
   * Props for slider input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for slider track element.
   */
  trackProps?: HTMLUIProps
  /**
   * Props for slider thumb element.
   */
  thumbProps?: HTMLUIProps
  /**
   * The overlay used for the slider.
   */
  overlays?: HTMLUIProps[]
}

/**
 * `HueSlider` is a component used to allow the user to select a color hue.
 *
 * @see Docs https://yamada-ui.com/components/forms/hue-slider
 */
export interface HueSliderProps
  extends ThemeProps<"HueSlider">,
    Partial<UseColorSliderProps>,
    HueSliderOptions {}

export const HueSlider = forwardRef<HueSliderProps, "input">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("HueSlider", props)
  const {
    className,
    inputProps,
    trackProps,
    thumbProps,
    min = 0,
    max = 360,
    withShadow = true,
    overlays = defaultOverlays(min, max, withShadow),
    __css,
    ...computedProps
  } = omitThemeProps(mergedProps)
  const { getContainerProps, getTrackProps, getInputProps, getThumbProps } =
    useColorSlider({ min, max, step: 1, ...computedProps })

  const css: CSSUIObject = {
    ...styles.container,
    ...__css,
  }

  return (
    <ui.div
      className={cx("ui-hue-slider", className)}
      __css={css}
      {...getContainerProps()}
    >
      <ui.input {...getInputProps(inputProps, ref)} />

      {overlays.map((props, index) => (
        <ui.div
          key={index}
          className="ui-hue-slider__overlay"
          __css={{
            ...styles.overlay,
          }}
          {...props}
        />
      ))}

      <ui.div
        className="ui-hue-slider__track"
        __css={{ ...styles.track }}
        {...getTrackProps(trackProps)}
      >
        <ui.div
          className="ui-hue-slider__thumb"
          __css={{ ...styles.thumb }}
          {...getThumbProps(thumbProps)}
        />
      </ui.div>
    </ui.div>
  )
})
