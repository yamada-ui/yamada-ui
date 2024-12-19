import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Album } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlbumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlbumIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Album} className={cx("ui-lucide-icon", className)} {...rest} />
)
