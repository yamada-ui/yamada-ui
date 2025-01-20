import type { CSSUIObject, FC, HTMLUIProps } from "../../core"
import { ui } from "../../core"
import { cx } from "../../utils"
import { useStat } from "./stat-context"

export interface StatNumberProps extends HTMLUIProps<"dd"> {}

export const StatNumber: FC<StatNumberProps> = ({ className, ...rest }) => {
  const styles = useStat()

  const css: CSSUIObject = {
    ...styles.number,
  }

  return (
    <ui.dd className={cx("ui-stat__number", className)} __css={css} {...rest} />
  )
}

StatNumber.__ui__ = "StatNumber"
