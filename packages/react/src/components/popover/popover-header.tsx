import type { HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx, mergeRefs } from "../../utils"
import { usePopover } from "./popover"

export interface PopoverHeaderProps extends HTMLUIProps<"header"> {}

export const PopoverHeader = forwardRef<PopoverHeaderProps, "header">(
  ({ className, ...rest }, ref) => {
    const { headerRef, styles } = usePopover()

    return (
      <ui.header
        ref={mergeRefs(headerRef, ref)}
        className={cx("ui-popover__header", className)}
        __css={styles.header}
        {...rest}
      />
    )
  },
)

PopoverHeader.displayName = "PopoverHeader"
PopoverHeader.__ui__ = "PopoverHeader"
