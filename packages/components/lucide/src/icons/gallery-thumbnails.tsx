import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GalleryThumbnails as LucideGalleryThumbnailsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GalleryThumbnailsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryThumbnailsIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGalleryThumbnailsIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GalleryThumbnailsIcon` instead.
 */
export const GalleryThumbnails = GalleryThumbnailsIcon
