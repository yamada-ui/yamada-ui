"use client"

import type { ReactNode } from "react"
import type { HTMLStyledProps } from "../../core"
import type { StrengthMeterStyle } from "./strength-meter.style"
import type { UseStrengthMeterProps } from "./use-strength-meter"
import { createSlotComponent, styled } from "../../core"
import { strengthMeterStyle } from "./strength-meter.style"
import { useStrengthMeter } from "./use-strength-meter"

interface IndicatorProps extends HTMLStyledProps {
  label?: ReactNode
}

export interface StrengthMeterProps
  extends HTMLStyledProps, UseStrengthMeterProps {
  /**
   * If `true`, the password strength meter will display the label.
   *
   * @default true
   */
  withLabel?: boolean
  /**
   * The props of the password strength meter indicator.
   */
  getIndicatorProps?: (percent: number) => IndicatorProps
}

const {
  PropsContext: StrengthMeterPropsContext,
  usePropsContext: useStrengthMeterPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<StrengthMeterProps, StrengthMeterStyle>(
  "strength-meter",
  strengthMeterStyle,
)

export { StrengthMeterPropsContext, useStrengthMeterPropsContext }

export const StrengthMeter = withProvider<"div", StrengthMeterProps>(
  ({
    max = 4,
    value,
    withLabel = true,
    getIndicatorProps: getCustomIndicatorProps,
    ...rest
  }) => {
    const percent = (value / max) * 100

    const getDefaultIndicatorProps = (percent: number): IndicatorProps => {
      switch (true) {
        case percent < 33:
          return { label: "Low", _selected: { bg: "red.500" } }
        case percent < 66:
          return { label: "Medium", _selected: { bg: "orange.500" } }
        default:
          return { label: "High", _selected: { bg: "green.500" } }
      }
    }

    getCustomIndicatorProps ??= getDefaultIndicatorProps

    const { label, ...indicatorProps } = getCustomIndicatorProps(percent)

    const { getIndicatorProps, getRootProps } = useStrengthMeter({
      max,
      value,
      ...rest,
    })

    return (
      <styled.div {...getRootProps()}>
        <StrengthMeterIndicators>
          {Array.from({ length: max }).map((_, index) => (
            <StrengthMeterIndicator
              key={index}
              {...getIndicatorProps({ index, ...indicatorProps })}
            />
          ))}
        </StrengthMeterIndicators>

        {withLabel && label ? (
          <StrengthMeterLabel>{label}</StrengthMeterLabel>
        ) : null}
      </styled.div>
    )
  },
  "root",
)()

interface StrengthMeterIndicatorsProps extends HTMLStyledProps {}

const StrengthMeterIndicators = withContext<
  "div",
  StrengthMeterIndicatorsProps
>("div", "indicators")()

interface StrengthMeterIndicatorProps extends HTMLStyledProps {}

const StrengthMeterIndicator = withContext<"div", StrengthMeterIndicatorProps>(
  "div",
  "indicator",
)()

interface StrengthMeterLabelProps extends HTMLStyledProps<"span"> {}

const StrengthMeterLabel = withContext<"span", StrengthMeterLabelProps>(
  "span",
  "label",
)()
