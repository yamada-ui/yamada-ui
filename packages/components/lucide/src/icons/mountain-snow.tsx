import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MountainSnow as LucideMountainSnowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MountainSnowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MountainSnowIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMountainSnowIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MountainSnowIcon` instead.
 */
export const MountainSnow = MountainSnowIcon
