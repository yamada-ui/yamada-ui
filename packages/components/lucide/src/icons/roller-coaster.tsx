import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RollerCoaster as LucideRollerCoasterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RollerCoasterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RollerCoasterIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideRollerCoasterIcon} {...props} />
  ),
)

/**
 * @deprecated Use `RollerCoasterIcon` instead.
 */
export const RollerCoaster = RollerCoasterIcon
