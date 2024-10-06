import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GalleryThumbnails as GalleryThumbnailsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GalleryThumbnails` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryThumbnails = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={GalleryThumbnailsIcon} {...props} />
  ),
)
