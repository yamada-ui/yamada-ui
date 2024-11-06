import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BrickWall as LucideBrickWallIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BrickWallIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BrickWallIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBrickWallIcon} {...props} />,
)

/**
 * @deprecated Use `BrickWallIcon` instead.
 */
export const BrickWall = BrickWallIcon
