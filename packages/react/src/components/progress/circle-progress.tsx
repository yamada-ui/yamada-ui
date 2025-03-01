import type { CSSProps, HTMLUIProps, ThemeProps } from "../../core"
import type { CircleProgressStyle } from "./circle-progress.style"
import { createSlotComponent, mergeVars, ui } from "../../core"
import { valueToPercent } from "../../utils"
import { circleProgressStyle } from "./circle-progress.style"

export interface CircleProgressRootProps
  extends Omit<HTMLUIProps, "color">,
    ThemeProps<CircleProgressStyle> {
  /**
   * The CSS `color` property.
   *
   * @default 'primary'
   */
  color?: CSSProps["color"]
  /**
   * If `true`, the cap of the progress indicator will be rounded.
   *
   * @default false
   */
  fullRounded?: boolean
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
  thickness?: CSSProps["width"]
  /**
   * The CSS `color` property.
   *
   * @default 'border'
   */
  trackColor?: CSSProps["color"]
  /**
   * The value of the progress.
   *
   * @default 0
   */
  value?: number
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
    boxSize = "6rem",
    children,
    color = "primary",
    fullRounded,
    max = 100,
    min = 0,
    speed = ["1.4s", "2s"],
    thickness = "0.625rem",
    trackColor = "border",
    value = 0,
    vars: varsProp,
    ...rest
  }) => {
    const transparent = value === 0
    const percent = valueToPercent(value, min, max)
    const interval = percent * 2.64

    const vars = mergeVars(
      varsProp,
      { name: "boxSize", token: "sizes", value: boxSize },
      { name: "thickness", token: "sizes", value: thickness },
    )

    const circleProps: CircleProgressCircleProps = {
      strokeDasharray: `${interval} ${264 - interval}`,
      strokeDashoffset: 66,
      transitionDuration: "0.6s",
      transitionProperty: "stroke-dasharray, stroke",
      transitionTimingFunction: "ease",
    }

    const ariaProps: HTMLUIProps = {
      "aria-valuemax": max,
      "aria-valuemin": min,
      "aria-valuenow": value,
      role: "meter",
    }

    return (
      <ui.div vars={vars} {...ariaProps} {...rest}>
        <CircleProgressShape boxSize={boxSize} speed={speed}>
          <CircleProgressCircle stroke={trackColor} />

          <CircleProgressCircle
            opacity={transparent ? 0 : undefined}
            stroke={color}
            strokeLinecap={fullRounded ? "round" : undefined}
            {...circleProps}
          />
        </CircleProgressShape>

        {children}
      </ui.div>
    )
  },
)()

interface CircleProgressCircleProps extends HTMLUIProps<"circle"> {}

const CircleProgressCircle = withContext<"circle", CircleProgressCircleProps>(
  "circle",
  "circle",
)(undefined, (props) => ({
  cx: 50,
  cy: 50,
  fill: "transparent",
  r: 42,
  ...props,
}))

interface CircleProgressShapeProps
  extends Omit<HTMLUIProps<"svg">, "children" | "speed">,
    Pick<Required<CircleProgressRootProps>, "children" | "speed"> {}

const CircleProgressShape = withContext<"svg", CircleProgressShapeProps>(
  "svg",
  "shape",
)(undefined, (props) => ({
  "aria-hidden": true,
  viewBox: "0 0 100 100",
  ...props,
}))

export interface CircleProgressLabelProps extends HTMLUIProps<"span"> {}

export const CircleProgressLabel = withContext<
  "span",
  CircleProgressLabelProps
>("span", "label")()
