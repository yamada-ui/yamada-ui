import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { GalleryHorizontalEnd as OriginalGalleryHorizontalEnd } from "lucide-react"

/**
 * `GalleryHorizontalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryHorizontalEndIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalGalleryHorizontalEnd} {...props} />
  ),
)

/**
 * `GalleryHorizontalEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `GalleryHorizontalEndIcon` instead.
 */
export const GalleryHorizontalEnd = GalleryHorizontalEndIcon
