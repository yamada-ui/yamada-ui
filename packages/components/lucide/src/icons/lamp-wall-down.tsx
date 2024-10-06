import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LampWallDown as LampWallDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LampWallDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampWallDown = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LampWallDownIcon} {...props} />
))
