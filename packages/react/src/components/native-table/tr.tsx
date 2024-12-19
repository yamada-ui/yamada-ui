import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useTableStyles } from "./native-table"

export interface TrProps extends HTMLUIProps<"tr"> {}

export const Tr = forwardRef<TrProps, "tr">(({ className, ...rest }, ref) => {
  const styles = useTableStyles()

  const css: CSSUIObject = { ...styles.tr }

  return (
    <ui.tr
      ref={ref}
      className={cx("ui-table__tr", className)}
      __css={css}
      {...rest}
    />
  )
})

Tr.displayName = "Tr"
Tr.__ui__ = "Tr"
