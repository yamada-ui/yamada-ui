import type { PaginationInstance, RowData } from "@tanstack/react-table"
import type {
  ForwardedRef,
  ReactElement,
  ReactNode,
  RefAttributes,
} from "react"
import type { ComponentArgs, CSSUIProps, HTMLUIProps } from "../../core"
import type { PaginationProps } from "../pagination"
import type { SelectProps } from "../select"
import type { TableBodyProps } from "./tbody"
import type { TableFootProps } from "./tfoot"
import type { TableHeadProps } from "./thead"
import type { UseTableProps } from "./use-table"
import { forwardRef } from "react"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { cx, isFunction } from "../../utils"
import { TableStyleProvider } from "../native-table"
import { PagingTableControl } from "./paging-table-control"
import { TableProvider } from "./table-context"
import { Tbody } from "./tbody"
import { Tfoot } from "./tfoot"
import { Thead } from "./thead"
import { useTable } from "./use-table"

interface PaginationComponentProps<Y extends RowData>
  extends Pick<
    PaginationInstance<Y>,
    | "getCanNextPage"
    | "getCanPreviousPage"
    | "nextPage"
    | "previousPage"
    | "setPageIndex"
    | "setPageSize"
  > {
  pageIndex: number
  pageSize: number
  totalPage: number
}

interface TableOptions<Y extends RowData> {
  children?: ((props: PaginationComponentProps<Y>) => ReactNode) | ReactNode
  /**
   * Function to format the label used for the options in a select.
   */
  formatPageSizeLabel?: (pageSize: number) => string
  /**
   * If `true`, highlight the row when the table row is hovered.
   *
   * @default false
   */
  highlightOnHover?: boolean
  /**
   * If `true`, highlight the row when the table row is selected.
   *
   * @default false
   */
  highlightOnSelected?: boolean
  /**
   * The CSS `table-layout` property.
   */
  layout?: CSSUIProps["tableLayout"]
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
   * If `true`, display the paging control.
   *
   * @default true
   */
  withPagingControl?: boolean
  /**
   * Props for table container element.
   */
  containerProps?: HTMLUIProps
  /**
   * Props for pagination element.
   */
  paginationProps?: Omit<
    PaginationProps,
    "defaultPage" | "onChange" | "page" | "total"
  >
  /**
   * Props for paging control element.
   */
  pagingControlProps?: HTMLUIProps
  /**
   * Props for select element.
   */
  selectProps?: Omit<
    SelectProps,
    | "children"
    | "data"
    | "defaultValue"
    | "onChange"
    | "placeholderInOptions"
    | "value"
  >
  /**
   * Props for table tbody element.
   */
  tbodyProps?: TableBodyProps
  /**
   * Props for table tfoot element.
   */
  tfootProps?: TableFootProps
  /**
   * Props for table thead element.
   */
  theadProps?: TableHeadProps
}

export interface PagingTableProps<Y extends RowData = unknown>
  extends Omit<UseTableProps<Y>, "children" | "enablePagination">,
    TableOptions<Y> {}

/**
 * `PagingTable` is a table component with pagination functionality.
 *
 * @see https://yamada-ui.com/components/data-display/paging-table
 */
export const PagingTable = forwardRef(
  <Y extends RowData>(
    { colorScheme, highlightOnSelected = true, ...props }: PagingTableProps<Y>,
    ref: ForwardedRef<HTMLTableElement>,
  ) => {
    const [styles, { size, ...mergedProps }] = useComponentMultiStyle(
      "PagingTable",
      {
        colorScheme,
        highlightOnSelected,
        ...props,
      },
    )
    const {
      className,
      children,
      formatPageSizeLabel,
      layout,
      withFooter = false,
      withPagingControl = true,
      checkboxProps,
      containerProps,
      paginationProps,
      pagingControlProps,
      selectProps,
      tbodyProps,
      tfootProps,
      theadProps,
      ...computedProps
    } = omitThemeProps(mergedProps, [
      "highlightOnSelected",
      "highlightOnHover",
      "withBorder",
      "withColumnBorders",
    ])

    const {
      getCanNextPage,
      getCanPreviousPage,
      nextPage,
      pageSizeList,
      previousPage,
      setPageIndex,
      setPageSize,
      state,
      totalPage,
      getTableProps,
      ...rest
    } = useTable<Y>({
      ...computedProps,
      enablePagination: true,
      checkboxProps: { colorScheme, ...checkboxProps },
    })

    const hasChildren = children != null

    return (
      <TableStyleProvider value={styles}>
        <TableProvider<Y>
          {...{ pageSizeList, setPageIndex, setPageSize, state, totalPage }}
          {...rest}
        >
          <ui.div
            className="ui-paging-table__container"
            __css={{
              display: "flex",
              flexDirection: "column",
              w: "100%",
              ...styles.container,
            }}
            {...containerProps}
          >
            <ui.table
              className={cx("ui-paging-table", className)}
              __css={{
                tableLayout: layout,
                ...styles.table,
              }}
              {...getTableProps({}, ref)}
            >
              <Thead {...theadProps} />
              <Tbody {...tbodyProps} />
              {withFooter ? <Tfoot {...tfootProps} /> : null}
            </ui.table>

            {hasChildren ? (
              isFunction(children) ? (
                children({
                  getCanNextPage,
                  getCanPreviousPage,
                  nextPage,
                  pageIndex: state.pagination.pageIndex,
                  pageSize: state.pagination.pageSize,
                  previousPage,
                  setPageIndex,
                  setPageSize,
                  totalPage,
                })
              ) : (
                children
              )
            ) : withPagingControl ? (
              <PagingTableControl
                {...{
                  colorScheme,
                  size,
                  formatPageSizeLabel,
                  paginationProps,
                  selectProps,
                  ...pagingControlProps,
                }}
              />
            ) : null}
          </ui.div>
        </TableProvider>
      </TableStyleProvider>
    )
  },
) as {
  <Y extends RowData>(
    props: PagingTableProps<Y> & RefAttributes<HTMLTableElement>,
  ): ReactElement
} & ComponentArgs

PagingTable.displayName = "PagingTable"
PagingTable.__ui__ = "PagingTable"
