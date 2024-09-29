import type { RowData, PaginationInstance } from "@tanstack/react-table"
import type { ComponentArgs, CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, useComponentMultiStyle, omitThemeProps } from "@yamada-ui/core"
import { TableStyleProvider } from "@yamada-ui/native-table"
import type { PaginationProps } from "@yamada-ui/pagination"
import { Pagination } from "@yamada-ui/pagination"
import type { SelectProps } from "@yamada-ui/select"
import { Select } from "@yamada-ui/select"
import { cx, isFunction } from "@yamada-ui/utils"
import type { ForwardedRef, ReactNode, RefAttributes } from "react"
import { forwardRef } from "react"
import type { TableBodyProps } from "./tbody"
import { Tbody } from "./tbody"
import type { TableFootProps } from "./tfoot"
import { Tfoot } from "./tfoot"
import type { TableHeadProps } from "./thead"
import { Thead } from "./thead"
import type { TableContext, UseTableProps } from "./use-table"
import { TableProvider, useTable } from "./use-table"

interface PaginationComponentProps<Y extends RowData>
  extends Pick<
    PaginationInstance<Y>,
    | "setPageIndex"
    | "setPageSize"
    | "previousPage"
    | "nextPage"
    | "getCanPreviousPage"
    | "getCanNextPage"
  > {
  pageIndex: number
  pageSize: number
  totalPage: number
}

const defaultFormatPageSizeLabel = (pageSize: number) => String(pageSize)

interface TableOptions<Y extends RowData> {
  /**
   * The CSS `table-layout` property.
   */
  layout?: CSSUIObject["tableLayout"]
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
  containerProps?: HTMLUIProps
  /**
   * Props for paging control element.
   */
  pagingControlProps?: HTMLUIProps
  /**
   * Props for pagination element.
   */
  paginationProps?: Omit<
    PaginationProps,
    "page" | "defaultPage" | "total" | "onChange"
  >
  /**
   * Props for select element.
   */
  selectProps?: Omit<
    SelectProps,
    | "value"
    | "defaultValue"
    | "onChange"
    | "placeholderInOptions"
    | "data"
    | "children"
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

export interface PagingTableProps<Y extends RowData = unknown>
  extends Omit<UseTableProps<Y>, "enablePagination" | "children">,
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
    } = omitThemeProps(mergedProps, [
      "highlightOnSelected",
      "highlightOnHover",
      "withBorder",
      "withColumnBorders",
    ])

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
      ...computedProps,
      checkboxProps: { colorScheme, ...checkboxProps },
      enablePagination: true,
    })

    const css: CSSUIObject = {
      w: "100%",
      tableLayout: layout,
      ...styles.table,
    }

    const hasChildren = children != null

    return (
      <TableStyleProvider value={styles}>
        <TableProvider value={{ ...rest } as TableContext}>
          <ui.div
            className={cx("ui-paging-table__container", className)}
            __css={{
              w: "100%",
              display: "flex",
              flexDirection: "column",
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
                className={cx("ui-paging-table__control", className)}
                __css={{ display: "grid", ...styles.pagingControl }}
                {...pagingControlProps}
              >
                <Pagination
                  colorScheme={colorScheme}
                  size={size === "sm" ? "xs" : size}
                  page={state.pagination.pageIndex + 1}
                  total={totalPage}
                  onChange={(page) => setPageIndex(page - 1)}
                  withEdges
                  justifyContent="center"
                  gridColumnStart={2}
                  gridColumnEnd={3}
                  {...paginationProps}
                />

                <Select
                  size={
                    size === "xl"
                      ? "lg"
                      : size === "lg"
                        ? "md"
                        : size === "md"
                          ? "sm"
                          : "xs"
                  }
                  maxW="3xs"
                  value={String(state.pagination.pageSize)}
                  items={pageSizeList.map((pageSize) => ({
                    label: formatPageSizeLabel(pageSize),
                    value: String(pageSize),
                  }))}
                  onChange={(pageSize) => setPageSize(Number(pageSize))}
                  gridColumnStart={3}
                  gridColumnEnd={4}
                  justifySelf="flex-end"
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
