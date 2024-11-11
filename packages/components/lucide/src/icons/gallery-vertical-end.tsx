import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { GalleryVerticalEnd as OriginalGalleryVerticalEnd } from "lucide-react"

/**
 * `GalleryVerticalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryVerticalEndIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalGalleryVerticalEnd} {...props} />,
)

/**
 * `GalleryVerticalEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `GalleryVerticalEndIcon` instead.
 */
export const GalleryVerticalEnd = GalleryVerticalEndIcon
