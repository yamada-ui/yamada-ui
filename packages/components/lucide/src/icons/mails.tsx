import { forwardRef } from "@yamada-ui/core"
import { Mails as MailsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MailsProps = LucideIconProps

/**
 * `Mails` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Mails = forwardRef<MailsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MailsIcon} {...props} />
))
