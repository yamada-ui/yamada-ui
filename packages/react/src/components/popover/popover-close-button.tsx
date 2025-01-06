import type { CloseButtonProps } from "../close-button"
import { forwardRef } from "../../core"
import { cx, handlerAll } from "../../utils"
import { CloseButton } from "../close-button"
import { usePopover } from "./popover"

export interface PopoverCloseButtonProps extends CloseButtonProps {}

export const PopoverCloseButton = forwardRef<PopoverCloseButtonProps, "button">(
  ({ onClick, ...rest }, ref) => {
    const { id, styles, onClose } = usePopover()

    return (
      <CloseButton
        ref={ref}
        className={cx("ui-popover__close-button")}
        size="sm"
        aria-controls={id}
        aria-label="Close popover"
        onClick={handlerAll(onClick, (ev) => {
          ev.stopPropagation()
          onClose?.()
        })}
        __css={styles.closeButton}
        {...rest}
      />
    )
  },
)

PopoverCloseButton.displayName = "PopoverCloseButton"
PopoverCloseButton.__ui__ = "PopoverCloseButton"
