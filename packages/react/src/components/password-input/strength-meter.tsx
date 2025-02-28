import type { ReactNode } from "react"
import type { HTMLUIProps } from "../../core"
import type { StrengthMeterStyle } from "./strength-meter.style"
import type { UseStrengthMeterProps } from "./use-strength-meter"
import { createSlotComponent, ui } from "../../core"
import { strengthMeterStyle } from "./strength-meter.style"
import { useStrengthMeter } from "./use-strength-meter"

interface IndicatorProps extends HTMLUIProps {
  label?: ReactNode
}

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
export interface StrengthMeterProps extends HTMLUIProps, UseStrengthMeterProps {
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

export const {
  PropsContext: StrengthMeterPropsContext,
  usePropsContext: useStrengthMeterPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<StrengthMeterProps, StrengthMeterStyle>(
  "strength-meter",
  strengthMeterStyle,
)

export const StrengthMeter = withProvider<"div", StrengthMeterProps>(
  ({
    max = 4,
    value,
    withLabel = true,
    getIndicatorProps: getCustomIndicatorProps = getDefaultIndicatorProps,
    ...rest
  }) => {
    const percent = (value / max) * 100
    const { label, ...indicatorProps } = getCustomIndicatorProps(percent)

    const { getIndicatorProps, getRootProps } = useStrengthMeter({
      max,
      value,
      ...rest,
    })

    return (
      <ui.div {...getRootProps()}>
        <Indicators>
          {Array.from({ length: max }).map((_, index) => (
            <Indicator
              key={index}
              {...getIndicatorProps({ index, ...indicatorProps })}
            />
          ))}
        </Indicators>

        {withLabel && label ? <Label>{label}</Label> : null}
      </ui.div>
    )
  },
  "root",
)()

interface IndicatorProps extends HTMLUIProps {}

const Indicator = withContext<"div", IndicatorProps>("div", "indicator")()

interface IndicatorsProps extends HTMLUIProps {}

const Indicators = withContext<"div", IndicatorsProps>("div", "indicators")()

interface LabelProps extends HTMLUIProps<"span"> {}

const Label = withContext<"span", LabelProps>("span", "label")()
