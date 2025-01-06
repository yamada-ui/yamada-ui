import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useTableStyles } from "./native-table"

interface TdOptions {
  /**
   * Aligns the cell content to the right.
   *
   * @default false
   */
  numeric?: boolean
}

export interface TdProps extends HTMLUIProps<"td">, TdOptions {}

export const Td = forwardRef<TdProps, "td">(
  ({ className, numeric, ...rest }, ref) => {
    const styles = useTableStyles()

    const css: CSSUIObject = { ...styles.td }

    return (
      <ui.td
        ref={ref}
        className={cx("ui-table__td", className)}
        data-is-numeric={numeric}
        __css={css}
        {...rest}
      />
    )
  },
)

Td.displayName = "Td"
Td.__ui__ = "Td"
