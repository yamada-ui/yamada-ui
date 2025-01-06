import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { UseColorSliderProps } from "./use-color-slider"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { createContext, cx } from "@yamada-ui/utils"
import { useColorSlider } from "./use-color-slider"

interface HueSliderContext {
  styles: { [key: string]: CSSUIObject | undefined }
}

const [HueSliderProvider, useHueSlider] = createContext<HueSliderContext>({
  name: "SliderContext",
  errorMessage: `useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<HueSlider />" `,
})

const defaultOverlays = (
  min: number,
  max: number,
  withShadow: boolean,
): HTMLUIProps[] => {
  const overlays: HTMLUIProps[] = [
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
    overlays.push({
      boxShadow: `rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset`,
    })

  return overlays
}

interface HueSliderOptions {
  /**
   * The maximum allowed value of the slider. Cannot be less than min.
   *
   * @default 360
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
   * Props for slider thumb element.
   */
  thumbProps?: HTMLUIProps
  /**
   * Props for slider track element.
   */
  trackProps?: HTMLUIProps
}

export interface HueSliderProps
  extends ThemeProps<"HueSlider">,
    Partial<Omit<UseColorSliderProps, "channel">>,
    HueSliderOptions {}

/**
 * `HueSlider` is a component used to allow the user to select a color hue.
 *
 * @see Docs https://yamada-ui.com/components/forms/hue-slider
 */
export const HueSlider = forwardRef<HueSliderProps, "input">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("HueSlider", props)
  const {
    className,
    max = 360,
    min = 0,
    withShadow = true,
    overlays = defaultOverlays(min, max, withShadow),
    inputProps,
    thumbProps,
    trackProps,
    __css,
    ...computedProps
  } = omitThemeProps(mergedProps)
  const { getContainerProps, getInputProps, getThumbProps, getTrackProps } =
    useColorSlider({ max, min, step: 1, ...computedProps, channel: "hue" })

  const css: CSSUIObject = {
    position: "relative",
    ...styles.container,
    ...__css,
  }

  return (
    <HueSliderProvider value={{ styles }}>
      <ui.div
        className={cx("ui-hue-slider", className)}
        __css={css}
        {...getContainerProps()}
      >
        <ui.input {...getInputProps(inputProps, ref)} />

        {overlays.map((props, index) => (
          <HueSliderOverlay key={index} {...props} />
        ))}

        <HueSliderTrack {...getTrackProps(trackProps)}>
          <HueSliderThumb {...getThumbProps(thumbProps)} />
        </HueSliderTrack>
      </ui.div>
    </HueSliderProvider>
  )
})

HueSlider.displayName = "HueSlider"
HueSlider.__ui__ = "HueSlider"

interface HueSliderOverlayProps extends HTMLUIProps {}

const HueSliderOverlay = forwardRef<HueSliderOverlayProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles } = useHueSlider()

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
        className={cx("ui-hue-slider__overlay", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

HueSliderOverlay.displayName = "HueSliderOverlay"
HueSliderOverlay.__ui__ = "HueSliderOverlay"

interface HueSliderTrackProps extends HTMLUIProps {}

const HueSliderTrack = forwardRef<HueSliderTrackProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles } = useHueSlider()

    const css: CSSUIObject = {
      h: "100%",
      position: "relative",
      w: "100%",
      ...styles.track,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-hue-slider__track", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

HueSliderTrack.displayName = "HueSliderTrack"
HueSliderTrack.__ui__ = "HueSliderTrack"

interface HueSliderThumbProps extends HTMLUIProps {}

const HueSliderThumb = forwardRef<HueSliderThumbProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles } = useHueSlider()

    const css: CSSUIObject = { ...styles.thumb }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-hue-slider__thumb", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

HueSliderThumb.displayName = "HueSliderThumb"
HueSliderThumb.__ui__ = "HueSliderThumb"
