import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useTableStyles } from "./native-table"

interface TdOptions {
  /**
   * Aligns the cell content to the right.
   *
   * @default false
   *
   * @deprecated Use `numeric` instead.
   */
  isNumeric?: boolean
  /**
   * Aligns the cell content to the right.
   *
   * @default false
   */
  numeric?: boolean
}

export interface TdProps extends HTMLUIProps<"td">, TdOptions {}

export const Td = forwardRef<TdProps, "td">(
  ({ className, isNumeric, numeric = isNumeric, ...rest }, ref) => {
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
