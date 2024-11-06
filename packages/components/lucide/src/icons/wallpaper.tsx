import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Wallpaper as LucideWallpaperIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WallpaperIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WallpaperIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideWallpaperIcon} {...props} />,
)

/**
 * @deprecated Use `WallpaperIcon` instead.
 */
export const Wallpaper = WallpaperIcon
