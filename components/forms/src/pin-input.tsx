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
import { createContext, cx } from '@yamada-ui/utils'
import { useCallback, useState } from 'react'
import { useFormControlProps, FormControlOptions } from './'

type PinInputOptions = {
  autoFocus?: boolean
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  placeholder?: string
  manageFocus?: boolean
  otp?: boolean
  id?: string
  type?: 'alphanumeric' | 'number'
  mask?: boolean
  focusBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
  errorBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
}

export type PinInputProps = HTMLUIProps<'div'> &
  ThemeProps<'PinInput'> &
  PinInputOptions &
  FormControlOptions

type PinInputContext = { styles: Record<string, CSSUIObject> }

const [PinInputProvider, usePinInput] = createContext<PinInputContext>({
  strict: false,
  name: 'PinInputContext',
})

export { usePinInput }

export const PinInput = forwardRef<PinInputProps, 'div'>((props, ref) => {
  const styles = useMultiComponentStyle('PinInput', props)
  let {
    className,
    autoFocus,
    value,
    defaultValue,
    onChange,
    onComplete,
    placeholder = '○',
    manageFocus = true,
    otp = false,
    id: idProp,
    isDisabled,
    isInvalid,
    type = 'number',
    mask,
    ...rest
  } = omitThemeProps(props)

  rest = useFormControlProps(rest)

  const [moveFocus, setMoveFocus] = useState<boolean>(true)
  const [focusedIndex, setFocusedIndex] = useState<boolean>(-1)

  const [values, setValues] = useControllableState<string[]>({
    defaultValue: toArray(defaultValue) || [],
    value: toArray(value),
    onChange: (values) => onChange?.(values.join('')),
  })

  const focusNext = useCallback(
    (index: number) => {
      if (!moveFocus || !manageFocus) return
      const next = descendants.next(index, false)
      if (next) {
        requestAnimationFrame(() => {
          next.node.focus()
        })
      }
    },
    [descendants, moveFocus, manageFocus],
  )

  const setValue = useCallback(
    (value: string, index: number, handleFocus: boolean = true) => {
      const nextValues = [...values]
      nextValues[index] = value
      setValues(nextValues)

      const isComplete =
        value !== '' &&
        nextValues.length === descendants.count() &&
        nextValues.every((inputValue) => inputValue != null && inputValue !== '')

      if (isComplete) {
        onComplete?.(nextValues.join(''))
      } else {
        if (handleFocus) focusNext(index)
      }
    },
    [values, setValues, focusNext, onComplete, descendants],
  )

  const clear = useCallback(() => {
    const values: string[] = Array(descendants.count()).fill('')
    setValues(values)
    const first = descendants.first()
    first?.node?.focus()
  }, [descendants, setValues])

  const css: CSSUIObject = {
    display: 'flex',
    alignItems: 'center',
    ...styles.container,
  }

  return (
    <PinInputProvider
      value={{
        setValue,
        setValues,
        clear,
        styles,
      }}
    >
      <ui.div ref={ref} className={cx('ui-pin-input', className)} __css={css} {...rest} />
    </PinInputProvider>
  )
})

export type PinInputFieldProps = HTMLUIProps<'input'>

export const PinInputField = forwardRef<PinInputFieldProps, 'input'>(
  ({ className, ...rest }, ref) => {
    const { styles } = usePinInput()

    const css: CSSUIObject = { ...styles.field }

    return (
      <ui.input
        ref={ref}
        className={cx('ui-pin-input-field', className)}
        __css={css}
        {...rest}
      ></ui.input>
    )
  },
)
