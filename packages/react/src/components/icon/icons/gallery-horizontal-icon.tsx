import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GalleryHorizontal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GalleryHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryHorizontalIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={GalleryHorizontal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
