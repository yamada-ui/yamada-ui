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
import {
  useFormControlProps,
  FormControlOptions,
  formControlProperties,
} from '@yamada-ui/form-control'
import { useControllableState } from '@yamada-ui/use-controllable-state'
import { createDescendant } from '@yamada-ui/use-descendant'
import {
  createContext,
  cx,
  handlerAll,
  mergeRefs,
  pickObject,
  filterUndefined,
  getValidChildren,
} from '@yamada-ui/utils'
import { ChangeEvent, KeyboardEvent, Ref, useCallback, useEffect, useId, useState } from 'react'

const toArray = (value?: string) => value?.split('')

const validate = (value: string, type: PinInputProps['type']) => {
  const NUMERIC_REGEX = /^[0-9]+$/
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i

  const regex = type === 'alphanumeric' ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX

  return regex.test(value)
}

type PinInputContext = {
  getInputProps: (
    props: PinInputFieldProps & {
      index: number
      ref?: Ref<HTMLInputElement>
    },
  ) => PinInputFieldProps
  styles: Record<string, CSSUIObject>
}

const [PinInputProvider, usePinInputContext] = createContext<PinInputContext>({
  strict: false,
  name: 'PinInputContext',
})

const { DescendantsContextProvider, useDescendants, useDescendant } =
  createDescendant<HTMLInputElement>()

type PinInputOptions = {
  id?: string
  type?: 'alphanumeric' | 'number'
  placeholder?: string
  value?: string
  defaultValue?: string
  autoFocus?: boolean
  manageFocus?: boolean
  otp?: boolean
  mask?: boolean
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  fileds?: number
  focusBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
  errorBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
}

export type PinInputProps = Omit<HTMLUIProps<'div'>, 'onChange'> &
  ThemeProps<'PinInput'> &
  FormControlOptions &
  PinInputOptions

export const PinInput = forwardRef<PinInputProps, 'div'>(
  ({ focusBorderColor, errorBorderColor, ...props }, ref) => {
    const styles = useMultiComponentStyle('PinInput', {
      focusBorderColor,
      errorBorderColor,
      ...props,
    })
    let {
      id,
      className,
      type = 'number',
      placeholder = '○',
      value,
      defaultValue,
      autoFocus,
      manageFocus = true,
      otp = false,
      mask,
      onChange,
      onComplete,
      fileds = 4,
      children,
      ...rest
    } = useFormControlProps(omitThemeProps(props))

    id = id ?? useId()

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

    const getInputProps = useCallback(
      ({
        index,
        ...props
      }: PinInputFieldProps & {
        index: number
        ref?: Ref<HTMLInputElement>
      }): PinInputFieldProps => {
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
          ...pickObject(rest, formControlProperties),
          ...filterUndefined(props),
          id: `${id}-${index}`,
          value: values[index] || '',
          onChange: handlerAll(props.onChange, onChange),
          onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
          onFocus: handlerAll(props.onFocus, onFocus),
          onBlur: handlerAll(props.onBlur, onBlur),
          autoComplete: otp ? 'one-time-code' : 'off',
          placeholder:
            focusedIndex === index && !rest.readOnly && !props.readOnly ? '' : placeholder,
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
        rest,
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

    let cloneChildren = getValidChildren(children)

    if (!cloneChildren.length)
      for (let i = 0; i < fileds; i++) {
        cloneChildren.push(<PinInputField key={i} />)
      }

    return (
      <DescendantsContextProvider value={descendants}>
        <PinInputProvider value={{ getInputProps, styles }}>
          <ui.div ref={ref} className={cx('ui-pin-input', className)} {...rest} __css={css}>
            {cloneChildren}
          </ui.div>
        </PinInputProvider>
      </DescendantsContextProvider>
    )
  },
)

export type PinInputFieldProps = HTMLUIProps<'input'> & FormControlOptions

export const PinInputField = forwardRef<PinInputFieldProps, 'input'>(
  ({ className, ...rest }, ref) => {
    const { getInputProps, styles } = usePinInputContext()
    const { index, register } = useDescendant()

    rest = useFormControlProps(rest)

    const css: CSSUIObject = { ...styles.field }

    return (
      <ui.input
        className={cx('ui-pin-input-field', className)}
        {...getInputProps({ ...rest, ref: mergeRefs(register, ref), index })}
        __css={css}
      />
    )
  },
)
