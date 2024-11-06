import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MailX as LucideMailXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MailXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMailXIcon} {...props} />
))

/**
 * @deprecated Use `MailXIcon` instead.
 */
export const MailX = MailXIcon
