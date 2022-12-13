import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/core'
import { useControllableState } from '@yamada-ui/hooks'
import { Flex, FlexProps } from '@yamada-ui/layouts'
import {
  createContext,
  cx,
  isObject,
  mergeRefs,
  PropGetter,
  DOMAttributes,
  useCallbackRef,
  omitObject,
  funcAll,
  handlerAll,
  dataAttr,
  pickObject,
} from '@yamada-ui/utils'
import {
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  KeyboardEvent,
  SyntheticEvent,
  useCallback,
  useId,
  useRef,
  useState,
} from 'react'
import {
  useFormControl,
  useFormControlProps,
  FormControlOptions,
  returnUseFormControlPropsMap,
} from './'

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

export type UseRadioProps = FormControlOptions & {
  id?: string
  name?: string
  value?: string | number
  defaultChecked?: boolean
  isChecked?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const useRadio = (props: UseRadioProps) => {
  const { id, name, value, required, disabled, readOnly, ...rest } = useFormControlProps(props)

  const [isFocused, setFocused] = useState(false)
  const [isHovered, setHovered] = useState(false)
  const [isActive, setActive] = useState(false)

  const [isChecked, setIsChecked] = useState(!!props.defaultChecked)

  const isControlled = props.isChecked !== undefined
  const checked = isControlled ? (props.isChecked as boolean) : isChecked

  const onChange = useCallbackRef(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (readOnly || disabled) {
        ev.preventDefault()

        return
      }

      if (!isControlled) setIsChecked(ev.target.checked)

      rest.onChange?.(ev)
    },
    [readOnly, disabled, isControlled],
  )
  const onBlur = useCallbackRef(rest.onBlur)
  const onFocus = useCallbackRef(rest.onFocus)

  const onKeyDown = useCallback(
    ({ key }: KeyboardEvent<Element>) => {
      if (key === ' ') setActive(true)
    },
    [setActive],
  )

  const onKeyUp = useCallback(
    ({ key }: KeyboardEvent<Element>) => {
      if (key === ' ') setActive(false)
    },
    [setActive],
  )

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...pickObject(rest, returnUseFormControlPropsMap),
      ...props,
      ref,
      'data-checked': dataAttr(checked),
    }),
    [checked, rest],
  )

  const getIconProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...pickObject(rest, returnUseFormControlPropsMap),
      ...props,
      ref,
      'data-active': dataAttr(isActive),
      'data-hover': dataAttr(isHovered),
      'data-checked': dataAttr(checked),
      'data-focus': dataAttr(isFocused),
      'aria-hidden': true,
      onMouseDown: handlerAll(props.onMouseDown, () => setActive(true)),
      onMouseUp: handlerAll(props.onMouseUp, () => setActive(false)),
      onMouseEnter: handlerAll(props.onMouseEnter, () => setHovered(true)),
      onMouseLeave: handlerAll(props.onMouseLeave, () => setHovered(false)),
    }),
    [checked, isActive, isFocused, isHovered, rest],
  )

  const getInputProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...pickObject(rest, returnUseFormControlPropsMap),
      ...props,
      ref,
      id,
      type: 'radio',
      name,
      value,
      required,
      disabled,
      readOnly,
      checked,
      style: {
        border: '0px',
        clip: 'rect(0px, 0px, 0px, 0px)',
        height: '1px',
        width: '1px',
        margin: '-1px',
        padding: '0px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'absolute',
      },
      onChange: handlerAll(props.onChange, onChange),
      onBlur: handlerAll(props.onBlur, onBlur, () => setFocused(false)),
      onFocus: handlerAll(props.onFocus, onFocus, () => setFocused(true)),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      onKeyUp: handlerAll(props.onKeyUp, onKeyUp),
    }),
    [
      rest,
      id,
      name,
      value,
      required,
      disabled,
      readOnly,
      checked,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
    ],
  )

  const getLabelProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...pickObject(rest, returnUseFormControlPropsMap),
      props,
      ref,
      onMouseDown: handlerAll(props.onMouseDown, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
      onTouchStart: handlerAll(props.onTouchStart, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
      'data-checked': dataAttr(checked),
    }),
    [checked, rest],
  )

  return {
    isFocused,
    isHovered,
    isActive,
    isChecked: checked,
    getContainerProps,
    getInputProps,
    getIconProps,
    getLabelProps,
  }
}

type RadioOptions = {
  icon?: HTMLUIProps<'span'>
  input?: InputHTMLAttributes<HTMLInputElement>
  label?: HTMLUIProps<'span'>
}

export type RadioProps = Omit<HTMLUIProps<'label'>, keyof UseRadioProps> &
  ThemeProps<'Radio'> &
  UseRadioProps &
  RadioOptions

export const Radio = forwardRef<RadioProps, 'input'>((props, ref) => {
  const group = useRadioGroupContenxt()
  const control = useFormControl(props)
  const styles = useMultiComponentStyle('Radio', { ...group, ...props })
  const {
    className,
    gap = '0.5rem',
    isRequired = group?.isRequired ?? control.isRequired,
    isReadOnly = group?.isReadOnly ?? control.isReadOnly,
    isDisabled = group?.isDisabled ?? control.isDisabled,
    isInvalid = group?.isInvalid ?? control.isInvalid,
    icon,
    input,
    label,
    children,
    ...rest
  } = omitThemeProps(props)

  const { getContainerProps, getInputProps, getIconProps, getLabelProps } = useRadio({
    ...rest,
    isRequired,
    isReadOnly,
    isDisabled,
    isInvalid,
    isChecked: group?.value && rest.value ? group.value === rest.value : rest.isChecked,
    onChange:
      group?.onChange && rest.value ? funcAll(group.onChange, rest.onChange) : rest.onChange,
  })

  return (
    <ui.label
      ref={ref}
      className={cx('ui-radio', className)}
      {...getContainerProps()}
      {...omitObject(rest, [
        'id',
        'name',
        'value',
        'defaultValue',
        'checked',
        'defaultChecked',
        'isChecked',
        'onChange',
        'onBlur',
        'onFocus',
      ])}
      __css={{
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        verticalAlign: 'top',
        gap,
        ...styles.container,
      }}
    >
      <ui.input className='ui-radio-input' {...getInputProps(input, ref)} />

      <ui.span
        className='ui-radio-icon'
        {...getIconProps(icon)}
        __css={{
          position: 'relative',
          display: 'inline-block',
          userSelect: 'none',
          ...styles.icon,
        }}
      />

      <ui.span className='ui-radio-label' {...getLabelProps(label)} __css={{ ...styles.label }}>
        {children}
      </ui.span>
    </ui.label>
  )
})
