import type { RowData } from "@tanstack/react-table"
import type { ComponentArgs, CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import type { ForwardedRef, ReactElement, RefAttributes } from "react"
import type { TableBodyProps } from "./tbody"
import type { TableFootProps } from "./tfoot"
import type { TableHeadProps } from "./thead"
import type { UseTableProps } from "./use-table"
import { omitThemeProps, ui, useComponentMultiStyle } from "@yamada-ui/core"
import { TableCaption, TableStyleProvider } from "@yamada-ui/native-table"
import { cx, getValidChildren, pickChildren } from "@yamada-ui/utils"
import { forwardRef } from "react"
import { TableProvider } from "./table-context"
import { Tbody } from "./tbody"
import { Tfoot } from "./tfoot"
import { Thead } from "./thead"
import { useTable } from "./use-table"

interface TableOptions {
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

type PagingTableProps =
  | "autoResetPageIndex"
  | "defaultPageIndex"
  | "defaultPageSize"
  | "enablePagination"
  | "manualPagination"
  | "onChangePageIndex"
  | "onChangePageSize"
  | "pageCount"
  | "pageIndex"
  | "pageSize"
  | "pageSizeList"

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
      children,
      layout,
      checkboxProps,
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

    const { withFooter, getTableProps, ...rest } = useTable<Y>({
      ...computedProps,
      checkboxProps: { colorScheme, ...checkboxProps },
    })

    const css: CSSUIObject = {
      tableLayout: layout,
      w: "100%",
      ...styles.table,
    }

    const validChildren = getValidChildren(children)
    const tableCaptionChildren = pickChildren(validChildren, TableCaption)

    return (
      <TableStyleProvider value={styles}>
        <TableProvider<Y> {...rest}>
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
    props: RefAttributes<HTMLTableElement> & TableProps<Y>,
  ): ReactElement
} & ComponentArgs

Table.displayName = "Table"
Table.__ui__ = "Table"
