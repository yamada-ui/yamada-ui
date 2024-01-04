import {
  ui,
  forwardRef,
  omitThemeProps,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { UseColorSliderProps } from "./use-color-slider"
import { useColorSlider } from "./use-color-slider"

const defaultOverlays = (min: number, max: number): HTMLUIProps<"div">[] => [
  {
    bgGradient: `linear(to-r, ${[...Array(7)]
      .map(
        (_, index) =>
          `hsl(${Math.round(min + ((max - min) / 6) * index)}, 100%, 50%)`,
      )
      .join(", ")})`,
  },
]

type HueSliderOptions = {
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
   * Props for slider input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for slider track element.
   */
  trackProps?: HTMLUIProps<"div">
  /**
   * Props for slider thumb element.
   */
  thumbProps?: HTMLUIProps<"div">
  /**
   * The overlay used for the slider.
   */
  overlays?: HTMLUIProps<"div">[]
}

export type HueSliderProps = ThemeProps<"HueSlider"> &
  Partial<UseColorSliderProps> &
  HueSliderOptions

export const HueSlider = forwardRef<HueSliderProps, "input">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("HueSlider", props)
  const {
    className,
    inputProps,
    trackProps,
    thumbProps,
    min = 0,
    max = 360,
    overlays = defaultOverlays(min, max),
    ...computedProps
  } = omitThemeProps(mergedProps)
  const { getContainerProps, getTrackProps, getInputProps, getThumbProps } =
    useColorSlider({ min, max, step: 1, ...computedProps })

  const css: CSSUIObject = { position: "relative", ...styles.container }

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
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            ...styles.overlay,
          }}
          {...props}
        />
      ))}

      <ui.div
        className="ui-hue-slider__track"
        __css={{ position: "relative", w: "full", h: "full", ...styles.track }}
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
