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
  omitObject,
  useCallbackRef,
  useSafeLayoutEffect,
  useUpdateEffect,
  PropGetter,
  handlerAll,
  dataAttr,
  mergeRefs,
  funcAll,
  DOMAttributes,
} from '@yamada-ui/utils'
import { AnimatePresence, motion, SVGMotionProps } from 'framer-motion'
import {
  ChangeEvent,
  ChangeEventHandler,
  cloneElement,
  FC,
  FocusEventHandler,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactElement,
  SyntheticEvent,
  useCallback,
  useRef,
  useState,
} from 'react'
import { FormControlOptions, useFormControl, useFormControlProps } from './'

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

export type UseCheckboxProps = FormControlOptions & {
  id?: string
  name?: string
  value?: string | number
  defaultChecked?: boolean
  isChecked?: boolean
  isIndeterminate?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  tabIndex?: number
}

export const useCheckbox = (props: UseCheckboxProps) => {
  const { id, name, value, tabIndex, required, disabled, readOnly, isIndeterminate, ...rest } =
    useFormControlProps(props)

  const [isFocused, setFocused] = useState(false)
  const [isHovered, setHovered] = useState(false)
  const [isActive, setActive] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const [isLabel, setIsLabel] = useState(true)

  const [isChecked, setIsChecked] = useState(!!props.defaultChecked)

  const isControlled = props.isChecked !== undefined
  const checked = isControlled ? (props.isChecked as boolean) : isChecked

  const onChange = useCallbackRef(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (readOnly || disabled) {
        ev.preventDefault()

        return
      }

      if (!isControlled) setIsChecked(!checked || isIndeterminate ? true : ev.target.checked)

      rest.onChange?.(ev)
    },
    [readOnly, disabled, isControlled, checked, isIndeterminate],
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

  useSafeLayoutEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = Boolean(isIndeterminate)
  }, [isIndeterminate])

  useUpdateEffect(() => {
    if (disabled) setFocused(false)
  }, [disabled, setFocused])

  useSafeLayoutEffect(() => {
    if (!inputRef.current?.form) return

    inputRef.current.form.onreset = () => setIsChecked(!!isChecked)
  }, [])

  useSafeLayoutEffect(() => {
    if (!inputRef.current) return

    if (inputRef.current.checked !== checked) setIsChecked(inputRef.current.checked)
  }, [inputRef.current])

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ...omitObject(rest, ['defaultChecked', 'isChecked', 'onChange']),
      ref: mergeRefs(ref, (el: HTMLElement | undefined) => {
        if (el) setIsLabel(el.tagName === 'LABEL')
      }),
      'data-checked': dataAttr(checked),
      onClick: handlerAll(props.onClick, () => {
        if (isLabel) return

        inputRef.current?.click()

        requestAnimationFrame(() => inputRef.current?.focus())
      }),
    }),
    [checked, isLabel, rest],
  )

  const getIconProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ...omitObject(rest, ['defaultChecked', 'isChecked', 'onChange']),
      ref,
      'data-active': dataAttr(isActive),
      'data-hover': dataAttr(isHovered),
      'data-checked': dataAttr(checked),
      'data-focus': dataAttr(isFocused),
      'data-indeterminate': dataAttr(isIndeterminate),
      'aria-hidden': true,
      onMouseDown: handlerAll(props.onMouseDown, (ev: React.MouseEvent) => {
        if (isFocused) ev.preventDefault()

        setActive(true)
      }),
      onMouseUp: handlerAll(props.onMouseUp, () => setActive(false)),
      onMouseEnter: handlerAll(props.onMouseEnter, () => setHovered(true)),
      onMouseLeave: handlerAll(props.onMouseLeave, () => setHovered(false)),
    }),
    [isActive, checked, isFocused, isHovered, isIndeterminate, rest],
  )

  const getInputProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ...omitObject(rest, ['defaultChecked', 'isChecked', 'onChange']),
      ref: mergeRefs(inputRef, ref),
      id,
      type: 'checkbox',
      name,
      value,
      tabIndex,
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
      tabIndex,
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
      ...props,
      ...omitObject(rest, ['defaultChecked', 'isChecked', 'onChange']),
      ref,
      'data-checked': dataAttr(checked),
      onMouseDown: handlerAll(props.onMouseDown, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
      onTouchStart: handlerAll(props.onTouchStart, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
    }),
    [checked, rest],
  )

  return {
    isFocused,
    isHovered,
    isActive,
    isChecked: checked,
    isIndeterminate,
    getContainerProps,
    getIconProps,
    getInputProps,
    getLabelProps,
  }
}

type CheckboxOptions = {
  icon?: Omit<HTMLUIProps<'span'>, 'children'> & { children: ReactElement }
  input?: InputHTMLAttributes<HTMLInputElement>
  label?: HTMLUIProps<'span'>
}

export type CheckboxProps = Omit<HTMLUIProps<'label'>, keyof UseCheckboxProps | 'checked'> &
  ThemeProps<'Checkbox'> &
  UseCheckboxProps &
  CheckboxOptions

export const Checkbox = forwardRef<CheckboxProps, 'input'>((props, ref) => {
  const group = useCheckboxGroupContext()
  const control = useFormControl(props)
  const styles = useMultiComponentStyle('Checkbox', { ...group, ...props })
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

  const {
    isChecked,
    isIndeterminate,
    getContainerProps,
    getInputProps,
    getIconProps,
    getLabelProps,
  } = useCheckbox({
    ...rest,
    isRequired,
    isReadOnly,
    isDisabled,
    isInvalid,
    isChecked: group?.value && rest.value ? group.value.includes(rest.value) : rest.isChecked,
    onChange:
      group?.onChange && rest.value ? funcAll(group.onChange, rest.onChange) : rest.onChange,
  })

  const cloneIcon = cloneElement(icon?.children ?? <CheckboxIcon />, {
    __css: {
      opacity: isChecked || isIndeterminate ? 1 : 0,
      transform: isChecked || isIndeterminate ? 'scale(1)' : 'scale(0.95)',
      transitionProperty: 'transform',
      transitionDuration: 'normal',
    },
    isIndeterminate,
    isChecked,
    isRequired,
    isReadOnly,
    isDisabled,
    isInvalid,
  })

  return (
    <ui.label
      className={cx('ui-checkbox', className)}
      {...getContainerProps()}
      __css={{
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        verticalAlign: 'top',
        gap,
        ...styles.container,
      }}
      {...omitObject(rest, [
        'id',
        'name',
        'value',
        'defaultValue',
        'checked',
        'defaultChecked',
        'isChecked',
        'isIndeterminate',
        'onChange',
        'onBlur',
        'onFocus',
        'tabIndex',
      ])}
    >
      <ui.input className='ui-checkbox-input' {...getInputProps(input, ref)} />

      <ui.span
        className='ui-checkbox-icon'
        __css={{
          pointerEvents: isReadOnly ? 'none' : undefined,
          position: 'relative',
          display: 'inline-block',
          userSelect: 'none',
          ...styles.icon,
        }}
        {...getIconProps(omitObject(icon ?? { children: undefined }, ['children']))}
      >
        {cloneIcon}
      </ui.span>

      <ui.span className='ui-checkbox-label' __css={{ ...styles.label }} {...getLabelProps(label)}>
        {children}
      </ui.span>
    </ui.label>
  )
})

export type CheckboxIconProps = HTMLUIProps<'svg'> &
  SVGMotionProps<SVGSVGElement> &
  FormControlOptions & {
    isIndeterminate?: boolean
    isChecked?: boolean
  }

export const CheckboxIcon: FC<CheckboxIconProps> = ({
  isIndeterminate,
  isChecked,
  isRequired,
  isReadOnly,
  isDisabled,
  isInvalid,
  ...rest
}) => {
  return (
    <AnimatePresence initial={false}>
      {isIndeterminate || isChecked ? (
        <ui.div
          __css={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <ui.div
            as={motion.div}
            variants={{
              unchecked: { scale: 0.5 },
              checked: { scale: 1 },
            }}
            initial='unchecked'
            animate='checked'
            exit='unchecked'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isIndeterminate ? <IndeterminateIcon {...rest} /> : <CheckIcon {...rest} />}
          </ui.div>
        </ui.div>
      ) : null}
    </AnimatePresence>
  )
}

const CheckIcon: FC<HTMLUIProps<'svg'> & SVGMotionProps<SVGSVGElement>> = (props) => {
  return (
    <ui.svg
      as={motion.svg}
      width='1.2em'
      viewBox='0 0 12 10'
      variants={{
        unchecked: {
          opacity: 0,
          strokeDashoffset: 16,
        },
        checked: {
          opacity: 1,
          strokeDashoffset: 0,
          transition: { duration: 0.2 },
        },
      }}
      style={{
        fill: 'none',
        strokeWidth: 2,
        stroke: 'currentColor',
        strokeDasharray: 16,
      }}
      {...props}
    >
      <polyline points='1.5 6 4.5 9 10.5 1' />
    </ui.svg>
  )
}

const IndeterminateIcon: FC<HTMLUIProps<'svg'> & SVGMotionProps<SVGSVGElement>> = (props) => {
  return (
    <ui.svg
      as={motion.svg}
      width='1.2em'
      viewBox='0 0 24 24'
      variants={{
        unchecked: {
          scaleX: 0.65,
          opacity: 0,
        },
        checked: {
          scaleX: 1,
          opacity: 1,
          transition: {
            scaleX: { duration: 0 },
            opacity: { duration: 0.02 },
          },
        },
      }}
      style={{ stroke: 'currentColor', strokeWidth: 4 }}
      {...props}
    >
      <line x1='21' x2='3' y1='12' y2='12' />
    </ui.svg>
  )
}
