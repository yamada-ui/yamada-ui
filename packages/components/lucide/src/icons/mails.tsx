import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Mails as LucideMailsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MailsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailsIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMailsIcon} {...props} />
))

/**
 * @deprecated Use `MailsIcon` instead.
 */
export const Mails = MailsIcon
