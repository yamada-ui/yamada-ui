import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useTableStyles } from './native-table'

export type TrProps = HTMLUIProps<'tr'>

export const Tr = forwardRef<TrProps, 'tr'>(({ className, ...rest }, ref) => {
  const styles = useTableStyles()

  const css: CSSUIObject = { ...styles.tr }

  return (
    <ui.tr
      ref={ref}
      className={cx('ui-table-tr', className)}
      __css={css}
      {...rest}
    />
  )
})
