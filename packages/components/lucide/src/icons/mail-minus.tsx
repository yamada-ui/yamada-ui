import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MailMinus as LucideMailMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MailMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMailMinusIcon} {...props} />,
)

/**
 * @deprecated Use `MailMinusIcon` instead.
 */
export const MailMinus = MailMinusIcon
