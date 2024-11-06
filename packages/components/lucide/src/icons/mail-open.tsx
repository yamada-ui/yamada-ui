import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MailOpen as LucideMailOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MailOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailOpenIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMailOpenIcon} {...props} />
))

/**
 * @deprecated Use `MailOpenIcon` instead.
 */
export const MailOpen = MailOpenIcon
