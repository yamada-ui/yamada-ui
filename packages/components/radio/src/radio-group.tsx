import { forwardRef, ThemeProps } from '@yamada-ui/core'
import { useFormControl, FormControlOptions } from '@yamada-ui/form-control'
import { Flex, FlexProps } from '@yamada-ui/layouts'
import { useControllableState } from '@yamada-ui/use-controllable-state'
import {
  createContext,
  cx,
  isObject,
  mergeRefs,
  PropGetter,
  DOMAttributes,
  useCallbackRef,
  omitObject,
} from '@yamada-ui/utils'
import { ChangeEvent, useCallback, useId, useRef } from 'react'

const isEvent = (value: any): value is { target: HTMLInputElement } =>
  value && isObject(value) && isObject(value.target)

export type UseRadioGroupProps = {
  id?: string
  name?: string
  value?: string | number
  defaultValue?: string | number
  onChange?: (value: string | number) => void
  isNative?: boolean
}

export const useRadioGroup = ({ id, name, isNative, ...props }: UseRadioGroupProps) => {
  id = id ?? useId()
  name = name ?? `radio-${id}`

  props.onChange = useCallbackRef(props.onChange)

  const [value, setValue] = useControllableState({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: props.onChange,
  })

  const containerRef = useRef<any>(null)

  const onFocus = useCallback(() => {
    const container = containerRef.current

    if (!container) return

    let query = `input:not(:disabled):checked`

    let firstInput = container.querySelector(query) as HTMLElement | undefined

    if (firstInput) {
      firstInput.focus()
    } else {
      query = `input:not(:disabled)`
      firstInput = container.querySelector(query) as HTMLElement | undefined

      firstInput?.focus()
    }
  }, [])

  const onChange = useCallback(
    (evOrValue: ChangeEvent<HTMLInputElement> | string | number) => {
      const nextValue = isEvent(evOrValue) ? evOrValue.target.value : evOrValue

      setValue(nextValue)
    },
    [setValue],
  )

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(ref, containerRef),
      role: 'group',
    }),
    [],
  )

  const getRadioProps: PropGetter<
    DOMAttributes<HTMLInputElement> & { isChecked?: boolean },
    Omit<DOMAttributes<HTMLInputElement>, 'onChange'> & {
      onChange: (ev: ChangeEvent<HTMLInputElement> | string | number) => void
    }
  > = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref,
      name,
      [isNative ? 'checked' : 'isChecked']: value != null ? props.value === value : undefined,
      onChange,
    }),
    [name, value, onChange, isNative],
  )

  return {
    name,
    value,
    setValue,
    onChange,
    onFocus,
    getContainerProps,
    getRadioProps,
  }
}

export type RadioGroupProps = ThemeProps<'Radio'> &
  Omit<FlexProps, 'onChange'> &
  UseRadioGroupProps &
  FormControlOptions

type RadioGroupContext = ThemeProps<'Radio'> &
  FormControlOptions & {
    name: string
    value: string | number
    onChange: (evOrValue: ChangeEvent<HTMLInputElement> | string | number) => void
  }

const [RadioGroupProvider, useRadioGroupContenxt] = createContext<RadioGroupContext | undefined>({
  strict: false,
  name: 'RadioGroupContext',
})

export { useRadioGroupContenxt }

export const RadioGroup = forwardRef<RadioGroupProps, 'div'>(
  (
    { className, size, variant, colorStyle, children, direction = 'column', gap, ...props },
    ref,
  ) => {
    const { name, value, onChange, getContainerProps } = useRadioGroup(props)
    const { isRequired, isReadOnly, isDisabled, isInvalid } = useFormControl(props)

    return (
      <RadioGroupProvider
        value={{
          size,
          variant,
          colorStyle,
          isRequired,
          isReadOnly,
          isDisabled,
          isInvalid,
          name,
          value,
          onChange,
        }}
      >
        <Flex
          ref={ref}
          className={cx('ui-radio-group', className)}
          direction={direction}
          gap={gap ?? (direction === 'row' ? '1rem' : undefined)}
          {...getContainerProps(omitObject(props, ['onChange']))}
        >
          {children}
        </Flex>
      </RadioGroupProvider>
    )
  },
)
