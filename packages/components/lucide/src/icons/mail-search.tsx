import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MailSearch as LucideMailSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MailSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailSearchIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMailSearchIcon} {...props} />,
)

/**
 * @deprecated Use `MailSearchIcon` instead.
 */
export const MailSearch = MailSearchIcon
