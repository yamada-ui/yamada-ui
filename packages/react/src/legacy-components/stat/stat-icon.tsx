import type { CSSUIObject, FC } from "../../core"
import type { IconProps } from "../icon"
import { cx } from "../../utils"
import { TriangleIcon } from "../icon"
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

export const StatIcon: FC<StatIconProps> = ({
  type = "increase",
  className,
  ...rest
}) => {
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
      className={cx("ui-stat__icon", className)}
      aria-label={type === "increase" ? "Increased by" : "Decreased by"}
      __css={css}
      {...rest}
    />
  )
}

StatIcon.__ui__ = "StatIcon"
