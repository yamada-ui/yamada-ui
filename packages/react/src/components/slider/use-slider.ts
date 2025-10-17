"use client"

import type { KeyboardEvent } from "react"
import type {
  HTMLProps,
  HTMLRefAttributes,
  Orientation,
  PropGetter,
  RequiredPropGetter,
} from "../../core"
import type { Point } from "../../utils"
import type { FieldProps } from "../field"
import { useCallback, useRef } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { usePanEvent } from "../../hooks/use-pan-event"
import { useI18n } from "../../providers/i18n-provider"
import {
  clampNumber,
  cx,
  dataAttr,
  handlerAll,
  isArray,
  isNumber,
  mergeRefs,
  percentToValue,
  roundNumberToStep,
  runKeyAction,
  valueToPercent,
  visuallyHiddenAttributes,
} from "../../utils"
import { useFieldProps } from "../field"

export interface UseSliderProps<Y extends [number, number] | number = number>
  extends Omit<HTMLProps, "defaultValue" | "onChange" | "ref">,
    HTMLRefAttributes<"input">,
    FieldProps {
  /**
   * The base `id` to use for the slider.
   */
  id?: string
  /**
   * The name attribute of the hidden `input` field.
   * This is particularly useful in forms.
   */
  name?: string
  /**
   * The minimum distance between slider thumbs.
   * Useful for preventing the thumbs from being too close together.
   *
   * @default 0
   */
  betweenThumbs?: number
  /**
   * The initial value of the slider.
   */
  defaultValue?: Y
  /**
   * This is used to format the value so that screen readers
   * can speak out a more human-friendly value.
   *
   * It is used to set the `aria-valuetext` property of the input.
   */
  getAriaValueText?: (value: number, index: number) => string | undefined
  /**
   * The maximum allowed value of the slider. Cannot be less than min.
   *
   * @default 100
   */
  max?: number
  /**
   * The minimum allowed value of the slider. Cannot be greater than max.
   *
   * @default 0
   */
  min?: number
  /**
   * The orientation of the slider.
   *
   * @default 'horizontal'
   */
  orientation?: Orientation
  /**
   * The step in which increments or decrements have to be made.
   *
   * @default 1
   */
  step?: number
  /**
   * The value of the slider.
   */
  value?: Y
  /**
   * Function called whenever the slider value changes.
   */
  onChange?: (value: Y) => void
  /**
   * Function called when the user is done selecting a new value.
   */
  onChangeEnd?: (value: Y) => void
  /**
   * Function called when the user starts selecting a new value.
   */
  onChangeStart?: (value: Y) => void
}

export const useSlider = <Y extends [number, number] | number = number>(
  props: UseSliderProps<Y> = {},
) => {
  const {
    props: {
      id,
      ref,
      name,
      "aria-labelledby": ariaLabelledBy,
      "aria-valuetext": ariaValueText,
      betweenThumbs = 0,
      defaultValue = 0 as Y,
      disabled,
      getAriaValueText,
      max = 100,
      min = 0,
      orientation = "horizontal",
      readOnly,
      required,
      step = 1,
      value: valueProp,
      onChange: onChangeProp,
      onChangeEnd,
      onChangeStart,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const { t } = useI18n("slider")
  const currentIndex = useRef(0)
  const interactive = !(disabled || readOnly)
  const [_, getPanEventProps] = usePanEvent<HTMLDivElement>({
    onEnd: (_, point, rect) => {
      if (!interactive) return

      const panValue = getPanValue(point, rect)

      if (range) {
        const start = currentIndex.current === 0
        const oppositeIndex = currentIndex.current === 0 ? 1 : 0
        const oppositeValue = value[oppositeIndex]!

        onChangeEnd?.(
          (start ? [panValue, oppositeValue] : [oppositeValue, panValue]) as Y,
        )
      } else {
        onChangeEnd?.(panValue as Y)
      }
    },
    onMove: (_, point, rect) => {
      if (!interactive) return

      const panValue = getPanValue(point, rect)

      onChange(currentIndex.current, panValue)
    },
    onStart: (_, point, rect) => {
      if (!interactive) return

      const panValue = getPanValue(point, rect)

      if (range) {
        const distances = value.map((value) => Math.abs(value - panValue))
        const closest = Math.min(...distances)
        const index = distances.indexOf(closest)

        currentIndex.current = index

        const start = index === 0
        const oppositeIndex = index === 0 ? 1 : 0
        const oppositeValue = value[oppositeIndex]!

        onChangeStart?.(
          (start ? [panValue, oppositeValue] : [oppositeValue, panValue]) as Y,
        )
      } else {
        currentIndex.current = 0

        onChangeStart?.(value as Y)
      }

      onChange(currentIndex.current, panValue)
    },
  })
  const range = !isNumber(value)
  const percent = (
    range
      ? value.map((value) => valueToPercent(value, min, max))
      : valueToPercent(value, min, max)
  ) as Y extends number ? number : number[]
  const tenStep = (max - min) / 10
  const oneStep = step || (max - min) / 100

  if (max < min) console.warn("Do not assign a number less than 'min' to 'max'")

  const getMinMax = useCallback(
    (index: number) => {
      const start = index === 0
      const oppositeIndex = index === 0 ? 1 : 0
      const oppositeValue = range ? value[oppositeIndex]! : value

      return {
        max: range ? (start ? oppositeValue - betweenThumbs : max) : max,
        min: range ? (start ? min : oppositeValue + betweenThumbs) : min,
      }
    },
    [betweenThumbs, max, min, range, value],
  )

  const getPanValue = useCallback(
    ({ x, y }: Point, { bottom, height, left, width }: DOMRect) => {
      const diff = orientation === "horizontal" ? x - left : bottom - y
      const length = orientation === "horizontal" ? width : height
      const percent = diff / length

      let nextValue = percentToValue(percent, min, max)

      nextValue = parseFloat(roundNumberToStep(nextValue, min, step))
      nextValue = clampNumber(nextValue, min, max)

      return nextValue
    },
    [orientation, min, max, step],
  )

  const onChange = useCallback(
    (index: number, value: number) => {
      if (!interactive) return

      const { max, min } = getMinMax(index)

      value = parseFloat(roundNumberToStep(value, min, oneStep))
      value = clampNumber(value, min, max)

      setValue((prev) => {
        if (isArray(prev)) {
          const next = [...prev]

          next[index] = value

          return next as Y
        } else {
          return value as Y
        }
      })
    },
    [getMinMax, interactive, oneStep, setValue],
  )

  const stepUp = useCallback(
    (index: number, step = oneStep) =>
      range
        ? onChange(index, value[index]! + step)
        : onChange(index, value + step),
    [oneStep, range, onChange, value],
  )

  const stepDown = useCallback(
    (index: number, step = oneStep) =>
      range
        ? onChange(index, value[index]! - step)
        : onChange(index, value - step),
    [oneStep, range, onChange, value],
  )

  const onKeyDown = useCallback(
    (index: number) => (ev: KeyboardEvent<HTMLDivElement>) => {
      const { max, min } = getMinMax(index)

      runKeyAction(ev, {
        ArrowDown: () => stepDown(index),
        ArrowLeft: () => stepDown(index),
        ArrowRight: () => stepUp(index),
        ArrowUp: () => stepUp(index),
        End: () => onChange(index, max),
        Home: () => onChange(index, min),
        PageDown: () => stepDown(index, tenStep),
        PageUp: () => stepUp(index, tenStep),
      })
    },
    [getMinMax, onChange, stepDown, stepUp, tenStep],
  )

  const getRootProps: PropGetter = useCallback(
    (props = {}) => {
      const computedProps: HTMLProps = {
        ...dataProps,
        "data-orientation": orientation,
        ...rest,
        ...props,
        onBlur: handlerAll(props.onBlur, eventProps.onBlur),
        onFocus: handlerAll(props.onFocus, eventProps.onFocus),
      }

      computedProps.style ??= {}

      if (isArray(percent)) {
        computedProps.style["--range-start"] = `${Math.abs(percent[0]!)}%`
        computedProps.style["--range-end"] = `${Math.abs(percent[1]!)}%`
      } else {
        computedProps.style["--range-start"] = "0%"
        computedProps.style["--range-end"] = `${Math.abs(percent)}%`
      }

      return computedProps
    },
    [dataProps, eventProps, orientation, percent, rest],
  )

  const getInputProps: PropGetter<"input", { index?: number }> = useCallback(
    ({ index = 0, ...props } = {}) => ({
      ...visuallyHiddenAttributes,
      ...dataProps,
      ...ariaProps,
      id,
      type: "hidden",
      name,
      disabled,
      readOnly,
      required,
      value: range ? value[index]! : value,
      ...props,
      ref: index === 0 ? mergeRefs(props.ref, ref) : props.ref,
    }),
    [
      dataProps,
      ariaProps,
      id,
      name,
      disabled,
      readOnly,
      required,
      range,
      value,
      ref,
    ],
  )

  const getTrackProps: PropGetter = useCallback(
    (props) =>
      getPanEventProps({
        ...dataProps,
        "data-orientation": orientation,
        ...props,
      }),
    [dataProps, getPanEventProps, orientation],
  )

  const getRangeProps: PropGetter = useCallback(
    (props) => ({
      ...dataProps,
      "data-orientation": orientation,
      "data-range": dataAttr(range),
      ...props,
    }),
    [dataProps, orientation, range],
  )

  const getMarkProps: RequiredPropGetter<"div", { value: number }> =
    useCallback(
      ({ style, value: valueProp, ...props }) => {
        const between = range
          ? value[0]! < valueProp && valueProp < value[1]!
          : valueProp < value
        const percent = valueToPercent(valueProp, min, max)

        return {
          ...dataProps,
          "aria-hidden": true,
          "data-between": dataAttr(between),
          "data-orientation": orientation,
          role: "presentation",
          ...props,
          style: { ...style, "--mark-position": `${percent}%` },
        }
      },
      [dataProps, max, min, orientation, range, value],
    )

  const getThumbProps: PropGetter<"div", { index?: number }> = useCallback(
    ({ index = 0, ...rest } = {}) => {
      const { max, min } = getMinMax(index)

      const props: HTMLProps = {
        ...dataProps,
        ...ariaProps,
        "aria-label": t("Slider thumb"),
        "aria-orientation": orientation,
        "aria-valuemax": max,
        "aria-valuemin": min,
        role: "slider",
        tabIndex: interactive ? 0 : -1,
        ...rest,
        "aria-labelledby": cx(rest["aria-labelledby"], ariaLabelledBy),
        onKeyDown: handlerAll(rest.onKeyDown, onKeyDown(index)),
      }

      if (range) {
        const currentValue = value[index]!

        props["data-start"] = dataAttr(index === 0)
        props["data-end"] = dataAttr(index === 1)
        props["aria-valuenow"] = currentValue
        props["aria-valuetext"] =
          ariaValueText ??
          getAriaValueText?.(currentValue, index) ??
          currentValue.toString()
      } else {
        props["data-end"] = dataAttr(index === 0)
        props["aria-valuenow"] = value
        props["aria-valuetext"] =
          ariaValueText ?? getAriaValueText?.(value, index) ?? value.toString()
      }

      return props
    },
    [
      t,
      ariaLabelledBy,
      ariaProps,
      ariaValueText,
      dataProps,
      getAriaValueText,
      getMinMax,
      interactive,
      onKeyDown,
      orientation,
      range,
      value,
    ],
  )

  return {
    percent,
    range,
    setValue,
    stepDown,
    stepUp,
    value,
    getInputProps,
    getMarkProps,
    getRangeProps,
    getRootProps,
    getThumbProps,
    getTrackProps,
    onChange,
  }
}

export type UseSliderReturn = ReturnType<typeof useSlider>
