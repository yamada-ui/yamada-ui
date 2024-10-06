import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BaggageClaim as BaggageClaimIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BaggageClaim` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BaggageClaim = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BaggageClaimIcon} {...props} />
))
