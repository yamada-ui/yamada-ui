import { ui, forwardRef, HTMLUIProps, layoutStylesProperties } from '@yamada-ui/core'
import { splitObject, cx } from '@yamada-ui/utils'
import { useSelectContext } from './use-select'

type OptionGroupOptions = {
  label: string
}

export type OptionGroupProps = HTMLUIProps<'ul'> & OptionGroupOptions

export const OptionGroup = forwardRef<OptionGroupProps, 'ul'>(
  ({ className, label, color, h, height, minH, minHeight, children, ...rest }, ref) => {
    const { styles } = useSelectContext()

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
