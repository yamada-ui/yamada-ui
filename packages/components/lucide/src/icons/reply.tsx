import { forwardRef } from "@yamada-ui/core"
import { Reply as ReplyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ReplyProps = LucideIconProps

/**
 * `Reply` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Reply = forwardRef<ReplyProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ReplyIcon} {...props} />
))
