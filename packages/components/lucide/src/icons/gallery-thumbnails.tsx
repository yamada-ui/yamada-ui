import { forwardRef } from "@yamada-ui/core"
import { GalleryThumbnails as GalleryThumbnailsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GalleryThumbnailsProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryThumbnails = forwardRef<GalleryThumbnailsProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={GalleryThumbnailsIcon} {...props} />
  ),
)
