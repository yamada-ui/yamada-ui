import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useTableStyles } from './native-table'

type TdOptions = {
  /**
   * Aligns the cell content to the right.
   *
   * @default false
   */
  isNumeric?: boolean
}

export type TdProps = HTMLUIProps<'td'> & TdOptions

export const Td = forwardRef<TdProps, 'td'>(
  ({ className, isNumeric, ...rest }, ref) => {
    const styles = useTableStyles()

    const css: CSSUIObject = { ...styles.td }

    return (
      <ui.td
        ref={ref}
        className={cx('ui-native-table__td', className)}
        __css={css}
        data-is-numeric={isNumeric}
        {...rest}
      />
    )
  },
)
