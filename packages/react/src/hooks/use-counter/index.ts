"use client"

import { useCallback, useState } from "react"
import {
  clampNumber,
  countDecimal,
  toPrecision,
  useCallbackRef,
} from "../../utils"

const parse = (value: number | string): number =>
  parseFloat(value.toString().replace(/[^\w.-]+/g, ""))

const getCountDecimal = (value: number, step: number): number =>
  Math.max(countDecimal(step), countDecimal(value))

const casting = (
  value: number | string,
  step: number,
  precision?: number,
): string | undefined => {
  value = parse(value)

  return !Number.isNaN(value)
    ? toPrecision(value, precision ?? getCountDecimal(value, step))
    : undefined
}

export interface UseCounterProps {
  /**
   * The initial value of the counter.
   * Should be less than `max` and greater than `min`.
   */
  defaultValue?: number | string
  /**
   * This controls the value update behavior in general.
   *
   * - If `true` and you use the stepper or up/down arrow keys,
   * the value will not exceed the `max` or go lower than `min`.
   *
   * - If `false`, the value will be allowed to go out of range.
   *
   * @default true
   */
  keepWithinRange?: boolean
  /**
   * The maximum value of the counter
   *
   * @default Number.MAX_SAFE_INTEGER
   */
  max?: number
  /**
   * The minimum value of the counter
   *
   * @default Number.MIN_SAFE_INTEGER
   */
  min?: number
  /**
   * The number of decimal points used to round the value.
   */
  precision?: number
  /**
   * The step used to increment or decrement the value.
   *
   * @default 1
   */
  step?: number
  /**
   * The value of the counter.
   * Should be less than `max` and greater than `min`.
   */
  value?: number | string
  /**
   * The callback fired when the value changes.
   */
  onChange?: (valueAsString: string, valueAsNumber: number) => void
}

/**
 * `useCounter` is a custom hook that returns the current counter value.
 *
 * @see https://yamada-ui.com/hooks/use-counter
 */
export const useCounter = ({
  keepWithinRange = true,
  max: maxValue = Number.MAX_SAFE_INTEGER,
  min: minValue = Number.MIN_SAFE_INTEGER,
  step: stepProp = 1,
  ...props
}: UseCounterProps = {}) => {
  const onChange = useCallbackRef(props.onChange)

  const [defaultValue, setValue] = useState<number | string>(() => {
    if (props.defaultValue == null) return ""

    return casting(props.defaultValue, stepProp, props.precision) ?? ""
  })

  const isControlled = typeof props.value !== "undefined"
  const value = isControlled ? (props.value as number | string) : defaultValue

  const countDecimal = getCountDecimal(parse(value), stepProp)

  const precision = props.precision ?? countDecimal

  const update = useCallback(
    (next: number | string) => {
      if (next === value) return

      if (!isControlled) setValue(next.toString())

      onChange(next.toString(), parse(next))
    },
    [onChange, isControlled, value],
  )

  const clamp = useCallback(
    (value: number) => {
      let nextValue = value

      if (keepWithinRange)
        nextValue = clampNumber(nextValue, minValue, maxValue)

      return toPrecision(nextValue, precision)
    },
    [precision, keepWithinRange, maxValue, minValue],
  )

  const increment = useCallback(
    (step = stepProp) => {
      let next: number | string

      if (value === "") {
        next = parse(step)
      } else {
        next = parse(value) + step
      }

      next = clamp(next as number)

      update(next)
    },
    [clamp, stepProp, update, value],
  )

  const decrement = useCallback(
    (step = stepProp) => {
      let next: number | string

      if (value === "") {
        next = parse(-step)
      } else {
        next = parse(value) - step
      }

      next = clamp(next as number)

      update(next)
    },
    [clamp, stepProp, update, value],
  )

  const reset = useCallback(() => {
    let next: number | string

    if (props.defaultValue == null) {
      next = ""
    } else {
      next = casting(props.defaultValue, stepProp, props.precision) ?? minValue
    }

    update(next)
  }, [props.defaultValue, props.precision, stepProp, update, minValue])

  const cast = useCallback(
    (value: number | string) => {
      const nextValue = casting(value, stepProp, precision) ?? minValue

      update(nextValue)
    },
    [precision, stepProp, update, minValue],
  )

  const valueAsNumber = parse(value)

  const out = valueAsNumber < minValue || maxValue < valueAsNumber
  const max = valueAsNumber === maxValue
  const min = valueAsNumber === minValue

  return {
    cast,
    clamp,
    decrement,
    increment,
    max,
    min,
    out,
    precision,
    reset,
    setValue,
    step: stepProp,
    update,
    value,
    valueAsNumber,
  }
}

export type UseCounterReturn = ReturnType<typeof useCounter>
