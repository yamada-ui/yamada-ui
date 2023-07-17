import { ui, CSSUIObject, forwardRef, HTMLUIProps } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { FC, ReactElement } from 'react'
import {
  useSelectContext,
  useSelectOption,
  UseSelectOptionProps,
} from './use-select'

type OptionOptions = { icon?: ReactElement }

export type OptionProps = UseSelectOptionProps & OptionOptions

export const Option = forwardRef<OptionProps, 'li'>(
  ({ className, icon, ...rest }, ref) => {
    const { styles } = useSelectContext()
    const { isSelected, customIcon, children, getOptionProps } =
      useSelectOption(ref, rest)

    icon = icon ?? customIcon

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
        className={cx('ui-select-item', className)}
        __css={css}
        {...getOptionProps()}
      >
        {icon !== null ? (
          <OptionIcon opacity={isSelected ? 1 : 0}>
            {icon || <CheckIcon />}
          </OptionIcon>
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
  },
)

type OptionIconProps = HTMLUIProps<'span'>

const OptionIcon = forwardRef<OptionIconProps, 'span'>(
  ({ className, ...rest }, ref) => {
    const { styles } = useSelectContext()

    const css: CSSUIObject = {
      flexShrink: 0,
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '0.85em',
      ...styles.itemIcon,
    }

    return (
      <ui.span
        ref={ref}
        className={cx('ui-select-item-icon', className)}
        __css={css}
        {...rest}
      />
    )
  },
)

const CheckIcon: FC = () => (
  <svg viewBox='0 0 14 14' width='1em' height='1em'>
    <polygon
      fill='currentColor'
      points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'
    />
  </svg>
)
