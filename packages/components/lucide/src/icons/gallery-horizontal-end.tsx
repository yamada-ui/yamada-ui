import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GalleryHorizontalEnd as LucideGalleryHorizontalEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GalleryHorizontalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryHorizontalEndIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGalleryHorizontalEndIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GalleryHorizontalEndIcon` instead.
 */
export const GalleryHorizontalEnd = GalleryHorizontalEndIcon
