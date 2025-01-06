import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { UseColorSliderProps } from "./use-color-slider"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { alphaToHex, convertColor, createContext, cx } from "@yamada-ui/utils"
import { useColorSlider } from "./use-color-slider"

interface AlphaSliderContext {
  styles: { [key: string]: CSSUIObject | undefined }
}

const [AlphaSliderProvider, useAlphaSlider] = createContext<AlphaSliderContext>(
  {
    name: "SliderContext",
    errorMessage: `useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<AlphaSlider />" `,
  },
)

const defaultOverlays = (
  color: string,
  min: number,
  max: number,
  withShadow: boolean,
): HTMLUIProps[] => {
  const overlays: HTMLUIProps[] = [
    {
      bgImage:
        "linear-gradient(45deg, $checkers 25%, transparent 25%), linear-gradient(-45deg, $checkers 25%, transparent 25%), linear-gradient(45deg, transparent 75%, $checkers 75%), linear-gradient(-45deg, $body 75%, $checkers 75%)",
      bgPosition: `0 0, 0 4px, 4px -4px, -4px 0`,
      bgSize: `8px 8px`,
      vars: [
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
    overlays.push({
      boxShadow: `rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset`,
    })

  return overlays
}

interface AlphaSliderOptions {
  /**
   * The color used for the slider.
   *
   * @default "#ffffff"
   */
  color?: string
  /**
   * The maximum allowed value of the slider. Cannot be less than min.
   *
   * @default 1
   */
  max?: number
  /**
   * The minimum allowed value of the slider. Cannot be greater than max.
   *
   * @default 0
   */
  min?: number
  /**
   * The overlay used for the slider.
   */
  overlays?: HTMLUIProps[]
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
   * Props for slider thumb element.
   */
  thumbProps?: HTMLUIProps
  /**
   * Props for slider track element.
   */
  trackProps?: HTMLUIProps
}

export interface AlphaSliderProps
  extends ThemeProps<"AlphaSlider">,
    Partial<Omit<UseColorSliderProps, "channel" | "color">>,
    AlphaSliderOptions {}

/**
 * `AlphaSlider` is a component used to allow the user to select color transparency.
 *
 * @see Docs https://yamada-ui.com/components/forms/alpha-slider
 */
export const AlphaSlider = forwardRef<AlphaSliderProps, "input">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("AlphaSlider", props)
    const {
      className,
      color = "#ffffff",
      max = 1,
      min = 0,
      withShadow = true,
      overlays = defaultOverlays(color, min, max, withShadow),
      inputProps,
      thumbProps,
      trackProps,
      __css,
      ...computedProps
    } = omitThemeProps(mergedProps)
    const { getContainerProps, getInputProps, getThumbProps, getTrackProps } =
      useColorSlider({
        max,
        min,
        step: 0.01,
        thumbColor: "transparent",
        ...computedProps,
        channel: "alpha",
      })

    const css: CSSUIObject = {
      position: "relative",
      ...styles.container,
      ...__css,
    }

    return (
      <AlphaSliderProvider value={{ styles }}>
        <ui.div
          className={cx("ui-alpha-slider", className)}
          __css={css}
          {...getContainerProps()}
        >
          <ui.input {...getInputProps(inputProps, ref)} />

          {overlays.map((props, index) => (
            <AlphaSliderOverlay key={index} {...props} />
          ))}

          <AlphaSliderTrack {...getTrackProps(trackProps)}>
            <AlphaSliderThumb {...getThumbProps(thumbProps)} />
          </AlphaSliderTrack>
        </ui.div>
      </AlphaSliderProvider>
    )
  },
)

AlphaSlider.displayName = "AlphaSlider"
AlphaSlider.__ui__ = "AlphaSlider"

interface AlphaSliderOverlayProps extends HTMLUIProps {}

const AlphaSliderOverlay = forwardRef<AlphaSliderOverlayProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles } = useAlphaSlider()

    const css: CSSUIObject = {
      bottom: 0,
      left: 0,
      position: "absolute",
      right: 0,
      top: 0,
      ...styles.overlay,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-alpha-slider__overlay", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

AlphaSliderOverlay.displayName = "AlphaSliderOverlay"
AlphaSliderOverlay.__ui__ = "AlphaSliderOverlay"

interface AlphaSliderTrackProps extends HTMLUIProps {}

const AlphaSliderTrack = forwardRef<AlphaSliderTrackProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles } = useAlphaSlider()

    const css: CSSUIObject = {
      h: "100%",
      position: "relative",
      w: "100%",
      ...styles.track,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-alpha-slider__track", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

AlphaSliderTrack.displayName = "AlphaSliderTrack"
AlphaSliderTrack.__ui__ = "AlphaSliderTrack"

interface AlphaSliderThumbProps extends HTMLUIProps {}

const AlphaSliderThumb = forwardRef<AlphaSliderThumbProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles } = useAlphaSlider()

    const css: CSSUIObject = { ...styles.thumb }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-alpha-slider__thumb", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

AlphaSliderThumb.displayName = "AlphaSliderThumb"
AlphaSliderThumb.__ui__ = "AlphaSliderThumb"
