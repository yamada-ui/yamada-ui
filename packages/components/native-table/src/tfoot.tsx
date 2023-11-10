import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useTableStyles } from './native-table'

export type TableFootProps = HTMLUIProps<'tfoot'>

export const Tfoot = forwardRef<TableFootProps, 'tfoot'>(
  ({ className, ...rest }, ref) => {
    const styles = useTableStyles()

    const css: CSSUIObject = { ...styles.tfoot }

    return (
      <ui.tfoot
        ref={ref}
        className={cx('ui-table__tfoot', className)}
        __css={css}
        {...rest}
      />
    )
  },
)
