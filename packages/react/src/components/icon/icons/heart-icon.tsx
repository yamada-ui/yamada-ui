import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Heart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Heart} className={cx("ui-lucide-icon", className)} {...rest} />
)