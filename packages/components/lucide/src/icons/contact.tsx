import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Contact as LucideContactIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ContactIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ContactIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideContactIcon} {...props} />
))

/**
 * @deprecated Use `ContactIcon` instead.
 */
export const Contact = ContactIcon
