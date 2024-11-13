import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { MessageSquareDashed as OriginalMessageSquareDashed } from "lucide-react"

/**
 * `MessageSquareDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareDashedIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalMessageSquareDashed}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `MessageSquareDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MessageSquareDashedIcon` instead.
 */
export const MessageSquareDashed = MessageSquareDashedIcon
