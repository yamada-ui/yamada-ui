import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { MessageSquare as OriginalMessageSquare } from "lucide-react"

/**
 * `MessageSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalMessageSquare}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `MessageSquare` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MessageSquareIcon` instead.
 */
export const MessageSquare = MessageSquareIcon
