import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useTableStyles } from "./native-table"

export interface TableFootProps extends HTMLUIProps<"tfoot"> {}

export const Tfoot = forwardRef<TableFootProps, "tfoot">(
  ({ className, ...rest }, ref) => {
    const styles = useTableStyles()

    const css: CSSUIObject = { ...styles.tfoot }

    return (
      <ui.tfoot
        ref={ref}
        className={cx("ui-table__tfoot", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

Tfoot.displayName = "Tfoot"
Tfoot.__ui__ = "Tfoot"
