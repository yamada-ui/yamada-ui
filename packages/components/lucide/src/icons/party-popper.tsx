import { forwardRef } from "@yamada-ui/core"
import { PartyPopper as PartyPopperIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PartyPopperProps = LucideIconProps

/**
 * `PartyPopper` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PartyPopper = forwardRef<PartyPopperProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PartyPopperIcon} {...props} />
))
