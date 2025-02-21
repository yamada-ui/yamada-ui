import type { HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { usePopover } from "./popover"

export interface PopoverFooterProps extends HTMLUIProps<"footer"> {}

export const PopoverFooter = forwardRef<PopoverFooterProps, "footer">(
  ({ className, ...rest }, ref) => {
    const { styles } = usePopover()

    return (
      <ui.footer
        ref={ref}
        className={cx("ui-popover__footer", className)}
        __css={styles.footer}
        {...rest}
      />
    )
  },
)

PopoverFooter.displayName = "PopoverFooter"
PopoverFooter.__ui__ = "PopoverFooter"
