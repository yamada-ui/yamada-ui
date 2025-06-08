import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { UseProgressProps } from "../progress"
import type { CircleProgressStyle } from "./circle-progress.style"
import { createSlotComponent, mergeCSS, styled, varAttr } from "../../core"
import { isNumber } from "../../utils"
import { useProgress } from "../progress"
import { circleProgressStyle } from "./circle-progress.style"

export interface CircleProgressRootProps
  extends HTMLStyledProps,
    UseProgressProps,
    ThemeProps<CircleProgressStyle> {
  /**
   * The animation duration in seconds.
   */
  duration?: number | string
  /**
   * The color of the progress range.
   */
  rangeColor?: CSSProps["color"]
  /**
   * The thickness of the progress bar.
   */
  thickness?: CSSProps["width"]
  /**
   * The color of the progress track.
   */
  trackColor?: CSSProps["color"]
  /**
   * Props for the progress circle element.
   */
  circleProps?: CircleProgressCircleProps
  /**
   * Props for the progress range element.
   */
  rangeProps?: CircleProgressRangeProps
  /**
   * Props for the progress track element.
   */
  trackProps?: CircleProgressTrackProps
}

export const {
  PropsContext: CircleProgressPropsContext,
  usePropsContext: useCircleProgressPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<CircleProgressRootProps, CircleProgressStyle>(
  "circle-progress",
  circleProgressStyle,
)

/**
 * `CircleProgress` is a component that displays progress in a circular progress bar.
 *
 * @see Docs https://yamada-ui.com/components/circle-progress
 */
export const CircleProgressRoot = withProvider<"div", CircleProgressRootProps>(
  ({
    css,
    children,
    max,
    min,
    rangeColor,
    trackColor,
    value,
    circleProps,
    rangeProps,
    trackProps,
    ...rest
  }) => {
    const { percent, getRangeProps, getRootProps, getTrackProps } =
      useProgress<"svg">({ max, min, value })

    return (
      <styled.div css={mergeCSS(css, { "--percent": percent })} {...rest}>
        <CircleProgressCircle {...getRootProps(circleProps)}>
          <CircleProgressTrack
            stroke={trackColor}
            {...getTrackProps(trackProps)}
          />
          <CircleProgressRange
            stroke={rangeColor}
            {...getRangeProps(rangeProps)}
          />
        </CircleProgressCircle>

        {children}
      </styled.div>
    )
  },
  "root",
)(({ boxSize, duration, thickness, ...rest }) => ({
  "--duration": isNumber(duration) ? `${duration}s` : duration,
  "--size": varAttr(boxSize, "sizes"),
  "--thickness": varAttr(thickness, "sizes"),
  ...rest,
}))

interface CircleProgressCircleProps extends HTMLStyledProps<"svg"> {}

const CircleProgressCircle = withContext<"svg", CircleProgressCircleProps>(
  "svg",
  "circle",
)()

interface CircleProgressTrackProps extends HTMLStyledProps<"circle"> {}

const CircleProgressTrack = withContext<"circle", CircleProgressTrackProps>(
  "circle",
  "track",
)()

interface CircleProgressRangeProps extends HTMLStyledProps<"circle"> {}

const CircleProgressRange = withContext<"circle", CircleProgressRangeProps>(
  "circle",
  "range",
)()

export interface CircleProgressLabelProps extends HTMLStyledProps<"span"> {}

export const CircleProgressLabel = withContext<
  "span",
  CircleProgressLabelProps
>("span", "label")()
