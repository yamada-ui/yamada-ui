import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import type { UseSliderProps } from "./use-slider"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import {
  cx,
  findChild,
  getValidChildren,
  includesChildren,
  isEmpty,
  omitChildren,
} from "@yamada-ui/utils"
import { SliderProvider, useSlider, useSliderContext } from "./use-slider"

export const getThumbSize = (
  thumbSize: CSSUIProps["boxSize"] | undefined,
  styles: { [key: string]: CSSUIObject | undefined },
) =>
  (thumbSize ??
    styles.thumb?.boxSize ??
    styles.thumb?.minBoxSize ??
    styles.thumb?.width ??
    styles.thumb?.w ??
    styles.thumb?.minWidth ??
    styles.thumb?.minW ??
    styles.thumb?.height ??
    styles.thumb?.h ??
    styles.thumb?.minHeight ??
    styles.thumb?.minH ??
    "3.5") as CSSUIProps["boxSize"] | undefined

export interface SliderOptions {
  /**
   * The CSS `color` property. Used in `color` of filled track element.
   */
  filledTrackColor?: CSSUIProps["color"]
  /**
   * The CSS `background` property. Used in `background` of thumb element.
   */
  thumbColor?: CSSUIProps["bg"]
  /**
   * The CSS `box-size` property. Used in `box-size` of thumb element.
   */
  thumbSize?: CSSUIProps["boxSize"]
  /**
   * The CSS `color` property. Used in `color` of track element.
   */
  trackColor?: CSSUIProps["color"]
  /**
   * The CSS `height` property. Used in `height` of track element.
   */
  trackSize?: CSSUIProps["h"]
  /**
   * Props for slider filled track element.
   */
  filledTrackProps?: SliderFilledTrackProps
  /**
   * Props for slider input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for slider thumb element.
   */
  thumbProps?: SliderThumbProps
  /**
   * Props for slider track element.
   */
  trackProps?: SliderTrackProps
}

export interface SliderProps
  extends ThemeProps<"Slider">,
    UseSliderProps,
    SliderOptions {}

/**
 * `Slider` is a component used for allowing users to select a value from a range.
 *
 * @see Docs https://yamada-ui.com/components/forms/slider
 */
export const Slider = forwardRef<SliderProps, "input">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Slider", props)
  const {
    className,
    children,
    filledTrackColor,
    thumbColor,
    thumbSize,
    trackColor,
    trackSize,
    filledTrackProps,
    inputProps,
    thumbProps,
    trackProps,
    ...rest
  } = omitThemeProps(mergedProps)
  const {
    isVertical,
    getContainerProps,
    getFilledTrackProps,
    getInputProps,
    getMarkProps,
    getThumbProps,
    getTrackProps,
  } = useSlider({ ...rest, thumbSize: getThumbSize(thumbSize, styles) })

  const css: CSSUIObject = { ...styles.container }

  const validChildren = getValidChildren(children)

  const customSliderTrack = findChild(validChildren, SliderTrack)
  const customSliderThumb = findChild(validChildren, SliderThumb)

  const hasSliderThumb = includesChildren(validChildren, SliderThumb)

  const cloneChildren = !isEmpty(validChildren)
    ? omitChildren(validChildren, SliderTrack, SliderThumb)
    : children

  return (
    <SliderProvider
      value={{
        filledTrackColor,
        isVertical,
        styles,
        thumbColor,
        thumbSize,
        trackColor,
        trackSize,
        filledTrackProps,
        getFilledTrackProps,
        getMarkProps,
        getThumbProps,
        getTrackProps,
        thumbProps,
        trackProps,
      }}
    >
      <ui.div
        className={cx("ui-slider", className)}
        __css={css}
        {...getContainerProps()}
      >
        <ui.input {...getInputProps(inputProps, ref)} />

        {customSliderTrack ?? <SliderTrack />}

        {cloneChildren}

        {customSliderThumb ?? (!hasSliderThumb ? <SliderThumb /> : null)}
      </ui.div>
    </SliderProvider>
  )
})

Slider.displayName = "Slider"
Slider.__ui__ = "Slider"

export interface SliderTrackProps
  extends HTMLUIProps,
    Pick<SliderOptions, "filledTrackProps"> {}

export const SliderTrack = forwardRef<SliderTrackProps, "div">(
  ({ className, children, filledTrackProps, ...rest }, ref) => {
    const {
      isVertical,
      styles,
      trackColor,
      trackSize,
      getTrackProps,
      trackProps,
    } = useSliderContext()

    const css: CSSUIObject = { ...styles.track }

    return (
      <ui.div
        className={cx("ui-slider__track", className)}
        __css={css}
        {...getTrackProps(
          {
            ...(trackColor ? { bg: trackColor } : {}),
            ...(trackSize
              ? isVertical
                ? { w: trackSize }
                : { h: trackSize }
              : {}),
            ...trackProps,
            ...rest,
          },
          ref,
        )}
      >
        {children ?? <SliderFilledTrack {...filledTrackProps} />}
      </ui.div>
    )
  },
)

SliderTrack.displayName = "SliderTrack"
SliderTrack.__ui__ = "SliderTrack"

export interface SliderFilledTrackProps extends HTMLUIProps {}

export const SliderFilledTrack = forwardRef<SliderFilledTrackProps, "div">(
  ({ className, ...rest }, ref) => {
    const { filledTrackColor, styles, filledTrackProps, getFilledTrackProps } =
      useSliderContext()

    const css: CSSUIObject = { ...styles.filledTrack }

    return (
      <ui.div
        className={cx("ui-slider__track-filled", className)}
        __css={css}
        {...getFilledTrackProps(
          {
            ...(filledTrackColor ? { bg: filledTrackColor } : {}),
            ...filledTrackProps,
            ...rest,
          },
          ref,
        )}
      />
    )
  },
)

SliderFilledTrack.displayName = "SliderFilledTrack"
SliderFilledTrack.__ui__ = "SliderFilledTrack"

export interface SliderMarkProps extends HTMLUIProps {
  value: number
}

export const SliderMark = forwardRef<SliderMarkProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles, getMarkProps } = useSliderContext()

    const css: CSSUIObject = {
      alignItems: "center",
      display: "inline-flex",
      justifyContent: "center",
      ...styles.mark,
    }

    return (
      <ui.div
        className={cx("ui-slider__mark", className)}
        __css={css}
        {...getMarkProps(rest, ref)}
      />
    )
  },
)

SliderMark.displayName = "SliderMark"
SliderMark.__ui__ = "SliderMark"

export interface SliderThumbProps extends HTMLUIProps {}

export const SliderThumb = forwardRef<SliderThumbProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles, thumbColor, thumbSize, getThumbProps, thumbProps } =
      useSliderContext()

    const css: CSSUIObject = { ...styles.thumb }

    return (
      <ui.div
        className={cx("ui-slider__thumb", className)}
        __css={css}
        {...getThumbProps(
          {
            ...(thumbColor ? { bg: thumbColor } : {}),
            ...(thumbSize ? { boxSize: thumbSize } : {}),
            ...thumbProps,
            ...rest,
          },
          ref,
        )}
      />
    )
  },
)

SliderThumb.displayName = "SliderThumb"
SliderThumb.__ui__ = "SliderThumb"
