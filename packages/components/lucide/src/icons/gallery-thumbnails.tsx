import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { GalleryThumbnails as OriginalGalleryThumbnails } from "lucide-react"

/**
 * `GalleryThumbnailsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryThumbnailsIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalGalleryThumbnails} {...props} />,
)

/**
 * `GalleryThumbnails` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `GalleryThumbnailsIcon` instead.
 */
export const GalleryThumbnails = GalleryThumbnailsIcon
