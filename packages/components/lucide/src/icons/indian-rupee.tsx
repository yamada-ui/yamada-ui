import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { IndianRupee as LucideIndianRupeeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `IndianRupeeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IndianRupeeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideIndianRupeeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `IndianRupeeIcon` instead.
 */
export const IndianRupee = IndianRupeeIcon
