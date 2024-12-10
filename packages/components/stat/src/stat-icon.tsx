import type { CSSUIObject } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { TriangleIcon } from "@yamada-ui/lucide"
import { cx } from "@yamada-ui/utils"
import { useStat } from "./stat-context"

interface StatIconOptions {
  /**
   * @default "increase"
   */
  type?: "decrease" | "increase"
}

export interface StatIconProps
  extends Omit<IconProps, "type">,
    StatIconOptions {}

export const StatIcon = forwardRef<StatIconProps, "svg">(
  ({ type = "increase", className, ...rest }, ref) => {
    const styles = useStat()
    const color = type === "increase" ? "$increase" : "$decrease"

    const css: CSSUIObject = {
      color,
      fill: color,
      transform: type === "decrease" ? "rotate(180deg)" : undefined,
      ...styles.icon,
    }

    return (
      <TriangleIcon
        ref={ref}
        className={cx("ui-stat__icon", className)}
        aria-label={type === "increase" ? "Increased by" : "Decreased by"}
        __css={css}
        {...rest}
      />
    )
  },
)

StatIcon.displayName = "StatIcon"
StatIcon.__ui__ = "StatIcon"
