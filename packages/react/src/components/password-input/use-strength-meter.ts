import type { HTMLProps, PropGetter, RequiredPropGetter } from "../../core"
import { useCallback } from "react"
import { dataAttr } from "../../utils"

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
}

export const useStrengthMeter = ({
  max = 4,
  value,
  ...rest
}: UseStrengthMeterProps) => {
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
        ...props,
      }),
      [value],
    )

  return { getIndicatorProps, getRootProps }
}

export type UseStrengthMeterReturn = ReturnType<typeof useStrengthMeter>
