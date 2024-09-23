import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { usePopover } from "./popover"

export interface PopoverBodyProps extends HTMLUIProps {}

export const PopoverBody = forwardRef<PopoverBodyProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles } = usePopover()

    const css: CSSUIObject = {
      ...styles.body,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-popover__body", className)}
        __css={css}
        {...rest}
      />
    )
  },
)
