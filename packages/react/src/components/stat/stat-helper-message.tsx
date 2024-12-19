import type { CSSUIObject, FC, HTMLUIProps } from "../../core"
import { ui } from "../../core"
import { cx } from "../../utils"
import { useStat } from "./stat-context"

export interface StatHelperMessageProps extends HTMLUIProps<"dd"> {}

export const StatHelperMessage: FC<StatHelperMessageProps> = ({
  className,
  ...rest
}) => {
  const styles = useStat()

  const css: CSSUIObject = { ...styles.helperMessage }

  return (
    <ui.dd
      className={cx("ui-stat__helper-message", className)}
      __css={css}
      {...rest}
    />
  )
}

StatHelperMessage.__ui__ = "StatHelperMessage"
