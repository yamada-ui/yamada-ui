import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { MessageCircleHeart as OriginalMessageCircleHeart } from "lucide-react"

/**
 * `MessageCircleHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleHeartIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalMessageCircleHeart} {...props} />,
)

/**
 * `MessageCircleHeart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MessageCircleHeartIcon` instead.
 */
export const MessageCircleHeart = MessageCircleHeartIcon
