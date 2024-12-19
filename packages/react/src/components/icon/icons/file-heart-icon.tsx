import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileHeart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileHeartIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileHeart} className={cx("ui-lucide-icon", className)} {...rest} />
)
