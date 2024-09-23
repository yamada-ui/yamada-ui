import type { RowData } from "@tanstack/react-table"
import type { ComponentArgs, CSSUIObject } from "@yamada-ui/core"
import { ui, useComponentMultiStyle, omitThemeProps } from "@yamada-ui/core"
import { TableStyleProvider, TableCaption } from "@yamada-ui/native-table"
import { cx, pickChildren, getValidChildren } from "@yamada-ui/utils"
import type { ForwardedRef, RefAttributes } from "react"
import { forwardRef } from "react"
import type { TableBodyProps } from "./tbody"
import { Tbody } from "./tbody"
import type { TableFootProps } from "./tfoot"
import { Tfoot } from "./tfoot"
import type { TableHeadProps } from "./thead"
import { Thead } from "./thead"
import type { TableContext, UseTableProps } from "./use-table"
import { TableProvider, useTable } from "./use-table"

interface TableOptions {
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
}

type PagingTableProps =
  | "enablePagination"
  | "pageIndex"
  | "defaultPageIndex"
  | "onChangePageIndex"
  | "pageSize"
  | "defaultPageSize"
  | "onChangePageSize"
  | "pageSizeList"
  | "pageCount"
  | "manualPagination"
  | "autoResetPageIndex"

export interface TableProps<Y extends RowData = unknown>
  extends Omit<UseTableProps<Y>, PagingTableProps>,
    TableOptions {}

/**
 * `Table` is a table component equipped with column sorting, row selection, and click event features.
 *
 * @see Docs https://yamada-ui.com/components/data-display/table
 */
export const Table = forwardRef(
  <Y extends RowData>(
    { colorScheme, highlightOnSelected = true, ...props }: TableProps<Y>,
    ref: ForwardedRef<HTMLTableElement>,
  ) => {
    const [styles, mergedProps] = useComponentMultiStyle("Table", {
      colorScheme,
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
      children,
      ...computedProps
    } = omitThemeProps(mergedProps, [
      "highlightOnSelected",
      "highlightOnHover",
      "withBorder",
      "withColumnBorders",
    ])

    const { getTableProps, ...rest } = useTable<Y>({
      ...computedProps,
      checkboxProps: { colorScheme, ...checkboxProps },
    })

    const css: CSSUIObject = {
      tableLayout: layout,
      ...styles.table,
    }

    const validChildren = getValidChildren(children)
    const tableCaptionChildren = pickChildren(validChildren, TableCaption)

    return (
      <TableStyleProvider value={styles}>
        <TableProvider value={{ ...rest } as TableContext}>
          <ui.table
            className={cx("ui-table", className)}
            __css={css}
            {...getTableProps({}, ref)}
          >
            <Thead {...theadProps} />
            <Tbody {...tbodyProps} />
            {withFooter ? <Tfoot {...tfootProps} /> : null}
            {tableCaptionChildren}
          </ui.table>
        </TableProvider>
      </TableStyleProvider>
    )
  },
) as {
  <Y extends RowData>(
    props: TableProps<Y> & RefAttributes<HTMLTableElement>,
  ): JSX.Element
} & ComponentArgs

Table.displayName = "Table"
