import { forwardRef } from "@yamada-ui/core"
import { UtensilsCrossed as UtensilsCrossedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UtensilsCrossedProps = LucideIconProps

/**
 * `UtensilsCrossed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UtensilsCrossed = forwardRef<UtensilsCrossedProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={UtensilsCrossedIcon} {...props} />,
)
