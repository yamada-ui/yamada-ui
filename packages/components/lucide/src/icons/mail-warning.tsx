import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MailWarning as LucideMailWarningIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MailWarningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailWarningIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMailWarningIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MailWarningIcon` instead.
 */
export const MailWarning = MailWarningIcon
