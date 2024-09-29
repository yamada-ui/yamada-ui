import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useStat } from "./stat-context"

export interface StatHelperMessageProps extends HTMLUIProps<"dd"> {}

export const StatHelperMessage = forwardRef<StatHelperMessageProps, "dd">(
  ({ className, ...rest }, ref) => {
    const styles = useStat()

    const css: CSSUIObject = { ...styles.helperMessage }

    return (
      <ui.dd
        ref={ref}
        className={cx("ui-stat__helper-message", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

StatHelperMessage.displayName = "StatHelperMessage"
StatHelperMessage.__ui__ = "StatHelperMessage"
