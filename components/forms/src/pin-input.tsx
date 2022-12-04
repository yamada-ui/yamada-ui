import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  CSSUIProps,
} from '@yamada-ui/core'
import { createDescendant, useControllableState } from '@yamada-ui/hooks'
import { createContext, cx, handlerAll, mergeRefs } from '@yamada-ui/utils'
import { ChangeEvent, KeyboardEvent, useCallback, useEffect, useId, useState } from 'react'
import { useFormControlProps, FormControlOptions } from './'

type PinInputOptions = {
  id?: string
  type?: 'alphanumeric' | 'number'
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  autoFocus?: boolean
  manageFocus?: boolean
  otp?: boolean
  mask?: boolean
  focusBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
  errorBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
}

type PinInputContext = FormControlOptions & {
  getPinInputFieldProps: (
    props: PinInputFieldProps & {
      index: number
    },
  ) => PinInputFieldProps
  styles: Record<string, CSSUIObject>
}

const [PinInputProvider, usePinInput] = createContext<PinInputContext>({
  strict: false,
  name: 'PinInputContext',
})

export { usePinInput }

const { DescendantsContextProvider, useDescendants, useDescendant } =
  createDescendant<HTMLInputElement>()

const toArray = (value?: string) => value?.split('')

const validate = (value: string, type: PinInputProps['type']) => {
  const NUMERIC_REGEX = /^[0-9]+$/
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i

  const regex = type === 'alphanumeric' ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX

  return regex.test(value)
}

export type PinInputProps = Omit<HTMLUIProps<'div'>, 'onChange'> &
  ThemeProps<'PinInput'> &
  PinInputOptions &
  FormControlOptions

export const PinInput = forwardRef<PinInputProps, 'div'>(({ id, ...props }, ref) => {
  const styles = useMultiComponentStyle('PinInput', props)
  const {
    className,
    autoFocus,
    value,
    defaultValue,
    onChange,
    onComplete,
    placeholder = '○',
    manageFocus = true,
    otp = false,
    type = 'number',
    mask,
    isRequired,
    isInvalid,
    isReadOnly,
    isDisabled,
    ...rest
  } = omitThemeProps(props)

  if (!id) id = useId()

  const descendants = useDescendants()

  const [moveFocus, setMoveFocus] = useState<boolean>(true)
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  useEffect(() => {
    if (!autoFocus) return

    const firstValue = descendants.firstValue()

    if (!firstValue) return

    requestAnimationFrame(() => firstValue.node.focus())
  }, [autoFocus, descendants])

  const [values, setValues] = useControllableState<string[]>({
    value: toArray(value),
    defaultValue: toArray(defaultValue) || [],
    onChange: (values) => onChange?.(values.join('')),
  })

  const focusNext = useCallback(
    (index: number) => {
      if (!moveFocus || !manageFocus) return

      const next = descendants.nextValue(index, false)

      if (!next) return

      requestAnimationFrame(() => next.node.focus())
    },
    [descendants, moveFocus, manageFocus],
  )

  const setValue = useCallback(
    (value: string, index: number, isFocus: boolean = true) => {
      let nextValues = [...values]

      nextValues[index] = value

      setValues(nextValues)

      nextValues = nextValues.filter(Boolean)

      const isComplete =
        value !== '' &&
        nextValues.length === descendants.count() &&
        nextValues.every((value) => value != null && value !== '')

      if (isComplete) {
        onComplete?.(nextValues.join(''))
        descendants.value(index)?.node.blur()
      } else if (isFocus) {
        focusNext(index)
      }
    },
    [values, setValues, descendants, onComplete, focusNext],
  )

  const getNextValue = useCallback((value: string | undefined, eventValue: string) => {
    let nextValue = eventValue

    if (!value?.length) return nextValue

    if (value[0] === eventValue.charAt(0)) {
      nextValue = eventValue.charAt(1)
    } else if (value[0] === eventValue.charAt(1)) {
      nextValue = eventValue.charAt(0)
    }

    return nextValue
  }, [])

  const getPinInputFieldProps = useCallback(
    ({ index, ...rest }: PinInputFieldProps & { index: number }): PinInputFieldProps => {
      const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const eventValue = target.value
        const currentValue = values[index]
        const nextValue = getNextValue(currentValue, eventValue)

        if (nextValue === '') {
          setValue('', index)

          return
        }

        if (eventValue.length > 2) {
          if (!validate(eventValue, type)) return

          const nextValue = eventValue.split('').filter((_, index) => index < descendants.count())

          setValues(nextValue)

          if (nextValue.length === descendants.count()) {
            onComplete?.(nextValue.join(''))
            descendants.value(index)?.node.blur()
          }
        } else {
          if (validate(nextValue, type)) setValue(nextValue, index)

          setMoveFocus(true)
        }
      }

      const onKeyDown = ({ key, target }: KeyboardEvent<HTMLInputElement>) => {
        if (key !== 'Backspace' || !manageFocus) return

        if ((target as HTMLInputElement).value === '') {
          const prevInput = descendants.prevValue(index, false)

          if (!prevInput) return

          setValue('', index - 1, false)
          prevInput.node?.focus()
          setMoveFocus(true)
        } else {
          setMoveFocus(false)
        }
      }

      const onFocus = () => setFocusedIndex(index)

      const onBlur = () => setFocusedIndex(-1)

      return {
        inputMode: type === 'number' ? 'numeric' : 'text',
        type: mask ? 'password' : type === 'number' ? 'tel' : 'text',
        ...rest,
        id: `${id}-${index}`,
        value: values[index] || '',
        onChange: handlerAll(rest.onChange, onChange),
        onKeyDown: handlerAll(rest.onKeyDown, onKeyDown),
        onFocus: handlerAll(rest.onFocus, onFocus),
        onBlur: handlerAll(rest.onBlur, onBlur),
        autoComplete: otp ? 'one-time-code' : 'off',
        placeholder: focusedIndex === index && !rest.readOnly ? '' : placeholder,
      }
    },
    [
      descendants,
      focusedIndex,
      getNextValue,
      id,
      manageFocus,
      mask,
      onComplete,
      otp,
      placeholder,
      setValue,
      setValues,
      type,
      values,
    ],
  )

  const css: CSSUIObject = {
    display: 'flex',
    alignItems: 'center',
    ...styles.container,
  }

  return (
    <DescendantsContextProvider value={descendants}>
      <PinInputProvider
        value={{ isRequired, isInvalid, isReadOnly, isDisabled, getPinInputFieldProps, styles }}
      >
        <ui.div ref={ref} className={cx('ui-pin-input', className)} __css={css} {...rest} />
      </PinInputProvider>
    </DescendantsContextProvider>
  )
})

export type PinInputFieldProps = HTMLUIProps<'input'> & FormControlOptions

export const PinInputField = forwardRef<PinInputFieldProps, 'input'>(
  ({ className, ...rest }, ref) => {
    const { isRequired, isInvalid, isReadOnly, isDisabled, getPinInputFieldProps, styles } =
      usePinInput()
    const { index, register } = useDescendant()

    rest = useFormControlProps({ isRequired, isInvalid, isReadOnly, isDisabled, ...rest })

    const css: CSSUIObject = { ...styles.field }

    return (
      <ui.input
        ref={mergeRefs(register, ref)}
        className={cx('ui-pin-input-field', className)}
        __css={css}
        {...getPinInputFieldProps({ index, ...rest })}
      />
    )
  },
)
