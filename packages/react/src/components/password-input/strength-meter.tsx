import type { HTMLUIProps } from "../../core"
import type { StrengthMeterStyle } from "./strength-meter.style"
import type { UseStrengthMeterProps } from "./use-strength-meter"
import { createSlotComponent, ui } from "../../core"
import { strengthMeterStyle } from "./strength-meter.style"
import { useStrengthMeter } from "./use-strength-meter"

export interface StrengthMeterProps extends HTMLUIProps, UseStrengthMeterProps {
  /**
   * If `true`, the password strength meter will display the label.
   *
   * @default true
   */
  withLabel?: boolean
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
  ({ max = 4, withLabel = true, ...rest }) => {
    const { label, getIndicatorProps, getIndicatorsProps, getRootProps } =
      useStrengthMeter({ max, ...rest })

    return (
      <ui.div {...getRootProps()}>
        <Indicators {...getIndicatorsProps()}>
          {Array.from({ length: max }).map((_, index) => (
            <Indicator key={index} {...getIndicatorProps({ index })} />
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

const Label = withContext<"span", LabelProps>("span", "Label")()
