import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useStat } from "./stat-context"

export interface StatNumberProps extends HTMLUIProps<"dd"> {}

export const StatNumber = forwardRef<StatNumberProps, "dd">(
  ({ className, ...rest }, ref) => {
    const styles = useStat()

    const css: CSSUIObject = {
      ...styles.number,
    }

    return (
      <ui.dd
        ref={ref}
        className={cx("ui-stat__number", className)}
        __css={css}
        {...rest}
      />
    )
  },
)
