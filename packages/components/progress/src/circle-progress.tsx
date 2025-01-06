import type {
  CSSUIObject,
  CSSUIProps,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { useAnimation } from "@yamada-ui/use-animation"
import { cx, valueToPercent } from "@yamada-ui/utils"

interface CircleProgressOptions {
  /**
   * The CSS `box-size` property.
   *
   * @default '6rem'
   * @deprecated Use `boxSize` instead.
   */
  size?: CSSUIProps["boxSize"]
  /**
   * The CSS `color` property.
   *
   * @default 'primary'
   */
  color?: CSSUIProps["color"]
  /**
   * If `true`, the cap of the progress indicator will be rounded.
   *
   * @default false
   */
  fullRounded?: boolean
  /**
   * If `true`, the progress will be indeterminate and the `value` prop will be ignored.
   *
   * @default false
   *
   * @deprecated It will be deprecated in version 2.0.
   */
  isAnimation?: boolean
  /**
   * If `true`, the cap of the progress indicator will be rounded.
   *
   * @default false
   *
   * @deprecated Use `fullRounded` instead.
   */
  isRounded?: boolean
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
   * @default '[1.4s, 2s]'
   */
  speed?: [number | string, number | string]
  /**
   * The CSS `width` property.
   *
   * @default '0.625ewm'
   */
  thickness?: CSSUIProps["width"]
  /**
   * The CSS `color` property.
   *
   * @default 'border'
   */
  trackColor?: CSSUIProps["color"]
  /**
   * The value of the progress.
   *
   * @default 0
   */
  value?: number
}

export interface CircleProgressProps
  extends Omit<HTMLUIProps, "color">,
    Omit<ThemeProps<"CircleProgress">, "size">,
    CircleProgressOptions {}

/**
 * `CircleProgress` is a component that displays progress in a circular progress bar.
 *
 * @see Docs https://yamada-ui.com/components/feedback/circle-progress
 */
export const CircleProgress = forwardRef<CircleProgressProps, "div">(
  (props, ref) => {
    const [styles, { size = "6rem", ...mergedProps }] = useComponentStyle(
      "CircleProgress",
      props,
    )
    const {
      className,
      boxSize = size,
      children,
      color = "primary",
      isRounded,
      fullRounded = isRounded,
      isAnimation = false,
      max = 100,
      min = 0,
      speed = ["1.4s", "2s"],
      thickness = "0.625rem",
      trackColor = "border",
      value = 0,
      ...rest
    } = omitThemeProps(mergedProps)
    const isTransparent = value === 0 && !isAnimation
    const percent = valueToPercent(value, min, max)
    const interval = !isAnimation ? percent * 2.64 : undefined
    const animation = useAnimation({
      duration: typeof speed[0] === "string" ? speed[0] : `${speed[0]}s`,
      iterationCount: "infinite",
      keyframes: {
        "0%": {
          strokeDasharray: "1, 400",
          strokeDashoffset: "0",
        },
        "50%": {
          strokeDasharray: "400, 400",
          strokeDashoffset: "-100",
        },
        "100%": {
          strokeDasharray: "400, 400",
          strokeDashoffset: "-260",
        },
      },
      timingFunction: "linear",
    })
    const css: CSSUIObject = {
      ...styles,
      fontSize: "$boxSize",
      vars: [
        { name: "boxSize", token: "sizes", value: boxSize },
        { name: "thickness", token: "sizes", value: thickness },
      ],
    }
    const circleProps: CircleProgressCircleProps = isAnimation
      ? {
          animation,
        }
      : {
          strokeDasharray:
            interval == null ? undefined : `${interval} ${264 - interval}`,
          strokeDashoffset: 66,
          transitionDuration: "0.6s",
          transitionProperty: "stroke-dasharray, stroke",
          transitionTimingFunction: "ease",
        }
    const ariaProps: HTMLUIProps = !isAnimation
      ? {
          "aria-valuemax": max,
          "aria-valuemin": min,
          "aria-valuenow": value,
          role: "meter",
        }
      : {}

    return (
      <ui.div
        ref={ref}
        className={cx("ui-circle-progress", className)}
        __css={css}
        {...ariaProps}
        {...rest}
      >
        <CircleProgressShape
          boxSize={boxSize}
          isAnimation={isAnimation}
          speed={speed}
        >
          <CircleProgressCircle stroke={trackColor} strokeWidth="$thickness" />
          <CircleProgressCircle
            opacity={isTransparent ? 0 : undefined}
            stroke={color}
            strokeLinecap={fullRounded ? "round" : undefined}
            strokeWidth="$thickness"
            {...circleProps}
          />
        </CircleProgressShape>
        {children}
      </ui.div>
    )
  },
)

CircleProgress.displayName = "CircleProgress"
CircleProgress.__ui__ = "CircleProgress"

interface CircleProgressCircleProps extends HTMLUIProps<"circle"> {}

const CircleProgressCircle: FC<CircleProgressCircleProps> = ({ ...rest }) => (
  <ui.circle cx={50} cy={50} fill="transparent" r={42} {...rest} />
)

CircleProgressCircle.displayName = "CircleProgressCircle"
CircleProgressCircle.__ui__ = "CircleProgressCircle"

interface CircleProgressShapeProps
  extends Omit<HTMLUIProps<"svg">, "children" | "speed">,
    Pick<Required<CircleProgressProps>, "children" | "isAnimation" | "speed"> {}

const CircleProgressShape: FC<CircleProgressShapeProps> = ({
  boxSize,
  isAnimation,
  speed,
  ...rest
}) => {
  const animation = useAnimation({
    duration: typeof speed[1] === "string" ? speed[1] : `${speed[1]}s`,
    iterationCount: "infinite",
    keyframes: {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },
    timingFunction: "linear",
  })

  const css: CSSUIObject = {
    boxSize,
    display: "block",
    ...(isAnimation ? { animation } : {}),
  }

  return <ui.svg aria-hidden viewBox="0 0 100 100" __css={css} {...rest} />
}

CircleProgressShape.displayName = "CircleProgressShape"
CircleProgressShape.__ui__ = "CircleProgressShape"

export const CircleProgressLabel = ui("span", {
  baseStyle: {
    fontSize: "0.25em",
    left: "50%",
    position: "absolute",
    textAlign: "center",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  },
})

CircleProgressLabel.displayName = "CircleProgressLabel"
CircleProgressLabel.__ui__ = "CircleProgressLabel"
