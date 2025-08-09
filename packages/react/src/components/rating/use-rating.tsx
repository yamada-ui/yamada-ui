"use client"

import type { ChangeEvent, KeyboardEvent, MouseEvent, TouchEvent } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { FieldProps } from "../field"
import { useCallback, useId, useMemo, useRef, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import {
  ariaAttr,
  clampNumber,
  createContext,
  dataAttr,
  handlerAll,
  mergeRefs,
  runKeyAction,
  visuallyHiddenAttributes,
} from "../../utils"
import { useFieldProps } from "../field"

const getRoundedValue = (value: number, to: number) => {
  const rounded = Math.round(value / to) * to
  const precision = `${to}`.split(".")[1]?.length || 0

  return Number(rounded.toFixed(precision))
}

export interface RatingContext extends Omit<UseRatingReturn, "getRootProps"> {}

const [RatingContext, useRatingContext] = createContext<RatingContext>({
  name: "RatingContext",
})

export { RatingContext, useRatingContext }

export interface UseRatingProps
  extends FieldProps,
    Omit<HTMLProps, "color" | "defaultValue" | "onChange"> {
  /**
   * The top-level id string that will be applied to the rating.
   * The index of the rating item will be appended to this top-level id.
   */
  id?: string
  /**
   * The name of the input element.
   */
  name?: string
  /**
   * Number of controls that should be rendered.
   *
   * @default 5
   */
  count?: number
  /**
   * The initial value of the rating.
   *
   * @default 0
   */
  defaultValue?: number
  /**
   * Number of fractions each item can be divided into,
   *
   * @default 1
   */
  fractions?: number
  /**
   * If `true`, only the selected icons will be filled.
   *
   * @default false
   */
  highlightSelectedOnly?: boolean
  /**
   * The value of the rating.
   */
  value?: number
  /**
   * The callback invoked when value state changes.
   */
  onChange?: (value: number) => void
  /**
   * The callback invoked when hovering over the rating.
   */
  onHover?: (value: number) => void
}

export const useRating = (props: UseRatingProps = {}) => {
  const uuid = useId()
  const {
    props: {
      id = uuid,
      name = uuid,
      count: countProp = 5,
      defaultValue = 0,
      disabled,
      fractions: fractionsProp = 1,
      highlightSelectedOnly = false,
      readOnly,
      required,
      value: valueProp,
      onChange: onChangeProp,
      onHover,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps({ ...props, notSupportReadOnly: true })
  const rootRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const [hoveredValue, setHoveredValue] = useState(-1)
  const outsideRef = useRef(true)
  const fractions = Math.floor(fractionsProp)
  const count = Math.floor(countProp)
  const decimal = 1 / fractions
  const roundedValue = useMemo(
    () => getRoundedValue(value, decimal),
    [decimal, value],
  )
  const interactive = !(readOnly || disabled)
  const displayValue = hoveredValue !== -1 ? hoveredValue : roundedValue

  const getHoveredValue = useCallback(
    (x: number) => {
      if (!rootRef.current) return -1

      const { left, width } = rootRef.current.getBoundingClientRect()
      const itemWidth = width / count

      const hoveredValue = (x - left) / itemWidth

      const value = clampNumber(
        getRoundedValue(hoveredValue + decimal / 2, decimal),
        decimal,
        count,
      )

      return value
    },
    [count, decimal],
  )

  const onMouseEnter = useCallback(() => {
    if (interactive) outsideRef.current = false
  }, [interactive])

  const onMouseLeave = useCallback(() => {
    if (!interactive) return

    setHoveredValue(-1)
    outsideRef.current = true

    if (hoveredValue !== -1) onHover?.(-1)
  }, [hoveredValue, onHover, interactive, setHoveredValue])

  const onMouseMove = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      if (disabled || readOnly) return

      const roundedValue = getHoveredValue(ev.clientX)

      setHoveredValue(roundedValue)

      if (roundedValue !== hoveredValue) onHover?.(roundedValue)
    },
    [disabled, getHoveredValue, hoveredValue, readOnly, onHover],
  )

  const onTouchStart = useCallback(
    (ev: TouchEvent<HTMLDivElement>) => {
      ev.preventDefault()

      const el = ev.touches[0]

      if (!el) return

      const value = getHoveredValue(el.clientX)

      setValue(value)
    },
    [getHoveredValue, setValue],
  )

  const onTouchEnd = useCallback((ev: TouchEvent<HTMLDivElement>) => {
    ev.preventDefault()
  }, [])

  const getRootProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      ...dataProps,
      ...eventProps,
      ...ariaProps,
      id,
      "aria-label": `${value} Stars`,
      "aria-readonly": ariaAttr(readOnly),
      role: "radiogroup",
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref, rootRef),
      onMouseEnter: handlerAll(
        props.onMouseEnter,
        rest.onMouseEnter,
        onMouseEnter,
      ),
      onMouseLeave: handlerAll(
        props.onMouseLeave,
        rest.onMouseLeave,
        onMouseLeave,
      ),
      onMouseMove: handlerAll(props.onMouseMove, rest.onMouseMove, onMouseMove),
      onTouchEnd: handlerAll(props.onTouchEnd, rest.onTouchEnd, onTouchEnd),
      onTouchStart: handlerAll(
        props.onTouchStart,
        rest.onTouchStart,
        onTouchStart,
      ),
    }),
    [
      ariaProps,
      dataProps,
      eventProps,
      id,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onTouchEnd,
      onTouchStart,
      readOnly,
      rest,
      value,
    ],
  )

  return {
    id,
    name,
    count,
    decimal,
    disabled,
    displayValue,
    fractions,
    highlightSelectedOnly,
    hoveredValue,
    interactive,
    outsideRef,
    readOnly,
    required,
    roundedValue,
    setHoveredValue,
    setValue,
    value,
    ariaProps,
    dataProps,
    eventProps,
    getRootProps,
  }
}

export type UseRatingReturn = ReturnType<typeof useRating>

export interface UseRatingItemProps extends HTMLProps<"label"> {
  groupValue: number
  index: number
}

export const useRatingItem = ({
  groupValue,
  index,
  ...rest
}: UseRatingItemProps) => {
  const {
    id: rootId,
    name,
    decimal,
    disabled,
    displayValue,
    highlightSelectedOnly,
    interactive,
    outsideRef,
    readOnly,
    required,
    roundedValue,
    setHoveredValue,
    setValue,
    ariaProps,
    dataProps,
    eventProps,
  } = useRatingContext()
  const fractionValue = decimal * (groupValue === 1 ? index : index + 1)
  const value = useMemo(
    () => getRoundedValue(groupValue - 1 + fractionValue, decimal),
    [decimal, fractionValue, groupValue],
  )
  const active = value === displayValue
  const checked = value === roundedValue
  const filled = highlightSelectedOnly
    ? value === displayValue
    : value <= displayValue
  const id = `${rootId}-${groupValue}-${value}`

  const onBlur = useCallback(() => {
    if (outsideRef.current) setHoveredValue(-1)
  }, [outsideRef, setHoveredValue])

  const onInputChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (!interactive) return

      const value = parseFloat(ev.target.value)

      setHoveredValue(value)
    },
    [interactive, setHoveredValue],
  )

  const onChange = useCallback(
    (value: number) => {
      if (!interactive) return

      setValue(value)
    },
    [interactive, setValue],
  )

  const onMouseDown = useCallback(() => {
    onChange(value)
  }, [onChange, value])

  const onTouchStart = useCallback(() => {
    onChange(value)
  }, [onChange, value])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      runKeyAction(ev, {
        Space: () => onChange(value),
      })
    },
    [onChange, value],
  )

  const getLabelProps: PropGetter<"label"> = useCallback(
    ({ style, ...props } = {}) => ({
      ...dataProps,
      ...ariaProps,
      htmlFor: id,
      "data-active": dataAttr(active),
      "data-filled": dataAttr(filled),
      ...rest,
      ...props,
      style: {
        ...style,
        zIndex: fractionValue !== 1 ? (active ? 1 : -1) : undefined,
      },
      onMouseDown: handlerAll(props.onMouseDown, onMouseDown),
      onTouchStart: handlerAll(props.onTouchStart, onTouchStart),
    }),
    [
      active,
      ariaProps,
      dataProps,
      filled,
      fractionValue,
      id,
      onMouseDown,
      onTouchStart,
      rest,
    ],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}) => ({
      ...dataProps,
      ...eventProps,
      ...ariaProps,
      id,
      type: "radio",
      name,
      style: visuallyHiddenAttributes.style,
      "aria-label": value.toString(),
      "data-active": dataAttr(active),
      "data-checked": dataAttr(checked),
      checked,
      disabled,
      readOnly,
      required,
      value,
      ...props,
      onBlur: handlerAll(onBlur, props.onBlur),
      onChange: handlerAll(props.onChange, onInputChange),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [
      id,
      name,
      value,
      active,
      checked,
      dataProps,
      eventProps,
      ariaProps,
      disabled,
      readOnly,
      required,
      onBlur,
      onInputChange,
      onKeyDown,
    ],
  )

  return {
    active,
    checked,
    filled,
    fractionValue,
    groupValue,
    value,
    getInputProps,
    getLabelProps,
  }
}

export type UseRatingItemReturn = ReturnType<typeof useRatingItem>
