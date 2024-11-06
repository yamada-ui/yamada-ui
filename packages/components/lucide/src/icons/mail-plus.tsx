import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MailPlus as LucideMailPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MailPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailPlusIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMailPlusIcon} {...props} />
))

/**
 * @deprecated Use `MailPlusIcon` instead.
 */
export const MailPlus = MailPlusIcon
