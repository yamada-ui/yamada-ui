import type {
  ColorModeToken,
  CSS,
  CSSUIObject,
  FC,
  HTMLUIProps,
  Interpolation,
  ThemeProps,
} from "../../core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { useAnimation } from "../../hooks/use-animation"
import { createContext, cx, valueToPercent } from "../../utils"

const [ProgressProvider, useProgress] = createContext<{
  [key: string]: CSSUIObject | undefined
}>({
  name: `ProgressStylesContext`,
  errorMessage: `useProgress returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `,
})

interface ProgressOptions {
  /**
   * The CSS `color` property.
   */
  filledTrackColor?: ColorModeToken<CSS.Property.Color, "colors">
  /**
   * If `true`, the progress bar will show stripe.
   *
   * @default false
   */
  hasStripe?: boolean
  /**
   * If `true`, the progress will be indeterminate and the `value` prop will be ignored.
   *
   * @default false
   *
   * @deprecated It will be deprecated in version 2.0.
   */
  isAnimation?: boolean
  /**
   * If `true`, and hasStripe is `true`, the stripes will be animated.
   *
   * @default false
   *
   * @deprecated It will be deprecated in version 2.0.
   */
  isStripeAnimation?: boolean
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

export interface ProgressProps
  extends HTMLUIProps,
    ThemeProps<"Progress">,
    ProgressOptions {}

/**
 * `Progress` is a component for visually indicating progress.
 *
 * @see Docs https://yamada-ui.com/components/feedback/progress
 */
export const Progress = forwardRef<ProgressProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Progress", props)
  const {
    className,
    borderRadius: _borderRadius,
    children,
    hasStripe,
    isAnimation,
    isStripeAnimation,
    max = 100,
    min = 0,
    rounded,
    speed,
    value,
    ...rest
  } = omitThemeProps(mergedProps, ["filledTrackColor"])

  const borderRadius =
    _borderRadius ?? rounded ?? (styles.track?.borderRadius as number | string)

  const ariaProps: HTMLUIProps = !isAnimation
    ? {
        "aria-valuemax": max,
        "aria-valuemin": min,
        "aria-valuenow": value,
        role: "meter",
      }
    : {}

  return (
    <ProgressProvider value={styles}>
      <ui.div
        ref={ref}
        className={cx("ui-progress", className)}
        borderRadius={borderRadius}
        __css={styles.track}
        {...ariaProps}
        {...rest}
      >
        <ProgressFilledTrack
          borderRadius={borderRadius}
          hasStripe={hasStripe}
          isAnimation={isAnimation}
          isStripeAnimation={isStripeAnimation}
          max={max}
          min={min}
          speed={speed}
          value={value}
        />
        {children}
      </ui.div>
    </ProgressProvider>
  )
})

Progress.displayName = "Progress"
Progress.__ui__ = "Progress"

interface ProgressFilledTrackProps extends HTMLUIProps, ProgressProps {}

const ProgressFilledTrack: FC<ProgressFilledTrackProps> = ({
  hasStripe,
  isAnimation,
  isStripeAnimation,
  max = 100,
  min = 0,
  speed = "1.4s",
  value = 0,
  ...rest
}) => {
  const percent = valueToPercent(value, min, max)

  const styles = useProgress()

  const stripeAnimation = useAnimation({
    duration: typeof speed === "string" ? speed : `${speed}s`,
    iterationCount: "infinite",
    keyframes: {
      "0%": { bgPosition: "1rem 0" },
      "100%": { bgPosition: "0 0" },
    },
    timingFunction: "linear",
  })

  const interpolationAnimation = useAnimation({
    duration: typeof speed === "string" ? speed : `${speed}s`,
    iterationCount: "infinite",
    keyframes: {
      "0%": { left: "-40%" },
      "100%": { left: "100%" },
    },
    timingFunction: "ease",
  })

  isStripeAnimation = !isAnimation && hasStripe && isStripeAnimation

  const css: Interpolation<{}> = {
    ...(isStripeAnimation
      ? {
          animation: stripeAnimation,
        }
      : {}),
    ...(isAnimation
      ? {
          animation: interpolationAnimation,
          minWidth: "50%",
          position: "absolute",
          willChange: "left",
        }
      : {}),
  }

  const __css: CSSUIObject = {
    h: "100%",
    w: `${percent}%`,
    ...styles.filledTrack,
  }

  return <ui.div css={css} aria-hidden __css={__css} {...rest} />
}

ProgressFilledTrack.displayName = "ProgressFilledTrack"
ProgressFilledTrack.__ui__ = "ProgressFilledTrack"
