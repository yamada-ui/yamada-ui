import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useCheckboxCardContext } from "./checkbox-context"

export interface CheckboxCardAddonProps extends HTMLUIProps {}

export const CheckboxCardAddon = forwardRef<CheckboxCardAddonProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles } = useCheckboxCardContext()

    const css: CSSUIObject = { ...styles.addon }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-checkbox-card__addon", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

CheckboxCardAddon.displayName = "CheckboxCardAddon"
CheckboxCardAddon.__ui__ = "CheckboxCardAddon"
