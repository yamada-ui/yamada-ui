import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useTableStyles } from './native-table'

export type TableHeadProps = HTMLUIProps<'thead'>

export const Thead = forwardRef<TableHeadProps, 'thead'>(({ className, ...rest }, ref) => {
  const styles = useTableStyles()

  const css: CSSUIObject = { ...styles.thead }

  return <ui.thead ref={ref} className={cx('ui-table-thead', className)} __css={css} {...rest} />
})
