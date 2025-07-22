"use client"

import type { FC, ReactElement, ReactNode } from "react"
import type {
  CSSProps,
  GenericsComponent,
  HTMLStyledProps,
  ThemeProps,
} from "../../core"
import type { SliderStyle } from "./slider.style"
import type { UseSliderProps, UseSliderReturn } from "./use-slider"
import { useMemo } from "react"
import { createSlotComponent, styled, varAttr } from "../../core"
import { useValue } from "../../hooks/use-value"
import { dataAttr, isNumber } from "../../utils"
import { sliderStyle } from "./slider.style"
import { useSlider } from "./use-slider"

interface ComponentContext
  extends Pick<
    UseSliderReturn,
    | "getInputProps"
    | "getMarkProps"
    | "getRangeProps"
    | "getThumbProps"
    | "getTrackProps"
    | "range"
  > {}

export interface SliderRootProps<Y extends [number, number] | number = number>
  extends Omit<HTMLStyledProps, "defaultValue" | "onChange" | "ref">,
    Omit<UseSliderProps<Y>, "orientation">,
    ThemeProps<SliderStyle> {
  /**
   * The fill color of the indicator.
   */
  indicatorFill?: CSSProps["color"]
  /**
   * The rounded of the indicator.
   */
  indicatorRounded?: CSSProps["rounded"]
  /**
   * The marks to display on the slider.
   */
  marks?: SliderMarksProps["marks"]
  /**
   * The fill color of the range.
   */
  rangeFill?: CSSProps["color"]
  /**
   * The fill color of the thumb.
   */
  thumbFill?: CSSProps["color"]
  /**
   * The rounded of the thumb.
   */
  thumbRounded?: CSSProps["rounded"]
  /**
   * The size of the thumb.
   */
  thumbSize?: CSSProps["boxSize"]
  /**
   * The stroke color of the thumb.
   */
  thumbStroke?: CSSProps["color"]
  /**
   * The fill color of the track.
   */
  trackFill?: CSSProps["color"]
  /**
   * The rounded of the track.
   */
  trackRounded?: CSSProps["rounded"]
  /**
   * The size of the track.
   */
  trackSize?: CSSProps["boxSize"]
  /**
   * Props for the input element.
   */
  inputProps?: SliderInputProps
  /**
   * Props for the marks element.
   */
  marksProps?: Partial<SliderMarksProps>
  /**
   * Props for the range element.
   */
  rangeProps?: SliderRangeProps
  /**
   * Props for the thumb element.
   */
  thumbProps?: SliderThumbProps
  /**
   * Props for the track element.
   */
  trackProps?: SliderTrackProps
}

const {
  ComponentContext,
  PropsContext: SliderPropsContext,
  useComponentContext,
  usePropsContext: useSliderPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<SliderRootProps, SliderStyle, ComponentContext>(
  "slider",
  sliderStyle,
)

export { SliderPropsContext, useSliderPropsContext }

/**
 * `Slider` is a component used for allowing users to select a value from a range.
 *
 * @see https://yamada-ui.com/components/slider
 */
export const SliderRoot = withProvider<"div", SliderRootProps, "orientation">(
  <Y extends [number, number] | number = number>({
    children,
    marks,
    orientation: orientationProp,
    inputProps,
    marksProps,
    rangeProps,
    thumbProps,
    trackProps,
    ...rest
  }: SliderRootProps<Y>) => {
    const orientation = useValue(orientationProp)
    const {
      range,
      getInputProps,
      getMarkProps,
      getRangeProps,
      getRootProps,
      getThumbProps,
      getTrackProps,
    } = useSlider<Y>({ orientation, ...rest })
    const computedChildren = useMemo(() => {
      if (children) return children

      return (
        <>
          <SliderTrack {...trackProps}>
            <SliderRange {...rangeProps} />

            {range ? (
              <SliderThumbs {...thumbProps} />
            ) : (
              <SliderThumb {...thumbProps} />
            )}
          </SliderTrack>

          {marks ? <SliderMarks marks={marks} {...marksProps} /> : null}
        </>
      )
    }, [children, marks, marksProps, range, rangeProps, thumbProps, trackProps])
    const context = useMemo(
      () => ({
        range,
        getInputProps,
        getMarkProps,
        getRangeProps,
        getThumbProps,
        getTrackProps,
      }),
      [
        range,
        getInputProps,
        getMarkProps,
        getRangeProps,
        getThumbProps,
        getTrackProps,
      ],
    )

    return (
      <ComponentContext value={context}>
        <styled.div {...getRootProps()}>
          <SliderInput {...inputProps} />

          {computedChildren}
        </styled.div>
      </ComponentContext>
    )
  },
  "root",
  { transferProps: ["orientation"] },
)(
  undefined,
  ({
    indicatorFill,
    indicatorRounded,
    rangeFill,
    thumbFill,
    thumbRounded,
    thumbSize,
    thumbStroke,
    trackFill,
    trackRounded,
    trackSize,
    ...rest
  }) => ({
    "--indicator-fill": varAttr(indicatorFill, "colors"),
    "--indicator-rounded": varAttr(indicatorRounded, "radii"),
    "--range-fill": varAttr(rangeFill, "colors"),
    "--thumb-fill": varAttr(thumbFill, "colors"),
    "--thumb-rounded": varAttr(thumbRounded, "radii"),
    "--thumb-size": varAttr(thumbSize, "sizes"),
    "--thumb-stroke": varAttr(thumbStroke, "colors"),
    "--track-fill": varAttr(trackFill, "colors"),
    "--track-rounded": varAttr(trackRounded, "radii"),
    "--track-size": varAttr(trackSize, "sizes"),
    ...rest,
  }),
) as GenericsComponent<{
  <Y extends [number, number] | number = number>(
    props: SliderRootProps<Y>,
  ): ReactElement
}>

interface SliderInputProps extends HTMLStyledProps<"input"> {}

const SliderInput: FC<SliderInputProps> = () => {
  const { range, getInputProps } = useComponentContext()

  return range ? (
    Array.from({ length: 2 }).map((_, index) => (
      <styled.input key={index} {...getInputProps({ index })} />
    ))
  ) : (
    <styled.input {...getInputProps()} />
  )
}

export interface SliderTrackProps extends HTMLStyledProps {}

export const SliderTrack = withContext<"div", SliderTrackProps>("div", "track")(
  undefined,
  (props) => {
    const { getTrackProps } = useComponentContext()

    return getTrackProps(props)
  },
)

export interface SliderRangeProps extends HTMLStyledProps {}

export const SliderRange = withContext<"div", SliderRangeProps>("div", "range")(
  undefined,
  (props) => {
    const { getRangeProps } = useComponentContext()

    return getRangeProps(props)
  },
)

export interface SliderMarkProps extends HTMLStyledProps {
  /**
   * The value of the mark.
   */
  value: number
  /**
   * Whether the mark is an indicator.
   *
   * @default true
   */
  indicator?: boolean
}

export const SliderMark = withContext<"div", SliderMarkProps>("div", "mark")(
  undefined,
  ({ indicator = true, ...props }) => {
    const { getMarkProps } = useComponentContext()

    return getMarkProps({ "data-indicator": dataAttr(indicator), ...props })
  },
)

export interface SliderMarksProps extends Omit<SliderMarkProps, "value"> {
  /**
   * The marks to display on the slider.
   */
  marks: (number | { label: ReactNode; value: number; indicator?: boolean })[]
}

export const SliderMarks: FC<SliderMarksProps> = ({ marks, ...props }) => {
  return (
    <>
      {marks.map((mark, index) => {
        if (isNumber(mark)) {
          return <SliderMark key={index} value={mark} {...props} />
        } else {
          const { indicator, label, value } = mark

          return (
            <SliderMark key={index} indicator={indicator} value={value}>
              {label}
            </SliderMark>
          )
        }
      })}
    </>
  )
}

export interface SliderThumbProps extends HTMLStyledProps {
  /**
   * The index of the thumb.
   */
  index?: number
}

export const SliderThumb = withContext<"div", SliderThumbProps>("div", "thumb")(
  undefined,
  (props) => {
    const { getThumbProps } = useComponentContext()

    return getThumbProps(props)
  },
)

export interface SliderThumbsProps extends SliderThumbProps {}

export const SliderThumbs: FC<SliderThumbsProps> = (props) => {
  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => (
        <SliderThumb key={index} index={index} {...props} />
      ))}
    </>
  )
}
