import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx, mergeRefs } from "../../utils"
import { usePopover } from "./popover"

export interface PopoverBodyProps extends HTMLUIProps {}

export const PopoverBody = forwardRef<PopoverBodyProps, "div">(
  ({ className, ...rest }, ref) => {
    const { bodyRef, styles } = usePopover()

    const css: CSSUIObject = {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      ...styles.body,
    }

    return (
      <ui.div
        ref={mergeRefs(bodyRef, ref)}
        className={cx("ui-popover__body", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

PopoverBody.displayName = "PopoverBody"
PopoverBody.__ui__ = "PopoverBody"
