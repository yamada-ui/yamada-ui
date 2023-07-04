import { RowData, PaginationInstance } from '@tanstack/react-table'
import {
  ui,
  useMultiComponentStyle,
  omitThemeProps,
  ComponentArgs,
  CSSUIObject,
  HTMLUIProps,
} from '@yamada-ui/core'
import { TableStyleProvider } from '@yamada-ui/native-table'
import { Pagination, PaginationProps } from '@yamada-ui/pagination'
import { Select, SelectProps } from '@yamada-ui/select'
import { cx, isFunction, omitObject } from '@yamada-ui/utils'
import { ForwardedRef, forwardRef, ReactNode, Ref } from 'react'
import { TableBodyProps, Tbody } from './tbody'
import { TableFootProps, Tfoot } from './tfoot'
import { TableHeadProps, Thead } from './thead'
import { TableContext, TableProvider, useTable, UseTableProps } from './use-table'

type PaginationComponentProps<Y extends RowData> = Pick<
  PaginationInstance<Y>,
  | 'setPageIndex'
  | 'setPageSize'
  | 'previousPage'
  | 'nextPage'
  | 'getCanPreviousPage'
  | 'getCanNextPage'
> & {
  pageIndex: number
  pageSize: number
  totalPage: number
}

type TableOptions<Y extends RowData> = {
  /**
   * The CSS `table-layout` property.
   */
  layout?: CSSUIObject['tableLayout']
  /**
   * If `true`, highlight the row when the table row is selected.
   *
   * @default false
   */
  highlightOnSelected?: boolean
  /**
   * If `true`, highlight the row when the table row is hovered.
   *
   * @default false
   */
  highlightOnHover?: boolean
  /**
   * If `true`, display the outer border of the table.
   *
   * @default false
   */
  withBorder?: boolean
  /**
   * If `true`, display line on the columns of the table.
   *
   * @default false
   */
  withColumnBorders?: boolean
  /**
   * If `true`, display the table footer.
   *
   * @default false
   */
  withFooter?: boolean
  /**
   * Props for table thead element.
   */
  theadProps?: TableHeadProps
  /**
   * Props for table tbody element.
   */
  tbodyProps?: TableBodyProps
  /**
   * Props for table tfoot element.
   */
  tfootProps?: TableFootProps
  /**
   * Props for table container element.
   */
  containerProps?: HTMLUIProps<'div'>
  /**
   * Props for paging control element.
   */
  pagingControlProps?: HTMLUIProps<'div'>
  /**
   * Props for pagination element.
   */
  paginationProps?: Omit<PaginationProps, 'page' | 'defaultPage' | 'total' | 'onChange'>
  /**
   * Props for select element.
   */
  selectProps?: Omit<
    SelectProps,
    'value' | 'defaultValue' | 'onChange' | 'placeholderInOptions' | 'data' | 'children'
  >
  /**
   * If `true`, display the paging control.
   *
   * @default true
   */
  withPagingControl?: boolean
  /**
   * Function to format the label used for the options in a select.
   */
  formatPageSizeLabel?: (pageSize: number) => string
  children?: ReactNode | ((props: PaginationComponentProps<Y>) => ReactNode)
}

export type PagingTableProps<Y extends RowData> = Omit<
  UseTableProps<Y>,
  'enablePagenation' | 'children'
> &
  TableOptions<Y>

const defaultFormatPageSizeLabel = (pageSize: number) => String(pageSize)

export const PagingTable = forwardRef(
  <Y extends RowData>(
    { colorScheme, highlightOnSelected = true, ...props }: PagingTableProps<Y>,
    ref: ForwardedRef<HTMLTableElement>,
  ) => {
    const [styles, { size, ...mergedProps }] = useMultiComponentStyle('Table', {
      colorScheme,
      highlightOnSelected,
      ...props,
    })
    const {
      className,
      containerProps,
      pagingControlProps,
      paginationProps,
      selectProps,
      withPagingControl = true,
      withFooter = false,
      formatPageSizeLabel = defaultFormatPageSizeLabel,
      theadProps,
      tbodyProps,
      tfootProps,
      checkboxProps,
      layout,
      children,
      ...computedProps
    } = omitThemeProps(mergedProps)

    const {
      state,
      getTableProps,
      setPageIndex,
      previousPage,
      nextPage,
      getCanNextPage,
      getCanPreviousPage,
      setPageSize,
      totalPage,
      pageSizeList,
      ...rest
    } = useTable<Y>({
      ...omitObject(computedProps, [
        'highlightOnSelected',
        'highlightOnHover',
        'withColumnBorders',
      ]),
      checkboxProps: { colorScheme, ...checkboxProps },
      enablePagenation: true,
    })

    const css: CSSUIObject = {
      w: '100%',
      tableLayout: layout,
      ...styles.table,
    }

    const hasChildren = children != null

    return (
      <TableStyleProvider value={styles}>
        <TableProvider value={{ ...rest } as TableContext}>
          <ui.div
            className={cx('ui-paging-table-container', className)}
            __css={{ w: '100%', display: 'flex', flexDirection: 'column', ...styles.container }}
            {...containerProps}
          >
            <ui.table className='ui-paging-table' __css={css} {...getTableProps({}, ref)}>
              <Thead {...theadProps} />
              <Tbody {...tbodyProps} />
              {withFooter ? <Tfoot {...tfootProps} /> : null}
            </ui.table>

            {hasChildren ? (
              isFunction(children) ? (
                children({
                  pageIndex: state.pagination.pageIndex,
                  pageSize: state.pagination.pageSize,
                  totalPage,
                  getCanNextPage,
                  getCanPreviousPage,
                  setPageIndex,
                  previousPage,
                  nextPage,
                  setPageSize,
                })
              ) : (
                children
              )
            ) : withPagingControl ? (
              <ui.div
                className='ui-paging-table-control'
                __css={{ display: 'grid', ...styles.pagingControl }}
                {...pagingControlProps}
              >
                <Pagination
                  colorScheme={colorScheme}
                  size={size === 'sm' ? 'xs' : size}
                  page={state.pagination.pageIndex + 1}
                  total={totalPage}
                  onChange={(page) => setPageIndex(page - 1)}
                  withEdges
                  justifyContent='center'
                  gridColumnStart={2}
                  gridColumnEnd={3}
                  {...paginationProps}
                />

                <Select
                  size={size === 'xl' ? 'lg' : size === 'lg' ? 'md' : size === 'md' ? 'sm' : 'xs'}
                  maxW='3xs'
                  value={String(state.pagination.pageSize)}
                  options={pageSizeList.map((pageSize) => ({
                    label: formatPageSizeLabel(pageSize),
                    value: String(pageSize),
                  }))}
                  onChange={(pageSize) => setPageSize(Number(pageSize))}
                  gridColumnStart={3}
                  gridColumnEnd={4}
                  justifySelf='flex-end'
                  {...selectProps}
                />
              </ui.div>
            ) : null}
          </ui.div>
        </TableProvider>
      </TableStyleProvider>
    )
  },
) as {
  <Y extends RowData>(props: PagingTableProps<Y> & { ref?: Ref<HTMLDivElement> }): JSX.Element
} & ComponentArgs

PagingTable.displayName = 'PagingTable'
