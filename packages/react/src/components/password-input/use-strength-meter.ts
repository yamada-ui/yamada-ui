import type { ReactNode } from "react"
import type {
  HTMLProps,
  HTMLUIProps,
  PropGetter,
  RequiredPropGetter,
} from "../../core"
import { dataAttr } from "@yamada-ui/utils"
import { useCallback } from "react"

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

export interface UseStrengthMeterProps extends HTMLProps {
  /**
   * The value of the password strength meter.
   */
  value: number
  /**
   * The maximum value of the password strength meter.
   *
   * @default 4
   */
  max?: number
  /**
   * The props of the password strength meter indicator.
   */
  getIndicatorProps?: (percent: number) => IndicatorProps
}

export const useStrengthMeter = ({
  max = 4,
  value,
  getIndicatorProps: _getIndicatorProps = getDefaultIndicatorProps,
  ...rest
}: UseStrengthMeterProps) => {
  const percent = (value / max) * 100

  const { label, ...indicatorProps } = _getIndicatorProps(percent)

  const getRootProps: PropGetter = useCallback(
    (props) => ({
      "aria-label": "Password strength meter",
      "aria-valuemax": max,
      "aria-valuemin": 0,
      "aria-valuenow": value,
      role: "meter",
      ...rest,
      ...props,
    }),
    [max, rest, value],
  )

  const getIndicatorProps: RequiredPropGetter<"div", { index: number }> =
    useCallback(
      ({ index, ...props }) => ({
        "data-selected": dataAttr(index < value),
        ...indicatorProps,
        ...props,
      }),
      [indicatorProps, value],
    )

  return { label, getIndicatorProps, getRootProps }
}

export type UseStrengthMeterReturn = ReturnType<typeof useStrengthMeter>
