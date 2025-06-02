import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { ProgressStyle } from "./progress.style"
import type { UseProgressProps } from "./use-progress"
import { createSlotComponent, mergeCSS, styled } from "../../core"
import { isNumber } from "../../utils"
import { progressStyle } from "./progress.style"
import { useProgress } from "./use-progress"

export interface ProgressProps
  extends HTMLStyledProps,
    UseProgressProps,
    ThemeProps<ProgressStyle> {
  /**
   * The animation duration in seconds.
   */
  duration?: number | string
  /**
   * The color of the progress range.
   */
  rangeColor?: CSSProps["color"]
  /**
   * The color of the progress track.
   */
  trackColor?: CSSProps["color"]
  /**
   * Props for the progress range element.
   */
  rangeProps?: ProgressRangeProps
}

export const {
  PropsContext: ProgressPropsContext,
  usePropsContext: useProgressPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ProgressProps, ProgressStyle>("progress", progressStyle)

/**
 * `Progress` is a component for visually indicating progress.
 *
 * @see https://yamada-ui.com/components/progress
 */
export const Progress = withProvider(
  ({ css, max, min, rangeColor, trackColor, value, rangeProps, ...rest }) => {
    const { percent, getRangeProps, getRootProps } = useProgress({
      max,
      min,
      value,
    })

    return (
      <styled.div
        css={mergeCSS(css, { "--width": `${percent}%` })}
        bg={trackColor}
        {...getRootProps(rest)}
      >
        <ProgressRange bg={rangeColor} {...getRangeProps(rangeProps)} />
      </styled.div>
    )
  },
  "root",
)(undefined, ({ duration, ...rest }) => ({
  "--duration": isNumber(duration) ? `${duration}s` : duration,
  ...rest,
}))

interface ProgressRangeProps extends HTMLStyledProps {}

const ProgressRange = withContext<"div", ProgressRangeProps>("div", "range")()
