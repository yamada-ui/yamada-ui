import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  ColorModeToken,
  CSS,
} from '@yamada-ui/core'
import {
  useFormControlProps,
  UseFormControlProps,
  formControlProperties,
} from '@yamada-ui/form-control'
import { ChevronIcon } from '@yamada-ui/icon'
import { useCounter, UseCounterProps } from '@yamada-ui/use-counter'
import { useEventListener } from '@yamada-ui/use-event-listener'
import { useInterval } from '@yamada-ui/use-interval'
import {
  ariaAttr,
  createContext,
  cx,
  handlerAll,
  mergeRefs,
  omitObject,
  pickObject,
  PropGetter,
  useCallbackRef,
  useSafeLayoutEffect,
  useUpdateEffect,
} from '@yamada-ui/utils'
import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

const isDefaultValidCharacter = (character: string) =>
  /^[Ee0-9+\-.]$/.test(character)

const isValidNumericKeyboardEvent = (
  { key, ctrlKey, altKey, metaKey }: KeyboardEvent,
  isValid: (key: string) => boolean,
) => {
  if (key == null) return true

  const isModifierKey = ctrlKey || altKey || metaKey
  const isSingleCharacterKey = key.length === 1

  if (!isSingleCharacterKey || isModifierKey) return true

  return isValid(key)
}

const getStep = <Y extends KeyboardEvent | WheelEvent>({
  ctrlKey,
  shiftKey,
  metaKey,
}: Y) => {
  let ratio = 1

  if (metaKey || ctrlKey) ratio = 0.1

  if (shiftKey) ratio = 10

  return ratio
}

type ValidityState = 'rangeUnderflow' | 'rangeOverflow'

export type UseNumberInputProps = UseFormControlProps<HTMLInputElement> &
  UseCounterProps & {
    /**
     * The HTML `name` attribute used for forms.
     */
    name?: string
    /**
     * Hints at the type of data that might be entered by the user.
     * It also determines the type of keyboard shown to the user on mobile devices.
     *
     * @default 'decimal'
     */
    inputMode?: InputHTMLAttributes<any>['inputMode']
    /**
     * The pattern used to check the <input> element's value against on form submission.
     *
     * @default '[0-9]*(.[0-9]+)?'
     */
    pattern?: InputHTMLAttributes<any>['pattern']
    /**
     * If `true`, the input will be focused as you increment or decrement the value with the stepper.
     *
     * @default true
     */
    focusInputOnChange?: boolean
    /**
     * This controls the value update when you blur out of the input.
     * - If `true` and the value is greater than `max`, the value will be reset to `max`.
     * - Else, the value remains the same.
     *
     * @default true
     */
    clampValueOnBlur?: boolean
    /**
     * If `true`, the input's value will change based on mouse wheel.
     *
     * @default false
     */
    allowMouseWheel?: boolean
    /**
     * The callback invoked when invalid number is entered.
     */
    onInvalid?: (
      message: ValidityState,
      value: string,
      valueAsNumber: number,
    ) => void
    /**
     * This is used to format the value so that screen readers
     * can speak out a more human-friendly value.
     *
     * It is used to set the `aria-valuetext` property of the input.
     */
    getAriaValueText?: (value: string | number) => string
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
     * If using a custom display format, this converts the default format to the custom format.
     */
    format?: (value: string | number) => string | number
  }

export const useNumberInput = (props: UseNumberInputProps = {}) => {
  const {
    id,
    name,
    inputMode = 'decimal',
    pattern = '[0-9]*(.[0-9]+)?',
    required,
    disabled,
    readOnly,
    focusInputOnChange = true,
    clampValueOnBlur = true,
    keepWithinRange = true,
    allowMouseWheel,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    precision,
    'aria-invalid': isInvalid,
    ...rest
  } = useFormControlProps(props)

  const isRequired = required
  const isReadOnly = readOnly
  const isDisabled = disabled

  const [isFocused, setFocused] = useState(false)
  const isInteractive = !(readOnly || disabled)

  const inputRef = useRef<HTMLInputElement>(null)
  const inputSelectionRef = useRef<{
    start: number | null
    end: number | null
  } | null>(null)
  const incrementRef = useRef<HTMLButtonElement>(null)
  const decrementRef = useRef<HTMLButtonElement>(null)

  const onFocus = useCallbackRef(
    handlerAll(rest.onFocus, (ev) => {
      setFocused(true)

      if (!inputSelectionRef.current) return

      ev.target.selectionStart =
        inputSelectionRef.current.start ?? ev.currentTarget.value?.length
      ev.currentTarget.selectionEnd =
        inputSelectionRef.current.end ?? ev.currentTarget.selectionStart
    }),
  )
  const onBlur = useCallbackRef(
    handlerAll(rest.onBlur, () => {
      setFocused(false)

      if (clampValueOnBlur) validateAndClamp()
    }),
  )
  const onInvalid = useCallbackRef(rest.onInvalid)
  const isValidCharacter = useCallbackRef(
    rest.isValidCharacter ?? isDefaultValidCharacter,
  )

  const {
    isMin,
    isMax,
    isOut,
    value,
    valueAsNumber,
    setValue,
    update,
    cast,
    ...counter
  } = useCounter({
    min,
    max,
    precision,
    keepWithinRange,
    ...rest,
  })

  const sanitize = useCallback(
    (value: string) => value.split('').filter(isValidCharacter).join(''),
    [isValidCharacter],
  )

  const parse = useCallback(
    (value: string) => rest.parse?.(value) ?? value,
    [rest],
  )

  const format = useCallback(
    (value: string | number) => (rest.format?.(value) ?? value).toString(),
    [rest],
  )

  const increment = useCallback(
    (step = rest.step ?? 1) => {
      if (isInteractive) counter.increment(step)
    },
    [isInteractive, counter, rest.step],
  )

  const decrement = useCallback(
    (step = rest.step ?? 1) => {
      if (isInteractive) counter.decrement(step)
    },
    [isInteractive, counter, rest.step],
  )

  const validateAndClamp = useCallback(() => {
    let next = value as string | number

    if (value === '') return

    const valueStartsWithE = /^[eE]/.test(value.toString())

    if (valueStartsWithE) {
      setValue('')
    } else {
      if (valueAsNumber < min) next = min

      if (valueAsNumber > max) next = max

      cast(next)
    }
  }, [cast, max, min, setValue, value, valueAsNumber])

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if ((ev.nativeEvent as InputEvent).isComposing) return

      const parsedInput = parse(ev.currentTarget.value)

      update(sanitize(parsedInput))

      inputSelectionRef.current = {
        start: ev.currentTarget.selectionStart,
        end: ev.currentTarget.selectionEnd,
      }
    },
    [parse, update, sanitize],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.nativeEvent.isComposing) return

      if (!isValidNumericKeyboardEvent(ev, isValidCharacter))
        ev.preventDefault()

      const step = getStep(ev) * (rest.step ?? 1)

      const keyMap: Record<string, KeyboardEventHandler> = {
        ArrowUp: () => increment(step),
        ArrowDown: () => decrement(step),
        Home: () => update(min),
        End: () => update(max),
      }

      const action = keyMap[ev.key]

      if (!action) return

      ev.preventDefault()
      action(ev)
    },
    [decrement, increment, isValidCharacter, max, min, rest.step, update],
  )

  const { up, down, stop, isSpinning } = useSpinner(increment, decrement)

  useAttributeObserver(incrementRef, ['disabled'], isSpinning, stop)
  useAttributeObserver(decrementRef, ['disabled'], isSpinning, stop)

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
    if (valueAsNumber > max) {
      onInvalid?.('rangeOverflow', format(value), valueAsNumber)
    } else if (valueAsNumber < min) {
      onInvalid?.('rangeOverflow', format(value), valueAsNumber)
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
    'wheel',
    (ev) => {
      const ownerDocument = inputRef.current?.ownerDocument ?? document
      const isFocused = ownerDocument.activeElement === inputRef.current

      if (!allowMouseWheel || !isFocused) return

      ev.preventDefault()

      const step = getStep(ev as any) * (rest.step ?? 1)
      const direction = Math.sign(ev.deltaY)

      if (direction === -1) {
        increment(step)
      } else if (direction === 1) {
        decrement(step)
      }
    },
    { passive: false },
  )

  const getInputProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      id,
      name,
      type: 'text',
      inputMode,
      pattern,
      required,
      disabled,
      readOnly,
      ...pickObject(rest, formControlProperties),
      ...omitObject(props, ['defaultValue']),
      ref: mergeRefs(inputRef, ref),
      value: format(value),
      'aria-invalid': ariaAttr(isInvalid ?? isOut),
      autoComplete: 'off',
      autoCorrect: 'off',
      onChange: handlerAll(props.onChange, onChange),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      onFocus: handlerAll(props.onFocus, onFocus),
      onBlur: handlerAll(props.onBlur, onBlur),
    }),
    [
      id,
      name,
      inputMode,
      pattern,
      required,
      disabled,
      readOnly,
      rest,
      format,
      value,
      isInvalid,
      isOut,
      onChange,
      onKeyDown,
      onFocus,
      onBlur,
    ],
  )

  const getIncrementProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const disabled = props.disabled || (keepWithinRange && isMax)

      return {
        required,
        readOnly,
        disabled,
        ...pickObject(rest, formControlProperties),
        ...props,
        ref: mergeRefs(ref, incrementRef),
        role: 'button',
        tabIndex: -1,
        cursor: readOnly ? 'not-allowed' : props.cursor,
        onPointerDown: handlerAll(props.onPointerDown, (ev) => {
          if (ev.button === 0 && !disabled) eventUp(ev)
        }),
        onPointerLeave: handlerAll(props.onPointerLeave, stop),
        onPointerUp: handlerAll(props.onPointerUp, stop),
      }
    },
    [keepWithinRange, isMax, required, readOnly, rest, stop, eventUp],
  )

  const getDecrementProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const disabled = props.disabled || (keepWithinRange && isMin)

      return {
        required,
        readOnly,
        disabled,
        ...pickObject(rest, formControlProperties),
        ...props,
        ref: mergeRefs(ref, decrementRef),
        role: 'button',
        tabIndex: -1,
        cursor: readOnly ? 'not-allowed' : props.cursor,
        onPointerDown: handlerAll(props.onPointerDown, (ev) => {
          if (ev.button === 0 && !disabled) eventDown(ev)
        }),
        onPointerLeave: handlerAll(props.onPointerLeave, stop),
        onPointerUp: handlerAll(props.onPointerUp, stop),
      }
    },
    [keepWithinRange, isMin, required, readOnly, rest, stop, eventDown],
  )

  return {
    value: format(value),
    valueAsNumber,
    isFocused,
    isRequired,
    isReadOnly,
    isDisabled,
    getInputProps,
    getIncrementProps,
    getDecrementProps,
  }
}

export type UseNumberInputReturn = ReturnType<typeof useNumberInput>

const INTERVAL = 50

const DELAY = 300

type Action = 'increment' | 'decrement'

const useSpinner = (increment: Function, decrement: Function) => {
  const [isSpinning, setIsSpinning] = useState(false)
  const [action, setAction] = useState<Action | null>(null)
  const [isOnce, setIsOnce] = useState(true)
  const timeoutRef = useRef<any>(null)

  const removeTimeout = () => clearTimeout(timeoutRef.current)

  useInterval(
    () => {
      if (action === 'increment') increment()

      if (action === 'decrement') decrement()
    },
    isSpinning ? INTERVAL : null,
  )

  const up = useCallback(() => {
    if (isOnce) increment()

    timeoutRef.current = setTimeout(() => {
      setIsOnce(false)
      setIsSpinning(true)
      setAction('increment')
    }, DELAY)
  }, [increment, isOnce])

  const down = useCallback(() => {
    if (isOnce) decrement()

    timeoutRef.current = setTimeout(() => {
      setIsOnce(false)
      setIsSpinning(true)
      setAction('decrement')
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

  return { up, down, stop, isSpinning }
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
          type === 'attributes' &&
          attributeName &&
          attributeFilter.includes(attributeName)
        )
          func()
      }
    })

    observer.observe(ref.current, { attributes: true, attributeFilter })

    return () => observer.disconnect()
  })
}

type NumberInputOptions = {
  /**
   * If `true`, display the addon for the number input.
   */
  isStepper?: boolean
  /**
   * Props for container element.
   */
  containerProps?: HTMLUIProps<'div'>
  /**
   * Props for addon component.
   */
  addonProps?: HTMLUIProps<'div'>
  /**
   * Props for increment component.
   */
  incrementProps?: NumberIncrementStepperProps
  /**
   * Props for decrement component.
   */
  decrementProps?: NumberDecrementStepperProps
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, 'colors'>
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, 'colors'>
}

export type NumberInputProps = Omit<
  HTMLUIProps<'input'>,
  'disabled' | 'required' | 'readOnly' | 'size' | 'onChange'
> &
  ThemeProps<'NumberInput'> &
  Omit<UseNumberInputProps, 'disabled' | 'required' | 'readOnly'> &
  NumberInputOptions

type NumberInputContext = {
  getInputProps: PropGetter
  getIncrementProps: PropGetter
  getDecrementProps: PropGetter
  styles: Record<string, CSSUIObject>
}

const [NumberInputContextProvider, useNumberInputContext] =
  createContext<NumberInputContext>({
    strict: false,
    name: 'NumberInputContext',
  })

export const NumberInput = forwardRef<NumberInputProps, 'input'>(
  (props, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle('NumberInput', props)
    const {
      className,
      isStepper = true,
      containerProps,
      addonProps,
      incrementProps,
      decrementProps,
      onChange,
      ...rest
    } = omitThemeProps(mergedProps)
    const { getInputProps, getIncrementProps, getDecrementProps } =
      useNumberInput({
        onChange,
        ...rest,
      })

    const css: CSSUIObject = {
      position: 'relative',
      zIndex: 0,
      ...styles.container,
    }

    return (
      <NumberInputContextProvider
        value={{ getInputProps, getIncrementProps, getDecrementProps, styles }}
      >
        <ui.div
          className={cx('ui-number-input', className)}
          __css={css}
          {...containerProps}
        >
          <NumberInputField {...getInputProps(rest, ref)} />

          {isStepper ? (
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

type NumberInputFieldProps = Omit<
  HTMLUIProps<'input'>,
  'disabled' | 'required' | 'readOnly' | 'size'
>

const NumberInputField = forwardRef<NumberInputFieldProps, 'input'>(
  ({ className, ...rest }, ref) => {
    const { styles } = useNumberInputContext()

    const css: CSSUIObject = {
      width: '100%',
      ...styles.field,
    }

    return (
      <ui.input
        ref={ref}
        className={cx('ui-number-input__field', className)}
        __css={css}
        {...rest}
      />
    )
  },
)

type NumberInputAddonProps = HTMLUIProps<'div'>

const NumberInputAddon = forwardRef<NumberInputAddonProps, 'div'>(
  ({ className, ...rest }, ref) => {
    const { styles } = useNumberInputContext()

    const css: CSSUIObject = {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '0',
      insetEnd: '0px',
      margin: '1px',
      height: 'calc(100% - 2px)',
      zIndex: 'yamcha',
      ...styles.addon,
    }

    return (
      <ui.div
        ref={ref}
        className={cx('ui-number-input__addon', className)}
        aria-hidden
        __css={css}
        {...rest}
      />
    )
  },
)

const Stepper = ui('div', {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    transitionProperty: 'common',
    transitionDuration: 'normal',
    userSelect: 'none',
    cursor: 'pointer',
    lineHeight: 'normal',
  },
})

type NumberIncrementStepperProps = HTMLUIProps<'div'>

const NumberIncrementStepper = forwardRef<NumberIncrementStepperProps, 'div'>(
  ({ className, children, ...rest }, ref) => {
    const { getIncrementProps, styles } = useNumberInputContext()

    const css: CSSUIObject = { ...styles.stepper }

    return (
      <Stepper
        className={cx('ui-number-input__stepper--up', className)}
        {...getIncrementProps(rest, ref)}
        __css={css}
      >
        {children ?? <ChevronIcon __css={{ transform: 'rotate(180deg)' }} />}
      </Stepper>
    )
  },
)

type NumberDecrementStepperProps = HTMLUIProps<'div'>

const NumberDecrementStepper = forwardRef<NumberDecrementStepperProps, 'div'>(
  ({ className, children, ...rest }, ref) => {
    const { getDecrementProps, styles } = useNumberInputContext()

    const css: CSSUIObject = { ...styles.stepper }

    return (
      <Stepper
        className={cx('ui-number-input__stepper--down', className)}
        {...getDecrementProps(rest, ref)}
        __css={css}
      >
        {children ?? <ChevronIcon />}
      </Stepper>
    )
  },
)
