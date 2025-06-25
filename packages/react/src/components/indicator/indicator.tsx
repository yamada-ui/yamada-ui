"use client"

import type { ReactNode } from "react"
import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { FloatProps } from "../float"
import type { IndicatorStyle } from "./indicator.style"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { dataAttr, isNumber, isObject } from "../../utils"
import { Float } from "../float"
import { indicatorStyle } from "./indicator.style"

interface PingOptions {
  /**
   * It is used for the color of the ping animation.
   */
  color?: CSSProps["backgroundColor"]
  /**
   * It is used for the duration of the ping animation.
   */
  duration?: CSSProps["animationDuration"]
  /**
   * It is used for the count of the ping animation.
   */
  iterationCount?: CSSProps["animationIterationCount"]
  /**
   * It is used for the scale of the ping animation.
   */
  scale?: CSSProps["scale"]
  /**
   * It is used for the timing function of the ping animation.
   */
  timingFunction?: CSSProps["animationTimingFunction"]
}

export interface IndicatorProps
  extends Omit<HTMLStyledProps, "offset">,
    Omit<ThemeProps<IndicatorStyle>, "ping">,
    Pick<FloatProps, "offset" | "placement"> {
  /**
   * If `true`, the indicator will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The indicator label to use.
   */
  label?: ReactNode
  /**
   * If `label` is of type number, the maximum number displayed.
   *
   * @default 99
   */
  overflowCount?: number
  /**
   * If `true`, make an element scale and fade like a radar ping or ripple of water.
   *
   * @default false
   */
  ping?: boolean | PingOptions
  /**
   * If `true`, display 0.
   *
   * @default true
   */
  showZero?: boolean
  /**
   * Props for the float element.
   */
  floatProps?: IndicatorFloatProps
  /**
   * Props for the label element.
   */
  labelProps?: IndicatorLabelProps
}

export const {
  PropsContext: IndicatorPropsContext,
  usePropsContext: useIndicatorPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<IndicatorProps, IndicatorStyle>(
  "indicator",
  indicatorStyle,
)

/**
 * `Indicator` is a component that displays at the corner of elements such as avatars.
 *
 * @see https://yamada-ui.com/components/indicator
 */
export const Indicator = withProvider(
  ({
    children,
    disabled,
    label,
    offset,
    overflowCount = 99,
    placement,
    showZero = true,
    floatProps,
    labelProps,
    ...rest
  }) => {
    const numeric = isNumber(label)

    disabled ??= numeric && !showZero && (label as number) <= 0

    const computedLabel = useMemo(() => {
      if (numeric && label > overflowCount) {
        return (
          <>
            {overflowCount}
            <styled.span>+</styled.span>
          </>
        )
      } else {
        return label
      }
    }, [numeric, label, overflowCount])

    return (
      <styled.div {...rest}>
        {children}

        {!disabled ? (
          <IndicatorFloat offset={offset} placement={placement} {...floatProps}>
            <IndicatorLabel data-numeric={dataAttr(numeric)} {...labelProps}>
              {computedLabel}
            </IndicatorLabel>
          </IndicatorFloat>
        ) : null}
      </styled.div>
    )
  },
  "root",
)(({ ping, ...rest }) => {
  if (isObject(ping)) {
    const { color, duration, iterationCount, scale, timingFunction } = ping

    return {
      ...rest,
      "--animation-scale": scale,
      "--duration": duration ? `durations.${duration}` : undefined,
      "--iteration-count": iterationCount,
      "--ping-color": color ? `colors.${color}` : undefined,
      "--timing-function": timingFunction
        ? `easings.${timingFunction}`
        : undefined,
      ping: true,
    }
  } else {
    return { ...rest, ping }
  }
})

interface IndicatorFloatProps extends FloatProps {}

const IndicatorFloat = withContext<"div", IndicatorFloatProps>(Float, "float")()

interface IndicatorLabelProps extends HTMLStyledProps<"span"> {}

const IndicatorLabel = withContext<"span", IndicatorLabelProps>(
  "span",
  "label",
)()
