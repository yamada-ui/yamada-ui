import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useTableStyles } from "./native-table"

interface ThOptions {
  /**
   * Aligns the cell content to the right.
   *
   * @default false
   */
  numeric?: boolean
}

export interface ThProps extends HTMLUIProps<"th">, ThOptions {}

export const Th = forwardRef<ThProps, "th">(
  ({ className, numeric, __css, ...rest }, ref) => {
    const styles = useTableStyles()

    const css: CSSUIObject = { ...styles.th, ...__css }

    return (
      <ui.th
        ref={ref}
        className={cx("ui-table__th", className)}
        data-is-numeric={numeric}
        __css={css}
        {...rest}
      />
    )
  },
)

Th.displayName = "Th"
Th.__ui__ = "Th"
