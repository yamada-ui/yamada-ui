import {
  ui,
  useMultiComponentStyle,
  omitThemeProps,
  ComponentArgs,
  CSSUIObject,
  HTMLUIProps,
} from '@yamada-ui/core'
import { IconProps } from '@yamada-ui/icon'
import { TableStyleProvider } from '@yamada-ui/native-table'
import { cx } from '@yamada-ui/utils'
import { ForwardedRef, forwardRef, Ref } from 'react'
import { Tbody, TableBodyProps } from './tbody'
import { Tfoot, TableFootProps } from './tfoot'
import { Thead, TableHeadProps } from './thead'
import { TableContext, TableProvider, useTable, UseTableProps } from './use-table'

type TableOptions<Y extends object = {}> = {
  layout?: CSSUIObject['tableLayout']
  highlightOnSelected?: boolean
  highlightOnHover?: boolean
  withBorder?: boolean
  withColumnBorders?: boolean
  withFooter?: boolean
  theadProps?: Omit<TableHeadProps<Y>, 'sortIconProps' | 'resizeSeparatorProps'>
  tbodyProps?: TableBodyProps<Y>
  tfootProps?: TableFootProps<Y>
  sortIconProps?: IconProps
  resizeSeparatorProps?: HTMLUIProps<'div'> | ((isResizing: boolean) => HTMLUIProps<'div'>)
}

export type TableProps<Y extends object = {}> = UseTableProps<Y> & TableOptions<Y>

export const Table = forwardRef(
  <Y extends object = {}>(
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
      sortIconProps,
      resizeSeparatorProps,
      layout,
      children,
      ...computedProps
    } = omitThemeProps(mergedProps)

    const { getTableProps, enableBlockLayout, ...rest } = useTable<Y>({
      ...computedProps,
      checkboxProps: { colorStyle, ...checkboxProps },
    })

    const css: CSSUIObject = {
      w: enableBlockLayout ? 'auto' : '100%',
      tableLayout: layout,
      ...styles.table,
    }

    return (
      <TableStyleProvider value={styles}>
        <TableProvider value={{ enableBlockLayout, ...rest } as unknown as TableContext}>
          <ui.table
            className={cx('ui-table', className)}
            __css={css}
            {...getTableProps({}, ref)}
            {...(enableBlockLayout ? { as: 'div' } : {})}
          >
            <Thead<Y>
              sortIconProps={sortIconProps}
              resizeSeparatorProps={resizeSeparatorProps}
              {...theadProps}
            />
            <Tbody<Y> {...tbodyProps} />
            {withFooter ? <Tfoot<Y> {...tfootProps} /> : null}
            {children}
          </ui.table>
        </TableProvider>
      </TableStyleProvider>
    )
  },
) as {
  <Y extends object = {}>(props: TableProps<Y> & { ref?: Ref<HTMLDivElement> }): JSX.Element
} & ComponentArgs

Table.displayName = 'Table'
