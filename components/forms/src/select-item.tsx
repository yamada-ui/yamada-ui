import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { useClickable } from '@yamada-ui/hooks'
import {
  ariaAttr,
  cx,
  isActiveElement,
  isHTMLElement,
  mergeRefs,
  omitObject,
  useUpdateEffect,
} from '@yamada-ui/utils'
import { FC, FocusEvent, MouseEvent, ReactElement, useCallback, useRef } from 'react'
import { useSelect, useSelectDescendant } from './'

const isTargetSelectItem = (target: EventTarget | null) => {
  return isHTMLElement(target) && !!target?.getAttribute('role')?.startsWith('select-item')
}

type SelectItemOptions = {
  value: string | number
  isDisabled?: boolean
  isFocusable?: boolean
  closeOnSelect?: boolean
  icon?: ReactElement
}

export type SelectItemProps = Omit<HTMLUIProps<'li'>, 'value'> & SelectItemOptions

export const SelectItem = forwardRef<SelectItemProps, 'li'>(
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
        if (!isTargetSelectItem(ev.currentTarget)) return

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
        {icon !== null ? (
          <SelectIcon opacity={isSelected ? 1 : 0}>{icon || <CheckIcon />}</SelectIcon>
        ) : null}
        {icon ? <ui.span style={{ pointerEvents: 'none', flex: 1 }}>{children}</ui.span> : children}
      </ui.li>
    )
  },
)

type SelectIconProps = HTMLUIProps<'span'>

const SelectIcon = forwardRef<SelectIconProps, 'span'>(({ className, ...rest }, ref) => {
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
