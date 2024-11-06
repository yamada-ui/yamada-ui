import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Subscript as LucideSubscriptIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SubscriptIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SubscriptIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSubscriptIcon} {...props} />,
)

/**
 * @deprecated Use `SubscriptIcon` instead.
 */
export const Subscript = SubscriptIcon
