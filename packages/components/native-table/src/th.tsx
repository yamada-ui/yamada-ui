import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useTableStyles } from './'

type ThOptions = {
  isNumeric?: boolean
}

export type ThProps = HTMLUIProps<'th'> & ThOptions

export const Th = forwardRef<ThProps, 'th'>(({ className, isNumeric, __css, ...rest }, ref) => {
  const styles = useTableStyles()

  const css: CSSUIObject = { ...styles.th, ...__css }

  return (
    <ui.th
      ref={ref}
      className={cx('ui-table-th', className)}
      __css={css}
      data-is-numeric={isNumeric}
      {...rest}
    />
  )
})
