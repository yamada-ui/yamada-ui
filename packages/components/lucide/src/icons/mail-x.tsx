import { forwardRef } from "@yamada-ui/core"
import { MailX as MailXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MailXProps = LucideIconProps

/**
 * `MailX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailX = forwardRef<MailXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MailXIcon} {...props} />
))
