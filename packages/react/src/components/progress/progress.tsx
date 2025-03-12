import type { CSSProps, HTMLUIProps, ThemeProps } from "../../core"
import type { ProgressStyle } from "./progress.style"
import { createSlotComponent, mergeCSS, mergeVars, ui } from "../../core"
import { useAnimation } from "../../hooks/use-animation"
import { valueToPercent } from "../../utils"
import { progressStyle } from "./progress.style"

export interface ProgressProps extends HTMLUIProps, ThemeProps<ProgressStyle> {
  /**
   * The CSS `color` property.
   */
  filledTrackColor?: CSSProps["borderColor"]
  /**
   * The maximum value of the progress.
   *
   * @default 100
   */
  max?: number
  /**
   * The minimum value of the progress.
   *
   * @default 0
   */
  min?: number
  /**
   * The animation speed in seconds.
   *
   * @default '1.4s'
   */
  speed?: number | string
  /**
   * The value of the progress.
   *
   * @default 0
   */
  value?: number
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
 * @see Docs https://yamada-ui.com/components/progress
 */
export const Progress = withProvider(
  ({
    borderRadius: _borderRadius,
    children,
    filledTrackColor,
    hasStripe,
    max = 100,
    min = 0,
    rounded,
    speed,
    value,
    vars: varsProp,
    ...rest
  }) => {
    const vars = mergeVars(
      varsProp,
      filledTrackColor
        ? {
            name: "filledTrackColor",
            token: "colors",
            value: filledTrackColor,
          }
        : undefined,
    )
    const borderRadius = _borderRadius ?? rounded

    const ariaProps: HTMLUIProps = {
      "aria-valuemax": max,
      "aria-valuemin": min,
      "aria-valuenow": value,
      role: "meter",
    }

    return (
      <ui.div borderRadius={borderRadius} {...ariaProps} {...rest}>
        <ProgressFilledTrack
          borderRadius={borderRadius}
          hasStripe={hasStripe}
          max={max}
          min={min}
          speed={speed}
          value={value}
          vars={vars}
        />
        {children}
      </ui.div>
    )
  },
  "track",
  { transferProps: ["hasStripe"] },
)()

interface ProgressFilledTrackProps extends HTMLUIProps, ProgressProps {}

const ProgressFilledTrack = withContext<"div", ProgressFilledTrackProps>(
  ({
    css: _css,
    hasStripe,
    max = 100,
    min = 0,
    speed = "1.4s",
    value = 0,
    ...rest
  }) => {
    const percent = valueToPercent(value, min, max)

    const stripeAnimation = useAnimation({
      duration: typeof speed === "string" ? speed : `${speed}s`,
      iterationCount: "infinite",
      keyframes: {
        "0%": { bgPosition: "1rem 0" },
        "100%": { bgPosition: "0 0" },
      },
      timingFunction: "linear",
    })

    const css = mergeCSS(_css, {
      ...(hasStripe
        ? {
            animation: stripeAnimation,
          }
        : {}),
      h: "100%",
      w: `${percent}%`,
    })

    return <ui.div css={css} aria-hidden {...rest} />
  },
  "filledTrack",
)()
