import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  StyleValue,
} from "../../core"
import type { UseSaturationSliderProps } from "./use-saturation-slider"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { cx, replaceObject } from "../../utils"
import { useSaturationSlider } from "./use-saturation-slider"

interface SaturationSliderOptions {
  /**
   * The aspect ratio of the saturation slider.
   *
   * @default '16 / 9'
   */
  ratio?: StyleValue<number>
  /**
   * Props for saturation slider inner element.
   */
  innerProps?: HTMLUIProps
  /**
   * Props for saturation slider input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for saturation slider thumb element.
   */
  thumbProps?: HTMLUIProps
  /**
   * Props for saturation slider track element.
   */
  trackProps?: HTMLUIProps
}

export interface SaturationSliderProps
  extends ThemeProps<"SaturationSlider">,
    UseSaturationSliderProps,
    SaturationSliderOptions {}

/**
 * `SaturationSlider` is a component used to allow the user to select a color saturation.
 *
 * @see https://yamada-ui.com/components/forms/saturation-slider
 */
export const SaturationSlider = forwardRef<SaturationSliderProps, "input">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle(
      "SaturationSlider",
      props,
    )
    const {
      className,
      ratio = 16 / 9,
      innerProps,
      inputProps,
      thumbProps,
      trackProps,
      __css,
      ...computedProps
    } = omitThemeProps(mergedProps)
    const {
      overlays,
      getContainerProps,
      getInnerProps,
      getInputProps,
      getThumbProps,
      getTrackProps,
    } = useSaturationSlider(computedProps)

    const css: CSSUIObject = {
      "& > *": {
        alignItems: "center",
        bottom: "0",
        display: "flex",
        h: "100%",
        justifyContent: "center",
        left: "0",
        position: "absolute",
        right: "0",
        top: "0",
        w: "100%",
      },
      position: "relative",
      _before: {
        content: `""`,
        display: "block",
        h: 0,
        pb: replaceObject(ratio, (r) => `${(1 / r) * 100}%`),
      },
      ...styles.container,
      ...__css,
    }

    return (
      <ui.div
        className={cx("ui-saturation-slider", className)}
        __css={css}
        {...getContainerProps()}
      >
        <ui.div
          className={cx("ui-saturation-slider__inner", className)}
          __css={{ ...styles.inner }}
          {...getInnerProps(innerProps)}
        >
          <ui.input {...getInputProps(inputProps, ref)} />

          {overlays.map((props, index) => (
            <ui.div
              key={index}
              className="ui-saturation-slider__overlay"
              __css={{
                bottom: 0,
                left: 0,
                position: "absolute",
                right: 0,
                top: 0,
                ...styles.overlay,
              }}
              {...props}
            />
          ))}

          <ui.div
            className="ui-saturation-slider__track"
            __css={{
              h: "100%",
              position: "relative",
              w: "100%",
              ...styles.track,
            }}
            {...getTrackProps(trackProps)}
          >
            <ui.div
              className="ui-saturation-slider__thumb"
              __css={{ ...styles.thumb }}
              {...getThumbProps(thumbProps)}
            />
          </ui.div>
        </ui.div>
      </ui.div>
    )
  },
)

SaturationSlider.displayName = "SaturationSlider"
SaturationSlider.__ui__ = "SaturationSlider"
