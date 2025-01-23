import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"

export interface TableContainerProps extends HTMLUIProps {}

export const TableContainer = forwardRef<TableContainerProps, "div">(
  ({ className, overflow, overflowX, ...rest }, ref) => {
    const css: CSSUIObject = {
      display: "block",
      maxW: "100%",
      overflowX: (overflow ?? overflowX ?? "auto") as CSSUIObject["overflowX"],
      overflowY: "hidden",
      WebkitOverflowScrolling: "touch",
      whiteSpace: "nowrap",
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
