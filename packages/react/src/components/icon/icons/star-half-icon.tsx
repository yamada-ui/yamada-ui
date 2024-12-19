import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { StarHalf } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `StarHalfIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StarHalfIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={StarHalf} className={cx("ui-lucide-icon", className)} {...rest} />
)
