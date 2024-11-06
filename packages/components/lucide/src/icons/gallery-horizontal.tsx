import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GalleryHorizontal as LucideGalleryHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GalleryHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryHorizontalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGalleryHorizontalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GalleryHorizontalIcon` instead.
 */
export const GalleryHorizontal = GalleryHorizontalIcon
