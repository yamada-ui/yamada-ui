import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GalleryThumbnails } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GalleryThumbnailsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryThumbnailsIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={GalleryThumbnails}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
