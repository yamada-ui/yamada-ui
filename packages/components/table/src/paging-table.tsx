import type { PaginationInstance, RowData } from "@tanstack/react-table"
import type { ComponentArgs, CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { PaginationProps } from "@yamada-ui/pagination"
import type { SelectProps } from "@yamada-ui/select"
import type { ForwardedRef, ReactNode, RefAttributes } from "react"
import type { TableBodyProps } from "./tbody"
import type { TableFootProps } from "./tfoot"
import type { TableHeadProps } from "./thead"
import type { TableContext, UseTableProps } from "./use-table"
import { omitThemeProps, ui, useComponentMultiStyle } from "@yamada-ui/core"
import { TableStyleProvider } from "@yamada-ui/native-table"
import { Pagination } from "@yamada-ui/pagination"
import { Select } from "@yamada-ui/select"
import { cx, isFunction } from "@yamada-ui/utils"
import { forwardRef } from "react"
import { Tbody } from "./tbody"
import { Tfoot } from "./tfoot"
import { Thead } from "./thead"
import { TableProvider, useTable } from "./use-table"

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

const defaultFormatPageSizeLabel = (pageSize: number) => String(pageSize)

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
  layout?: CSSUIObject["tableLayout"]
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
 * @see Docs https://yamada-ui.com/components/data-display/paging-table
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
      formatPageSizeLabel = defaultFormatPageSizeLabel,
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

    const css: CSSUIObject = {
      tableLayout: layout,
      w: "100%",
      ...styles.table,
    }

    const hasChildren = children != null

    return (
      <TableStyleProvider value={styles}>
        <TableProvider value={{ ...rest } as TableContext}>
          <ui.div
            className={cx("ui-paging-table__container", className)}
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
              __css={css}
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
              <ui.div
                className={cx("ui-paging-table__control", className)}
                __css={{ display: "grid", ...styles.pagingControl }}
                {...pagingControlProps}
              >
                <Pagination
                  colorScheme={colorScheme}
                  gridColumnEnd={3}
                  gridColumnStart={2}
                  justifyContent="center"
                  page={state.pagination.pageIndex + 1}
                  size={size === "sm" ? "xs" : size}
                  total={totalPage}
                  withEdges
                  onChange={(page) => setPageIndex(page - 1)}
                  {...paginationProps}
                />

                <Select
                  gridColumnEnd={4}
                  gridColumnStart={3}
                  items={pageSizeList.map((pageSize) => ({
                    label: formatPageSizeLabel(pageSize),
                    value: String(pageSize),
                  }))}
                  justifySelf="flex-end"
                  maxW="3xs"
                  size={
                    size === "xl"
                      ? "lg"
                      : size === "lg"
                        ? "md"
                        : size === "md"
                          ? "sm"
                          : "xs"
                  }
                  value={String(state.pagination.pageSize)}
                  onChange={(pageSize) => setPageSize(Number(pageSize))}
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
  <Y extends RowData>(
    props: PagingTableProps<Y> & RefAttributes<HTMLTableElement>,
  ): JSX.Element
} & ComponentArgs

PagingTable.displayName = "PagingTable"
PagingTable.__ui__ = "PagingTable"
