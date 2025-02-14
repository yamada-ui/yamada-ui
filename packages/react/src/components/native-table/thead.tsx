import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useTableStyles } from "./native-table"

export interface TableHeadProps extends HTMLUIProps<"thead"> {}

export const Thead = forwardRef<TableHeadProps, "thead">(
  ({ className, ...rest }, ref) => {
    const styles = useTableStyles()

    const css: CSSUIObject = { ...styles.thead }

    return (
      <ui.thead
        ref={ref}
        className={cx("ui-table__thead", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

Thead.displayName = "Thead"
Thead.__ui__ = "Thead"
