import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { MessageSquareDashed as OriginalMessageSquareDashed } from "lucide-react"

/**
 * `MessageSquareDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareDashedIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalMessageSquareDashed} {...props} />
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
