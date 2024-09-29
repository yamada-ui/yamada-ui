import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

export interface TableContainerProps extends HTMLUIProps {}

export const TableContainer = forwardRef<TableContainerProps, "div">(
  ({ className, overflow, overflowX, ...rest }, ref) => {
    const css: CSSUIObject = {
      display: "block",
      whiteSpace: "nowrap",
      WebkitOverflowScrolling: "touch",
      overflowX: (overflow ?? overflowX ?? "auto") as CSSUIObject["overflowX"],
      overflowY: "hidden",
      maxW: "100%",
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-table__container", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

TableContainer.displayName = "TableContainer"
TableContainer.__ui__ = "TableContainer"
