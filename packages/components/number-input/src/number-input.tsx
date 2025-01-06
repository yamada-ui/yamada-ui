import type {
  ColorModeToken,
  CSS,
  CSSUIObject,
  HTMLUIProps,
  PropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import type { UseFormControlProps } from "@yamada-ui/form-control"
import type { UseCounterProps } from "@yamada-ui/use-counter"
import type {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  KeyboardEventHandler,
} from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { ChevronIcon } from "@yamada-ui/icon"
import { useCounter } from "@yamada-ui/use-counter"
import { useEventListener } from "@yamada-ui/use-event-listener"
import { useInterval } from "@yamada-ui/use-interval"
import {
  ariaAttr,
  createContext,
  cx,
  handlerAll,
  mergeRefs,
  pickObject,
  useCallbackRef,
  useSafeLayoutEffect,
  useUpdateEffect,
} from "@yamada-ui/utils"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

const isDefaultValidCharacter = (character: string) =>
  /^[Ee0-9+\-.]$/.test(character)

const isValidNumericKeyboardEvent = (
  { key, altKey, ctrlKey, metaKey }: KeyboardEvent,
  isValid: (key: string) => boolean,
) => {
  const isModifierKey = ctrlKey || altKey || metaKey
  const isSingleCharacterKey = key.length === 1

  if (!isSingleCharacterKey || isModifierKey) return true

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

type ValidityState = "rangeOverflow" | "rangeUnderflow"

export interface UseNumberInputProps
  extends UseFormControlProps<HTMLInputElement>,
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

export const useNumberInput = (props: UseNumberInputProps = {}) => {
  const {
    id,
    name,
    allowMouseWheel,
    clampValueOnBlur = true,
    defaultValue,
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
    step: stepProp,
    value: valueProp,
    onChange: onChangeProp,
    onInvalid: onInvalidProp,
    ...rest
  } = useFormControlProps(props)
  const {
    "aria-invalid": invalid,
    disabled,
    readOnly,
    required,
    onBlur: onBlurProp,
    onFocus: onFocusProp,
    ...formControlProps
  } = pickObject(rest, formControlProperties)
  const [focused, setFocused] = useState(false)
  const interactive = !(readOnly || disabled)
  const inputRef = useRef<HTMLInputElement>(null)
  const inputSelectionRef = useRef<{
    end: null | number
    start: null | number
  } | null>(null)
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

  const { down, isSpinning, stop, up } = useSpinner(increment, decrement)

  useAttributeObserver(incrementRef, ["disabled"], isSpinning, stop)
  useAttributeObserver(decrementRef, ["disabled"], isSpinning, stop)

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
    (props = {}, ref = null) => ({
      id,
      type: "text",
      name,
      disabled,
      inputMode,
      pattern,
      readOnly,
      required,
      role: "spinbutton",
      ...formControlProps,
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
      formControlProps,
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
    (props = {}, ref = null) => {
      const trulyDisabled = disabled || (keepWithinRange && max)

      return {
        "aria-label": "Increase",
        disabled: trulyDisabled,
        readOnly,
        required,
        ...formControlProps,
        ...props,
        ref: mergeRefs(ref, incrementRef),
        style: {
          ...props.style,
          cursor: readOnly ? "not-allowed" : props.style?.cursor,
        },
        tabIndex: -1,
        onPointerDown: handlerAll(props.onPointerDown, (ev) => {
          if (ev.button === 0 && !trulyDisabled) eventUp(ev)
        }),
        onPointerLeave: handlerAll(props.onPointerLeave, stop),
        onPointerUp: handlerAll(props.onPointerUp, stop),
      }
    },
    [
      disabled,
      keepWithinRange,
      max,
      required,
      readOnly,
      formControlProps,
      stop,
      eventUp,
    ],
  )

  const getDecrementProps: PropGetter<"button"> = useCallback(
    (props = {}, ref = null) => {
      const trulyDisabled = disabled || (keepWithinRange && min)

      return {
        "aria-label": "Decrease",
        disabled: trulyDisabled,
        readOnly,
        required,
        ...formControlProps,
        ...props,
        ref: mergeRefs(ref, decrementRef),
        style: {
          ...props.style,
          cursor: readOnly ? "not-allowed" : props.style?.cursor,
        },
        tabIndex: -1,
        onPointerDown: handlerAll(props.onPointerDown, (ev) => {
          if (ev.button === 0 && !trulyDisabled) eventDown(ev)
        }),
        onPointerLeave: handlerAll(props.onPointerLeave, stop),
        onPointerUp: handlerAll(props.onPointerUp, stop),
      }
    },
    [
      disabled,
      keepWithinRange,
      min,
      required,
      readOnly,
      formControlProps,
      stop,
      eventDown,
    ],
  )

  return {
    disabled,
    focused,
    /**
     * @deprecated Use `disabled` instead.
     */
    isDisabled: disabled,
    /**
     * @deprecated Use `readOnly` instead.
     */
    isReadOnly: readOnly,
    /**
     * @deprecated Use `required` instead.
     */
    isRequired: required,
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

const INTERVAL = 50

const DELAY = 300

type Action = "decrement" | "increment"

const useSpinner = (increment: Function, decrement: Function) => {
  const [isSpinning, setIsSpinning] = useState(false)
  const [action, setAction] = useState<Action | null>(null)
  const [isOnce, setIsOnce] = useState(true)
  const timeoutRef = useRef<any>(null)

  const removeTimeout = () => clearTimeout(timeoutRef.current)

  useInterval(
    () => {
      if (action === "increment") increment()

      if (action === "decrement") decrement()
    },
    isSpinning ? INTERVAL : null,
  )

  const up = useCallback(() => {
    if (isOnce) increment()

    timeoutRef.current = setTimeout(() => {
      setIsOnce(false)
      setIsSpinning(true)
      setAction("increment")
    }, DELAY)
  }, [increment, isOnce])

  const down = useCallback(() => {
    if (isOnce) decrement()

    timeoutRef.current = setTimeout(() => {
      setIsOnce(false)
      setIsSpinning(true)
      setAction("decrement")
    }, DELAY)
  }, [decrement, isOnce])

  const stop = useCallback(() => {
    setIsOnce(true)
    setIsSpinning(false)
    removeTimeout()
  }, [])

  useEffect(() => {
    return () => removeTimeout()
  }, [])

  return { down, isSpinning, stop, up }
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

interface NumberInputOptions {
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * If `true`, display the addon for the number input.
   *
   * @deprecated Use `stepper` instead.
   */
  isStepper?: boolean
  /**
   * If `true`, display the addon for the number input.
   */
  stepper?: boolean
  /**
   * Props for addon component.
   */
  addonProps?: HTMLUIProps
  /**
   * Props for container element.
   */
  containerProps?: HTMLUIProps
  /**
   * Props for decrement component.
   */
  decrementProps?: NumberDecrementStepperProps
  /**
   * Props for increment component.
   */
  incrementProps?: NumberIncrementStepperProps
}

export interface NumberInputProps
  extends Omit<
      HTMLUIProps<"input">,
      | "defaultValue"
      | "max"
      | "min"
      | "onChange"
      | "onInvalid"
      | "size"
      | "step"
      | "value"
    >,
    ThemeProps<"NumberInput">,
    UseNumberInputProps,
    NumberInputOptions {}

interface NumberInputContext {
  styles: { [key: string]: CSSUIObject | undefined }
  getDecrementProps: PropGetter<"button">
  getIncrementProps: PropGetter<"button">
  getInputProps: PropGetter<"input">
}

const [NumberInputContextProvider, useNumberInputContext] =
  createContext<NumberInputContext>({
    name: "NumberInputContext",
    errorMessage: `useNumberInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />"`,
  })

/**
 * `NumberInput` is a component used to obtain numeric input from the user.
 *
 * @see Docs https://yamada-ui.com/components/forms/number-input
 */
export const NumberInput = forwardRef<NumberInputProps, "input">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("NumberInput", props)
    const {
      className,
      isStepper = true,
      stepper = isStepper,
      addonProps,
      containerProps,
      decrementProps,
      incrementProps,
      ...computedProps
    } = omitThemeProps(mergedProps)
    const {
      props: rest,
      getDecrementProps,
      getIncrementProps,
      getInputProps,
    } = useNumberInput(computedProps)
    const css: CSSUIObject = {
      position: "relative",
      zIndex: 0,
      ...styles.container,
    }

    return (
      <NumberInputContextProvider
        value={{ styles, getDecrementProps, getIncrementProps, getInputProps }}
      >
        <ui.div
          className={cx("ui-number-input", className)}
          role="group"
          __css={css}
          {...containerProps}
        >
          <NumberInputField {...getInputProps(rest, ref)} />

          {stepper ? (
            <NumberInputAddon {...addonProps}>
              <NumberIncrementStepper {...incrementProps} />
              <NumberDecrementStepper {...decrementProps} />
            </NumberInputAddon>
          ) : null}
        </ui.div>
      </NumberInputContextProvider>
    )
  },
)

NumberInput.displayName = "NumberInput"
NumberInput.__ui__ = "NumberInput"

type NumberInputFieldProps = Omit<HTMLUIProps<"input">, "size">

const NumberInputField = forwardRef<NumberInputFieldProps, "input">(
  ({ className, ...rest }, ref) => {
    const { styles } = useNumberInputContext()

    const css: CSSUIObject = {
      width: "100%",
      ...styles.field,
    }

    return (
      <ui.input
        ref={ref}
        className={cx("ui-number-input__field", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

NumberInputField.displayName = "NumberInputField"
NumberInputField.__ui__ = "NumberInputField"

type NumberInputAddonProps = HTMLUIProps

const NumberInputAddon = forwardRef<NumberInputAddonProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles } = useNumberInputContext()

    const css: CSSUIObject = {
      display: "flex",
      flexDirection: "column",
      height: "calc(100% - 2px)",
      insetEnd: "0px",
      margin: "1px",
      position: "absolute",
      top: "0",
      zIndex: "fallback(yamcha, 1)",
      ...styles.addon,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-number-input__addon", className)}
        aria-hidden
        __css={css}
        {...rest}
      />
    )
  },
)

NumberInputAddon.displayName = "NumberInputAddon"
NumberInputAddon.__ui__ = "NumberInputAddon"

const Stepper = ui("button", {
  baseStyle: {
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    lineHeight: "normal",
    transitionDuration: "normal",
    transitionProperty: "common",
    userSelect: "none",
  },
})

type NumberIncrementStepperProps = HTMLUIProps<"button">

const NumberIncrementStepper = forwardRef<
  NumberIncrementStepperProps,
  "button"
>(({ className, children, ...rest }, ref) => {
  const { styles, getIncrementProps } = useNumberInputContext()

  const css: CSSUIObject = { ...styles.stepper }

  return (
    <Stepper
      className={cx("ui-number-input__stepper--up", className)}
      {...getIncrementProps(rest, ref)}
      __css={css}
    >
      {children ?? <ChevronIcon __css={{ transform: "rotate(180deg)" }} />}
    </Stepper>
  )
})

NumberIncrementStepper.displayName = "NumberIncrementStepper"
NumberIncrementStepper.__ui__ = "NumberIncrementStepper"

type NumberDecrementStepperProps = HTMLUIProps<"button">

const NumberDecrementStepper = forwardRef<
  NumberDecrementStepperProps,
  "button"
>(({ className, children, ...rest }, ref) => {
  const { styles, getDecrementProps } = useNumberInputContext()

  const css: CSSUIObject = { ...styles.stepper }

  return (
    <Stepper
      className={cx("ui-number-input__stepper--down", className)}
      {...getDecrementProps(rest, ref)}
      __css={css}
    >
      {children ?? <ChevronIcon />}
    </Stepper>
  )
})

NumberDecrementStepper.displayName = "NumberDecrementStepper"
NumberDecrementStepper.__ui__ = "NumberDecrementStepper"
