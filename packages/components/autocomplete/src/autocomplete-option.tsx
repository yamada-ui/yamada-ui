import { ui, CSSUIObject, forwardRef } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { FC, ReactElement } from 'react'
import { AutocompleteItemIcon } from './autocomplete-icon'
import {
  useAutocompleteContext,
  useAutocompleteOption,
  UseAutocompleteOptionProps,
} from './use-autocomplete'

type AutocompleteOptionOptions = { icon?: ReactElement }

export type AutocompleteOptionProps = UseAutocompleteOptionProps & AutocompleteOptionOptions

export const AutocompleteOption = forwardRef<AutocompleteOptionProps, 'li'>(
  ({ className, icon, ...rest }, ref) => {
    const { styles } = useAutocompleteContext()
    const { isSelected, customIcon, children, getOptionProps } = useAutocompleteOption(rest)

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
        className={cx('ui-autocomplete-item', className)}
        __css={css}
        {...getOptionProps({}, ref)}
      >
        {icon !== null ? (
          <AutocompleteItemIcon opacity={isSelected ? 1 : 0}>
            {icon || <CheckIcon />}
          </AutocompleteItemIcon>
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

const CheckIcon: FC = () => (
  <svg viewBox='0 0 14 14' width='1em' height='1em'>
    <polygon
      fill='currentColor'
      points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'
    />
  </svg>
)
