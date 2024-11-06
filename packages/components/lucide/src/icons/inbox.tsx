import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Inbox as LucideInboxIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `InboxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const InboxIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideInboxIcon} {...props} />
))

/**
 * @deprecated Use `InboxIcon` instead.
 */
export const Inbox = InboxIcon
