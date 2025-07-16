"use client"

import type { ChangeEvent, FocusEvent, KeyboardEvent } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { UseCounterProps } from "../../hooks/use-counter"
import type { FieldProps } from "../field"
import { useCallback, useMemo, useRef } from "react"
import { useCounter } from "../../hooks/use-counter"
import { useEventListener } from "../../hooks/use-event-listener"
import {
  ariaAttr,
  handlerAll,
  mergeRefs,
  runKeyAction,
  useSafeLayoutEffect,
} from "../../utils"
import { useFieldProps } from "../field"
import { useNumberCounter } from "./use-number-counter"

const defaultFormat = (value: number | string) => value.toString()

const defaultParse = (value: string) => value

const isDefaultValidCharacter = (char: string) => /^[Ee0-9+\-.]$/.test(char)

const isValidNumericKeyboardEvent = (
  { key, altKey, ctrlKey, metaKey }: KeyboardEvent,
  isValid: (key: string) => boolean,
) => {
  const modifierKey = ctrlKey || altKey || metaKey
  const singleCharacterKey = key.length === 1

  if (!singleCharacterKey || modifierKey) return true

  return isValid(key)
}

const getStepRatio = <Y extends KeyboardEvent | WheelEvent>({
  ctrlKey,
  metaKey,
  shiftKey,
}: Y) => {
  let ratio = 1

  if (metaKey || ctrlKey) ratio = 0.1

  if (shiftKey) ratio = 10

  return ratio
}

export interface UseNumberInputProps
  extends Omit<HTMLProps<"input">, keyof UseCounterProps>,
    UseCounterProps,
    FieldProps {
  /**
   * If `true`, the input's value will change based on mouse wheel.
   *
   * @default false
   */
  allowMouseWheel?: boolean
  /**
   * This controls the value update when you blur out of the input.
   * - If `true` and the value is greater than `max`, the value will be reset to `max`.
   * - Else, the value remains the same.
   *
   * @default true
   */
  clampValueOnBlur?: boolean
  /**
   * If `true`, the input will be focused as you increment or decrement the value with the button.
   *
   * @default true
   */
  focusInputOnChange?: boolean
  /**
   * If using a custom display format, this converts the default format to the custom format.
   */
  format?: (value: number | string) => string
  /**
   * This is used to format the value so that screen readers
   * can speak out a more human-friendly value.
   *
   * It is used to set the `aria-valuetext` property of the input.
   */
  getAriaValueText?: (value: number | string) => string | undefined
  /**
   * Whether the pressed key should be allowed in the input.
   * The default behavior is to allow DOM floating point characters defined by /^[Ee0-9+\-.]$/.
   */
  isValidCharacter?: (value: string) => boolean
  /**
   * If using a custom display format, this converts the custom format to a format `parseFloat` understands.
   */
  parse?: (value: string) => string
}

export const useNumberInput = (props: UseNumberInputProps = {}) => {
  const {
    props: {
      allowMouseWheel,
      clampValueOnBlur = true,
      defaultValue,
      disabled,
      focusInputOnChange = true,
      format = defaultFormat,
      getAriaValueText,
      isValidCharacter = isDefaultValidCharacter,
      keepWithinRange = true,
      max: maxValue = Number.MAX_SAFE_INTEGER,
      min: minValue = Number.MIN_SAFE_INTEGER,
      parse = defaultParse,
      precision,
      readOnly,
      step = 1,
      value: valueProp,
      onChange: onChangeProp,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const interactive = !(readOnly || disabled)
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    cast,
    max,
    min,
    out,
    setValue,
    update,
    value,
    valueAsNumber,
    ...counter
  } = useCounter({
    defaultValue,
    keepWithinRange,
    max: maxValue,
    min: minValue,
    precision,
    step,
    value: valueProp,
    onChange: onChangeProp,
  })
  const selectionRef = useRef<null | {
    end: null | number
    start: null | number
  }>(null)
  const valueText = useMemo(() => {
    let text = getAriaValueText?.(value)

    if (text != null) return text

    text = value.toString()

    return !text ? undefined : text
  }, [value, getAriaValueText])

  const sanitize = useCallback(
    (value: string) => value.split("").filter(isValidCharacter).join(""),
    [isValidCharacter],
  )

  const increment = useCallback(
    (value: number = step) => {
      if (!interactive) return

      counter.increment(value)

      if (!focusInputOnChange) return

      requestAnimationFrame(() => {
        inputRef.current?.focus()
      })
    },
    [interactive, counter, step, focusInputOnChange],
  )

  const decrement = useCallback(
    (value: number = step) => {
      if (!interactive) return

      counter.decrement(value)

      if (!focusInputOnChange) return

      requestAnimationFrame(() => {
        inputRef.current?.focus()
      })
    },
    [interactive, counter, step, focusInputOnChange],
  )

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if ((ev.nativeEvent as InputEvent).isComposing) return

      const { selectionEnd, selectionStart, value } = ev.currentTarget

      update(sanitize(parse(value)))

      selectionRef.current = { end: selectionEnd, start: selectionStart }
    },
    [parse, sanitize, update],
  )

  const onFocus = useCallback((ev: FocusEvent<HTMLInputElement>) => {
    if (!selectionRef.current) return

    const { end, start } = selectionRef.current
    const { selectionStart, value } = ev.currentTarget

    ev.currentTarget.selectionStart = start ?? value.length
    ev.currentTarget.selectionEnd = end ?? selectionStart
  }, [])

  const onBlur = useCallback(() => {
    if (!clampValueOnBlur) return

    let nextValue = value as number | string

    if (value === "") return

    const valueStartsWithE = /^[eE]/.test(value.toString())

    if (valueStartsWithE) {
      setValue("")
    } else {
      if (valueAsNumber < minValue) nextValue = minValue

      if (valueAsNumber > maxValue) nextValue = maxValue

      cast(nextValue)
    }
  }, [
    cast,
    clampValueOnBlur,
    maxValue,
    minValue,
    setValue,
    value,
    valueAsNumber,
  ])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (ev.nativeEvent.isComposing) return

      if (!isValidNumericKeyboardEvent(ev, isValidCharacter))
        ev.preventDefault()

      const stepValue = getStepRatio(ev) * step

      runKeyAction(ev, {
        ArrowDown: () => decrement(stepValue),
        ArrowUp: () => increment(stepValue),
        End: () => update(maxValue),
        Home: () => update(minValue),
      })
    },
    [decrement, increment, isValidCharacter, maxValue, minValue, step, update],
  )

  const { getDecrementProps, getIncrementProps } = useNumberCounter({
    "aria-disabled": ariaAttr(!interactive),
    decrement,
    disabled,
    increment,
    keepWithinRange,
    max,
    min,
    ...dataProps,
  })

  useSafeLayoutEffect(() => {
    if (!inputRef.current) return

    const notInSync = inputRef.current.value != value

    if (!notInSync) return

    setValue(sanitize(parse(inputRef.current.value)))
  }, [parse, sanitize])

  useEventListener(
    inputRef.current,
    "wheel",
    (ev) => {
      const ownerDocument = inputRef.current?.ownerDocument ?? document
      const focused = ownerDocument.activeElement === inputRef.current

      if (!allowMouseWheel || !focused) return

      ev.preventDefault()

      const stepValue = getStepRatio(ev) * step
      const direction = Math.sign(ev.deltaY)

      if (direction === -1) {
        increment(stepValue)
      } else if (direction === 1) {
        decrement(stepValue)
      }
    },
    { passive: false },
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ...ariaProps,
      ...dataProps,
      type: "text",
      "aria-invalid": ariaAttr(ariaProps["aria-invalid"] ?? out),
      "aria-valuemax": maxValue,
      "aria-valuemin": minValue,
      "aria-valuenow": Number.isNaN(valueAsNumber) ? undefined : valueAsNumber,
      "aria-valuetext": valueText,
      autoComplete: "off",
      autoCorrect: "off",
      disabled,
      inputMode: "decimal",
      max: maxValue,
      min: minValue,
      pattern: "[0-9]*(.[0-9]+)?",
      readOnly,
      role: "spinbutton",
      step,
      value: format(value),
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref, inputRef),
      onBlur: handlerAll(eventProps.onBlur, props.onBlur, onBlur),
      onChange: handlerAll(props.onChange, onChange),
      onFocus: handlerAll(eventProps.onFocus, props.onFocus, onFocus),
      onKeyDown: handlerAll(rest.onKeyDown, props.onKeyDown, onKeyDown),
    }),
    [
      format,
      out,
      value,
      valueText,
      ariaProps,
      dataProps,
      eventProps,
      maxValue,
      minValue,
      valueAsNumber,
      disabled,
      readOnly,
      step,
      rest,
      onKeyDown,
      onBlur,
      onFocus,
      onChange,
    ],
  )

  return { getDecrementProps, getIncrementProps, getInputProps }
}

export type UseNumberInputReturn = ReturnType<typeof useNumberInput>
