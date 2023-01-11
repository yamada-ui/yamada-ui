import { forwardRef, ThemeProps } from '@yamada-ui/core'
import { FormControlOptions, useFormControl } from '@yamada-ui/form-control'
import { Flex, FlexProps } from '@yamada-ui/layouts'
import { useControllableState } from '@yamada-ui/use-controllable-state'
import {
  createContext,
  cx,
  isObject,
  omitObject,
  useCallbackRef,
  PropGetter,
  DOMAttributes,
} from '@yamada-ui/utils'
import { ChangeEvent, useCallback } from 'react'

const isEvent = (value: any): value is { target: HTMLInputElement } =>
  value && isObject(value) && isObject(value.target)

export type UseCheckboxGroupProps = {
  value?: (string | number)[]
  defaultValue?: (string | number)[]
  onChange?: (value: (string | number)[]) => void
  isNative?: boolean
}

export const useCheckboxGroup = ({ isNative, ...props }: UseCheckboxGroupProps) => {
  props.onChange = useCallbackRef(props.onChange)

  const [value, setValue] = useControllableState({
    value: props.value,
    defaultValue: props.defaultValue || [],
    onChange: props.onChange,
  })

  const onChange = useCallback(
    (evOrValue: ChangeEvent<HTMLInputElement> | string | number) => {
      const isChecked = isEvent(evOrValue) ? evOrValue.target.checked : !value.includes(evOrValue)

      const selectedValue = isEvent(evOrValue) ? evOrValue.target.value : evOrValue

      const nextValue = isChecked
        ? [...value, selectedValue]
        : value.filter((v) => String(v) !== String(selectedValue))

      setValue(nextValue)
    },
    [value, setValue],
  )

  const getCheckboxProps: PropGetter<
    DOMAttributes<HTMLInputElement> & { isChecked?: boolean },
    Omit<DOMAttributes<HTMLInputElement>, 'onChange'> & {
      onChange: (ev: ChangeEvent<HTMLInputElement> | string | number) => void
    }
  > = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref,
      [isNative ? 'checked' : 'isChecked']: value.some(
        (val) => String(props.value) === String(val),
      ),
      onChange,
    }),
    [onChange, isNative, value],
  )

  return { value, setValue, onChange, getCheckboxProps }
}

export type CheckboxGroupProps = ThemeProps<'Checkbox'> &
  Omit<FlexProps, 'onChange'> &
  UseCheckboxGroupProps &
  FormControlOptions

type CheckboxContext = ThemeProps<'Checkbox'> &
  FormControlOptions & {
    value: (string | number)[]
    onChange: (evOrValue: ChangeEvent<HTMLInputElement> | string | number) => void
  }

const [CheckboxGroupProvider, useCheckboxGroupContext] = createContext<CheckboxContext | undefined>(
  {
    strict: false,
    name: 'CheckboxGroupContext',
  },
)

export { useCheckboxGroupContext }

export const CheckboxGroup = forwardRef<CheckboxGroupProps, 'div'>(
  (
    { className, size, variant, colorStyle, children, direction = 'column', gap, ...props },
    ref,
  ) => {
    const { value, onChange } = useCheckboxGroup(props)
    const { isRequired, isReadOnly, isDisabled, isInvalid } = useFormControl(props)

    return (
      <CheckboxGroupProvider
        value={{
          size,
          variant,
          colorStyle,
          isRequired,
          isReadOnly,
          isDisabled,
          isInvalid,
          value,
          onChange,
        }}
      >
        <Flex
          ref={ref}
          className={cx('ui-checkbox-group', className)}
          role='group'
          direction={direction}
          gap={gap ?? (direction === 'row' ? '1rem' : undefined)}
          {...omitObject(props, ['value', 'defaultValue', 'onChange'])}
        >
          {children}
        </Flex>
      </CheckboxGroupProvider>
    )
  },
)
