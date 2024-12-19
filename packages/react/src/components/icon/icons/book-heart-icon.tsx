import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookHeart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookHeartIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BookHeart} className={cx("ui-lucide-icon", className)} {...rest} />
)
