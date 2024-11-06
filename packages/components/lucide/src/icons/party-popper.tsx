import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PartyPopper as LucidePartyPopperIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PartyPopperIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PartyPopperIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePartyPopperIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PartyPopperIcon` instead.
 */
export const PartyPopper = PartyPopperIcon
