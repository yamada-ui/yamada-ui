import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { usePopover } from "./popover"

export interface PopoverHeaderProps extends HTMLUIProps<"header"> {}

export const PopoverHeader = forwardRef<PopoverHeaderProps, "header">(
  ({ className, ...rest }, ref) => {
    const { styles } = usePopover()

    const css: CSSUIObject = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      ...styles.header,
    }

    return (
      <ui.header
        ref={ref}
        className={cx("ui-popover__header", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

PopoverHeader.displayName = "PopoverHeader"
PopoverHeader.__ui__ = "PopoverHeader"
