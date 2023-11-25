import type { CloseButtonProps } from "@yamada-ui/close-button"
import { CloseButton } from "@yamada-ui/close-button"
import type { CSSUIObject } from "@yamada-ui/core"
import { forwardRef } from "@yamada-ui/core"
import { cx, handlerAll } from "@yamada-ui/utils"
import { usePopover } from "./popover"

export type PopoverCloseButtonProps = CloseButtonProps

export const PopoverCloseButton = forwardRef<PopoverCloseButtonProps, "button">(
  ({ onClick, ...rest }, ref) => {
    const { styles, onClose } = usePopover()

    const css: CSSUIObject = {
      position: "absolute",
      ...styles.closeButton,
    }

    return (
      <CloseButton
        ref={ref}
        className={cx("ui-popover__close-button")}
        __css={css}
        onClick={handlerAll(onClick, (ev) => {
          ev.stopPropagation()
          onClose?.()
        })}
        size="sm"
        {...rest}
      />
    )
  },
)
