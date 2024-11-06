import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PersonStanding as LucidePersonStandingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PersonStandingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PersonStandingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePersonStandingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PersonStandingIcon` instead.
 */
export const PersonStanding = PersonStandingIcon
