import type {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  KeyboardEventHandler,
} from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { UseCounterProps } from "../../hooks/use-counter"
import type { UseFieldProps } from "../field"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useCounter } from "../../hooks/use-counter"
import { useEventListener } from "../../hooks/use-event-listener"
import { useInterval } from "../../hooks/use-interval"
import {
  ariaAttr,
  handlerAll,
  mergeRefs,
  useCallbackRef,
  useSafeLayoutEffect,
  useUpdateEffect,
} from "../../utils"

const INTERVAL = 50

const DELAY = 300

type Action = "decrement" | "increment"

const isDefaultValidCharacter = (character: string) =>
  /^[Ee0-9+\-.]$/.test(character)

const isValidNumericKeyboardEvent = (
  { key, altKey, ctrlKey, metaKey }: KeyboardEvent,
  isValid: (key: string) => boolean,
) => {
  const modifierKey = ctrlKey || altKey || metaKey
  const singleCharacterKey = key.length === 1

  if (!singleCharacterKey || modifierKey) return true

  return isValid(key)
}

const getStep = <Y extends KeyboardEvent | WheelEvent>({
  ctrlKey,
  metaKey,
  shiftKey,
}: Y) => {
  let ratio = 1

  if (metaKey || ctrlKey) ratio = 0.1

  if (shiftKey) ratio = 10

  return ratio
}

const useSpinner = (increment: Function, decrement: Function) => {
  const [spinning, setSpinning] = useState(false)
  const [action, setAction] = useState<Action | null>(null)
  const [once, setOnce] = useState(true)
  const timeoutRef = useRef<any>(null)

  const removeTimeout = () => clearTimeout(timeoutRef.current)

  useInterval(
    () => {
      if (action === "increment") increment()

      if (action === "decrement") decrement()
    },
    spinning ? INTERVAL : null,
  )

  const up = useCallback(() => {
    if (once) increment()

    timeoutRef.current = setTimeout(() => {
      setOnce(false)
      setSpinning(true)
      setAction("increment")
    }, DELAY)
  }, [increment, once])

  const down = useCallback(() => {
    if (once) decrement()

    timeoutRef.current = setTimeout(() => {
      setOnce(false)
      setSpinning(true)
      setAction("decrement")
    }, DELAY)
  }, [decrement, once])

  const stop = useCallback(() => {
    setOnce(true)
    setSpinning(false)
    removeTimeout()
  }, [])

  useEffect(() => {
    return () => removeTimeout()
  }, [])

  return { down, spinning, stop, up }
}

const useAttributeObserver = (
  ref: React.RefObject<HTMLElement | null>,
  attributeFilter: string[],
  enabled: boolean,
  func: () => void,
) => {
  useEffect(() => {
    if (!ref.current || !enabled) return

    const ownerDocument = ref.current.ownerDocument.defaultView ?? window

    const observer = new ownerDocument.MutationObserver((changes) => {
      for (const { type, attributeName } of changes) {
        if (
          type === "attributes" &&
          attributeName &&
          attributeFilter.includes(attributeName)
        )
          func()
      }
    })

    observer.observe(ref.current, { attributeFilter, attributes: true })

    return () => observer.disconnect()
  })
}

type ValidityState = "rangeOverflow" | "rangeUnderflow"

export interface UseNumberInputProps
  extends UseFieldProps<HTMLInputElement>,
    Omit<
      HTMLProps<"input">,
      | "defaultValue"
      | "max"
      | "min"
      | "onChange"
      | "onInvalid"
      | "size"
      | "step"
      | "value"
    >,
    UseCounterProps {
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
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
   * If `true`, the input will be focused as you increment or decrement the value with the stepper.
   *
   * @default true
   */
  focusInputOnChange?: boolean
  /**
   * If using a custom display format, this converts the default format to the custom format.
   */
  format?: (value: number | string) => number | string
  /**
   * This is used to format the value so that screen readers
   * can speak out a more human-friendly value.
   *
   * It is used to set the `aria-valuetext` property of the input.
   */
  getAriaValueText?: (value: number | string) => string | undefined
  /**
   * Hints at the type of data that might be entered by the user.
   * It also determines the type of keyboard shown to the user on mobile devices.
   *
   * @default 'decimal'
   */
  inputMode?: InputHTMLAttributes<any>["inputMode"]
  /**
   * Whether the pressed key should be allowed in the input.
   * The default behavior is to allow DOM floating point characters defined by /^[Ee0-9+\-.]$/.
   */
  isValidCharacter?: (value: string) => boolean
  /**
   * If using a custom display format, this converts the custom format to a format `parseFloat` understands.
   */
  parse?: (value: string) => string
  /**
   * The pattern used to check the <input> element's value against on form submission.
   *
   * @default '[0-9]*(.[0-9]+)?'
   */
  pattern?: InputHTMLAttributes<any>["pattern"]
  /**
   * The callback invoked when invalid number is entered.
   */
  onInvalid?: (
    message: ValidityState,
    value: string,
    valueAsNumber: number,
  ) => void
}

export const useNumberInput = ({
  id,
  name,
  "aria-invalid": invalid,
  allowMouseWheel,
  clampValueOnBlur = true,
  defaultValue,
  disabled,
  focusInputOnChange = true,
  format: formatProp,
  getAriaValueText: getAriaValueTextProp,
  inputMode = "decimal",
  isValidCharacter: isValidCharacterProp,
  keepWithinRange = true,
  max: maxValue = Number.MAX_SAFE_INTEGER,
  min: minValue = Number.MIN_SAFE_INTEGER,
  parse: parseProp,
  pattern = "[0-9]*(.[0-9]+)?",
  precision,
  readOnly,
  required,
  step: stepProp,
  value: valueProp,
  onBlur: onBlurProp,
  onChange: onChangeProp,
  onFocus: onFocusProp,
  onInvalid: onInvalidProp,
  ...rest
}: UseNumberInputProps) => {
  const [focused, setFocused] = useState(false)
  const interactive = !(readOnly || disabled)
  const inputRef = useRef<HTMLInputElement>(null)
  const inputSelectionRef = useRef<null | {
    end: null | number
    start: null | number
  }>(null)
  const incrementRef = useRef<HTMLButtonElement>(null)
  const decrementRef = useRef<HTMLButtonElement>(null)

  const onFocus = useCallbackRef(
    handlerAll(onFocusProp, (ev) => {
      setFocused(true)

      if (!inputSelectionRef.current) return

      ev.target.selectionStart =
        inputSelectionRef.current.start ?? ev.currentTarget.value.length
      ev.currentTarget.selectionEnd =
        inputSelectionRef.current.end ?? ev.currentTarget.selectionStart
    }),
  )
  const onBlur = useCallbackRef(
    handlerAll(onBlurProp, () => {
      setFocused(false)

      if (clampValueOnBlur) validateAndClamp()
    }),
  )
  const onInvalid = useCallbackRef(onInvalidProp)
  const getAriaValueText = useCallbackRef(getAriaValueTextProp)
  const isValidCharacter = useCallbackRef(
    isValidCharacterProp ?? isDefaultValidCharacter,
  )

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
    step: stepProp,
    value: valueProp,
    onChange: onChangeProp,
  })

  const valueText = useMemo(() => {
    let text = getAriaValueText(value)

    if (text != null) return text

    text = value.toString()

    return !text ? undefined : text
  }, [value, getAriaValueText])

  const sanitize = useCallback(
    (value: string) => value.split("").filter(isValidCharacter).join(""),
    [isValidCharacter],
  )

  const parse = useCallback(
    (value: string) => parseProp?.(value) ?? value,
    [parseProp],
  )

  const format = useCallback(
    (value: number | string) => (formatProp?.(value) ?? value).toString(),
    [formatProp],
  )

  const increment = useCallback(
    (step = stepProp ?? 1) => {
      if (interactive) counter.increment(step)
    },
    [interactive, counter, stepProp],
  )

  const decrement = useCallback(
    (step = stepProp ?? 1) => {
      if (interactive) counter.decrement(step)
    },
    [interactive, counter, stepProp],
  )

  const validateAndClamp = useCallback(() => {
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
  }, [cast, maxValue, minValue, setValue, value, valueAsNumber])

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if ((ev.nativeEvent as InputEvent).isComposing) return

      const parsedInput = parse(ev.currentTarget.value)

      update(sanitize(parsedInput))

      inputSelectionRef.current = {
        end: ev.currentTarget.selectionEnd,
        start: ev.currentTarget.selectionStart,
      }
    },
    [parse, update, sanitize],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.nativeEvent.isComposing) return

      if (!isValidNumericKeyboardEvent(ev, isValidCharacter))
        ev.preventDefault()

      const step = getStep(ev) * (stepProp ?? 1)

      const keyMap: { [key: string]: KeyboardEventHandler } = {
        ArrowDown: () => decrement(step),
        ArrowUp: () => increment(step),
        End: () => update(maxValue),
        Home: () => update(minValue),
      }

      const action = keyMap[ev.key]

      if (!action) return

      ev.preventDefault()
      action(ev)
    },
    [
      decrement,
      increment,
      isValidCharacter,
      maxValue,
      minValue,
      stepProp,
      update,
    ],
  )

  const { down, spinning, stop, up } = useSpinner(increment, decrement)

  useAttributeObserver(incrementRef, ["disabled"], spinning, stop)
  useAttributeObserver(decrementRef, ["disabled"], spinning, stop)

  const focusInput = useCallback(() => {
    if (focusInputOnChange)
      requestAnimationFrame(() => {
        inputRef.current?.focus()
      })
  }, [focusInputOnChange])

  const eventUp = useCallback(
    (ev: any) => {
      ev.preventDefault()
      up()
      focusInput()
    },
    [focusInput, up],
  )

  const eventDown = useCallback(
    (ev: any) => {
      ev.preventDefault()
      down()
      focusInput()
    },
    [focusInput, down],
  )

  useUpdateEffect(() => {
    if (valueAsNumber > maxValue) {
      onInvalid("rangeOverflow", format(value), valueAsNumber)
    } else if (valueAsNumber < minValue) {
      onInvalid("rangeOverflow", format(value), valueAsNumber)
    }
  }, [valueAsNumber, value, format, onInvalid])

  useSafeLayoutEffect(() => {
    if (!inputRef.current) return

    const notInSync = inputRef.current.value != value

    if (!notInSync) return

    const parsedInput = parse(inputRef.current.value)

    setValue(sanitize(parsedInput))
  }, [parse, sanitize])

  useEventListener(
    () => inputRef.current,
    "wheel",
    (ev) => {
      const ownerDocument = inputRef.current?.ownerDocument ?? document
      const focused = ownerDocument.activeElement === inputRef.current

      if (!allowMouseWheel || !focused) return

      ev.preventDefault()

      const step = getStep(ev as any) * (stepProp ?? 1)
      const direction = Math.sign(ev.deltaY)

      if (direction === -1) {
        increment(step)
      } else if (direction === 1) {
        decrement(step)
      }
    },
    { passive: false },
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    ({ ref, ...props } = {}) => ({
      id,
      type: "text",
      name,
      disabled,
      inputMode,
      pattern,
      readOnly,
      required,
      role: "spinbutton",
      ...props,
      ref: mergeRefs(inputRef, ref),
      "aria-invalid": ariaAttr(invalid ?? out),
      "aria-valuemax": maxValue,
      "aria-valuemin": minValue,
      "aria-valuenow": Number.isNaN(valueAsNumber) ? undefined : valueAsNumber,
      "aria-valuetext": valueText,
      autoComplete: "off",
      autoCorrect: "off",
      max: maxValue,
      min: minValue,
      step: stepProp,
      value: format(value),
      onBlur: handlerAll(props.onBlur, onBlur),
      onChange: handlerAll(props.onChange, onChange),
      onFocus: handlerAll(props.onFocus, onFocus),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [
      id,
      name,
      inputMode,
      pattern,
      required,
      disabled,
      readOnly,
      maxValue,
      minValue,
      stepProp,
      format,
      value,
      valueAsNumber,
      valueText,
      invalid,
      out,
      onChange,
      onKeyDown,
      onFocus,
      onBlur,
    ],
  )

  const getIncrementProps: PropGetter<"button"> = useCallback(
    ({ ref, ...props } = {}) => {
      const trulyDisabled = disabled || (keepWithinRange && max)

      return {
        "aria-label": "Increase",
        disabled: trulyDisabled,
        readOnly,
        required,
        ...props,
        ref: mergeRefs(ref, incrementRef),
        tabIndex: -1,
        onPointerDown: handlerAll(props.onPointerDown, (ev) => {
          if (ev.button === 0 && !trulyDisabled) eventUp(ev)
        }),
        onPointerLeave: handlerAll(props.onPointerLeave, stop),
        onPointerUp: handlerAll(props.onPointerUp, stop),
      }
    },
    [disabled, keepWithinRange, max, required, readOnly, stop, eventUp],
  )

  const getDecrementProps: PropGetter<"button"> = useCallback(
    ({ ref, ...props } = {}) => {
      const trulyDisabled = disabled || (keepWithinRange && min)

      return {
        "aria-label": "Decrease",
        disabled: trulyDisabled,
        readOnly,
        required,
        ...props,
        ref: mergeRefs(ref, decrementRef),
        tabIndex: -1,
        onPointerDown: handlerAll(props.onPointerDown, (ev) => {
          if (ev.button === 0 && !trulyDisabled) eventDown(ev)
        }),
        onPointerLeave: handlerAll(props.onPointerLeave, stop),
        onPointerUp: handlerAll(props.onPointerUp, stop),
      }
    },
    [disabled, keepWithinRange, min, required, readOnly, stop, eventDown],
  )

  return {
    disabled,
    focused,
    props: rest,
    readOnly,
    required,
    value: format(value),
    valueAsNumber,
    getDecrementProps,
    getIncrementProps,
    getInputProps,
  }
}

export type UseNumberInputReturn = ReturnType<typeof useNumberInput>
