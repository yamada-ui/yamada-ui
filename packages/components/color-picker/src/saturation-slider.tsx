import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  Token,
} from "@yamada-ui/core"
import { cx, replaceObject } from "@yamada-ui/utils"
import type { UseSaturationSliderProps } from "./use-saturation-slider"
import { useSaturationSlider } from "./use-saturation-slider"

interface SaturationSliderOptions {
  /**
   * The aspect ratio of the saturation slider.
   *
   * @default '16 / 9'
   */
  ratio?: Token<number>
  /**
   * Props for saturation slider inner element.
   */
  innerProps?: HTMLUIProps
  /**
   * Props for saturation slider input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for saturation slider track element.
   */
  trackProps?: HTMLUIProps
  /**
   * Props for saturation slider thumb element.
   */
  thumbProps?: HTMLUIProps
}

/**
 * `SaturationSlider` is a component used to allow the user to select a color saturation.
 *
 * @see Docs https://yamada-ui.com/components/forms/saturation-slider
 */
export interface SaturationSliderProps
  extends ThemeProps<"SaturationSlider">,
    UseSaturationSliderProps,
    SaturationSliderOptions {}

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
      trackProps,
      thumbProps,
      __css,
      ...computedProps
    } = omitThemeProps(mergedProps)
    const {
      overlays,
      getContainerProps,
      getInnerProps,
      getTrackProps,
      getInputProps,
      getThumbProps,
    } = useSaturationSlider(computedProps)

    const css: CSSUIObject = {
      position: "relative",
      _before: {
        content: `""`,
        display: "block",
        h: 0,
        pb: replaceObject(ratio, (r) => `${(1 / r) * 100}%`),
      },
      "& > *": {
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        w: "100%",
        h: "100%",
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
            className="ui-saturation-slider__track"
            __css={{
              position: "relative",
              w: "100%",
              h: "100%",
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
