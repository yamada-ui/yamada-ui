import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useTableStyles } from './'

export type TableContainerProps = HTMLUIProps<'div'>

export const TableContainer = forwardRef<TableContainerProps, 'div'>(
  ({ className, overflow, overflowX, ...rest }, ref) => {
    const styles = useTableStyles()

    const css: CSSUIObject = {
      display: 'block',
      whiteSpace: 'nowrap',
      WebkitOverflowScrolling: 'touch',
      overflowX: (overflow ?? overflowX ?? 'auto') as CSSUIObject['overflowX'],
      overflowY: 'hidden',
      maxW: '100%',
      ...styles.container,
    }

    return (
      <ui.div ref={ref} className={cx('ui-table-container', className)} __css={css} {...rest} />
    )
  },
)
