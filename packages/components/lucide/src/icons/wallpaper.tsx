import { forwardRef } from "@yamada-ui/core"
import { Wallpaper as WallpaperIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WallpaperProps = LucideIconProps

/**
 * `Wallpaper` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Wallpaper = forwardRef<WallpaperProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WallpaperIcon} {...props} />
))
