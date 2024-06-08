import { forwardRef } from "@yamada-ui/core"
import { MailCheck as MailCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MailCheckProps = LucideIconProps

/**
 * `MailCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailCheck = forwardRef<MailCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MailCheckIcon} {...props} />
))
