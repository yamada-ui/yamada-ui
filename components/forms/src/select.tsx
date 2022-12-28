import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/core'
import {
  createDescendant,
  useClickable,
  useControllableState,
  useDisclosure,
} from '@yamada-ui/hooks'
import { Popover, PopoverContent, PopoverProps, PopoverTrigger } from '@yamada-ui/overlay'
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  funcAll,
  handlerAll,
  isActiveElement,
  isHTMLElement,
  mergeRefs,
  omitObject,
  useUnmountEffect,
  useUpdateEffect,
} from '@yamada-ui/utils'
import {
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
import { FormControlOptions, useFormControlProps } from './'

const isTargetOption = (target: EventTarget | null) =>
  isHTMLElement(target) && !!target?.getAttribute('role')?.startsWith('select-item')

const {
  DescendantsContextProvider,
  useDescendantsContext,
  useDescendants,
  useDescendant: useSelectDescendant,
} = createDescendant<HTMLElement>()

export { useSelectDescendant }

type SelectContext = SelectOptions & {
  setValue: Dispatch<SetStateAction<string | number>>
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
  value?: string | number
  defaultValue?: string | number
  onChange?: (value: string | number) => void
  autoSelect?: boolean
  closeOnSelect?: boolean
  focusBorderColor?: string
  errorBorderColor?: string
  container?: Omit<HTMLUIProps<'div'>, 'children'>
  icon?: HTMLUIProps<'div'>
}

export type SelectProps = Omit<HTMLUIProps<'input'>, 'value' | 'defaultValue' | 'onChange'> &
  ThemeProps<'Select'> &
  Omit<PopoverProps, 'closeOnButton'> &
  FormControlOptions &
  SelectOptions

export const Select = forwardRef<SelectProps, 'input'>((props, ref) => {
  const styles = useMultiComponentStyle('Select', props)
  let {
    className,
    initialFocusRef,
    autoSelect = true,
    closeOnSelect = true,
    placement = 'bottom-start',
    duration = 0.2,
    children,
    ...rest
  } = omitThemeProps(props)

  rest = useFormControlProps(rest)

  const descendants = useDescendants()

  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const listRef = useRef<HTMLDivElement>(null)
  const timeoutIds = useRef<Set<any>>(new Set([]))

  const onFocusList = useCallback(() => {
    requestAnimationFrame(() => listRef.current?.focus({ preventScroll: false }))
  }, [])

  const onFocusFirstItem = useCallback(() => {
    const id = setTimeout(() => {
      if (initialFocusRef) return

      const first = descendants.enabledfirstValue()

      if (first) setFocusedIndex(first.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, initialFocusRef])

  const onFocusLastItem = useCallback(() => {
    const id = setTimeout(() => {
      if (initialFocusRef) return

      const last = descendants.enabledlastValue()

      if (last) setFocusedIndex(last.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, initialFocusRef])

  const onOpenInternal = useCallback(() => {
    rest.onOpen?.()

    if (autoSelect) {
      onFocusFirstItem()
    } else {
      onFocusList()
    }
  }, [autoSelect, onFocusFirstItem, onFocusList, rest])

  const [isOpen, onOpen, onClose] = useDisclosure({ ...rest, onOpen: onOpenInternal })
  const [value, setValue] = useControllableState({
    value: rest.value,
    defaultValue: rest.defaultValue ?? '',
    onChange: rest.onChange,
  })

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

  const css: CSSUIObject = { ...styles.field }

  return (
    <DescendantsContextProvider value={descendants}>
      <SelectProvider
        value={{
          value,
          setValue,
          isOpen,
          onOpen,
          onClose,
          onFocusFirstItem,
          onFocusLastItem,
          focusedIndex,
          setFocusedIndex,
          autoSelect,
          closeOnSelect,
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
            initialFocusRef,
            closeOnButton: false,
          }}
        >
          <PopoverTrigger>
            <ui.input
              ref={ref}
              className={cx('ui-select', className)}
              {...omitObject(rest, ['value', 'defaultValue', 'onChange'])}
              readOnly
              data-active={dataAttr(isOpen)}
              aria-expanded={ariaAttr(isOpen)}
              onKeyDown={handlerAll(rest.onKeyDown, onKeyDown)}
              __css={css}
            />
          </PopoverTrigger>

          <SelectList>{children}</SelectList>
        </Popover>
      </SelectProvider>
    </DescendantsContextProvider>
  )
})

type SelectListProps = HTMLUIProps<'ul'>

const SelectList = forwardRef<SelectListProps, 'ul'>(({ className, ...rest }, ref) => {
  const { listRef, focusedIndex, setFocusedIndex, onClose, styles } = useSelect()

  const descendants = useDescendantsContext()

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      const actions: Record<string, KeyboardEventHandler> = {
        Tab: (ev) => ev.preventDefault(),
        Escape: onClose,
        ArrowDown: () => {
          const next = descendants.enabledNextValue(focusedIndex)

          if (next) setFocusedIndex(next.index)
        },
        ArrowUp: () => {
          const prev = descendants.enabledPrevValue(focusedIndex)

          if (prev) setFocusedIndex(prev.index)
        },
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      action(ev)
    },
    [descendants, focusedIndex, onClose, setFocusedIndex],
  )

  const css: CSSUIObject = { ...styles.list }

  return (
    <PopoverContent
      as='ul'
      ref={mergeRefs(listRef, ref)}
      className={cx('ui-select-list', className)}
      role='select'
      tabIndex={-1}
      __css={css}
      {...rest}
      onKeyDown={handlerAll(rest.onKeyDown, onKeyDown)}
    />
  )
})

type OptionOptions = {
  value: string | number
  isDisabled?: boolean
  isFocusable?: boolean
  closeOnSelect?: boolean
  icon?: ReactElement
}

export type OptionProps = Omit<HTMLUIProps<'li'>, 'value'> & OptionOptions

export const Option = forwardRef<OptionProps, 'li'>(
  (
    {
      className,
      isDisabled,
      isFocusable,
      closeOnSelect: customCloseOnSelect,
      icon,
      children,
      ...props
    },
    ref,
  ) => {
    const {
      value,
      setValue,
      focusedIndex,
      setFocusedIndex,
      isOpen,
      onClose,
      closeOnSelect: generalCloseOnSelect,
      listRef,
      styles,
    } = useSelect()

    const isSelected = props.value === value

    const trulyDisabled = isDisabled && !isFocusable

    const itemRef = useRef<HTMLLIElement>(null)
    const { index, register } = useSelectDescendant({ disabled: trulyDisabled })

    const isFocused = index === focusedIndex

    const onMouseEnter = useCallback(
      (ev: any) => {
        props.onMouseEnter?.(ev)

        if (!isDisabled) setFocusedIndex(index)
      },
      [props, isDisabled, setFocusedIndex, index],
    )

    const onMouseMove = useCallback(
      (ev: MouseEvent<HTMLLIElement>) => {
        props.onMouseMove?.(ev)

        if (itemRef.current && !isActiveElement(itemRef.current)) onMouseEnter(ev)
      },
      [onMouseEnter, itemRef, props],
    )

    const onMouseLeave = useCallback(
      (ev: MouseEvent<HTMLLIElement>) => {
        props.onMouseLeave?.(ev)

        if (!isDisabled) setFocusedIndex(-1)
      },
      [props, isDisabled, setFocusedIndex],
    )

    const onClick = useCallback(
      (ev: MouseEvent<HTMLLIElement>) => {
        props.onClick?.(ev)
        if (!isTargetOption(ev.currentTarget)) return

        setValue(props.value)

        if (customCloseOnSelect ?? generalCloseOnSelect) onClose()
      },
      [props, setValue, customCloseOnSelect, generalCloseOnSelect, onClose],
    )

    const onFocus = useCallback(
      (ev: FocusEvent<HTMLLIElement>) => {
        props.onFocus?.(ev)
        setFocusedIndex(index)
      },
      [props, setFocusedIndex, index],
    )

    const rest = useClickable({
      onClick,
      onFocus,
      onMouseEnter,
      onMouseMove,
      onMouseLeave,
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
        {...omitObject(props, ['value'])}
        {...rest}
        role='select-item'
        tabInde={isFocused ? 0 : -1}
        aria-checked={ariaAttr(isSelected)}
        className={cx('ui-select-item', className)}
        __css={css}
      >
        {icon !== null ? <Icon opacity={isSelected ? 1 : 0}>{icon || <CheckIcon />}</Icon> : null}
        {icon ? <ui.span style={{ pointerEvents: 'none', flex: 1 }}>{children}</ui.span> : children}
      </ui.li>
    )
  },
)

type IconProps = HTMLUIProps<'span'>

const Icon = forwardRef<IconProps, 'span'>(({ className, ...rest }, ref) => {
  const { styles } = useSelect()

  const css: CSSUIObject = {
    flexShrink: 0,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.85em',
    ...styles.icon,
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
