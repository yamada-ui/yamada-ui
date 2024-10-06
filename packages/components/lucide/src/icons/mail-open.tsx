import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MailOpen as MailOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MailOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailOpen = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MailOpenIcon} {...props} />
))
