import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MessageCircleCode as LucideMessageCircleCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MessageCircleCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleCodeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMessageCircleCodeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MessageCircleCodeIcon` instead.
 */
export const MessageCircleCode = MessageCircleCodeIcon
