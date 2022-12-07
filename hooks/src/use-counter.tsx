import { clampNumber, countDecimal, toPrecision, useCallbackRef } from '@yamada-ui/utils'
import { useCallback, useState } from 'react'

export interface UseCounterProps {
  value?: string | number
  defaultValue?: string | number
  step?: number
  min?: number
  max?: number
  precision?: number
  keepWithinRange?: boolean
  onChange?(valueAsString: string, valueAsNumber: number): void
}

export const useCounter = ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  keepWithinRange = true,
  ...props
}: UseCounterProps = {}) => {
  const onChange = useCallbackRef(props.onChange)

  const [defaultValue, setValue] = useState<string | number>(() => {
    if (props.defaultValue == null) return ''

    return casting(props.defaultValue, props.step ?? 1, props.precision) ?? ''
  })

  const isControlled = typeof props.value !== 'undefined'
  const value = isControlled ? (props.value as string | number) : defaultValue

  const countDecimal = getCountDecimal(parse(value), props.step ?? 1)

  const precision = props.precision ?? countDecimal

  const update = useCallback(
    (next: string | number) => {
      if (next === value) return

      if (!isControlled) setValue(next.toString())

      onChange(next.toString(), parse(next))
    },
    [onChange, isControlled, value],
  )

  const clamp = useCallback(
    (value: number) => {
      let nextValue = value

      if (keepWithinRange) nextValue = clampNumber(nextValue, min, max)

      return toPrecision(nextValue, precision)
    },
    [precision, keepWithinRange, max, min],
  )

  const increment = useCallback(
    (step = props.step ?? 1) => {
      let next: string | number

      if (value === '') {
        next = parse(step)
      } else {
        next = parse(value) + step
      }

      next = clamp(next as number)

      update(next)
    },
    [clamp, props.step, update, value],
  )

  const decrement = useCallback(
    (step = props.step ?? 1) => {
      let next: string | number

      if (value === '') {
        next = parse(-step)
      } else {
        next = parse(value) - step
      }

      next = clamp(next as number)

      update(next)
    },
    [clamp, props.step, update, value],
  )

  const reset = useCallback(() => {
    let next: string | number

    if (defaultValue == null) {
      next = ''
    } else {
      next = casting(defaultValue, props.step ?? 1, props.precision) ?? min
    }

    update(next)
  }, [defaultValue, props.precision, props.step, update, min])

  const cast = useCallback(
    (value: string | number) => {
      const nextValue = casting(value, props.step ?? 1, precision) ?? min

      update(nextValue)
    },
    [precision, props.step, update, min],
  )

  const valueAsNumber = parse(value)

  const isOut = valueAsNumber < min || max < valueAsNumber
  const isMax = valueAsNumber === max
  const isMin = valueAsNumber === min

  return {
    isOut,
    isMax,
    isMin,
    precision,
    value,
    valueAsNumber,
    update,
    reset,
    increment,
    decrement,
    clamp,
    cast,
    setValue,
  }
}

export type UseCounterReturn = ReturnType<typeof useCounter>

const parse = (value: string | number): number =>
  parseFloat(value.toString().replace(/[^\w.-]+/g, ''))

const getCountDecimal = (value: number, step: number): number =>
  Math.max(countDecimal(step), countDecimal(value))

const casting = (value: string | number, step: number, precision?: number): string | undefined => {
  value = parse(value)

  return !Number.isNaN(value)
    ? toPrecision(value, precision ?? getCountDecimal(value, step))
    : undefined
}
