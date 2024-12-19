import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GalleryVerticalEnd } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GalleryVerticalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryVerticalEndIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={GalleryVerticalEnd}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
