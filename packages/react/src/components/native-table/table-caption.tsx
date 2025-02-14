import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useTableStyles } from "./native-table"

interface TableCaptionOptions {
  /**
   * The placement of the table caption.
   *
   * @default 'bottom'
   */
  placement?: "bottom" | "top"
}

export interface TableCaptionProps
  extends HTMLUIProps<"caption">,
    TableCaptionOptions {}

export const TableCaption = forwardRef<TableCaptionProps, "caption">(
  ({ className, placement = "bottom", ...rest }, ref) => {
    const styles = useTableStyles()

    const css: CSSUIObject = { captionSide: placement, ...styles.caption }

    return (
      <ui.caption
        ref={ref}
        className={cx("ui-table__caption", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

TableCaption.displayName = "TableCaption"
TableCaption.__ui__ = "TableCaption"
