import type { HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx, mergeRefs } from "../../utils"
import { usePopover } from "./popover"

export interface PopoverBodyProps extends HTMLUIProps {}

export const PopoverBody = forwardRef<PopoverBodyProps, "div">(
  ({ className, ...rest }, ref) => {
    const { bodyRef, styles } = usePopover()

    return (
      <ui.div
        ref={mergeRefs(bodyRef, ref)}
        className={cx("ui-popover__body", className)}
        __css={styles.body}
        {...rest}
      />
    )
  },
)

PopoverBody.displayName = "PopoverBody"
PopoverBody.__ui__ = "PopoverBody"
