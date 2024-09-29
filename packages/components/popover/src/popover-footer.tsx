import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { usePopover } from "./popover"

export interface PopoverFooterProps extends HTMLUIProps<"footer"> {}

export const PopoverFooter = forwardRef<PopoverFooterProps, "footer">(
  ({ className, ...rest }, ref) => {
    const { styles } = usePopover()

    const css: CSSUIObject = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      ...styles.footer,
    }

    return (
      <ui.footer
        ref={ref}
        className={cx("ui-popover__footer", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

PopoverFooter.displayName = "PopoverFooter"
PopoverFooter.__ui__ = "PopoverFooter"
