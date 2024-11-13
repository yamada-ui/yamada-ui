import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { TextCursor as OriginalTextCursor } from "lucide-react"

/**
 * `TextCursorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TextCursorIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalTextCursor}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `TextCursor` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `TextCursorIcon` instead.
 */
export const TextCursor = TextCursorIcon
