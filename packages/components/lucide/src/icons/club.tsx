import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Club as LucideClubIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClubIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClubIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideClubIcon} {...props} />
))

/**
 * @deprecated Use `ClubIcon` instead.
 */
export const Club = ClubIcon
