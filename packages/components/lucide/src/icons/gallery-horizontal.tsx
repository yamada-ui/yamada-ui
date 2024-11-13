import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { GalleryHorizontal as OriginalGalleryHorizontal } from "lucide-react"

/**
 * `GalleryHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryHorizontalIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalGalleryHorizontal}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `GalleryHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `GalleryHorizontalIcon` instead.
 */
export const GalleryHorizontal = GalleryHorizontalIcon
