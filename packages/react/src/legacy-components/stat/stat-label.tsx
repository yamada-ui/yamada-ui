import type { CSSUIObject, FC, HTMLUIProps } from "../../core"
import { ui } from "../../core"
import { cx } from "../../utils"
import { useStat } from "./stat-context"

export interface StatLabelProps extends HTMLUIProps<"dt"> {}

export const StatLabel: FC<StatLabelProps> = ({ className, ...rest }) => {
  const styles = useStat()

  const css: CSSUIObject = { ...styles.label }

  return (
    <ui.dt className={cx("ui-stat__label", className)} __css={css} {...rest} />
  )
}

StatLabel.__ui__ = "StatLabel"
