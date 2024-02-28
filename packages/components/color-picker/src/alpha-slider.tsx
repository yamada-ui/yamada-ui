import {
  ui,
  forwardRef,
  omitThemeProps,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import { alphaToHex, convertColor, cx } from "@yamada-ui/utils"
import type { UseColorSliderProps } from "./use-color-slider"
import { useColorSlider } from "./use-color-slider"

const defaultOverlays = (
  color: string,
  min: number,
  max: number,
  withShadow: boolean,
): HTMLUIProps<"div">[] => {
  let overlays: HTMLUIProps<"div">[] = [
    {
      bgImage:
        "linear-gradient(45deg, var(--ui-checkers) 25%, transparent 25%), linear-gradient(-45deg, var(--ui-checkers) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--ui-checkers) 75%), linear-gradient(-45deg, var(--ui-body) 75%, var(--ui-checkers) 75%)",
      bgSize: `8px 8px`,
      bgPosition: `0 0, 0 4px, 4px -4px, -4px 0`,
      var: [
        {
          name: "checkers",
          token: "colors",
          value: ["blackAlpha.300", "whiteAlpha.300"],
        },
        {
          name: "body",
          token: "colors",
          value: ["whiteAlpha.500", "blackAlpha.500"],
        },
      ],
    },
    {
      bgGradient: `linear(to-r, ${
        convertColor(color)("hex") + alphaToHex(min)
      }, ${convertColor(color)("hex") + alphaToHex(max)})`,
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

type AlphaSliderOptions = {
  /**
   * The color used for the slider.
   *
   * @default "#ffffff"
   */
  color?: string
  /**
   * The minimum allowed value of the slider. Cannot be greater than max.
   *
   * @default 0
   */
  min?: number
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

export type AlphaSliderProps = ThemeProps<"AlphaSlider"> &
  Partial<Omit<UseColorSliderProps, "color">> &
  AlphaSliderOptions

/**
 * `AlphaSlider` is a component used to allow the user to select color transparency.
 *
 * @see Docs https://yamada-ui.com/components/forms/alpha-slider
 */
export const AlphaSlider = forwardRef<AlphaSliderProps, "input">(
  (props, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle("AlphaSlider", props)
    const {
      className,
      inputProps,
      trackProps,
      thumbProps,
      color = "#ffffff",
      min = 0,
      max = 1,
      withShadow = true,
      overlays = defaultOverlays(color, min, max, withShadow),
      __css,
      ...computedProps
    } = omitThemeProps(mergedProps)
    const { getContainerProps, getTrackProps, getInputProps, getThumbProps } =
      useColorSlider({
        min,
        max,
        step: 0.01,
        thumbColor: "transparent",
        ...computedProps,
      })

    const css: CSSUIObject = {
      position: "relative",
      ...styles.container,
      ...__css,
    }

    return (
      <ui.div
        className={cx("ui-alpha-slider", className)}
        __css={css}
        {...getContainerProps()}
      >
        <ui.input {...getInputProps(inputProps, ref)} />

        {overlays.map((props, index) => (
          <ui.div
            key={index}
            className="ui-alpha-slider__overlay"
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
          className="ui-alpha-slider__track"
          __css={{
            position: "relative",
            w: "100%",
            h: "100%",
            ...styles.track,
          }}
          {...getTrackProps(trackProps)}
        >
          <ui.div
            className="ui-alpha-slider__thumb"
            __css={{ ...styles.thumb }}
            {...getThumbProps(thumbProps)}
          />
        </ui.div>
      </ui.div>
    )
  },
)
