import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useTableStyles } from './'

type TdOptions = {
  isNumeric?: boolean
}

export type TdProps = HTMLUIProps<'td'> & TdOptions

export const Td = forwardRef<TdProps, 'td'>(({ className, isNumeric, ...rest }, ref) => {
  const styles = useTableStyles()

  const css: CSSUIObject = { ...styles.td }

  return (
    <ui.td
      ref={ref}
      className={cx('ui-table-td', className)}
      __css={css}
      data-is-numeric={isNumeric}
      {...rest}
    />
  )
})
