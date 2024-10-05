import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useStat } from "./stat-context"

export interface StatLabelProps extends HTMLUIProps<"dt"> {}

export const StatLabel = forwardRef<StatLabelProps, "dt">(
  ({ className, ...rest }, ref) => {
    const styles = useStat()

    const css: CSSUIObject = { ...styles.label }

    return (
      <ui.dt
        ref={ref}
        className={cx("ui-stat__label", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

StatLabel.displayName = "StatLabel"
StatLabel.__ui__ = "StatLabel"
