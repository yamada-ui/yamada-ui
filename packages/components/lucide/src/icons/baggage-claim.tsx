import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BaggageClaim as LucideBaggageClaimIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BaggageClaimIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BaggageClaimIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBaggageClaimIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BaggageClaimIcon` instead.
 */
export const BaggageClaim = BaggageClaimIcon
