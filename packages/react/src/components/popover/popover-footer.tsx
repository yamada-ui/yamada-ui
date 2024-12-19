import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { usePopover } from "./popover"

export interface PopoverFooterProps extends HTMLUIProps<"footer"> {}

export const PopoverFooter = forwardRef<PopoverFooterProps, "footer">(
  ({ className, ...rest }, ref) => {
    const { styles } = usePopover()

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
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
