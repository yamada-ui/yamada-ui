import { ui, forwardRef, HTMLUIProps } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useSelectContext, useSelectOptionGroup, UseSelectOptionGroupProps } from './use-select'

type OptionGroupOptions = UseSelectOptionGroupProps

export type OptionGroupProps = HTMLUIProps<'ul'> & OptionGroupOptions

export const OptionGroup = forwardRef<OptionGroupProps, 'ul'>(
  ({ className, color, h, height, minH, minHeight, children, ...rest }, ref) => {
    const { styles } = useSelectContext()
    const { label, getContainerProps, getGroupProps } = useSelectOptionGroup(rest)

    h = h ?? height
    minH = minH ?? minHeight

    return (
      <ui.li
        className='ui-select-group-container'
        __css={{ w: '100%', h: 'fit-content', color }}
        {...getContainerProps()}
      >
        <ui.span className={cx('ui-select-group-label')} __css={styles.groupLabel} noOfLines={1}>
          {label}
        </ui.span>

        <ui.ul
          {...getGroupProps({}, ref)}
          className={cx('ui-select-group', className)}
          __css={{ h, minH, ...styles.group }}
        >
          {children}
        </ui.ul>
      </ui.li>
    )
  },
)
