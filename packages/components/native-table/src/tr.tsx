import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
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
