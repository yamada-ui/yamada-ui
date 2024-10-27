import type { CloseButtonProps } from "@yamada-ui/close-button"
import type { CSSUIObject } from "@yamada-ui/core"
import { CloseButton } from "@yamada-ui/close-button"
import { forwardRef } from "@yamada-ui/core"
import { cx, handlerAll } from "@yamada-ui/utils"
import { usePopover } from "./popover"

export interface PopoverCloseButtonProps extends CloseButtonProps {}

export const PopoverCloseButton = forwardRef<PopoverCloseButtonProps, "button">(
  ({ onClick, ...rest }, ref) => {
    const { id, styles, onClose } = usePopover()

    const css: CSSUIObject = {
      position: "absolute",
      ...styles.closeButton,
    }

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
        __css={css}
        {...rest}
      />
    )
  },
)

PopoverCloseButton.displayName = "PopoverCloseButton"
PopoverCloseButton.__ui__ = "PopoverCloseButton"
