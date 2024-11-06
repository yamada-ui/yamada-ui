import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GalleryVerticalEnd as LucideGalleryVerticalEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GalleryVerticalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryVerticalEndIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGalleryVerticalEndIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GalleryVerticalEndIcon` instead.
 */
export const GalleryVerticalEnd = GalleryVerticalEndIcon
