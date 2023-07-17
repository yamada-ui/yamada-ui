import { ui, forwardRef, HTMLUIProps } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import {
  useAutocompleteContext,
  useAutocompleteOptionGroup,
  UseAutocompleteOptionGroupProps,
} from './use-autocomplete'

type AutocompleteOptionGroupOptions = UseAutocompleteOptionGroupProps

export type AutocompleteOptionGroupProps = HTMLUIProps<'ul'> &
  AutocompleteOptionGroupOptions

export const AutocompleteOptionGroup = forwardRef<
  AutocompleteOptionGroupProps,
  'ul'
>(
  (
    { className, color, h, height, minH, minHeight, children, ...rest },
    ref,
  ) => {
    const { styles } = useAutocompleteContext()
    const { label, getContainerProps, getGroupProps } =
      useAutocompleteOptionGroup(rest)

    h = h ?? height
    minH = minH ?? minHeight

    return (
      <ui.li
        className='ui-autocomplete-group-container'
        __css={{ w: '100%', h: 'fit-content', color }}
        {...getContainerProps()}
      >
        <ui.span
          className={cx('ui-autocomplete-group-label')}
          __css={styles.groupLabel}
          noOfLines={1}
        >
          {label}
        </ui.span>

        <ui.ul
          {...getGroupProps({}, ref)}
          className={cx('ui-autocomplete-group', className)}
          __css={{ h, minH, ...styles.group }}
        >
          {children}
        </ui.ul>
      </ui.li>
    )
  },
)
