import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Mailbox as LucideMailboxIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MailboxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailboxIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMailboxIcon} {...props} />
))

/**
 * @deprecated Use `MailboxIcon` instead.
 */
export const Mailbox = MailboxIcon
