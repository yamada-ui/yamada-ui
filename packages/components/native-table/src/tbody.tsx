import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useTableStyles } from "./native-table"

export interface TableBodyProps extends HTMLUIProps<"tbody"> {}

export const Tbody = forwardRef<TableBodyProps, "tbody">(
  ({ className, ...rest }, ref) => {
    const styles = useTableStyles()

    const css: CSSUIObject = { ...styles.tbody }

    return (
      <ui.tbody
        ref={ref}
        className={cx("ui-table__tbody", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

Tbody.displayName = "Tbody"
Tbody.__ui__ = "Tbody"
