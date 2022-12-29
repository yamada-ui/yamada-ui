import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  layoutStylesProperties,
  CSSUIProps,
} from '@yamada-ui/core'
import {
  createDescendant,
  useClickable,
  useControllableState,
  useDisclosure,
} from '@yamada-ui/hooks'
import { ChevronIcon } from '@yamada-ui/media-and-icons'
import { Popover, PopoverContent, PopoverProps, PopoverTrigger } from '@yamada-ui/overlay'
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  Dict,
  funcAll,
  getValidChildren,
  handlerAll,
  isActiveElement,
  isArray,
  isHTMLElement,
  isValidElement,
  mergeRefs,
  omitObject,
  pickObject,
  splitObject,
  useUnmountEffect,
  useUpdateEffect,
} from '@yamada-ui/utils'
import {
  cloneElement,
  Dispatch,
  FC,
  FocusEvent,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  ReactElement,
  RefObject,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from 'react'
import { FormControlOptions, formControlProperties, useFormControlProps } from './'

type Value = string | number

export type UIOption = Omit<OptionProps, 'value'> & {
  label?: string
  value?: Value | UIOption[]
}

const isTargetOption = (target: EventTarget | null) =>
  isHTMLElement(target) && !!target?.getAttribute('role')?.startsWith('select-item')

const {
  DescendantsContextProvider,
  useDescendantsContext,
  useDescendants,
  useDescendant: useSelectDescendant,
} = createDescendant<HTMLElement>()

export { useSelectDescendant }

type SelectContext = Omit<SelectOptions, 'onChange'> & {
  setValue: Dispatch<SetStateAction<Value>>
  onChange: (value: Value, displayValue: string) => void
  placeholder?: string
  isPlaceholderHidden: boolean
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onFocusFirstItem: () => void
  onFocusLastItem: () => void
  focusedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  listRef: RefObject<HTMLDivElement>
  styles: Record<string, CSSUIObject>
}

const [SelectProvider, useSelect] = createContext<SelectContext>({
  strict: false,
  name: 'SelectContext',
})

export { useSelect }

type SelectOptions = {
  value?: Value
  defaultValue?: Value
  onChange?: (value: Value) => void
  closeOnSelect?: boolean
  isPlaceholderHidden?: boolean
  data?: UIOption[]
  focusBorderColor?: string
  errorBorderColor?: string
  list?: Omit<SelectListProps, 'children'>
  container?: Omit<HTMLUIProps<'div'>, 'children'>
  icon?: SelectIconProps
  option?: Omit<OptionProps, 'value' | 'children'>
}

export type SelectProps = Omit<
  HTMLUIProps<'input'>,
  'value' | 'defaultValue' | 'onChange' | 'size' | 'list'
> &
  ThemeProps<'Select'> &
  Omit<PopoverProps, 'initialFocusRef' | 'closeOnButton'> &
  FormControlOptions &
  SelectOptions

export const Select = forwardRef<SelectProps, 'input'>((props, ref) => {
  const styles = useMultiComponentStyle('Select', props)
  let {
    className,
    closeOnSelect = true,
    placeholder,
    isPlaceholderHidden = true,
    data = [],
    placement = 'bottom-start',
    duration = 0.2,
    color,
    h,
    height,
    minH,
    minHeight,
    list,
    icon,
    container,
    option,
    children,
    ...rest
  } = omitThemeProps(props)

  rest = useFormControlProps(rest)

  const formControlProps = pickObject(rest, formControlProperties)
  const computedProps = splitObject(rest, layoutStylesProperties)

  const descendants = useDescendants()

  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const listRef = useRef<HTMLDivElement>(null)
  const timeoutIds = useRef<Set<any>>(new Set([]))

  const onFocusList = useCallback(() => {
    requestAnimationFrame(() => listRef.current?.focus({ preventScroll: false }))
  }, [])

  const onFocusFirstItem = useCallback(() => {
    const id = setTimeout(() => {
      const first = descendants.enabledfirstValue()

      if (first) setFocusedIndex(first.index)
    })

    timeoutIds.current.add(id)
  }, [descendants])

  const onFocusLastItem = useCallback(() => {
    const id = setTimeout(() => {
      const last = descendants.enabledlastValue()

      if (last) setFocusedIndex(last.index)
    })

    timeoutIds.current.add(id)
  }, [descendants])

  const onOpenInternal = useCallback(() => {
    rest.onOpen?.()

    onFocusList()
  }, [onFocusList, rest])

  const [isOpen, onOpen, onClose] = useDisclosure({ ...rest, onOpen: onOpenInternal })
  const [value, setValue] = useControllableState({
    value: rest.value,
    defaultValue: rest.defaultValue ?? '',
    onChange: rest.onChange,
  })
  const [displayValue, setDisplayValue] = useState<string>('')

  const onChange = useCallback(
    (value: Value, displayValue: string) => {
      setValue(value)
      setDisplayValue(displayValue)
    },
    [setValue],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      const actions: Record<string, Function> = {
        Enter: funcAll(onOpen, onFocusFirstItem),
        ArrowDown: funcAll(onOpen, onFocusFirstItem),
        ArrowUp: funcAll(onOpen, onFocusLastItem),
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()
      action()
    },
    [onFocusFirstItem, onFocusLastItem, onOpen],
  )

  useUpdateEffect(() => {
    if (!isOpen) setFocusedIndex(-1)
  }, [isOpen])

  useUnmountEffect(() => {
    timeoutIds.current.forEach((id) => clearTimeout(id))
    timeoutIds.current.clear()
  })

  h = h ?? height
  minH = minH ?? minHeight

  const validChildren = getValidChildren(children)
  let computedChildren: ReactElement[] = []

  if (!validChildren.length && data.length) {
    computedChildren = data.map(({ label, value, ...props }, i) => {
      if (!isArray(value)) {
        return (
          <Option key={i} value={value} {...props}>
            {label}
          </Option>
        )
      } else {
        return (
          <OptionGroup key={i} label={label as string} {...(props as HTMLUIProps<'ul'>)}>
            {value.map(({ label, value, ...props }, i) =>
              !isArray(value) ? (
                <Option key={i} value={value} {...props}>
                  {label}
                </Option>
              ) : null,
            )}
          </OptionGroup>
        )
      }
    })
  }

  const internalIsOpen = !!validChildren.length || !!computedChildren.length

  return (
    <DescendantsContextProvider value={descendants}>
      <SelectProvider
        value={{
          value,
          setValue,
          placeholder,
          isPlaceholderHidden,
          onChange,
          isOpen,
          onOpen,
          onClose,
          onFocusFirstItem,
          onFocusLastItem,
          focusedIndex,
          setFocusedIndex,
          closeOnSelect,
          option,
          listRef,
          styles,
        }}
      >
        <Popover
          {...{
            ...rest,
            isOpen,
            onOpen,
            onClose,
            placement,
            duration,
            closeOnButton: false,
          }}
        >
          <ui.div
            className='ui-select-container'
            __css={{
              position: 'relative',
              w: '100%',
              h: 'fit-content',
              color,
              ...styles.container,
            }}
            {...computedProps[0]}
            {...container}
            {...formControlProps}
          >
            <PopoverTrigger>
              <ui.input
                ref={ref}
                className={cx('ui-select', className)}
                {...omitObject(computedProps[1] as Dict, ['value', 'defaultValue', 'onChange'])}
                value={displayValue}
                placeholder={placeholder}
                readOnly={true}
                data-active={dataAttr(isOpen && internalIsOpen)}
                aria-expanded={ariaAttr(isOpen && internalIsOpen)}
                onKeyDown={handlerAll(rest.onKeyDown, onKeyDown)}
                __css={{ paddingEnd: '2rem', h, minH, ...styles.field }}
              />
            </PopoverTrigger>

            <SelectIcon {...icon} {...formControlProps} />

            {internalIsOpen || (!!placeholder && !isPlaceholderHidden) ? (
              <SelectList {...list}>
                {placeholder ? (
                  <Option value='' hidden={isPlaceholderHidden}>
                    {placeholder}
                  </Option>
                ) : null}
                {children ?? computedChildren}
              </SelectList>
            ) : null}
          </ui.div>
        </Popover>
      </SelectProvider>
    </DescendantsContextProvider>
  )
})

type SelectIconProps = HTMLUIProps<'div'>

const SelectIcon: FC<SelectIconProps> = ({ className, children, ...rest }) => {
  const { styles } = useSelect()

  const css: CSSUIObject = {
    position: 'absolute',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    top: '50%',
    transform: 'translateY(-50%)',
    ...styles.icon,
  }

  const validChildren = getValidChildren(children)

  const cloneChildren = validChildren.map((child) =>
    cloneElement(child, {
      focusable: false,
      'aria-hidden': true,
      style: {
        width: '1em',
        height: '1em',
        color: 'currentColor',
      },
    }),
  )

  return (
    <ui.div className={cx('ui-native-select-icon', className)} __css={css} {...rest}>
      {isValidElement(children) ? cloneChildren : <ChevronIcon />}
    </ui.div>
  )
}

type SelectListProps = HTMLUIProps<'ul'>

const SelectList = forwardRef<SelectListProps, 'ul'>(
  ({ className, w, width, minW, minWidth, ...rest }, ref) => {
    const { listRef, focusedIndex, setFocusedIndex, onClose, styles } = useSelect()

    const descendants = useDescendantsContext()

    const onNext = useCallback(() => {
      const next = descendants.enabledNextValue(focusedIndex)

      if (next) setFocusedIndex(next.index)
    }, [descendants, focusedIndex, setFocusedIndex])

    const onPrev = useCallback(() => {
      const prev = descendants.enabledPrevValue(focusedIndex)

      if (prev) setFocusedIndex(prev.index)
    }, [descendants, focusedIndex, setFocusedIndex])

    const onFirst = useCallback(() => {
      const first = descendants.enabledfirstValue()

      if (first) setFocusedIndex(first.index)
    }, [descendants, setFocusedIndex])

    const onLast = useCallback(() => {
      const last = descendants.enabledlastValue()

      if (last) setFocusedIndex(last.index)
    }, [descendants, setFocusedIndex])

    const onKeyDown = useCallback(
      (ev: KeyboardEvent) => {
        const actions: Record<string, KeyboardEventHandler> = {
          Tab: (ev) => ev.preventDefault(),
          Escape: onClose,
          ArrowDown: focusedIndex === -1 ? onFirst : onNext,
          ArrowUp: focusedIndex === -1 ? onLast : onPrev,
          Home: onFirst,
          End: onLast,
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()
        action(ev)
      },
      [focusedIndex, onClose, onFirst, onLast, onNext, onPrev],
    )

    w = w ?? width ?? ((styles.list?.w ?? styles.list?.width) as CSSUIProps['w'])
    minW = minW ?? minWidth ?? ((styles.list?.minW ?? styles.list?.minWidth) as CSSUIProps['minW'])

    const css: CSSUIObject = { ...styles.list }

    return (
      <PopoverContent
        as='ul'
        ref={mergeRefs(listRef, ref)}
        className={cx('ui-select-list', className)}
        role='select'
        tabIndex={-1}
        w={w}
        minW={minW}
        {...rest}
        __css={css}
        onKeyDown={handlerAll(rest.onKeyDown, onKeyDown)}
      />
    )
  },
)

type OptionGroupOptions = {
  label: string
}

export type OptionGroupProps = HTMLUIProps<'ul'> & OptionGroupOptions

export const OptionGroup = forwardRef<OptionGroupProps, 'ul'>(
  ({ className, label, color, h, height, minH, minHeight, children, ...rest }, ref) => {
    const { styles } = useSelect()

    const computedRest = splitObject(rest, layoutStylesProperties)

    h = h ?? height
    minH = minH ?? minHeight

    return (
      <ui.li
        className='ui-select-group-container'
        __css={{ w: '100%', h: 'fit-content', color }}
        {...computedRest[0]}
      >
        <ui.span className={cx('ui-select-group-label')} __css={styles.groupLabel} noOfLines={1}>
          {label}
        </ui.span>

        <ui.ul
          ref={ref}
          className={cx('ui-select-group', className)}
          __css={{ h, minH, ...styles.group }}
          {...computedRest[1]}
        >
          {children}
        </ui.ul>
      </ui.li>
    )
  },
)

type OptionOptions = {
  value?: Value
  children?: string
  isDisabled?: boolean
  isFocusable?: boolean
  closeOnSelect?: boolean
  icon?: ReactElement
}

export type OptionProps = Omit<HTMLUIProps<'li'>, 'value' | 'children'> & OptionOptions

export const Option = forwardRef<OptionProps, 'li'>((props, ref) => {
  const {
    value,
    placeholder,
    isPlaceholderHidden,
    onChange,
    focusedIndex,
    setFocusedIndex,
    isOpen,
    onClose,
    closeOnSelect: generalCloseOnSelect,
    option,
    listRef,
    styles,
  } = useSelect()

  const {
    className,
    isDisabled,
    isFocusable,
    closeOnSelect: customCloseOnSelect,
    icon,
    children,
    ...computedProps
  } = { ...option, ...props }

  const trulyDisabled = isDisabled && !isFocusable

  const itemRef = useRef<HTMLLIElement>(null)
  const { index, register, descendants } = useSelectDescendant({ disabled: trulyDisabled })

  if (!!placeholder && index !== 0 && !isPlaceholderHidden && !computedProps.value) {
    console.warn(
      `If placeholders are present, All options must be set value.If want to set an empty value, either don't set the placeholder or set 'isPlaceholderHidden' to true.`,
    )
  }

  const values = descendants.values()
  const frontValues = values.slice(!isPlaceholderHidden ? 0 : -1, index)
  const isDuplicated = frontValues.some(({ node }) => node.dataset.value === computedProps.value)
  const isSelected = !isDuplicated && computedProps.value === value
  const isFocused = index === focusedIndex

  const onClick = useCallback(
    (ev: MouseEvent<HTMLLIElement>) => {
      computedProps.onClick?.(ev)
      if (!isTargetOption(ev.currentTarget)) return

      const displayValue = children === placeholder ? '' : children ?? ' '

      onChange(computedProps.value ?? '', displayValue)

      if (customCloseOnSelect ?? generalCloseOnSelect) onClose()
    },
    [
      computedProps,
      children,
      placeholder,
      onChange,
      customCloseOnSelect,
      generalCloseOnSelect,
      onClose,
    ],
  )

  const onFocus = useCallback(
    (ev: FocusEvent<HTMLLIElement>) => {
      computedProps.onFocus?.(ev)
      setFocusedIndex(index)
    },
    [computedProps, setFocusedIndex, index],
  )

  const rest = useClickable({
    onClick,
    onFocus,
    ref: mergeRefs(register, itemRef, ref),
    isDisabled,
    isFocusable,
  })

  useUpdateEffect(() => {
    if (!isOpen) return

    if (isFocused && !trulyDisabled && itemRef.current) {
      requestAnimationFrame(() => itemRef.current?.focus())
    } else if (listRef.current && !isActiveElement(listRef.current)) {
      listRef.current.focus()
    }
  }, [isFocused, trulyDisabled, listRef, isOpen])

  const css: CSSUIObject = {
    textDecoration: 'none',
    color: 'inherit',
    userSelect: 'none',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    textAlign: 'start',
    flex: '0 0 auto',
    outline: 0,
    gap: '0.75rem',
    ...styles.item,
  }

  return (
    <ui.li
      {...option}
      {...omitObject(computedProps, ['value'])}
      {...rest}
      role='select-item'
      data-value={computedProps.value ?? ''}
      tabInde={isFocused ? 0 : -1}
      aria-checked={ariaAttr(isSelected)}
      className={cx('ui-select-item', className)}
      __css={css}
    >
      {icon !== null ? (
        <OptionIcon opacity={isSelected ? 1 : 0}>{icon || <CheckIcon />}</OptionIcon>
      ) : null}
      {icon ? (
        <ui.span style={{ pointerEvents: 'none', flex: 1 }} noOfLines={1}>
          {children}
        </ui.span>
      ) : (
        children
      )}
    </ui.li>
  )
})

type OptionIconProps = HTMLUIProps<'span'>

const OptionIcon = forwardRef<OptionIconProps, 'span'>(({ className, ...rest }, ref) => {
  const { styles } = useSelect()

  const css: CSSUIObject = {
    flexShrink: 0,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.85em',
    ...styles.itemIcon,
  }

  return <ui.span ref={ref} className={cx('ui-select-icon', className)} __css={css} {...rest} />
})

const CheckIcon: FC = () => (
  <svg viewBox='0 0 14 14' width='1em' height='1em'>
    <polygon
      fill='currentColor'
      points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'
    />
  </svg>
)
