import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HandHeart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HandHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandHeartIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={HandHeart} className={cx("ui-lucide-icon", className)} {...rest} />
)
