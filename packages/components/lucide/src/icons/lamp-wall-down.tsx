import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LampWallDown as LucideLampWallDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LampWallDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampWallDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideLampWallDownIcon} {...props} />
  ),
)

/**
 * @deprecated Use `LampWallDownIcon` instead.
 */
export const LampWallDown = LampWallDownIcon
