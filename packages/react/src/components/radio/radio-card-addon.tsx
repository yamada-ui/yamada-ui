import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef } from "../../core"
import { ui } from "../../core"
import { cx } from "../../utils"
import { useRadioCardContext } from "./radio-context"

export interface RadioCardAddonProps extends HTMLUIProps {}

export const RadioCardAddon = forwardRef<RadioCardAddonProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles } = useRadioCardContext()

    const css: CSSUIObject = { ...styles.addon }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-radio-card__addon", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

RadioCardAddon.displayName = "RadioCardAddon"
RadioCardAddon.__ui__ = "RadioCardAddon"
