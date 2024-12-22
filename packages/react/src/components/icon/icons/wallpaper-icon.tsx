import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Wallpaper } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WallpaperIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WallpaperIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Wallpaper} className={cx("ui-lucide-icon", className)} {...rest} />
)