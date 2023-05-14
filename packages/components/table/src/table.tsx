import {
  ui,
  useMultiComponentStyle,
  omitThemeProps,
  ComponentArgs,
  CSSUIObject,
} from '@yamada-ui/core'
import { TableStyleProvider } from '@yamada-ui/native-table'
import { cx, Dict } from '@yamada-ui/utils'
import { ForwardedRef, forwardRef, Ref } from 'react'
import { Tbody, TableBodyProps } from './tbody'
import { Tfoot, TableFootProps } from './tfoot'
import { Thead, TableHeadProps } from './thead'
import { TableContext, TableProvider, useTable, UseTableProps } from './use-table'

type TableOptions = {
  layout?: CSSUIObject['tableLayout']
  highlightOnSelected?: boolean
  highlightOnHover?: boolean
  withBorder?: boolean
  withColumnBorders?: boolean
  withFooter?: boolean
  theadProps?: TableHeadProps
  tbodyProps?: TableBodyProps
  tfootProps?: TableFootProps
}

export type TableProps<Y extends Dict = Dict> = UseTableProps<Y> & TableOptions

export const Table = forwardRef(
  <Y extends Dict = Dict>(
    { colorStyle, highlightOnSelected = true, ...props }: TableProps<Y>,
    ref: ForwardedRef<HTMLTableElement>,
  ) => {
    const [styles, mergedProps] = useMultiComponentStyle('Table', {
      colorStyle,
      highlightOnSelected,
      ...props,
    })
    const {
      className,
      withFooter = false,
      theadProps,
      tbodyProps,
      tfootProps,
      checkboxProps,
      layout,
      ...computedProps
    } = omitThemeProps(mergedProps)

    const css: CSSUIObject = { tableLayout: layout, ...styles.table }

    const { getTableProps, ...rest } = useTable<Y>({
      ...computedProps,
      checkboxProps: { colorStyle, ...checkboxProps },
    })

    return (
      <TableStyleProvider value={styles}>
        <TableProvider value={{ ...rest } as TableContext}>
          <ui.table className={cx('ui-table', className)} __css={css} {...getTableProps({}, ref)}>
            <Thead {...theadProps} />
            <Tbody {...tbodyProps} />
            {withFooter ? <Tfoot {...tfootProps} /> : null}
          </ui.table>
        </TableProvider>
      </TableStyleProvider>
    )
  },
) as {
  <Y extends Dict = Dict>(props: TableProps<Y> & { ref?: Ref<HTMLDivElement> }): JSX.Element
} & ComponentArgs

Table.displayName = 'Table'
