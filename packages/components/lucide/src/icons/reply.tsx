import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Reply as LucideReplyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReplyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReplyIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideReplyIcon} {...props} />
))

/**
 * @deprecated Use `ReplyIcon` instead.
 */
export const Reply = ReplyIcon
