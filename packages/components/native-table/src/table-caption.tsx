import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useTableStyles } from './'

type TableCaptionOptions = {
  placement?: 'top' | 'bottom'
}

export type TableCaptionProps = HTMLUIProps<'caption'> & TableCaptionOptions

export const TableCaption = forwardRef<TableCaptionProps, 'caption'>(
  ({ className, placement, ...rest }, ref) => {
    const styles = useTableStyles()

    const css: CSSUIObject = { captionSide: placement, ...styles.caption }

    return (
      <ui.caption ref={ref} className={cx('ui-table-caption', className)} __css={css} {...rest} />
    )
  },
)
