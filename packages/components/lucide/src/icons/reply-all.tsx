import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ReplyAll as LucideReplyAllIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReplyAllIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReplyAllIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideReplyAllIcon} {...props} />
))

/**
 * @deprecated Use `ReplyAllIcon` instead.
 */
export const ReplyAll = ReplyAllIcon
