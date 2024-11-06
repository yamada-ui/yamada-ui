import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Mail as LucideMailIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MailIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMailIcon} {...props} />
))

/**
 * @deprecated Use `MailIcon` instead.
 */
export const Mail = MailIcon
