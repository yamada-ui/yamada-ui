import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MailCheck as LucideMailCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MailCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMailCheckIcon} {...props} />,
)

/**
 * @deprecated Use `MailCheckIcon` instead.
 */
export const MailCheck = MailCheckIcon
