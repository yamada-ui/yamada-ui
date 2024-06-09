import { forwardRef } from "@yamada-ui/core"
import { Mailbox as MailboxIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MailboxProps = LucideIconProps

/**
 * `Mailbox` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Mailbox = forwardRef<MailboxProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MailboxIcon} {...props} />
))
