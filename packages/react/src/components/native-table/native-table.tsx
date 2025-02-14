import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  ThemeProps,
} from "../../core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { createContext, cx } from "../../utils"

interface TableStyleContext {
  [key: string]: CSSUIObject | undefined
}

export const [TableStyleProvider, useTableStyles] =
  createContext<TableStyleContext>({
    name: "TableStyleContext",
    errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" or "<NativeTable />" or "<PagingTable />"`,
  })

interface NativeTableOptions {
  /**
   * If `true`, highlight the row when the table row is hovered.
   *
   * @default false
   */
  highlightOnHover?: boolean
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
}

export interface NativeTableProps
  extends HTMLUIProps<"table">,
    ThemeProps<"NativeTable">,
    NativeTableOptions {}

/**
 * `NativeTable` is a component for efficiently organizing and displaying data.
 *
 * @see Docs https://yamada-ui.com/components/data-display/native-table
 */
export const NativeTable = forwardRef<NativeTableProps, "table">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("NativeTable", props)
    const { className, layout, ...rest } = omitThemeProps(mergedProps, [
      "withBorder",
      "withColumnBorders",
      "highlightOnHover",
    ])

    const css: CSSUIObject = { tableLayout: layout, ...styles.table }

    return (
      <TableStyleProvider value={styles}>
        <ui.table
          ref={ref}
          className={cx("ui-table", className)}
          __css={css}
          {...rest}
        />
      </TableStyleProvider>
    )
  },
)

NativeTable.displayName = "NativeTable"
NativeTable.__ui__ = "NativeTable"
